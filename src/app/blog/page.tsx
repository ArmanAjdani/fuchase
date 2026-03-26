import Heading from "../core/components/heading";
import Post from "./components/post";

export default function BlogPage() {
  return (
    <>
      <Heading name="blog" title="Recent Blog Posts" />
      <div className="flex flex-row flex-wrap justify-center gap-12 max-w-1440 mx-auto mb-28">
        {Array.from(Array(6)).map((i) => (
          <Post key={i} />
        ))}
      </div>
    </>
  );
}
