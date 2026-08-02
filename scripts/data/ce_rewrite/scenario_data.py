#!/usr/bin/env python3
"""All CE scenario data for E9–E14 — unique genres per item."""
from __future__ import annotations

# Scenario = {"text": str, "questions": list[dict]}
# Questions use Q() format fields directly as dicts

def _q(tq, ok, w1, w2, fq, fill, vf, vc=0, fa=None, prof=False, transport=False):
    d = {"textQ": tq, "text": [ok, w1, w2], "textC": 0, "fillQ": fq, "fill": fill, "vfQ": vf, "vfC": vc}
    if fa: d["fillA"] = fa
    if prof: d["_prof"] = True
    if transport: d["_transport"] = True
    return d


def _sc(title, *paras, qs):
    return {"text": title + "\n\n" + "\n".join(paras), "questions": qs}


def _em(sender, subject, lines, qs):
    body = "\n\n".join([f"De : {sender}", f"Objet : {subject}", "Bonjour,", *lines, "Cordialement,", sender.split()[0]])
    return {"text": body, "questions": qs}


# ═══════════════════════════════════════════════════════════════════════════
# E9.1 — Faire des achats
# ═══════════════════════════════════════════════════════════════════════════

def e9_1_msg():
    return [
        _sc("Frip'Art — Brocante de printemps",
            "Le samedi 12 avril, la brocante Frip'Art investit la place du Marché de 8 h à 17 h. Plus de soixante exposants proposent vaisselle vintage, livres rares, vinyles et petits meubles restaurés.",
            "L'entrée est gratuite pour les visiteurs. Les exposants paient quinze euros pour un emplacement de trois mètres sur deux.",
            "Un service de restauration locale propose tartines et boissons chaudes de midi à quinze heures, sous le grand chapiteau blanc à l'est de la place.",
            "Pour vendre vos objets, inscrivez-vous avant le 5 avril sur le site fripart.fr ou à la mairie, bureau culturel, du mardi au vendredi.",
            qs=[_q("Quel jour a lieu la brocante ?", "Le samedi 12 avril", "Le dimanche 13 avril", "Le vendredi 11 avril", "La brocante a lieu le samedi 12 _________.", "avril", "La brocante est le samedi 12 avril.", 0),
                _q("Combien coûte l'emplacement pour un exposant ?", "Quinze euros", "Trente euros", "C'est gratuit", "Les exposants paient _________ euros.", "quinze", "L'emplacement coûte quinze euros.", 0, ["15"]),
                _q("Que peut-on manger sur place ?", "Des tartines et des boissons chaudes", "Un menu gastronomique", "Rien", "On propose tartines et boissons _________.", "chaudes", "Il y a un service de restauration.", 0),
                _q("Où se trouve le chapiteau ?", "À l'est de la place", "Au nord du parc", "Dans la mairie", "Le chapiteau est à l'______ de la place.", "est", "Le chapiteau est à l'est.", 0),
                _q("Jusqu'à quand faut-il s'inscrire pour vendre ?", "Avant le 5 avril", "Le jour même", "Après la brocante", "Inscrivez-vous avant le 5 _________.", "avril", "Il faut s'inscrire avant le 5 avril.", 0),
                _q("L'entrée est-elle payante ?", "Non, elle est gratuite", "Oui, cinq euros", "Oui, dix euros", "L'entrée est _________ pour les visiteurs.", "gratuite", "L'entrée est gratuite.", 0),
                _q("Combien d'exposants participent ?", "Plus de soixante", "Une dizaine", "Deux cents", "Plus de _________ exposants.", "soixante", "Il y a plus de soixante exposants.", 0, ["60"])]),
        _sc("PharmaVie — Semaine du bien-être",
            "Du 3 au 9 mars, votre pharmacie PharmaVie organise une semaine spéciale autour du sommeil et du stress.",
            "Chaque après-midi de 15 h à 18 h, une infirmière diplômée répond gratuitement à vos questions sur l'hygiène de vie. Aucun rendez-vous n'est nécessaire.",
            "Mercredi 6 mars à 18 h 30, le pharmacien anime une conférence de quarante-cinq minutes sur les plantes apaisantes. Places limitées : réservez au comptoir ou par téléphone.",
            "Toute la semaine, les compléments alimentaires de la marque NuitCalme sont à moins vingt pour cent. Offre non cumulable avec d'autres promotions en cours.",
            qs=[_q("Quel thème pour la semaine spéciale ?", "Le sommeil et le stress", "La nutrition sportive", "Les allergies printanières", "Une semaine autour du sommeil et du _________.", "stress", "Le thème est le sommeil et le stress.", 0),
                _q("Qui répond aux questions chaque après-midi ?", "Une infirmière diplômée", "Un médecin généraliste", "Un psychologue", "Une _________ diplômée répond à vos questions.", "infirmière", "Une infirmière répond aux questions.", 0, prof=True),
                _q("Faut-il prendre rendez-vous ?", "Non", "Oui, obligatoirement", "Seulement le mercredi", "Aucun rendez-vous n'est _________.", "nécessaire", "Il n'est pas nécessaire de prendre rendez-vous.", 0),
                _q("Quand a lieu la conférence ?", "Mercredi 6 mars à 18 h 30", "Lundi 3 mars à midi", "Samedi 9 mars à 10 h", "Mercredi 6 mars à 18 h _________.", "30", "La conférence est mercredi à 18 h 30.", 0),
                _q("Combien de temps dure la conférence ?", "Quarante-cinq minutes", "Une heure et demie", "Vingt minutes", "Une conférence de _________ minutes.", "quarante-cinq", "La conférence dure quarante-cinq minutes.", 0, ["45"]),
                _q("Quelle réduction sur NuitCalme ?", "Moins vingt pour cent", "Moins cinquante pour cent", "Aucune réduction", "Les produits sont à moins _________ pour cent.", "vingt", "La réduction est de vingt pour cent.", 0),
                _q("Comment réserver pour la conférence ?", "Au comptoir ou par téléphone", "Uniquement en ligne", "Par courrier", "Réservez au comptoir ou par _________.", "téléphone", "On peut réserver au comptoir ou par téléphone.", 0, ["telephone"])]),
    ]


ALL_SCENARIOS: dict = {}


def _build_all():
    """Build ALL_SCENARIOS from per-lesson builders."""
    from scenario_data_builders import BUILDERS
    for key, builder in BUILDERS.items():
        ALL_SCENARIOS[key] = builder()


try:
    from scenario_data_builders import BUILDERS
    for key, builder in BUILDERS.items():
        ALL_SCENARIOS[key] = builder()
except ImportError:
    pass
