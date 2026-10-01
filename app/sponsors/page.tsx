import React from "react";
import Link from "next/link";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BackgroundGrid from "@/components/site/BackgroundGrid";
import Container from "@/components/site/Container";
import Button from "@/components/site/ui/Button";
import { SectionIcon } from "@/components/site/Icons";

interface StatData {
  totalViews: string;
  views30d: string;
  visitors30d: string;
  githubStars: string;
  countries: { name: string; percentage: number; label: string }[];
  routes: { path: string; views: string }[];
}

interface PostHogResultItem {
  label?: string;
  aggregated_value?: number;
}

interface PostHogTile {
  insight?: {
    name?: string;
    result?: PostHogResultItem[];
  };
}

const formatNumber = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};

async function getStats(): Promise<StatData> {
  const defaultData: StatData = {
    totalViews: "0",
    views30d: "0",
    visitors30d: "0",
    githubStars: "0",
    countries: [],
    routes: [],
  };

  try {
    const [posthogRes, githubRes] = await Promise.all([
      fetch(
        "https://us.posthog.com/shared/VFBMUO1GCWXUdU5plQvAvxtR5mfgKA.json",
        {
          cache: "no-store",
        },
      ).catch(() => null),
      fetch("https://api.github.com/repos/Saurabh-2607/GreatUI", {
        next: { revalidate: 60 },
      }).catch(() => null),
    ]);

    const posthogData = posthogRes?.ok ? await posthogRes.json() : null;
    const githubData = githubRes?.ok ? await githubRes.json() : null;

    const tiles: PostHogTile[] = posthogData?.dashboard?.tiles || [];

    let totalViews = defaultData.totalViews;
    let views30d = defaultData.views30d;
    let visitors30d = defaultData.visitors30d;
    const githubStars = githubData?.stargazers_count
      ? formatNumber(githubData.stargazers_count)
      : defaultData.githubStars;
    let countries = defaultData.countries;
    let routes = defaultData.routes;

    for (const tile of tiles) {
      const name = tile.insight?.name;
      const results = tile.insight?.result || [];

      if (
        name === "Total views (all time)" &&
        results.length > 0 &&
        typeof results[0].aggregated_value === "number"
      ) {
        totalViews = formatNumber(results[0].aggregated_value);
      } else if (name === "Page views (last 30 days)") {
        const val = results.find((r) => typeof r.aggregated_value === "number");
        if (val?.aggregated_value)
          views30d = formatNumber(val.aggregated_value);
      } else if (name === "Visitors (last 30 days)") {
        const val = results.find((r) => typeof r.aggregated_value === "number");
        if (val?.aggregated_value)
          visitors30d = formatNumber(val.aggregated_value);
      } else if (name === "Views by country (last 30 days)") {
        const validResults = results.filter(
          (
            r,
          ): r is PostHogResultItem & {
            label: string;
            aggregated_value: number;
          } =>
            Boolean(
              r.label &&
              r.label !== "$$_posthog_breakdown_other_$$" &&
              typeof r.aggregated_value === "number",
            ),
        );
        const sorted = validResults
          .sort((a, b) => b.aggregated_value - a.aggregated_value)
          .slice(0, 7);
        if (sorted.length > 0) {
          const max = sorted[0].aggregated_value;
          countries = sorted.map((r) => ({
            name: r.label,
            percentage: Math.round((r.aggregated_value / max) * 100),
            label: formatNumber(r.aggregated_value),
          }));
        }
      } else if (name === "Routes visited (last 30 days)") {
        const validResults = results.filter(
          (
            r,
          ): r is PostHogResultItem & {
            label: string;
            aggregated_value: number;
          } =>
            Boolean(
              r.label &&
              r.label !== "$$_posthog_breakdown_other_$$" &&
              typeof r.aggregated_value === "number",
            ),
        );
        const sorted = validResults
          .sort((a, b) => b.aggregated_value - a.aggregated_value)
          .slice(0, 7);
        if (sorted.length > 0) {
          routes = sorted.map((r) => ({
            path: r.label,
            views: formatNumber(r.aggregated_value),
          }));
        }
      }
    }

    return {
      totalViews,
      views30d,
      visitors30d,
      githubStars,
      countries,
      routes,
    };
  } catch {
    return defaultData;
  }
}

