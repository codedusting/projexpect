"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  ListChecks,
  Milestone,
  Network,
  PackageCheck,
  TestTubes,
  Timer,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  {
    href: "/proposal",
    icon: FileText,
    label: "Chat",
    description: "Let's chat about your project",
    isAvailable: true,
  },
  {
    href: "/proposal/overview",
    icon: Timer,
    label: "Overview",
    description: "Project overview and initial setup",
    isAvailable: true,
  },
  {
    href: "/proposal/user-stories",
    icon: Users2,
    label: "User Stories",
    description: "User stories and requirements",
    isAvailable: true,
  },
  {
    href: "/proposal/architecture",
    icon: Network,
    label: "Architecture",
    description: "Project architecture and technology stack",
    isAvailable: true,
  },
  {
    href: "/proposal/dependencies",
    icon: PackageCheck,
    label: "Dependencies",
    description: "Project dependencies and external services",
    isAvailable: true,
  },
  {
    href: "/proposal/features",
    icon: ListChecks,
    label: "Features",
    description: "Project features and requirements",
    isAvailable: true,
  },
  {
    href: "/proposal/milestones",
    icon: Milestone,
    label: "Milestones",
    description: "Project milestones and timeline",
    isAvailable: true,
  },
  {
    href: "/proposal/market-research",
    icon: BarChart3,
    label: "Market Research",
    description: "Market research and competitive analysis",
    isAvailable: false,
  },
  {
    href: "/proposal/test-cases",
    icon: TestTubes,
    label: "Test Cases",
    description: "Test cases and scenarios",
    isAvailable: false,
  },
];


export default function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false); // State to handle sidebar visibility
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute   z-50 top-1/2 flex ${isOpen ? "left-56" : ""} items-center justify-center w-10 h-10 rounded-md bg-primary text-white md:hidden`}>
        {isOpen ? ">>>" : "<<<"}
      </button>

      {/* Sidebar */}
      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-black text-white shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:shadow-none",
          {
            "translate-x-0": isOpen, // Open state
            "-translate-x-full": !isOpen, // Closed state
          },
        )}>
        <ul className="space-y-2 p-4">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group flex flex-col items-start gap-1 px-3 py-4 transition-all hover:bg-primary",
                  {
                    "bg-primary text-white": pathname === item.href,
                  },
                )}>
                <div
                  className={cn(
                    "flex items-center gap-3 font-bold text-muted-foreground group-hover:text-white",
                    {
                      "text-white": pathname === item.href,
                    },
                  )}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                <p
                  className={cn(
                    "text-sm text-muted-foreground group-hover:text-white",
                    {
                      "text-white": pathname === item.href,
                    },
                  )}>
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    
    </>
  );
}

