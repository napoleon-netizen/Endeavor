function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M15 8.5h-2c-.28 0-.5.22-.5.5v2h2.4l-.35 2.5H12.5V21h-3v-7.5H8V11h1.5V8.8C9.5 6.6 10.8 5 13.2 5H15v3.5Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2 1.7 3.5 3.7 3.8v2.6c-1.4 0-2.7-.4-3.7-1.1v6.4a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.7a2.6 2.6 0 1 0 1.8 2.5V3h2.6Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H4.56V19h2.38V8.5ZM5.75 4.5a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75ZM19.5 19h-2.38v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V19H10.7V8.5h2.28v1.43h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68V19Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M17.6 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L1.7 3h6.4l4.4 5.9L17.6 3Zm-1.1 16.2h1.7L7.1 4.7H5.3l11.2 14.5Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

export const socialProfiles = [
  { name: "Facebook", href: "https://www.facebook.com/Endeavorclean60", Icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/endeavorcleaningservices/", Icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/endeavor-clean-b1353a1b6/", Icon: LinkedInIcon },
  { name: "X", href: "https://x.com/CleanEndeavor", Icon: XIcon },
  { name: "YouTube", href: "https://www.youtube.com/@EndeavorCleaningServices", Icon: YouTubeIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@endeavorclean", Icon: TikTokIcon },
];

export default function SocialLinks({ className = "social-row" }: { className?: string }) {
  return (
    <div className={className}>
      {socialProfiles.map(({ name, href, Icon }) => (
        <a href={href} key={name} aria-label={`Endeavor Cleaning on ${name}`} target="_blank" rel="noopener noreferrer">
          <Icon />
        </a>
      ))}
    </div>
  );
}
