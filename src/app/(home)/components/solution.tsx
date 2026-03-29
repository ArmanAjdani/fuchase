"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import GoldmanSachs from "../../../assets/imgs/goldmansachs.png";
import Location from "../../../assets/icons/location.svg";

export default function Solution({ index = 0 }) {
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
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`py-6 px-2 relative rounded-lg shadow-[0px_32px_64px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col justify-between gap-3">
        <Image
          src={GoldmanSachs}
          alt="service logo"
          width={200}
          height={56}
          className="mx-auto mt-4 h-[56px]"
        />
        <p className="text-display-r text-center">Providing comprehensive</p>
        <div className="mx-auto flex flex-row flex-wrap items-center justify-between gap-3">
          <Image src={Location} alt="location logo" width={16} height={20} />
          <span className="capitalize text-subtitle text-badge-t">
            New York City
          </span>
        </div>
      </div>
    </div>
  );
}
