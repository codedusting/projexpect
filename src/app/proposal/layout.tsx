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
        <aside className="w-80 border-r bg-background h-full overflow-y-auto">
          <SideNavigation />
        </aside>
        <section id="route-content" className="flex-1 p-6">
          {children}
        </section>
      </section>
    </>
  );
}
