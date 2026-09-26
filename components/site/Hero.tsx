"use client";

import posthog from "posthog-js";
import Link from "next/link";
import Container from "./Container";
import Button from "./ui/Button";
import { SectionIcon } from "./Icons";

export function Hero() {
  return (
    <div className="relative mx-auto max-w-[1360px]">
      <Container className="pt-48 pb-6 md:pt-16">
        <div className="flex flex-col gap-6 py-4 text-left md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in text-4xl leading-[1.05] font-semibold tracking-tight text-neutral-950 sm:text-5xl dark:text-white">
              Build Premium React Interfaces
            </h1>
            <p className="mt-2.5 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
              Beautiful, accessible, and high-performance Tailwind CSS
              components designed to build stunning web applications instantly.
            </p>
          </div>

          <div className="flex w-full shrink-0 items-center justify-start md:w-auto md:justify-end">
            <Link
              href="/components"
              onClick={() => posthog.capture("components_catalogue_opened")}
              className="w-full md:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center md:w-auto"
                leftIcon={<SectionIcon className="h-4 w-4" />}
              >
                Browse Components
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
