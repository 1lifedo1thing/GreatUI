import React from "react";
import Link from "next/link";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BackgroundGrid from "@/components/site/BackgroundGrid";
import Container from "@/components/site/Container";
import CarbonAds from "@/components/site/CarbonAds";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Great UI",
  description:
    "The terms of service for Great UI: licensing, component registry usage, and sponsorship subscriptions.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Great UI",
    description:
      "The terms of service for Great UI: licensing, component registry usage, and sponsorship subscriptions.",
    images: [
      "/api/og?title=Terms%20of%20Service&description=Licensing%2C%20registry%20usage%2C%20and%20sponsorship%20terms.",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Great UI",
    description:
      "The terms of service for Great UI: licensing, component registry usage, and sponsorship subscriptions.",
    images: [
      "/api/og?title=Terms%20of%20Service&description=Licensing%2C%20registry%20usage%2C%20and%20sponsorship%20terms.",
    ],
  },
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      <BackgroundGrid />
      <Navbar />

      <Container className="py-12 md:py-20">
        <article className="mx-auto max-w-3xl">
          <header className="flex flex-col items-start gap-3 border-b border-neutral-200 pb-10 dark:border-neutral-800">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-100">
              Terms of Service
            </h1>
            <p className="text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
              The terms governing your use of Great UI, the open-source
              component registry, its licensing, and sponsorship advertising
              subscriptions.
            </p>
            <div className="mt-2 text-xs font-medium text-neutral-400 dark:text-neutral-500">
              Last updated October 1, 2026
            </div>
          </header>

          <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-neutral-700 sm:text-base sm:leading-relaxed dark:text-neutral-300">
            <section id="agreement" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                1. Agreement
              </h2>
              <p>
                These terms govern your access to and use of Great UI at{" "}
                <Link
                  href="/"
                  className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white"
                >
                  https://great-ui.com
                </Link>
                , the components published in its registry, and any paid
                offerings or sponsorships. The site and project are created and
                maintained by Saurabh Sharma, an independent developer based in
                India.
              </p>
              <p>
                By accessing the site, downloading or copying components, or
                purchasing a sponsorship, you agree to be bound by these terms.
                In these terms, &ldquo;the registry&rdquo; refers to the free
                components published on Great UI and its GitHub repository, and
                &ldquo;paid offerings&rdquo; refers to sponsorship advertising
                tiers.
              </p>
            </section>

            <section id="registry-license" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                2. The Registry and License
              </h2>
              <p>
                Every component published in the Great UI registry is free to
                use, customize, and integrate. The code is distributed under the
                Great UI Custom License (incorporating Commons Clause
                conditions).
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">
                  What you can do:
                </strong>{" "}
                You are granted complete permission to use, modify, adapt, and
                ship the components in personal, open-source, and commercial
                projects, including closed-source applications and client
                deliverables. You retain full ownership of your application
                code.
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">
                  What you cannot do:
                </strong>{" "}
                You may not resell, redistribute, or sublicense the components
                (or modified versions thereof) as a standalone UI library, theme
                pack, template bundle, or competing component repository. The
                license covers the code itself; the name &ldquo;Great UI&rdquo;,
                the logo, brand identity, and website design remain our
                proprietary property.
              </p>
            </section>

            <section id="attribution" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                3. Attribution
              </h2>
              <p>
                While not strictly mandatory for private projects, visible
                attribution is deeply appreciated. Crediting Great UI with a
                link to{" "}
                <Link
                  href="/"
                  className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white"
                >
                  https://great-ui.com
                </Link>{" "}
                in your project footer, README, or documentation helps sustain
                the project and keep it open for everyone.
              </p>
            </section>

            <section id="contributions" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                4. Contributions
              </h2>
              <p>
                When submitting code, components, or improvements to Great UI
                via GitHub pull requests or issues, you confirm you have the
                right to do so and license your contributions under the
                project&apos;s license terms. You retain copyright to your
                original work, while granting Great UI the right to adapt,
                publish, and maintain the contribution.
              </p>
            </section>

            <section id="sponsorship" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                5. What Sponsorship Is
              </h2>
              <p>
                Sponsorship is a recurring monthly advertising and promotional
                placement. Your brand logo, display name, and destination URL
                are displayed across Great UI according to the tier selected on
                our{" "}
                <Link
                  href="/sponsors"
                  className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white"
                >
                  Sponsors page
                </Link>
                .
              </p>
              <p>
                Sponsorship funds continuous development and maintenance of the
                open-source library. Sponsorship is strictly an advertising
                service and does not constitute equity, priority engineering,
                roadmap governance, or custom component development.
              </p>
            </section>

            <section id="pricing-and-billing" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                6. Pricing and Billing
              </h2>
              <p>
                Sponsorship tiers are Platinum ($200/month), Gold ($150/month),
                and Silver ($100/month), billed in US Dollars on a recurring
                monthly subscription basis.
              </p>
              <p>
                Your initial payment is processed at checkout, and your
                subscription automatically renews on the same date each month
                until cancelled. All payments are processed securely by{" "}
                <strong className="text-neutral-900 dark:text-white">
                  Dodo Payments
                </strong>
                , our merchant of record. Applicable sales taxes, VAT, or GST
                are calculated and added at checkout by Dodo Payments, and
                itemized invoice receipts are sent by email.
              </p>
              <p>
                Active sponsors retain their locked-in pricing for the entire
                uninterrupted duration of their subscription. We will provide at
                least 30 days notice via email before any pricing modifications
                take effect on renewals.
              </p>
            </section>

            <section id="delivery" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                7. Placement Delivery
              </h2>
              <p>
                Following your initial payment, please share your brand logo
                (SVG preferred or 2x transparent PNG), light and dark mode
                versions, target link destination, and social handles. We review
                and publish your placement live across Great UI within 3
                business days of receiving your assets.
              </p>
            </section>

            <section
              id="cancellation-and-refunds"
              className="flex flex-col gap-3"
            >
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                8. Cancellation and Refunds
              </h2>
              <p>
                You can cancel your recurring sponsorship at any time via the
                self-serve billing portal link in your Dodo Payments receipt, or
                by writing to{" "}
                <a
                  href="mailto:saurabh.nayla@gmail.com"
                  className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white"
                >
                  saurabh.nayla@gmail.com
                </a>
                .
              </p>
              <p>
                Cancelling stops all future charges immediately. Your placement
                remains active through the remainder of the billing period you
                have already paid for, after which it is smoothly unlisted.
              </p>
              <p>
                <strong className="text-neutral-900 dark:text-white">
                  14-Day Refund Guarantee:
                </strong>{" "}
                If you cancel within 14 days of your initial first-time
                sponsorship payment, contact us to receive a full refund.
                Renewal payments and cancellations after 14 days are
                non-refundable since promotional advertising services have
                already been delivered for that period.
              </p>
              <p>
                Refunds are processed back to the original payment method
                through Dodo Payments and typically appear within 5 to 10
                business days.
              </p>
            </section>

            <section id="sponsor-content" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                9. Sponsor Content and Standards
              </h2>
              <p>
                You represent that you own or hold the necessary rights to all
                trademarks and brand assets you submit. You grant us permission
                to display those assets for the duration of the active
                sponsorship.
              </p>
              <p>
                We reserve the right to decline or remove any sponsorship (with
                a pro-rata refund for the remaining billing period) if the brand
                or destination URL promotes illegal activities, malicious
                software, deceptive advertising, adult content, gambling, hate
                speech, or content incompatible with our developer community
                values. Placement constitutes advertising, not an official
                endorsement.
              </p>
            </section>

            <section id="acceptable-use" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                10. Acceptable Use
              </h2>
              <p>
                You agree not to disrupt, overload, or compromise the site
                infrastructure, scrape content in a manner that degrades
                performance for other developers, or distribute malicious
                payloads. We reserve the right to restrict or block access that
                violates these terms.
              </p>
            </section>

            <section id="no-warranty" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                11. Disclaimer of Warranties
              </h2>
              <p>
                Great UI, its documentation, and all components are provided on
                an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis,
                without warranty of any kind, express or implied, including
                merchantability, fitness for a particular purpose, and
                non-infringement. You are responsible for testing and validating
                any code before deploying it to production environments.
              </p>
            </section>

            <section
              id="limitation-of-liability"
              className="flex flex-col gap-3"
            >
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                12. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, our total
                liability for any claim arising from or related to the site, the
                components, or sponsorships is strictly limited to the amount
                paid by you in the 12 months preceding the claim (or $0 if you
                have made no purchases). We are not liable for indirect,
                punitive, or consequential damages, including loss of revenue or
                data.
              </p>
            </section>

            <section id="governing-law" className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                13. Governing Law & Dispute Resolution
              </h2>
              <p>
                These terms are governed by the laws of India, with jurisdiction
                in Indian courts. If you experience an issue or have a concern
                regarding a sponsorship or payment, please contact us directly
                at{" "}
                <a
                  href="mailto:saurabh.nayla@gmail.com"
                  className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white"
                >
                  saurabh.nayla@gmail.com
                </a>
                . Both parties agree to attempt to resolve any dispute
                informally in good faith for at least 30 days before initiating
                formal legal proceedings.
              </p>
            </section>

            <section
              id="contact"
              className="flex flex-col gap-3 rounded-3xl bg-neutral-100 p-6 sm:p-8 dark:bg-neutral-900"
            >
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl dark:text-neutral-100">
                Contact & Support
              </h2>
              <p>
                For questions regarding these terms, licensing, billing
                inquiries, or refunds, reach out to us at:
              </p>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <div>
                  Email:{" "}
                  <a
                    href="mailto:saurabh.nayla@gmail.com"
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    saurabh.nayla@gmail.com
                  </a>
                </div>
                <div>
                  X (Twitter):{" "}
                  <a
                    href="https://x.com/srbh_here"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    @srbh_here
                  </a>
                </div>
                <div>
                  Project GitHub:{" "}
                  <a
                    href="https://github.com/Saurabh-2607/GreatUI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    github.com/Saurabh-2607/GreatUI
                  </a>
                </div>
              </div>
            </section>
          </div>
        </article>

        <div className="mt-16 flex w-full justify-center">
          <CarbonAds className="mx-auto w-full max-w-100" />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
