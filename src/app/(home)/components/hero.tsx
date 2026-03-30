"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import HeroImage from "../../../assets/imgs/Hero.png";

export default function Hero() {
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
    <div className="relative z-0" ref={ref}>
      <Image
        src={HeroImage}
        width={1440}
        height={900}
        alt="hero banner"
        className="w-full"
        priority
      />
      <div className="absolute top-[65%] right-0 left-0 flex flex-row flex-wrap justify-between pl-16 pr-12">
        <h1
          className={`w-[220px] h-[96px] text-heading-3 text-accent uppercase transition-all duration-700 ease-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-10"}`}
        >
          financial ecosystem
        </h1>
        <p
          className={`w-[400px] h-[87px] text-heading-6 text-accent transition-all duration-700 ease-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-10"}`}
        >
          Fuchase is a next-generation financial ecosystem designed to connect
          and empower key players across global markets.
        </p>
      </div>
    </div>
  );
}
