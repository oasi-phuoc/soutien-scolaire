/**
 * Triggers the browser print dialog, or shows native instructions in Capacitor WebView
 * where window.print() is not supported.
 */
export function triggerPrint() {
  if (typeof window === "undefined") return;
  const isNative = !!(window as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.();
  if (isNative) {
    window.alert(
      "Pour imprimer cet exercice en PDF :\n" +
        "• Sur iPhone/iPad : appuyez sur Partager ↑ → Imprimer\n" +
        "• Sur Android : menu ⋮ → Imprimer"
    );
  } else {
    window.print();
  }
}

/**
 * Extracts all CSS from the current page (style tags + same-origin stylesheets).
 */
export function capturePageCss(): string {
  if (typeof document === "undefined") return "";
  const styles: string[] = [];
  document.querySelectorAll("style").forEach((el) => {
    if (el.textContent) styles.push(el.textContent);
  });
  Array.from(document.styleSheets).forEach((sheet) => {
    if (sheet.href && !sheet.href.startsWith(window.location.origin)) return;
    try {
      Array.from(sheet.cssRules || []).forEach((rule) => styles.push(rule.cssText));
    } catch { /* cross-origin, skip */ }
  });
  return styles.join("\n");
}

/** CSS forcé d’impression — même procédé que école-manager. */
export function getForcedPrintCss(pageSize = "A4 portrait", margin = "0"): string {
  return `
    @page { size: ${pageSize}; margin: ${margin}; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100%;
      background: white !important;
    }
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
      box-sizing: border-box;
    }
    @media print {
      html, body {
        width: 100%;
        height: auto;
        overflow: visible !important;
        background: white !important;
      }
      .no-print {
        display: none !important;
      }
    }
  `;
}

/** Injecte le CSS d’impression dans un document HTML (école-manager). */
export function injectForcedPrintCss(
  htmlDocument: string,
  pageSize = "A4 portrait",
  margin = "0",
): string {
  const css = getForcedPrintCss(pageSize, margin);
  if (!htmlDocument || typeof htmlDocument !== "string") return htmlDocument;
  if (htmlDocument.includes("</head>")) {
    return htmlDocument.replace("</head>", `<style>${css}</style></head>`);
  }
  return `<style>${css}</style>${htmlDocument}`;
}

/**
 * Opens a new popup window, writes the given HTML, and triggers the print dialog.
 */
export function openPrintPopup(
  htmlContent: string,
  options: { title?: string; width?: number; height?: number } = {}
): Window | null {
  if (typeof window === "undefined") return null;
  const { title = "Impression", width = 1000, height = 800 } = options;
  const popup = window.open("", "_blank", `width=${width},height=${height}`);
  if (!popup) {
    window.alert("Le navigateur a bloqué la fenêtre d'impression. Veuillez autoriser les popups pour ce site.");
    return null;
  }
  popup.document.write(htmlContent);
  popup.document.title = title;
  popup.document.close();
  const printWhenReady = async () => {
    const images = Array.from(popup.document.images);
    await Promise.all(images.map(async (image) => {
      image.loading = "eager";
      if (!image.complete) {
        await new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      }
      try {
        await image.decode();
      } catch {
        // A failed decorative image must not block the whole document.
      }
    }));
    await popup.document.fonts?.ready;
    await new Promise<void>((resolve) => popup.requestAnimationFrame(() => popup.requestAnimationFrame(() => resolve())));
    popup.focus();
    popup.print();
  };
  if (popup.document.readyState === "complete") {
    void printWhenReady();
  } else {
    popup.addEventListener("load", () => { void printWhenReady(); }, { once: true });
  }
  return popup;
}
