#!/usr/bin/env python3
"""Generate Expression orale A2 lessons E9–E14 from book transcripts."""
from __future__ import annotations

import json
from pathlib import Path
from textwrap import dedent

OUT = Path("lib/curriculum/content/communication")

def pad3(n: int) -> str:
    return f"{n:03d}"

def fmt_transcript(lines: list[str]) -> str:
    """Join dialogue turns with newline before each '- '."""
    parts = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if not line.startswith("- "):
            line = f"- {line}"
        parts.append(line)
    return "\\n".join(parts)

def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")

# ── Shared question builder ──────────────────────────────────────────────

def q(qid: str, format_: str, **kw) -> dict:
    """Build a raw question dict with fixed format."""
    d = {"id": qid, "format": format_}
    d.update(kw)
    # Ensure image fields exist for pool builder
    if "img" not in d:
        d["img"] = d.get("text", ["Oui", "Non", "On ne sait pas"])[:3]
        d["imgC"] = d.get("textC", 0)
    if "text" not in d:
        d["text"] = ["Oui", "Non", "On ne sait pas"]
        d["textC"] = 0
    if "fillQ" not in d:
        d["fillQ"] = d.get("textQ", "Complétez.") + " _________"
    if "fill" not in d:
        d["fill"] = d["text"][d.get("textC", 0)]
    if "vfQ" not in d:
        d["vfQ"] = d.get("textQ", "")
        d["vfC"] = 0
    return d

def render_q(item: dict) -> str:
    lines = ["  q({"]
    lines.append(f'    id: "{item["id"]}",')
    lines.append(f'    format: "{item["format"]}",')
    lines.append(f'    textQ: {json.dumps(item["textQ"], ensure_ascii=False)},')
    lines.append(f'    text: {json.dumps(item["text"], ensure_ascii=False)},')
    lines.append(f'    textC: {item["textC"]},')
    lines.append(f'    img: {json.dumps(item["img"], ensure_ascii=False)},')
    lines.append(f'    imgC: {item["imgC"]},')
    lines.append(f'    fillQ: {json.dumps(item["fillQ"], ensure_ascii=False)},')
    lines.append(f'    fill: {json.dumps(item["fill"], ensure_ascii=False)},')
    if item.get("fillA"):
        lines.append(f'    fillA: {json.dumps(item["fillA"], ensure_ascii=False)},')
    lines.append(f'    vfQ: {json.dumps(item["vfQ"], ensure_ascii=False)},')
    lines.append(f'    vfC: {item["vfC"]},')
    lines.append("  }),")
    return "\n".join(lines)

# ── Audio content database ───────────────────────────────────────────────
# Keys: audio number. Values: transcript lines + question pools.

AUDIOS: dict[int, dict] = {}

def add_audio(n: int, transcript_lines: list[str], questions: list[dict], label: str | None = None):
    AUDIOS[n] = {
        "transcript": transcript_lines,
        "questions": questions,
        "label": label or f"Audio {pad3(n)}",
    }

