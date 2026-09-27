"use client";

import { useEffect, useState } from "react";
import { components } from "@/lib/registry";

// High priority components shown on the landing page
const LANDING_PAGE_SLUGS = [
  "floating-menu",
  "multilingual-quote",
  "pixel-to-ascii",
  "accordion",
  "avatar-stack",
  "minimal-buttons",
  "instagram-card",
  "scroll-flying-cards",
  "scrambled-install-command",
  "pixel-swipe-page-transition",
  "pixel-swipe-text",
];

export default function VideoPreloader() {
  const [isClient, setIsClient] = useState(false);

  // Wait until hydration to prevent SSR mismatch or excessive server parsing
  useEffect(() => {
    // Slight delay so we don't block critical page load
    const timer = setTimeout(() => setIsClient(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  const landingPageUrls = components
    .filter((c) => LANDING_PAGE_SLUGS.includes(c.slug) && c.preview)
    .map((c) => c.preview as string);

  const otherUrls = components
    .filter((c) => !LANDING_PAGE_SLUGS.includes(c.slug) && c.preview)
    .map((c) => c.preview as string);

  return (
    <div aria-hidden="true" className="hidden">
      {/* Load landing page videos first */}
      {landingPageUrls.map((url) => (
        <link
          key={url}
          rel="preload"
          as="video"
          href={url}
          type="video/mp4"
          // @ts-expect-error - fetchpriority is not yet in React's standard types
          fetchpriority="auto"
        />
      ))}

      {/* Load all other videos after with lowest priority */}
      {otherUrls.map((url) => (
        <link
          key={url}
          rel="preload"
          as="video"
          href={url}
          type="video/mp4"
          // @ts-expect-error - fetchpriority is not yet in React's standard types
          fetchpriority="low"
        />
      ))}
    </div>
  );
}
