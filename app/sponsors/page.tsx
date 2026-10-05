import React from "react";
import Link from "next/link";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BackgroundGrid from "@/components/site/BackgroundGrid";
import Container from "@/components/site/Container";
import Button from "@/components/site/ui/Button";
import { SectionIcon } from "@/components/site/Icons";
import SponsorStats from "@/components/site/SponsorStats";
import CarbonAds from "@/components/site/CarbonAds";

export default function SponsorsPage() {
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

        <SponsorStats />

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

        <div className="mt-12 flex w-full justify-center">
          <CarbonAds className="mx-auto w-full max-w-100" />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
