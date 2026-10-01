import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BackgroundGrid from "@/components/site/BackgroundGrid";
import Container from "@/components/site/Container";
import Button from "@/components/site/ui/Button";

type TierKey = "platinum" | "gold" | "silver";

function normalizeTier(raw: string | null | undefined): TierKey | null {
  if (!raw) return null;
  const lower = raw.toLowerCase().trim();
  if (lower === "platinum" || lower.includes("plat")) return "platinum";
  if (lower === "silver" || lower.includes("silv")) return "silver";
  if (lower === "gold" || lower.includes("gold")) return "gold";
  return null;
}

const TIER_NAMES: Record<TierKey, string> = {
  platinum: "Platinum",
  gold: "Gold",
  silver: "Silver",
};

const REQUIREMENTS = [
  {
    step: "1",
    title: "Brand Logo",
    description:
      "Provide an SVG vector logo for crisp rendering across all screen resolutions. If using PNG, ensure it has a transparent background and is at least 512px wide.",
  },
  {
    step: "2",
    title: "Light & Dark Variants",
    description:
      "Great UI supports both light and dark modes. Please provide versions for both themes, or a monochrome version that adapts seamlessly.",
  },
  {
    step: "3",
    title: "Target Destination URL",
    description:
      "The exact website or landing page link for your logo, including any custom tracking or UTM parameters you would like attached.",
  },
  {
    step: "4",
    title: "Display & Brand Name",
    description:
      "Your company, brand, or project name spelled, capitalized, and formatted exactly how you want it to appear.",
  },
  {
    step: "5",
    title: "Social Handles",
    description:
      "Your X (Twitter), LinkedIn, or GitHub handles for partner announcements, release highlights, and public appreciation posts.",
  },
];

export default async function SponsorSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string; plan?: string }>;
}) {
  const params = await searchParams;
  const rawTier = params?.tier || params?.plan;
  const selectedTier = normalizeTier(rawTier);

  if (!selectedTier) {
    notFound();
  }

  const tierName = TIER_NAMES[selectedTier];
  const emailSubject = encodeURIComponent(
    `Great UI ${tierName} Sponsorship Assets`,
  );
  const emailBody = encodeURIComponent(
    `Hi Saurabh,\n\nHere are our details and assets for the ${tierName} sponsorship on Great UI:\n\n` +
      `1. Brand / Company Name:\n` +
      `2. Public Display Name:\n` +
      `3. Target Destination URL:\n` +
      `4. Logo Links / Attachments (SVG preferred):\n` +
      `5. X / Twitter Handle:\n` +
      `6. LinkedIn / GitHub Handle:\n`,
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      <BackgroundGrid />
      <Navbar />
      <Container className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-start gap-3 text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-100">
              Welcome aboard as a {tierName} sponsor.
            </h1>

            <p className="text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
              Thank you for backing Great UI. Your payment has been confirmed
              and Dodo Payments has emailed your receipt. Your sponsorship
              directly powers new component releases and keeps everything open
              source for developers worldwide.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start text-left sm:mt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Onboarding & Assets
            </h2>
            <p className="mt-1 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
              Share the following details and your sponsorship placement will go
              live within 3 business days.
            </p>

            <div className="mt-6 flex w-full flex-col gap-3.5">
              {REQUIREMENTS.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col justify-start rounded-3xl bg-neutral-100 p-5 sm:p-6 dark:bg-neutral-900"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white dark:bg-white dark:text-neutral-900">
                      {item.step}
                    </span>
                    <span className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed font-medium text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:saurabh.nayla@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              >
                <Button variant="primary" size="md" className="font-semibold">
                  Submit Assets via Email
                </Button>
              </a>
              <a
                href="https://x.com/srbh_here"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  Direct Message on X
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <p>
              Your subscription renews monthly and can be managed, updated, or
              cancelled anytime via the billing portal link inside your Dodo
              Payments receipt. Your placement remains active through the end of
              your billing cycle.
            </p>
            <p>
              Have questions or need custom placement assistance? Reply directly
              to your receipt or email{" "}
              <a
                href="mailto:saurabh.nayla@gmail.com"
                className="underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                saurabh.nayla@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
