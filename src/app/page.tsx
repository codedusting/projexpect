import React from "react";
import HeadingBanner from "./components/heading-home";
import TagsHome from "./components/tags-home";
import SearchHome from "./components/search-home";

export default function HomePage() {
  return (
    <main className="max-w-screen-md mx-auto shadow-md relative z-50  flex-col  min-w-full flex gap-10 items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

      <HeadingBanner />
      <TagsHome />
      <SearchHome />
    </main>
  );
}
