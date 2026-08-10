"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  ArrowCircleIcon,
  BrandLogo,
  ChevronIcon,
  CloseIcon,
  GlobeIcon,
  MenuIcon,
} from "../shared/icons";
import { base44BuildUrl, base44SourceUrl } from "../shared/site";

type DesktopPanel = "product" | "use-cases" | "resources";
type MobilePanel = DesktopPanel | "language";

type DescriptiveLink = {
  description: string;
  href: string;
  title: string;
};

type SimpleLink = {
  href: string;
  title: string;
};

const productColumns: DescriptiveLink[][] = [
  [
    {
      title: "Base44 for Developers",
      description: "Deploy anything directly from your IDE or AI agent",
      href: `${base44SourceUrl}developers`,
    },
    {
      title: "Roadmap",
      description: "Get a preview of what's coming next.",
      href: `${base44SourceUrl}roadmap`,
    },
    {
      title: "Superagents",
      description:
        "AI agents that connect to your tools, run 24/7, and are ready in minutes",
      href: `${base44SourceUrl}superagents`,
    },
    {
      title: "Features",
      description: "Explore everything our platform has to offer.",
      href: `${base44SourceUrl}features`,
    },
  ],
  [
    {
      title: "Templates Marketplace",
      description:
        "Explore and customize ready-made apps from the community.",
      href: `${base44SourceUrl}templates`,
    },
    {
      title: "Changelog",
      description: "See what's new and track our latest updates.",
      href: `${base44SourceUrl}changelog`,
    },
    {
      title: "Integrations",
      description: "Discover integrations that plug right into your app.",
      href: `${base44SourceUrl}integrations`,
    },
  ],
];

const categoryColumns: SimpleLink[][] = [
  [
    {
      title: "Productivity",
      href: `${base44SourceUrl}use-cases/productivity`,
    },
    {
      title: "Education",
      href: `${base44SourceUrl}use-cases/education`,
    },
    {
      title: "Entertainment",
      href: `${base44SourceUrl}use-cases/entertainment`,
    },
  ],
  [
    {
      title: "Health & Wellness",
      href: `${base44SourceUrl}use-cases/health-wellness`,
    },
    {
      title: "E-commerce & Retail",
      href: `${base44SourceUrl}use-cases/e-commerce-retail`,
    },
    {
      title: "Finance",
      href: `${base44SourceUrl}use-cases/finance`,
    },
  ],
];

const roleColumns: SimpleLink[][] = [
  [
    {
      title: "Product Marketing",
      href: `${base44SourceUrl}use-cases/product-marketing`,
    },
    {
      title: "Business Intelligence & Analytics",
      href: `${base44SourceUrl}use-cases/business-intelligence-analytics`,
    },
    {
      title: "Marketing & Sales Automation",
      href: `${base44SourceUrl}use-cases/marketing-sales-automation`,
    },
  ],
  [
    {
      title: "HR & Recruitment",
      href: `${base44SourceUrl}use-cases/hr-recruitment`,
    },
    {
      title: "Dev Productivity",
      href: `${base44SourceUrl}use-cases/dev-productivity`,
    },
    {
      title: "Operations",
      href: `${base44SourceUrl}use-cases/operations`,
    },
  ],
  [
    {
      title: "See all categories",
      href: `${base44SourceUrl}use-cases`,
    },
  ],
];

const resourceColumns: DescriptiveLink[][] = [
  [
    {
      title: "Docs & FAQs",
      description: "Get answers and find step-by-step guides.",
      href: `${base44SourceUrl}docs`,
    },
    {
      title: "Base44 Education",
      description: "Partner with Base44 to help students create and innovate.",
      href: `${base44SourceUrl}education`,
    },
    {
      title: "Hire a partner",
      description: "Find expert Base44 partners to power your build.",
      href: `${base44SourceUrl}partners`,
    },
  ],
  [
    {
      title: "Blog",
      description:
        "Explore insights and best practices for every step of your build.",
      href: `${base44SourceUrl}blog`,
    },
    {
      title: "Discord Community",
      description:
        "Where builders connect, ask questions, and trade ideas.",
      href: "https://discord.com/invite/base44",
    },
  ],
];

