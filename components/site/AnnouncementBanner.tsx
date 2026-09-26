"use client";

import React from "react";
import Container from "./Container";

export function AnnouncementBanner() {
  return (
    <div className="relative w-full bg-gradient-to-r from-white via-neutral-50 to-white transition-colors dark:from-black dark:via-neutral-900/30 dark:to-black">
      <Container className="bg-white py-4 dark:bg-black">
        <div className="flex w-full flex-wrap items-center justify-center gap-2.5 text-center text-xs font-semibold text-neutral-800 sm:gap-3.5 sm:text-sm md:text-base dark:text-neutral-200">
          <span>
            Launching{" "}
            <span className="font-extrabold text-neutral-950 dark:text-white">
              v1
            </span>{" "}
            on <span className="font-bold text-[#f6821f]">July 26</span>. Get
            ready for production-grade React components.
          </span>
        </div>
      </Container>
    </div>
  );
}

export default AnnouncementBanner;
