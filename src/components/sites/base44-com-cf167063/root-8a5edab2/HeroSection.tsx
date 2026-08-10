"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { ChevronIcon, PlusIcon } from "../shared/icons";
import { base44AssetRoot } from "../shared/site";

type HeroTab = "apps" | "websites" | "games" | "tools";

type HeroImage = {
  alt: string;
  frameClassName: string;
  height: number;
  src: string;
  width: number;
};

const heroTabs: HeroTab[] = ["apps", "websites", "games", "tools"];

const heroTabLabels: Record<HeroTab, string> = {
  apps: "Apps",
  websites: "Websites",
  games: "Games",
  tools: "Tools",
};

const promptSamples = [
  "An admin dashboard to manage my customers...",
  "A reporting dashboard with charts for my business...",
  "A gaming platform with leaderboards and tournaments...",
  "An online store for my handmade goods...",
] as const;

const heroImages: Record<HeroTab, HeroImage[]> = {
  apps: [
    {
      alt: "Distance duration analytics app",
      src: `${base44AssetRoot}/hero/apps/distance-duration.webp`,
      width: 560,
      height: 320,
      frameClassName:
        "h-[140px] w-[245px] max-[767px]:h-[86px] max-[767px]:w-[107px]",
    },
    {
      alt: "Badge 88 app",
      src: `${base44AssetRoot}/hero/apps/badge-88.webp`,
      width: 302,
      height: 272,
      frameClassName:
        "h-[100px] w-[111px] max-[767px]:h-[60px] max-[767px]:w-[64px]",
    },
    {
      alt: "Footprint Lab dashboard",
      src: `${base44AssetRoot}/hero/apps/footprint-lab.webp`,
      width: 920,
      height: 472,
      frameClassName:
        "h-[189px] w-[369px] max-[767px]:h-[123px] max-[767px]:w-[240px]",
    },
    {
      alt: "Rising companies dashboard",
      src: `${base44AssetRoot}/hero/apps/rising-companies.webp`,
      width: 260,
      height: 424,
      frameClassName:
        "h-[189px] w-[116px] max-[767px]:h-[123px] max-[767px]:w-[75px]",
    },
    {
      alt: "Altitude dashboard",
      src: `${base44AssetRoot}/hero/apps/altitude.webp`,
      width: 614,
      height: 331,
      frameClassName:
        "h-[189px] w-[350px] max-[767px]:h-[123px] max-[767px]:w-[228px]",
    },
    {
      alt: "Total repetitions dashboard",
      src: `${base44AssetRoot}/hero/apps/total-repetitions.webp`,
      width: 920,
      height: 472,
      frameClassName:
        "h-[189px] w-[369px] max-[767px]:h-[123px] max-[767px]:w-[240px]",
    },
  ],
  websites: [
    {
      alt: "Cart website",
      src: `${base44AssetRoot}/hero/websites/websites-1-cart.webp`,
      width: 272,
      height: 332,
      frameClassName:
        "h-[189px] w-[155px] max-[767px]:h-[123px] max-[767px]:w-[75px]",
    },
    {
      alt: "Naturally Fermented website",
      src: `${base44AssetRoot}/hero/websites/websites-2-fermented.webp`,
      width: 920,
      height: 476,
      frameClassName:
        "h-[189px] w-[365px] max-[767px]:h-[123px] max-[767px]:w-[237px]",
    },
    {
      alt: "State of the art website",
      src: `${base44AssetRoot}/hero/websites/websites-3-stateofart.webp`,
      width: 236,
      height: 414,
      frameClassName:
        "h-[189px] w-[108px] max-[767px]:h-[123px] max-[767px]:w-[70px]",
    },
    {
      alt: "Forms and Company website",
      src: `${base44AssetRoot}/hero/websites/websites-4-forms.webp`,
      width: 920,
      height: 476,
      frameClassName:
        "h-[189px] w-[365px] max-[767px]:h-[123px] max-[767px]:w-[237px]",
    },
    {
      alt: "Globe website",
      src: `${base44AssetRoot}/hero/websites/websites-5-globe.webp`,
      width: 302,
      height: 272,
      frameClassName:
        "h-[100px] w-[111px] max-[767px]:h-[60px] max-[767px]:w-[67px]",
    },
    {
      alt: "Modular Intelligence Units website",
      src: `${base44AssetRoot}/hero/websites/websites-6-modular.webp`,
      width: 926,
      height: 476,
      frameClassName:
        "h-[189px] w-[368px] max-[767px]:h-[123px] max-[767px]:w-[239px]",
    },
  ],
  games: [
    {
      alt: "Level game",
      src: `${base44AssetRoot}/hero/games/games-1-level.webp`,
      width: 272,
      height: 440,
      frameClassName:
        "h-[189px] w-[117px] max-[767px]:h-[123px] max-[767px]:w-[76px]",
    },
    {
      alt: "Golf game",
      src: `${base44AssetRoot}/hero/games/games-2-golf.webp`,
      width: 920,
      height: 476,
      frameClassName:
        "h-[189px] w-[365px] max-[767px]:h-[123px] max-[767px]:w-[237px]",
    },
    {
      alt: "Game badge",
      src: `${base44AssetRoot}/hero/games/games-3-icon.webp`,
      width: 302,
      height: 272,
      frameClassName:
        "h-[100px] w-[111px] max-[767px]:h-[60px] max-[767px]:w-[67px]",
    },
    {
      alt: "Castle game",
      src: `${base44AssetRoot}/hero/games/games-4-castle.webp`,
      width: 922,
      height: 476,
      frameClassName:
        "h-[189px] w-[366px] max-[767px]:h-[123px] max-[767px]:w-[238px]",
    },
    {
      alt: "Game leaderboard",
      src: `${base44AssetRoot}/hero/games/games-5-leaderboard.webp`,
      width: 272,
      height: 440,
      frameClassName:
        "h-[189px] w-[117px] max-[767px]:h-[123px] max-[767px]:w-[76px]",
    },
    {
      alt: "Tetris game",
      src: `${base44AssetRoot}/hero/games/games-6-tetris.webp`,
      width: 890,
      height: 476,
      frameClassName:
        "h-[189px] w-[353px] max-[767px]:h-[123px] max-[767px]:w-[230px]",
    },
  ],
  tools: [
    {
      alt: "Smart light tool",
      src: `${base44AssetRoot}/hero/tools/tools-1-light.webp`,
      width: 760,
      height: 380,
      frameClassName:
        "h-[140px] w-[280px] max-[767px]:h-[86px] max-[767px]:w-[172px]",
    },
    {
      alt: "Gear tool",
      src: `${base44AssetRoot}/hero/tools/tools-2-gear.webp`,
      width: 302,
      height: 272,
      frameClassName:
        "h-[100px] w-[112px] max-[767px]:h-[60px] max-[767px]:w-[67px]",
    },
    {
      alt: "Finance conversion tool",
      src: `${base44AssetRoot}/hero/tools/tools-3-finance.webp`,
      width: 386,
      height: 396,
      frameClassName:
        "h-[189px] w-[140px] max-[767px]:h-[123px] max-[767px]:w-[91px]",
    },
    {
      alt: "Map tool",
      src: `${base44AssetRoot}/hero/tools/tools-4-map.webp`,
      width: 920,
      height: 508,
      frameClassName:
        "h-[189px] w-[342px] max-[767px]:h-[123px] max-[767px]:w-[222px]",
    },
    {
      alt: "Weather tool",
      src: `${base44AssetRoot}/hero/tools/tools-5-weather.webp`,
      width: 272,
      height: 458,
      frameClassName:
        "h-[189px] w-[94px] max-[767px]:h-[123px] max-[767px]:w-[61px]",
    },
    {
      alt: "Sound creation tool",
      src: `${base44AssetRoot}/hero/tools/tools-6-sound.webp`,
      width: 936,
      height: 508,
      frameClassName:
        "h-[189px] w-[349px] max-[767px]:h-[123px] max-[767px]:w-[227px]",
    },
  ],
};