# ========== E9.1 Faire des achats — 4,1,5,6,7,8 ==========
add_audio(4, [
    "A — Mon lave-linge est tombé en panne.",
    "B — Tu vas le faire réparer ?",
    "A — Non, il n'est plus sous garantie. Je préfère acheter un lave-linge d'occasion.",
    "B — T'as regardé sur Leboncoin ?",
    "A — Oui, j'ai trouvé un lave-linge pas cher et en très bon état.",
    "A — Je vous appelle parce que j'ai acheté un téléphone portable sur votre site, mais il est en panne.",
    "B — D'accord. Pourriez-vous me donner la référence de la commande ?",
    "A — Vous proposez un service de livraison à domicile ?",
    "A — Je viens rapporter ce manteau. Il ne me va pas.",
    "B — Nous avons d'autres tailles si vous souhaitez échanger.",
    "A — Non, je voudrais un remboursement, s'il vous plaît.",
    "B — Très bien. Vous avez le ticket de caisse ?",
], [
    q("004-q1", "text", textQ="Que s'est-il passé avec le lave-linge ?",
      text=["Il est tombé en panne.", "Il est neuf.", "Il a été volé."], textC=0,
      img=["Machine", "Téléphone", "Manteau"], imgC=0,
      fillQ="Le lave-linge est tombé en _________.", fill="panne",
      vfQ="Le lave-linge est encore sous garantie.", vfC=1),
    q("004-q2", "image", textQ="Où a-t-il cherché un lave-linge d'occasion ?",
      text=["Sur Leboncoin", "Chez Voularty", "À la pharmacie"], textC=0,
      img=["Ordinateur", "Magasin", "Pharmacie"], imgC=0,
      fillQ="Il a regardé sur _________.", fill="Leboncoin", fillA=["leboncoin"],
      vfQ="Il a trouvé un lave-linge sur Leboncoin.", vfC=0),
    q("004-q3", "fill", textQ="Que demande le client pour le manteau ?",
      text=["Un remboursement", "Un échange", "Une réparation"], textC=0,
      img=["Ticket", "Manteau", "Téléphone"], imgC=0,
      fillQ="Il voudrait un _________.", fill="remboursement",
      vfQ="Le client veut échanger le manteau.", vfC=1),
    q("004-q4", "vf", textQ="Le manteau va-t-il au client ?",
      text=["Non", "Oui", "On ne sait pas"], textC=0,
      img=["Manteau", "Ticket", "Machine"], imgC=0,
      fillQ="Le manteau ne lui _________ pas.", fill="va",
      vfQ="Le manteau ne va pas au client.", vfC=0),
    q("004-q5", "text", textQ="Que demande le vendeur pour le remboursement ?",
      text=["Le ticket de caisse", "La carte bancaire", "Le passeport"], textC=0,
      img=["Ticket", "Carte", "Passeport"], imgC=0,
      fillQ="Il faut le ticket de _________.", fill="caisse",
      vfQ="Le vendeur demande le ticket de caisse.", vfC=0),
    q("004-q6", "fill", textQ="Le lave-linge trouvé est-il cher ?",
      text=["Non, pas cher", "Oui, très cher", "On ne sait pas"], textC=0,
      img=["Machine", "Argent", "Maison"], imgC=0,
      fillQ="Il a trouvé un lave-linge pas _________ et en très bon état.", fill="cher",
      vfQ="Le lave-linge d'occasion est en mauvais état.", vfC=1),
])

add_audio(1, [
    "Jules — Allô !",
    "Raphaël — Allô Raphaël, c'est Jules ! Comment ça va ?",
    "Jules — Très bien, et toi ?",
    "Raphaël — Bien, mais mon lave-linge est tombé en panne.",
    "Jules — Ah ! Tu vas le faire réparer ?",
    "Raphaël — Non, il est vieux et il n'est plus sous garantie, alors je vais acheter une nouvelle machine.",
    "Jules — Oui, je comprends. « Bien chez soi » fait des promotions en ce moment sur le rayon électroménager. Il y a des offres en magasin et sur leur site.",
    "Raphaël — Ah, je ne savais pas. Mais le centre commercial est loin de chez moi, et si je commande sur le site Internet, il faut attendre quelques semaines. Alors je préfère acheter un lave-linge d'occasion.",
    "Jules — Oui, c'est vrai que c'est plus rapide et souvent moins cher. T'as regardé sur Leboncoin ?",
    "Raphaël — Oui, et justement, je t'appelle pour ça. À côté de chez moi, j'ai trouvé un lave-linge pas cher et en très bon état. Et le vendeur a des commentaires positifs. Mais il n'y a pas de service de livraison. Tu pourrais m'aider à le porter ?",
    "Jules — Bien sûr !",
], [
    q("001-q1", "text", textQ="Que veut faire Raphaël ?",
      text=["Acheter un nouveau lave-linge", "Vendre son lave-linge", "Échanger son lave-linge"], textC=0,
      img=["Machine", "Téléphone", "Voiture"], imgC=0,
      fillQ="Raphaël va acheter une _________ machine.", fill="nouvelle",
      vfQ="Raphaël veut vendre son lave-linge.", vfC=1),
    q("001-q2", "image", textQ="Pourquoi n'achète-t-il pas neuf au centre commercial ?",
      text=["C'est loin et la livraison Internet est longue", "C'est trop beau", "Il n'a pas d'argent"], textC=0,
      img=["Magasin", "Train", "École"], imgC=0,
      fillQ="Le centre commercial est _________ de chez lui.", fill="loin",
      vfQ="Raphaël préfère acheter d'occasion.", vfC=0),
    q("001-q3", "fill", textQ="Sur quel site a-t-il trouvé un lave-linge ?",
      text=["Leboncoin", "Vinted", "Amazon"], textC=0,
      img=["Ordinateur", "Journal", "Radio"], imgC=0,
      fillQ="Il a regardé sur _________.", fill="Leboncoin", fillA=["leboncoin"],
      vfQ="Il a trouvé le lave-linge sur Vinted.", vfC=1),
    q("001-q4", "vf", textQ="Y a-t-il un service de livraison ?",
      text=["Non", "Oui", "On ne sait pas"], textC=0,
      img=["Camion", "Machine", "Maison"], imgC=0,
      fillQ="Il n'y a pas de service de _________.", fill="livraison",
      vfQ="Il n'y a pas de service de livraison.", vfC=0),
    q("001-q5", "text", textQ="Pourquoi Jules appelle-t-il Raphaël ?",
      text=["Pour demander de l'aide à porter la machine", "Pour vendre un téléphone", "Pour réserver un train"], textC=0,
      img=["Ami", "Téléphone", "Train"], imgC=0,
      fillQ="Il demande de l'_________ pour porter le lave-linge.", fill="aide",
      vfQ="Jules refuse d'aider Raphaël.", vfC=1),
    q("001-q6", "fill", textQ="Selon Jules, acheter d'occasion…",
      text=["coûte moins cher", "est plus compliqué", "est plus long"], textC=0,
      img=["Argent", "Horloge", "Livre"], imgC=0,
      fillQ="C'est plus rapide et souvent moins _________.", fill="cher",
      vfQ="Acheter d'occasion coûte souvent moins cher.", vfC=0),
])

