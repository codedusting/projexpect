"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon, SendIcon } from "lucide-react";
import Form from "next/form";
import { useActionState } from "react";
import { searchIdeaAction } from "../actions";
export default function SearchHome() {
  const [data, formAction, isPending] = useActionState(searchIdeaAction, null);

  return (
    <Form action={formAction} className="w-full max-w-screen-md relative">
      <Label className="">
        <Input
          autoFocus
          type="text"
          placeholder="I want to launch..."
          className="w-full rounded-full border-none border-[#333] bg-[white] !py-8 !pl-9 !pr-20 !text-2xl text-[#333] shadow-xl shadow-[#45326b] placeholder:text-2xl focus:border-2 focus:border-[#333] focus:ring-2 focus:ring-[#333] dark:border-[#fff] dark:bg-[#1e1e1e] dark:text-[#fff] dark:placeholder:text-lg dark:focus:border-2 dark:focus:border-[#fff] dark:focus:ring-2 dark:focus:ring-[#fff]"
          name={"idea"}
          defaultValue={data?.data.idea as string}
        />
        <span
          className="mt-2 inline-flex w-full pl-4 text-center text-lg text-red-700"
          aria-live="polite">
          {data !== null && !data?.success && data?.error?.idea}
        </span>
        {/* TODO: Fix the button position when error is not there */}
        <Button
          type="submit"
          disabled={isPending}
          className={`absolute ${data?.error ? "top-[33%]": "top-[36%]"} -translate-y-[50%] right-4 rounded-r-full`}>
          {isPending ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            <SendIcon className="h-6 w-6" />
          )}
        </Button>
      </Label>
    </Form>
  );
}
