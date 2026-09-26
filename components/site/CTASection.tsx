"use client";

import React from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { components } from "@/lib/registry";
import { GithubIcon, CubeIcon, BlocksIcon } from "./Icons";
import Container from "./Container";

export default function CTASection() {
  const count = components.length;

  return (
    <div className="relative mx-auto max-w-[1360px]">
      <Container className="relative bg-white py-10 md:py-16 dark:bg-black">
        <div className="flex flex-col items-start text-left">
          <h2 className="mt-2 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl dark:text-white">
            Ready to build something great?
          </h2>
          <p className="mt-4 max-w-2xl text-base tracking-normal text-neutral-600 sm:text-lg dark:text-neutral-400">
            Join the community and start crafting premium interfaces today.
          </p>

          <div className="relative z-10 mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            <Link
              href="/components"
              onClick={() =>
                posthog.capture("components_catalogue_opened", {
                  location: "homepage_cta",
                })
              }
              className="group relative flex h-44 cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-neutral-100 p-6 no-underline transition-all duration-300 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
            >
              <CubeIcon className="absolute -right-8 -bottom-8 h-48 w-48 text-neutral-900 opacity-[0.03] transition-colors duration-500 group-hover:text-[#f6821f] dark:text-white dark:opacity-[0.02]" />

              <div className="flex w-full justify-start">
                <span className="text-neutral-450 relative z-10 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:rotate-12 dark:text-neutral-500">
                  <CubeIcon className="h-8 w-8" />
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-0.5 text-left">
                <span className="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white">
                  Explore Components
                </span>
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {count} production-ready elements
                </span>
              </div>
            </Link>

            <a
              href="https://github.com/Saurabh-2607/GreatUI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => posthog.capture("github_star_clicked_cta")}
              className="group relative flex h-44 cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-neutral-100 p-6 no-underline transition-all duration-300 hover:bg-neutral-200/70 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
            >
              <GithubIcon className="absolute -right-8 -bottom-8 h-48 w-48 text-neutral-900 opacity-[0.03] transition-colors duration-500 group-hover:text-[#f6821f] dark:text-white dark:opacity-[0.02]" />

              <div className="flex w-full justify-start">
                <span className="text-neutral-450 relative z-10 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:-rotate-6 dark:text-neutral-500">
                  <GithubIcon className="h-8 w-8" />
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-0.5 text-left">
                <span className="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white">
                  Star it on GitHub
                </span>
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Support the open source project
                </span>
              </div>
            </a>

            <div className="relative flex h-44 flex-col justify-between overflow-hidden rounded-3xl bg-neutral-100 p-6 no-underline opacity-50 grayscale dark:bg-neutral-900">
              <BlocksIcon className="absolute -right-8 -bottom-8 h-48 w-48 text-neutral-900 opacity-[0.03] dark:text-white dark:opacity-[0.02]" />

              <div className="flex w-full justify-start">
                <span className="text-neutral-450 relative z-10 dark:text-neutral-500">
                  <BlocksIcon className="h-8 w-8" />
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-0.5 text-left">
                <span className="text-lg font-semibold tracking-wide text-neutral-900 dark:text-white">
                  Blocks
                </span>
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
