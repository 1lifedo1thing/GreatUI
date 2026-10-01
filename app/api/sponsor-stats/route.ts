import { NextResponse } from "next/server";
import { components } from "@/lib/registry";

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

export const runtime = "nodejs";

export async function GET() {
  const defaultData = {
    totalViews: "0",
    views30d: "0",
    visitors30d: "0",
    githubStars: "0",
    totalComponents: `${components.length}+`,
    countries: [] as { name: string; percentage: number; label: string }[],
    routes: [] as { path: string; views: string }[],
  };

  try {
    const [posthogRes, githubRes] = await Promise.all([
      fetch(
        "https://us.posthog.com/shared/VFBMUO1GCWXUdU5plQvAvxtR5mfgKA.json",
        {
          next: { revalidate: 900 },
          signal: AbortSignal.timeout(6000),
        },
      ).catch(() => null),
      fetch("https://api.github.com/repos/Saurabh-2607/GreatUI", {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(3000),
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

    return NextResponse.json({
      totalViews,
      views30d,
      visitors30d,
      githubStars,
      totalComponents: `${components.length}+`,
      countries,
      routes,
    });
  } catch {
    return NextResponse.json(defaultData);
  }
}
