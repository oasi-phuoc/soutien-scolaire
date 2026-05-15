export function getWordAudioPath(word: string): string {
  const genre =
    typeof window !== "undefined" ? (localStorage.getItem("soutien-genre") ?? "f") : "f";
  return `/assets/words/son_${genre}/${word}.mp3`;
}
