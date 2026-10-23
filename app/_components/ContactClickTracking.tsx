"use client";

import { useEffect } from "react";

import { track } from "@/lib/tracking";

/**
 * Pushes explicit conversion events for every WhatsApp (wa.me) and call (tel:)
 * link on the site, so GTM triggers can match on `event` instead of CSS
 * selectors. Covers current and future buttons from one place.
 */
export default function ContactClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const label = (link.getAttribute("aria-label") || link.textContent || "").trim().slice(0, 80);
      const section = link.closest("header") ? "header" : link.closest("footer") ? "footer" : link.closest(".floating-whatsapp") ? "floating" : "content";
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
        track({ event: "whatsapp_click", link_url: href.split("?")[0], link_text: label, link_section: section, page_path: window.location.pathname });
      } else if (/^tel:/i.test(href)) {
        track({ event: "call_click", link_url: href, link_text: label, link_section: section, page_path: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
