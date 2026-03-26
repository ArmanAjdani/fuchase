import Image from "next/image";

import Ornament from "../../../assets/imgs/ornament.png";
import GoldmanSachs from "../../../assets/imgs/goldmansachs.png";
import Location from "../../../assets/icons/location.svg";

export default function Solution() {
  return (
    <div className="p-6 relative shadow-[0px_32px_64px_rgba(0,0,0,0.14)] rounded-lg">
      <Image
        src={Ornament}
        width={50}
        height={50}
        alt="ornament"
        className="absolute top-6 left-6 rotate-0"
      />
      <Image
        src={Ornament}
        width={50}
        height={50}
        alt="ornament"
        className="absolute top-6 right-6 rotate-90"
      />
      <div className="flex flex-col justify-between gap-8 pt-20">
        <Image
          src={GoldmanSachs}
          alt="service logo"
          width={200}
          height={56}
          className="mx-auto h-[56px]"
        />
        <p className="text-subtitle text-subtitle-r max-w-[400px] text-center mx-12">
          Providing comprehensive, customized solutions for the design, launch,
          and scalable growth of financial systems.
        </p>
        <div className="mx-auto flex flex-row flex-wrap items-center justify-between gap-3">
          <Image src={Location} alt="location logo" width={16} height={20} />
          <span className="capitalize text-subtitle text-badge-t">
            New York City
          </span>
        </div>
        <button className="text-button-m w-fit text-primary py-2.5 px-6 bg-linear-to-b from-white/0 to-accent mx-auto cursor-pointer">
          Invest for Future
        </button>
      </div>
    </div>
  );
}
