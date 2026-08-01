#!/usr/bin/env python3
"""Génère les fichiers TypeScript des leçons Expression orale E1.2–E14.1."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "lib/curriculum/content/communication"
DATA = ROOT / "scripts/data/express"

A1_T = {int(k): v for k, v in json.loads((DATA / "a1-transcripts.json").read_text()).items()}
A2_T: dict[int, str] = {}
if (DATA / "a2-transcripts.json").exists():
    A2_T = {int(k): v for k, v in json.loads((DATA / "a2-transcripts.json").read_text()).items()}

FORMATS = ["text", "image", "fill", "vf"]


def fmt_transcript(t: str) -> str:
    t = t.replace("\r\n", "\n")
    t = re.sub(r"\s*-\s+", "\n- ", t)
    t = re.sub(r"^\n+", "", t)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip()


def extract_facts(transcript: str) -> list[dict]:
    """Extrait des faits simples pour générer 6–8 questions uniques."""
    text = transcript.replace("\n", " ")
    facts: list[dict] = []

    # Noms propres capitalisés (hors début de phrase après -)
    names = re.findall(r"\b([A-ZÉÈÀÂÊÎÔÛÇ][a-zéèêàâùîôûçëïü-]{2,})\b", transcript)
    skip = {
        "Bonjour", "Bonsoir", "Merci", "Oui", "Non", "Alors", "Voici", "Voilà",
        "Allô", "Allo", "Pardon", "Désolé", "Desole", "Super", "Très", "Tres",
        "Dans", "Pour", "Avec", "Chez", "Après", "Avant", "Quand", "Comment",
        "Quel", "Quelle", "Quels", "Quelles", "Vous", "Nous", "Elle", "Lui",
        "Ils", "Elles", "Madame", "Monsieur", "Mademoiselle", "Ah", "Oh",
        "Regarde", "Écoute", "Ecoute", "Salut", "Daccord", "D'accord",
    }
    uniq_names = []
    for n in names:
        if n in skip or n in uniq_names:
            continue
        uniq_names.append(n)
    for n in uniq_names[:3]:
        facts.append({
            "kind": "name",
            "prompt": f"Quel nom entendez-vous dans l'audio ?",
            "answer": n,
            "wrong": [x for x in ("Marie", "Paul", "Sophie", "Thomas", "Laura") if x != n][:2],
        })

    # Nombres / heures / prix
    nums = re.findall(
        r"\b(\d{1,2}\s*h(?:\s*\d{2})?|\d+\s*€|\d+\s*ans?|\d{2,})\b",
        text,
        flags=re.I,
    )
    for n in nums[:3]:
        n = re.sub(r"\s+", " ", n.strip())
        facts.append({
            "kind": "num",
            "prompt": f"Quel chiffre ou horaire est cité ?",
            "answer": n,
            "wrong": ["10 heures", "20 €", "5 ans"][:2],
        })

    # Mots-clés thématiques
    keywords = [
        ("appartement", "De quel logement parle-t-on ?", "Un appartement", ["Un studio", "Une maison"]),
        ("studio", "Quel type de logement ?", "Un studio", ["Un château", "Un hôtel"]),
        ("marié", "Quelle est la situation ?", "Marié(e)", ["Célibataire", "Divorcé(e)"]),
        ("célibataire", "Quelle est la situation ?", "Célibataire", ["Marié(e)", "Pacsé(e)"]),
        ("pharmacie", "Où se passe la scène ?", "À la pharmacie", ["À l'école", "À l'hôtel"]),
        ("médecin", "De qui parle-t-on ?", "Un médecin", ["Un chauffeur", "Un serveur"]),
        ("restaurant", "Où sont-ils ?", "Au restaurant", ["À la gare", "À la plage"]),
        ("métro", "Quel transport est cité ?", "Le métro", ["Le bateau", "L'avion"]),
        ("avion", "Quel transport est cité ?", "L'avion", ["Le bus", "Le vélo"]),
        ("train", "Quel transport est cité ?", "Le train", ["Le métro", "Le tram"]),
        ("hôtel", "Où se passe la scène ?", "À l'hôtel", ["À l'école", "Au bureau"]),
        ("camping", "Où se passe la scène ?", "Au camping", ["Au musée", "À la pharmacie"]),
        ("musée", "Quel lieu culturel ?", "Un musée", ["Un stade", "Un garage"]),
        ("grippe", "Quelle maladie ?", "La grippe", ["Un rhume", "Une brûlure"]),
        ("rhume", "Quelle maladie ?", "Un rhume", ["La grippe", "Une fracture"]),
        ("électricité", "Quel problème ?", "L'électricité", ["Le gaz", "Internet"]),
        ("serrure", "Quel problème ?", "La serrure", ["Le frigo", "Le balcon"]),
        ("végétarien", "Que dit la personne ?", "Elle/il est végétarien(ne)", ["Elle/il mange de la viande", "Elle/il boit du vin"]),
        ("invitation", "De quoi s'agit-il ?", "Une invitation", ["Un examen", "Un voyage"]),
        ("apéro", "Quelle fête ?", "Un apéro", ["Un mariage", "Un concert"]),
    ]
    low = text.lower()
    for key, prompt, ans, wrong in keywords:
        if key in low:
            facts.append({"kind": "theme", "prompt": prompt, "answer": ans, "wrong": wrong})

    # Vrai/faux basiques depuis premières phrases
    sentences = [s.strip() for s in re.split(r"[.!?\n]", transcript) if len(s.strip()) > 15]
    for s in sentences[:4]:
        s = s.replace("- ", "").strip()
        if len(s) > 90:
            s = s[:87] + "…"
        facts.append({"kind": "vf", "statement": s, "correct": True})
        # version fausse
        false_s = s
        for a, b in [("oui", "non"), ("ne ", ""), ("pas ", ""), ("grand", "petit"), ("matin", "soir")]:
            if a in false_s.lower():
                false_s = re.sub(a, b, false_s, count=1, flags=re.I)
                break
        else:
            false_s = "Il n'y a aucune information dans l'audio."
        facts.append({"kind": "vf", "statement": false_s if false_s != s else "L'audio parle uniquement d'informatique.", "correct": False})

    # Dédupliquer prompts
    seen = set()
    out = []
    for f in facts:
        key = (f.get("prompt") or f.get("statement"), f.get("answer") or f.get("correct"))
        if key in seen:
            continue
        seen.add(key)
        out.append(f)
    return out[:12]


def facts_to_questions(facts: list[dict], prefix: str) -> list[dict]:
    qs = []
    for i, f in enumerate(facts):
        fmt = FORMATS[i % 4]
        qid = f"{prefix}-q{i+1}"
        if f.get("kind") == "vf" or fmt == "vf":
            if f.get("kind") != "vf":
                st = f"{f['answer']} est mentionné dans l'audio."
                correct = True
            else:
                st = f["statement"]
                correct = f["correct"]
            qs.append({
                "id": qid,
                "format": "vf",
                "textQ": st,
                "text": ["Vrai", "Faux", "On ne sait pas"],
                "textC": 0 if correct else 1,
                "vfQ": st,
                "vfC": 0 if correct else 1,
                "img": ["Maison", "Téléphone", "Carte"],
                "imgC": 0,
                "fillQ": "Réponse : _________.",
                "fill": "Vrai" if correct else "Faux",
            })
            continue
        ans = f["answer"]
        wrong = f.get("wrong") or ["?", "??"]
        while len(wrong) < 2:
            wrong.append("?")
        choices = [ans, wrong[0], wrong[1]]
        if fmt == "fill":
            qs.append({
                "id": qid,
                "format": "fill",
                "textQ": f["prompt"],
                "text": choices,
                "textC": 0,
                "img": choices,
                "imgC": 0,
                "fillQ": f["prompt"].rstrip(" ?") + " : _________.",
                "fill": re.sub(r"^(Un|Une|Le|La|Les|L')\s+", "", ans, flags=re.I),
            })
        elif fmt == "image":
            qs.append({
                "id": qid,
                "format": "image",
                "textQ": f["prompt"],
                "text": choices,
                "textC": 0,
                "img": choices,
                "imgC": 0,
                "fillQ": "_________",
                "fill": ans,
            })
        else:
            qs.append({
                "id": qid,
                "format": "text",
                "textQ": f["prompt"],
                "text": choices,
                "textC": 0,
                "img": ["Maison", "Téléphone", "Carte"],
                "imgC": 0,
                "fillQ": "_________",
                "fill": ans,
            })
    # Garantir au moins 6 questions
    while len(qs) < 6:
        i = len(qs)
        qs.append({
            "id": f"{prefix}-q{i+1}",
            "format": FORMATS[i % 4],
            "textQ": "L'enregistrement contient-il un dialogue ?",
            "text": ["Oui", "Non", "On ne sait pas"],
            "textC": 0,
            "img": ["Homme", "Femme", "Enfant"],
            "imgC": 0,
            "fillQ": "C'est un enregistrement _________.",
            "fill": "oral",
            "vfQ": "C'est un enregistrement audio.",
            "vfC": 0,
        })
    return qs[:8]


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_question(q: dict) -> str:
    lines = [
        "  q({",
        f'    id: {js_str(q["id"])},',
        f'    format: {js_str(q["format"])},',
        f'    textQ: {js_str(q["textQ"])},',
        f'    text: [{", ".join(js_str(x) for x in q["text"])}],',
        f'    textC: {q["textC"]},',
        f'    img: [{", ".join(js_str(x) for x in q["img"])}],',
        f'    imgC: {q["imgC"]},',
        f'    fillQ: {js_str(q["fillQ"])},',
        f'    fill: {js_str(q["fill"])},',
    ]
    if q.get("vfQ") is not None:
        lines.append(f'    vfQ: {js_str(q["vfQ"])},')
        lines.append(f'    vfC: {q.get("vfC", 0)},')
    lines.append("  })")
    return "\n".join(lines)


def emit_listening_file(
    path: Path,
    level: str,
    export_train: str,
    export_eval: str,
    train_nums: list[int],
    eval_nums: list[int],
    lesson_slug: str,
) -> None:
    T = A1_T if level == "A1" else A2_T
    helper = "A1" if level == "A1" else "A2"
    chunks = [
        'import { buildExpressPool, type ExpressRawQ } from "./express-listening-helpers";',
        'import type { ExpressListeningAudio } from "./express-e1-1-listening";',
        f'import {{ {helper} }} from "./express-lesson-factory";',
        "",
        "function q(item: ExpressRawQ): ExpressRawQ { return item; }",
        "",
    ]

    def one(num: int, kind: str) -> str:
        tr = fmt_transcript(T.get(num, f"Audio {num}."))
        facts = extract_facts(tr)
        qs = facts_to_questions(facts, f"{num:03d}")
        pool_name = f"POOL_{num:03d}"
        tr_name = f"TR_{num:03d}"
        body = [
            f"const {tr_name} = `{tr.replace('`', '\\`')}`;",
            "",
            f'const {pool_name} = buildExpressPool("{lesson_slug}-{num:03d}", [',
            ",\n".join(emit_question(q) for q in qs),
            "]);",
            "",
        ]
        return "\n".join(body)

    audio_entries_train = []
    audio_entries_eval = []
    for num in train_nums:
        chunks.append(one(num, "train"))
        audio_entries_train.append(
            "{\n"
            f'  id: "{lesson_slug}-{num:03d}",\n'
            f"  audioSrc: {helper}({num}),\n"
            f'  audioLabel: "Audio {num:03d}",\n'
            f"  transcript: TR_{num:03d},\n"
            f'  instruction: "Écoutez l\'enregistrement et répondez aux questions.",\n'
            f"  pool: POOL_{num:03d},\n"
            f"  questionCount: 4,\n"
            "}"
        )
    for num in eval_nums:
        chunks.append(one(num, "eval"))
        audio_entries_eval.append(
            "{\n"
            f'  id: "{lesson_slug}-{num:03d}",\n'
            f"  audioSrc: {helper}({num}),\n"
            f'  audioLabel: "Audio {num:03d}",\n'
            f"  transcript: TR_{num:03d},\n"
            f'  instruction: "Écoutez l\'enregistrement et répondez aux questions.",\n'
            f"  pool: POOL_{num:03d},\n"
            f"  questionCount: 4,\n"
            "}"
        )

    chunks.append(f"export const {export_train}: ExpressListeningAudio[] = [")
    chunks.append(",\n".join(audio_entries_train))
    chunks.append("];")
    chunks.append("")
    chunks.append(f"export const {export_eval}: ExpressListeningAudio[] = [")
    chunks.append(",\n".join(audio_entries_eval) if audio_entries_eval else "")
    chunks.append("];")
    chunks.append("")
    path.write_text("\n".join(chunks), encoding="utf-8")
    print("wrote", path.name)


def emit_lesson_file(
    path: Path,
    *,
    export_name: str,
    lesson_id: str,
    code: str,
    title: str,
    french: list[str],
    comm: list[str],
    prereq_items: list[tuple[str, str, str]],
    theory_plain: str,
    theory_en: str,
    grammar_title: str,
    grammar_items: list[str],
    table_rows: list[tuple[str, str]],
    dialogue_audio: int | None,
    dialogue_lines: list[str],
    vocab: list[tuple[str, str]],
    listening_import: str,
    train_export: str,
    eval_export: str,
    level: str,
    bilan: bool = False,
) -> None:
    helper = "A1" if level == "A1" else "A2"
    if bilan:
        content = f'''import {{ listeningPoolExercise, type CommunicationLesson }} from "./express-types";
import {{ {train_export}, {eval_export} }} from "./{listening_import}";

export const {export_name}: CommunicationLesson = {{
  id: "{lesson_id}",
  code: "{code}",
  title: "{title}",
  prerequisiteFrenchSlugs: {json.dumps(french)},
  prerequisiteCommIds: {json.dumps(comm)},
  theory: [],
  exerciseCount: 0,
  exercises: [],
  evalExercises: {[f"..."] and ""}{[1] and f"{eval_export}"}.map((a) =>
    listeningPoolExercise({{
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }}),
  ),
}};
'''
        # fix broken bilan template
        content = f'''import {{ listeningPoolExercise, type CommunicationLesson }} from "./express-types";
import {{ {eval_export} }} from "./{listening_import}";

export const {export_name}: CommunicationLesson = {{
  id: "{lesson_id}",
  code: "{code}",
  title: "{title}",
  prerequisiteFrenchSlugs: {json.dumps(french)},
  prerequisiteCommIds: {json.dumps(comm)},
  theory: [],
  exerciseCount: 0,
  exercises: [],
  evalExercises: {eval_export}.map((a) =>
    listeningPoolExercise({{
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }}),
  ),
}};
'''
        path.write_text(content, encoding="utf-8")
        print("wrote", path.name)
        return

    prereq_js = ",\n        ".join(
        f'{{ code: {js_str(c)}, title: {js_str(t)}, href: {js_str(h)} }}' for c, t, h in prereq_items
    )
    grammar_js = ",\n        ".join(js_str(x) for x in grammar_items)
    rows_js = ",\n        ".join(f"[{js_str(a)}, {js_str(b)}]" for a, b in table_rows)
    lines_js = ",\n        ".join(
        f'{{ role: "{("A" if i % 2 == 0 else "B")}", text: {js_str(l.lstrip("- ").strip())} }}'
        for i, l in enumerate(dialogue_lines)
    )
    vocab_js = ",\n        ".join(
        f'{{ fr: {js_str(a)}, example: {js_str(b)} }}' for a, b in vocab
    )

    content = f'''import {{ listeningPoolExercise, type CommunicationLesson }} from "./express-types";
import {{ {train_export}, {eval_export} }} from "./{listening_import}";
import {{ {helper}, t }} from "./express-lesson-factory";

export const {export_name}: CommunicationLesson = {{
  id: "{lesson_id}",
  code: "{code}",
  title: {js_str(title)},
  prerequisiteFrenchSlugs: {json.dumps(french)},
  prerequisiteCommIds: {json.dumps(comm)},
  theory: [
    {{ type: "heading", text: {js_str(title)}, black: true, trans: t({js_str(theory_en)}) }},
    {{
      type: "prerequisites",
      items: [
        {prereq_js}
      ],
    }},
    {{
      type: "plain",
      text: {js_str(theory_plain)},
      trans: t({js_str(theory_en)}),
    }},
    {{ type: "highlight", title: {js_str(grammar_title)}, trans: t({js_str(grammar_title)}) }},
    {{
      type: "section",
      items: [
        {grammar_js}
      ],
    }},
    {{
      type: "table",
      accentHeader: true,
      headers: ["Question", "Réponse possible"],
      rows: [
        {rows_js}
      ],
    }},
    {{ type: "heading", text: "Exemple de dialogue", black: true, trans: t("Sample dialogue") }},
    {{
      type: "dialogue",
      audioSrc: {helper}({dialogue_audio}),
      audioLabel: "Audio {dialogue_audio:03d}",
      lines: [
        {lines_js}
      ],
    }},
    {{
      type: "vocab",
      items: [
        {vocab_js}
      ],
    }},
  ],
  exerciseCount: 4,
  exercises: {train_export}.map((a) =>
    listeningPoolExercise({{
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }}),
  ),
  evalExercises: {eval_export}.map((a) =>
    listeningPoolExercise({{
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }}),
  ),
}};
'''
    path.write_text(content, encoding="utf-8")
    print("wrote", path.name)


# ── Lesson specs A1 ──────────────────────────────────────────────────────────

A1_LESSONS = [
    # E1.2 already handcrafted — skip or overwrite lightly
    {
        "slug": "e1-3", "id": "E1-3", "code": "E1.3", "title": "Inviter à une fête",
        "french": ["v2-jours-mois-dates", "v2-heure", "a1-conj-l07", "a1-gr-l02"],
        "comm": ["E1-2"],
        "prereq": [("E1.2", "Parler de sa famille", "/communication/E1-2"), ("V2.1", "Jours, mois, dates", "/francais/vocabulaire/v2-jours-mois-dates"), ("V2.2", "L'heure", "/francais/vocabulaire/v2-heure"), ("C1.5", "Verbes en -er", "/francais/conjugaison/a1-conj-l07"), ("G1.7", "La négation", "/francais/grammaire/a1-gr-l02")],
        "plain": "Pour inviter, on utilise des verbes en **-er** (**inviter**, **organiser**, **apporter**, **partager**) et la **négation** (ne… pas).",
        "en": "Inviting someone to a party",
        "g_title": "Verbes en -er et négation",
        "g_items": ["**J'invite** mes amis.", "**Nous organisons** un apéro.", "Je **n'**suis **pas** libre.", "**J'apporte** un dessert à partager."],
        "rows": [("Tu es libre samedi ?", "Oui, je suis libre. / Non, je ne suis pas libre."), ("Je t'invite, tu peux venir ?", "Oui, avec plaisir !"), ("C'est à quelle heure ?", "À 19 heures."), ("J'apporte quelque chose ?", "Oui, un dessert.")],
        "dialogue": 31, "train": [27, 33, 34, 35], "eval": [36, 37],
        "vocab": [("inviter", "Je vous invite samedi."), ("être libre", "Tu es libre ?"), ("apporter", "J'apporte une salade."), ("dommage", "Dommage !")],
    },
    {
        "slug": "e2-1", "id": "E2-1", "code": "E2.1", "title": "Décrire son logement",
        "french": ["v4-type-logement", "v4-pieces-maison", "v4-equipements", "a1-gr-l04"],
        "comm": ["E1-3"],
        "prereq": [("E1.3", "Inviter à une fête", "/communication/E1-3"), ("V4.1", "Types de logement", "/francais/vocabulaire/v4-type-logement"), ("V4.2", "Pièces", "/francais/vocabulaire/v4-pieces-maison"), ("G1.3", "Articles", "/francais/grammaire/a1-gr-l04")],
        "plain": "Pour décrire un logement, on utilise les **articles** définis et indéfinis : **un** studio, **une** chambre, **le** salon, **des** pièces lumineuses.",
        "en": "Describing your home",
        "g_title": "Articles définis et indéfinis",
        "g_items": ["**Un** appartement / **une** maison", "**Le** salon, **la** cuisine, **les** toilettes", "**Des** pièces lumineuses", "Il y a **un** balcon."],
        "rows": [("Tu habites dans un studio ?", "Non, dans un appartement."), ("C'est lumineux ?", "Oui, c'est très lumineux."), ("C'est à quel étage ?", "Au 3e."), ("Tu as un balcon ?", "Oui, un petit balcon.")],
        "dialogue": 42, "train": [38, 44, 45, 46], "eval": [47, 48],
        "vocab": [("studio / appartement", "J'habite dans un appartement."), ("lumineux / sombre", "C'est lumineux."), ("étage", "Au 3e étage."), ("cuisine équipée", "Il y a une cuisine équipée.")],
    },
    {
        "slug": "e2-2", "id": "E2-2", "code": "E2.2", "title": "Avoir un problème domestique",
        "french": ["v4-appareils-electromenagers", "v4-pannes", "a1-conj-l08", "a1-conj-l15"],
        "comm": ["E2-1"],
        "prereq": [("E2.1", "Décrire son logement", "/communication/E2-1"), ("V4.4", "Électroménager", "/francais/vocabulaire/v4-appareils-electromenagers"), ("V4.5", "Pannes", "/francais/vocabulaire/v4-pannes"), ("C2.1", "Verbes de mouvement", "/francais/conjugaison/a1-conj-l08"), ("C2.3", "Modaux", "/francais/conjugaison/a1-conj-l15")],
        "plain": "Pour parler d'une panne, on utilise **venir**, **pouvoir** et **prendre** : le technicien **vient**, je **peux** venir aujourd'hui, on **prend** rendez-vous.",
        "en": "Having a home problem",
        "g_title": "Venir, pouvoir, prendre",
        "g_items": ["Je **peux** venir aujourd'hui.", "On **prend** rendez-vous.", "Le technicien **vient** chez vous.", "Je **ne peux pas** ouvrir la porte."],
        "rows": [("Qu'est-ce qui ne va pas ?", "Je n'ai plus d'électricité."), ("C'est urgent ?", "Oui, c'est vraiment urgent !"), ("Vous pouvez venir quand ?", "Aujourd'hui à 16 heures."), ("Vous voulez un devis ?", "Oui, s'il vous plaît.")],
        "dialogue": 53, "train": [49, 56, 57, 58], "eval": [59, 60],
        "vocab": [("panne", "J'ai une panne d'électricité."), ("devis", "Je fais un devis."), ("urgent", "C'est urgent !"), ("réparer", "Il répare la télé.")],
    },
    {
        "slug": "e2-3", "id": "E2-3", "code": "E2.3", "title": "Respecter le règlement",
        "french": ["v5-structure-ecole", "a2-conj-l05"],
        "comm": ["E2-2"],
        "prereq": [("E2.2", "Problème domestique", "/communication/E2-2"), ("V5.3", "Structure", "/francais/vocabulaire/v5-structure-ecole"), ("C6.3", "L'impératif", "/francais/conjugaison/a2-conj-l05")],
        "plain": "Pour donner des règles, on utilise **l'impératif** : **Tenez** les chiens en laisse. **Ne fumez pas** dans les couloirs.",
        "en": "Respecting the building rules",
        "g_title": "L'impératif",
        "g_items": ["**Rangez** les vélos dans le local.", "**Mettez** votre nom sur la boîte.", "**Ne fumez pas** dans les couloirs.", "**Ne faites pas** de bruit après 22 h."],
        "rows": [("Où ranger les vélos ?", "Dans le local à vélos."), ("Où est le règlement ?", "Dans le hall d'entrée."), ("Les chiens ?", "Tenez-les en laisse."), ("Fumer ?", "Il est interdit de fumer.")],
        "dialogue": 65, "train": [61, 67, 68, 69], "eval": [70, 71],
        "vocab": [("règlement", "Respectez le règlement."), ("local à vélos", "Rangez le vélo dans le local."), ("en laisse", "Tenez le chien en laisse."), ("ordures", "Les ordures sont dans le local.")],
    },
    {
        "slug": "e3-1", "id": "E3-1", "code": "E3.1", "title": "Aller à l'école",
        "french": ["v5-matieres", "v5-materiel-scolaire", "a1-gr-l10"],
        "comm": ["E2-3"],
        "prereq": [("E2.3", "Règlement", "/communication/E2-3"), ("V5.1", "Matières", "/francais/vocabulaire/v5-matieres"), ("V5.2", "Matériel", "/francais/vocabulaire/v5-materiel-scolaire"), ("G", "Questions ouvertes", "/francais/grammaire/a1-gr-l10")],
        "plain": "Pour s'orienter à l'école, on pose des questions avec **qui**, **quoi**, **où**, **quelle**, **quand**, **combien**, **comment**.",
        "en": "Going to school",
        "g_title": "Mots interrogatifs",
        "g_items": ["**Où** est la salle ?", "**Quand** commence le cours ?", "**Comment** vous appelez-vous ?", "**Quelle** est votre carte d'étudiant ?"],
        "rows": [("Vous avez votre carte d'étudiant ?", "Oui. / Non, j'ai le formulaire."), ("Où est la salle ?", "Dans l'amphi A12."), ("Je peux venir plus tard ?", "Venez à 11 heures."), ("Tu commences à quelle heure ?", "À 9 heures.")],
        "dialogue": 76, "train": [72, 78, 79, 80], "eval": [81, 82],
        "vocab": [("carte d'étudiant", "Voici ma carte d'étudiant."), ("amphi", "Le cours est dans l'amphi A12."), ("secrétariat", "Demandez au secrétariat."), ("examen / oral", "Vous avez un oral.")],
    },
    {
        "slug": "e3-2", "id": "E3-2", "code": "E3.2", "title": "Décrire son quotidien",
        "french": ["v2-saisons", "v2-meteo", "a1-conj-l09"],
        "comm": ["E3-1"],
        "prereq": [("E3.1", "Aller à l'école", "/communication/E3-1"), ("V2.3", "Saisons", "/francais/vocabulaire/v2-saisons"), ("V2.4", "Météo", "/francais/vocabulaire/v2-meteo"), ("C2.2", "Pronominaux", "/francais/conjugaison/a1-conj-l09")],
        "plain": "Pour décrire la journée, on utilise les **verbes pronominaux** : **se lever**, **se laver**, **s'habiller**, **se coucher**, **se préparer**.",
        "en": "Describing your daily routine",
        "g_title": "Verbes pronominaux",
        "g_items": ["Je **me lève** à 6 h 30.", "Elle **se douche** et **s'habille**.", "Je **me couche** tôt.", "Nous **nous promenons** le week-end."],
        "rows": [("Tu te couches tard ?", "Non, je me couche tôt."), ("Tu mets le réveil à quelle heure ?", "À 6 heures."), ("Qu'est-ce que tu fais le week-end ?", "On se promène."), ("Tu as du temps libre ?", "Non, je travaille beaucoup.")],
        "dialogue": 87, "train": [83, 89, 90, 91], "eval": [92, 93],
        "vocab": [("se lever / se coucher", "Je me lève tôt."), ("réveil", "Je mets mon réveil."), ("se préparer", "J'ai besoin d'une heure."), ("en retard / à l'heure", "J'arrive à l'heure.")],
    },
    {
        "slug": "e3-3", "id": "E3-3", "code": "E3.3", "title": "Aller au travail",
        "french": ["v1-description-morale", "a1-gr-l03"],
        "comm": ["E3-2"],
        "prereq": [("E3.2", "Quotidien", "/communication/E3-2"), ("V1.6", "Description morale", "/francais/vocabulaire/v1-description-morale"), ("G1.4", "Genre des adjectifs", "/francais/grammaire/a1-gr-l03")],
        "plain": "Pour décrire les collègues et soi-même, on accorde les **adjectifs au féminin** : **sérieux / sérieuse**, **dynamique**, **bavard / bavarde**.",
        "en": "Going to work",
        "g_title": "Accord des adjectifs",
        "g_items": ["Il est **sérieux**. Elle est **sérieuse**.", "Je suis **dynamique**.", "Elle est **bavarde**.", "Il est **patient** et **calme**."],
        "rows": [("Tu travailles où ?", "Dans une entreprise."), ("L'informaticien est disponible ?", "Non, il est en réunion."), ("Pourquoi vendeur ?", "Parce que je suis dynamique."), ("Parlez-moi de vous.", "J'aime travailler en équipe.")],
        "dialogue": 98, "train": [94, 100, 101, 102], "eval": [103, 104],
        "vocab": [("télétravail", "Aujourd'hui, elle télétravaille."), ("réunion", "Il est en réunion."), ("collègue", "C'est une collègue sérieuse."), ("disponible", "Je suis disponible.")],
    },
]

# More A1 lessons in compact form
A1_LESSONS += [
    {
        "slug": "e4-1", "id": "E4-1", "code": "E4.1", "title": "Acheter des vêtements",
        "french": ["v6-vetements", "v6-accessoires", "v6-couleurs", "v6-matieres", "a2-conj-l04"],
        "comm": ["E3-3"],
        "prereq": [("E3.3", "Travail", "/communication/E3-3"), ("V6.1", "Vêtements", "/francais/vocabulaire/v6-vetements"), ("C6.1", "Conditionnel de politesse", "/francais/conjugaison/a2-conj-l04")],
        "plain": "Pour être poli en magasin, on utilise le **conditionnel** : **Je voudrais**, **Je pourrais**, **J'aimerais**.",
        "en": "Buying clothes",
        "g_title": "Politesse au conditionnel",
        "g_items": ["**Je voudrais** une robe.", "**Je pourrais** essayer ?", "**Vous aimeriez** autre chose ?", "**J'aimerais** voir des chaussures."],
        "rows": [("Je peux vous aider ?", "Je voudrais une robe."), ("Vous faites quelle taille ?", "Je fais du 38."), ("Ça vous plaît ?", "Oui, ça me plaît."), ("Quelle pointure ?", "Je fais du 39.")],
        "dialogue": 109, "train": [105, 111, 112, 113], "eval": [114, 115],
        "vocab": [("taille / pointure", "Je fais du 38."), ("essayer", "Je pourrais essayer ?"), ("ça me plaît", "Oui, ça me plaît."), ("en laine / en coton", "C'est en laine.")],
    },
    {
        "slug": "e4-2", "id": "E4-2", "code": "E4.2", "title": "Aller au restaurant",
        "french": ["v7-restaurant", "a1-gr-l14", "a1-gr-l02"],
        "comm": ["E4-1"],
        "prereq": [("E4.1", "Vêtements", "/communication/E4-1"), ("V10.1", "Restaurant", "/francais/vocabulaire/v7-restaurant"), ("G3.1", "Partitifs", "/francais/grammaire/a1-gr-l14")],
        "plain": "Au restaurant, on utilise les **articles partitifs** (**du**, **de la**, **de l'**, **des**) et la négation **pas de**.",
        "en": "Going to a restaurant",
        "g_title": "Partitifs et négation",
        "g_items": ["Je prends **du** poisson.", "Je bois **de l'**eau.", "Je ne mange **pas de** viande.", "**Pas d'**alcool pour moi."],
        "rows": [("C'est pour déjeuner ?", "Oui, une table pour deux."), ("Tu prends du poisson ?", "Non, je suis végétarien."), ("Qu'est-ce que vous buvez ?", "Une carafe d'eau."), ("L'addition s'il vous plaît !", "On laisse un pourboire ?")],
        "dialogue": 120, "train": [116, 122, 123, 124], "eval": [125, 126],
        "vocab": [("menu / addition", "L'addition s'il vous plaît."), ("végétarien", "Je suis végétarien."), ("pourboire", "On laisse un pourboire ?"), ("carafe d'eau", "Une carafe d'eau.")],
    },
    {
        "slug": "e4-3", "id": "E4-3", "code": "E4.3", "title": "Aller à la boulangerie",
        "french": ["v7-recettes", "v7-quantites", "v7-boulangerie"],
        "comm": ["E4-2"],
        "prereq": [("E4.2", "Restaurant", "/communication/E4-2"), ("V7.4", "Recettes", "/francais/vocabulaire/v7-recettes"), ("V7.5", "Quantités", "/francais/vocabulaire/v7-quantites")],
        "plain": "À la boulangerie, on exprime la **quantité** : **deux** croissants, une tarte **pour six**, **beaucoup de** beurre, **un peu de** sel.",
        "en": "Going to the bakery",
        "g_title": "Expression de la quantité",
        "g_items": ["**Deux** croissants s'il vous plaît.", "Une tarte **pour six**.", "**Beaucoup de** beurre.", "**Un peu de** sel."],
        "rows": [("C'est à qui ?", "C'est à moi !"), ("Et avec ceci ?", "Une baguette."), ("Une tarte pour combien ?", "Pour six."), ("Ce sera tout ?", "Oui, merci.")],
        "dialogue": 131, "train": [127, 133, 134, 135], "eval": [136, 137],
        "vocab": [("baguette / croissant", "Deux croissants."), ("formule", "Qu'est-ce qu'il y a dans une formule ?"), ("sans contact", "Par carte, sans contact."), ("tarte", "Une tarte au citron.")],
    },
    {
        "slug": "e5-1", "id": "E5-1", "code": "E5.1", "title": "Aller chez le médecin",
        "french": ["v8-corps", "v8-maladies", "v8-medecins", "a1-gr-l11"],
        "comm": ["E4-3"],
        "prereq": [("E4.3", "Boulangerie", "/communication/E4-3"), ("V8.1", "Corps", "/francais/vocabulaire/v8-corps"), ("V8.2", "Maladies", "/francais/vocabulaire/v8-maladies"), ("V8.3", "Médecins", "/francais/vocabulaire/v8-medecins")],
        "plain": "Chez le médecin, on dit **j'ai mal à la / au / aux**… : **à la** gorge, **au** ventre, **à la** tête (articles contractés).",
        "en": "Going to the doctor",
        "g_title": "Articles contractés (à + le/les)",
        "g_items": ["J'ai mal **à la** gorge.", "J'ai mal **au** ventre.", "J'ai mal **à la** tête.", "Allez **chez** le médecin."],
        "rows": [("Vous avez mal où ?", "J'ai mal à la gorge."), ("Vous avez de la fièvre ?", "Oui, j'ai de la fièvre."), ("Qu'est-ce que j'ai ?", "C'est la grippe."), ("Qu'est-ce que je dois faire ?", "Restez à la maison.")],
        "dialogue": 143, "train": [138, 144, 145, 146], "eval": [147, 148],
        "vocab": [("avoir mal", "J'ai mal à la tête."), ("fièvre / toux", "J'ai de la fièvre."), ("grippe / rhume", "C'est la grippe."), ("urgences", "Je suis aux urgences.")],
    },
    {
        "slug": "e5-2", "id": "E5-2", "code": "E5.2", "title": "Aller à la pharmacie",
        "french": ["v8-pharmacie", "a1-conj-l15"],
        "comm": ["E5-1"],
        "prereq": [("E5.1", "Médecin", "/communication/E5-1"), ("V8.4", "Pharmacie", "/francais/vocabulaire/v8-pharmacie"), ("C2.3", "Modaux", "/francais/conjugaison/a1-conj-l15")],
        "plain": "À la pharmacie, on exprime l'**obligation** avec **il faut** et **devoir** : **Il faut** prendre un comprimé. Vous **devez** voir un médecin.",
        "en": "Going to the pharmacy",
        "g_title": "Falloir et devoir",
        "g_items": ["**Il faut** mettre cette crème.", "Vous **devez** prendre un comprimé.", "**Il faut** aller voir un médecin.", "Vous **devez** rester à la maison."],
        "rows": [("Vous avez une ordonnance ?", "Oui, voilà."), ("Comment je prends les antibiotiques ?", "Un comprimé matin, midi et soir."), ("Vous avez de l'aspirine ?", "Oui, en sachet."), ("Contre la toux ?", "Des pastilles / du sirop.")],
        "dialogue": 153, "train": [149, 155, 156, 157], "eval": [158, 159],
        "vocab": [("ordonnance", "Voici mon ordonnance."), ("carte Vitale", "Voici ma carte Vitale."), ("comprimé / sirop", "Prenez un comprimé."), ("brûlure", "J'ai une brûlure.")],
    },
    {
        "slug": "e6-1", "id": "E6-1", "code": "E6.1", "title": "Demander son chemin",
        "french": ["v9-ville", "v9-direction", "a1-conj-l08"],
        "comm": ["E5-2"],
        "prereq": [("E5.2", "Pharmacie", "/communication/E5-2"), ("V9.1", "Ville", "/francais/vocabulaire/v9-ville"), ("V9.3", "Direction", "/francais/vocabulaire/v9-direction"), ("C2.1", "Aller", "/francais/conjugaison/a1-conj-l08")],
        "plain": "Pour demander son chemin, on conjugue **aller** : je **vais**, tu **vas**, il **va**, nous **allons**… et on donne des indications.",
        "en": "Asking for directions",
        "g_title": "Le verbe aller",
        "g_items": ["Je **vais** à la mairie.", "Vous **allez** tout droit.", "On **va** à pied.", "Tu **vas** prendre le métro."],
        "rows": [("Vous pourriez m'aider ?", "Oui ?"), ("C'est loin ?", "Non, c'est à côté."), ("Quel bus ?", "Le 14."), ("C'est direct ?", "Non, il faut changer.")],
        "dialogue": 164, "train": [160, 166, 167, 168], "eval": [169, 170],
        "vocab": [("tout droit", "Allez tout droit."), ("tourner", "Tournez à gauche."), ("trajet", "Le trajet dure 20 minutes."), ("distributeur", "Achetez au distributeur.")],
    },
    {
        "slug": "e6-2", "id": "E6-2", "code": "E6.2", "title": "Voyager en transport public",
        "french": ["v9-transport", "a1-gr-l10"],
        "comm": ["E6-1"],
        "prereq": [("E6.1", "Chemin", "/communication/E6-1"), ("V9.2", "Transport", "/francais/vocabulaire/v9-transport")],
        "plain": "Pour choisir un billet, on utilise **quel / quelle / quels / quelles** : **Quel** train ? **Quelle** place ? **Quels** horaires ?",
        "en": "Travelling by public transport",
        "g_title": "Adjectifs interrogatifs quel(le)(s)",
        "g_items": ["**Quel** train prenez-vous ?", "**Quelle** place préférez-vous ?", "**Quels** billets ?", "**Quelles** places sont libres ?"],
        "rows": [("Aller simple ou aller-retour ?", "Un aller simple."), ("Côté fenêtre ou couloir ?", "Côté fenêtre."), ("Le TGV est complet ?", "Il y a des places dans le TER."), ("Combien dure le trajet ?", "1 h 45.")],
        "dialogue": 175, "train": [171, 177, 178, 179], "eval": [180, 181],
        "vocab": [("TGV / TER", "Je prends le TGV."), ("covoiturage", "J'adore le covoiturage."), ("retard / grève", "Il y a du retard."), ("billet", "Le billet est à 49 €.")],
    },
    {
        "slug": "e6-3", "id": "E6-3", "code": "E6.3", "title": "Aller à l'aéroport",
        "french": ["v9-aeroport", "a1-gr-l11"],
        "comm": ["E6-2"],
        "prereq": [("E6.2", "Transport", "/communication/E6-2"), ("V10.4", "Aéroport", "/francais/vocabulaire/v9-aeroport")],
        "plain": "Avec les pays, on dit **au** Portugal, **en** Belgique, **aux** États-Unis, **à** Porto.",
        "en": "Going to the airport",
        "g_title": "Prépositions avec les pays",
        "g_items": ["Je vais **en** Belgique.", "Je vais **aux** États-Unis.", "Je vais **au** Portugal.", "Vol **à destination de** Boston."],
        "rows": [("Quelle est votre destination ?", "Je vais à Bruxelles."), ("Bagages à enregistrer ?", "Non, une valise cabine."), ("Côté hublot ?", "Oui."), ("Bon vol !", "Merci !")],
        "dialogue": 186, "train": [182, 188, 189, 190], "eval": [191, 192],
        "vocab": [("carte d'embarquement", "Voici ma carte d'embarquement."), ("valise cabine", "J'ai une valise cabine."), ("passeport", "Votre passeport s'il vous plaît."), ("porte d'embarquement", "Porte B6.")],
    },
    {
        "slug": "e7-1", "id": "E7-1", "code": "E7.1", "title": "Aller à l'hôtel",
        "french": ["v9-hotel", "v9-paysage", "a1-gr-l11"],
        "comm": ["E6-3"],
        "prereq": [("E6.3", "Aéroport", "/communication/E6-3"), ("V10.5", "Hôtel", "/francais/vocabulaire/v9-hotel"), ("V9.5", "Paysage", "/francais/vocabulaire/v9-paysage")],
        "plain": "Pour situer, on utilise les **prépositions de lieu** : **devant**, **derrière**, **à côté de**, **entre**, **à gauche de**, **à droite de**.",
        "en": "Going to a hotel",
        "g_title": "Prépositions de lieu",
        "g_items": ["**Devant** la rivière", "**À côté de** la plage", "**Entre** la piscine et le parc", "**À droite de** la forêt"],
        "rows": [("Vous avez des chambres ?", "Oui, pour combien de personnes ?"), ("C'est combien ?", "76 € la chambre."), ("Pension complète ?", "Non, demi-pension."), ("Où est l'hôtel ?", "À côté de la plage.")],
        "dialogue": 197, "train": [193, 200, 201, 202], "eval": [203, 204],
        "vocab": [("réserver", "Je voudrais réserver."), ("demi-pension", "La demi-pension à 90 €."), ("bungalow", "Un bungalow pour 4."), ("disponible", "Une chambre disponible ?")],
    },
    {
        "slug": "e7-2", "id": "E7-2", "code": "E7.2", "title": "Pratiquer une activité sportive",
        "french": ["v3-sport", "a1-gr-l14"],
        "comm": ["E7-1"],
        "prereq": [("E7.1", "Hôtel", "/communication/E7-1"), ("V3.1", "Sport", "/francais/vocabulaire/v3-sport")],
        "plain": "On dit **faire du / de la / de l'** + sport : **faire du** vélo, **faire de la** voile, **faire de l'**escalade.",
        "en": "Doing a sports activity",
        "g_title": "Faire + article contracté",
        "g_items": ["**Faire du** VTT", "**Faire de la** voile", "**Faire de l'**escalade", "**Faire du** sport"],
        "rows": [("On joue au tennis ?", "Non, je déteste le tennis."), ("Il fait quel temps ?", "Il fait 20 °C."), ("Vous savez faire du ski ?", "Oui, mais je veux du surf."), ("Cours débutants ?", "Le mardi à 18 h.")],
        "dialogue": 209, "train": [205, 211, 212, 213], "eval": [214, 215],
        "vocab": [("VTT / voile", "On fait du VTT."), ("météo", "Demain il pleut."), ("débutant", "Un cours pour débutants."), ("louer", "Louer un canoé-kayak.")],
    },
    {
        "slug": "e7-3", "id": "E7-3", "code": "E7.3", "title": "Visiter des lieux culturels",
        "french": ["v9-espace-culturel", "a1-gr-l18"],
        "comm": ["E7-2"],
        "prereq": [("E7.2", "Sport", "/communication/E7-2"), ("V9.4", "Culture", "/francais/vocabulaire/v9-espace-culturel"), ("G3.4", "Démonstratifs", "/francais/grammaire/a1-gr-l18")],
        "plain": "Pour désigner, on utilise **ce / cet / cette / ces** : **cette** exposition, **cet** acteur, **ces** musées.",
        "en": "Visiting cultural places",
        "g_title": "Adjectifs démonstratifs",
        "g_items": ["**Cette** exposition", "**Cet** acteur", "**Ce** film", "**Ces** musées"],
        "rows": [("On va au musée ?", "Oui, voir l'exposition."), ("Cinéma ou théâtre ?", "Au cinéma."), ("Des places ?", "Désolé, c'est complet."), ("Réductions étudiants ?", "Oui, avec la carte.")],
        "dialogue": 220, "train": [216, 222, 223, 224], "eval": [225, 226],
        "vocab": [("exposition", "Une exposition Picasso."), ("e-billet", "Je prends des e-billets."), ("visite guidée", "Il y a des visites guidées."), ("séance", "La séance de 20 h.")],
    },
]


def dialogue_lines_from_audio(num: int, level: str = "A1") -> list[str]:
    T = A1_T if level == "A1" else A2_T
    tr = T.get(num, "")
    lines = []
    for line in fmt_transcript(tr).split("\n"):
        line = line.strip()
        if not line:
            continue
        if line.startswith("-"):
            lines.append(line[1:].strip())
        else:
            # split long monologues into chunks
            parts = re.split(r"(?<=[.!?])\s+", line)
            lines.extend([p for p in parts if p])
    return lines[:16] or ["Bonjour !", "Bonjour, comment ça va ?"]


def main() -> None:
    # Fix A1 helper export - A1 is a function in factory
    # Generate listening + lesson for each A1 lesson except E1.2 (handcrafted)
    for spec in A1_LESSONS:
        slug = spec["slug"]
        listen_mod = f"express-{slug}-listening"
        train_ex = f"{slug.upper().replace('-', '_')}_TRAINING".replace("E1_3", "E1_3")
        # normalize export names
        parts = slug.split("-")
        prefix = f"{parts[0].upper()}_{parts[1]}"
        train_ex = f"{prefix}_TRAINING"
        eval_ex = f"{prefix}_EVAL"
        listen_path = OUT / f"{listen_mod}.ts"
        emit_listening_file(
            listen_path,
            "A1",
            train_ex,
            eval_ex,
            spec["train"],
            spec["eval"],
            slug,
        )
        # For bilan later
        lesson_path = OUT / f"express-{slug}.ts"
        emit_lesson_file(
            lesson_path,
            export_name=f"EXPRESS_{prefix}",
            lesson_id=spec["id"],
            code=spec["code"],
            title=spec["title"],
            french=spec["french"],
            comm=spec["comm"],
            prereq_items=spec["prereq"],
            theory_plain=spec["plain"],
            theory_en=spec["en"],
            grammar_title=spec["g_title"],
            grammar_items=spec["g_items"],
            table_rows=spec["rows"],
            dialogue_audio=spec["dialogue"],
            dialogue_lines=dialogue_lines_from_audio(spec["dialogue"]),
            vocab=spec["vocab"],
            listening_import=listen_mod,
            train_export=train_ex,
            eval_export=eval_ex,
            level="A1",
        )

    # E8.1 bilan
    emit_listening_file(
        OUT / "express-e8-1-listening.ts",
        "A1",
        "E8_1_TRAINING",
        "E8_1_EVAL",
        [],
        [227, 228, 229, 230, 231, 232, 233],
        "e8-1",
    )
    emit_lesson_file(
        OUT / "express-e8-1.ts",
        export_name="EXPRESS_E8_1",
        lesson_id="E8-1",
        code="E8.1",
        title="Bilan A1",
        french=[],
        comm=["E7-3"],
        prereq_items=[],
        theory_plain="",
        theory_en="",
        grammar_title="",
        grammar_items=[],
        table_rows=[],
        dialogue_audio=None,
        dialogue_lines=[],
        vocab=[],
        listening_import="express-e8-1-listening",
        train_export="E8_1_TRAINING",
        eval_export="E8_1_EVAL",
        level="A1",
        bilan=True,
    )

    print("A1 lessons generated:", len(A1_LESSONS) + 1)


if __name__ == "__main__":
    main()
