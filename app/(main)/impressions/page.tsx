import { redirect } from "next/navigation";

/** Alias — une seule page d'impression : `/admin/impression`. */
export default function ImpressionsPage() {
  redirect("/admin/impression");
}
