import { Button } from "@/components/ui/button";
// import { auth0 } from "@/lib/auth0";
import Link from "next/link";
import { type ReactNode } from "react";
import { ThemeModeToggle } from "./theme-mode-toggle";

export default async function Header() {
  // const session = await auth0.getSession();
  let authContent: ReactNode;

  // if (session) {
  //   authContent = (
  //     <Avatar>
  //       <AvatarImage
  //         src={session.user.picture || "https://github.com/codedusting.png"}
  //         alt={`@${session.user.nickname}` || "@codedusting"}
  //       />
  //       <AvatarFallback>CD</AvatarFallback>
  //     </Avatar>
  //   );
  // } else {
  // eslint-disable-next-line prefer-const
  authContent = (
    <Button asChild>
      <Link href={"/auth/login"} className="font-bold text-white">
        Login
      </Link>
    </Button>
  );
  // }

  return (
    <header className="border-b  bg-background py-4">
      <div className="container  items-center justify-between px-4 lg:px-0">
        <Link id="logo" href={"/"} className="text-xl font-bold lowercase">
          ProjeXpect
        </Link>
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
