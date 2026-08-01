#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Emit express-e9..e14 listening + theory + update express-index."""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

OUT = Path("lib/curriculum/content/communication")
meta = json.loads(Path("/tmp/express-a2-gen/lessons_meta.json").read_text())
T = {int(k): v for k, v in json.loads(Path("/tmp/express-a2-gen/transcripts_all.json").read_text()).items()}

FORMATS = ["text", "image", "fill", "vf"]

IMG_THEMES = {
    "achats": ["Magasin", "Téléphone", "Voiture"],
    "transports": ["Bus", "Voiture", "Train"],
    "location": ["Maison", "Clé", "Camion"],
    "titre": ["Passeport", "Ticket", "Carte"],
    "médias": ["Radio", "Journal", "Téléphone"],
    "invitations": ["Restaurant", "Fête", "Maison"],
    "rencontres": ["Café", "Ami", "Téléphone"],
    "mariage": ["Fête", "Fleur", "Musique"],
    "école": ["École", "Livre", "Enfant"],
    "bénévolat": ["Ami", "Maison", "Livre"],
    "cuisine": ["Restaurant", "Fruit", "Pain"],
    "loisirs": ["Vélo", "Guitare", "Livre"],
    "goûts": ["Téléphone", "Livre", "Musique"],
    "vacances": ["Plage", "Train", "Hôtel"],
    "santé": ["Médecin", "Pharmacie", "Hôpital"],
    "sport": ["Sport", "Vélo", "Parc"],
    "alimentation": ["Fruit", "Pain", "Restaurant"],
    "ville": ["Ville", "Bus", "Parc"],
    "bien-être": ["Maison", "Parc", "Savon"],
    "formation": ["École", "Ordinateur", "Livre"],
    "stage": ["Bureau", "Ordinateur", "Carte"],
    "CV": ["Ordinateur", "Carte", "Bureau"],
    "entretien": ["Bureau", "Homme", "Femme"],
    "entreprise": ["Bureau", "Ordinateur", "Café"],
    "bilan": ["Maison", "Sport", "Bureau"],
}


def imgs_for(theme: str) -> list[str]:
    for k, v in IMG_THEMES.items():
        if k in theme.lower():
            return v
    return ["Maison", "Téléphone", "Carte"]


