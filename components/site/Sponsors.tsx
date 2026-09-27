"use client";

import React from "react";
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

        <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="https://github.com/sponsors/Saurabh-2607"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("sponsorship_link_clicked")}
            className="group relative flex h-40 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-3xl bg-neutral-100 p-4 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
          >
            <span className="text-neutral-450 text-4xl font-light transition-colors duration-300 group-hover:text-[#f6821f] dark:text-neutral-500">
              +
            </span>
            <span className="text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] dark:text-neutral-400">
              Place your logo here
            </span>
          </a>

          <a
            href="https://github.com/sponsors/Saurabh-2607"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("sponsorship_link_clicked")}
            className="group relative hidden h-40 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-3xl bg-neutral-100 p-4 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 md:flex dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
          >
            <span className="text-neutral-450 text-4xl font-light transition-colors duration-300 group-hover:text-[#f6821f] dark:text-neutral-500">
              +
            </span>
            <span className="text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] dark:text-neutral-400">
              Place your logo here
            </span>
          </a>

          <a
            href="https://github.com/sponsors/Saurabh-2607"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("sponsorship_link_clicked")}
            className="group relative hidden h-40 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-3xl bg-neutral-100 p-4 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 md:flex dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
          >
            <span className="text-neutral-450 text-4xl font-light transition-colors duration-300 group-hover:text-[#f6821f] dark:text-neutral-500">
              +
            </span>
            <span className="text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] dark:text-neutral-400">
              Place your logo here
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Sponsors;
