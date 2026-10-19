// Client logos as shown on endeavorclean.com/about-us.
// TEMPORARY: these point at the old WordPress site. Download the files into
// /public/assets/clients/ and update the paths before endeavorclean.com moves.
const W = "https://endeavorclean.com/wp-content/uploads/2026/01/";

export const clients: Array<{ name: string; logo?: string }> = [
  { name: "Emirates Flight Catering", logo: `${W}Emirates_Flight_Catering_logo.svg-1.svg` },
  { name: "Dubai Duty Free", logo: `${W}Dubai-Duty-Free-Logo-1-1024x1024-1.svg` },
  { name: "Prime Minister's Office, UAE", logo: `${W}prime-ministers-office-uae.webp` },
  { name: "Al-Futtaim", logo: `${W}al-futtaim-logo-png_seeklogo-5805.png` },
  { name: "Cathay Pacific", logo: `${W}Cathay_Pacific-Logo.wine-1.svg` },
  { name: "Novomed", logo: `${W}43HO3ys_400x400.jpg` },
  { name: "Gulf Processing Industries", logo: `${W}slider-logo-17-300x177-1.png` },
  { name: "Gundlach Packaging Group", logo: `${W}Kundenlogo-Gundlach-Packaging-Group-1.svg` },
  { name: "Sinotrans", logo: `${W}sinotrans.svg` },
  { name: "ABBM Facilities Management", logo: `${W}abbm-facilities-management-company.webp` },
  { name: "MECRC", logo: `${W}images.png` },
];
