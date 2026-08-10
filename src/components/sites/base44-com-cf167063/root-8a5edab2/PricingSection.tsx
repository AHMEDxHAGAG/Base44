import Image from "next/image";

import { base44BuildUrl } from "../shared/site";

const checkIconSrc =
  "/sites/base44-com-cf167063/root-8a5edab2/sections/pricing/check.svg";

const freeFeatures = [
  "All core features",
  "Built-in integrations",
  "Authentication system",
  "Database functionality",
] as const;

const paidFeatures = [
  "Unlimited number of apps",
  "In-app code edits",
  "AI model select",
  "Free custom domain",
] as const;

function RollingLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="base44-focus group inline-flex h-10 w-fit items-center justify-center overflow-hidden rounded-[10px] bg-[var(--base44-button)] px-5 text-[14px] leading-5 font-medium text-white transition-colors duration-200 hover:bg-[var(--base44-button-hover)]"
      href={href}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-200 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-full left-0 block transition-transform duration-200 ease-out group-hover:-translate-y-full"
        >
          {label}
        </span>
      </span>
    </a>
  );
}

function FeatureList({ features }: { features: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5" role="list">
      {features.map((feature) => (
        <li className="flex items-start gap-2 text-[15px] leading-5" key={feature}>
          <Image
            alt=""
            aria-hidden="true"
            className="mt-0.5 shrink-0"
            height={15}
            src={checkIconSrc}
            width={15}
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="base44-dot-grid overflow-hidden px-[clamp(20px,4.6875vw,90px)] py-[clamp(50px,6.25vw,120px)] min-[768px]:max-[1099px]:px-[5.21vw] min-[768px]:max-[1099px]:py-[10.42vw]"
    >
      <div className="mx-auto max-w-[1740px] min-[1100px]:grid min-[1100px]:grid-cols-[30%_50.8%] min-[1100px]:justify-between">
        <div>
          <h2
            className="base44-display text-[12.288vw]/[13.357vw] tracking-[-0.04em] min-[768px]:max-[1099px]:text-[12.25vw] min-[768px]:max-[1099px]:leading-[0.979] min-[1100px]:text-[clamp(40px,3.96vw,76px)] min-[1100px]:leading-[1.05]"
            id="pricing-heading"
          >
            <span className="block">Choose</span>
            <span className="block">your plan</span>
          </h2>
          <p className="mt-5 max-w-[390px] text-[5.346vw]/[6.148vw] tracking-[-0.01em] min-[768px]:max-[1099px]:mt-[5.73vw] min-[768px]:max-[1099px]:text-[3.32vw] min-[768px]:max-[1099px]:leading-[1.385] min-[1100px]:mt-10 min-[1100px]:text-[clamp(16px,1.25vw,24px)] min-[1100px]:leading-[1.25]">
            Built for where you are, and where you&apos;re going.
          </p>
        </div>

        <div className="mt-[50px] min-w-0 min-[768px]:max-[1099px]:mt-[10.42vw] min-[1100px]:mt-0">
          <article className="flex min-h-[438px] min-w-0 flex-col bg-white p-[30px] sm:grid sm:min-h-[276px] sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] sm:grid-rows-[auto_auto_1fr_auto] sm:gap-x-[30px] min-[768px]:max-[1099px]:min-h-[372px]! min-[768px]:max-[1099px]:p-[5.21vw]">
            <h3 className="font-heading text-[clamp(22px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em] sm:col-start-1 sm:row-start-1">
              Start for free
            </h3>

            <p className="mt-6 flex items-baseline tracking-[-0.04em] sm:col-start-1 sm:row-start-2 sm:mt-4">
              <strong className="base44-display text-[clamp(64px,5.833vw,112px)] leading-none">
                $0
              </strong>
              <span className="font-heading text-[clamp(28px,2.5vw,48px)] leading-none font-medium">
                /mo
              </span>
            </p>

            <div className="mt-8 sm:col-start-2 sm:row-start-1 sm:row-span-4 sm:mt-0 sm:pt-5">
              <p className="text-[15px] leading-5">Get access to:</p>
              <FeatureList features={freeFeatures} />
            </div>

            <div className="mt-8 sm:col-start-1 sm:row-start-4 sm:mt-0 sm:self-end">
              <RollingLink href={base44BuildUrl} label="Start Building" />
            </div>
          </article>

          <article className="mt-12 flex min-h-[508px] min-w-0 flex-col bg-[#ff6a00] p-[30px] sm:grid sm:min-h-[285px] sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] sm:grid-rows-[auto_auto_1fr_auto] sm:gap-x-[30px] min-[768px]:max-[1099px]:mt-[20px] min-[768px]:max-[1099px]:min-h-[372px]! min-[768px]:max-[1099px]:p-[5.21vw] min-[1100px]:mt-6">
            <h3 className="font-heading text-[clamp(22px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em] sm:col-start-1 sm:row-start-1">
              Paid plans from
            </h3>

            <p className="mt-6 flex items-baseline tracking-[-0.04em] sm:col-start-1 sm:row-start-2 sm:mt-4">
              <strong className="base44-display text-[clamp(64px,5.833vw,112px)] leading-none">
                $16
              </strong>
              <span className="font-heading text-[clamp(28px,2.5vw,48px)] leading-none font-medium">
                /mo
              </span>
            </p>

            <p className="mt-1 text-[14px] leading-5 sm:col-start-1 sm:row-start-3">
              *Billed annually
            </p>

            <div className="mt-8 sm:col-start-2 sm:row-start-1 sm:row-span-4 sm:mt-0 sm:pt-5">
              <p className="text-[15px] leading-5">
                Upgrade as you go for more credits, more features, and more
                support.
              </p>
              <FeatureList features={paidFeatures} />
            </div>

            <div className="mt-8 sm:col-start-1 sm:row-start-4 sm:mt-0 sm:self-end">
              <RollingLink href="/pricing" label="See all plans" />
            </div>
          </article>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 text-[18px] leading-6">
            <p>Looking for enterprise solutions?</p>
            <a
              className="base44-focus font-medium underline decoration-[1px] underline-offset-4 transition-colors duration-200 hover:text-[var(--base44-muted)]"
              href="/enterprise"
            >
              Contact sales <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