add_audio(5, [
    "Annonce — C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le rayon multimédia ! Ordinateurs, tablettes et smartphones à petit prix ! Les offres sont disponibles sur le site Internet et en magasin, alors n'attendez plus !",
], [
    q("005-q1", "vf", textQ="Le document est-il une publicité ?",
      text=["Oui", "Non", "On ne sait pas"], textC=0,
      img=["Magasin", "École", "Hôpital"], imgC=0,
      fillQ="C'est une _________ pour les soldes.", fill="publicité", fillA=["annonce", "promo"],
      vfQ="Le document est une publicité.", vfC=0),
    q("005-q2", "text", textQ="Jusqu'à quelle date durent les réductions ?",
      text=["Jusqu'au 19 juillet", "Jusqu'en août", "Jusqu'au 19 juin"], textC=0,
      img=["Calendrier", "Ordinateur", "Téléphone"], imgC=0,
      fillQ="Les soldes durent jusqu'au 19 _________.", fill="juillet",
      vfQ="Il y a des réductions jusqu'en août.", vfC=1),
    q("005-q3", "image", textQ="Quel rayon est en promotion ?",
      text=["Le multimédia", "Les vêtements", "L'alimentation"], textC=0,
      img=["Ordinateur", "Vêtement", "Pain"], imgC=0,
      fillQ="Les promotions concernent le rayon _________.", fill="multimédia", fillA=["multimedia"],
      vfQ="Les promotions concernent les vêtements.", vfC=1),
    q("005-q4", "fill", textQ="Quels produits sont cités ?",
      text=["Ordinateurs, tablettes et smartphones", "Robes et chaussures", "Fruits et légumes"], textC=0,
      img=["Ordinateur", "Chaussure", "Fruit"], imgC=0,
      fillQ="On peut acheter des _________ à petit prix.", fill="smartphones", fillA=["ordinateurs", "tablettes", "ordinateur"],
      vfQ="Il y a des réductions sur les ordinateurs.", vfC=0),
    q("005-q5", "vf", textQ="Les offres sont-elles uniquement en magasin ?",
      text=["Non", "Oui", "On ne sait pas"], textC=0,
      img=["Ordinateur", "Magasin", "Maison"], imgC=0,
      fillQ="Les offres sont sur le site Internet et en _________.", fill="magasin",
      vfQ="Les offres sont uniquement en magasin.", vfC=1),
    q("005-q6", "text", textQ="Dans quel magasin ont lieu les soldes ?",
      text=["Voularty", "Leboncoin", "Bien chez soi"], textC=0,
      img=["Magasin", "Ordinateur", "Voiture"], imgC=0,
      fillQ="C'est les soldes chez « _________ ».", fill="Voularty", fillA=["voularty"],
      vfQ="Les soldes sont chez Voularty.", vfC=0),
])

