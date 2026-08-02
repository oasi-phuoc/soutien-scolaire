import { redirect } from "next/navigation";
import {
  getGrammarLesson,
  getConjLesson,
  resolveFrenchPrereqSlug,
} from "@/lib/curriculum/grammar-data";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Ancien onglet conjugaison : redirection vers la leçon de grammaire fusionnée. */
export default async function ConjugaisonPage({ params }: Props) {
  const { slug } = await params;
  const target = resolveFrenchPrereqSlug(slug);
  if (getGrammarLesson(target) || getConjLesson(target)) {
    redirect(`/francais/grammaire/${target}`);
  }
  if (getGrammarLesson(slug) || getConjLesson(slug)) {
    redirect(`/francais/grammaire/${slug}`);
  }
  redirect("/francais?tab=grammaire");
}
