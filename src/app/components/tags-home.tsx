import React from "react";

export default function TagsHome() {
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
  return (
    <div className="mx-auto w-[90%] sm:w-[80%] md:w-[50%]">
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-start gap-2 sm:w-auto sm:justify-center">
            <span className="h-3 w-3 rounded-full bg-[#f8c84c] text-gray-700 dark:text-gray-300"></span>
            <span className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
