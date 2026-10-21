// Client logos shown on endeavorclean.com/about-us.
// Local files in /public/assets/clients. The three marked REMOTE still load from the
// old WordPress site; replace with local files when available.
const W = "https://endeavorclean.com/wp-content/uploads/2026/01/";

export const clients: Array<{ name: string; logo?: string }> = [
  { name: "Emirates Flight Catering", logo: `${W}Emirates_Flight_Catering_logo.svg-1.svg` }, // REMOTE
  { name: "Dubai Duty Free", logo: "/assets/clients/dubai-duty-free.png" },
  { name: "Prime Minister's Office, UAE", logo: "/assets/clients/uae-pmo.png" },
  { name: "Al-Futtaim", logo: "/assets/clients/al-futtaim.png" },
  { name: "Cathay Pacific", logo: "/assets/clients/cathay-pacific.png" },
  { name: "Novomed", logo: "/assets/clients/novomed.png" },
  { name: "Gulf Processing Industries", logo: "/assets/clients/gulf-processing.png" },
  { name: "Gundlach Packaging Group", logo: `${W}Kundenlogo-Gundlach-Packaging-Group-1.svg` }, // REMOTE
  { name: "Sinotrans", logo: "/assets/clients/sinotrans.png" },
  { name: "ABBM Facilities Management", logo: `${W}abbm-facilities-management-company.webp` }, // REMOTE
  { name: "MECRC", logo: "/assets/clients/mecrc.png" },
];
