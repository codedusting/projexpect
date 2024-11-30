import SearchHome from "../components/search-home";
import TypewriterText from "../components/type-writer-text";

const tags = [
  {
    name: "Fast. Accurate. Effortless Estimation.",
  },
  {
    name: "Better budgeting, scheduling, and resource planning",
  },
  {
    name: "Try for Free",
  },
];

export default function HomePage() {
  return (
    <div className="container flex h-[calc(100dvh-146px)] flex-col items-center justify-center px-4 lg:px-0">
      <section className="relative z-50 mx-auto flex min-w-full max-w-screen-md flex-col items-center justify-center gap-4 px-4 shadow-md lg:px-0">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <h1 className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-center text-8xl font-bold uppercase dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-blue-500 dark:text-transparent">
          Accelerate Planning
        </h1>
        <TypewriterText />
        <div className="grid w-full max-w-screen-md grid-cols-1 items-center justify-center gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-center gap-2 sm:w-auto">
              <span className="h-3 w-3 rounded-full bg-[#f8c84c] text-gray-700 dark:text-gray-300"></span>
              <span className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                {tag.name}
              </span>
            </div>
          ))}
        </div>
        <SearchHome />
      </section>
    </div>
  );
}
