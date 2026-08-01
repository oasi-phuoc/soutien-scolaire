import { notFound } from "next/navigation";
import { getGrammarLesson } from "@/lib/curriculum/grammar-data";
import { GrammaireRunner } from "@/components/francais/GrammaireRunner";

type Props = { params: Promise<{ slug: string }> };

/**
 * Même modèle que conjugaison : pas de fetch serveur des overrides.
 * Les overrides passent par ContentEditorProvider côté client — éviter
 * le double chargement (SSR + client) qui rafraîchissait la page deux fois.
 */
export default async function GrammairePage({ params }: Props) {
  const { slug } = await params;
  const lesson = getGrammarLesson(slug);
  if (!lesson) notFound();
  return (
    <main className="flex min-h-screen flex-col">
      <GrammaireRunner lesson={lesson} subject="Grammaire" />
    </main>
  );
}
