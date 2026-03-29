import { Metadata } from "next";
import Image from "next/image";

import Heading from "../core/components/heading";
import ContactForm from "./components/contact-form";
import JsonLd from "../core/components/json-ld";

import PhoneIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import LocationIcon from "../../assets/icons/location.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import XIcon from "../../assets/icons/x.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "bla bla bla",
  keywords: ["first", "second", "third"],
};

export default function ContactUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Your Company",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+123456789",
        contactType: "customer service",
        email: "support@example.com",
      },
    },
  };

  return (
    <>
      <Heading
        title="Contact Us"
        subtitle="Fuchase is a next-generation financial marketplace that connects the
          key players of global capital markets. We provide an environment where
          banks, brokers, fintechs, institutional investors, and innovators can
          collaborate, trade, and innovate. By combining cutting-edge
          technology, deep industry expertise, and a global network, we serve as
          the strategic bridge between liquidity, technology, and capital."
      />
      <div className="mx-auto bg-contact-us px-10 py-12">
        <div className="flex flex-row flex-wrap justify-center items-center gap-20">
          <ContactForm />
          <div className="bg-white px-12 py-24 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] rounded-[10px] flex flex-col flex-wrap items-center justify-around gap-12 max-w-[630px] flex-1">
            <h2 className="text-heading-3 text-base">Talk to Us</h2>
            <div className="flex flex-row flex-wrap justify-start items-center w-full">
              <Image src={PhoneIcon} alt="phone icon" width={18} height={18} />
              <span className="block text-base text-display-xl pl-8">
                Phone Number:
              </span>
              <span className="text-base text-display-l ml-auto">
                +971506125001
              </span>
            </div>
            <div className="flex flex-row flex-wrap justify-start items-center w-full">
              <Image src={MailIcon} alt="mail icon" width={20} height={18} />
              <span className="block text-base text-display-xl pl-8">
                Email:
              </span>
              <span className="text-base text-display-l ml-auto">
                info@fuchase.com
              </span>
            </div>
            <div className="flex flex-row flex-wrap justify-start items-center w-full">
              <Image
                src={LocationIcon}
                alt="location icon"
                width={16}
                height={20}
              />
              <span className="block text-base text-display-xl pl-8">
                Address:
              </span>
              <span className="text-base text-display-l ml-auto">
                Palm Jumeirah, P.O. Box 213208
              </span>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-7">
              <a href="http://">
                <Image
                  src={LinkedinIcon}
                  width={30}
                  height={30}
                  alt="linkedin icon"
                />
              </a>
              <a href="http://">
                <Image
                  src={InstagramIcon}
                  width={30}
                  height={30}
                  alt="instagram icon"
                />
              </a>
              <a href="http://">
                <Image src={XIcon} width={30} height={27} alt="x icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <JsonLd data={schema} />
    </>
  );
}
