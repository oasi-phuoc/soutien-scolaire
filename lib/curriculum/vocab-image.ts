/** Resolve a vocab word image reference (thème V1–V10 ou pool lecture). */
export function resolveVocabImage(image: string | undefined, folder?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("/assets/words/vocab/")) return image;
  if (image.startsWith("/assets/words/lecture/")) return image;
  if (image.startsWith("/assets/words/img/")) {
    return image.replace("/assets/words/img/", "/assets/words/lecture/");
  }
  if (image.startsWith("/vocab/images/")) {
    return `/assets/words/vocab/${image.replace("/vocab/images/", "")}`;
  }
  if (image.startsWith("/")) return image;
  if (folder) {
    return `/assets/words/vocab/${folder}/${image}`;
  }
  return `/assets/words/lecture/${image}`;
}
