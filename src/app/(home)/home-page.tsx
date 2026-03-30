import Hero from "./components/hero";
import Partners from "./components/partners";
import Solution from "./components/solution";
import WhoWeAre from "./components/who-we-are";
import WhoWeServe from "./components/who-we-serve";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <div className="max-w-1440 mx-auto">
        <WhoWeAre />
        <div className="px-16 py-28">
          <h2 className="capitalize text-heading-3 text-heading text-center">
            Solutions
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-16 mt-16">
            {Array.from(Array(10)).map((_, i) => (
              <Solution key={i} index={i} />
            ))}
          </div>
        </div>
        <WhoWeServe />
      </div>
    </>
  );
}