add_audio(6, [
    "Cliente — Bonjour monsieur. Je viens rapporter ce manteau. Il ne me va pas.",
    "Vendeur — D'accord, madame. Nous avons d'autres tailles si vous souhaitez échanger.",
    "Cliente — Non, je voudrais un remboursement, s'il vous plaît.",
    "Vendeur — Très bien. Vous avez le ticket de caisse ?",
    "Cliente — Oui, tenez.",
], [
    q("006-q1", "text", textQ="Que voudrait la cliente ?",
      text=["Rapporter un article", "Acheter un article", "Réparer un article"], textC=0,
      img=["Manteau", "Machine", "Pain"], imgC=0,
      fillQ="Elle vient _________ ce manteau.", fill="rapporter",
      vfQ="La cliente voudrait acheter un article.", vfC=1),
    q("006-q2", "image", textQ="Quel type de produit rapporte-t-elle ?",
      text=["Un vêtement", "Un produit de décoration", "Un téléphone"], textC=0,
      img=["Manteau", "Tableau", "Téléphone"], imgC=0,
      fillQ="Le produit est un _________.", fill="manteau", fillA=["vêtement", "vetement"],
      vfQ="Le produit est un téléphone.", vfC=1),
    q("006-q3", "fill", textQ="Que propose le vendeur ?",
      text=["D'autres tailles", "D'autres couleurs", "Une réparation"], textC=0,
      img=["Manteau", "Peinture", "Outil"], imgC=0,
      fillQ="Le vendeur propose d'autres _________.", fill="tailles",
      vfQ="Le vendeur propose d'autres couleurs.", vfC=1),
    q("006-q4", "vf", textQ="La cliente demande-t-elle un remboursement ?",
      text=["Oui", "Non", "On ne sait pas"], textC=0,
      img=["Argent", "Manteau", "Ticket"], imgC=0,
      fillQ="Elle voudrait un _________.", fill="remboursement",
      vfQ="La cliente demande un échange.", vfC=1),
    q("006-q5", "text", textQ="Que donne la cliente ?",
      text=["Le ticket de caisse", "Sa carte bancaire", "Son passeport"], textC=0,
      img=["Ticket", "Carte", "Passeport"], imgC=0,
      fillQ="Elle donne le ticket de _________.", fill="caisse",
      vfQ="La cliente donne sa carte bancaire.", vfC=1),
    q("006-q6", "fill", textQ="Pourquoi rapporte-t-elle le manteau ?",
      text=["Il ne lui va pas", "Il est trop cher", "Il est cassé"], textC=0,
      img=["Manteau", "Argent", "Outil"], imgC=0,
      fillQ="Le manteau ne lui _________ pas.", fill="va",
      vfQ="Le manteau ne va pas à la cliente.", vfC=0),
])

add_audio(7, [
    "Matthieu — Service après-vente, Matthieu à votre écoute.",
    "Client — Bonjour monsieur. Je vous appelle parce que j'ai acheté un téléphone portable sur votre site mais, depuis hier, il ne s'allume plus.",
    "Matthieu — D'accord. Pourriez-vous me donner la référence de la commande ?",
    "Client — Oui, c'est la commande VF3367Y.",
    "Matthieu — J'y suis. Il s'agit d'un smartphone commandé le 20 août 2020 qui est encore sous garantie. Donc je vous envoie un bon de retour par e-mail, et vous pouvez retourner le smartphone au service réparation.",
    "Client — Très bien. Merci monsieur !",
], [
    q("007-q1", "text", textQ="Quel est le type de produit ?",
      text=["Un téléphone portable", "Un ordinateur", "Un lave-linge"], textC=0,
      img=["Téléphone", "Ordinateur", "Machine"], imgC=0,
      fillQ="Le produit est un téléphone _________.", fill="portable",
      vfQ="Le client a un problème avec un lave-linge.", vfC=1),
    q("007-q2", "fill", textQ="Quelle est la raison de l'appel ?",
      text=["Il ne s'allume plus", "Il est trop cher", "Il est perdu"], textC=0,
      img=["Téléphone", "Argent", "Maison"], imgC=0,
      fillQ="Depuis hier, il ne s'_________ plus.", fill="allume",
      vfQ="Le téléphone ne s'allume plus.", vfC=0),
    q("007-q3", "image", textQ="Quelle est la référence de la commande ?",
      text=["VF3367Y", "GOS345", "XK840"], textC=0,
      img=["Ticket", "Téléphone", "Carte"], imgC=0,
      fillQ="La référence est _________.", fill="VF3367Y", fillA=["vf3367y"],
      vfQ="La référence est GOS345.", vfC=1),
    q("007-q4", "vf", textQ="Le produit est-il encore sous garantie ?",
      text=["Oui", "Non", "On ne sait pas"], textC=0,
      img=["Téléphone", "Calendrier", "Maison"], imgC=0,
      fillQ="Le smartphone est encore sous _________.", fill="garantie",
      vfQ="Le produit n'est plus sous garantie.", vfC=1),
    q("007-q5", "text", textQ="Que va recevoir le client par e-mail ?",
      text=["Un bon de retour", "Un nouveau téléphone", "Une facture"], textC=0,
      img=["Ordinateur", "Téléphone", "Ticket"], imgC=0,
      fillQ="Il reçoit un bon de _________ par e-mail.", fill="retour",
      vfQ="Le client doit retourner le smartphone au service réparation.", vfC=0),
    q("007-q6", "fill", textQ="Quand a été commandé le smartphone ?",
      text=["Le 20 août 2020", "Le 20 juillet 2020", "Hier"], textC=0,
      img=["Calendrier", "Téléphone", "Maison"], imgC=0,
      fillQ="Commandé le 20 _________ 2020.", fill="août", fillA=["aout"],
      vfQ="Le téléphone a été commandé le 20 août 2020.", vfC=0),
])

