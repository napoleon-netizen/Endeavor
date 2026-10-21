import type { Metadata } from "next";

import LegalPage from "../_components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Endeavor Cleaning Services Dubai",
  description: "How Endeavor Cleaning Services collects, uses and protects your personal information when you use our website, WhatsApp and booking services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 October 2026" intro={`${company.name} ("Endeavor", "we", "us") respects your privacy. This policy explains what personal information we collect, how we use it and the choices you have. It applies to this website, our WhatsApp and telephone channels, and the services we deliver in Dubai.`}>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Contact and booking details</strong> you give us: name, mobile number, email address, property location and type, the service and option requested, preferred dates and any notes or photographs you choose to share.</li>
        <li><strong>Communications</strong> with us by WhatsApp, phone, email or our website forms.</li>
        <li><strong>Technical data</strong> collected automatically when you browse: IP address, device and browser type, pages viewed and approximate location, via cookies and similar tools (see Cookies below).</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to enquiries, prepare quotations and confirm bookings.</li>
        <li>To plan and deliver the service, including arranging site access and sending appointment reminders.</li>
        <li>To issue invoices and keep records required by UAE law.</li>
        <li>To improve our website and services, and to measure the performance of our marketing.</li>
        <li>With your consent, to send occasional offers or service reminders. You can opt out at any time.</li>
      </ul>

      <h2>WhatsApp and third parties</h2>
      <p>When you use our WhatsApp buttons, your message is handled by WhatsApp (Meta Platforms) under its own privacy policy. We use trusted service providers for website hosting, analytics and communications; they process data only on our instructions. We do not sell your personal information.</p>

      <h2>Cookies and analytics</h2>
      <p>We use essential cookies to run the website and analytics cookies (such as Google Analytics) to understand how visitors use it. You can control cookies through your browser settings; disabling them may affect some features.</p>

      <h2>How long we keep information</h2>
      <p>We keep booking and invoicing records for as long as needed to provide the service and to meet legal and accounting obligations in the UAE, after which they are deleted or anonymised.</p>

      <h2>Your rights</h2>
      <p>You may ask us to access, correct or delete the personal information we hold about you, or to stop sending you marketing messages. Contact us at <a href={`mailto:${company.email}`}>{company.email}</a> or on <a href={company.whatsappHref}>WhatsApp</a>.</p>

      <h2>Security</h2>
      <p>We take reasonable technical and organisational measures to protect your information, including secure hosting and restricted access to booking records.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last revised.</p>

      <h2>Contact</h2>
      <p>{company.name}<br />{company.addressLines.join(", ")}<br />{company.phoneMobile} · <a href={`mailto:${company.email}`}>{company.email}</a></p>
    </LegalPage>
  );
}
