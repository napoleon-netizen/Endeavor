import type { Metadata } from "next";

import LegalPage from "../_components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | Endeavor Cleaning Services Dubai",
  description: "The terms that apply when you request, book or receive cleaning services from Endeavor Cleaning Services in Dubai.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated="21 October 2026" intro={`These terms apply to every quotation, booking and service provided by ${company.name}. By requesting or accepting a service you agree to them. Please read them together with our Booking and Cancellation Policy and Privacy Policy.`}>
      <h2>1. Quotations and confirmation</h2>
      <p>Prices shown on this website are indicative starting prices. A request made through the website or WhatsApp is provisional until Endeavor confirms the service, scope, price, VAT status, date and access arrangements in writing (including WhatsApp). Quotation-only services are priced after a site assessment.</p>

      <h2>2. Scope of work</h2>
      <p>The confirmed quotation or booking message defines what is included. Items listed as excluded on the relevant service page, or not expressly included in the confirmation, are not part of the service. Additional work requested on the day may be quoted separately.</p>

      <h2>3. Access and preparation</h2>
      <p>The customer is responsible for providing safe access to the property and the areas to be cleaned at the agreed time, including building or community permits where required, and for the preparation steps described on the relevant service page (for example moving fragile items or disclosing known faults).</p>

      <h2>4. Results and limitations</h2>
      <p>Cleaning removes dirt, dust and buildup from the surfaces treated. It does not repair damage, restore worn or etched materials, or resolve mechanical, plumbing or electrical faults. Results depend on the material, age, condition and previous treatment of the surfaces, as described on each service page.</p>

      <h2>5. Payment</h2>
      <p>Payment is due as stated in the confirmation, normally on completion of the service unless agreed otherwise. Prices are in UAE dirhams. VAT is applied where applicable.</p>

      <h2>6. Liability</h2>
      <p>Endeavor is insured and takes reasonable care of your property. Any concern about the service or property must be reported within 24 hours of completion so that it can be inspected. Our liability is limited to re-performing the affected part of the service or, where that is not practical, refunding the amount paid for it. We are not liable for pre-existing damage, inaccessible areas, or items not disclosed before the visit.</p>

      <h2>7. Health, safety and conduct</h2>
      <p>Our team may pause or decline work where conditions are unsafe, access is unavailable, or the scope differs materially from what was confirmed. Customers are asked to keep children and pets away from work areas during the visit.</p>

      <h2>8. Website content</h2>
      <p>Content on this website is provided for general information and may be updated without notice. Logos of client organisations are shown with their permission or as a factual record of past work and do not imply endorsement.</p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute shall be subject to the courts of Dubai.</p>

      <h2>Contact</h2>
      <p>{company.name}, {company.addressLines.join(", ")}. {company.phoneMobile} · <a href={`mailto:${company.email}`}>{company.email}</a></p>
    </LegalPage>
  );
}