export default async function SponsorsPage() {
  const stats = await getStats();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      <BackgroundGrid />
      <Navbar />

      <Container className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 py-4 text-center sm:gap-4 sm:py-6 md:py-10">
          <h1 className="w-full text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl md:text-5xl xl:text-6xl xl:tracking-tighter dark:text-neutral-300">
            Sponsor Great UI
          </h1>
          <p className="max-w-4xl text-base text-balance text-neutral-600 sm:text-lg md:text-lg xl:text-xl dark:text-neutral-400">
            Reach thousands of developers and designers worldwide. View our
            latest platform statistics below to see the impact of Great UI.
          </p>
          <div className="flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none">
            <a href="#tiers">
              <Button
                variant="primary"
                size="md"
                leftIcon={<SectionIcon className="h-4 w-4" />}
              >
                Become a Sponsor
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:gap-2 sm:rounded-3xl sm:p-8 dark:bg-neutral-900">
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.totalViews}
            </span>
            <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
              Total Views
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:gap-2 sm:rounded-3xl sm:p-8 dark:bg-neutral-900">
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.views30d}
            </span>
            <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
              Views (Last 30 Days)
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:gap-2 sm:rounded-3xl sm:p-8 dark:bg-neutral-900">
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.visitors30d}
            </span>
            <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
              Visitors (Last 30 Days)
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-100 p-4 text-center sm:gap-2 sm:rounded-3xl sm:p-8 dark:bg-neutral-900">
            <span className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {stats.githubStars}
            </span>
            <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
              GitHub Stars
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">
          <div className="flex h-full flex-col rounded-2xl bg-neutral-100 p-4 sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-neutral-900 sm:mb-6 sm:text-xl dark:text-white">
              Top Countries
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {stats.countries.map((country) => (
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

          <div className="flex h-full flex-col rounded-2xl bg-neutral-100 p-4 sm:rounded-3xl sm:p-6 dark:bg-neutral-900">
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-neutral-900 sm:mb-6 sm:text-xl dark:text-white">
              Most Visited Routes
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {stats.routes.map((route) => (
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

        <div className="mt-12 flex flex-col items-start text-left sm:mt-16 md:mt-20">
          <h2 className="w-full text-2xl leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-300">
            Logo Placements & Sizes
          </h2>
          <p className="mt-2 max-w-4xl text-sm text-balance text-neutral-600 sm:text-base md:text-lg dark:text-neutral-400">
            Visual representation of logo sizes and placement tiers across Great
            UI.
          </p>

          <div className="mt-6 flex w-full flex-col gap-6 sm:mt-8">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col justify-between gap-1 px-1 sm:flex-row sm:items-center">
                <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                  Diamond / Platinum Tier
                </span>
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                  Largest Size · Landing Page & Sponsors Page
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <a
                  href="#tiers"
                  className="group relative flex h-40 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-neutral-100 p-4 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-48 sm:rounded-3xl sm:p-6 md:h-56 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-4xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-5xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-base md:text-lg dark:text-neutral-400">
                    Become a Platinum Sponsor
                  </span>
                </a>
                <a
                  href="#tiers"
                  className="group relative hidden h-40 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-neutral-100 p-4 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:flex sm:h-48 sm:rounded-3xl sm:p-6 md:h-56 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-4xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-5xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-base md:text-lg dark:text-neutral-400">
                    Become a Platinum Sponsor
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col justify-between gap-1 px-1 sm:flex-row sm:items-center">
                <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                  Gold Tier
                </span>
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                  Featured Size · Landing Page & Sponsors Page
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
                <a
                  href="#tiers"
                  className="group relative flex h-32 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-neutral-100 p-3 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-36 sm:rounded-3xl sm:p-4 md:h-44 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-3xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-4xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-sm md:text-base dark:text-neutral-400">
                    Become a Gold Sponsor
                  </span>
                </a>
                <a
                  href="#tiers"
                  className="group relative hidden h-32 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-neutral-100 p-3 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:flex sm:h-36 sm:rounded-3xl sm:p-4 md:h-44 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-3xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-4xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-sm md:text-base dark:text-neutral-400">
                    Become a Gold Sponsor
                  </span>
                </a>
                <a
                  href="#tiers"
                  className="group relative hidden h-32 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-neutral-100 p-3 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-36 sm:rounded-3xl sm:p-4 md:flex md:h-44 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-3xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-4xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-sm md:text-base dark:text-neutral-400">
                    Become a Gold Sponsor
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col justify-between gap-1 px-1 sm:flex-row sm:items-center">
                <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                  Silver Tier
                </span>
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                  Community Size · Landing Page & Sponsors Page
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-4">
                <a
                  href="#tiers"
                  className="group relative flex h-24 cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl bg-neutral-100 p-2 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:h-28 sm:rounded-3xl sm:p-3 md:h-36 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-2xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-3xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-xs md:text-sm dark:text-neutral-400">
                    Become a Silver Sponsor
                  </span>
                </a>
                <a
                  href="#tiers"
                  className="group relative hidden h-24 cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl bg-neutral-100 p-2 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:flex sm:h-28 sm:rounded-3xl sm:p-3 md:h-36 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-2xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-3xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-xs md:text-sm dark:text-neutral-400">
                    Become a Silver Sponsor
                  </span>
                </a>
                <a
                  href="#tiers"
                  className="group relative hidden h-24 cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl bg-neutral-100 p-2 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:flex sm:h-28 sm:rounded-3xl sm:p-3 md:h-36 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-2xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-3xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-xs md:text-sm dark:text-neutral-400">
                    Become a Silver Sponsor
                  </span>
                </a>
                <a
                  href="#tiers"
                  className="group relative hidden h-24 cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl bg-neutral-100 p-2 text-center no-underline transition-all duration-300 hover:bg-neutral-200/70 sm:flex sm:h-28 sm:rounded-3xl sm:p-3 md:h-36 dark:bg-neutral-900 dark:hover:bg-neutral-800/80"
                >
                  <span className="text-2xl font-light text-neutral-400 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-3xl dark:text-neutral-500">
                    +
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-neutral-500 transition-colors duration-300 group-hover:text-[#f6821f] sm:text-xs md:text-sm dark:text-neutral-400">
                    Become a Silver Sponsor
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="tiers"
          className="mt-12 flex flex-col items-start text-left sm:mt-16 md:mt-20"
        >
          <h2 className="w-full text-2xl leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-300">
            Sponsorship Tiers
          </h2>
          <p className="mt-2 max-w-4xl text-sm text-balance text-neutral-600 sm:text-base md:text-lg dark:text-neutral-400">
            Compare tier benefits and choose the best fit for you or your
            organization.
          </p>

          <div className="mt-8 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-6">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-300/60 bg-neutral-200/50 p-6 shadow-sm sm:p-8 dark:border-neutral-700/50 dark:bg-neutral-800/40">
              <div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                      Platinum
                    </h3>
                    <span className="rounded-full bg-[#f6821f]/15 px-2.5 py-0.5 text-xs font-semibold text-[#f6821f] dark:bg-[#f6821f]/20">
                      Featured
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                    Maximum visibility and prominent showcase across all Great
                    UI channels.
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    $200
                  </span>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    / mo
                  </span>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                    + taxes
                  </span>
                </div>

                <a
                  href="https://checkout.dodopayments.com/buy/pdt_0NonCY2sX6TEsbhaluASt?quantity=1&redirect_url=https%3A%2F%2Fgreat-ui.com%2Fsponsors%2Fsuccess%3Ftier%3Dplatinum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full"
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full font-semibold"
                  >
                    Become a Platinum Sponsor
                  </Button>
                </a>

                <div className="my-6 h-px w-full bg-neutral-300/60 dark:bg-neutral-700/60" />

                <ul className="flex flex-col gap-3 text-xs text-neutral-700 sm:text-sm dark:text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Public appreciation and shoutout on X</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-semibold text-neutral-900 dark:text-white">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Largest logo on GitHub README</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-semibold text-neutral-900 dark:text-white">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Largest logo on Sponsors page</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-semibold text-neutral-900 dark:text-white">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Largest logo on Great UI Home page</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Featured in the top Hero section</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Logo on social preview cards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-neutral-100 p-6 sm:p-8 dark:bg-neutral-900">
              <div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Gold
                  </h3>
                  <p className="text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                    High-impact placement for established brands and growing
                    companies.
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    $150
                  </span>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    / mo
                  </span>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                    + taxes
                  </span>
                </div>

                <a
                  href="https://checkout.dodopayments.com/buy/pdt_0NonCOb7X4ITRIJ9YdkK7?quantity=1&redirect_url=https%3A%2F%2Fgreat-ui.com%2Fsponsors%2Fsuccess%3Ftier%3Dgold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full"
                >
                  <Button variant="outline" size="md" className="w-full">
                    Become a Gold Sponsor
                  </Button>
                </a>

                <div className="my-6 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

                <ul className="flex flex-col gap-3 text-xs text-neutral-700 sm:text-sm dark:text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Public appreciation and shoutout on X</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Larger logo on GitHub README</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Larger logo on Sponsors page</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Larger logo on Great UI Home page</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Featured in the top Hero section</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-neutral-100 p-6 sm:p-8 dark:bg-neutral-900">
              <div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Silver
                  </h3>
                  <p className="text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                    Community support with featured visibility on Great UI
                    channels.
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    $100
                  </span>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    / mo
                  </span>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                    + taxes
                  </span>
                </div>

                <a
                  href="https://checkout.dodopayments.com/buy/pdt_0Non3d7DjQUvu1J2rjwmz?quantity=1&redirect_url=https%3A%2F%2Fgreat-ui.com%2Fsponsors%2Fsuccess%3Ftier%3Dsilver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full"
                >
                  <Button variant="outline" size="md" className="w-full">
                    Become a Silver Sponsor
                  </Button>
                </a>

                <div className="my-6 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

                <ul className="flex flex-col gap-3 text-xs text-neutral-700 sm:text-sm dark:text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Public appreciation and shoutout on X</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Logo included in GitHub README</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Listed on official Sponsors page</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900 dark:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Logo included on Great UI Home page</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs font-medium text-neutral-500 dark:text-neutral-400">
          Monthly recurring subscription in USD. Cancel anytime. Processed by
          Dodo Payments. Learn more about our{" "}
          <Link
            href="/terms#cancellation-and-refunds"
            className="underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-300"
          >
            cancellation and refund terms
          </Link>
          .
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-neutral-100 p-6 text-center sm:mt-16 sm:flex-row sm:rounded-3xl sm:p-8 sm:text-left md:mt-20 dark:bg-neutral-900">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl md:text-2xl dark:text-white">
              Have questions about sponsoring?
            </h3>
            <p className="text-xs text-neutral-600 sm:text-sm md:text-base dark:text-neutral-400">
              Need custom placements, annual invoicing, or have questions before
              purchasing? We&apos;re here to help.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:shrink-0 sm:flex-row sm:items-center">
            <a
              href="mailto:saurabh.nayla@gmail.com?subject=Great%20UI%20Sponsorship%20Inquiry"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full font-semibold sm:w-auto"
              >
                Email Us
              </Button>
            </a>
            <a
              href="https://x.com/srbh_here"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="md" className="w-full sm:w-auto">
                DM on X
              </Button>
            </a>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
