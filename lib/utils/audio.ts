export function getWordAssetSlug(word: string): string {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/œ/g, "oe")
    .replace(/Œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/Æ/g, "ae")
    .toLowerCase();
}

export function getWordAudioPath(word: string): string {
  const selectedGenre =
    typeof window !== "undefined" ? (localStorage.getItem("soutien-genre") ?? "f") : "f";
  // Les enregistrements masculins ne sont pas encore complets: on garde la voix feminine.
  const genre = selectedGenre === "f" ? "f" : "f";
  return `/assets/words/son_${genre}/${getWordAssetSlug(word)}.mp3`;
}