def build_questions(transcript: str, theme: str) -> list[dict]:
    lines = [
        (l[2:].strip() if l.startswith("- ") else l.strip())
        for l in transcript.split("\n")
        if l.strip()
    ]
    imgs = imgs_for(theme)
    theme0 = theme.split(",")[0].strip()
    facts: list[dict] = [
        {
            "format": "text",
            "textQ": "De quoi parle surtout cet enregistrement ?",
            "text": [theme0[0].upper() + theme0[1:], "Un match de football", "La météo uniquement"],
            "textC": 0,
        }
    ]
    # fill from content word
    for l in lines:
        words = re.findall(r"[A-Za-zÀ-ÿ0-9']{4,}", l)
        stop = {
            "bonjour",
            "madame",
            "monsieur",
            "alors",
            "aussi",
            "avec",
            "dans",
            "pour",
            "vous",
            "nous",
            "mais",
            "plus",
            "très",
            "bien",
            "cette",
            "comme",
            "après",
            "avant",
            "encore",
            "parce",
            "quand",
            "donc",
            "tout",
            "tous",
            "fait",
            "faire",
            "suis",
            "être",
            "avoir",
            "peut",
            "merci",
            "salut",
        }
        content = [w for w in words if w.lower() not in stop]
        if content and len(l) > 15:
            target = content[-1]
            facts.append(
                {
                    "format": "fill",
                    "textQ": "Complétez selon l'audio.",
                    "text": [target, "voyage", "silence"],
                    "textC": 0,
                    "fillQ": (l[:80] if len(l) <= 80 else l[:77] + "…").replace(target, "_________"),
                    "fill": target,
                }
            )
            break
    # vf
    for l in lines:
        if len(l) > 18 and not l.endswith("?"):
            facts.append(
                {
                    "format": "vf",
                    "textQ": l[:110],
                    "text": ["Vrai", "Faux", "On ne sait pas"],
                    "textC": 0,
                    "vfQ": l[:110],
                    "vfC": 0,
                }
            )
            break
    facts.append(
        {
            "format": "image",
            "textQ": "Quel élément est lié à la situation ?",
            "text": imgs,
            "textC": 0,
            "img": imgs,
            "imgC": 0,
        }
    )
    if "?" in transcript:
        facts.append(
            {
                "format": "text",
                "textQ": "Y a-t-il des questions dans l'enregistrement ?",
                "text": ["Oui", "Non", "On ne sait pas"],
                "textC": 0,
            }
        )
    else:
        facts.append(
            {
                "format": "text",
                "textQ": "L'enregistrement donne-t-il des informations ?",
                "text": ["Oui", "Non", "On ne sait pas"],
                "textC": 0,
            }
        )
    nums = re.findall(r"\b\d+\b", transcript)
    if nums:
        facts.append(
            {
                "format": "fill",
                "textQ": "Quel chiffre entendez-vous ?",
                "text": [nums[0], "999", "0"],
                "textC": 0,
                "fillQ": "Vous entendez le nombre _________.",
                "fill": nums[0],
            }
        )
    else:
        facts.append(
            {
                "format": "vf",
                "textQ": "L'enregistrement est en français.",
                "text": ["Vrai", "Faux", "On ne sait pas"],
                "textC": 0,
                "vfQ": "L'enregistrement est en français.",
                "vfC": 0,
            }
        )
    # one more text about first speaker intent
    if lines:
        facts.append(
            {
                "format": "text",
                "textQ": "La première réplique est-elle une question ?",
                "text": ["Oui" if lines[0].endswith("?") else "Non", "On ne sait pas", "Peut-être"],
                "textC": 0,
            }
        )
    out = []
    seen = set()
    for i, f in enumerate(facts[:8]):
        f = dict(f)
        f["format"] = FORMATS[i % 4]
        if f["format"] == "vf":
            f.setdefault("vfQ", f["textQ"])
            f.setdefault("vfC", 0)
            f["text"] = ["Vrai", "Faux", "On ne sait pas"]
            f["textC"] = f["vfC"]
        if f["format"] == "image":
            f.setdefault("img", imgs)
            f.setdefault("imgC", 0)
            if len(f["text"]) < 3:
                f["text"] = imgs
        if f["format"] == "fill":
            f.setdefault("fillQ", f["textQ"] + " _________")
            f.setdefault("fill", str(f["text"][0]))
        if f["textQ"] in seen:
            f["textQ"] = f["textQ"] + f" ({i + 1})"
        seen.add(f["textQ"])
        out.append(f)
    return out


def render_qs(items: list[dict]) -> str:
    parts = []
    for it in items:
        fields = [
            f'      format: "{it["format"]}",',
            f'      textQ: {json.dumps(it["textQ"], ensure_ascii=False)},',
            f'      text: {json.dumps(it["text"], ensure_ascii=False)},',
            f'      textC: {it.get("textC", 0)},',
        ]
        if it.get("img"):
            fields += [
                f'      img: {json.dumps(it["img"], ensure_ascii=False)},',
                f'      imgC: {it.get("imgC", 0)},',
            ]
        if it.get("fillQ"):
            fields.append(f'      fillQ: {json.dumps(it["fillQ"], ensure_ascii=False)},')
        if it.get("fill") is not None:
            fields.append(f'      fill: {json.dumps(it["fill"], ensure_ascii=False)},')
        if it.get("fillA"):
            fields.append(f'      fillA: {json.dumps(it["fillA"], ensure_ascii=False)},')
        if "vfQ" in it:
            fields.append(f'      vfQ: {json.dumps(it["vfQ"], ensure_ascii=False)},')
        if "vfC" in it:
            fields.append(f'      vfC: {it["vfC"]},')
        parts.append("    {\n" + "\n".join(fields) + "\n    }")
    return ",\n".join(parts)


