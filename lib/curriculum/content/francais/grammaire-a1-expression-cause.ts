import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_L52 } from "./grammaire-r4.28";

/** G17.1 — L'expression de la cause, enrichie avec G19.21 */
export const A1_GR_EXPRESSION_CAUSE: GrammarLesson = {
  slug: "a1-gr-expression-cause",
  code: "G17.1",
  level: "A1",
  title: "L'expression de la cause",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Donner des explications sur des faits réels, présentées comme certaines.",
        "{a}Puisque{/a} tu es fatigué, pourquoi tu ne te reposes pas ? — {a}Parce que{/a} je veux finir ce soir !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjonctions",
    },
    {
      type: "highlight",
      label: "parce que",
      items: [
        "Répond à la question {a}pourquoi{/a}.",
        "Sauf réponse directe à {a}pourquoi ?{/a}, {a}parce que{/a} n'est pas en tête de phrase.",
        "Je ne me repose pas {a}parce que{/a} je veux finir ce soir.",
        "— Pourquoi tu n'es pas venu ? — {a}Parce que{/a} j'étais malade.",
      ],
    },
    {
      type: "highlight",
      label: "comme",
      items: [
        "Relie cause et conséquence ; toujours en tête de phrase.",
        "{a}Comme{/a} je veux finir ce soir, je ne peux pas m'arrêter maintenant.",
      ],
    },
    {
      type: "highlight",
      label: "puisque",
      items: [
        "Insiste sur une cause évidente / connue ; deux places possibles.",
        "{a}Puisque{/a} tu es fatigué, va te reposer ! = Va te reposer {a}puisque{/a} tu es fatigué !",
      ],
    },
    {
      type: "note",
      text: "Avec {a}comme{/a} / {a}puisque{/a} en tête : virgule après l'explication. Deux causes : {a}que{/a} devant la seconde. → … parce que je suis fatigué et {a}que{/a} je dois me lever tôt.",
    },
    {
      type: "heading",
      text: "Prépositions",
    },
    {
      type: "highlight",
      label: "à cause de / grâce à / en raison de",
      items: [
        "{a}À cause de{/a} + nom/tonique : cause négative. → … à cause de toi et du mauvais temps.",
        "{a}Grâce à{/a} + nom/tonique : cause positive. → … grâce à toi et à tes conseils.",
        "{a}En raison de{/a} + nom : raison officielle. → La route est fermée en raison du mauvais temps.",
      ],
    },
    {
      type: "note",
      text: "Articles contractés : {a}à cause du{/a} mauvais temps ; {a}grâce au{/a} soleil ; {a}en raison des{/a} pluies.",
    },
    ...A2_GR_L52.theory,
  ],
  exercises: [],
};
