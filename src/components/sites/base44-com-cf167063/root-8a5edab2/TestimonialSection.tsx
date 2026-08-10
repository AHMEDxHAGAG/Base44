import Image from "next/image";

const portraitSrc =
  "/sites/base44-com-cf167063/root-8a5edab2/sections/testimonial/yoav-hornung-v2.jpg";

export function TestimonialSection() {
  return (
    <section
      aria-label="Yoav Hornung customer story"
      className="base44-dot-grid relative isolate overflow-hidden px-[clamp(20px,4.6875vw,90px)] py-[50px] min-[768px]:max-[1099px]:px-[5.21vw] min-[768px]:max-[1099px]:pt-[10.22vw] min-[768px]:max-[1099px]:pb-[7.4vw] min-[1100px]:h-[794px] min-[1100px]:py-0"
    >
      <div className="relative mx-auto flex max-w-[1740px] flex-col min-[1100px]:h-full">
        <blockquote className="min-w-0 text-[var(--base44-ink)] min-[768px]:max-[1099px]:max-w-[82.81vw] min-[1100px]:max-w-[calc(100%-280px)]">
          <footer>
            <cite className="font-heading block text-[22px]/[30px] font-medium not-italic tracking-[-0.02em] min-[768px]:max-[1099px]:text-[22px] min-[768px]:max-[1099px]:leading-[30px] min-[1100px]:text-[clamp(20px,1.667vw,32px)] min-[1100px]:leading-[1.08]">
              — Yoav Hornung · Founder, Gift My Book · ex-Fiverr
            </cite>
          </footer>

          <p className="base44-display mt-7 text-[36px]/[39px] tracking-[-0.02em] min-[768px]:max-[1099px]:text-[7.66vw] min-[768px]:max-[1099px]:leading-[8.17vw] min-[1100px]:text-[clamp(43px,3.958vw,76px)] min-[1100px]:leading-[clamp(46px,4.17vw,80px)] min-[1100px]:tracking-[-0.04em]">
            “It took about a week to come up with a product that works
            end-to-end.”
          </p>
        </blockquote>

        <div className="mt-10 flex items-start justify-between gap-6 min-[768px]:max-[1099px]:mt-[7.29vw] min-[1100px]:contents">
          <a
            className="base44-focus shrink-0 text-[18px] leading-6 font-medium underline decoration-[1px] underline-offset-4 transition-colors duration-200 hover:text-[var(--base44-muted)] min-[768px]:max-[1099px]:text-[24px] min-[768px]:max-[1099px]:leading-[30px] min-[1100px]:absolute min-[1100px]:right-0 min-[1100px]:bottom-[412px]"
            href="https://base44.com/"
          >
            Read full story <span aria-hidden="true">→</span>
          </a>

          <figure className="relative h-[148px] w-[150px] shrink-0 overflow-hidden md:h-[248px] md:w-[232px] min-[768px]:max-[1099px]:h-[36.82vw]! min-[768px]:max-[1099px]:w-[46.47vw]! min-[1100px]:absolute min-[1100px]:top-0 min-[1100px]:right-0">
            <Image
              alt="Yoav Hornung, founder of Veo"
              className="object-cover"
              fill
              sizes="(max-width: 767px) 150px, 232px"
              src={portraitSrc}
            />
            <span aria-hidden="true" className="base44-grunge absolute inset-0" />
          </figure>
        </div>

        <div className="mt-10 grid w-full gap-[20px] min-[768px]:max-[1099px]:mt-[10.42vw] min-[1100px]:absolute min-[1100px]:inset-x-0 min-[1100px]:bottom-0 min-[1100px]:mt-0 min-[1100px]:grid-cols-3 min-[1100px]:items-end min-[1100px]:gap-[15px]">
          <div className="flex h-[340px] min-w-0 flex-col justify-between bg-[#e2ded7] p-[clamp(30px,2.083vw,40px)] min-[768px]:max-[1099px]:h-[66.39vw] min-[1100px]:h-[386px]">
            <strong className="base44-display text-[clamp(43px,3.958vw,76px)] leading-none tracking-[-0.04em]">
              1 week
            </strong>
            <span className="font-heading text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
              to launch
            </span>
          </div>

          <div className="flex h-[250px] min-w-0 flex-col justify-between bg-[#e2ded7] p-[clamp(30px,2.083vw,40px)] min-[768px]:max-[1099px]:h-[52.35vw] min-[1100px]:h-[304px]">
            <strong className="base44-display text-[clamp(43px,3.958vw,76px)] leading-none tracking-[-0.04em]">
              $1M ARR
            </strong>
            <span className="font-heading text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
              in 3 months
            </span>
          </div>

          <div className="flex h-[160px] min-w-0 flex-col justify-between bg-[#e2ded7] p-[clamp(30px,2.083vw,40px)] min-[768px]:max-[1099px]:h-[38.3vw] min-[1100px]:h-[223px]">
            <strong className="base44-display text-[clamp(43px,3.958vw,76px)] leading-none tracking-[-0.04em]">
              6-8%
            </strong>
            <span className="font-heading text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
              conversion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