def audio_ts(lesson_id: str, num: int, transcript: str, questions: list[dict]) -> str:
    tr = transcript.replace("\\", "\\\\").replace("`", "\\`")
    return f"""  buildListeningAudio({{
    id: "{lesson_id}-{num:03d}",
    level: "A2",
    num: {num},
    transcript: `{tr}`,
    questions: qs("{num:03d}", [
{render_qs(questions)}
    ]),
  }})"""


def emit_listening():
    by_mod = defaultdict(list)
    for m in meta:
        by_mod[m["id"].split("-")[0]].append(m)
    for mod, lessons in by_mod.items():
        chunks = [
            'import { buildListeningAudio, type FixedQ } from "./express-lesson-factory";',
            "",
            'const qs = (prefix: string, items: Omit<FixedQ, "id">[]): FixedQ[] =>',
            "  items.map((item, i) => ({ ...item, id: `${prefix}-q${i + 1}` }));",
            "",
        ]
        for m in lessons:
            lid = m["id"].lower()
            train_name = f'{m["id"].replace("-", "_")}_TRAINING'
            eval_name = f'{m["id"].replace("-", "_")}_EVAL'
            if m["train"]:
                blocks = [
                    audio_ts(lid, n, T[n], build_questions(T[n], m["theme"])) for n in m["train"]
                ]
                chunks.append(f"export const {train_name} = [")
                chunks.append(",\n".join(blocks))
                chunks.append("];\n")
            else:
                chunks.append(
                    f"export const {train_name}: ReturnType<typeof buildListeningAudio>[] = [];\n"
                )
            blocks = [audio_ts(lid, n, T[n], build_questions(T[n], m["theme"])) for n in m["eval"]]
            chunks.append(f"export const {eval_name} = [")
            chunks.append(",\n".join(blocks))
            chunks.append("];\n")
        path = OUT / f"express-{mod.lower()}-listening.ts"
        path.write_text("\n".join(chunks) + "\n")
        print("listening", path.name, path.stat().st_size)


def phrase_lines(num: int | None) -> list[str]:
    if num is None:
        return []
    tr = T.get(num, "")
    lines = []
    for l in tr.split("\n"):
        l = l.strip()
        if l.startswith("- "):
            lines.append(l[2:].strip())
        elif l:
            lines.append(l)
    return lines[:12]


