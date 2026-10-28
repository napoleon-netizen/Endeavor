import { NextResponse } from "next/server";

/**
 * Emails every booking / quote request to the shared ECS mailbox
 * (bookings@endeavorclean.com — a Google Group with Alem + backup), so there is
 * a permanent record independent of WhatsApp. Sends via Resend's HTTP API.
 *
 * Env (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   — from resend.com (Endeavor account)
 *   BOOKING_TO       — default bookings@endeavorclean.com
 *   BOOKING_FROM     — default "Endeavor Website <bookings@endeavorclean.com>"
 */

export const runtime = "nodejs";

const MAX_FIELD = 2000;
const RATE: Map<string, { count: number; reset: number }> = new Map();

function clean(value: unknown): string {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, MAX_FIELD);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function limited(ip: string) {
  const now = Date.now();
  const entry = RATE.get(ip);
  if (!entry || entry.reset < now) {
    RATE.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 8;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet (e.g. preview): report cleanly, WhatsApp flow still works.
    return NextResponse.json({ ok: false, reason: "email-not-configured" }, { status: 503 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, reason: "rate-limited" }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad-json" }, { status: 400 });
  }

  // Honeypot: real users never fill this.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const name = clean(body.name);
  const mobile = clean(body.mobile);
  if (!name || !mobile) return NextResponse.json({ ok: false, reason: "missing-fields" }, { status: 400 });

  const requestType = clean(body.requestType) || "Booking request";
  const service = clean(body.service) || "General enquiry";
  const pkg = clean(body.package) || "Please advise";
  const email = clean(body.email);
  const rows: Array<[string, string]> = [
    ["Request type", requestType],
    ["Service", service],
    ["Package", pkg],
    ["Quantity / units", clean(body.quantity) || "Not specified"],
    ...((Array.isArray(body.extra) ? body.extra : []) as Array<{ label?: unknown; value?: unknown }>)
      .slice(0, 20)
      .map((f): [string, string] => [clean(f.label), clean(f.value) || "Not specified"])
      .filter(([label]) => label),
    ["Name", name],
    ["Mobile", mobile],
    ["Email", email || "Not provided"],
    ["Area", clean(body.location) || "Not specified"],
    ["Property type", clean(body.propertyType) || "Not specified"],
    ["Preferred date", clean(body.date) || "Not specified"],
    ["Preferred time", clean(body.time) || "Not specified"],
    ["Notes", clean(body.notes) || "None"],
    ["Page", clean(body.page) || "/book"],
    ["Received", new Date().toLocaleString("en-GB", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" }) + " (Dubai)"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#1d1d2b;font-size:14px">
<h2 style="color:#1b1854;margin:0 0 12px">${escapeHtml(requestType)} — ${escapeHtml(service)}</h2>
<table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
${rows.map(([k, v]) => `<tr><td style="color:#666;border-bottom:1px solid #eee;white-space:nowrap">${escapeHtml(k)}</td><td style="border-bottom:1px solid #eee"><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
</table>
<p style="color:#888;font-size:12px;margin-top:16px">Sent automatically from endeavorclean.com. The customer was also directed to WhatsApp with the same details.</p>
</body></html>`;

  const to = process.env.BOOKING_TO || "bookings@endeavorclean.com";
  const from = process.env.BOOKING_FROM || "Endeavor Website <bookings@endeavorclean.com>";
  const subject = `${requestType}: ${service} — ${name} (${mobile})`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      html,
      ...(email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? { reply_to: email } : {}),
      tags: [{ name: "type", value: requestType.toLowerCase().includes("quote") ? "quote" : "booking" }],
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return NextResponse.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
