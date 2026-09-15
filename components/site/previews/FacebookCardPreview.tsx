"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import { FacebookCard } from "../../ui/FacebookCard";

export default function FacebookCardPreview() {
  const { props } = useProps();

  return (
    <div className="flex h-full w-full items-center justify-center p-12 select-none">
      <FacebookCard
        username="greatuihq"
        name="Great UI"
        bio="Designing the best React UI components and animated layouts for modern web apps."
        friends="15K"
        mutualFriends="23"
        enableCardTilt={false}
        {...props}
      />
    </div>
  );
}
