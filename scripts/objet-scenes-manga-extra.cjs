/** Illustrations manga objets supplémentaires (CO objet-pick + CE/CO QCM). */
module.exports = function extraObjectScene(slug, seed, color, person) {
  const S = "#40313a";
  const W = 7;
  switch (slug) {
    case "lampe":
      return `<path d="M300 200 Q400 120 500 200" fill="#fde68a" stroke="${S}" stroke-width="${W}"/><rect x="385" y="200" width="30" height="220" fill="#cbd5e1" stroke="${S}" stroke-width="6"/><rect x="370" y="420" width="60" height="50" rx="6" fill="#94a3b8" stroke="${S}" stroke-width="6"/>`;
    case "poubelle":
      return `<ellipse cx="400" cy="220" rx="120" ry="20" fill="#94a3b8" stroke="${S}" stroke-width="${W}"/><path d="M280 220 H520 L500 420 H300 Z" fill="#64748b" stroke="${S}" stroke-width="${W}"/><rect x="300" y="420" width="200" height="40" rx="8" fill="#475569"/>`;
    case "fleur":
      return `<circle cx="350" cy="260" r="28" fill="#f472b6" stroke="${S}" stroke-width="6"/><circle cx="400" cy="230" r="32" fill="#ef4444" stroke="${S}" stroke-width="6"/><circle cx="450" cy="265" r="26" fill="#facc15" stroke="${S}" stroke-width="6"/><rect x="392" y="290" width="16" height="160" rx="6" fill="#22c55e" stroke="${S}" stroke-width="6"/>`;
    case "table":
      return `<rect x="200" y="280" width="400" height="24" rx="4" fill="#d97706" stroke="${S}" stroke-width="${W}"/><rect x="230" y="304" width="20" height="160" fill="#92400e"/><rect x="550" y="304" width="20" height="160" fill="#92400e"/>`;
    case "cle":
      return `<circle cx="320" cy="300" r="55" fill="#facc15" stroke="${S}" stroke-width="${W}"/><circle cx="320" cy="300" r="22" fill="#fff"/><rect x="370" y="288" width="180" height="24" rx="6" fill="#facc15" stroke="${S}" stroke-width="6"/><rect x="520" y="276" width="24" height="48" rx="4" fill="#facc15" stroke="${S}" stroke-width="6"/>`;
    case "sac":
      return `<path d="M300 240 Q400 180 500 240 V420 H300 Z" fill="#dc2626" stroke="${S}" stroke-width="${W}"/><rect x="340" y="200" width="120" height="50" rx="20" fill="none" stroke="${S}" stroke-width="6"/>`;
    case "robe":
      return `<path d="M320 200 L400 160 L480 200 V430 H320 Z" fill="#7c3aed" stroke="${S}" stroke-width="${W}"/>`;
    case "talon":
      return `<path d="M340 420 H460 L430 280 Q400 240 370 280 Z" fill="#dc2626" stroke="${S}" stroke-width="${W}"/><rect x="355" y="420" width="90" height="30" rx="8" fill="#991b1b"/>`;
    case "carte-detudiant":
      return `<rect x="270" y="210" width="260" height="170" rx="14" fill="#2563eb" stroke="${S}" stroke-width="${W}"/><rect x="300" y="250" width="80" height="90" rx="8" fill="#dbeafe"/><text x="430" y="300" font-family="Arial" font-size="22" font-weight="700" fill="#fff">ÉTUDIANT</text>`;
    case "passeport":
      return `<rect x="290" y="190" width="220" height="280" rx="12" fill="#1e3a8a" stroke="${S}" stroke-width="${W}"/><circle cx="400" cy="300" r="50" fill="#dbeafe" stroke="${S}" stroke-width="6"/><text x="400" y="390" font-family="Arial" font-size="20" font-weight="700" text-anchor="middle" fill="#facc15">PASSEPORT</text>`;
    case "photo":
      return `<rect x="280" y="200" width="240" height="280" rx="8" fill="#f8fafc" stroke="${S}" stroke-width="${W}"/><rect x="310" y="230" width="180" height="180" fill="#bae6fd" stroke="${S}" stroke-width="6"/><circle cx="400" cy="310" r="40" fill="#fde68a"/>`;
    case "carte-de-credit":
      return `<rect x="240" y="270" width="320" height="200" rx="16" fill="#334155" stroke="${S}" stroke-width="${W}"/><rect x="270" y="310" width="60" height="45" rx="6" fill="#facc15"/><text x="400" y="400" font-family="monospace" font-size="24" text-anchor="middle" fill="#e2e8f0">•••• 4242</text>`;
    case "carte-didentite":
      return `<rect x="270" y="210" width="260" height="170" rx="14" fill="#f8fafc" stroke="${S}" stroke-width="${W}"/><rect x="300" y="240" width="70" height="90" rx="6" fill="#cbd5e1"/><text x="420" y="290" font-family="Arial" font-size="18" font-weight="700" fill="#1e293b">IDENTITÉ</text>`;
    case "carte":
      return `<rect x="260" y="220" width="280" height="200" rx="12" fill="#fef3c7" stroke="${S}" stroke-width="${W}"/><path d="M260 220 L400 160 L540 220" fill="#ef4444" stroke="${S}" stroke-width="6"/><path d="M300 270 H500 M300 310 H460" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>`;
    case "surligneur":
      return `<rect x="340" y="180" width="120" height="280" rx="20" fill="#facc15" stroke="${S}" stroke-width="${W}"/><polygon points="340,180 400,140 460,180" fill="#fde047" stroke="${S}" stroke-width="6"/>`;
    case "stylo":
      return `<rect x="370" y="160" width="60" height="300" rx="10" fill="#2563eb" stroke="${S}" stroke-width="${W}"/><polygon points="370,160 400,120 430,160" fill="#1d4ed8" stroke="${S}" stroke-width="6"/><rect x="385" y="420" width="30" height="40" rx="4" fill="#94a3b8"/>`;
    case "avion":
      return `<ellipse cx="400" cy="320" rx="200" ry="40" fill="#e2e8f0" stroke="${S}" stroke-width="${W}"/><path d="M400 180 L440 320 L400 300 L360 320 Z" fill="#3b82f6" stroke="${S}" stroke-width="${W}"/><rect x="385" y="300" width="30" height="80" rx="6" fill="#64748b"/>`;
    case "etats-unis":
      return `<rect x="260" y="200" width="280" height="200" rx="8" fill="#1d4ed8" stroke="${S}" stroke-width="${W}"/><rect x="260" y="200" width="112" height="108" fill="#1e3a8a"/><g fill="#fff">${Array.from({ length: 15 }, (_, i) => `<circle cx="${280 + (i % 5) * 18}" cy="${220 + Math.floor(i / 5) * 18}" r="4"/>`).join("")}</g>`;
    case "helicoptere":
      return `<ellipse cx="400" cy="340" rx="120" ry="50" fill="#3b82f6" stroke="${S}" stroke-width="${W}"/><rect x="250" y="200" width="300" height="12" rx="4" fill="#64748b"/><rect x="385" y="212" width="30" height="50" fill="#94a3b8"/><rect x="480" y="320" width="80" height="12" rx="4" fill="#64748b"/>`;
    case "scotch":
      return `<ellipse cx="400" cy="320" rx="90" ry="90" fill="#fef3c7" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="320" rx="45" ry="45" fill="#fff" stroke="${S}" stroke-width="6"/><rect x="490" y="280" width="80" height="50" rx="4" fill="#fde68a" stroke="${S}" stroke-width="6"/>`;
    case "feuille":
      return `<rect x="300" y="200" width="200" height="260" rx="8" fill="#fff" stroke="${S}" stroke-width="${W}"/><path d="M320 260 H480 M320 300 H460 M320 340 H470" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>`;
    case "ciseaux":
      return `<circle cx="330" cy="280" r="35" fill="#e2e8f0" stroke="${S}" stroke-width="6"/><circle cx="470" cy="280" r="35" fill="#e2e8f0" stroke="${S}" stroke-width="6"/><path d="M330 280 L400 420 M470 280 L400 420" stroke="${S}" stroke-width="8" stroke-linecap="round"/>`;
    case "colle":
      return `<path d="M350 420 H450 L430 200 H370 Z" fill="#fff" stroke="${S}" stroke-width="${W}"/><rect x="365" y="170" width="70" height="35" rx="8" fill="#f97316" stroke="${S}" stroke-width="6"/><text x="400" y="320" font-family="Arial" font-size="28" font-weight="700" text-anchor="middle" fill="#2563eb">COLLE</text>`;
    case "crayon-de-couleur":
      return `<rect x="360" y="180" width="28" height="260" rx="4" fill="#ef4444" stroke="${S}" stroke-width="5"/><polygon points="360,180 374,150 388,180" fill="#22c55e" stroke="${S}" stroke-width="5"/><rect x="392" y="200" width="28" height="240" rx="4" fill="#3b82f6" stroke="${S}" stroke-width="5"/><polygon points="392,200 406,170 420,200" fill="#facc15" stroke="${S}" stroke-width="5"/>`;
    case "poulet":
      return `<ellipse cx="400" cy="340" rx="130" ry="90" fill="#d97706" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="250" rx="50" ry="45" fill="#d97706" stroke="${S}" stroke-width="6"/><path d="M350 230 L330 200 M450 230 L470 200" stroke="#f97316" stroke-width="5" stroke-linecap="round"/><circle cx="385" cy="245" r="5" fill="#1e293b"/><circle cx="415" cy="245" r="5" fill="#1e293b"/>`;
    case "radis":
      return `<ellipse cx="400" cy="360" rx="55" ry="65" fill="#ef4444" stroke="${S}" stroke-width="${W}"/><path d="M370 300 Q400 220 430 300" fill="#22c55e" stroke="${S}" stroke-width="6"/>`;
    case "gratin":
      return `<ellipse cx="400" cy="360" rx="150" ry="70" fill="#fde68a" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="340" rx="130" ry="50" fill="#fbbf24" opacity=".85"/>`;
    case "chaise":
      return `<rect x="300" y="280" width="200" height="20" rx="4" fill="#d97706" stroke="${S}" stroke-width="6"/><rect x="320" y="300" width="16" height="150" fill="#92400e"/><rect x="464" y="300" width="16" height="150" fill="#92400e"/><rect x="340" y="200" width="120" height="90" rx="8" fill="#f59e0b" stroke="${S}" stroke-width="6"/>`;
    case "bureau":
      return `<rect x="200" y="300" width="400" height="24" rx="4" fill="#d97706" stroke="${S}" stroke-width="6"/><rect x="220" y="324" width="20" height="140" fill="#92400e"/><rect x="560" y="324" width="20" height="140" fill="#92400e"/><rect x="240" y="200" width="120" height="110" fill="#f8fafc" stroke="${S}" stroke-width="6"/>`;
    case "lunettes":
      return `<circle cx="330" cy="300" r="55" fill="none" stroke="${S}" stroke-width="${W}"/><circle cx="470" cy="300" r="55" fill="none" stroke="${S}" stroke-width="${W}"/><path d="M385 300 H415" stroke="${S}" stroke-width="6"/>`;
    case "medicament":
      return `<rect x="360" y="200" width="80" height="200" rx="12" fill="#fff" stroke="${S}" stroke-width="${W}"/><rect x="345" y="170" width="110" height="40" rx="8" fill="#ef4444" stroke="${S}" stroke-width="6"/><text x="400" y="320" font-family="Arial" font-size="40" font-weight="700" text-anchor="middle" fill="#2563eb">+</text>`;
    case "ordinateur":
      return `<rect x="240" y="220" width="320" height="200" rx="12" fill="#334155" stroke="${S}" stroke-width="${W}"/><rect x="265" y="245" width="270" height="150" fill="#60a5fa"/><rect x="320" y="430" width="160" height="16" rx="4" fill="#64748b"/>`;
    case "plume":
      return `<path d="M380 420 Q400 280 420 180 Q440 280 420 420" fill="#e2e8f0" stroke="${S}" stroke-width="${W}"/>`;
    case "cheval":
      return `<ellipse cx="400" cy="360" rx="110" ry="60" fill="#a16207" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="260" rx="45" ry="40" fill="#a16207" stroke="${S}" stroke-width="6"/><circle cx="385" cy="255" r="5" fill="#1e293b"/>`;
    case "page":
      return `<rect x="300" y="200" width="200" height="260" rx="6" fill="#fff" stroke="${S}" stroke-width="${W}"/><path d="M330 260 H470 M330 300 H450" stroke="#e2e8f0" stroke-width="4"/>`;
    case "corde":
      return `<path d="M250 350 Q350 200 450 350 T650 350" fill="none" stroke="#d97706" stroke-width="16" stroke-linecap="round"/><path d="M250 380 Q350 230 450 380 T650 380" fill="none" stroke="#92400e" stroke-width="10" stroke-linecap="round"/>`;
    case "macaron":
      return `<ellipse cx="400" cy="340" rx="100" ry="55" fill="#f472b6" stroke="${S}" stroke-width="${W}"/><rect x="300" y="330" width="200" height="20" fill="#fce7f3"/>`;
    case "jus":
      return `<rect x="320" y="180" width="160" height="280" rx="35" fill="#fb923c" stroke="${S}" stroke-width="${W}"/><rect x="355" y="145" width="90" height="45" rx="16" fill="#fdba74" stroke="${S}" stroke-width="6"/>`;
    case "fromage":
      return `<path d="M280 380 L400 220 L520 380 Z" fill="#facc15" stroke="${S}" stroke-width="${W}"/><circle cx="360" cy="330" r="14" fill="#fde047"/><circle cx="420" cy="310" r="12" fill="#fde047"/>`;
    case "fruit":
      return `<circle cx="340" cy="320" r="50" fill="#ef4444" stroke="${S}" stroke-width="6"/><ellipse cx="450" cy="330" rx="45" ry="55" fill="#84cc16" stroke="${S}" stroke-width="6"/><circle cx="400" cy="260" r="35" fill="#f97316" stroke="${S}" stroke-width="6"/>`;
    case "seau":
      return `<path d="M300 250 H500 L480 420 H320 Z" fill="#60a5fa" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="250" rx="100" ry="18" fill="#93c5fd" stroke="${S}" stroke-width="6"/>`;
    case "elastique":
      return `<ellipse cx="400" cy="320" rx="140" ry="90" fill="none" stroke="#f472b6" stroke-width="14"/><ellipse cx="400" cy="320" rx="90" ry="55" fill="none" stroke="#ec4899" stroke-width="10"/>`;
    case "tapis":
      return `<rect x="220" y="280" width="360" height="160" rx="12" fill="#7c3aed" stroke="${S}" stroke-width="${W}"/><path d="M260 320 H540 M260 360 H540" stroke="#a78bfa" stroke-width="4" opacity=".6"/>`;
    case "haltere":
      return `<rect x="280" y="290" width="50" height="100" rx="8" fill="#64748b" stroke="${S}" stroke-width="6"/><rect x="470" y="290" width="50" height="100" rx="8" fill="#64748b" stroke="${S}" stroke-width="6"/><rect x="330" y="325" width="140" height="30" rx="6" fill="#94a3b8" stroke="${S}" stroke-width="6"/>`;
    case "veste":
      return `<path d="M290 230 L400 190 L510 230 V430 H290 Z" fill="#1d4ed8" stroke="${S}" stroke-width="${W}"/><rect x="365" y="210" width="70" height="35" rx="10" fill="#1e3a8a"/>`;
    case "chips":
      return `<rect x="300" y="240" width="200" height="260" rx="16" fill="#dc2626" stroke="${S}" stroke-width="${W}"/><ellipse cx="400" cy="280" rx="70" ry="25" fill="#facc15"/><text x="400" y="360" font-family="Arial" font-size="32" font-weight="700" text-anchor="middle" fill="#fff">CHIPS</text>`;
    case "pomme":
      return `<circle cx="400" cy="330" r="80" fill="#ef4444" stroke="${S}" stroke-width="${W}"/><path d="M400 250 Q420 210 440 230" fill="none" stroke="#22c55e" stroke-width="5" stroke-linecap="round"/>`;
    case "salade-de-fruits":
      return `<ellipse cx="400" cy="370" rx="150" ry="60" fill="#e2e8f0" stroke="${S}" stroke-width="${W}"/><circle cx="340" cy="320" r="28" fill="#ef4444"/><circle cx="400" cy="300" r="30" fill="#f97316"/><circle cx="460" cy="320" r="26" fill="#84cc16"/>`;
    case "chaussures-de-sport":
      return `<ellipse cx="340" cy="360" rx="75" ry="42" fill="#2563eb" stroke="${S}" stroke-width="6"/><ellipse cx="480" cy="360" rx="75" ry="42" fill="#facc15" stroke="${S}" stroke-width="6"/>`;
    case "bouteille-deau":
      return `<rect x="330" y="170" width="140" height="300" rx="38" fill="#bae6fd" stroke="#0369a1" stroke-width="${W}"/><rect x="365" y="135" width="70" height="45" rx="16" fill="#0ea5e9" stroke="#0369a1" stroke-width="6"/>`;
    case "post-it":
      return `<rect x="300" y="220" width="200" height="200" rx="4" fill="#fef08a" stroke="${S}" stroke-width="6"/><path d="M300 220 L380 220 L380 140 L300 220" fill="#fde047" stroke="${S}" stroke-width="5"/>`;
    case "peinture":
      return `<rect x="340" y="280" width="120" height="140" rx="8" fill="#fff" stroke="${S}" stroke-width="6"/><rect x="355" y="200" width="90" height="90" rx="6" fill="#ef4444" stroke="${S}" stroke-width="6"/><rect x="385" y="170" width="30" height="35" rx="4" fill="#64748b"/>`;
    case "jeu-de-societe":
      return `<rect x="250" y="260" width="300" height="200" rx="12" fill="#7c3aed" stroke="${S}" stroke-width="${W}"/><rect x="290" y="300" width="60" height="60" rx="6" fill="#facc15"/><rect x="370" y="300" width="60" height="60" rx="6" fill="#22c55e"/><rect x="450" y="300" width="60" height="60" rx="6" fill="#ef4444"/>`;
    default:
      return null;
  }
};
