import type { GrammarLesson } from "../../grammar-data";

/** Unité 11 — Le genre des noms : personnes (G2.1) */
export const A1_GR_GENRE_PERSONNES: GrammarLesson = {
  slug: "a1-gr-genre-personnes",
  code: "G2.1",
  level: "A1",
  title: "Le genre des noms : personnes",
  theory: [
    {
      type: "plain_list",
      items: [
        "En français, les noms ont un genre. Un nom peut être :",
        "masculin",
        "féminin",
      ],
    },
    {
      type: "plain_list",
      items: [
        "Pour les personnes, les noms indiquent souvent une profession, un lien de famille ou une nationalité.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "Un nom s'emploie toujours avec un déterminant (un, la, des, ce, mon…). Le déterminant indique le genre : {a}un{/a} homme, {a}une{/a} femme.",
      ],
    },

    {
      type: "heading",
      text: "Formation du féminin",
    },
    {
      type: "plain_list",
      items: [
        "Au masculin, les noms ont des terminaisons très variées : un employé, un célibataire, un Espagnol, un commerçant, un Suédois…",
      ],
    },
    {
      type: "plain_list",
      items: ["En général, nom féminin = nom masculin + {a}e{/a}."],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un employé → une employé{a}e{/a}",
        "un ami → une ami{a}e{/a}",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
    {
      type: "plain_list",
      items: [
        "Quand le nom masculin se termine déjà par {a}e{/a}, le féminin ne change pas.",
      ],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un journaliste → une journalist{a}e{/a}",
        "un fonctionnaire → une fonctionnair{a}e{/a}",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
    {
      type: "plain_list",
      items: [
        "Certains noms ont des terminaisons très différentes au masculin et au féminin.",
      ],
      noBulletItems: [0],
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "-en",
          content: [
            {
              type: "plain_list",
              items: ["{a}-en{/a} → {a}-enne{/a}"],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Noms masculins", "Noms féminins"],
              rows: [
                ["un musici{a}en{/a}", "une musici{a}enne{/a}"],
                ["un itali{a}en{/a}", "une itali{a}enne{/a}"],
                ["un canadi{a}en{/a}", "une canadi{a}enne{/a}"],
                ["un parisi{a}en{/a}", "une parisi{a}enne{/a}"],
              ],
            },
          ],
        },
        {
          label: "-on",
          content: [
            {
              type: "plain_list",
              items: ["{a}-on{/a} → {a}-onne{/a}"],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Noms masculins", "Noms féminins"],
              rows: [
                ["un champi{a}on{/a}", "une champi{a}onne{/a}"],
                ["un li{a}on{/a}", "une li{a}onne{/a}"],
                ["un patr{a}on{/a}", "une patr{a}onne{/a}"],
                ["un Bret{a}on{/a}", "une Bret{a}onne{/a}"],
              ],
            },
          ],
        },
        {
          label: "-er",
          content: [
            {
              type: "plain_list",
              items: ["{a}-er{/a} → {a}-ère{/a}"],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Noms masculins", "Noms féminins"],
              rows: [
                ["un cuisini{a}er{/a}", "une cuisini{a}ère{/a}"],
                ["un boulang{a}er{/a}", "une boulang{a}ère{/a}"],
                ["un infirmi{a}er{/a}", "une infirmi{a}ère{/a}"],
                ["un écoli{a}er{/a}", "une écoli{a}ère{/a}"],
              ],
            },
          ],
        },
        {
          label: "-eur",
          content: [
            {
              type: "plain_list",
              items: ["{a}-eur{/a} → {a}-euse{/a}"],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Noms masculins", "Noms féminins"],
              rows: [
                ["un serv{a}eur{/a}", "une serv{a}euse{/a}"],
                ["un vend{a}eur{/a}", "une vend{a}euse{/a}"],
                ["un dans{a}eur{/a}", "une dans{a}euse{/a}"],
                ["un coiff{a}eur{/a}", "une coiff{a}euse{/a}"],
              ],
            },
          ],
        },
        {
          label: "-teur",
          content: [
            {
              type: "plain_list",
              items: ["{a}-teur{/a} → {a}-trice{/a} ou {a}-teuse{/a}"],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Noms masculins", "Noms féminins"],
              rows: [
                ["un ac{a}teur{/a}", "une ac{a}trice{/a}"],
                ["un direc{a}teur{/a}", "une direc{a}trice{/a}"],
                ["un chan{a}teur{/a}", "une chan{a}teuse{/a}"],
                ["un men{a}teur{/a}", "une men{a}teuse{/a}"],
              ],
            },
          ],
        },
        {
          label: "-f",
          content: [
            {
              type: "plain_list",
              items: ["{a}-f{/a} → {a}-ve{/a}"],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Noms masculins", "Noms féminins"],
              rows: [
                ["un sporti{a}f{/a}", "une sporti{a}ve{/a}"],
                ["un acti{a}f{/a}", "une acti{a}ve{/a}"],
                ["un créati{a}f{/a}", "une créati{a}ve{/a}"],
                ["un naï{a}f{/a}", "une naï{a}ve{/a}"],
              ],
            },
          ],
        },
      ],
    },
    {
      type: "plain_list",
      items: ["Cas particuliers"],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un homme → une femme",
        "un garçon → une fille",
        "un père → une mère",
        "un frère → une sœur",
        "un mari → une femme",
        "un fils → une fille",
        "un copain → une copine",
      ],
      noBulletItems: [0, 1, 2, 3, 4, 5, 6],
    },

    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} Même prononciation quand le masculin se termine par une voyelle, ou par {a}l{/a} / {a}eur{/a}.",
      ],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un Espagnol / une Espagno{li}l|e{/li}",
        "un ingénieur / une ingénieu{li}r|e{/li}",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} Prononciation différente quand le masculin se termine par une consonne (le {a}e{/a} final fait entendre la consonne).",
      ],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un Anglais → une Anglai{li}s|e{/li}",
        "un assistant → une assistan{li}t|e{/li}",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Masculin / féminin (personnes)",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ étudiante lit un livre.", choices: ["Une", "Un", "Le", "Des"], correctIdx: 0 },
        { sentence: "C'est ___ ami.", choices: ["un", "une", "la", "des"], correctIdx: 0 },
        { sentence: "C'est ___ amie.", choices: ["une", "un", "le", "des"], correctIdx: 0 },
        { sentence: "un employé → une ___", choices: ["employée", "employé", "employéee", "employée "], correctIdx: 0 },
        { sentence: "un Espagnol → une ___", choices: ["Espagnole", "Espagnol", "Espagnolle", "espagnole"], correctIdx: 0 },
        { sentence: "un journaliste → une ___", choices: ["journaliste", "journalistée", "journalista", "journalistes"], correctIdx: 0 },
        { sentence: "un enfant → une ___", choices: ["enfant", "enfante", "enfants", "enfantee"], correctIdx: 0 },
        { sentence: "un ingénieur → une ___", choices: ["ingénieure", "ingénieur", "ingénieuree", "ingénieure "], correctIdx: 0 },
        { sentence: "un Anglais → une ___", choices: ["Anglaise", "Anglais", "Anglaisses", "anglaise"], correctIdx: 0 },
        { sentence: "___ homme travaille ici.", choices: ["Un", "Une", "La", "Des"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Formez le féminin",
      instruction: "Écrivez la forme féminine du nom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "un ami → une ___", hint: "+ e", answer: "amie" },
        { sentence: "un étudiant → une ___", hint: "+ e", answer: "étudiante" },
        { sentence: "un employé → une ___", hint: "+ e", answer: "employée" },
        { sentence: "un Espagnol → une ___", hint: "+ e", answer: "Espagnole" },
        { sentence: "un ingénieur → une ___", hint: "+ e", answer: "ingénieure" },
        { sentence: "un journaliste → une ___", hint: "identique", answer: "journaliste" },
        { sentence: "un enfant → une ___", hint: "identique", answer: "enfant" },
        { sentence: "un Anglais → une ___", hint: "+ e", answer: "Anglaise" },
        { sentence: "un assistant → une ___", hint: "+ e", answer: "assistante" },
        { sentence: "un Mexicain → une ___", hint: "+ e", answer: "Mexicaine" },
      ],
    },
  ],
};
