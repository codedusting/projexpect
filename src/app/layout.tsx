import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/next-theme-provider";

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ProjeXpect`,
    default: "ProjeXpect",
  },
  description:
    "ProjeXpect is a powerful application designed to deliver fast, accurate, and data-driven project estimations using advanced AI algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={cn(
            lato.variable,
            "flex min-h-dvh flex-col font-sans antialiased",
          )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
