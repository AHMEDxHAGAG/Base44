import Image from "next/image";

import { ArrowCircleIcon } from "../shared/icons";
import { base44AssetRoot, base44BuildUrl } from "../shared/site";

const sendoffAssetRoot = `${base44AssetRoot}/sections/sendoff`;

const registrationFrame =
  "absolute before:absolute before:-top-[8px] before:-left-[8px] before:z-10 before:size-[7px] before:bg-[#1e1e24] before:content-[''] after:absolute after:-top-[8px] after:-right-[8px] after:z-10 after:size-[7px] after:bg-[#1e1e24] after:content-['']";

export function SendoffSection() {
  return (
    <section
      aria-labelledby="sendoff-section-heading"
      className="relative h-[663.64px] overflow-hidden bg-[#3950e6] text-white min-[768px]:max-[1099px]:h-[118.92vw] min-[1100px]:h-[628px]"
    >
      <div
        aria-hidden="true"
        className="base44-grunge absolute inset-0 rotate-180"
      />

      <h2
        id="sendoff-section-heading"
        className="base44-display relative z-30 mx-auto max-w-[672px] pt-[96px] text-center text-[clamp(52px,7.02vw,100px)] leading-[0.95] tracking-[-0.04em] min-[768px]:max-[1099px]:pt-[18.9vw] min-[1100px]:pt-[35px]"
      >
        <span className="whitespace-nowrap">Go ahead.</span>
        <br />
        <span className="whitespace-nowrap">Build it yourself.</span>
      </h2>

      <div
        aria-hidden="true"
        className="absolute top-[227px] left-1/2 z-10 h-[243px] w-[655px] -translate-x-1/2 min-[1100px]:top-[256px] min-[1100px]:h-[175px]"
      >
        <div
          className={`${registrationFrame} left-[-72px] aspect-[810/582] w-[284px] min-[1100px]:left-0 min-[1100px]:w-[200px]`}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(min-width: 1100px) 200px, 284px"
            src={`${sendoffAssetRoot}/dashboard.webp`}
          />
        </div>

        <div
          className={`${registrationFrame} hidden aspect-[216/212] min-[1100px]:left-[205px] min-[1100px]:block min-[1100px]:w-[89px]`}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="89px"
            src={`${sendoffAssetRoot}/black-mode.jpg`}
          />
        </div>

        <div
          className={`${registrationFrame} left-[222px] aspect-[404/464] w-[211px] min-[1100px]:left-[295px] min-[1100px]:w-[152px]`}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(min-width: 1100px) 152px, 211px"
            src={`${sendoffAssetRoot}/sendoff-image.jpg`}
          />
        </div>

        <div
          className={`${registrationFrame} left-[443px] aspect-[276/583] w-[115px] min-[1100px]:left-[452px] min-[1100px]:w-[66px]`}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(min-width: 1100px) 66px, 115px"
            src={`${sendoffAssetRoot}/aftertone.webp`}
          />
        </div>

        <div
          className={`${registrationFrame} hidden aspect-[346/464] min-[1100px]:left-[527px] min-[1100px]:block min-[1100px]:w-[129px]`}
        >
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="129px"
            src={`${sendoffAssetRoot}/image-sendoff.jpg`}
          />
        </div>
      </div>

      <a
        className="group absolute bottom-[105px] left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-[8px] whitespace-nowrap text-white min-[768px]:max-[1099px]:bottom-[18.9vw] min-[1100px]:bottom-[50px] min-[1100px]:gap-[14px] base44-focus"
        href={base44BuildUrl}
      >
        <ArrowCircleIcon className="size-[clamp(28px,3.125vw,44px)] shrink-0 transition-transform duration-200 group-hover:translate-x-[6px] group-focus-visible:translate-x-[6px]" />
        <span className="base44-display text-[clamp(44px,6.67vw,96px)] leading-[0.95] tracking-[-0.04em] underline decoration-[4px] underline-offset-[8px] transition-transform duration-200 group-hover:-translate-y-[3px] group-focus-visible:-translate-y-[3px] min-[1100px]:decoration-[8px] min-[1100px]:underline-offset-[12px]">
          Start building
        </span>
      </a>
    </section>
  );
}
