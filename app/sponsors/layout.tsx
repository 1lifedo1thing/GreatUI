import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | Great UI",
  description:
    "Support independent open-source component development and review Great UI's platform statistics and impact.",
  openGraph: {
    title: "Sponsors | Great UI",
    description:
      "Support independent open-source component development and review Great UI's platform statistics and impact.",
    images: [
      "/api/og?title=Sponsors&description=Support%20independent%20open-source%20component%20development.",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsors | Great UI",
    description:
      "Support independent open-source component development and review Great UI's platform statistics and impact.",
    images: [
      "/api/og?title=Sponsors&description=Support%20independent%20open-source%20component%20development.",
    ],
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
