import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { type ReactNode } from "react";
import { ThemeModeToggle } from "../../components/theme-mode-toggle";

export default async function ProposalHeader() {
  const user = await getSession();
  let authContent: ReactNode;

  if (user) {
    authContent = (
      <Avatar>
        <AvatarImage
          src={user.user.picture || "https://github.com/codedusting.png"}
          alt={`@${user.user.nickname}` || "@codedusting"}
        />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
    );
  } else {
    authContent = (
      <Button asChild>
        <Link href={"/api/auth/login"} className="font-bold uppercase">
          Login
        </Link>
      </Button>
    );
  }

  return (
    <header className="border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <Link id="logo" href={"/"} className="text-xl font-bold lowercase">
          ProjeXpect
        </Link>
        <h1 className="text-2xl font-bold">Project Proposal</h1>
        <div
          id="auth-content"
          className="flex items-center justify-between gap-x-4">
          <ThemeModeToggle />
          {authContent}
        </div>
      </div>
    </header>
  );
}
