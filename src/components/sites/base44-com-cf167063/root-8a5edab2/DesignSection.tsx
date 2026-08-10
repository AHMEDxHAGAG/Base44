import { ArrowCircleIcon } from "../shared/icons";

const designLinks = [
  {
    title: "Seamlessly collaborate",
    description:
      "See every page at once. Leave notes, sketch ideas, and send instructions straight to AI — all on one board.",
    href: "https://base44.com/features#collaboration",
  },
  {
    title: "Generate high-quality videos",
    description:
      "Describe a video, get one. Add it to any page — hero sections, onboarding screens, product previews.",
    href: "https://base44.com/features#video-generation",
  },
  {
    title: "Get redesign recommendation",
    description:
      "Ask for design options, pick the one you want. AI shows previews before it touches anything.",
    href: "https://base44.com/features#redesign",
  },
  {
    title: "Control the design",
    description:
      "Set colors and fonts for your entire app from one place. Your entire app — updated everywhere at once.",
    href: "https://base44.com/features#design-controls",
  },
] as const;

export function DesignSection() {
  return (
    <section
      aria-labelledby="design-section-heading"
      className="bg-[#eeeceb] font-sans text-[#1e1e24] min-[1100px]:flex min-[1100px]:h-[min(59.16vw,1136px)] min-[1100px]:overflow-hidden"
    >
      <div className="relative mr-[20px] min-h-[530px] overflow-hidden bg-[#3950e6] px-5 py-[50px] min-[768px]:max-[1099px]:mr-[6.51vw] min-[768px]:max-[1099px]:min-h-[92.4vw] min-[768px]:max-[1099px]:px-[5.21vw] min-[768px]:max-[1099px]:py-[10.42vw] min-[1100px]:mr-0 min-[1100px]:min-h-0 min-[1100px]:w-[47.92%] min-[1100px]:shrink-0 min-[1100px]:px-[min(4.6875vw,90px)] min-[1100px]:py-[min(6.25vw,120px)]">
        <div
          aria-hidden="true"
          className="base44-grunge absolute inset-0 rotate-180"
        />
        <div className="relative z-10">
          <h2
            id="design-section-heading"
            className="base44-display text-[clamp(48px,13.333vw,64px)] leading-[0.92] tracking-[-0.04em] text-[#eeeceb] min-[768px]:max-[1099px]:text-[64px] min-[1100px]:max-w-[min(33.33vw,640px)] min-[1100px]:text-[clamp(64px,6.46vw,124px)]"
          >
            Beautiful by default. Yours by design.
          </h2>
          <p className="mt-[50px] font-heading text-[clamp(21px,1.667vw,32px)] leading-[1.4] font-medium text-white min-[1100px]:mt-[24px]">
            Anyone can build an app.
            <br />
            Now anyone can make it beautiful too.
          </p>
        </div>
      </div>

      <div className="px-5 pt-[44px] pb-[80px] min-[768px]:max-[1099px]:px-[5.21vw] min-[768px]:max-[1099px]:pt-[10.42vw] min-[768px]:max-[1099px]:pb-[13vw] min-[1100px]:min-h-0 min-[1100px]:min-w-0 min-[1100px]:flex-1 min-[1100px]:py-[min(6.25vw,120px)] min-[1100px]:pr-[min(4.6875vw,90px)] min-[1100px]:pl-[min(5.73vw,110px)]">
        <ul className="flex max-w-[800px] flex-col gap-[20px] min-[768px]:max-[1099px]:gap-[9.64vw] min-[1100px]:gap-[clamp(32px,3.125vw,44.5px)]">
          {designLinks.map((item, index) => (
            <li
              key={item.title}
              className={`${index > 0 ? "border-t-2 border-[#1e1e24] pt-[20px] min-[768px]:max-[1099px]:border-t-0 min-[768px]:max-[1099px]:pt-0 min-[1100px]:border-t-0 min-[1100px]:pt-0" : ""} ${index < designLinks.length - 1 ? "min-[1100px]:border-b min-[1100px]:border-[#1e1e24] min-[1100px]:pb-[clamp(32px,3.125vw,44.5px)]" : ""}`}
            >
              <a
                className="group block base44-focus"
                href={item.href}
              >
                <span className="flex items-start">
                  <span className="base44-display text-[5.875vw]/[6.934vw] min-[768px]:max-[1099px]:text-[4.43vw] min-[768px]:max-[1099px]:leading-[1.235] min-[1100px]:text-[clamp(28px,2.5vw,48px)] min-[1100px]:leading-[1.08]">
                    {item.title}
                  </span>
                  <ArrowCircleIcon className="ml-auto size-[clamp(28px,3.125vw,44px)] shrink-0 transition-transform duration-200 group-hover:translate-x-[6px] group-focus-visible:translate-x-[6px] min-[1100px]:ml-[10px]" />
                </span>
                <span className="mt-[8px] block text-[4.269vw]/[5.337vw] min-[768px]:max-[1099px]:text-[2.865vw] min-[768px]:max-[1099px]:leading-[1.36] min-[1100px]:text-[clamp(16px,1.25vw,24px)] min-[1100px]:leading-[1.25]">
                  {item.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
