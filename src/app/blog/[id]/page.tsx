import Image from "next/image";

import Heading from "../../core/components/heading";

import BlogDetailImage from "../../../assets/imgs/blog-detail.png";
import ChevronIcon from "../../../assets/icons/chevron.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import XIcon from "../../../assets/icons/x.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";

export default function BlogDetail() {
  return (
    <>
      <Heading title="Exploring Generative AI in Content Creation" />
      <Image
        src={BlogDetailImage}
        alt="blog detail image"
        className="w-full mb-24"
        width={1440}
        height={800}
      />
      <div className="max-w-1440 mx-auto flex flex-row flex-wrap justify-between gap-12 px-20 pb-14">
        <div className="flex-1">
          <p className="text-heading text-display-r">
            Stepping into the world of Investing can feel
            Intimidating—especially if you've never done it before. Charts,
            numbers, unfamiliar terms, and stories of people losing money can
            make it all seem complicated. But the truth is: investing isn't just
            for experts. It's a skill anyone can learn, and starting early (even
            with a small amount) can make a big difference in your financial
            future. This guide will walk you through the basics in plain
            language—no confusing jargon, no pressure.
          </p>
          <br />
          <br />
          <section>
            <h4 className="text-heading text-heading-4">
              Why Should You Invest?
            </h4>
            <br />
            <br />
            <p className="text-heading text-display-r">
              If you only save money in a bank account, inflation gradually
              reduces its value. Investing gives your money the chance to grow.
              For example: If you save $1000 and leave it alone, it stays $1000.
              But if you invest it and it grows 7% per year, it can become more
              than $1900 in 10 years—without adding any extra money. Investing
              helps you: Grow wealth over time Protect yourself from inflation
              Work toward financial freedom Build long-term stability
            </p>
          </section>
          <br />
          <br />
          <section>
            <h4 className="text-heading text-heading-4">
              Start with the Basics: What Is Investing?
            </h4>
            <br />
            <br />
            <p className="text-heading text-display-r">
              Investing means using your money to buy something that you expect
              will Increase in value. These can include: Stocks (owning a piece
              of a company) Bonds (lending money to a company or government)
              ETFs (groups of stocks bundled together) Real estate
              Cryptocurrency (higher risk, requires caution) You don't need to
              understand everything at once. Start small.
            </p>
          </section>
          <br />
          <br />
          <section>
            <h4 className="text-heading text-heading-4">
              How Much Money Do You Need to Start?
            </h4>
            <br />
            <br />
            <p className="text-heading text-display-r">
              Most people think you need thousands of dollars to invest. Not
              true. You can start with: $10 $50 $100 The important thing is
              consistency, not the amount. Small contributions grow
              significantly over time. Final Thoughts Investing is not about
              being lucky, smart, or wealthy—it's about being patient and
              consistent. Whether you're starting at 18 or 45, it's never too
              late. Start small. Learn step by step. Your future self will thank
              you.
            </p>
          </section>
          <br />
          <br />
        </div>
        <div className="w-[400px] pl-12 pr-3 shrink-0">
          <h5 className="mb-10 text-base text-heading-5">In this article</h5>
          <div className="mb-10">
            <div className="flex flex-row flex-wrap items-center mb-5">
              <Image
                src={ChevronIcon}
                width={7}
                height={12}
                alt="chevron icon"
                className="shrink-0"
              />
              <span className="ml-5 text-heading-6 text-base flex-1">
                Why Should You Invest?
              </span>
            </div>
            <div className="flex flex-row flex-wrap items-center mb-5">
              <Image
                src={ChevronIcon}
                width={7}
                height={12}
                alt="chevron icon"
                className="shrink-0"
              />
              <span className="ml-5 text-heading-6 text-base flex-1">
                Start with the Basics: What Is Investing?
              </span>
            </div>
            <div className="flex flex-row flex-wrap items-center mb-5">
              <Image
                src={ChevronIcon}
                width={7}
                height={12}
                alt="chevron icon"
                className="shrink-0"
              />
              <span className="ml-5 text-heading-6 text-base flex-1">
                How Much Money Do You Need to Start?
              </span>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-5 mb-10">
            {Array.from(Array(3)).map((i) => (
              <div
                key={i}
                className="px-2.5 py-1 border border-light-white rounded-sm"
              >
                Category
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-8">
            <span className="text-base text-heading-6">Share</span>
            <a href="http://">
              <Image
                src={InstagramIcon}
                width={18}
                height={18}
                alt="instagram icon"
              />
            </a>
            <a href="http://">
              <Image src={XIcon} width={18} height={18} alt="x icon" />
            </a>
            <a href="http://">
              <Image
                src={LinkedinIcon}
                width={18}
                height={18}
                alt="linkedin icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
