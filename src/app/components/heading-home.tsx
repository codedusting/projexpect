import React from "react";
import TypewriterText from "./type-writer-text";

export default function HeadingBanner() {
  return (
    <div className="text flex flex-col gap-10 text-center">
      <h1 className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-6xl font-bold uppercase dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-blue-500 dark:text-transparent">
        {`Accelerate  Planning`}
      </h1>

      <div className="min-h-[60px]">
        <TypewriterText />
      </div>
    </div>
  );
}
