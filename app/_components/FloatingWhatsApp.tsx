export default function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/971588754060?text=${encodeURIComponent("Hello Endeavor, I'd like to ask about a cleaning service.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Endeavor on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.1 4.9A9.9 9.9 0 0 0 12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A9.9 9.9 0 0 0 22 12c0-2.7-1-5.1-2.9-7.1ZM12 20.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.5-.6-2.6-1.7-3.4-3-.1-.2 0-.4.1-.5l.6-.9c.1-.2.1-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.3-.3Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
