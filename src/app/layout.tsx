import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "./providers/next-theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | TrendAIzer`,
    default: "TrendAIzer",
  },
  description:
    "TrendAIzer is a cutting-edge tool designed to identify and analyze the latest trends using AI",
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
            "antialiased font-sans flex flex-col min-h-dvh"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
