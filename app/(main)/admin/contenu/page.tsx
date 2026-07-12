import { redirect } from "next/navigation";

/** Édition de contenu temporairement désactivée. */
export default function AdminContenuPage() {
  redirect("/admin");
}
