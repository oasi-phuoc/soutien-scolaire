import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BibliothequeRedirect({ searchParams }: Props) {
  const q = await searchParams;
  const fil = typeof q.fil === "string" ? q.fil : undefined;
  const axe = typeof q.axe === "string" ? q.axe : undefined;

  if (fil === "francais" || fil === "literacy" || fil === "fle") redirect("/francais");
  if (fil === "math_elem") {
    if (axe === "calculs" || axe === "geometrie") redirect(`/mathematiques?axe=${axe}`);
    redirect("/mathematiques");
  }
  redirect("/");
}