# Lesson-specific theory enrichments
THEORY_EXTRA = {
    "E9-1": {
        "en_title": "Shopping",
        "intro": "Pour faire des achats, on compare le **neuf** et l'**occasion**, on parle du **prix**, de la **garantie** et du **service après-vente**.",
        "intro_en": "When shopping, we compare new and second-hand items, and talk about price, warranty and after-sales service.",
        "grammar_plain": "En général, l'adjectif est placé **après** le nom : des commentaires **positifs**, un lave-linge pas **cher**. Mais certains adjectifs sont placés **avant** : une **nouvelle** machine, en très **bon** état.",
        "grammar_en": "Usually the adjective comes after the noun, but some common adjectives come before (nouveau, bon, petit…).",
        "section": ["un lave-linge **pas cher**", "des commentaires **positifs**", "une **nouvelle** machine", "en très **bon** état"],
        "qa": [
            ["Ça coûte combien ?", "Ça fait 200 euros."],
            ["Vous avez en d'occasion ?", "Oui, regardez sur Leboncoin."],
            ["Je peux le rapporter ?", "Oui, avec le ticket de caisse."],
            ["Il est sous garantie ?", "Non, il n'est plus sous garantie."],
        ],
        "vocab": [
            ("d'occasion", "J'achète un frigo d'occasion."),
            ("sous garantie", "Le téléphone est encore sous garantie."),
            ("remboursement", "Je voudrais un remboursement."),
            ("ticket de caisse", "Vous avez le ticket de caisse ?"),
            ("livraison", "Il n'y a pas de livraison."),
            ("soldes", "C'est les soldes jusqu'au 19 juillet."),
        ],
    },
    "E9-2": {
        "en_title": "Getting around",
        "intro": "Pour se déplacer, on parle de **voiture**, **transports en commun**, **pannes** et **itinéraires**.",
        "intro_en": "Getting around means talking about cars, public transport, breakdowns and routes.",
        "grammar_plain": "Le **passé récent** = **venir de + infinitif** : je **viens de** louer une voiture ; ils **viennent d'**annoncer une panne.",
        "grammar_en": "The recent past uses venir de + infinitive: I have just rented a car.",
        "section": ["Je **viens de** louer une voiture.", "Le propriétaire **vient de** faire le contrôle technique.", "Des travaux **viennent de** débuter.", "Je **viens de** partir du bureau."],
        "qa": [
            ["Tu y vas comment ?", "Je viens de louer une voiture."],
            ["Il y a une assurance ?", "Oui, c'est compris."],
            ["Je prends quel bus ?", "Le bus de nuit N5."],
            ["C'est un ticket commun ?", "Oui, parking et tram."],
        ],
        "vocab": [
            ("covoiturage", "Les trajets en covoiturage ne sont pas pratiques."),
            ("parc relais", "Laisse ta voiture au parc relais."),
            ("embouteillage", "Il y a des embouteillages sur la D5."),
            ("station-service", "Fais le plein à la station-service."),
            ("desservie", "La station n'est plus desservie."),
            ("navette", "Une navette va être proposée."),
        ],
    },
    "E9-3": {
        "en_title": "Looking for housing",
        "intro": "Pour chercher un logement, on parle de **type** (studio, T2, T3), de **visite**, de **loyer** et de **bail**.",
        "intro_en": "When looking for housing, we talk about flat types, viewings, rent and leases.",
        "grammar_plain": "Le **futur proche** = **aller + infinitif** : nous **allons organiser** les visites ; les locataires **vont emménager** demain.",
        "grammar_en": "The near future uses aller + infinitive.",
        "section": ["Nous **allons organiser** les visites.", "Les locataires **vont emménager** demain.", "Je **vais vous donner** l'adresse.", "Tu **vas signer** le bail ?"],
        "qa": [
            ["Il est libre ?", "Oui, disponible / Non, plus disponible."],
            ["C'est à quel étage ?", "Au 5e, dernier étage."],
            ["Il y a un ascenseur ?", "Oui, l'immeuble est moderne."],
            ["Je dois m'inscrire ?", "Non, pas besoin."],
        ],
        "vocab": [
            ("charges comprises", "490 €, charges comprises."),
            ("exposé sud", "La terrasse est exposée sud."),
            ("état des lieux", "On fait l'état des lieux."),
            ("coup de cœur", "C'est un coup de cœur !"),
            ("bail", "Tu signes le bail quand ?"),
            ("emménager", "Ils vont emménager demain."),
        ],
    },
    "E9-4": {
        "en_title": "Administrative procedures",
        "intro": "Pour les démarches, on parle de **titre de séjour**, de **banque**, de **courrier recommandé** et de **justificatifs**.",
        "intro_en": "Administrative steps include residence permits, banking and registered mail.",
        "grammar_plain": "Au **passé composé avec avoir** : j'**ai choisi** un forfait ; nous **avons résilié** ; vous **avez retiré** de l'argent.",
        "grammar_en": "Passé composé with avoir: auxiliary + past participle.",
        "section": ["J'**ai choisi** un forfait à 25 €.", "Nous **avons résilié** le contrat.", "Vous **avez retiré** l'argent.", "Ils **ont réussi** à ouvrir un compte."],
        "qa": [
            ["Je dois envoyer une recommandée ?", "Non, une lettre simple suffit."],
            ["Quand faire la demande ?", "Au moins 60 jours avant."],
            ["Quels documents ?", "Justificatif de domicile et pièce d'identité."],
            ["C'est combien ?", "4,55 € pour une recommandée."],
        ],
        "vocab": [
            ("titre de séjour", "Renouveler mon titre de séjour."),
            ("justificatif de domicile", "Une facture d'électricité."),
            ("livret A", "Ouvrir un livret A pour épargner."),
            ("accusé de réception", "Preuve que la lettre est reçue."),
            ("forfait", "Un forfait à 25 €."),
            ("résilier", "Résilier un abonnement."),
        ],
    },
    "E9-5": {
        "en_title": "Following the news",
        "intro": "Pour s'informer, on utilise la **télé**, la **radio**, la **presse** et les **médias en ligne**.",
        "intro_en": "We get news from TV, radio, the press and online media.",
        "grammar_plain": "Au **passé composé avec être** : je **suis partie** ; il **est rentré** ; ils **sont sortis**.",
        "grammar_en": "Passé composé with être: agreement with the subject.",
        "section": ["Hier je **suis partie** tard.", "Je **suis rentré** et j'ai regardé le JT.", "Ils **sont sortis** ce matin.", "Tu **es allé(e)** sur le site ?"],
        "qa": [
            ["Tu regardes le JT où ?", "Sur Arte à 19 h 45."],
            ["Tu lis quel journal ?", "La newsletter de Ouest-France."],
            ["Tu écoutes la radio ?", "Oui, France Inter à 8 h."],
            ["C'est une offre numérique ?", "Oui, 100 % numérique."],
        ],
        "vocab": [
            ("journal télévisé / JT", "Je regarde le JT."),
            ("newsletter", "Je reçois une newsletter."),
            ("faits divers", "Accident sur l'autoroute."),
            ("abonnement", "Offre d'abonnement numérique."),
            ("podcast", "Des podcasts de journalistes."),
            ("presse régionale", "La presse quotidienne régionale."),
        ],
    },
    "E10-1": {
        "en_title": "Inviting and being invited",
        "intro": "On **invite**, on **accepte** ou on **refuse**, et on sait quoi **apporter**.",
        "intro_en": "We invite, accept or decline, and know what to bring.",
        "grammar_plain": "Questions **informelles** (intonation / est-ce que) et **formelles** (inversion) : Tu es libre ? / Êtes-vous disponible ?",
        "grammar_en": "Informal vs formal questions: intonation, est-ce que, inversion.",
        "section": ["Tu es libre jeudi ?", "Ça te dit de venir ?", "**Seriez-vous disponible** samedi ?", "Est-ce que je peux venir avec un ami ?"],
        "qa": [
            ["Tu es libre dimanche ?", "Le 17, ça marche !"],
            ["Qu'est-ce que j'apporte ?", "Des fleurs ou des chocolats."],
            ["Je peux venir avec un ami ?", "Bien sûr, avec plaisir !"],
            ["Vous êtes disponible ?", "Je suis désolé, ce n'est pas possible."],
        ],
        "vocab": [
            ("invitation", "J'ai accepté l'invitation."),
            ("apéritif", "Nous prenons l'apéritif."),
            ("pique-niquer", "Venir pique-niquer à la plage."),
            ("feu d'artifice", "Aller au feu d'artifice."),
            ("s'excuser", "Je suis désolé pour mon retard."),
            ("apporter", "Apporter un petit cadeau."),
        ],
    },
    "E12-5": {
        "en_title": "Taking care of yourself",
        "intro": "Pour prendre soin de soi : **résolutions**, **sommeil**, **hygiène** et **relaxation**.",
        "intro_en": "Self-care: resolutions, sleep, hygiene and relaxation.",
        "grammar_plain": "Certains verbes/adjectifs se construisent avec **à** ou **de** + infinitif : décider **de**, continuer **à**, prêt **à**, arrêter **de**, c'est important **de**.",
        "grammar_en": "Some verbs/adjectives take à or de before an infinitive.",
        "section": ["J'ai décidé **de** prendre soin de moi.", "Il continue **à** stresser.", "Nous sommes prêts **à** vous aider.", "C'est important **d'**écouter son corps."],
        "qa": [
            ["Tes résolutions ?", "J'arrête de stresser."],
            ["Tu dors bien ?", "Non, je n'arrive pas à m'endormir."],
            ["On offre quoi à Léa ?", "Un soin pour le visage."],
            ["Où est le savon ?", "À côté de la mousse à raser."],
        ],
        "vocab": [
            ("bonne résolution", "Ma liste de bonnes résolutions."),
            ("se relaxer", "J'apprends à me relaxer."),
            ("remise en forme", "Un séjour de remise en forme."),
            ("insomnie", "Je parle d'insomnies."),
            ("soin pour le visage", "Un soin comme cadeau."),
            ("mousse à raser", "À côté de la mousse à raser."),
        ],
    },
    "E13-4": {
        "en_title": "Job interview",
        "intro": "À l'entretien, on se **présente**, on parle de ses **qualités** et on structure son discours.",
        "intro_en": "In a job interview, introduce yourself and structure what you say.",
        "grammar_plain": "**Ordre du discours** : (tout) **d'abord** / pour commencer → **ensuite** / puis / après → **enfin** / finalement / pour finir.",
        "grammar_en": "Discourse markers: first, then, finally.",
        "section": ["**Tout d'abord** vous allez vous présenter.", "**Puis** je vous poserai des questions.", "**Enfin** je vous parlerai de l'entreprise.", "**Finalement** j'ai signé mon contrat."],
        "qa": [
            ["Parlez-moi de vous.", "Licence + 3 ans d'expérience."],
            ["Vos qualités ?", "Organisé, parfois perfectionniste."],
            ["Conditions de travail ?", "CDI à plein temps."],
            ["Comment s'est passé l'entretien ?", "Difficile, questions pièges."],
        ],
        "vocab": [
            ("entretien d'embauche", "Passer un entretien."),
            ("qualités / défauts", "Organisé mais perfectionniste."),
            ("CDI", "Un contrat en CDI."),
            ("question piège", "Des questions pièges."),
            ("congés payés", "5 semaines de congés payés."),
            ("se présenter", "Tout d'abord, présentez-vous."),
        ],
    },
    "E13-5": {
        "en_title": "Settling into a company",
        "intro": "Pour s'intégrer : **tâches**, **réunions**, **procédures** et relations avec les **collègues**.",
        "intro_en": "Settling in: tasks, meetings, procedures and colleagues.",
        "grammar_plain": "L'**opposition** : **mais**, **par contre** — Le travail est intéressant, **par contre** les horaires sont chargés.",
        "grammar_en": "Contrast with mais and par contre.",
        "section": ["C'est intéressant, **mais** c'est stressant.", "**Par contre**, l'ambiance est bonne.", "J'aime le poste, **par contre** il faut s'organiser."],
        "qa": [
            ["Qui est ta tutrice ?", "Sophie."],
            ["Tu as répondu au mail ?", "Pas encore, cet après-midi."],
            ["Comment demander un congé ?", "Écrire au chef de service."],
            ["La première semaine ?", "Deux réunions, beaucoup à apprendre."],
        ],
        "vocab": [
            ("tutrice / tuteur", "Sophie sera ta tutrice."),
            ("badge", "N'oublie pas ton badge."),
            ("réunion de service", "Participer à une réunion."),
            ("compte rendu", "Rédiger le compte rendu."),
            ("par contre", "Par contre, les horaires sont chargés."),
            ("procédure", "Respecter la procédure."),
        ],
    },
}

