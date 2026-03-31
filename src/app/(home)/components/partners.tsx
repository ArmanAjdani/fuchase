import Image from "next/image";

import BlackRockLogo from "@assets/imgs/blackrock.png";
import CreditSuisse from "@assets/imgs/creditsuisse.png";
import GoldmanSachs from "@assets/imgs/goldmansachs.png";
import JpMorgan from "@assets/imgs/jpmorgan.png";
import MorganStanley from "@assets/imgs/morganstanley.png";

const partners = [
  BlackRockLogo,
  CreditSuisse,
  GoldmanSachs,
  JpMorgan,
  MorganStanley,
];

export default function Partners() {
  return (
    <div className="overflow-hidden w-full py-4 bg-accent">
      <div className="animate-marquee flex flex-row items-center justify-between gap-6">
        {[...partners, ...partners, ...partners, ...partners, ...partners].map(
          (partner, i) => (
            <div key={i} className="w-[200px] h-[56px]">
              <Image
                src={partner}
                alt="partner brand icon"
                className="object-contain h-full"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
