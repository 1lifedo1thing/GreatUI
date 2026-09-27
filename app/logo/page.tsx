import BackgroundGrid from "@/components/site/BackgroundGrid";
import Container from "@/components/site/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo",
  description: "Official Great UI logo assets and typography representation.",
  openGraph: {
    title: "Logo - Great UI",
    description: "Official Great UI logo assets and typography representation.",
    url: "https://great-ui.com/logo",
  },
  alternates: {
    canonical: "/logo",
  },
};

export default function LogoPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      <BackgroundGrid />
      <main className="flex w-full flex-1 flex-col justify-center">
        <Container className="flex flex-1 flex-col items-center justify-center">
          <div className="relative flex w-full flex-row items-center justify-center gap-3 py-16 text-4xl leading-none font-extrabold tracking-tight uppercase sm:gap-4 sm:py-20 sm:text-6xl md:gap-5 md:py-24 md:text-7xl">
            <img
              src="/Great-UI.png"
              alt="Great UI Logo"
              className="h-[1em] w-auto object-contain"
            />
            <h1 className="font-[family-name:var(--font-tt-commons)]">
              Great <span className="text-[#f6821f]">UI</span>
            </h1>
          </div>
        </Container>
      </main>
    </div>
  );
}
