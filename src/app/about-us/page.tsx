import Image from "next/image";

import Heading from "../core/components/heading";
import AboutUsImage from "../../assets/imgs/about-us.png";
import Ornament from "../../assets/imgs/ornament.png";
import AboutUsFootageImage from "../../assets/imgs/about-us-footage.png";

export default function AboutUsPage() {
  return (
    <>
      <Heading
        name="Who We are"
        title="Empowering global liquidity through transparent innovation."
      />
      {/* banner */}
      <Image
        src={AboutUsImage}
        alt="about us image"
        className="w-full"
        width={1440}
        height={772}
      />
      {/* content */}
      <div className="my-28 py-28 mx-20 relative">
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
        <Image
          src={Ornament}
          width={50}
          height={50}
          alt="ornament"
          className="absolute bottom-0 left-20 rotate-270"
        />
        <Image
          src={Ornament}
          width={50}
          height={50}
          alt="ornament"
          className="absolute bottom-0 right-20 rotate-180"
        />
        <article className="pt-10 pl-10">
          <section className="px-56">
            <p className="text-base text-display-xl">
              Established in 1672 at the Sign of the Golden Bottle and owned
              continuously by the Hoare family for 12 generations, C. Hoare &
              Co. is the UK’s oldest privately owned bank. The partners today
              are stewards of a unique and evolving culture built on personal
              trust and outstanding customer service.
            </p>
            <br />
            <br />
            <h2 className="text-heading text-heading-2">Family values</h2>
            <br />
            <br />
            <p className="text-base text-display-xl">
              Underpinned by Hoare family values of honesty, empathy, excellence
              and social responsibility, personal relationships are the heart of
              our business. We enjoy working with individuals and families who
              share our values, and are pleased to work with their businesses
              too. We take time to understand exactly what is important to them
              and how best we can help them prosper. These high standards of
              care extend to the world around us: the partners donate up to 10%
              of the bank’s annual profits to charitable causes via the Golden
              Bottle Trust, while our Master Charitable Trust helps customers
              make the most of their own charitable giving.
            </p>
          </section>
          <p className="text-base text-heading-4 py-16 px-28 text-justify">
            &quot;Close, confidential relationships allow us to anticipate our
            customers’ needs and our values inform our decisions at every level
            of the business.&quot;
          </p>
          <section className="px-56">
            <h2 className="text-heading text-heading-2">Small and secure</h2>
            <br />
            <br />
            <p className="text-base text-display-xl">
              As a small, independent bank, we are able to agree individual
              arrangements with speed and flexibility. The partners’ unlimited
              liability and conservative attitude to risk provides an extra
              level of security: having weathered three industrial revolutions,
              the Wall Street Crash and successive global crises, we have a
              strong reputation as a safe haven for our customers’ wealth. We
              recognise, however, that financial affairs have grown more complex
              since our founder took his neighbours’ gold into
              keeping. Relationship managers gain deep understanding of each
              customer’s needs and aspirations to provide bespoke 21st-century
              banking complemented by online and mobile services.
            </p>
          </section>
        </article>
      </div>
      {/* footage */}
      <div className="flex flex-row flex-wrap justify-between items-center max-w-1440 mx-auto mb-28 px-28">
        <div className="pt-10 pr-24 w-1/2">
          <div className="relative py-2">
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament"
              className="absolute top-0 left-0 rotate-0"
            />
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament"
              className="absolute top-0 right-0 rotate-90"
            />
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament"
              className="absolute bottom-0 left-0 rotate-270"
            />
            <Image
              src={Ornament}
              width={50}
              height={50}
              alt="ornament"
              className="absolute bottom-0 right-0 rotate-180"
            />
            <p className="text-display-r text-content my-28 text-center">
              &quot;Close, confidential relationships allow us to anticipate our
              customers’ needs and our values inform our decisions at every
              level of the business.&quot;
            </p>
          </div>
        </div>
        <Image
          src={AboutUsFootageImage}
          width={600}
          alt="who we are image"
          className="w-1/2 h-auto"
        />
      </div>
    </>
  );
}