add_audio(8, [
    "Message — Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente d'un réfrigérateur et je voudrais vous poser quelques questions. De quelle couleur est le frigo ? Quelles sont ses dimensions ? Est-ce qu'il est encore sous garantie ? Je voudrais aussi savoir si vous proposez un service de livraison à domicile ou s'il faut venir le chercher. Vous pouvez m'appeler au 06.14.53.76.84. À bientôt !",
], [
    q("008-q1", "text", textQ="De quel appareil parle le message ?",
      text=["Un réfrigérateur", "Un lave-linge", "Un téléphone"], textC=0,
      img=["Frigo", "Machine", "Téléphone"], imgC=0,
      fillQ="L'annonce concerne un _________.", fill="réfrigérateur", fillA=["refrigerateur", "frigo"],
      vfQ="Le message concerne un lave-linge.", vfC=1),
    q("008-q2", "image", textQ="Quels thèmes sont abordés ?",
      text=["Couleur, dimensions, garantie, livraison", "Prix uniquement", "Couleur uniquement"], textC=0,
      img=["Frigo", "Argent", "Voiture"], imgC=0,
      fillQ="Elle demande les _________ du frigo.", fill="dimensions",
      vfQ="Elle pose des questions sur la couleur et la garantie.", vfC=0),
    q("008-q3", "fill", textQ="Quel numéro laisse-t-elle ?",
      text=["06 14 53 76 84", "06 18 14 33 11", "01 39 10 22 50"], textC=0,
      img=["Téléphone", "Carte", "Maison"], imgC=0,
      fillQ="Le numéro commence par _________.", fill="06",
      vfQ="Le numéro commence par 01.", vfC=1),
    q("008-q4", "vf", textQ="Demande-t-elle s'il y a une livraison à domicile ?",
      text=["Oui", "Non", "On ne sait pas"], textC=0,
      img=["Camion", "Frigo", "Maison"], imgC=0,
      fillQ="Elle demande un service de _________ à domicile.", fill="livraison",
      vfQ="Elle demande s'il y a une livraison à domicile.", vfC=0),
    q("008-q5", "text", textQ="Demande-t-elle le prix dans ce message ?",
      text=["Non", "Oui", "On ne sait pas"], textC=0,
      img=["Argent", "Frigo", "Téléphone"], imgC=0,
      fillQ="Elle ne demande pas le _________ dans ce message.", fill="prix",
      vfQ="Elle demande le prix du réfrigérateur.", vfC=1),
    q("008-q6", "fill", textQ="Que veut-elle savoir sur la garantie ?",
      text=["S'il est encore sous garantie", "Combien coûte la garantie", "Qui a vendu la garantie"], textC=0,
      img=["Ticket", "Frigo", "Calendrier"], imgC=0,
      fillQ="Est-ce qu'il est encore sous _________ ?", fill="garantie",
      vfQ="Elle demande si le frigo est encore sous garantie.", vfC=0),
])

# Continue with more audios in the same file via exec of additional data modules
print("Base E9.1 audios loaded:", sorted(AUDIOS.keys()))
Path("/tmp/express-a2-gen/audios_e91.json").write_text(
    json.dumps({str(k): v for k, v in AUDIOS.items()}, ensure_ascii=False, indent=2)
)
print("Wrote e91 json")
