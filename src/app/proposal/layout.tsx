import ProposalHeader from "./components/header";
import SideNavigation from "./components/side-navigation";

export default function ProposalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProposalHeader />
      <section className="flex h-dvh">
        <aside className="h-full w-80 overflow-y-auto border-r bg-background">
          <SideNavigation />
        </aside>
        <section id="route-content" className="flex-1 p-6">
          {children}
        </section>
      </section>
    </>
  );
}
