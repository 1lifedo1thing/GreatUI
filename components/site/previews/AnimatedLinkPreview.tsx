"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import AnimatedLink from "../../ui/AnimatedLink";

export default function AnimatedLinkPreview() {
  const { props } = useProps();

  return (
    <div className="flex w-full items-center justify-center p-12 select-none">
      <AnimatedLink
        href="#"
        className="text-4xl font-semibold transition-colors"
        {...props}
      >
        Hover over me
      </AnimatedLink>
    </div>
  );
}
