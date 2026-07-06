/** Resolve a vocab word image reference to the unified lecture pool. */
export function resolveVocabImage(image: string | undefined, _folder?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("/assets/words/lecture/")) return image;
  if (image.startsWith("/assets/words/img/")) {
    return image.replace("/assets/words/img/", "/assets/words/lecture/");
  }
  if (image.startsWith("/vocab/images/")) {
    const base = image.split("/").pop()!;
    return `/assets/words/lecture/${base}`;
  }
  if (image.startsWith("/")) return image;
  return `/assets/words/lecture/${image}`;
}
