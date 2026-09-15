"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import DiagonalMarqueeCarousel from "../../ui/DiagonalMarqueeCarousel";

export default function DiagonalMarqueeCarouselPreview() {
  const { props } = useProps();

  return (
    <DiagonalMarqueeCarousel
      {...props}
      className="absolute -inset-5 h-[calc(100%+2.5rem)] max-h-none w-[calc(100%+2.5rem)] max-w-none"
    />
  );
}
