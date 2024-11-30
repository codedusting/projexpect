import { PageProps } from "@/lib/types";

export default async function ProposalPage({ searchParams }: PageProps) {
  const idea = (await searchParams).idea;
  return <section>ProposalPage | {idea}</section>;
}
