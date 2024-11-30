import React from "react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
export default function SearchHome() {
  return (
    <div className="w-[90%] md:w-[70%]  xl:w-[65%] 2xl:[40%]">
      <Form action="/proposal">
        <Input
          autoFocus
          type="text"
          placeholder="I want to launch..."
          className="bg-[white] shadow-[#45326b] shadow-2xl px-9 w-full text-[#333] dark:bg-[#1e1e1e] dark:text-[#fff] border-[#333] dark:border-[#fff] focus:ring-[#333] dark:focus:ring-[#fff] focus:border-[#333] dark:focus:border-[#fff] py-8 focus:ring-2 dark:focus:ring-2 border-none focus:border-2 dark:focus:border-2 placeholder:text-xl dark:placeholder:text-lg"
          name={"idea"}
        />
      </Form>
    </div>
  );
}
