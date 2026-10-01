"use client";

import { useEffect, useState } from "react";
import { components } from "@/lib/registry";

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

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  const landingPageUrls = Array.from(
    new Set(
      components
        .filter((c) => LANDING_PAGE_SLUGS.includes(c.slug) && c.preview)
        .map((c) => c.preview as string),
    ),
  );

  return (
    <div aria-hidden="true" className="hidden">
      {landingPageUrls.map((url) => (
        <link key={url} rel="prefetch" href={url} as="video" type="video/mp4" />
      ))}
    </div>
  );
}
