import { notFound } from "next/navigation";
import { getRevision } from "@/lib/curriculum/lecture-data";
import { RevisionRunner } from "@/components/lecture/RevisionRunner";

type Props = { params: Promise<{ pair: string }> };

export default async function RevisionPage({ params }: Props) {
  const { pair } = await params;
  const data = getRevision(pair);
  if (!data) notFound();

  return (
    <main className="flex min-h-screen flex-col">
      <RevisionRunner data={data} />
    </main>
  );
}
