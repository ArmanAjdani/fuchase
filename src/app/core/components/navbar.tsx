import Image from "next/image";
import Link from "next/link";

import Logo from "@public/logo.svg";
import CloseLightIcon from "@icons/close-light.svg";

export type NavbarPropsType = {
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Navbar({ open, setIsOpen }: NavbarPropsType) {
  const links = [
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Contact us",
      url: "/contact-us",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "FAQ",
      url: "/faq",
    },
  ];

  return (
    <nav
      className={`px-10 flex flex-wrap items-center justify-between bg-base-shadow backdrop-blur-md fixed left-0 right-0 top-0 transition-all duration-500 ease-in-out
        ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image
          src={Logo}
          width={120}
          height={70}
          alt="furchase logo"
          className="w-full cursor-pointer shrink-0"
        />
      </Link>
      <div className="flex flex-row flex-wrap items-center justify-end flex-1">
        <ul className="flex flex-row flex-wrap items-center justify-between pl-20 pr-28 flex-1 max-w-[1200px]">
          {links.map(({ name, url }) => (
            <li key={name}>
              <Link
                href={url}
                className="text-display-r text-accent"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="p-4 cursor-pointer shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <Image src={CloseLightIcon} width={13} height={13} alt="close icon" />
        </div>
      </div>
    </nav>
  );
}
