"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface PixelSwipePageTransitionProps {
  /** Value key to programmatically trigger the transition overlay */
  trigger: number;
  /** Callback fired at mid-transition when the viewport is 100% covered to perform view/route swapping */
  onViewSwap?: () => void;
  /** Additional CSS class names for the transition container */
  className?: string;
  /** The color of the pixel wipe band. Accepts any valid CSS color string */
  wipeColor?: string;
  /** Direction of the pixel swipe */
  direction?: "left" | "right" | "top" | "bottom";
  /** Animation speed multiplier (higher = faster) */
  speed?: number;
  /** The pixel cell block size in pixels */
  cellSize?: number;
  /** The width of the pixelated noise band in pixels */
  bandWidth?: number;
}

export default function PixelSwipePageTransition({
  trigger,
  onViewSwap,
  className = "",
  wipeColor = "#f43f5e",
  direction = "left",
  speed = 1.0,
  cellSize = 7,
  bandWidth = 52,
}: PixelSwipePageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);
  const onViewSwapRef = useRef(onViewSwap);

  useEffect(() => {
    onViewSwapRef.current = onViewSwap;
  }, [onViewSwap]);

  const parsedSpeed =
    typeof speed === "number" ? speed : parseFloat(String(speed)) || 1.0;
  const activeWipeColor = wipeColor || "#f43f5e";
  const CELL =
    typeof cellSize === "number"
      ? cellSize
      : parseInt(String(cellSize), 10) || 7;
  const BAND =
    typeof bandWidth === "number"
      ? bandWidth
      : parseInt(String(bandWidth), 10) || 52;

  useEffect(() => {
    if (trigger <= 0) return;

    let animFrameId: number;
    let stopped = false;

    const el = containerRef.current;
    const cv = canvasRef.current;
    if (!el || !cv) return;

    setIsActive(true);

    const r = el.getBoundingClientRect();
    const W = Math.max(1, Math.ceil(r.width));
    const H = Math.max(1, Math.ceil(r.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    cv.width = W * dpr;
    cv.height = H * dpr;

    const ctx = cv.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const FLICK = 0.34;
    const OVER = 0.8;
    const DCOVER = 700;
    const HOLD = 40;
    const DREVEAL = 700;

    const cubicBezier = (
      p1x: number,
      p1y: number,
      p2x: number,
      p2y: number,
    ) => {
      const cx = 3 * p1x;
      const bx = 3 * (p2x - p1x) - cx;
      const ax = 1 - cx - bx;
      const cy = 3 * p1y;
      const by = 3 * (p2y - p1y) - cy;
      const ay = 1 - cy - by;
      const fx = (t: number) => ((ax * t + bx) * t + cx) * t;
      const fy = (t: number) => ((ay * t + by) * t + cy) * t;
      const dfx = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
      return (x: number) => {
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        let t = x;
        for (let i = 0; i < 8; i++) {
          const e = fx(t) - x;
          const d = dfx(t);
          if (Math.abs(e) < 1e-4 || Math.abs(d) < 1e-6) break;
          t -= e / d;
        }
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        return fy(t);
      };
    };

    const ease = cubicBezier(0.85, 0, 0.15, 1);

    const hash = (x: number, y: number, s: number) => {
      let h = (x * 374761393) ^ (y * 668265263) ^ (s * 2246822519);
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
    };

    const speedFactor = 1 / Math.max(0.1, parsedSpeed);
    const dc = DCOVER * speedFactor;
    const h = HOLD * speedFactor;
    const dr = DREVEAL * speedFactor;
    const RS = dc + h;
    const END = RS + dr;

    let swapped = false;
    const t0 = performance.now();

    const seg = (t: number, a: number, b: number) => {
      if (t <= a) return 0;
      if (t >= b) return 1;
      return ease((t - a) / (b - a));
    };

    const edgeHorizontal = (edgeX: number, dir: number, seed: number) => {
      const g0 = Math.floor((edgeX - BAND) / CELL);
      const g1 = Math.ceil((edgeX + BAND) / CELL);
      for (let gx = g0; gx <= g1; gx++) {
        const cx = gx * CELL + CELL / 2;
        if (cx < 0 || cx > W) continue;
        const dist = dir * (cx - edgeX);
        for (let gy = 0; gy * CELL < H; gy++) {
          const p = (dist / BAND) * 0.5 + 0.5 + (Math.random() - 0.5) * FLICK;
          if (p > hash(gx, gy, seed)) {
            ctx.fillRect(gx * CELL, gy * CELL, CELL + OVER, CELL + OVER);
          }
        }
      }
    };

    const edgeVertical = (edgeY: number, dir: number, seed: number) => {
      const g0 = Math.floor((edgeY - BAND) / CELL);
      const g1 = Math.ceil((edgeY + BAND) / CELL);
      for (let gy = g0; gy <= g1; gy++) {
        const cy = gy * CELL + CELL / 2;
        if (cy < 0 || cy > H) continue;
        const dist = dir * (cy - edgeY);
        for (let gx = 0; gx * CELL < W; gx++) {
          const p = (dist / BAND) * 0.5 + 0.5 + (Math.random() - 0.5) * FLICK;
          if (p > hash(gx, gy, seed)) {
            ctx.fillRect(gx * CELL, gy * CELL, CELL + OVER, CELL + OVER);
          }
        }
      }
    };

    const drawWipe = (t: number) => {
      ctx.fillStyle = activeWipeColor;

      const enterP = seg(t, 0, dc);
      const exitP = seg(t, RS, END);

      if (direction === "left") {
        if (exitP === 0) {
          const leadX = -BAND + enterP * (W + 2 * BAND);
          const solidR = Math.max(0, Math.min(W, leadX - BAND));
          if (solidR > 0) {
            ctx.fillRect(0, 0, solidR, H);
          }
          edgeHorizontal(leadX, -1, 0);
        } else if (enterP === 1 && exitP < 1) {
          const trailX = -BAND + exitP * (W + 2 * BAND);
          const solidL = Math.max(0, Math.min(W, trailX + BAND));
          if (W - solidL > 0) {
            ctx.fillRect(solidL, 0, W - solidL, H);
          }
          edgeHorizontal(trailX, 1, 91);
        } else if (enterP === 1 && exitP === 0) {
          ctx.fillRect(0, 0, W, H);
        }
      } else if (direction === "right") {
        if (exitP === 0) {
          const leadX = W + BAND - enterP * (W + 2 * BAND);
          const solidL = Math.max(0, Math.min(W, leadX + BAND));
          if (W - solidL > 0) {
            ctx.fillRect(solidL, 0, W - solidL, H);
          }
          edgeHorizontal(leadX, 1, 0);
        } else if (enterP === 1 && exitP < 1) {
          const trailX = W + BAND - exitP * (W + 2 * BAND);
          const solidR = Math.max(0, Math.min(W, trailX - BAND));
          if (solidR > 0) {
            ctx.fillRect(0, 0, solidR, H);
          }
          edgeHorizontal(trailX, -1, 91);
        } else if (enterP === 1 && exitP === 0) {
          ctx.fillRect(0, 0, W, H);
        }
      } else if (direction === "top") {
        if (exitP === 0) {
          const leadY = -BAND + enterP * (H + 2 * BAND);
          const solidB = Math.max(0, Math.min(H, leadY - BAND));
          if (solidB > 0) {
            ctx.fillRect(0, 0, W, solidB);
          }
          edgeVertical(leadY, -1, 0);
        } else if (enterP === 1 && exitP < 1) {
          const trailY = -BAND + exitP * (H + 2 * BAND);
          const solidT = Math.max(0, Math.min(H, trailY + BAND));
          if (H - solidT > 0) {
            ctx.fillRect(0, solidT, W, H - solidT);
          }
          edgeVertical(trailY, 1, 91);
        } else if (enterP === 1 && exitP === 0) {
          ctx.fillRect(0, 0, W, H);
        }
      } else if (direction === "bottom") {
        if (exitP === 0) {
          const leadY = H + BAND - enterP * (H + 2 * BAND);
          const solidT = Math.max(0, Math.min(H, leadY + BAND));
          if (H - solidT > 0) {
            ctx.fillRect(0, solidT, W, H - solidT);
          }
          edgeVertical(leadY, 1, 0);
        } else if (enterP === 1 && exitP < 1) {
          const trailY = H + BAND - exitP * (H + 2 * BAND);
          const solidB = Math.max(0, Math.min(H, trailY - BAND));
          if (solidB > 0) {
            ctx.fillRect(0, 0, W, solidB);
          }
          edgeVertical(trailY, -1, 91);
        } else if (enterP === 1 && exitP === 0) {
          ctx.fillRect(0, 0, W, H);
        }
      }
    };

    const tick = (now: number) => {
      if (stopped) return;
      const t = now - t0;
      ctx.clearRect(0, 0, W, H);

      if (!swapped && t >= RS) {
        swapped = true;
        if (onViewSwapRef.current) onViewSwapRef.current();
      }

      drawWipe(t);

      if (t < END + 50) {
        animFrameId = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, W, H);
        setIsActive(false);
      }
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      stopped = true;
      cancelAnimationFrame(animFrameId);
      if (ctx) ctx.clearRect(0, 0, W, H);
      setIsActive(false);
    };
  }, [trigger, activeWipeColor, parsedSpeed, CELL, BAND, direction]);

  if (!isActive && trigger === 0) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] h-full w-full overflow-hidden",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}

