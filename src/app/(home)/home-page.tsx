import Image from "next/image";

import Hero from "./components/hero";
import Partners from "./components/partners";
import Solution from "./components/solution";

import Section1 from "../../assets/imgs/section1.png";
import Section2 from "../../assets/imgs/section2.png";
import Ornament from "../../assets/imgs/ornament.png";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <div className="max-w-1440 mx-auto">
        {/* who we are */}
        <div className="flex flex-row flex-wrap justify-between">
          <Image src={Section1} alt="who we are image" className="w-1/2" />
          <div className="pt-10 pl-16 pr-4 w-1/2">
            <h2 className="text-heading-2 text-heading mb-16 capitalize">
              Who We are
            </h2>
            <div className="relative py-2">
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute top-0 left-0 rotate-0"
              />
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute top-0 right-0 rotate-90"
              />
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute bottom-0 left-0 rotate-270"
              />
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute bottom-0 right-0 rotate-180"
              />
              <p className="text-display-r text-content m-20 text-justify">
                Fuchase is a next-generation financial marketplace that connects
                the key players of global capital markets. We provide an
                environment where banks, brokers, fintechs, institutional
                investors, and innovators can collaborate, trade, and innovate.
                By combining cutting-edge technology, deep industry expertise,
                and a global network, we serve as the strategic bridge between
                liquidity, technology, and capital.
              </p>
            </div>
          </div>
        </div>
        {/* solutions */}
        <div className="px-16 py-28">
          <h1 className="capitalize text-heading-1 text-heading text-center">
            Solutions
          </h1>
          <div className="flex flex-row flex-wrap justify-center gap-24 mt-16">
            {Array.from(Array(10)).map((i) => (
              <Solution key={i} />
            ))}
          </div>
        </div>
        {/* who we serve */}
        <div className="flex flex-row flex-wrap justify-between">
          <Image src={Section2} alt="who we are image" className="w-1/2" />
          <div className="pt-10 pl-16 pr-4 w-1/2">
            <h2 className="text-heading-2 text-heading mb-16 capitalize">
              Who We serve
            </h2>
            <div className="relative py-2">
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute top-0 left-0 rotate-0"
              />
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute top-0 right-0 rotate-90"
              />
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute bottom-0 left-0 rotate-270"
              />
              <Image
                src={Ornament}
                width={50}
                height={50}
                alt="ornament"
                className="absolute bottom-0 right-0 rotate-180"
              />
              <p className="text-display-r text-content m-20 text-justify">
                Fuchase is a next-generation financial marketplace that connects
                the key players of global capital markets. We provide an
                environment where banks, brokers, fintechs, institutional
                investors, and innovators can collaborate, trade, and innovate.
                By combining cutting-edge technology, deep industry expertise,
                and a global network, we serve as the strategic bridge between
                liquidity, technology, and capital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
