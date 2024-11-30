import Link from "next/link";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { getSession } from "@auth0/nextjs-auth0";
import { type ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default async function Header() {
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
        <Link href={"/api/auth/login"} className="uppercase font-bold">
          Login
        </Link>
      </Button>
    );
  }

  return (
    <header className="bg-background py-4 border-b z-50">
      <div className="container flex items-center justify-between">
        <Link id="logo" href={"/"}>
          ProjeXpect
        </Link>
        <div
          id="auth-content"
          className="flex gap-x-4 items-center justify-between"
        >
          <ThemeModeToggle />
          {authContent}
        </div>
      </div>
    </header>
  );
}
