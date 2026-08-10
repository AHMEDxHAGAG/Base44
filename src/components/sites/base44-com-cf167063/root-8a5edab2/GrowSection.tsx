import Image from "next/image";

import { ArrowCircleIcon } from "../shared/icons";

const growAssetRoot =
  "/sites/base44-com-cf167063/root-8a5edab2/sections/grow";

const growCards = [
  {
    title: "SEO/GEO\ndashboard",
    description:
      "Get found where people are actually looking – on Google, ChatGPT, Gemini and more. Run a scan, get a prioritized fix list, and let AI apply the fixes.",
    href: "https://base44.com/features#seo",
    icon: "search",
  },
  {
    title: "Social\npresence",
    description:
      "Base44 reads what you build, picks the right social platforms, and generates ready-to-post content – in your voice.",
    href: "https://base44.com/features#social",
    icon: "social",
  },
  {
    title: "App\nanalytics",
    description:
      "Track traffic, sales, customize your dashboard, and measure the actions that matter most in your Base44 app.",
    href: "https://base44.com/features#analytics",
    icon: "analytics",
  },
] as const;

export function GrowSection() {
  return (
    <section
      aria-labelledby="grow-section-heading"
      className="bg-[#f9f7f4] font-sans text-[#1e1e24] min-[1100px]:bg-[#eeeceb]"
    >
      <div className="px-5 py-[50px] min-[768px]:max-[1099px]:px-[5.21vw] min-[768px]:max-[1099px]:py-[10.42vw] min-[1100px]:px-[min(4.6875vw,90px)] min-[1100px]:pt-[min(6.25vw,120px)] min-[1100px]:pb-[min(3.47vw,67px)]">
        <p className="font-heading text-[5.346vw]/[6.148vw] font-medium min-[768px]:max-[1099px]:text-[3.45vw] min-[768px]:max-[1099px]:leading-[1.4] min-[1100px]:text-[clamp(20px,1.667vw,32px)] min-[1100px]:leading-[1.4]">
          Built-in marketing tools to grow after you ship
        </p>
        <h2
          id="grow-section-heading"
          className="base44-display mt-[28px] max-w-[800px] text-[5.875vw]/[6.934vw] min-[768px]:max-[1099px]:mt-[20px] min-[768px]:max-[1099px]:text-[4.344vw] min-[768px]:max-[1099px]:leading-[1.235] min-[1100px]:mt-[20px] min-[1100px]:text-[clamp(30px,2.5vw,48px)] min-[1100px]:leading-[1.08]"
        >
          Base44 doesn&apos;t stop when you publish your creation. You can also
          grow your business right from within the platform.
        </h2>
      </div>

      <div className="relative overflow-hidden min-[1100px]:h-[min(41.98vw,806px)]">
        <Image
          alt=""
          className="object-cover min-[1100px]:hidden"
          fill
          sizes="(min-width: 1100px) 0px, 100vw"
          src={`${growAssetRoot}/grow-bg-tablet.webp`}
        />
        <Image
          alt=""
          className="hidden object-cover min-[1100px]:block"
          fill
          sizes="(min-width: 1100px) 100vw, 0px"
          src={`${growAssetRoot}/grow-bg.webp`}
        />

        <div className="relative z-10 flex flex-col gap-[20px] px-5 py-[50px] min-[768px]:max-[1099px]:items-center min-[768px]:max-[1099px]:py-[10.42vw] min-[1100px]:grid min-[1100px]:h-full min-[1100px]:grid-cols-3 min-[1100px]:gap-[20px] min-[1100px]:px-[clamp(20px,2.78vw,40px)] min-[1100px]:py-[min(5.21vw,100px)]">
          {growCards.map((card) => (
            <a
              key={card.title}
              className="group flex min-h-[340px] flex-col bg-[#f9f7f4] p-[30px] transition-colors duration-200 hover:bg-[#eeeceb] min-[768px]:max-[1099px]:min-h-[51vw] min-[768px]:max-[1099px]:w-[68.75vw] min-[768px]:max-[1099px]:p-[3.9vw] min-[1100px]:min-h-0! min-[1100px]:w-auto min-[1100px]:p-[clamp(30px,2.5vw,40px)] base44-focus"
              href={card.href}
            >
              <div className="flex items-start justify-between gap-[20px]">
                <h3 className="base44-display whitespace-pre-line text-[clamp(28px,2.5vw,48px)] leading-[1.08] min-[768px]:max-[1099px]:text-[4.43vw] min-[768px]:max-[1099px]:leading-[1.235]">
                  {card.title}
                </h3>
                <svg
                  aria-hidden="true"
                  className="size-[30px] shrink-0"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  {card.icon === "search" ? (
                    <>
                      <circle
                        cx="13.5"
                        cy="13.5"
                        r="7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m19 19 7 7M9.5 13.5h8M13.5 9.5v8"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeWidth="1.5"
                      />
                    </>
                  ) : card.icon === "social" ? (
                    <>
                      <circle
                        cx="8"
                        cy="16"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="24"
                        cy="8"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m10.7 14.7 10.6-5.4M10.7 17.3l10.6 5.4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M5 26V15h5v11M13.5 26V9h5v17M22 26V4h5v22M3 26h26"
                        stroke="currentColor"
                        strokeLinejoin="miter"
                        strokeWidth="1.5"
                      />
                    </>
                  )}
                </svg>
              </div>
              <p className="mt-auto text-[clamp(16px,1.25vw,24px)] leading-[1.25] min-[768px]:max-[1099px]:text-[2.865vw] min-[768px]:max-[1099px]:leading-[1.36]">
                {card.description}
              </p>
              <ArrowCircleIcon className="mt-[28px] size-[40px] transition-transform duration-200 group-hover:translate-x-[6px] group-focus-visible:translate-x-[6px] min-[768px]:max-[1099px]:mt-[5.21vw] min-[1100px]:mt-[min(5.2vw,80px)] min-[1100px]:size-[36px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
