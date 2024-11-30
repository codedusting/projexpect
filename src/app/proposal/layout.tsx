import ProposalHeader from "./components/header";

export default function ProposalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <ProposalHeader />
      </header>
      {children}
    </>
  );
}
