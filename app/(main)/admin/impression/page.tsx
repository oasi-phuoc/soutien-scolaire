import { redirect } from "next/navigation";

/** Ancienne route hub — redirige vers l'écran unique `/impressions`. */
export default function AdminImpressionPage() {
  redirect("/impressions");
}
