import { Metadata } from "next";

import Heading from "../core/components/heading";
import Qa from "./components/qa";
import JsonLd from "../core/components/json-ld";

export const metadata: Metadata = {
  title: "FAQ",
  description: "bla bla bla",
  keywords: ["first", "second", "third"],
};

export default function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is your service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide...",
        },
      },
    ],
  };

  return (
    <>
      <Heading title="We Have Answers" />
      <div className="px-24 pb-16 max-w-1440 mx-auto">
        {Array.from(Array(12)).map((_, i) => (
          <Qa key={i} />
        ))}
      </div>
      <JsonLd data={schema} />
    </>
  );
}
