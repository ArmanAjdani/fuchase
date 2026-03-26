import Image from "next/image";

import Section2 from "../../../assets/imgs/section2.png";
import ArrowIcon from "../../../assets/icons/arrow.svg";
import Link from "next/link";

export default function Post() {
  return (
    <div className="text-center max-w-[635px]">
      <Image
        src={Section2}
        width={635}
        alt="blog image"
        className="h-[526px] object-cover rounded-[10px]"
      />
      <div className="pt-24 px-16">
        <h2 className="text-base text-heading-2">
          Exploring Generative AI in Content Creation
        </h2>
        <p className="text-left text-display-r text-base my-12">
          Learn the core foundations of investing without confusion or
          complexity. Start confidently and build financial habits that create
          long-term stability.
        </p>
        <Link
          href="/blog/1"
          className="flex flex-row justify-center items-center gap-5 mb-12"
        >
          <span className="underline text-primary text-link-t">Read More</span>
          <Image src={ArrowIcon} width={5} height={9} alt="arrow icon" />
        </Link>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5">
          {Array.from(Array(3)).map((i) => (
            <div
              key={i}
              className="px-2.5 py-1 border border-light-white rounded-sm"
            >
              Category
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
