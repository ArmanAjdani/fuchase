import Image from "next/image";

import Ornament from "../../../assets/imgs/ornament.png";

export type HeadingPropsType = {
  name?: string;
  title: string;
};

export default function Heading({
  name,
  title,
}: {
  name?: string;
  title: string;
}) {
  return (
    <div className="mt-48 pb-32 pt-28 text-center px-20 relative">
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
      <span className="text-primary text-heading-6">{name}</span>
      <h1 className="text-heading text-heading-1 pt-16 max-w-[1000px] mx-auto">
        {title}
      </h1>
    </div>
  );
}
