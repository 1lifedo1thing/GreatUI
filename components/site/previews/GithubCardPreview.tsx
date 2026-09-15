"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import { GithubCard } from "../../ui/GithubCard";

export default function GithubCardPreview() {
  const { props } = useProps();

  return (
    <div className="flex items-center justify-center p-12 select-none">
      <GithubCard
        username="Saurabh-2607"
        name="Saurabh Sharma"
        year={2026}
        themeScheme="green"
        enableCardTilt={false}
        {...props}
      />
    </div>
  );
}
