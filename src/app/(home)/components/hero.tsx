import Image from "next/image";

import HeroImage from "../../../assets/imgs/Hero.png";

export default function Hero() {
  return (
    <div className="relative z-0">
      <Image
        src={HeroImage}
        width={1440}
        height={900}
        alt="hero banner"
        className="w-full"
      />
      <h1 className="absolute top-[55%] left-[27%] -translate-x-1/2 -translate-y-1/2 w-[560px] h-[172px] text-heading-1 text-accent uppercase">
        financial ecosystem
      </h1>
    </div>
  );
}
