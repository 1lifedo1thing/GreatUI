"use client";

import { useEffect, useState } from "react";

export interface StatData {
  totalViews: string;
  views30d: string;
  visitors30d: string;
  githubStars: string;
  totalComponents?: string;
  countries: { name: string; percentage: number; label: string }[];
  routes: { path: string; views: string }[];
}

export function SponsorStats() {
  const [stats, setStats] = useState<StatData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      try {
        const res = await fetch("/api/sponsor-stats");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data) {
            setStats(data);
          }
        }
      } catch {
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:h-32 sm:gap-2 sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
          {isLoading || !stats ? (
            <div className="h-7 w-20 animate-pulse rounded-lg bg-neutral-200 sm:h-9 sm:w-28 dark:bg-neutral-800" />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.totalViews}
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
            Total Views
          </span>
        </div>

        <div className="flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:h-32 sm:gap-2 sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
          {isLoading || !stats ? (
            <div className="h-7 w-20 animate-pulse rounded-lg bg-neutral-200 sm:h-9 sm:w-28 dark:bg-neutral-800" />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.views30d}
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
            Views (30 Days)
          </span>
        </div>

        <div className="flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:h-32 sm:gap-2 sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
          {isLoading || !stats ? (
            <div className="h-7 w-20 animate-pulse rounded-lg bg-neutral-200 sm:h-9 sm:w-28 dark:bg-neutral-800" />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.visitors30d}
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
            Visitors (30 Days)
          </span>
        </div>

        <div className="flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:h-32 sm:gap-2 sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
          {isLoading || !stats ? (
            <div className="h-7 w-20 animate-pulse rounded-lg bg-neutral-200 sm:h-9 sm:w-28 dark:bg-neutral-800" />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.githubStars}
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
            GitHub Stars
          </span>
        </div>

        <div className="col-span-2 flex h-24 flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:col-span-1 sm:h-32 sm:gap-2 sm:rounded-3xl sm:p-6 md:col-span-1 lg:col-span-1 dark:bg-neutral-900">
          {isLoading || !stats ? (
            <div className="h-7 w-20 animate-pulse rounded-lg bg-neutral-200 sm:h-9 sm:w-28 dark:bg-neutral-800" />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.totalComponents || "50+"}
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
            Components
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">
        <div className="flex min-h-[380px] flex-col rounded-2xl bg-neutral-100 p-4 sm:min-h-[410px] sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
          <h3 className="mb-4 text-lg font-semibold tracking-tight text-neutral-900 sm:mb-6 sm:text-xl dark:text-white">
            Top Countries
          </h3>
          <div className="flex flex-1 flex-col justify-between gap-3 sm:gap-4">
            {isLoading || !stats || stats.countries.length === 0
              ? Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="h-4 w-24 animate-pulse rounded bg-neutral-200 sm:w-32 dark:bg-neutral-800" />
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                      <div className="xs:w-28 h-2 w-20 animate-pulse overflow-hidden rounded-full bg-neutral-200 sm:w-32 dark:bg-neutral-800" />
                      <div className="h-4 w-8 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                    </div>
                  </div>
                ))
              : stats.countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="truncate text-xs font-medium text-neutral-600 sm:text-sm dark:text-neutral-400">
                      {country.name}
                    </span>
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                      <div className="xs:w-28 h-2 w-20 overflow-hidden rounded-full bg-neutral-200 sm:w-32 dark:bg-neutral-800">
                        <div
                          className="h-full rounded-full bg-[#f6821f]"
                          style={{ width: `${country.percentage}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-xs font-medium text-neutral-900 sm:text-sm dark:text-white">
                        {country.label}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="flex min-h-[380px] flex-col rounded-2xl bg-neutral-100 p-4 sm:min-h-[410px] sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
          <h3 className="mb-4 text-lg font-semibold tracking-tight text-neutral-900 sm:mb-6 sm:text-xl dark:text-white">
            Most Visited Routes
          </h3>
          <div className="flex flex-1 flex-col justify-between gap-3 sm:gap-4">
            {isLoading || !stats || stats.routes.length === 0
              ? Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="h-4 w-32 animate-pulse rounded bg-neutral-200 sm:w-44 dark:bg-neutral-800" />
                    <div className="h-4 w-10 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                  </div>
                ))
              : stats.routes.map((route) => (
                  <div
                    key={route.path}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="truncate text-xs font-medium text-neutral-600 sm:text-sm dark:text-neutral-400">
                      {route.path}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-neutral-900 sm:text-sm dark:text-white">
                      {route.views}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-start justify-between gap-2 px-1 text-xs font-medium text-neutral-500 sm:mt-4 sm:flex-row sm:items-center sm:px-2 sm:text-sm dark:text-neutral-400">
        <span>Updated every 30 mins from Posthog</span>
        <a
          href="https://us.posthog.com/shared/VFBMUO1GCWXUdU5plQvAvxtR5mfgKA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          View Origin
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default SponsorStats;
