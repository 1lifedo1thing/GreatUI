"use client";
import { useProps } from "@/lib/PropsContext";

import React from "react";
import AnimatedSelect from "../../ui/AnimatedSelect";

export default function AnimatedSelectPreview() {
  const { props } = useProps();

  return (
    <div className="flex h-[420px] w-full items-center justify-center p-8 select-none">
      <div className="relative -top-24">
        <AnimatedSelect
          placeholder="Choose Option"
          width={240}
          itemHeight={42}
          triggerHeight={46}
          {...props}
        />
      </div>
    </div>
  );
}
