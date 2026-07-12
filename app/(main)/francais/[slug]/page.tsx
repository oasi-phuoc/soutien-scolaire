import { notFound, redirect } from "next/navigation";
import { getFrenchThemeBySlug } from "@/lib/curriculum/french-data";

type Props = { params: Promise<{ slug: string }> };

/** Ancienne route générique — redirige vers vocabulaire / grammaire si le thème existe. */
export default async function FrenchThemePage({ params }: Props) {
  const { slug } = await params;
  const th = getFrenchThemeBySlug(slug);
  if (!th) notFound();

  if (th.tab === "vocabulaire") redirect(`/francais/vocabulaire/${slug}`);
  if (th.tab === "grammaire" || th.tab === "conjugaison") {
    redirect(`/francais/grammaire/${slug}`);
  }

  redirect("/francais");
}
