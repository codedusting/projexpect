import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type ReactNode } from "react";
import { ThemeModeToggle } from "../../components/theme-mode-toggle";

export default async function ProposalHeader() {
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
