import type { Metadata } from "next";

import LegalPage from "../_components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Booking and Cancellation Policy | Endeavor Cleaning Services Dubai",
  description: "How bookings are confirmed, rescheduled and cancelled with Endeavor Cleaning Services in Dubai.",
  alternates: { canonical: "/booking-policy" },
};

export default function BookingPolicyPage() {
  return (
    <LegalPage title="Booking and Cancellation Policy" updated="21 October 2026" intro="We aim to make booking simple and fair for both sides. This policy explains how a request becomes a confirmed appointment and what happens if plans change.">
      <h2>How a booking is confirmed</h2>
      <ol>
        <li>You send a request through the website form, WhatsApp or by phone, with the service, option, property details and preferred date and time.</li>
        <li>Endeavor reviews the request and confirms the price, scope, VAT status, team availability and access requirements.</li>
        <li>Your appointment is confirmed only when you receive a written confirmation (including by WhatsApp). Until then the request is provisional.</li>
      </ol>

      <h2>Rescheduling</h2>
      <p>You may reschedule a confirmed appointment free of charge with at least 24 hours' notice. We will offer the next available slot that suits you. We may also need to reschedule in exceptional circumstances (for example severe weather for exterior work) and will contact you as early as possible.</p>

      <h2>Cancellation</h2>
      <ul>
        <li><strong>More than 24 hours before</strong> the appointment: free of charge.</li>
        <li><strong>Less than 24 hours before</strong>, or if our team cannot access the property at the agreed time: a call-out charge may apply to cover the team's time and travel. The amount will be stated in your confirmation.</li>
      </ul>

      <h2>Access and delays</h2>
      <p>Please make sure the property, parking and any building permits are arranged for the confirmed time. If access is delayed by more than 30 minutes we may need to shorten the visit or reschedule.</p>

      <h2>Changes to scope on the day</h2>
      <p>If the property or the work differs materially from what was confirmed (for example more units, a larger area or heavier soiling), our team will explain the difference and agree any change in price with you before continuing.</p>

      <h2>Contact us</h2>
      <p>To reschedule or cancel, message us on <a href={company.whatsappHref}>WhatsApp</a> or call <a href={company.phoneMobileHref}>{company.phoneMobile}</a>.</p>
    </LegalPage>
  );
}