def theory_pack(m):
    grammar = m["grammar"] or "Grammaire"
    extra = THEORY_EXTRA.get(m["id"], {})
    return {
        "en_title": extra.get("en_title", m["title"]),
        "intro": extra.get("intro", f"Dans cette leçon, vous apprenez à communiquer sur : **{m['theme']}**."),
        "intro_en": extra.get("intro_en", f"In this lesson, you learn to communicate about: {m['theme']}."),
        "grammar": grammar,
        "grammar_plain": extra.get("grammar_plain", f"Réutilisez la grammaire « **{grammar}** » pour construire des phrases claires."),
        "grammar_en": extra.get("grammar_en", "Reuse this grammar point to build clear sentences."),
        "section": extra.get("section", [
            "Écoutez le modèle, puis réutilisez les formules.",
            "Variez questions et réponses selon la situation.",
            "Attention à la politesse (**tu** / **vous**).",
        ]),
        "qa": extra.get("qa", [
            ["Tu peux m'aider ?", "Oui, bien sûr !"],
            ["Qu'est-ce que tu en penses ?", "Je trouve que c'est une bonne idée."],
            ["On se retrouve où ?", "Devant l'entrée."],
            ["C'est possible ?", "Oui. / Non, ce n'est pas possible."],
        ]),
        "vocab": extra.get("vocab", [
            ("je voudrais…", "Je voudrais des informations."),
            ("est-ce que… ?", "Est-ce que vous pouvez m'aider ?"),
            ("avec plaisir", "Oui, avec plaisir !"),
            ("je suis désolé(e)", "Je suis désolé, ce n'est pas possible."),
            ("ça te dit de… ?", "Ça te dit de venir ?"),
            ("à bientôt", "D'accord, à bientôt !"),
        ]),
    }


