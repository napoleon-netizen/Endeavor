type Kind =
  | "dust" | "filter" | "odour" | "airflow" | "water" | "time" | "renovation"
  | "stain" | "pet" | "move" | "shine" | "glass" | "building" | "default";

const rules: Array<[RegExp, Kind]> = [
  [/vent|airflow|air flow|coil/i, "airflow"],
  [/filter|grease|hood|duct/i, "filter"],
  [/odour|odor|smell|musty/i, "odour"],
  [/water|scale|tank|plumbing|cloudy|residue/i, "water"],
  [/renovat|contractor|fit-out|construction|handover|new hand/i, "renovation"],
  [/stain|mark|food|drink|spill|grout|grime/i, "stain"],
  [/pet|hair|insect|children/i, "pet"],
  [/move|occupan|tenant|guest|event|owner|moving/i, "move"],
  [/scratch|dull|marble|clarity|restor|polish/i, "shine"],
  [/glass|window|façade|facade|exterior/i, "glass"],
  [/office|restaurant|café|hotel|building|propert|home|kitchen|apartment|unit|commercial|managed/i, "building"],
  [/period|long|time|extended|recent|schedule|recurring|routine/i, "time"],
  [/dust|dirt|traffic|surface/i, "dust"],
];

function kindFor(label: string): Kind {
  for (const [re, kind] of rules) if (re.test(label)) return kind;
  return "default";
}

const paths: Record<Kind, React.ReactNode> = {
  dust: <><circle cx="7" cy="9" r="1.6" /><circle cx="13" cy="6" r="1.2" /><circle cx="17" cy="11" r="1.8" /><circle cx="10" cy="15" r="1.3" /><circle cx="16" cy="17" r="1" /><circle cx="5" cy="16" r="1" /></>,
  filter: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10h16M4 14h16M9 5v14M15 5v14" /></>,
  odour: <><path d="M7 16c0-3 2-3 2-6s-2-3-2-6M12 16c0-3 2-3 2-6s-2-3-2-6M17 16c0-3 2-3 2-6s-2-3-2-6" /><path d="M4 20h16" /></>,
  airflow: <><path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8a2.5 2.5 0 1 1-2.5 2.5" /></>,
  water: <><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" /></>,
  time: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
  renovation: <><path d="M14 4l6 6-2 2-6-6 2-2ZM12 8l-8 8 2 2 8-8" /><path d="M4 20l2-2" /></>,
  stain: <><path d="M12 4c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3" /><circle cx="6" cy="7" r="1.3" /><circle cx="18" cy="5" r="1" /></>,
  pet: <><circle cx="8" cy="8" r="2" /><circle cx="16" cy="8" r="2" /><circle cx="5" cy="13" r="1.7" /><circle cx="19" cy="13" r="1.7" /><path d="M12 11c3 0 5 3 5 5.5S15 20 12 20s-5-1.5-5-3.5S9 11 12 11Z" /></>,
  move: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
  shine: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
  glass: <><rect x="4" y="4" width="16" height="16" rx="1.5" /><path d="M12 4v16M4 12h16" /><path d="M7 7l2 2" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></>,
  default: <><circle cx="12" cy="12" r="8.5" /><path d="M8.5 12.5l2.3 2.3 4.7-5" /></>,
};

export default function ConcernIcon({ label }: { label: string }) {
  const kind = kindFor(label);
  return (
    <span className="concern-icon" aria-hidden="true" data-kind={kind}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[kind]}
      </svg>
    </span>
  );
}
