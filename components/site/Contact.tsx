"use client";

import React from "react";
import Container from "./Container";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <div id="contact" className="relative mx-auto max-w-[1400px] scroll-mt-24">
      <Container className="pt-3 pb-10 md:pt-4 md:pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-neutral-100 p-6 text-center sm:flex-row sm:rounded-3xl sm:p-8 sm:text-left md:p-10 dark:bg-neutral-900">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl md:text-3xl dark:text-neutral-200">
              Have questions or want to collaborate?
            </h2>
            <p className="max-w-2xl text-xs text-neutral-600 sm:text-sm md:text-base dark:text-neutral-400">
              Need custom requests, partnerships, or want to contribute? Connect
              through any of the channels below.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:shrink-0 sm:flex-row sm:items-center">
            <a
              href="mailto:saurabh.nayla@gmail.com"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full font-semibold sm:w-auto"
              >
                Email Us
              </Button>
            </a>
            <a
              href="https://x.com/srbh_here"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="md" className="w-full sm:w-auto">
                DM on X
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
