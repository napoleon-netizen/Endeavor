export const partnerColumns = [
  {
    name: "Interior Cleaning",
    copy: "Inside the home or office: AC systems, deep cleaning, sofas, mattresses, carpets, kitchens, bathrooms and marble floors.",
    image: "/assets/photos/team-lounge-sm.webp",
    href: "/services?category=interior",
    services: ["AC Cleaning", "Deep Cleaning", "Sofa & Mattress", "Carpet Shampooing", "Kitchen & Bathroom", "Marble Polishing"],
  },
  {
    name: "Exterior Cleaning",
    copy: "Outside and on the roof: water tanks, external windows and façades, car parks and post-construction clean-ups.",
    image: "/assets/photos/tank-rooftop-sm.webp",
    href: "/services?category=exterior",
    services: ["Water Tank Cleaning", "Window & Façade", "Post-Construction", "Car Parks & Common Areas"],
  },
  {
    name: "Commercial Cleaning",
    copy: "Planned cleaning for offices, facilities and customer-facing spaces, scheduled around access and operating hours.",
    image: "/assets/photos/commercial-parking-sm.webp",
    href: "/commercial",
    services: ["Offices", "Retail & Clinics", "Facilities", "Kitchen Ducts", "Annual Contracts"],
  },
];

export const popularServices = [
  {
    name: "AC Cleaning",
    copy: "FreshVent, PureFlow or TotalAir Clean — choose the right level of cleaning for each AC unit.",
    image: "/assets/photos/ac-duct-hose-sm.webp",
    icon: "air",
    href: "/services/ac-cleaning",
  },
  {
    name: "Water Tank Cleaning",
    copy: "Draining, scrubbing and disinfection sized to your tank, with photographs on completion.",
    image: "/assets/photos/tank-rooftop-sm.webp",
    icon: "water",
    href: "/services/water-tank-cleaning",
  },
  {
    name: "Specialized Deep Cleaning",
    copy: "Room-by-room deep cleaning for apartments and villas, furnished or unfurnished.",
    image: "/assets/photos/kitchen-hob-sm.webp",
    icon: "spray",
    href: "/services/specialized-deep-cleaning",
  },
  {
    name: "Sofa Cleaning",
    copy: "Deep extraction cleaning matched to your fabric, with leather care where needed.",
    image: "/assets/photos/sofa-extraction-sm.webp",
    icon: "sofa",
    href: "/services/sofa-cleaning",
  },
  {
    name: "Mattress Cleaning",
    copy: "Deep extraction for accumulated dust, everyday dirt and treatable marks, matched to the mattress material.",
    image: "/assets/photos/sofa-nozzle-sm.webp",
    icon: "bed",
    href: "/services/mattress-cleaning",
  },
  {
    name: "Carpet Shampooing",
    copy: "Shampooing and extraction for fitted and loose carpets, matched to the material and condition.",
    image: "/assets/photos/carpet-machine-sm.webp",
    icon: "carpet",
    href: "/services/carpet-cleaning",
  },
] as const;

export function Chevron() {
  return <span className="chevron" aria-hidden="true" />;
}

export function PopularIcon({ kind }: { kind: (typeof popularServices)[number]["icon"] }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (kind === "air") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M8 12h24v15H8zM12 16h16M12 20h16M12 24h10" />
        <path {...common} d="M14 31c2-2 4-2 6 0s4 2 6 0" />
      </svg>
    );
  }

  if (kind === "water") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M20 7c4 7 9 11 9 17a9 9 0 0 1-18 0c0-6 5-10 9-17Z" />
        <path {...common} d="M16 25c1 2 3 3 5 3" />
      </svg>
    );
  }

  if (kind === "spray") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M15 15h8v18a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
        <path {...common} d="M17 15v-3h4v3M25 12h4l-2 3h3l-6 6" />
      </svg>
    );
  }

  if (kind === "bed") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M7 26v-9a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v9M7 26h26M7 26v4M33 26v4" />
        <path {...common} d="M12 14v-3h16v3M12 19h6M22 19h6" />
      </svg>
    );
  }

  if (kind === "carpet") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M9 12h22v16H9z" />
        <path {...common} d="M9 12c3 0 3 4 0 4M31 12c-3 0-3 4 0 4M9 24c3 0 3 4 0 4M31 24c-3 0-3 4 0 4M15 18h10M15 22h10" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path {...common} d="M9 24v-4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v4M7 24h26v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2ZM9 29v3M31 29v3" />
    </svg>
  );
}

