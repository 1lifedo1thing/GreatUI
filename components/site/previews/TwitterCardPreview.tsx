"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import { TwitterCard } from "../../ui/TwitterCard";

export default function TwitterCardPreview() {
  const { props } = useProps();

  return (
    <div className="flex h-full w-full items-center justify-center p-12 select-none">
      <TwitterCard
        username="srbh_here"
        name="Saurabh Sharma"
        enableCardTilt={false}
        {...props}
      />
    </div>
  );
}
