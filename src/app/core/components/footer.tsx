import Image from "next/image";
import Link from "next/link";

import MailIcon from "../../../assets/icons/mail.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Logo2 from "../../../assets/imgs/logo2.svg";

export default function Footer() {
  return (
    <footer>
      <div className="py-10 px-16 bg-primary">
        <div className="flex flex-row flex-wrap items-center justify-between max-w-1440 mx-auto">
          <span className="text-display-xxl text-accent">Get in touch</span>
          <div className="flex flex-col gap-6 justify-center items-center">
            <Image src={MailIcon} width={34} height={27} alt="mail icon" />
            <a href="mailto:" className="text-accent underline text-button-m">
              hello@fuchase.com
            </a>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <Image src={PhoneIcon} width={30} height={30} alt="mail icon" />
            <a href="tel:+" className="text-accent underline text-button-m">
              +1 (555) 000-0000
            </a>
          </div>
        </div>
      </div>

      <div className="px-16 pb-20 bg-secondary">
        <div className="py-14 flex flex-row flex-wrap justify-between max-w-1440 mx-auto">
          <div className="flex flex-col flex-wrap items-center gap-7">
            <Image src={Logo2} width={196} height={123} alt="logo2" />
            <a href="http://">
              <Image
                src={Linkedin}
                width={30}
                height={30}
                alt="linkedin icon"
                className="cursor-pointer"
              />
            </a>
          </div>

          <div className="flex flex-row flex-wrap justify-between items-center gap-36">
            <ul>
              <li className="text-display-xl text-accent pb-3">Company</li>
              <li className="pb-3">
                <Link href="/about-us" className="text-display-r text-accent">
                  About Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact-us" className="text-display-r text-accent">
                  Contact Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/blog" className="text-display-r text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-display-r text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-display-xl text-accent pb-3">Company</li>
              <li className="pb-3">
                <Link href="/about-us" className="text-display-r text-accent">
                  About Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact-us" className="text-display-r text-accent">
                  Contact Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/blog" className="text-display-r text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-display-r text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-display-xl text-accent pb-3">Company</li>
              <li className="pb-3">
                <Link href="/about-us" className="text-display-r text-accent">
                  About Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact-us" className="text-display-r text-accent">
                  Contact Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/blog" className="text-display-r text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-display-r text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-display-xl text-accent pb-3">Company</li>
              <li className="pb-3">
                <Link href="/about-us" className="text-display-r text-accent">
                  About Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/contact-us" className="text-display-r text-accent">
                  Contact Us
                </Link>
              </li>
              <li className="pb-3">
                <Link href="/blog" className="text-display-r text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-display-r text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border border-dark-white" />

        <div className="py-2.5 flex flex-row flex-wrap justify-between items-center">
          <span className="block text-accent text-display-l">
            @2026 Fuchase
          </span>
          <p className="max-w-[741px] text-accent text-display-l">
            We connect elite financial institutions and visionary investors with
            transformative opportunities, exclusive partnerships, and
            next-generation financial infrastructure designed for those who
            operate at the highest level of global finance.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
