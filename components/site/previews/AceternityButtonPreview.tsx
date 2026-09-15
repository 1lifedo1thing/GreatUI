"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import AceternityButton from "../../ui/AceternityButton";

export default function AceternityButtonPreview() {
  const { props } = useProps();

  return (
    <div className="flex h-[300px] w-full items-center justify-center p-8 select-none">
      <AceternityButton {...props}>Aceternity Button</AceternityButton>
    </div>
  );
}
