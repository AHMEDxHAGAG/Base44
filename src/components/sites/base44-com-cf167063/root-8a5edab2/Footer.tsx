import type { SVGProps } from "react";

import { BrandLogo } from "../shared/icons";

type SocialLink = {
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
  label: string;
};

type NavigationGroup = {
  label: string;
  links: readonly {
    href: string;
    label: string;
  }[];
};

const socialLinks: readonly SocialLink[] = [
  {
    href: "https://x.com/base44dev",
    icon: XIcon,
    label: "Base44 on X",
  },
  {
    href: "https://discord.com/invite/ThpYPZpVts",
    icon: DiscordIcon,
    label: "Base44 on Discord",
  },
  {
    href: "https://www.linkedin.com/company/base44/",
    icon: LinkedInIcon,
    label: "Base44 on LinkedIn",
  },
  {
    href: "https://www.reddit.com/r/Base44/",
    icon: RedditIcon,
    label: "Base44 on Reddit",
  },
];

const navigationGroups: readonly NavigationGroup[] = [
  {
    label: "Company",
    links: [
      { href: "https://base44.com/about-us", label: "About Us" },
      { href: "https://base44.com/affiliates", label: "Affiliate Program" },
      { href: "https://careers.base44.com/", label: "Careers" },
    ],
  },
  {
    label: "Product",
    links: [
      { href: "https://base44.com/features", label: "Features" },
      { href: "https://base44.com/integrations", label: "Integrations" },
      { href: "https://base44.com/enterprise", label: "Enterprise" },
      { href: "https://base44.com/pricing", label: "Pricing" },
      { href: "https://feedback.base44.com/roadmap", label: "Roadmap" },
      {
        href: "https://docs.base44.com/changelog/product",
        label: "Changelog",
      },
      { href: "https://feedback.base44.com/", label: "Feature Request" },
      { href: "https://base44.com/use-cases", label: "Use Cases" },
      { href: "https://status.base44.com/", label: "Status" },
      {
        href: "https://base44.com/developers",
        label: "Base44 for Developers",
      },
      { href: "https://base44.com/superagents", label: "Superagents" },
      { href: "https://base44.com/features/workflows", label: "Workflows" },
      { href: "https://base44.com/ai-app-builder", label: "AI App Builder" },
      {
        href: "https://base44.com/ai-website-builder",
        label: "AI Website Builder",
      },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "https://docs.base44.com/", label: "Docs & FAQs" },
      { href: "https://base44.com/highered", label: "Higher Ed" },
      { href: "https://discord.gg/b44", label: "Community" },
      { href: "https://base44.com/blog", label: "Blog" },
      { href: "https://app.base44.com/partners", label: "Hire a Partner" },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "https://base44.com/privacy-policy", label: "Privacy Policy" },
      { href: "https://base44.com/terms-of-service", label: "Terms of Service" },
      { href: "https://base44.com/security", label: "Security" },
      { href: "https://base44.com/misuse", label: "Report Misuse" },
      { href: "https://base44.com/responsible-use", label: "Responsible Use" },
      {
        href: "https://base44.com/accessibility-statement",
        label: "Accessibility Statement",
      },
    ],
  },
];

const footerLinkClassName =
  "base44-focus block w-fit text-[18px] leading-6 transition-colors duration-200 hover:text-[var(--base44-muted)]";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="M19.54 5.34A16.47 16.47 0 0 0 15.44 4l-.5 1.03a15.2 15.2 0 0 0-5.86 0L8.56 4a16.7 16.7 0 0 0-4.1 1.35C1.86 9.2 1.16 12.94 1.5 16.62a16.55 16.55 0 0 0 5.03 2.55l1.23-1.68a10.7 10.7 0 0 1-1.94-.93l.48-.37c3.74 1.73 7.8 1.73 11.5 0l.5.37c-.63.37-1.28.68-1.95.93l1.22 1.68a16.5 16.5 0 0 0 5.02-2.55c.4-4.27-.69-7.97-3.05-11.28ZM8.62 14.36c-1.13 0-2.06-1.04-2.06-2.3 0-1.27.9-2.3 2.06-2.3 1.16 0 2.08 1.04 2.06 2.3 0 1.26-.9 2.3-2.06 2.3Zm6.76 0c-1.13 0-2.06-1.04-2.06-2.3 0-1.27.9-2.3 2.06-2.3 1.16 0 2.08 1.04 2.06 2.3 0 1.26-.9 2.3-2.06 2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RedditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="13" r="8.5" fill="currentColor" />
      <path
        d="m13.55 7.15.72-3.38 3.02.65M7.25 11.65a2 2 0 0 0-3.07.5 2 2 0 0 0 .98 2.93m11.59-3.43a2 2 0 0 1 3.07.5 2 2 0 0 1-.98 2.93"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
      <circle cx="17.6" cy="4.5" r="1.45" fill="currentColor" />
      <circle cx="9" cy="12.5" r="1" fill="white" />
      <circle cx="15" cy="12.5" r="1" fill="white" />
      <path
        d="M8.7 15.6c1.75 1.25 4.85 1.25 6.6 0"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white px-5 py-[clamp(60px,6.25vw,90px)] max-[767px]:pb-[104px] md:px-[clamp(40px,6.316vw,90px)]">
      <div className="mx-auto max-w-[1740px]">
        <div className="min-[1280px]:grid min-[1280px]:grid-cols-[minmax(0,334px)_minmax(0,838px)] min-[1280px]:justify-between">
          <div className="max-w-[334px]">
            <a
              aria-label="Base44 home"
              className="base44-focus block w-fit"
              href="https://base44.com/"
            >
              <BrandLogo className="h-[26px] w-[111px]" />
            </a>

            <p className="mt-10 text-[16px] leading-6">
              Base44 lets you build fully-functional apps in minutes with just
              your words. No coding necessary.
            </p>

            <div className="mt-8 flex items-center gap-5">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    aria-label={social.label}
                    className="base44-focus text-[var(--base44-ink)] transition-colors duration-200 hover:text-[var(--base44-muted)]"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SocialIcon className="size-6" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="mt-48 grid grid-cols-1 gap-y-14 min-[768px]:max-[1279px]:grid-cols-2 min-[768px]:max-[1279px]:gap-x-12 min-[1280px]:mt-0 min-[1280px]:grid-cols-4 min-[1280px]:gap-x-8"
          >
            {navigationGroups.map((group) => (
              <div key={group.label}>
                <h2 className="font-heading text-[18px] leading-6 font-medium">
                  {group.label}
                </h2>
                <ul className="mt-7 space-y-[6px]" role="list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a className={footerLinkClassName} href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-16 text-[16px] leading-6 min-[1280px]:mt-[60px]">
          © 2026 Wix.com Ltd.
        </p>
      </div>
    </footer>
  );
}
