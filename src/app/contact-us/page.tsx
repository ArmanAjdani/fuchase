"use client";

import { useCallback, useState } from "react";

import Image from "next/image";

import Heading from "../core/components/heading";

import PhoneIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import LocationIcon from "../../assets/icons/location.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import XIcon from "../../assets/icons/x.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import AtSignIcon from "../../assets/icons/atsign.svg";

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const submit = useCallback(() => {
    console.log("form", form);
  }, [form]);

  return (
    <>
      <Heading title="Contact Us" />
      <div className="max-w-1440 mx-auto px-20">
        <p className="text-display-xl text-base text-center mb-60">
          Fuchase is a next-generation financial marketplace that connects the
          key players of global capital markets. We provide an environment where
          banks, brokers, fintechs, institutional investors, and innovators can
          collaborate, trade, and innovate. By combining cutting-edge
          technology, deep industry expertise, and a global network, we serve as
          the strategic bridge between liquidity, technology, and capital.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-20 mb-28">
          <div className="bg-white px-12 py-6 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] rounded-[10px] flex flex-col flex-wrap items-center justify-around gap-8 max-w-[630px] flex-1">
            <label className="w-full relative">
              <span className="block text-display-xl text-base mb-2.5">
                Name
              </span>
              <input
                id="name"
                name="name"
                placeholder="Name"
                value={form.name}
                className="w-full h-9 py-2 pr-3 pl-12 border border-color-light-white rounded-md"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Image
                src={ProfileIcon}
                width={16}
                height={20}
                alt="profile icon"
                className="absolute top-[54px] left-4"
              />
            </label>
            <label className="w-full relative">
              <span className="block text-display-xl text-base mb-2.5">
                Email
              </span>
              <input
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
                className="w-full h-9 py-2 pr-3 pl-12 border border-color-light-white rounded-md"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Image
                src={AtSignIcon}
                width={20}
                height={20}
                alt="atsign icon"
                className="absolute top-[54px] left-4"
              />
            </label>
            <label className="w-full">
              <span className="block text-display-xl text-base mb-2.5">
                Message
              </span>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                value={form.message}
                className="w-full py-2 px-3 border border-color-light-white rounded-md"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </label>
            <button
              className="text-button-m text-primary py-2.5 px-6 bg-linear-to-b from-white/0 to-accent mx-auto cursor-pointer w-48 mb-[10px]"
              onClick={submit}
            >
              Submit
            </button>
          </div>
          <div className="bg-white px-12 py-24 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] rounded-[10px] flex flex-col flex-wrap items-center justify-around gap-12 max-w-[630px] flex-1">
            <h3 className="text-heading-3 text-base">Talk to Us</h3>
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
    </>
  );
}
