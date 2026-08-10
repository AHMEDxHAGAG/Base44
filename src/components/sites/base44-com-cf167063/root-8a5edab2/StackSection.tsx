import Image from "next/image";

import { ArrowCircleIcon } from "../shared/icons";
import { base44AssetRoot } from "../shared/site";

const stackLinks = [
  {
    label: "Backend and storage, built in",
    href: "https://base44.com/developers",
  },
  {
    label: "One-click integrations",
    href: "https://base44.com/integrations",
  },
  {
    label: "Stay on brand with custom domain",
    href: "https://docs.base44.com/Setting-up-your-app/Setting-up-a-custom-domain",
  },
  {
    label: "Easily keep track of analytics",
    href: "https://docs.base44.com/Setting-up-your-app/analytics",
  },
  {
    label: "Get paid directly through Base44",
    href: "https://docs.base44.com/Integrations/Wix-payments",
  },
  {
    label: "Enterprise-grade security",
    href: "https://base44.com/security",
  },
] as const;

export function StackSection() {
  return (
    <section className="base44-dot-grid text-[#202027]">
      <div className="mx-auto max-w-[1920px] px-5 pt-4 pb-[30px] md:px-10 md:py-20 min-[1100px]:grid min-[1100px]:min-h-[min(58.33vw,1120px)] min-[1100px]:grid-cols-[min(36.32vw,697px)_minmax(0,1fr)] min-[1100px]:gap-[min(4.375vw,84px)] min-[1100px]:px-[min(4.6875vw,90px)] min-[1100px]:py-0">
        <div>
          <h2 className="font-heading text-[42px]/[1.02] font-semibold tracking-[-0.035em] md:text-[60px]/[64px] min-[1100px]:text-[clamp(52px,4.1667vw,80px)] min-[1100px]:leading-[1.01]">
            <span className="block">The whole stack.</span>
            <span className="block">No setup</span>
            <span className="block">slowdown.</span>
          </h2>

          <p className="mt-6 max-w-[520px] text-[20px]/[25px] font-normal md:text-[22px]/[29.9px] min-[1100px]:mt-[22px] min-[1100px]:text-[clamp(18px,1.46vw,28px)] min-[1100px]:leading-[1.39]">
            Ship something real with vibe coding — without touching a server,
            wiring up a payment provider, or configuring a database. It&apos;s
            all already there.
          </p>

          <Image
            alt="Base44 platform collage showing built-in tools and collaboration"
            className="mt-[50px] h-auto w-full object-cover md:mt-[120px] md:w-[530px] min-[1100px]:mt-[min(12.9vw,248px)] min-[1100px]:w-[min(27.604vw,530px)]"
            height={496}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) 530px, min(27.604vw, 530px)"
            src={`${base44AssetRoot}/sections/stack/collage.webp`}
            width={1060}
          />
        </div>

        <nav
          aria-label="Base44 platform capabilities"
          className="mt-[50px] md:mt-[120px] min-[1100px]:mt-0 min-[1100px]:pt-[min(11.46vw,220px)]"
        >
          <ul className="space-y-5">
            {stackLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="base44-focus group flex min-h-[52px] items-center justify-between gap-5 border-b-2 border-[#34333a] pb-5 font-heading text-[clamp(26px,2.5vw,48px)] leading-[1.06] font-medium tracking-[-0.025em] min-[1100px]:h-[52px] min-[1100px]:pb-0"
                  href={link.href}
                >
                  <span>{link.label}</span>
                  <ArrowCircleIcon className="size-[36px] shrink-0 transition-transform duration-200 group-hover:translate-x-[5px] md:size-[42px] min-[1100px]:size-[clamp(36px,3.125vw,60px)]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