const mobileProductLinks: SimpleLink[] = [
  { title: "Features", href: `${base44SourceUrl}features` },
  { title: "Integrations", href: `${base44SourceUrl}integrations` },
  { title: "Enterprise", href: `${base44SourceUrl}enterprise` },
  { title: "Pricing", href: `${base44SourceUrl}pricing` },
  { title: "Roadmap", href: `${base44SourceUrl}roadmap` },
  { title: "Changelog", href: `${base44SourceUrl}changelog` },
  { title: "Templates Marketplace", href: `${base44SourceUrl}templates` },
  { title: "Base44 for Developers", href: `${base44SourceUrl}developers` },
];

const allUseCaseLinks = [...categoryColumns.flat(), ...roleColumns.flat()];
const allResourceLinks = resourceColumns.flat();

const desktopPanelLabels: Record<DesktopPanel, string> = {
  product: "Product",
  "use-cases": "Use Cases",
  resources: "Resources",
};

const disclosureButtonClass =
  "base44-focus flex h-full items-center gap-1 border-b border-transparent bg-transparent px-0 text-left transition-colors hover:text-black";

const mobileRowClass =
  "base44-focus flex h-[74px] w-full items-center justify-between border-b-2 border-[#2f2e33] bg-transparent px-0 font-heading text-[24px]/[1.2] font-medium text-[#27262d]";

function renderArrowLink(link: SimpleLink) {
  return (
    <a
      key={link.title}
      className="base44-focus group flex items-center gap-3 font-heading text-[21px]/[28px] font-medium text-[#29282f]"
      href={link.href}
    >
      <ArrowCircleIcon className="size-[27px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      <span>{link.title}</span>
    </a>
  );
}

