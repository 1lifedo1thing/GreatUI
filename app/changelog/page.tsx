import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BackgroundGrid from "@/components/site/BackgroundGrid";
import Container from "@/components/site/Container";
import ChangelogTimeline from "@/components/site/ChangelogTimeline";
import CarbonAds from "@/components/site/CarbonAds";

export const metadata = {
  title: "Changelog",
  description:
    "Stay up to date with the latest additions, improvements, and fixes in Great UI.",
  openGraph: {
    title: "Changelog | Great UI",
    description:
      "Stay up to date with the latest additions, improvements, and fixes in Great UI.",
    images: [
      "/api/og?title=Changelog&description=Stay%20up%20to%20date%20with%20the%20latest%20additions%2C%20improvements%2C%20and%20fixes%20in%20Great%20UI.",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | Great UI",
    description:
      "Stay up to date with the latest additions, improvements, and fixes in Great UI.",
    images: [
      "/api/og?title=Changelog&description=Stay%20up%20to%20date%20with%20the%20latest%20additions%2C%20improvements%2C%20and%20fixes%20in%20Great%20UI.",
    ],
  },
};

export default function ChangelogPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      <BackgroundGrid />
      <Navbar />

      <Container>
        <main className="relative mx-4 py-24 md:py-32">
          <div className="mb-20">
            <h1 className="mb-4 text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl md:text-6xl dark:text-neutral-300">
              Changelog
            </h1>
            <p className="max-w-4xl text-base text-balance text-neutral-600 sm:text-lg dark:text-neutral-400">
              New updates and improvements to Great UI.
            </p>
          </div>

          <ChangelogTimeline />

          <div className="mt-20 flex w-full justify-center">
            <CarbonAds className="mx-auto w-full max-w-100" />
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  );
}
