"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ScrambledInstallCommandPreview from "@/components/site/previews/ScrambledInstallCommandPreview";
import MultilingualQuotePreview from "@/components/site/previews/MultilingualQuotePreview";
import AccordionPreview from "@/components/site/previews/AccordionPreview";
import AvatarStackPreview from "@/components/site/previews/AvatarStackPreview";
import MinimalButtonsPreview from "@/components/site/previews/MinimalButtonsPreview";
import InstagramCardPreview from "@/components/site/previews/InstagramCardPreview";
import PixelToAsciiImagePreview from "@/components/site/previews/PixelToAsciiImagePreview";

interface ShowcaseItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "scrambled-install-command",
    title: "Scrambled Command",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    id: "multilingual-quote",
    title: "Multilingual Quote",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.39.94-2.44zM22.758 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L20.939 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.39.94-2.44z" />
      </svg>
    ),
  },
  {
    id: "pixel-to-ascii",
    title: "Pixel to ASCII",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
    ),
  },
  {
    id: "accordion",
    title: "Accordion",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M19 8H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zM5 2h14c1.1 0 2 .9 2 2v2H3V4c0-1.1.9-2 2-2zm14 18H5c-1.1 0-2-.9-2-2v-2h18v2c0 1.1-.9 2-2 2z" />
      </svg>
    ),
  },
  {
    id: "avatar-stack",
    title: "Avatar Stack",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "minimal-buttons",
    title: "Minimal Buttons",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <rect width="18" height="12" x="3" y="6" rx="2" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    id: "instagram-card",
    title: "Instagram Card",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export function ComponentShowcase() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const duration = 6000;
  const startTimeRef = useRef<number>(0);
  const elapsedTimeRef = useRef<number>(0);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      elapsedTimeRef.current += Date.now() - startTimeRef.current;
    } else {
      const remaining = Math.max(0, duration - elapsedTimeRef.current);
      startTimeRef.current = Date.now();

      timeoutIdRef.current = setTimeout(() => {
        elapsedTimeRef.current = 0;
        setActiveTabIdx((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
      }, remaining);
    }

    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [isHovered, activeTabIdx]);

  const handleTabClick = (idx: number) => {
    elapsedTimeRef.current = 0;
    setActiveTabIdx(idx);
  };

  const activeTab = SHOWCASE_ITEMS[activeTabIdx] || SHOWCASE_ITEMS[0];

  const renderActiveComponent = () => {
    switch (activeTab.id) {
      case "scrambled-install-command":
        return <ScrambledInstallCommandPreview />;
      case "multilingual-quote":
        return <MultilingualQuotePreview />;
      case "pixel-to-ascii":
        return <PixelToAsciiImagePreview />;
      case "accordion":
        return <AccordionPreview />;
      case "avatar-stack":
        return <AvatarStackPreview />;
      case "minimal-buttons":
        return <MinimalButtonsPreview />;
      case "instagram-card":
        return <InstagramCardPreview />;
      default:
        return null;
    }
  };

  return (
    <div className="relative mx-auto max-w-[1400px] pt-4">
      <style>{`
        @keyframes showcase-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <Container>
        <div className="flex items-center justify-center pt-6">
          <div className="flex [scrollbar-width:none] items-stretch gap-1 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {SHOWCASE_ITEMS.map((tab, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(idx)}
                  className={cn(
                    "relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors select-none sm:text-base",
                    isActive
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors",
                      isActive
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400",
                    )}
                  >
                    {tab.icon}
                  </span>
                  <span>{tab.title}</span>

                  {isActive && (
                    <>
                      <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-neutral-100 dark:bg-neutral-900" />
                      <div
                        key={activeTabIdx}
                        className="absolute bottom-0 left-0 z-20 h-[2px] bg-[#f6821f]"
                        style={{
                          animation: "showcase-progress 6s linear forwards",
                          animationPlayState: isHovered ? "paused" : "running",
                        }}
                      />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="relative mx-auto mt-4 max-w-[1400px] pb-16">
        <Container>
          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative flex aspect-video min-h-[350px] w-full items-center justify-center rounded-3xl bg-neutral-100/60 p-8 dark:bg-neutral-900/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex h-full w-full items-center justify-center"
                >
                  {renderActiveComponent()}
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-4 right-4">
                <Link
                  href={`/components/${activeTab.id}`}
                  className="inline-flex items-center gap-1 rounded-full bg-neutral-200/70 px-3 py-1 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-300/80 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  <span>Component Docs</span>
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ComponentShowcase;
