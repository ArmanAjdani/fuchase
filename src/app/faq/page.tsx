import Heading from "../core/components/heading";
import Qa from "./components/qa";

export default function Faq() {
  return (
    <>
      <Heading title="We Have Answers" />
      <div className="px-24 py-16 max-w-1440 mx-auto">
        {Array.from(Array(12)).map((i) => (
          <Qa key={i} />
        ))}
      </div>
    </>
  );
}