export function RouteTransitionProvider({
  children,
  navigate,
  className,
  wipeColor,
  direction,
  speed,
  cellSize,
  bandWidth,
}: Omit<PixelSwipePageTransitionProps, "trigger" | "onViewSwap"> & {
  children: React.ReactNode;
  navigate: (url: string) => void;
}) {
  const [trigger, setTrigger] = useState(0);
  const [pendingUrl, setPendingUrl] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      const targetAttr = target.getAttribute("target");

      if (target.href === window.location.href) {
        return;
      }

      if (
        href &&
        !href.startsWith("http") &&
        !href.startsWith("//") &&
        !href.startsWith("#") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:") &&
        !href.startsWith("javascript:") &&
        targetAttr !== "_blank" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        e.preventDefault();
        e.stopPropagation();

        setPendingUrl(href);
        setTrigger((prev) => prev + 1);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, []);

  const handleViewSwap = () => {
    if (pendingUrl) {
      navigate(pendingUrl);
    }
  };

  return (
    <>
      {mounted && (
        <PixelSwipePageTransition
          trigger={trigger}
          onViewSwap={handleViewSwap}
          className={className}
          wipeColor={wipeColor}
          direction={direction}
          speed={speed}
          cellSize={cellSize}
          bandWidth={bandWidth}
        />
      )}
      {children}
    </>
  );
}

export { PixelSwipePageTransition };

/**
 * Great UI Component
 *
 * Built with React, TypeScript, Tailwind CSS, and Framer Motion.
 * Designed to be accessible, customizable, and production-ready.
 *
 * Website: https://great-ui.com
 * GitHub: https://github.com/Saurabh-2607/GreatUI
 * X (Great UI): https://x.com/GreatUIHQ
 *
 * Released under the Great UI Custom License Agreement.
 * Contributions, issues, and feature requests are always welcome.
 *
 * Author: Saurabh Sharma
 * X: https://x.com/srbh_here
 */
