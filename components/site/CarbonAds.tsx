"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SERVE_URL =
  "//cdn.carbonads.com/carbon.js?serve=CWBI62QE&placement=wwwgreat-uicom&format=responsive";

const SCRIPT_ID = "_carbonads_js";
const RESERVED_HEIGHT = "min-h-34";

let instances = 0;

function useSingleInstance() {
  useEffect(() => {
    instances += 1;
    if (instances > 1) {
      console.error(
        `CarbonAds: ${instances} mounted at once. Carbon serves one unit per page.`,
      );
    }

    return () => {
      instances -= 1;
    };
  }, []);
}

export default function CarbonAds({
  className,
  ...props
}: ComponentProps<"div">) {
  const slotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [blocked, setBlocked] = useState(false);

  useSingleInstance();

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SERVE_URL;
      script.async = true;
      script.onerror = () => setBlocked(true);
      slot.appendChild(script);
    }, 0);

    return () => {
      clearTimeout(timer);
      slot.replaceChildren();
    };
  }, [pathname]);

  if (blocked) return null;

  return (
    <div
      ref={slotRef}
      data-slot="carbon-ads"
      className={cn(RESERVED_HEIGHT, className)}
      {...props}
    />
  );
}

interface CarbonAdData {
  company?: string;
  title?: string;
  description?: string;
  statlink: string;
  statimp?: string;
  statview?: string;
  ad_via_link?: string;
  logo?: string;
  smallImage?: string;
  largeImage?: string;
}

export function CarbonCardAd() {
  const [ad, setAd] = useState<CarbonAdData | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(
      "https://srv.carbonads.net/ads/CWBI62QE.json?segment=placement:wwwgreat-uicom",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load ad");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const firstAd = data?.ads?.[0];
        if (firstAd && firstAd.statlink) {
          setAd(firstAd);
          if (firstAd.statimp) {
            new Image().src = firstAd.statimp;
          }
          if (firstAd.statview) {
            new Image().src = firstAd.statview;
          }
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ad) return null;

  const imageUrl = ad.largeImage || ad.smallImage || ad.logo;

  return (
    <a
      href={ad.statlink}
      target="_blank"
      rel="noopener noreferrer"
      title={ad.description || ad.company}
      className="group relative flex h-[268px] w-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-dashed border-neutral-300/80 bg-white no-underline transition-all duration-300 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
    >
      <div className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-t-3xl bg-white">
        <div className="absolute top-3 right-3 z-20 rounded-md bg-neutral-950/85 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white uppercase shadow-sm backdrop-blur-md dark:bg-neutral-100 dark:text-neutral-900">
          AD
        </div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={ad.company || "Ad"}
            className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {ad.ad_via_link && (
          <span className="absolute right-3 bottom-2.5 z-20 text-[10px] text-neutral-400">
            via Carbon
          </span>
        )}
      </div>

      <div className="flex shrink-0 flex-col justify-center border-t border-neutral-100 bg-neutral-50/80 px-4 pt-2 pb-2.5 dark:border-neutral-800/80 dark:bg-neutral-950/60">
        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {ad.description || ad.company}
        </p>
      </div>
    </a>
  );
}
