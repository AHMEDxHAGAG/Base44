import Link from "next/link";

const buildCards = [
  {
    title: "Apps",
    description:
      "Turn any idea into a fully functional app — with backend, auth, payments, and hosting already built in. No setup, no engineers, no waiting.",
    label: "Build an app",
    href: "https://base44.com/ai-app-builder",
    external: true,
  },
  {
    title: "Websites",
    description:
      "Build a website for any need. AI-generated design, custom domain, built-in SEO tools — ready to go live from day one.",
    label: "Build a website with AI",
    href: "https://base44.com/ai-website-builder",
    external: true,
  },
  {
    title: "AI agents",
    description:
      "Create a 24/7 agent that connects to your tools, takes real action, and works while you sleep. No integration headaches.",
    label: "Create an AI agent",
    href: "/superagents",
    external: false,
  },
] as const;

const ctaClassName =
  "group/cta mt-[24px] inline-flex h-[clamp(40px,2.55vw,49px)] overflow-hidden rounded-[10px] bg-[#312f2f] px-[clamp(18px,1.46vw,28px)] text-[14px] leading-none font-medium text-white transition-colors duration-200 hover:bg-[#433f3f] min-[1100px]:mt-[clamp(24px,2.22vw,32px)] base44-focus";

function ctaLabel(label: string) {
  return (
    <span className="flex h-[200%] flex-col transition-transform duration-200 group-hover/cta:-translate-y-1/2">
      <span className="flex h-1/2 shrink-0 items-center whitespace-nowrap">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="flex h-1/2 shrink-0 items-center whitespace-nowrap"
      >
        {label}
      </span>
    </span>
  );
}

export function BuildSection() {
  return (
    <section
      aria-labelledby="build-section-heading"
      className="base44-dot-grid font-sans text-[#1e1e24]"
    >
      <div className="px-5 pt-[50px] min-[768px]:max-[1099px]:px-[5.21vw] min-[768px]:max-[1099px]:pt-[10.42vw] min-[1100px]:px-[min(4.6875vw,90px)] min-[1100px]:pt-[min(6.25vw,120px)]">
        <h2
          id="build-section-heading"
          className="base44-display text-[clamp(40px,3.96vw,76px)] leading-[1.05] tracking-[-0.04em] min-[768px]:max-[1099px]:text-[8vw]"
        >
          What will
          <br className="md:hidden" /> you build?
        </h2>
        <p className="mt-[16px] text-[clamp(16px,1.25vw,24px)] leading-[1.25] md:mt-[12px] md:max-w-[min(45.9vw,882px)] min-[768px]:max-[1099px]:max-w-[51.4vw]! min-[768px]:max-[1099px]:text-[2.865vw] min-[768px]:max-[1099px]:leading-[1.33]">
          Whatever you&apos;re imagining, you can
          <br className="md:hidden" /> use vibe coding to build it on Base44.
        </p>
      </div>

      <div className="mt-[50px] grid grid-cols-1 gap-y-[25px] pb-[50px] min-[768px]:max-[1099px]:mt-[9.11vw] min-[768px]:max-[1099px]:gap-y-[3.12vw] min-[768px]:max-[1099px]:pb-[10.42vw] min-[1100px]:mt-[min(4.4271vw,85px)] min-[1100px]:grid-cols-3 min-[1100px]:gap-x-[21px] min-[1100px]:gap-y-0 min-[1100px]:pb-[min(6.0417vw,116px)]">
        {buildCards.map((card) => (
          <article
            key={card.title}
            className="group flex min-h-[clamp(330px,91.67vw,436px)] flex-col border-0 border-b-[10px] border-solid border-b-[#ff6a00] bg-[#f9f7f4] px-[30px] pt-[33px] pb-[38px] min-[768px]:max-[1099px]:min-h-[380px]! min-[768px]:max-[1099px]:p-[5.21vw] min-[1100px]:min-h-[clamp(360px,27.6vw,530px)] min-[1100px]:px-[clamp(20px,1.5625vw,30px)] min-[1100px]:pt-[clamp(20px,1.5625vw,30px)] min-[1100px]:pb-[clamp(20px,1.5625vw,30px)] min-[1100px]:transition-colors min-[1100px]:duration-200 min-[1100px]:hover:bg-[#ff6a00]"
          >
            <h3 className="base44-display text-[clamp(28px,2.5vw,48px)] leading-[1.08]">
              {card.title}
            </h3>
            <div className="mt-auto">
              <p className="text-[clamp(16px,1.25vw,24px)] leading-[1.25] min-[768px]:max-[1099px]:max-w-[510px] min-[768px]:max-[1099px]:text-[2.865vw] min-[768px]:max-[1099px]:leading-[1.33]">
                {card.description}
              </p>
              {card.external ? (
                <a className={ctaClassName} href={card.href}>
                  {ctaLabel(card.label)}
                </a>
              ) : (
                <Link className={ctaClassName} href={card.href}>
                  {ctaLabel(card.label)}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
