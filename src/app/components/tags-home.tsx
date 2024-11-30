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
    <div className="w-[90%] sm:w-[80%] md:w-[50%] mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-center"
          >
            <span className="text-gray-700 w-3 h-3 rounded-full bg-[#f8c84c] dark:text-gray-300"></span>
            <span className="text-gray-700 text-sm sm:text-base dark:text-gray-300">
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
