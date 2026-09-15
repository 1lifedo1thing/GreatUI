"use client";

import React from "react";

interface ControlInputProps {
  type?: "text" | "color";
  value: string;
  onChange: (value: string) => void;
}

export function ControlInput({
  type = "text",
  value,
  onChange,
}: ControlInputProps) {
  if (type === "color") {
    return (
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value || "#000000"}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-10 cursor-pointer rounded-xl border-0 bg-transparent p-0"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl bg-neutral-100 px-4 py-3 font-mono text-lg font-medium text-neutral-800 transition-colors hover:bg-neutral-200/50 focus:outline-none dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:bg-neutral-800/60"
        />
      </div>
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl bg-neutral-100 px-4 py-3 font-mono text-lg font-medium text-neutral-800 transition-colors hover:bg-neutral-200/50 focus:outline-none dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:bg-neutral-800/60"
    />
  );
}
