import Image from "next/image";

import Ornament from "@assets/imgs/ornament.png";

export type HeadingPropsType = {
  name?: string;
  title: string;
  subtitle?: string;
};

export default function Heading({ name, title, subtitle }: HeadingPropsType) {
  return (
    <div
      className={`mt-36 pt-20 text-center px-20 relative ${subtitle ? "pb-14" : "pb-24"}`}
    >
      <Image
        src={Ornament}
        width={50}
        height={50}
        alt="ornament"
        className="absolute top-6 left-20 rotate-0"
      />
      <Image
        src={Ornament}
        width={50}
        height={50}
        alt="ornament"
        className="absolute top-6 right-20 rotate-90"
      />
      {name && (
        <span className="block text-primary text-heading-6 my-4">{name}</span>
      )}
      <h1 className={`text-heading text-heading-1 max-w-[1200px] mx-auto`}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-display-xl text-base text-center mt-10 mx-10">
          {subtitle}
        </p>
      )}
    </div>
  );
}