function renderDescriptiveColumn(links: DescriptiveLink[]) {
  return (
    <div>
      {links.map((link) => (
        <a
          key={link.title}
          className="base44-focus group flex h-[111px] items-center justify-between gap-6 border-t-2 border-[#545359] text-[#29282f]"
          href={link.href}
        >
          <span className="min-w-0">
            <span className="block font-heading text-[28px]/[34px] font-semibold">
              {link.title}
            </span>
            <span className="mt-1 block text-[16px]/[24px] text-[#797672]">
              {link.description}
            </span>
          </span>
          <ArrowCircleIcon className="size-[28px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const [desktopPanel, setDesktopPanel] = useState<DesktopPanel | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel | null>("product");
  const [isScrolled, setIsScrolled] = useState(false);
  const lastDesktopTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mobileCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileSheetRef = useRef<HTMLDivElement | null>(null);

  const closeDesktopPanel = useCallback((restoreFocus = true) => {
    setDesktopPanel(null);
    if (restoreFocus) {
      requestAnimationFrame(() => lastDesktopTriggerRef.current?.focus());
    }
  }, []);

  const closeMobileMenu = useCallback((restoreFocus = true) => {
    setIsMobileOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => mobileMenuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 20);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1431px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMobileMenu(false);
      } else {
        closeDesktopPanel(false);
      }
    };

    desktopMedia.addEventListener("change", handleBreakpointChange);
    return () =>
      desktopMedia.removeEventListener("change", handleBreakpointChange);
  }, [closeDesktopPanel, closeMobileMenu]);

  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => mobileCloseButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen && desktopPanel === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (isMobileOpen) {
          closeMobileMenu();
        } else {
          closeDesktopPanel();
        }
        return;
      }

      if (event.key !== "Tab" || !isMobileOpen || !mobileSheetRef.current) {
        return;
      }

      const focusableElements = Array.from(
        mobileSheetRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements.at(0);
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    closeDesktopPanel,
    closeMobileMenu,
    desktopPanel,
    isMobileOpen,
  ]);

  const toggleDesktopPanel = (
    panel: DesktopPanel,
    trigger: HTMLButtonElement,
  ) => {
    lastDesktopTriggerRef.current = trigger;
    setDesktopPanel((currentPanel) =>
      currentPanel === panel ? null : panel,
    );
  };

  const toggleMobilePanel = (panel: MobilePanel) => {
    setMobilePanel((currentPanel) =>
      currentPanel === panel ? null : panel,
    );
  };

  const openMobileMenu = () => {
    closeDesktopPanel(false);
    setMobilePanel("product");
    setIsMobileOpen(true);
  };

  const closeMenusForNavigation = () => {
    closeDesktopPanel(false);
    closeMobileMenu(false);
  };

  const isSolidHeader = isScrolled || desktopPanel !== null || isMobileOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[54px] transition-colors duration-300 md:h-[76px] min-[1431px]:h-[85px] ${
          isSolidHeader ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1920px] items-center px-5 md:px-[34px] min-[1431px]:px-10">
          <div className="flex min-w-0 items-center min-[1431px]:gap-[39px]">
            <a
              aria-label="Base44 home"
              className="base44-focus shrink-0 text-[#222128]"
              href={base44SourceUrl}
              onClick={closeMenusForNavigation}
            >
              <BrandLogo className="h-[22px] w-[94px] md:h-[26px] md:w-[111px]" />
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden h-full items-center gap-8 font-heading text-[16px]/[24px] font-medium text-[#29282f] min-[1431px]:flex"
            >
              {(Object.keys(desktopPanelLabels) as DesktopPanel[]).map(
                (panel) => {
                  const isOpen = desktopPanel === panel;
                  return (
                    <button
                      key={panel}
                      id={`desktop-${panel}-trigger`}
                      aria-controls={`desktop-${panel}-panel`}
                      aria-expanded={isOpen}
                      className={`${disclosureButtonClass} ${
                        isOpen ? "border-[#29282f]" : ""
                      }`}
                      type="button"
                      onClick={(event) =>
                        toggleDesktopPanel(panel, event.currentTarget)
                      }
                    >
                      <span>{desktopPanelLabels[panel]}</span>
                      <ChevronIcon
                        className={`size-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  );
                },
              )}

              <a
                className="base44-focus transition-colors hover:text-black"
                href={`${base44SourceUrl}pricing`}
                onClick={closeMenusForNavigation}
              >
                Pricing
              </a>
              <a
                className="base44-focus transition-colors hover:text-black"
                href={`${base44SourceUrl}enterprise`}
                onClick={closeMenusForNavigation}
              >
                Enterprise
              </a>
              <a
                className="base44-focus flex items-center gap-2 text-[#3950e6]"
                href={`${base44SourceUrl}superagents`}
                onClick={closeMenusForNavigation}
              >
                <span className="size-[3px] bg-current" aria-hidden="true" />
                <span>Superagents</span>
                <span className="size-[3px] bg-current" aria-hidden="true" />
              </a>
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-4 min-[1431px]:gap-5">
            <button
              aria-label="Change language"
              className="base44-focus hidden size-6 items-center justify-center bg-transparent text-[#29282f] min-[1431px]:flex"
              type="button"
              onClick={() => closeDesktopPanel(false)}
            >
              <GlobeIcon className="size-6" />
            </button>
            <a
              className="base44-focus flex h-[38px] items-center justify-center rounded-[6px] bg-[#312f2f] px-[15px] text-[14px]/[20px] font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#433f3f]"
              href={base44BuildUrl}
              onClick={closeMenusForNavigation}
            >
              Start building
            </a>
            <button
              ref={mobileMenuButtonRef}
              aria-controls="mobile-navigation-sheet"
              aria-expanded={isMobileOpen}
              aria-label="Open navigation menu"
              className="base44-focus flex size-6 items-center justify-center bg-transparent text-[#29282f] min-[1431px]:hidden"
              type="button"
              onClick={openMobileMenu}
            >
              <MenuIcon className="size-6" />
            </button>
          </div>
        </div>

        {desktopPanel === "product" && (
          <div
            id="desktop-product-panel"
            aria-labelledby="desktop-product-trigger"
            className="absolute inset-x-0 top-full hidden h-[541px] bg-white min-[1431px]:block"
            role="region"
          >
            <div className="mx-auto grid h-full max-w-[1920px] grid-cols-2 gap-10 px-[clamp(40px,4.625vw,74px)] pt-[49px]">
              {productColumns.map((links) => (
                <div key={links[0].title}>{renderDescriptiveColumn(links)}</div>
              ))}
            </div>
          </div>
        )}

        {desktopPanel === "use-cases" && (
          <div
            id="desktop-use-cases-panel"
            aria-labelledby="desktop-use-cases-trigger"
            className="absolute inset-x-0 top-full hidden h-[296px] bg-white min-[1431px]:block"
            role="region"
          >
            <div className="mx-auto grid h-full max-w-[1920px] grid-cols-[436px_minmax(0,1fr)] gap-[18px] px-[clamp(40px,4.625vw,74px)] pt-[43px]">
              <section aria-labelledby="desktop-category-heading">
                <h2
                  id="desktop-category-heading"
                  className="font-heading text-[28px]/[34px] font-semibold text-[#29282f]"
                >
                  Category
                </h2>
                <div className="mt-[22px] grid grid-cols-2 gap-x-4 border-t-2 border-[#545359] pt-[31px]">
                  {categoryColumns.map((column) => (
                    <div key={column[0].title} className="space-y-[14px]">
                      {column.map(renderArrowLink)}
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="desktop-roles-heading">
                <h2
                  id="desktop-roles-heading"
                  className="font-heading text-[28px]/[34px] font-semibold text-[#29282f]"
                >
                  Roles
                </h2>
                <div className="mt-[22px] grid grid-cols-[1.35fr_1.05fr_auto] gap-x-7 border-t-2 border-[#545359] pt-[31px]">
                  {roleColumns.map((column, index) => (
                    <div
                      key={column[0].title}
                      className={
                        index === 2
                          ? "flex flex-col justify-end space-y-[14px]"
                          : "space-y-[14px]"
                      }
                    >
                      {column.map(renderArrowLink)}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {desktopPanel === "resources" && (
          <div
            id="desktop-resources-panel"
            aria-labelledby="desktop-resources-trigger"
            className="absolute inset-x-0 top-full hidden h-[431px] bg-white min-[1431px]:block"
            role="region"
          >
            <div className="mx-auto grid h-full max-w-[1920px] grid-cols-2 gap-10 px-[clamp(40px,4.625vw,74px)] pt-[49px]">
              {resourceColumns.map((links) => (
                <div key={links[0].title}>{renderDescriptiveColumn(links)}</div>
              ))}
            </div>
          </div>
        )}
      </header>

      {desktopPanel !== null && (
        <button
          aria-label={`Close ${desktopPanelLabels[desktopPanel]} menu`}
          className="fixed inset-x-0 top-[85px] bottom-0 z-40 hidden cursor-default bg-black/30 min-[1431px]:block"
          tabIndex={-1}
          type="button"
          onClick={() => closeDesktopPanel()}
        />
      )}

      {isMobileOpen && (
        <>
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-[60] cursor-default bg-black/30 min-[1431px]:hidden"
            tabIndex={-1}
            type="button"
            onClick={() => closeMobileMenu()}
          />
          <div
            ref={mobileSheetRef}
            id="mobile-navigation-sheet"
            aria-label="Navigation menu"
            aria-modal="true"
            className="fixed inset-y-0 left-0 z-[70] w-full max-w-[375px] overflow-y-auto bg-white min-[1431px]:hidden"
            role="dialog"
          >
            <div className="flex h-[54px] items-center justify-between px-5 md:h-[76px]">
              <a
                aria-label="Base44 home"
                className="base44-focus text-[#222128]"
                href={base44SourceUrl}
                onClick={closeMenusForNavigation}
              >
                <BrandLogo className="h-[22px] w-[94px] md:h-[26px] md:w-[111px]" />
              </a>
              <button
                ref={mobileCloseButtonRef}
                aria-label="Close navigation menu"
                className="base44-focus flex size-6 items-center justify-center bg-transparent text-[#29282f]"
                type="button"
                onClick={() => closeMobileMenu()}
              >
                <CloseIcon className="size-6" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="px-5 pt-[15px] pb-[15px]">
              {(Object.keys(desktopPanelLabels) as DesktopPanel[]).map(
                (panel) => {
                  const isOpen = mobilePanel === panel;
                  return (
                    <button
                      key={panel}
                      aria-controls={`mobile-${panel}-panel`}
                      aria-expanded={isOpen}
                      className={mobileRowClass}
                      type="button"
                      onClick={() => toggleMobilePanel(panel)}
                    >
                      <span>{desktopPanelLabels[panel]}</span>
                      <ChevronIcon
                        className={`size-7 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  );
                },
              )}

              <a
                className={mobileRowClass}
                href={`${base44SourceUrl}pricing`}
                onClick={closeMenusForNavigation}
              >
                <span>Pricing</span>
              </a>
              <a
                className={mobileRowClass}
                href={`${base44SourceUrl}enterprise`}
                onClick={closeMenusForNavigation}
              >
                <span>Enterprise</span>
              </a>
              <a
                className={`${mobileRowClass} text-[#3950e6]`}
                href={`${base44SourceUrl}superagents`}
                onClick={closeMenusForNavigation}
              >
                <span>Superagents</span>
              </a>
              <button
                aria-controls="mobile-language-panel"
                aria-expanded={mobilePanel === "language"}
                className={mobileRowClass}
                type="button"
                onClick={() => toggleMobilePanel("language")}
              >
                <span className="flex items-center gap-3">
                  <GlobeIcon className="size-6" />
                  <span>English</span>
                </span>
                <ChevronIcon
                  className={`size-7 transition-transform duration-200 ${
                    mobilePanel === "language" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </nav>

            {mobilePanel === "product" && (
              <div
                id="mobile-product-panel"
                aria-labelledby="mobile-product-heading"
                className="min-h-[310px] bg-[#b5b5b5] px-5 py-[26px] text-[#29282f]"
                role="region"
              >
                <h2
                  id="mobile-product-heading"
                  className="font-heading text-[18px]/[24px] font-semibold"
                >
                  Product
                </h2>
                <div className="mt-[22px] flex flex-col gap-[7px] text-[18px]/[25px]">
                  {mobileProductLinks.map((link) => (
                    <a
                      key={link.title}
                      className="base44-focus w-fit"
                      href={link.href}
                      onClick={closeMenusForNavigation}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {mobilePanel === "use-cases" && (
              <div
                id="mobile-use-cases-panel"
                aria-labelledby="mobile-use-cases-heading"
                className="bg-[#b5b5b5] px-5 py-[26px] text-[#29282f]"
                role="region"
              >
                <h2
                  id="mobile-use-cases-heading"
                  className="font-heading text-[18px]/[24px] font-semibold"
                >
                  Use Cases
                </h2>
                <div className="mt-[22px] flex flex-col gap-[7px] text-[18px]/[25px]">
                  {allUseCaseLinks.map((link) => (
                    <a
                      key={link.title}
                      className="base44-focus w-fit"
                      href={link.href}
                      onClick={closeMenusForNavigation}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {mobilePanel === "resources" && (
              <div
                id="mobile-resources-panel"
                aria-labelledby="mobile-resources-heading"
                className="bg-[#b5b5b5] px-5 py-[26px] text-[#29282f]"
                role="region"
              >
                <h2
                  id="mobile-resources-heading"
                  className="font-heading text-[18px]/[24px] font-semibold"
                >
                  Resources
                </h2>
                <div className="mt-[22px] flex flex-col gap-[7px] text-[18px]/[25px]">
                  {allResourceLinks.map((link) => (
                    <a
                      key={link.title}
                      className="base44-focus w-fit"
                      href={link.href}
                      onClick={closeMenusForNavigation}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {mobilePanel === "language" && (
              <div
                id="mobile-language-panel"
                aria-labelledby="mobile-language-heading"
                className="bg-[#b5b5b5] px-5 py-[26px] text-[#29282f]"
                role="region"
              >
                <h2
                  id="mobile-language-heading"
                  className="font-heading text-[18px]/[24px] font-semibold"
                >
                  Language
                </h2>
                <button
                  className="base44-focus mt-[22px] bg-transparent text-[18px]/[25px]"
                  type="button"
                  onClick={() => closeMobileMenu()}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
