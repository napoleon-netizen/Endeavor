"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import type { ServicePackage } from "@/lib/services";

type PackageOptionsProps = {
  packages: ServicePackage[];
  bookingQuery: { service: string; mode: string };
  ctaLabel?: string;
  noFeatured?: boolean;
};

function packageKey(servicePackage: ServicePackage) {
  return servicePackage.id ?? servicePackage.name;
}

export default function PackageOptions({ packages, bookingQuery, ctaLabel, noFeatured }: PackageOptionsProps) {
  const [openPackage, setOpenPackage] = useState<ServicePackage | null>(null);
  const defaultLabel = ctaLabel ?? "Select This Option";
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const openPanel = (servicePackage: ServicePackage, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenPackage(servicePackage);
  };
  const closePanel = () => setOpenPackage(null);

  // Dialog behaviour: move focus into the panel, keep Tab inside it, close on
  // Escape, and return focus to the "View More" button that opened it.
  useEffect(() => {
    if (!openPackage) {
      triggerRef.current?.focus();
      triggerRef.current = null;
      return;
    }
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenPackage(null);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openPackage]);

  return (
    <>
      <div className="package-option-grid">
        {packages.map((servicePackage, index) => {
          const isFeatured = !noFeatured && index === packages.length - 1;
          const label = servicePackage.bookLabel ?? defaultLabel;
          return (
            <article className={isFeatured ? "package-option package-option--featured" : "package-option"} key={packageKey(servicePackage)}>
              {servicePackage.image ? (
                <div className="package-option__image"><img src={servicePackage.image} alt="" /></div>
              ) : null}
              <span className="package-option__badge">{`Option ${index + 1}`}</span>
              <h3>{servicePackage.name}</h3>
              {servicePackage.subtitle ? <p className="package-option__subtitle">{servicePackage.subtitle}</p> : null}
              {servicePackage.price ? <strong className="package-option__price">{servicePackage.price}</strong> : null}
              <div className="package-option__actions">
                <Link className="package-option__select" href={{ pathname: "/book", query: { ...bookingQuery, package: packageKey(servicePackage) } }}>
                  {label}
                </Link>
                <button
                  type="button"
                  className="package-option__more"
                  aria-haspopup="dialog"
                  onClick={(event) => openPanel(servicePackage, event.currentTarget)}
                >
                  View More <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className={`package-panel-overlay ${openPackage ? "package-panel-overlay--open" : ""}`} onClick={closePanel} aria-hidden={!openPackage}>
        <aside
          className="package-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={openPackage ? titleId : undefined}
          aria-hidden={!openPackage}
          onClick={(event) => event.stopPropagation()}
        >
          {openPackage ? (
            <>
              <button type="button" className="package-panel__close" ref={closeRef} onClick={closePanel} aria-label={`Close ${openPackage.name} details`}>
                ✕
              </button>
              {openPackage.image ? (
                <div className="package-panel__image"><img src={openPackage.image} alt="" /></div>
              ) : null}
              <h3 id={titleId}>{openPackage.name}</h3>
              {openPackage.subtitle ? <p className="package-panel__subtitle">{openPackage.subtitle}</p> : null}
              {openPackage.price ? <strong className="package-panel__price">{openPackage.price}</strong> : null}
              <p>{openPackage.note}</p>
              <Link
                className="package-panel__cta"
                href={{ pathname: "/book", query: { ...bookingQuery, package: packageKey(openPackage) } }}
              >
                {openPackage.bookLabel ?? defaultLabel}
              </Link>
            </>
          ) : null}
        </aside>
      </div>
    </>
  );
}