def emit_theory():
    by_mod = defaultdict(list)
    for m in meta:
        by_mod[m["id"].split("-")[0]].append(m)

    for mod, lessons in by_mod.items():
        imports = [
            "import {",
            "  A2,",
            "  dialogueBlock,",
            "  lessonFromListening,",
            "  phraseBankToDialogue,",
            "  prereqItems,",
            "  t,",
            '} from "./express-lesson-factory";',
        ]
        lis_imports = []
        for m in lessons:
            train = f'{m["id"].replace("-", "_")}_TRAINING'
            ev = f'{m["id"].replace("-", "_")}_EVAL'
            lis_imports.append(train)
            lis_imports.append(ev)
        imports.append(
            f'import {{ {", ".join(lis_imports)} }} from "./express-{mod.lower()}-listening";'
        )
        imports.append('import type { CommunicationLesson } from "./express-types";')
        imports.append("")

        bodies = []
        export_names = []
        for m in lessons:
            name = f'EXPRESS_{m["id"].replace("-", "_")}'
            export_names.append(name)
            train = f'{m["id"].replace("-", "_")}_TRAINING'
            ev = f'{m["id"].replace("-", "_")}_EVAL'
            if m["bilan"]:
                bodies.append(
                    f"""export const {name}: CommunicationLesson = lessonFromListening({{
  id: "{m["id"]}",
  code: "{m["code"]}",
  title: {json.dumps(m["title"], ensure_ascii=False)},
  prerequisiteCommIds: {json.dumps(m["comm"])},
  theory: [],
  training: {train},
  evalAudios: {ev},
}});
"""
                )
                continue

            fm = m["frenchMeta"]
            prereq = ""
            if fm:
                prereq = f"""    prereqItems([
      {{ code: "{fm["code"]}", title: {json.dumps(fm["title"], ensure_ascii=False)}, href: "/francais/{fm["folder"]}/{fm["slug"]}" }},
    ]),
"""
            phrases = phrase_lines(m["dialogue"])
            phrases_js = json.dumps(phrases, ensure_ascii=False, indent=6)
            pack = theory_pack(m)
            section_js = json.dumps(pack["section"], ensure_ascii=False, indent=8)
            qa_js = json.dumps(pack["qa"], ensure_ascii=False, indent=8)
            vocab_js = ",\n        ".join(
                f'{{ fr: {json.dumps(fr, ensure_ascii=False)}, example: {json.dumps(ex, ensure_ascii=False)} }}'
                for fr, ex in pack["vocab"]
            )
            bodies.append(
                f"""export const {name}: CommunicationLesson = lessonFromListening({{
  id: "{m["id"]}",
  code: "{m["code"]}",
  title: {json.dumps(m["title"], ensure_ascii=False)},
  prerequisiteFrenchSlugs: {json.dumps(m["french"])},
  prerequisiteCommIds: {json.dumps(m["comm"])},
  theory: [
    {{ type: "heading", text: {json.dumps(m["title"], ensure_ascii=False)}, black: true, trans: t({json.dumps(pack["en_title"], ensure_ascii=False)}) }},
{prereq}    {{
      type: "plain",
      text: {json.dumps(pack["intro"], ensure_ascii=False)},
      trans: t({json.dumps(pack["intro_en"], ensure_ascii=False)}),
    }},
    {{ type: "highlight", title: {json.dumps(pack["grammar"], ensure_ascii=False)}, trans: t({json.dumps(pack["grammar"], ensure_ascii=False)}) }},
    {{
      type: "plain",
      text: {json.dumps(pack["grammar_plain"], ensure_ascii=False)},
      trans: t({json.dumps(pack["grammar_en"], ensure_ascii=False)}),
    }},
    {{
      type: "section",
      items: {section_js},
    }},
    {{
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: {qa_js},
      transHeaders: {{ en: ["Question", "Possible answer"] }},
    }},
    {{ type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") }},
    dialogueBlock(
      A2({m["dialogue"]}),
      "Audio {m["dialogue"]:03d}",
      phraseBankToDialogue({phrases_js}),
    ),
    {{
      type: "vocab",
      items: [
        {vocab_js},
      ],
    }},
  ],
  training: {train},
  evalAudios: {ev},
}});
"""
            )

        all_list = f"EXPRESS_{mod}_LESSONS"
        footer = f"""
export const {all_list}: CommunicationLesson[] = [
  {", ".join(export_names)},
];
"""
        path = OUT / f"express-{mod.lower()}.ts"
        path.write_text("\n".join(imports) + "\n" + "\n".join(bodies) + footer)
        print("theory", path.name, path.stat().st_size)


