"use client";

import { useMemo, useState } from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../../public/logo.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import MenuDarkIcon from "../../../assets/icons/menu-dark.svg";
import CloseLightIcon from "../../../assets/icons/close-light.svg";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = useMemo(() => {
    return pathname !== "/";
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="flex flex-row flex-wrap justify-between items-center mx-16 my-7">
        <Link href="/">
          <Image
            src={Logo}
            alt="furchase logo"
            className="w-full h-auto max-w-[190px] cursor-pointer"
          />
        </Link>
        <div className="flex flex-row flex-wrap items-center">
          <button
            className={`px-6 py-2.5 border mr-6 cursor-pointer ${isDark ? "text-base border-dark-button" : "text-accent border-dark-white"}`}
          >
            Private Inquiry
          </button>
          <div
            className="p-4 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            {isDark ? (
              <Image
                src={MenuDarkIcon}
                alt="menu-dark icon"
                width={16}
                height={12}
                className="block"
              />
            ) : (
              <Image
                src={MenuIcon}
                alt="menu icon"
                width={16}
                height={12}
                className="block"
              />
            )}
          </div>
        </div>
      </div>

      <nav
        className={`
          px-16 py-7 flex flex-wrap items-center justify-between bg-base-shadow backdrop-blur-md
          fixed left-0 right-0 top-0
          transition-all duration-500 ease-in-out
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="furchase logo"
            className="w-full h-auto max-w-[190px] cursor-pointer shrink-0"
          />
        </Link>
        <ul className="flex flex-row flex-wrap items-center justify-between pl-20 pr-28 flex-1">
          <li>
            <Link href="/about-us" className="text-display-xl text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-display-xl text-white">
              Contact us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-display-xl text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-display-xl text-white">
              FAQ
            </Link>
          </li>
        </ul>
        <div
          className="p-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={CloseLightIcon}
            width={13}
            height={13}
            alt="close icon"
            className="shrink-0"
          />
        </div>
      </nav>
    </header>
  );
}
