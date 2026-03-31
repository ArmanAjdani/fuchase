"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Section2 from "@assets/imgs/section2.png";
import Ornament from "@assets/imgs/ornament.png";

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-28">
      <h2 className="text-heading-3 text-heading capitalize text-center mb-8">
        Who We serve
      </h2>
      <div
        className="flex flex-row flex-wrap justify-between items-center px-10"
        ref={ref}
      >
        <div
          className={`pt-10 pr-16 pl-4 w-1/2 transition-all duration-700 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="relative py-2">
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament icon"
              className="absolute top-0 left-0 rotate-0"
            />
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament icon"
              className="absolute top-0 right-0 rotate-90"
            />
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament icon"
              className="absolute bottom-0 left-0 rotate-270"
            />
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament icon"
              className="absolute bottom-0 right-0 rotate-180"
            />
            <p className="text-display-l text-content mx-16 my-6 text-justify">
              Fuchase is a next-generation financial marketplace that connects
              the key players of global capital markets. We provide an
              environment where banks, brokers, fintechs, institutional
              investors, and innovators can collaborate, trade, and innovate. By
              combining cutting-edge technology, deep industry expertise, and a
              global network, we serve as the strategic bridge between
              liquidity, technology, and capital.
            </p>
          </div>
        </div>
        <div
          className={`w-1/2 max-w-[550px] h-[400px] mt-10 transition-all duration-700 ease-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-10"}`}
        >
          <Image
            src={Section2}
            alt="who we serve image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
