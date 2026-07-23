/** HTML autorisé dans la version corrigée (messagerie PE/PO). */

const ALLOWED_TAGS = new Set([
  "b", "strong", "i", "em", "u", "s", "strike", "del",
  "mark", "span", "br", "p", "div",
]);

const ALLOWED_STYLES = /^(?:color|background-color|background)\s*:\s*[^;]+;?\s*$/i;

function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

/** Convertit un texte brut en HTML d’édition (conserve les retours à la ligne). */
export function plainTextToEditorHtml(text: string): string {
  if (!text) return "";
  if (looksLikeHtml(text)) return text;
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

export function stripCorrectedHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function hasCorrectedContent(html: string): boolean {
  return stripCorrectedHtml(html).length > 0;
}

/**
 * Sanitize basique (allowlist) pour l’affichage élève.
 * Supprime scripts / handlers / balises hors liste.
 */
export function sanitizeCorrectedHtml(raw: string): string {
  if (!raw) return "";
  if (!looksLikeHtml(raw)) {
    return plainTextToEditorHtml(raw);
  }

  // Environnement Node (SSR) : strip tags si DOMParser indisponible
  if (typeof DOMParser === "undefined") {
    return plainTextToEditorHtml(stripCorrectedHtml(raw));
  }

  const doc = new DOMParser().parseFromString(`<div>${raw}</div>`, "text/html");
  const root = doc.body.firstElementChild;
  if (!root) return "";

  function clean(node: Node): string {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) {
      return Array.from(el.childNodes).map(clean).join("");
    }
    if (tag === "br") return "<br>";

    const parts: string[] = [];
    const style = el.getAttribute("style");
    const safeStyles = (style ?? "")
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s && ALLOWED_STYLES.test(`${s};`))
      .join("; ");

    const open =
      safeStyles.length > 0
        ? `<${tag} style="${safeStyles.replace(/"/g, "")}">`
        : `<${tag}>`;
    parts.push(open);
    for (const child of Array.from(el.childNodes)) {
      parts.push(clean(child));
    }
    parts.push(`</${tag}>`);
    return parts.join("");
  }

  return Array.from(root.childNodes).map(clean).join("");
}

export { looksLikeHtml };
