"use client";

import React from "react";
import posthog from "posthog-js";
import Link from "next/link";
import Container from "./Container";
import Button from "./ui/Button";
import { SectionIcon } from "./Icons";

export function Hero() {
  return (
    <Container className="py-0">
      <div className="flex flex-col items-center gap-2 py-8 text-center sm:gap-1 md:gap-2 md:py-16 lg:py-20">
        <h1 className="w-full text-[24px] leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl md:font-semibold xl:text-6xl xl:tracking-tighter dark:text-neutral-300">
          Ship Premium Web Interfaces Faster
        </h1>
        <p className="max-w-4xl text-base text-balance text-neutral-600 sm:text-lg md:text-lg xl:text-xl dark:text-neutral-400">
          A curated collection of over 50 accessible, beautifully designed
          Tailwind CSS components. Copy, paste, and customize to build stunning
          applications in minutes.
        </p>
        <div className="flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none">
          <Link
            href="/components"
            onClick={() => posthog.capture("components_catalogue_opened")}
          >
            <Button
              variant="primary"
              size="md"
              leftIcon={<SectionIcon className="h-4 w-4" />}
            >
              Browse Components
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
