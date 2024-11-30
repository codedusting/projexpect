import {
  BarChart3,
  ListChecks,
  Milestone,
  Network,
  PackageCheck,
  TestTubes,
  Timer,
  Users2,
} from "lucide-react";
import Link from "next/link";

export default function ProposalPage() {
  return (
    <section className="flex h-screen">
      <aside className="w-64 border-r bg-background p-6">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/proposal/overview"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <Timer className="h-4 w-4" />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/user-stories"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <Users2 className="h-4 w-4" />
                <span>User Stories</span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/architecture"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <Network className="h-4 w-4" />
                <span>Architecture</span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/dependencies"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <PackageCheck className="h-4 w-4" />
                <span>Dependencies</span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/features"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <ListChecks className="h-4 w-4" />
                <span>Features</span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/milestones"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <Milestone className="h-4 w-4" />
                <span>Milestones</span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/market-research"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <BarChart3 className="h-4 w-4" />
                <span>Market Research</span>
                <span className="ml-auto text-xs text-gray-400">
                  Coming Soon
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/proposal/test-cases"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-primary/10">
                <TestTubes className="h-4 w-4" />
                <span>Test Cases</span>
                <span className="ml-auto text-xs text-gray-400">
                  Coming Soon
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section id="route-content" className="flex-1 p-6">
        {/* Content will be rendered here */}
      </section>
    </section>
  );
}
