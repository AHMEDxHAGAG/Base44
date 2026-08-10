import Image from "next/image";

const portraitSrc =
  "/sites/base44-com-cf167063/root-8a5edab2/sections/testimonial/yoav-hornung-v2.jpg";

export function TestimonialSection() {
  return (
    <section
      aria-label="Yoav Hornung customer story"
      className="base44-dot-grid relative isolate overflow-hidden px-[clamp(20px,4.6875vw,90px)] py-14 min-[1100px]:h-[794px] min-[1100px]:py-0"
    >
      <div className="relative mx-auto flex max-w-[1740px] flex-col min-[1100px]:h-full">
        <blockquote className="min-w-0 text-[var(--base44-ink)] min-[1100px]:max-w-[calc(100%-280px)]">
          <footer>
            <cite className="font-heading block text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium not-italic tracking-[-0.02em]">
              Yoav Hornung
              <br />
              Founder of Veo.
            </cite>
          </footer>

          <p className="base44-display mt-7 text-[clamp(43px,3.958vw,76px)] leading-[clamp(46px,4.17vw,80px)] tracking-[-0.04em]">
            “I don&apos;t need to do all the cumbersome stuff—hiring a frontend
            engineer, a backend engineer, a product manager and a
            designer—everything is in my control now.”
          </p>
        </blockquote>

        <div className="mt-10 flex items-start justify-between gap-6 min-[1100px]:contents">
          <a
            className="base44-focus shrink-0 text-[18px] leading-6 font-medium underline decoration-[1px] underline-offset-4 transition-colors duration-200 hover:text-[var(--base44-muted)] min-[1100px]:absolute min-[1100px]:right-0 min-[1100px]:bottom-[412px]"
            href="https://base44.com/"
          >
            Read full story <span aria-hidden="true">→</span>
          </a>

          <figure className="relative h-[160px] w-[150px] shrink-0 overflow-hidden md:h-[248px] md:w-[232px] min-[1100px]:absolute min-[1100px]:top-0 min-[1100px]:right-0">
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

        <div className="mt-10 grid w-full gap-[15px] min-[1100px]:absolute min-[1100px]:inset-x-0 min-[1100px]:bottom-0 min-[1100px]:mt-0 min-[1100px]:grid-cols-3 min-[1100px]:items-end">
          <div className="flex h-[330px] min-w-0 flex-col justify-between bg-[#e2ded7] p-[clamp(30px,2.083vw,40px)] md:h-[360px] min-[1100px]:h-[386px]">
            <strong className="base44-display text-[clamp(43px,3.958vw,76px)] leading-none tracking-[-0.04em]">
              10K+
            </strong>
            <span className="font-heading text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
              users
            </span>
          </div>

          <div className="flex h-[270px] min-w-0 flex-col justify-between bg-[#e2ded7] p-[clamp(30px,2.083vw,40px)] md:h-[300px] min-[1100px]:h-[304px]">
            <strong className="base44-display text-[clamp(43px,3.958vw,76px)] leading-none tracking-[-0.04em]">
              100%
            </strong>
            <span className="font-heading text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
              conversion in 6 weeks
            </span>
          </div>

          <div className="flex h-[210px] min-w-0 flex-col justify-between bg-[#e2ded7] p-[clamp(30px,2.083vw,40px)] md:h-[240px] min-[1100px]:h-[223px]">
            <strong className="base44-display text-[clamp(43px,3.958vw,76px)] leading-none tracking-[-0.04em]">
              10x
            </strong>
            <span className="font-heading text-[clamp(20px,1.667vw,32px)] leading-[1.08] font-medium tracking-[-0.02em]">
              faster time to market
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
