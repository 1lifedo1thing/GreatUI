"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ScrambledInstallCommand,
  PkgManager,
} from "@/components/ui/ScrambledInstallCommand";
import { MultilingualQuote } from "@/components/ui/MultilingualQuote";
import { Accordion } from "@/components/ui/Accordion";
import AvatarStack from "@/components/ui/AvatarStack";
import MinimalButtons from "@/components/ui/MinimalButtons";
import { InstagramCard } from "@/components/ui/InstagramCard";
import RadialGooeyMenu, {
  RadialGooeyMenuItem,
} from "@/components/ui/RadialGooeyMenu";

const MULTILINGUAL_QUOTES = [
  {
    id: "en",
    label: "English",
    text: "Simplicity is prerequisite for reliability.",
  },
  {
    id: "es",
    label: "Español",
    text: "La simplicidad es un requisito previo para la confiabilidad.",
  },
  {
    id: "fr",
    label: "Français",
    text: "La simplicité est une condition préalable à la fiabilité.",
  },
  { id: "ja", label: "日本語", text: "シンプルさは信頼性の前提条件です。" },
];

const ACCORDION_ITEMS = [
  {
    title: "Is Great UI open source?",
    description:
      "Yes, Great UI provides free, copy-paste React & Tailwind CSS components with customizable code.",
  },
  {
    title: "How do I customize components?",
    description:
      "Every component is built with Tailwind CSS and Framer Motion / Motion.",
  },
  {
    title: "Does it support dark mode?",
    description:
      "Fully supported! All components come with built-in dark mode styles out of the box.",
  },
];

const RADIAL_MENU_ITEMS: RadialGooeyMenuItem[] = [
  {
    name: "User",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Mail",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const DEMO_USERS = [
  {
    name: "Alex",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "David",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Emily",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Michael",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
];

export default function BentoGridShowcase() {
  const [pkgManager, setPkgManager] = useState<PkgManager>("npm");
  const [btnLoading, setBtnLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`pnpm add great-ui`);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-stretch">
        <div className="flex flex-1 flex-col items-stretch justify-center rounded-3xl bg-neutral-100/60 p-5 sm:p-6 dark:bg-neutral-900/60">
          <ScrambledInstallCommand
            installCommand="npx create-great-ui@latest"
            pkgManager={pkgManager}
            setPkgManager={setPkgManager}
            onCopy={handleCopy}
            className="flex h-full w-full flex-col"
            codeClassName="flex-1 flex items-center justify-start"
          />
        </div>

        <div className="flex flex-1 flex-col items-stretch justify-center rounded-3xl bg-neutral-100/60 p-5 sm:p-6 dark:bg-neutral-900/60">
          <MultilingualQuote
            quotes={MULTILINGUAL_QUOTES}
            authorName="Edsger W. Dijkstra"
            className="h-full w-full flex-1 py-0 md:py-0"
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex min-h-[150px] items-center justify-center rounded-3xl bg-neutral-100/60 p-4 sm:p-5 dark:bg-neutral-900/60">
          <Accordion items={ACCORDION_ITEMS} className="w-full" />
        </div>

        <div className="flex min-h-[150px] items-center justify-center rounded-3xl bg-neutral-100/60 p-4 sm:p-5 dark:bg-neutral-900/60">
          <AvatarStack users={DEMO_USERS} variant="spring-tilt" size="md" />
        </div>

        <div className="flex min-h-[150px] items-center justify-center rounded-3xl bg-neutral-100/60 p-4 sm:p-5 dark:bg-neutral-900/60">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <MinimalButtons variant="primary" size="xs">
                Primary
              </MinimalButtons>
              <MinimalButtons variant="secondary" size="xs">
                Secondary
              </MinimalButtons>
              <MinimalButtons variant="outline" size="xs">
                Outline
              </MinimalButtons>
            </div>

            <div className="flex items-center gap-2">
              <MinimalButtons
                variant="primary"
                size="xs"
                isLoading={btnLoading}
                onClick={() => {
                  setBtnLoading(true);
                  setTimeout(() => setBtnLoading(false), 2000);
                }}
              >
                {btnLoading ? "Processing" : "Click to Load"}
              </MinimalButtons>
              <MinimalButtons variant="destructive" size="xs">
                Delete
              </MinimalButtons>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex min-h-[250px] items-center justify-center rounded-3xl bg-neutral-100/60 p-4 sm:p-5 dark:bg-neutral-900/60">
          <InstagramCard
            username="GreatUIHQ"
            name="Great UI"
            avatarUrl="https://ik.imagekit.io/j65jb9u8q/Great-UI.png"
            bio="Craft beautiful, accessible React & Tailwind CSS web apps instantly."
            followers="12.4K"
            following="180"
            posts="48"
            linkText="Instagram"
            enableCardTilt={false}
          />
        </div>
        <div className="flex min-h-[250px] items-center justify-center rounded-3xl bg-neutral-100/60 p-4 sm:p-5 dark:bg-neutral-900/60">
          <RadialGooeyMenu items={RADIAL_MENU_ITEMS} />
        </div>
        <Link
          href="/components"
          className="group flex min-h-[250px] flex-col items-center justify-center rounded-3xl bg-neutral-100/60 p-4 transition-colors hover:bg-neutral-200/60 sm:p-5 dark:bg-neutral-900/60 dark:hover:bg-neutral-800/60"
        >
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition-transform group-hover:scale-110 dark:bg-neutral-800 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
          <span className="text-lg font-medium text-neutral-900 dark:text-white">
            View all components
          </span>
        </Link>
      </div>
    </div>
  );
}
