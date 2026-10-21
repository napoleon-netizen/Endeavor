export const partnerColumns = [
  {
    name: "Residential Cleaning",
    copy: "Detailed services for apartments and villas, from focused furniture care to complete property cleaning.",
    image: "/assets/photos/deep-covering-sm.webp",
    href: "/services?category=property-cleaning",
  },
  {
    name: "Commercial Cleaning",
    copy: "Planned cleaning for offices, facilities and customer-facing spaces around access and operating needs.",
    image: "/assets/photos/commercial-parking-sm.webp",
    href: "/commercial",
  },
  {
    name: "Specialist Services",
    copy: "AC systems, water tanks, façades, marble and other work that needs a clearly defined scope.",
    image: "/assets/photos/tank-rooftop-sm.webp",
    href: "/services",
  },
];

export const popularServices = [
  {
    name: "AC Cleaning",
    copy: "Compare Endeavor service levels and request the right option for each AC unit.",
    image: "/assets/photos/ac-duct-hose-sm.webp",
    icon: "air",
    href: "/services/ac-cleaning",
  },
  {
    name: "Water Tank Cleaning",
    copy: "Arrange tank cleaning around capacity, tank type, property and access conditions.",
    image: "/assets/photos/tank-rooftop-sm.webp",
    icon: "water",
    href: "/services/water-tank-cleaning",
  },
  {
    name: "Specialized Deep Cleaning",
    copy: "Build a room-by-room cleaning plan around property size, furnishing and condition.",
    image: "/assets/photos/kitchen-hob-sm.webp",
    icon: "spray",
    href: "/services/specialized-deep-cleaning",
  },
  {
    name: "Move-In/Move-Out Cleaning",
    copy: "Prepare a property for arrival or handover with an agreed cleaning checklist.",
    image: "/assets/photos/deep-sheeting-sm.webp",
    icon: "box",
    href: "/services/move-in-move-out-cleaning",
  },
  {
    name: "Carpet Shampooing",
    copy: "Choose a suitable approach for fitted carpet or loose rugs based on material and area.",
    image: "/assets/photos/carpet-machine-sm.webp",
    icon: "sofa",
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

  if (kind === "box") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M8 14 20 8l12 6-12 6ZM8 14v13l12 6 12-6V14M20 20v13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path {...common} d="M9 24v-4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v4M7 24h26v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2ZM9 29v3M31 29v3" />
    </svg>
  );
}

