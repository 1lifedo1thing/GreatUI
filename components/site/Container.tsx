"use client";

import React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
};

export function Container({ children, className, ...props }: ContainerProps) {
  const containerClasses = cn(
    "relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8",
    className,
  );

  return (
    <div className={containerClasses} {...props}>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default Container;
