import type { GrammarLesson } from "../../grammar-data";

/** Unité 36 — Autres prépositions et adverbes (G4.6) */
export const A1_GR_AUTRES_PREPOSITIONS: GrammarLesson = {
  slug: "a1-gr-autres-prepositions",
  code: "G4.6",
  level: "A1",
  title: "Autres prépositions et adverbes",
  theory: [
    {
      type: "heading",
      text: "À, chez, de",
    },
    {
      type: "plain_list",
      items: [
        "{a}À{/a} et {a}chez{/a} : le lieu où l'on est ou où l'on va. {a}Chez{/a} s'emploie avec des personnes. → Chez moi.",
        "{a}De{/a} : le lieu d'où l'on vient.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["", "Nom d'un lieu", "Nom d'une personne"],
      boldFirstCol: true,
      rows: [
        ["Je suis / Je vais", "à la piscine ; à l'opéra ; au centre-ville ; aux toilettes", "chez moi ; chez mes amis ; chez le médecin"],
        ["Je sors / Je reviens", "de la piscine ; de l'opéra ; du théâtre ; des toilettes", "de chez moi ; de chez mes amis ; de chez le médecin"],
      ],
    },
    {
      type: "note",
      text: "Expressions figées avec {a}à{/a} : à la télé ; à la radio.",
    },
    {
      type: "heading",
      text: "Sur, dans, sous",
    },
    {
      type: "plain_list",
      items: [
        "{a}Sur{/a} ≠ {a}sous{/a}. → Le vélo est sur le toit. ; Il y a un chat sous la voiture.",
        "{a}Dans{/a} = à l'intérieur. → Les bagages sont dans le coffre.",
        "Expressions : sur Internet, sur son blog, sur le répondeur ; dans le journal, dans la rue ; sous la pluie.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ici, là, là-bas",
    },
    {
      type: "plain_list",
      items: [
        "Employés seuls, {a}ici{/a} ≈ {a}là{/a}, mais {a}là{/a} est plus courant. → Tu es là ? ; Je suis là.",
        "Pour opposer deux endroits : Michel, assieds-toi ici et Marie, assieds-toi là.",
        "{a}Là-bas{/a} : un endroit plus éloigné. → Regarde là-bas !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Autres prépositions et adverbes de lieu",
    },
    {
      type: "grid",
      headers: ["Préposition / adverbe", "Contraire", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Devant / En face (de)", "Derrière", "La voiture est devant la maison. ; Derrière la maison, il y a un jardin."],
        ["Près de / À côté (de)", "Loin (de)", "Les enfants attendent à côté de la voiture. ; La station n'est pas loin : elle est près du coiffeur."],
        ["Au-dessus (de)", "Au-dessous (de)", "Des amis habitent au-dessus et au-dessous de chez moi."],
        ["À droite (de)", "À gauche (de)", "Tournez à droite puis prenez la première rue à gauche."],
        ["En haut (de)", "En bas (de)", "Ma chambre est en haut de l'escalier. En bas, il y a le salon."],
        ["Avant", "Après", "Tout droit jusqu'à la pharmacie. Juste après, il y a la Poste."],
        ["Au milieu (de) / Au centre (de)", "—", "Un arbre au milieu du jardin. ; Une statue au centre de la place."],
        ["Au bord (de)", "—", "Je me promène au bord de la Seine."],
        ["Au bout (de)", "—", "Allez au bout de la rue et tournez à droite."],
        ["Au fond (de)", "—", "Les toilettes sont au fond du couloir."],
        ["Entre… et", "—", "La table est entre le canapé et le fauteuil."],
        ["Jusqu'à / jusqu'au", "—", "Marchez jusqu'au feu et traversez."],
        ["Dehors", "—", "Il fait chaud ici. Je vais t'attendre dehors."],
      ],
    },
    {
      type: "note",
      text: "Ces expressions peuvent être suivies d'un nom ou employées seules. → Devant la maison, il y a une rue et derrière, il y a un jardin.",
    },
    {
      type: "note",
      text: "Avec les prépositions composées : {a}de + le = du{/a}, {a}de + les = des{/a}. → loin des magasins ; près du métro.",
    },
    {
      type: "note",
      text: "Certaines se combinent avec {a}chez{/a}. → à côté de chez moi ; en face de chez mes amis.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Prépositions et adverbes",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Ils vont ___ l'opéra.", choices: ["à", "de", "chez"], correctIdx: 0 },
        { sentence: "Ils sortent ___ l'opéra.", choices: ["de", "à", "chez"], correctIdx: 0 },
        { sentence: "Je vais ___ mes amis.", choices: ["chez", "à", "de"], correctIdx: 0 },
        { sentence: "Je reviens ___ chez le médecin.", choices: ["de", "à", "du"], correctIdx: 0 },
        { sentence: "Je suis ___ centre-ville.", choices: ["au", "à le", "en"], correctIdx: 0 },
        { sentence: "Le vélo est ___ le toit.", choices: ["sur", "sous", "dans"], correctIdx: 0 },
        { sentence: "Les bagages sont ___ le coffre.", choices: ["dans", "sur", "sous"], correctIdx: 0 },
        { sentence: "Il y a un chat ___ la voiture.", choices: ["sous", "sur", "dans"], correctIdx: 0 },
        { sentence: "La voiture est ___ la maison.", choices: ["devant", "derrière", "sous"], correctIdx: 0 },
        { sentence: "___ la maison, il y a un jardin.", choices: ["Derrière", "Devant", "Sur"], correctIdx: 0 },
        { sentence: "La station est ___ du coiffeur.", choices: ["près", "loin", "sous"], correctIdx: 0 },
        { sentence: "Tournez ___ puis à gauche.", choices: ["à droite", "en haut", "dehors"], correctIdx: 0 },
        { sentence: "Les toilettes sont ___ du couloir.", choices: ["au fond", "au bord", "en face"], correctIdx: 0 },
        { sentence: "La table est ___ le canapé et le fauteuil.", choices: ["entre", "jusqu'à", "devant"], correctIdx: 0 },
        { sentence: "Je t'attends ___ . (= à l'air libre)", choices: ["dehors", "ici", "là-bas"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez la préposition ou l'adverbe qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je vais ___ la piscine.", hint: "lieu", answer: "à" },
        { sentence: "Je sors ___ théâtre.", hint: "de + le", answer: "du" },
        { sentence: "Je vais ___ moi.", hint: "personne", answer: "chez" },
        { sentence: "Le vélo est ___ le toit.", hint: "dessus", answer: "sur" },
        { sentence: "Les bagages sont ___ le coffre.", hint: "intérieur", answer: "dans" },
        { sentence: "La voiture est stationnée ___ la maison.", hint: "face", answer: "devant" },
        { sentence: "Elle habite loin ___ magasins.", hint: "de + les", answer: "des" },
        { sentence: "Elle habite près ___ métro.", hint: "de + le", answer: "du" },
        { sentence: "Ma chambre est ___ de l'escalier.", hint: "haut", answer: "en haut" },
        { sentence: "Allez ___ de la rue et tournez.", hint: "extrémité", answer: "au bout" },
        { sentence: "Je me promène ___ de la Seine.", hint: "rive", answer: "au bord" },
        { sentence: "En face de ___ moi, il y a un parc.", hint: "+ chez", answer: "chez" },
      ],
    },
  ],
};
