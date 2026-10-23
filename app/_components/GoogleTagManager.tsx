import Script from "next/script";

import { GTM_ID } from "@/lib/tracking";

/**
 * Google Tag Manager, loaded after window.load so Google's scripts never compete
 * with the page's own content for bandwidth on slow connections (dataLayer
 * events pushed before it arrives are queued and processed on load).
 * Loaded on every environment (preview included) so that
 * Tag Assistant can verify tags before launch. GA4 inside the container can
 * filter preview hostnames if needed.
 */
export function GoogleTagManagerHead() {
  return (
    <Script id="gtm" strategy="lazyOnload">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
