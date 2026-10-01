"use client";

import React from "react";
import Link from "next/link";
import posthog from "posthog-js";
import Container from "./Container";

export function Sponsors() {
  return (
    <div className="relative mx-auto max-w-[1400px]">
      <Container className="relative py-10 md:py-16">
        <div className="flex flex-col items-start text-left">
          <h2 className="mt-2 w-full text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-300">
            Become a sponsor.
          </h2>
          <p className="mt-2 max-w-4xl text-base text-balance text-neutral-600 sm:text-lg dark:text-neutral-400">
            Support independent open-source component development and feature
            your logo.
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-6">
          <Link
            href="/sponsors#tiers"
            onClick={() =>
              posthog.capture("sponsorship_link_clicked", { tier: "platinum" })
            }
            className="group relative flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-neutral-100 p-6 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-56 md:flex-[6] dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
          >
            <span className="text-4xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-5xl dark:text-neutral-500">
              +
            </span>
            <span className="text-base font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-lg dark:text-neutral-400">
              Become a Platinum Sponsor
            </span>
          </Link>

          <Link
            href="/sponsors#tiers"
            onClick={() =>
              posthog.capture("sponsorship_link_clicked", { tier: "gold" })
            }
            className="group relative flex h-36 w-full cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-3xl bg-neutral-100 p-4 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-44 md:flex-[4] dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
          >
            <span className="text-3xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-4xl dark:text-neutral-500">
              +
            </span>
            <span className="text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-base dark:text-neutral-400">
              Become a Gold Sponsor
            </span>
          </Link>

          <Link
            href="/sponsors#tiers"
            onClick={() =>
              posthog.capture("sponsorship_link_clicked", { tier: "silver" })
            }
            className="group relative flex h-28 w-full cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-3xl bg-neutral-100 p-3 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-36 md:flex-[3] dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
          >
            <span className="text-2xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-3xl dark:text-neutral-500">
              +
            </span>
            <span className="text-xs font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-sm dark:text-neutral-400">
              Become a Silver Sponsor
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Sponsors;
