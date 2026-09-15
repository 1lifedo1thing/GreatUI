"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import FloatingDockMenu from "@/components/ui/FloatingDockMenu";

export default function FloatingDockMenuPreview() {
  const { props } = useProps();

  return (
    <div className="relative flex h-96 w-full items-end justify-center p-6 pb-8 select-none">
      <FloatingDockMenu isFixed={false} {...props} />
    </div>
  );
}
