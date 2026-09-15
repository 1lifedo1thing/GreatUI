"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import MobileMockup from "../../ui/MobileMockup";

export default function MobileMockupPreview() {
  const { props } = useProps();

  return (
    <div className="flex w-full items-center justify-center p-4">
      <MobileMockup {...props} />
    </div>
  );
}
