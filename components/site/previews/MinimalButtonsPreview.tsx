"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import MinimalButtons from "../../ui/MinimalButtons";

export default function MinimalButtonsPreview() {
  const { props } = useProps();

  return (
    <div className="flex h-[300px] w-full items-center justify-center p-8 select-none">
      <MinimalButtons {...props}>Minimal Button</MinimalButtons>
    </div>
  );
}
