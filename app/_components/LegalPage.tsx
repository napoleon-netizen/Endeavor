import type { ReactNode } from "react";
import Link from "next/link";

import SiteFrame from "./SiteFrame";

export default function LegalPage({ title, updated, intro, children }: { title: string; updated: string; intro: string; children: ReactNode }) {
  return (
    <SiteFrame>
      <main className="inner-page">
        <div className="inner-shell breadcrumbs">
          <Link href="/">Home</Link><span>/</span><strong>{title}</strong>
        </div>
        <section className="inner-shell legal-page">
          <span className="page-eyebrow">Legal</span>
          <h1>{title}</h1>
          <p className="legal-page__meta">Last updated: {updated}</p>
          <p className="legal-page__intro">{intro}</p>
          <div className="legal-page__body">{children}</div>
        </section>
      </main>
    </SiteFrame>
  );
}
