"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import { InstagramCard } from "../../ui/InstagramCard";

export default function InstagramCardPreview() {
  const { props } = useProps();

  return (
    <div className="flex h-full w-full items-center justify-center p-12 select-none">
      <InstagramCard
        username="greatui"
        name="Great UI"
        bio="Designing the best React UI components and animated layouts for modern web apps."
        followers="25K"
        following="10"
        posts="42"
        enableCardTilt={false}
        {...props}
      />
    </div>
  );
}
