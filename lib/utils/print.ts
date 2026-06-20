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
