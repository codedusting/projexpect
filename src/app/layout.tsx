import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/next-theme-provider";

const lato = DM_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
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
    </html>
  );
}
