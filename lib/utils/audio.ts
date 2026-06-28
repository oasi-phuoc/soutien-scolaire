export function getWordAssetSlug(word: string): string {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

export function getWordAudioPath(word: string): string {
  const selectedGenre =
    typeof window !== "undefined" ? (localStorage.getItem("soutien-genre") ?? "f") : "f";
  // Les enregistrements masculins ne sont pas encore complets: on garde la voix feminine.
  const genre = selectedGenre === "f" ? "f" : "f";
  return `/assets/words/son_${genre}/${getWordAssetSlug(word)}.mp3`;
}
