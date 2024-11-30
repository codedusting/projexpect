import React from "react";
import TypewriterText from "./type-writer-text";

export default function HeadingBanner() {
  return (
    <div className="text text-center flex flex-col gap-10">
      <h1 className="text-6xl uppercase  font-bold  bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 dark:text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-blue-500">
        {`Accelerate  Planning`}
      </h1>

      <div className="min-h-[60px]">
        <TypewriterText />
      </div>
    </div>
  );
}