const revealDelayClassNames = [
  "delay-[0ms]",
  "delay-[50ms]",
  "delay-[100ms]",
  "delay-[150ms]",
  "delay-[200ms]",
  "delay-[250ms]",
] as const;

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<HeroTab>("websites");
  const [buildMenuOpen, setBuildMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isRevealed, setIsRevealed] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);

  const advanceTab = useCallback(() => {
    if (!prefersReducedMotion) {
      setIsRevealed(false);
    }
    setActiveTab((currentTab) => {
      const currentIndex = heroTabs.indexOf(currentTab);
      return heroTabs[(currentIndex + 1) % heroTabs.length];
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    const reducedMotionMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateReducedMotion = () =>
      setPrefersReducedMotion(reducedMotionMedia.matches);

    updateReducedMotion();
    reducedMotionMedia.addEventListener("change", updateReducedMotion);
    return () =>
      reducedMotionMedia.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(advanceTab, 4000);
    return () => window.clearInterval(intervalId);
  }, [advanceTab, isPaused, prefersReducedMotion, timerVersion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setPromptIndex((currentIndex) =>
        (currentIndex + 1) % promptSamples.length,
      );
    }, 3500);
    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const revealFrame = requestAnimationFrame(() => setIsRevealed(true));

    return () => {
      cancelAnimationFrame(revealFrame);
    };
  }, [activeTab, prefersReducedMotion]);

  useEffect(() => {
    if (!buildMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBuildMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [buildMenuOpen]);

  const selectTab = (tab: HeroTab) => {
    if (tab !== activeTab) {
      if (!prefersReducedMotion) {
        setIsRevealed(false);
      }
      setActiveTab(tab);
    }
    setTimerVersion((version) => version + 1);
  };

  return (
    <section className="base44-dot-grid min-h-svh overflow-hidden text-[#202027] max-[767px]:min-h-[852px]">
      <div className="mx-auto max-w-[1920px] pt-[103px] pb-9 min-[768px]:max-[1023px]:pt-[21.6vw] min-[768px]:max-[1023px]:pb-[8.33vw] min-[1024px]:pt-[9.375vw] min-[1024px]:pb-[4.1667vw]">
        <h1 className="mx-auto max-w-[calc(100%-40px)] text-center font-heading text-[clamp(46px,6.51vw,125px)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance min-[768px]:max-[1023px]:max-w-[85.3vw] min-[768px]:max-[1023px]:text-[12.25vw] min-[768px]:max-[1023px]:leading-[0.98] min-[1024px]:max-w-none">
          Every builder needs a base
        </h1>

        <p className="mx-auto mt-6 max-w-[335px] text-center text-[clamp(17px,1.46vw,28px)] leading-[1.42] font-normal min-[768px]:max-[1023px]:mt-[6.12vw] min-[768px]:max-[1023px]:max-w-[70.47vw] min-[768px]:max-[1023px]:text-[3.064vw] min-[768px]:max-[1023px]:leading-[1.33] min-[1024px]:mt-6 min-[1024px]:max-w-[719px]">
          Build your own apps, websites, products and AI agents on Base44 using
          your own words. Get ahead — and make sure it stays that way.
        </p>

        <div className="relative mx-auto mt-[38px] flex h-[151px] w-[calc(100%-40px)] flex-col rounded-lg bg-white min-[768px]:max-[1023px]:w-[85.3vw] min-[1024px]:mt-[30px] min-[1024px]:w-[min(38.5417vw,740px)]">
          <textarea
            aria-label="Describe what you want to build"
            className="min-h-0 flex-1 resize-none border-0 bg-transparent px-6 pt-[22px] text-[16px]/[24px] text-[#29282f] outline-none placeholder:text-[#9a9898]"
            placeholder={promptSamples[promptIndex]}
          />

          {buildMenuOpen && (
            <div
              id="hero-build-options"
              className="absolute right-[58px] bottom-[52px] z-10 w-32 rounded-md border border-[#dedbd7] bg-white p-2 text-[13px]/[22px] shadow-lg"
              role="region"
            >
              <p>Apps</p>
              <p>Websites</p>
              <p>AI agents</p>
            </div>
          )}

          <div className="flex h-[55px] shrink-0 items-center px-6 pb-[15px]">
            <button
              aria-label="More options"
              className="base44-focus flex size-6 items-center justify-center bg-transparent"
              type="button"
            >
              <PlusIcon className="size-5" />
            </button>

            <div className="ml-auto flex items-center gap-[18px]">
              <button
                aria-controls="hero-build-options"
                aria-expanded={buildMenuOpen}
                className="base44-focus flex items-center gap-1 bg-transparent text-[16px]/[24px] font-medium"
                type="button"
                onClick={() => setBuildMenuOpen((isOpen) => !isOpen)}
              >
                <span>Build</span>
                <ChevronIcon
                  className={`size-4 transition-transform duration-200 ${
                    buildMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <button
                aria-label="Voice input"
                className="base44-focus flex size-6 items-center justify-center bg-transparent"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="9"
                    y="3"
                    width="6"
                    height="12"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M6.5 11.5v.5a5.5 5.5 0 0 0 11 0v-.5M12 17.5V21M9 21h6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="square"
                  />
                </svg>
              </button>

              <button
                aria-label="Send message"
                className="base44-focus flex size-10 items-center justify-center rounded-[8px] bg-[#ff773c] text-[#18181d] transition-colors hover:bg-[#ff6a00]"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 15 15 5M7 5h8v8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          aria-label="Example type"
          className="mx-auto mt-[67px] flex items-center justify-center gap-[9px] font-heading text-[14px]/[21px] font-semibold min-[1024px]:mt-[43px]"
          role="tablist"
        >
          {heroTabs.map((tab, index) => {
            const isActive = activeTab === tab;
            return (
              <div key={tab} className="contents">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="size-[4px] bg-[#777471]"
                  />
                )}
                <button
                  id={`hero-${tab}-tab`}
                  aria-controls="hero-example-stage"
                  aria-selected={isActive}
                  className={`base44-focus bg-transparent px-0 ${
                    isActive ? "text-[#29282f]" : "text-[#777471]"
                  }`}
                  role="tab"
                  type="button"
                  onClick={() => selectTab(tab)}
                >
                  {isActive
                    ? `[${heroTabLabels[tab]}]`
                    : heroTabLabels[tab]}
                </button>
              </div>
            );
          })}
        </div>

        <div
          id="hero-example-stage"
          aria-labelledby={`hero-${activeTab}-tab`}
          className="relative mt-[31px] h-[132px] overflow-hidden min-[768px]:mt-[35px] min-[768px]:h-[198px]"
          role="tabpanel"
        >
          <div className="flex w-max gap-2 px-6 pt-[9px]">
            {heroImages[activeTab].map((image, index) => (
              <div
                key={`${activeTab}-${image.src}`}
                className={`relative shrink-0 transition-[clip-path] duration-[360ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${image.frameClassName} ${revealDelayClassNames[index]} ${prefersReducedMotion || isRevealed ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_100%_0_0)]"}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[9px] left-0 z-10 size-2 bg-[#1f1f23]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-[9px] right-0 z-10 size-2 bg-[#1f1f23]"
                />
                <Image
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  height={image.height}
                  loading="eager"
                  sizes="(max-width: 767px) 64vw, 26vw"
                  src={image.src}
                  width={image.width}
                />
              </div>
            ))}
          </div>

          <button
            aria-label={isPaused ? "Play animation" : "Pause animation"}
            className="base44-focus absolute top-0 right-4 z-20 flex size-5 items-center justify-center bg-[#1f1f23] text-white"
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? (
              <svg
                aria-hidden="true"
                className="size-3"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="m3 2 7 4-7 4V2Z" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="size-3"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M3 2h2v8H3zM7 2h2v8H7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
