"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import Post from "./post";

import CloseDarkIcon from "../../../assets/icons/close-dark.svg";

export default function Posts() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("category", category);
    router.push(`?${params.toString()}`);
  };

  const removeCategory = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("category");
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div className="max-w-1440 mx-auto flex flex-row flex-wrap gap-4 justify-center items-center mb-8">
        {searchParams.get("category") && (
          <div className="flex flex-row flex-wrap items-center gap-3 px-2.5 py-1 border border-light-white rounded-sm">
            <span>{searchParams.get("category")}</span>
            <Image
              src={CloseDarkIcon}
              alt="close icon"
              width={12}
              height={12}
              className="cursor-pointer"
              onClick={() => removeCategory()}
            />
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-12 max-w-1440 mx-auto mb-28">
        {Array.from({ length: 6 }).map((_, i) => (
          <Post key={i} selectCategory={setCategory} />
        ))}
      </div>
    </>
  );
}
