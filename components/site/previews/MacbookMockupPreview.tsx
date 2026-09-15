"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import MacbookMockup from "../../ui/MacbookMockup";

export default function MacbookMockupPreview() {
  const { props } = useProps();

  return (
    <div className="flex w-full items-center justify-center p-4">
      <MacbookMockup {...props} />
    </div>
  );
}