def emit_index():
    # Keep E1-E3 imports if still present; append E9-E14. Also allow A1 rebuild later.
    index = '''import type { CommunicationLesson } from "./express-types";
import { EXPRESS_E1_1, EXPRESS_E1_2, EXPRESS_E1_3, EXPRESS_E1_4, EXPRESS_E1_5 } from "./express-e1";
import { EXPRESS_E2_1, EXPRESS_E2_2, EXPRESS_E2_3, EXPRESS_E2_4, EXPRESS_E2_5 } from "./express-e2";
import { EXPRESS_E3_1, EXPRESS_E3_2, EXPRESS_E3_3, EXPRESS_E3_4 } from "./express-e3";
import { EXPRESS_E9_LESSONS } from "./express-e9";
import { EXPRESS_E10_LESSONS } from "./express-e10";
import { EXPRESS_E11_LESSONS } from "./express-e11";
import { EXPRESS_E12_LESSONS } from "./express-e12";
import { EXPRESS_E13_LESSONS } from "./express-e13";
import { EXPRESS_E14_LESSONS } from "./express-e14";

/** Toutes les leçons Expression orale (A1 legacy E1–E3 + A2 E9–E14). */
export const EXPRESS_ORAL_LESSONS: CommunicationLesson[] = [
  EXPRESS_E1_1,
  EXPRESS_E1_2,
  EXPRESS_E1_3,
  EXPRESS_E1_4,
  EXPRESS_E1_5,
  EXPRESS_E2_1,
  EXPRESS_E2_2,
  EXPRESS_E2_3,
  EXPRESS_E2_4,
  EXPRESS_E2_5,
  EXPRESS_E3_1,
  EXPRESS_E3_2,
  EXPRESS_E3_3,
  EXPRESS_E3_4,
  ...EXPRESS_E9_LESSONS,
  ...EXPRESS_E10_LESSONS,
  ...EXPRESS_E11_LESSONS,
  ...EXPRESS_E12_LESSONS,
  ...EXPRESS_E13_LESSONS,
  ...EXPRESS_E14_LESSONS,
];

export const EXPRESS_ORAL_BY_ID: Record<string, CommunicationLesson> = Object.fromEntries(
  EXPRESS_ORAL_LESSONS.map((lesson) => [lesson.id, lesson]),
);
'''
    path = OUT / "express-index.ts"
    path.write_text(index)
    print("index", path.name)


if __name__ == "__main__":
    emit_listening()
    emit_theory()
    emit_index()
    print("OK")
