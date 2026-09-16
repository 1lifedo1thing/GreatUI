"use client";
import React from "react";
import { PixelSwipeText } from "../../ui/PixelSwipeText";
import { useViewer } from "@/lib/viewer-context";

import { useProps } from "@/lib/PropsContext";

export default function PixelSwipeTextPreview() {
  const { previewContainer } = useViewer();
  const { props } = useProps();

  if (!previewContainer) {
    return (
      <div className="flex h-40 items-center justify-center font-mono text-sm text-neutral-400 dark:text-neutral-500">
        Loading scroll container...
      </div>
    );
  }

  return (
    <div className="w-full select-none">
      <div className="flex h-screen w-full items-center justify-center text-center text-lg font-semibold text-neutral-500 dark:text-neutral-400">
        Scroll down
      </div>

      <div className="flex h-screen w-full flex-col items-center justify-center gap-0 px-4 text-center">
        <div className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl md:text-2xl dark:text-white">
          <PixelSwipeText {...props} />
        </div>
        <div className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl md:text-2xl dark:text-white">
          <PixelSwipeText {...props}>
            Crafted For Next-Gen Interfaces
          </PixelSwipeText>
        </div>
        <div className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl md:text-2xl dark:text-white">
          <PixelSwipeText {...props}>
            High Performance Fluid Motion
          </PixelSwipeText>
        </div>
        <div className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl md:text-2xl dark:text-white">
          <PixelSwipeText {...props}>
            Autonomous Enterprise Studio
          </PixelSwipeText>
        </div>
      </div>

      <div className="flex h-screen w-full items-center justify-center text-center text-lg font-semibold text-neutral-500 dark:text-neutral-400">
        Scroll up
      </div>
    </div>
  );
}
