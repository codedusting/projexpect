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
        <aside className="h-full  lg:w-[20%] overflow-y-auto border-r bg-background">
          <SideNavigation />
        </aside>
        <section id="route-content w-full lg:w-[80%]" className="flex-1 p-6">
          {children}
        </section>
      </section>
    </>
  );
}
