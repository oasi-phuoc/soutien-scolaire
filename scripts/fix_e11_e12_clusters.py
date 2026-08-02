#!/usr/bin/env python3
"""Diversify remaining Mad-Libs CE slots 12/13 and email 15 in E11–E12."""
from __future__ import annotations

import re
from pathlib import Path

COMM = Path(__file__).resolve().parents[1] / "lib/curriculum/content/communication"


def Q(textQ, a, b, c, fillQ, fill, vfQ, vfC=0, textC=0, fillA=None):
    d = {
        "textQ": textQ,
        "text": [a, b, c],
        "textC": textC,
        "fillQ": fillQ,
        "fill": fill,
        "vfQ": vfQ,
        "vfC": vfC,
    }
    if fillA:
        d["fillA"] = fillA
    return d


def pool_inner(facts: list[dict], id_prefix: str = "ce") -> str:
    parts = []
    for i, f in enumerate(facts, 1):
        text_s = ", ".join(f'"{x}"' for x in f["text"])
        block = f"""  q({{
    id: "{id_prefix}-q{i}",
    textQ: "{f['textQ']}",
    text: [{text_s}],
    textC: {f['textC']},
    img: ["", "", ""],
    imgC: 0,
    fillQ: "{f['fillQ']}",
    fill: "{f['fill']}","""
        if f.get("fillA"):
            fa = ", ".join(f'"{x}"' for x in f["fillA"])
            block += f"\n    fillA: [{fa}],"
        block += f"""
    vfQ: "{f['vfQ']}",
    vfC: {f['vfC']},
  }}),"""
        parts.append(block)
    return "\n".join(parts)


def patch_const(src: str, const_name: str, new_text: str, new_pool_inner: str, pool_slug: str) -> str:
    pat_text = re.compile(rf"(const {const_name}\s*=\s*`)([^`]*)(`;)")
    if not pat_text.search(src):
        raise SystemExit(f"Missing {const_name}")
    src = pat_text.sub(rf"\g<1>{new_text}\g<3>", src, count=1)
    pool_name = const_name.replace("_TEXT", "_POOL")
    pat_pool = re.compile(
        rf'const {pool_name}\s*=\s*buildExpressPool\("[^"]+",\s*\[[\s\S]*?\]\);',
    )
    if not pat_pool.search(src):
        raise SystemExit(f"Missing pool {pool_name}")
    replacement = f'const {pool_name} = buildExpressPool("{pool_slug}", [\n{new_pool_inner}\n]);'
    return pat_pool.sub(replacement, src, count=1)


REPL: dict[tuple[str, str, str], tuple[str, list]] = {}

REPL[("11", "1", "12")] = (
    """Note collée sur le frigo — cours de cuisine

Papa,
Ce soir je ne mange pas à la maison : j'ai un atelier « sauces maison » à l'école de cuisine du Quai.
Ça commence à 18 h 45. La chef Amira demande d'apporter un tablier propre.
On goûte trois sauces : tomate, yaourt et vinaigrette.
Je rentre vers 21 h. Garde-moi une part de riz si tu peux !
Léa""",
    [
        Q("Où a lieu l'atelier ?", "À l'école de cuisine du Quai", "À la maison", "Au cinéma", "atelier à l'école de cuisine du _________.", "Quai", "L'atelier est à la maison.", 1),
        Q("À quelle heure commence l'atelier ?", "À 18 h 45", "À midi", "À 21 h", "Ça commence à _________ h 45.", "18", "Ça commence à 18 h 45.", 0),
        Q("Qui anime l'atelier ?", "La chef Amira", "Le père", "Un serveur", "La chef _________.", "Amira", "Amira anime l'atelier.", 0),
        Q("Que faut-il apporter ?", "Un tablier propre", "Un livre", "Un vélo", "apporter un _________ propre.", "tablier", "Il faut un tablier.", 0),
        Q("Combien de sauces goûte-t-on ?", "Trois", "Une", "Dix", "On goûte _________ sauces.", "trois", "On goûte trois sauces.", 0),
        Q("Qui a écrit la note ?", "Léa", "Amira", "Papa", "Signé : _________.", "Léa", "Léa a écrit la note.", 0),
    ],
)

REPL[("11", "1", "13")] = (
    """Article de blog — Mon premier marché

Hier matin, j'ai visité le marché de Vevey avec mon ami Samir.
Nous avons acheté des fraises, du fromage de chèvre et du pain complet.
Une productrice nous a expliqué comment choisir un melon bien mûr : il doit sentir bon près du pédoncule.
J'ai payé douze francs pour un panier de fruits.
Le prochain marché a lieu samedi prochain dès 7 h.
Si vous aimez cuisiner, venez !""",
    [
        Q("Où se trouve le marché ?", "À Vevey", "À Zurich", "À Paris", "marché de _________.", "Vevey", "Le marché est à Vevey.", 0),
        Q("Avec qui la personne est-elle allée ?", "Avec Samir", "Seule", "Avec Amira", "avec mon ami _________.", "Samir", "Elle est allée avec Samir.", 0),
        Q("Que faut-il vérifier pour un melon ?", "Il doit sentir bon", "Il doit être vert", "Il doit flotter", "il doit _________ bon.", "sentir", "Le melon doit sentir bon.", 0),
        Q("Combien a coûté le panier ?", "12 francs", "2 francs", "50 francs", "J'ai payé _________ francs.", "douze", "Le panier coûte 12 francs.", 0, fillA=["12"]),
        Q("Quand est le prochain marché ?", "Samedi prochain dès 7 h", "Lundi soir", "Dimanche à 20 h", "dès _________ h.", "7", "Le marché commence à 7 h.", 0),
        Q("Quels fruits ont-ils achetés ?", "Des fraises", "Des bananes seulement", "Rien", "acheté des _________.", "fraises", "Ils ont acheté des fraises.", 0),
    ],
)

REPL[("11", "2", "12")] = (
    """Message WhatsApp — club randonnée

Salut le groupe !
Dimanche on part pour une marche facile autour du lac de Bret.
Rendez-vous 9 h pile devant la gare de Puidoux. Train depuis Lausanne à 8 h 32.
Prévoyez de l'eau, un coupe-vent et de bonnes chaussures.
Le retour est prévu vers 13 h. Picnic libre sur l'herbe.
Répondez oui si vous venez. — Marc""",
    [
        Q("Quelle activité est proposée ?", "Une marche autour du lac", "Un cours de yoga", "Un concert", "marche facile autour du lac de _________.", "Bret", "C'est une marche.", 0),
        Q("Où est le rendez-vous ?", "Devant la gare de Puidoux", "Au cinéma", "Chez Marc", "devant la gare de _________.", "Puidoux", "RDV à Puidoux.", 0),
        Q("À quelle heure est le rendez-vous ?", "À 9 h", "À 13 h", "À 8 h 32", "Rendez-vous _________ h pile.", "9", "RDV à 9 h.", 0),
        Q("Que faut-il apporter ?", "De l'eau et un coupe-vent", "Un costume", "Rien", "Prévoyez de l'_________.", "eau", "Il faut de l'eau.", 0),
        Q("Qui organise ?", "Marc", "Léa", "Amira", "— _________.", "Marc", "Marc organise.", 0),
        Q("Quand a lieu la sortie ?", "Dimanche", "Lundi", "Vendredi soir", "_________ on part.", "Dimanche", "C'est dimanche.", 0),
    ],
)

REPL[("11", "2", "13")] = (
    """Affiche — Atelier réparation de vélos

La médiathèque de Nyon propose samedi 17 mai, de 14 h à 17 h, un atelier gratuit pour réparer votre vélo.
Un mécanicien bénévole, M. Ortega, apporte les outils.
Places limitées à douze personnes. Inscription à l'accueil avant jeudi.
Apportez votre vélo et une vieille chambre à air si possible.
Enfants accompagnés bienvenus.""",
    [
        Q("Où a lieu l'atelier ?", "À la médiathèque de Nyon", "À la gare", "À l'hôpital", "médiathèque de _________.", "Nyon", "À Nyon.", 0),
        Q("Quel jour ?", "Samedi 17 mai", "Lundi", "Dimanche", "propose _________ 17 mai.", "samedi", "C'est samedi.", 0),
        Q("Combien de places ?", "Douze", "Deux", "Cent", "limitées à _________ personnes.", "douze", "12 places.", 0, fillA=["12"]),
        Q("Qui aide à réparer ?", "M. Ortega", "Mme Morel", "Léa", "mécanicien bénévole, M. _________.", "Ortega", "M. Ortega aide.", 0),
        Q("Jusqu'à quand s'inscrire ?", "Avant jeudi", "Après samedi", "En septembre", "Inscription à l'accueil avant _________.", "jeudi", "Avant jeudi.", 0),
        Q("L'atelier est-il payant ?", "Non, il est gratuit", "Oui, 50 francs", "Oui, 6 CHF", "atelier _________.", "gratuit", "C'est gratuit.", 0),
    ],
)

REPL[("11", "3", "12")] = (
    """SMS entre amis — cinéma

Coucou Nina !
Tu aimes les films d'aventure ? Il y a « La Rivière » ce soir à 20 h 10 au Pathé Flon.
Les places coûtent 16 francs. On peut manger une pizza avant au restaurant Luigi (19 h).
Si tu préfères une comédie, dis-le-moi et on change.
Réponds vite ! Bisous, Tom""",
    [
        Q("Quel film est proposé ?", "La Rivière", "Titanic", "Un documentaire", "« La _________ »", "Rivière", "Le film s'appelle La Rivière.", 0),
        Q("À quelle heure commence le film ?", "À 20 h 10", "À 19 h", "À midi", "ce soir à _________ h 10.", "20", "À 20 h 10.", 0),
        Q("Combien coûte une place ?", "16 francs", "6 francs", "Gratuit", "coûtent _________ francs.", "16", "16 francs.", 0),
        Q("Où manger avant ?", "Au restaurant Luigi", "Chez Nina", "Au Pathé", "pizza avant au restaurant _________.", "Luigi", "Chez Luigi.", 0),
        Q("Qui écrit le SMS ?", "Tom", "Nina", "Luigi", "Bisous, _________.", "Tom", "Tom écrit.", 0),
        Q("Quel genre de film ?", "Aventure", "Horreur", "Western", "films d'_________.", "aventure", "Film d'aventure.", 0),
    ],
)

REPL[("11", "3", "13")] = (
    """Interview radio (extrait) — Mes goûts

Journaliste : Qu'est-ce que vous aimez faire le week-end, Inès ?
Inès : J'adore écouter du jazz et cuisiner des plats indiens.
Le samedi, je vais souvent au disquaire « Vinyl & Co » à Fribourg.
Je n'aime pas du tout les films d'horreur : je préfère les documentaires sur la nature.
Dimanche, je lis au parc ou je joue aux échecs avec mon frère.""",
    [
        Q("Qui est interviewée ?", "Inès", "Nina", "Tom", "week-end, _________ ?", "Inès", "Inès est interviewée.", 0),
        Q("Quelle musique aime-t-elle ?", "Le jazz", "Le rock seulement", "Aucune", "écouter du _________.", "jazz", "Elle aime le jazz.", 0),
        Q("Où va-t-elle le samedi ?", "Au disquaire Vinyl & Co", "Au cinéma Pathé", "À la piscine", "disquaire « Vinyl & _________ »", "Co", "Au disquaire.", 0),
        Q("Quels films n'aime-t-elle pas ?", "Les films d'horreur", "Les documentaires", "Les comédies", "n'aime pas du tout les films d'_________.", "horreur", "Elle n'aime pas l'horreur.", 0),
        Q("Que fait-elle le dimanche ?", "Elle lit ou joue aux échecs", "Elle travaille", "Elle voyage", "je _________ au parc", "lis", "Elle lit au parc.", 0),
        Q("Quelle cuisine prépare-t-elle ?", "Des plats indiens", "Des pizzas seulement", "Rien", "plats _________.", "indiens", "Cuisine indienne.", 0),
    ],
)

REPL[("11", "4", "12")] = (
    """Carte postale — vacances en Italie

Chère Mamie,
Nous sommes à Florence depuis lundi. Il fait 28 degrés !
Hier, nous avons visité le Duomo et mangé des glaces près du Ponte Vecchio.
Demain, train pour Rome à 9 h 15. Hôtel près de la gare Termini.
Je t'envoie une photo du jardin Boboli.
Gros bisous, Hugo (et Papa)""",
    [
        Q("Où est Hugo ?", "À Florence", "À Rome", "À Paris", "à _________ depuis lundi.", "Florence", "Hugo est à Florence.", 0),
        Q("Quelle température ?", "28 degrés", "10 degrés", "2 degrés", "Il fait _________ degrés.", "28", "Il fait 28°.", 0),
        Q("Que visiter hier ?", "Le Duomo", "La Tour Eiffel", "Rien", "visité le _________.", "Duomo", "Ils ont visité le Duomo.", 0),
        Q("Quand partent-ils pour Rome ?", "Demain à 9 h 15", "Hier", "Lundi soir", "train pour Rome à _________ h 15.", "9", "Train à 9 h 15.", 0),
        Q("À qui écrit-il ?", "À sa mamie", "À un collègue", "À un hôtel", "Chère _________.", "Mamie", "Il écrit à Mamie.", 0),
        Q("Où est l'hôtel à Rome ?", "Près de la gare Termini", "Sur la plage", "Au Duomo", "près de la gare _________.", "Termini", "Près de Termini.", 0),
    ],
)

REPL[("11", "4", "13")] = (
    """E-mail d'un camping — confirmation

De : Camping Les Pins
Objet : Réservation n° 4581

Bonjour Mme Petit,
Nous confirmons votre séjour du 12 au 19 juillet en emplacement tente (4 personnes).
Arrivée possible dès 14 h. Animaux interdits cette semaine (travaux).
Wifi gratuit près de l'accueil. Piscine ouverte de 10 h à 19 h.
Merci de payer le solde (180 CHF) à l'arrivée.
Bonne route !""",
    [
        Q("Quel est le numéro de réservation ?", "4581", "180", "12", "Réservation n° _________.", "4581", "N° 4581.", 0),
        Q("Quelles dates ?", "Du 12 au 19 juillet", "Un week-end", "Un mois", "du 12 au _________ juillet.", "19", "Jusqu'au 19.", 0),
        Q("Les animaux sont-ils acceptés ?", "Non, interdits cette semaine", "Oui, toujours", "Seulement les chats", "Animaux _________ cette semaine.", "interdits", "Animaux interdits.", 0),
        Q("Quand ouvre la piscine ?", "De 10 h à 19 h", "La nuit seulement", "Jamais", "Piscine ouverte de _________ h à 19 h.", "10", "Dès 10 h.", 0),
        Q("Quel montant reste à payer ?", "180 CHF", "4581 CHF", "Rien", "solde (_________ CHF)", "180", "180 CHF.", 0),
        Q("Type d'emplacement ?", "Tente pour 4 personnes", "Chalet luxe", "Chambre d'hôtel", "emplacement _________.", "tente", "Emplacement tente.", 0),
    ],
)

REPL[("12", "1", "12")] = (
    """SMS du laboratoire d'analyses

Bonjour M. Diallo,
Vos résultats d'analyse de sang sont prêts.
Vous pouvez les retirer demain, mercredi, entre 8 h et 11 h 30 au guichet B.
Apportez votre carte d'assurance et une pièce d'identité.
Pour les questions médicales, appelez votre médecin, pas le laboratoire.
Merci, Labo Santé Plus""",
    [
        Q("Qui reçoit le SMS ?", "M. Diallo", "Mme Petit", "Dr Morel", "Bonjour M. _________.", "Diallo", "M. Diallo.", 0),
        Q("Que faut-il retirer ?", "Les résultats d'analyse", "Des médicaments", "Un billet", "résultats d'analyse de _________.", "sang", "Analyses de sang.", 0),
        Q("Quel jour retirer ?", "Mercredi", "Lundi", "Samedi", "demain, _________.", "mercredi", "Mercredi.", 0),
        Q("À quel guichet ?", "Guichet B", "Guichet A", "Accueil hôpital", "au guichet _________.", "B", "Guichet B.", 0),
        Q("Que faut-il apporter ?", "Carte d'assurance et pièce d'identité", "Un cadeau", "Rien", "votre carte d'_________.", "assurance", "Carte d'assurance.", 0),
        Q("Qui a envoyé le message ?", "Labo Santé Plus", "Le cinéma", "Camping Les Pins", "Merci, _________.", "Labo Santé Plus", "Le labo.", 0),
    ],
)

REPL[("12", "1", "13")] = (
    """Brochure — Prévenir le mal de dos

Travaillez-vous longtemps assis ?
Toutes les heures, levez-vous deux minutes et étirez les épaules.
Placez l'écran à hauteur des yeux. Gardez les pieds à plat.
Le soir, une marche de quinze minutes aide le dos.
Si la douleur dure plus de trois jours, consultez un physiothérapeute.
Atelier gratuit jeudi 21 à 12 h 15 à la Maison de la santé.""",
    [
        Q("Que faire toutes les heures ?", "Se lever deux minutes", "Manger", "Dormir", "levez-vous _________ minutes", "deux", "Se lever 2 minutes.", 0),
        Q("Où placer l'écran ?", "À hauteur des yeux", "Par terre", "Derrière soi", "écran à hauteur des _________.", "yeux", "À hauteur des yeux.", 0),
        Q("Combien de temps marcher le soir ?", "Quinze minutes", "Deux heures", "Une minute", "marche de _________ minutes", "quinze", "15 minutes.", 0, fillA=["15"]),
        Q("Quand consulter ?", "Si douleur > 3 jours", "Jamais", "Chaque heure", "plus de _________ jours", "trois", "Après 3 jours.", 0, fillA=["3"]),
        Q("Quand est l'atelier ?", "Jeudi 21 à 12 h 15", "Lundi matin", "Dimanche", "jeudi 21 à _________ h 15", "12", "À 12 h 15.", 0),
        Q("Où est l'atelier ?", "Maison de la santé", "Gare", "Piscine", "à la Maison de la _________.", "santé", "Maison de la santé.", 0),
    ],
)

REPL[("12", "2", "12")] = (
    """Story Instagram — premier jogging

Aujourd'hui j'ai couru 3 km au bord du Rhône sans m'arrêter.
Départ 6 h 40 pour éviter la chaleur. Temps : 22 minutes.
J'écoute une playlist lente les premiers kilomètres.
Objectif de la semaine : quatre sorties. Qui vient mercredi soir ?
Hashtag running Genève — compte sara.bouge""",
    [
        Q("Quelle distance a-t-elle courue ?", "3 km", "10 km", "100 m", "couru _________ km", "3", "3 km.", 0),
        Q("À quelle heure est-elle partie ?", "À 6 h 40", "À midi", "À 22 h", "Départ _________ h 40", "6", "À 6 h 40.", 0),
        Q("Combien de temps ?", "22 minutes", "2 heures", "5 minutes", "Temps : _________ minutes.", "22", "22 minutes.", 0),
        Q("Quel est l'objectif de la semaine ?", "Quatre sorties", "Une sortie", "Rien", "_________ sorties.", "quatre", "4 sorties.", 0, fillA=["4"]),
        Q("Où a-t-elle couru ?", "Au bord du Rhône", "En montagne", "Sur un stade couvert seulement", "au bord du _________.", "Rhône", "Au bord du Rhône.", 0),
        Q("Qui publie ?", "Sara (sara.bouge)", "Marc", "Inès", "compte sara._________", "bouge", "Sara.", 0),
    ],
)

REPL[("12", "2", "13")] = (
    """Règlement — salle de sport FitLake

1. Chaussures de sport propres obligatoires.
2. Remettre les haltères après usage.
3. Réservation des vélos en salle : 45 minutes max.
4. Douches fermées le mardi matin (entretien) jusqu'à 11 h.
5. Cours de yoga : lundi et jeudi à 7 h 30 — inscription la veille.
Questions ? Accueil ou fitlake@mail.ch""",
    [
        Q("Que faut-il porter ?", "Chaussures de sport propres", "Des sandales", "Rien", "Chaussures de sport _________ obligatoires.", "propres", "Chaussures propres.", 0),
        Q("Durée max vélo en salle ?", "45 minutes", "2 heures", "5 minutes", "_________ minutes max.", "45", "45 min.", 0),
        Q("Quand les douches sont fermées ?", "Mardi matin jusqu'à 11 h", "Toujours", "Le dimanche seulement", "fermées le _________ matin", "mardi", "Mardi matin.", 0),
        Q("Quand a lieu le yoga ?", "Lundi et jeudi à 7 h 30", "Samedi soir", "Chaque jour à midi", "lundi et jeudi à _________ h 30", "7", "À 7 h 30.", 0),
        Q("Quand s'inscrire au yoga ?", "La veille", "Après le cours", "Dans un an", "inscription la _________.", "veille", "La veille.", 0),
        Q("Comment contacter la salle ?", "fitlake@mail.ch", "Par fax seulement", "Impossible", "ou _________.", "fitlake@mail.ch", "Par e-mail.", 0),
    ],
)

REPL[("12", "3", "12")] = (
    """Liste de courses annotée — semaine saine

Légumes : brocolis, carottes, épinards (bio si possible)
Protéines : lentilles, œufs, poisson mercredi
Féculents : riz complet, pain complet
Éviter : chips, sodas, gâteaux industriels
Budget max : 80 francs. Magasin : Coop (promo légumes jusqu'à mardi).
Recette du soir : curry de lentilles (25 min).""",
    [
        Q("Quel magasin ?", "Coop", "Pathé", "FitLake", "Magasin : _________.", "Coop", "Coop.", 0),
        Q("Budget maximum ?", "80 francs", "8 francs", "800 francs", "Budget max : _________ francs.", "80", "80 francs.", 0),
        Q("Recette du soir ?", "Curry de lentilles", "Pizza", "Rien", "curry de _________.", "lentilles", "Curry de lentilles.", 0),
        Q("Que faut-il éviter ?", "Chips et sodas", "Légumes", "Œufs", "Éviter : _________.", "chips", "Éviter les chips.", 0),
        Q("Quel jour pour le poisson ?", "Mercredi", "Aucun jour", "Chaque matin", "poisson _________.", "mercredi", "Poisson mercredi.", 0),
        Q("Quel pain ?", "Pain complet", "Pain de mie sucré seulement", "Aucun", "pain _________.", "complet", "Pain complet.", 0),
    ],
)

REPL[("12", "3", "13")] = (
    """Message vocal (transcription) — nutritionniste

« Bonjour, ici Claire Dupont, nutritionniste.
Je vous rappelle votre rendez-vous vendredi à 15 h 20 au cabinet rue Pestalozzi 3.
Apportez un carnet avec ce que vous mangez pendant trois jours.
Buvez au moins 1,5 litre d'eau par jour cette semaine.
Pour annuler, merci d'appeler avant jeudi 12 h. À bientôt ! »""",
    [
        Q("Qui appelle ?", "Claire Dupont", "M. Diallo", "Sara", "ici Claire _________.", "Dupont", "Claire Dupont.", 0),
        Q("Quelle est sa profession ?", "Nutritionniste", "Dentiste", "Professeur", "Dupont, _________.", "nutritionniste", "Nutritionniste.", 0),
        Q("Quand est le rendez-vous ?", "Vendredi à 15 h 20", "Lundi à 8 h", "Dimanche", "vendredi à _________ h 20", "15", "À 15 h 20.", 0),
        Q("Que faut-il apporter ?", "Un carnet alimentaire", "Un vélo", "Des chips", "Apportez un _________.", "carnet", "Un carnet.", 0),
        Q("Combien d'eau par jour ?", "1,5 litre", "10 litres", "Rien", "au moins _________ litre", "1,5", "1,5 litre.", 0, fillA=["1.5"]),
        Q("Adresse du cabinet ?", "Rue Pestalozzi 3", "Gare", "Parc", "rue _________ 3", "Pestalozzi", "Rue Pestalozzi 3.", 0),
    ],
)

REPL[("12", "4", "12")] = (
    """Avis Google — quartier des Grottes

Note 4/5. « J'habite ici depuis deux ans. Beaucoup de commerces à pied, tram 14 à 3 minutes.
Le parc Saint-Jean est parfait pour les enfants le dimanche.
Point faible : bruyant le vendredi soir près des bars.
Le marché du samedi matin vaut vraiment le détour (fromages et fleurs). »
— Avis de Nadia, juillet""",
    [
        Q("Quel tram est proche ?", "Le tram 14", "Le tram 1 seulement", "Aucun", "tram _________ à 3 minutes.", "14", "Tram 14.", 0),
        Q("Quel parc ?", "Saint-Jean", "Central Park", "Aucun", "parc _________.", "Saint-Jean", "Parc Saint-Jean.", 0),
        Q("Quel point faible ?", "Le bruit le vendredi soir", "Pas de commerces", "Pas de tram", "bruyant le _________ soir", "vendredi", "Bruyant vendredi.", 0),
        Q("Quand est le marché ?", "Samedi matin", "Lundi soir", "Jamais", "marché du _________ matin", "samedi", "Samedi matin.", 0),
        Q("Qui a écrit l'avis ?", "Nadia", "Claire", "Marc", "Avis de _________.", "Nadia", "Nadia.", 0),
        Q("Depuis combien de temps habite-t-elle ici ?", "Deux ans", "Deux jours", "Vingt ans", "depuis _________ ans.", "deux", "Depuis 2 ans.", 0, fillA=["2"]),
    ],
)

REPL[("12", "4", "13")] = (
    """Alerte ville — travaux

Dès lundi 5 mai, la rue de la Gare sera fermée aux voitures jusqu'au 20 mai.
Piétons : passage sécurisé côté nord. Bus 25 déviés via avenue du Théâtre.
Livraisons commerçants : entre 6 h et 9 h seulement.
Infos : 0848 123 123 ou ville-travaux.ch
Merci de votre compréhension — Service de la mobilité""",
    [
        Q("Quelle rue est fermée ?", "Rue de la Gare", "Avenue du Théâtre", "Aucune", "la rue de la _________ sera fermée", "Gare", "Rue de la Gare.", 0),
        Q("Jusqu'à quelle date ?", "20 mai", "5 mai seulement", "Décembre", "jusqu'au _________ mai.", "20", "Jusqu'au 20 mai.", 0),
        Q("Quel bus est dévié ?", "Bus 25", "Bus 1", "Aucun", "Bus _________ déviés", "25", "Bus 25.", 0),
        Q("Horaires livraisons ?", "Entre 6 h et 9 h", "La nuit seulement", "24 h/24", "entre _________ h et 9 h", "6", "De 6 h à 9 h.", 0),
        Q("Où passent les piétons ?", "Côté nord", "Sur l'autoroute", "Interdit", "passage sécurisé côté _________.", "nord", "Côté nord.", 0),
        Q("Qui signe ?", "Service de la mobilité", "Un restaurant", "Une école", "— Service de la _________.", "mobilité", "Service mobilité.", 0),
    ],
)

REPL[("12", "5", "12")] = (
    """Journal intime — pause digitale

Mardi. Aujourd'hui j'ai éteint mon téléphone de 20 h à 22 h.
Au début, c'était difficile. Puis j'ai lu dix pages et préparé une tisane.
Je dors mieux quand je regarde moins d'écrans le soir.
Objectif : trois soirs sans téléphone cette semaine.
Demain, cours de respiration à la bibliothèque à 18 h 30.""",
    [
        Q("Combien de temps téléphone éteint ?", "De 20 h à 22 h", "Toute la journée", "Jamais", "de _________ h à 22 h", "20", "De 20 h à 22 h.", 0),
        Q("Qu'a-t-elle fait ensuite ?", "Lu et préparé une tisane", "Regardé la télé", "Couru 10 km", "préparé une _________.", "tisane", "Une tisane.", 0),
        Q("Objectif de la semaine ?", "Trois soirs sans téléphone", "Acheter un téléphone", "Rien", "_________ soirs sans téléphone", "trois", "3 soirs.", 0, fillA=["3"]),
        Q("Quel cours demain ?", "Respiration", "Cuisine", "Anglais", "cours de _________.", "respiration", "Cours de respiration.", 0),
        Q("Où est le cours ?", "À la bibliothèque", "À la piscine", "En ligne seulement", "à la _________.", "bibliothèque", "Bibliothèque.", 0),
        Q("À quelle heure le cours ?", "À 18 h 30", "À 6 h", "À minuit", "à _________ h 30", "18", "À 18 h 30.", 0),
    ],
)

REPL[("12", "5", "13")] = (
    """Flyer — Soirée bien-être gratuite

Mercredi 14 juin, 19 h–21 h, salle polyvalente d'Yverdon.
Au programme : étirements doux (30 min), conseils sommeil, tisanes offertes.
Animé par l'infirmière scolaire Mme Benali.
Entrée libre, sans inscription. Places assises limitées.
Venez confortables (survêtement OK). Pas de vente de produits.""",
    [
        Q("Quel jour ?", "Mercredi 14 juin", "Lundi", "Dimanche", "_________ 14 juin", "Mercredi", "Mercredi.", 0),
        Q("Où ?", "Salle polyvalente d'Yverdon", "Hôpital", "Gare", "salle polyvalente d'_________.", "Yverdon", "À Yverdon.", 0),
        Q("Qui anime ?", "Mme Benali", "M. Ortega", "Nadia", "infirmière scolaire Mme _________.", "Benali", "Mme Benali.", 0),
        Q("Faut-il s'inscrire ?", "Non, entrée libre", "Oui, obligatoire", "Par e-mail seulement", "Entrée _________.", "libre", "Entrée libre.", 0),
        Q("Que boit-on ?", "Des tisanes offertes", "Du soda", "Rien", "_________ offertes.", "tisanes", "Tisanes offertes.", 0),
        Q("Horaires ?", "19 h–21 h", "8 h–9 h", "Minuit", "_________ h–21 h", "19", "De 19 h à 21 h.", 0),
    ],
)

EMAIL15: dict[tuple[str, str], tuple[str, list]] = {
    ("11", "1"): (
        """De : Marché des Saveurs
Objet : Atelier confitures annulé

Bonjour,
L'atelier confitures de dimanche est annulé : la cuisinière est malade.
Nous proposons une nouvelle date : samedi 28 septembre à 10 h.
Si cette date ne vous convient pas, répondez pour un remboursement complet (25 CHF).
Merci de votre compréhension.
L'équipe du Marché des Saveurs""",
        [
            Q("Pourquoi l'atelier est-il annulé ?", "La cuisinière est malade", "Il pleut", "Trop cher", "la cuisinière est _________.", "malade", "Cuisinière malade.", 0),
            Q("Nouvelle date ?", "Samedi 28 septembre", "Dimanche", "Lundi 1er", "samedi _________ septembre", "28", "28 septembre.", 0),
            Q("À quelle heure ?", "À 10 h", "À 20 h", "À minuit", "à _________ h.", "10", "À 10 h.", 0),
            Q("Montant remboursable ?", "25 CHF", "250 CHF", "Gratuit dès le départ", "remboursement complet (_________ CHF)", "25", "25 CHF.", 0),
            Q("Qui envoie ?", "Marché des Saveurs", "La mairie seule", "Un hôpital", "équipe du Marché des _________.", "Saveurs", "Marché des Saveurs.", 0),
            Q("Que faire si la date ne convient pas ?", "Demander un remboursement", "Venir quand même dimanche", "Rien", "répondez pour un _________.", "remboursement", "Demander remboursement.", 0),
        ],
    ),
    ("11", "2"): (
        """De : Club Escalade Jura
Objet : Sortie falaise — liste complète

Bonjour à toutes et à tous,
La liste pour la sortie falaise du 3 octobre est complète (16 places).
Prochaine session initiation : dimanche 12 octobre, parking de St-Ursanne à 8 h 45.
Matériel fourni sauf chaussures d'approche.
Adhésion club obligatoire (40 CHF/an).
Sportivement, Karim""",
        [
            Q("Pourquoi pas de place le 3 octobre ?", "Liste complète (16 places)", "Mauvais temps annoncé", "Club fermé", "_________ places", "16", "16 places.", 0),
            Q("Prochaine date ?", "Dimanche 12 octobre", "3 octobre", "Janvier", "dimanche _________ octobre", "12", "12 octobre.", 0),
            Q("Lieu de rendez-vous ?", "Parking de St-Ursanne", "Gare de Genève", "Piscine", "parking de _________.", "St-Ursanne", "St-Ursanne.", 0),
            Q("Heure de RDV ?", "8 h 45", "16 h", "Midi", "à _________ h 45", "8", "À 8 h 45.", 0),
            Q("Prix adhésion ?", "40 CHF par an", "Gratuit", "400 CHF", "_________ CHF/an", "40", "40 CHF.", 0),
            Q("Qui signe ?", "Karim", "Léa", "Nadia", "Sportivement, _________.", "Karim", "Karim.", 0),
        ],
    ),
    ("11", "3"): (
        """De : Médiathèque Rivage
Objet : Votre liste de coups de cœur

Bonjour Alex,
Voici trois suggestions selon vos goûts :
1) Roman : « Vent du sud » (facile A2)
2) BD : « Les Voyages de Mina »
3) Podcast : « Goûts et couleurs » (20 min)
Tous disponibles jusqu'au 30 juin. Prolongation possible une fois en ligne.
Bonne lecture !
Sophie, bibliothécaire""",
        [
            Q("Combien de suggestions ?", "Trois", "Dix", "Une", "_________ suggestions", "trois", "3 suggestions.", 0, fillA=["3"]),
            Q("Quel roman ?", "Vent du sud", "Les Voyages de Mina", "Aucun", "Roman : « Vent du _________ »", "sud", "Vent du sud.", 0),
            Q("Jusqu'à quand disponibles ?", "30 juin", "Demain", "Janvier", "jusqu'au _________ juin", "30", "30 juin.", 0),
            Q("Qui écrit ?", "Sophie", "Alex", "Karim", "_________, bibliothécaire", "Sophie", "Sophie.", 0),
            Q("Durée du podcast ?", "20 min", "2 h", "5 min", "_________ min", "20", "20 min.", 0),
            Q("Peut-on prolonger ?", "Oui, une fois en ligne", "Non jamais", "Seulement par téléphone", "Prolongation possible _________ fois", "une", "Une fois.", 0),
        ],
    ),
    ("11", "4"): (
        """De : Agence Voyages Clair
Objet : Modification de vol — vacances Nice

Bonjour Mme Rossi,
Votre vol Genève–Nice du 8 août part finalement à 15 h 05 (au lieu de 11 h 20).
Arrivez à l'aéroport 2 heures avant. Porte prévue : B12.
Hôtel « Les Palmiers » inchangé (check-in 16 h).
Désolé pour ce changement. Un voucher boisson vous attend au comptoir.
Cordialement, Agence Clair""",
        [
            Q("Nouvelle heure de vol ?", "15 h 05", "11 h 20", "16 h", "part finalement à _________ h 05", "15", "À 15 h 05.", 0),
            Q("Destination ?", "Nice", "Rome", "Paris", "Genève–_________", "Nice", "Nice.", 0),
            Q("Porte prévue ?", "B12", "A1", "C99", "Porte prévue : _________.", "B12", "B12.", 0),
            Q("Nom de l'hôtel ?", "Les Palmiers", "Termini", "FitLake", "Hôtel « Les _________ »", "Palmiers", "Les Palmiers.", 0),
            Q("Check-in hôtel ?", "16 h", "11 h 20", "6 h", "check-in _________ h", "16", "À 16 h.", 0),
            Q("Date du vol ?", "8 août", "30 juin", "3 octobre", "du _________ août", "8", "8 août.", 0),
        ],
    ),
    ("12", "1"): (
        """De : Clinique du Parc
Objet : Préparation avant radio

Bonjour,
Pour votre radio des poumons mardi à 9 h 40 :
- venez à jeun (rien manger depuis 6 h)
- retirez colliers et boucles d'oreilles
- durée approximative : 20 minutes
En cas de grossesse possible, prévenez immédiatement.
Accueil imagerie, bâtiment C.
Clinique du Parc""",
        [
            Q("Quel examen ?", "Radio des poumons", "Dentiste", "Analyse de sang", "radio des _________.", "poumons", "Radio des poumons.", 0),
            Q("À quelle heure ?", "9 h 40", "16 h", "Midi", "mardi à _________ h 40", "9", "À 9 h 40.", 0),
            Q("Faut-il être à jeun ?", "Oui", "Non", "Seulement le soir", "venez à _________.", "jeun", "À jeun.", 0),
            Q("Durée ?", "Environ 20 minutes", "2 heures", "Toute la journée", "_________ minutes", "20", "20 minutes.", 0),
            Q("Quel bâtiment ?", "Bâtiment C", "Bâtiment A", "Parking", "bâtiment _________.", "C", "Bâtiment C.", 0),
            Q("Que retirer ?", "Colliers et boucles d'oreilles", "Ses chaussures seulement", "Rien", "retirez _________ et boucles", "colliers", "Colliers.", 0),
        ],
    ),
    ("12", "2"): (
        """De : Coach Léa
Objet : Plan de la semaine — reprise

Salut !
Semaine légère après ta blessure :
Lun : marche 30 min. Mer : vélo doux 20 min. Ven : piscine 15 min (jambes).
Pas de course avant le contrôle du 18.
Bois bien et dors 8 heures si possible.
Tu gères — Léa""",
        [
            Q("Qui écrit ?", "Coach Léa", "Un médecin inconnu", "La mairie", "— _________.", "Léa", "Léa.", 0),
            Q("Activité lundi ?", "Marche 30 min", "Course 10 km", "Rien", "marche _________ min", "30", "Marche 30 min.", 0),
            Q("Activité mercredi ?", "Vélo doux 20 min", "Football", "Yoga seulement", "vélo doux _________ min", "20", "Vélo 20 min.", 0),
            Q("Course autorisée ?", "Non, pas avant le 18", "Oui tout de suite", "Seulement le lundi", "Pas de course avant le contrôle du _________.", "18", "Pas avant le 18.", 0),
            Q("Sommeil conseillé ?", "8 heures", "2 heures", "14 heures", "dors _________ heures", "8", "8 heures.", 0),
            Q("Piscine quel jour ?", "Vendredi", "Mardi", "Dimanche", "_________ : piscine", "Ven", "Vendredi.", 0),
        ],
    ),
    ("12", "3"): (
        """De : Cantine scolaire Les Sources
Objet : Menu sans gluten — semaine 22

Bonjour chers parents,
Menu sans gluten disponible tous les jours cette semaine.
Lundi : riz et poulet. Mercredi : gratin de légumes. Vendredi : poisson et quinoa.
Signaler les allergies nouvelles avant mardi 10 h au secrétariat.
Tarif inchangé : 7,50 CHF le repas.
Merci — Cantine Les Sources""",
        [
            Q("Quel régime est prévu ?", "Sans gluten", "Sans légumes", "Uniquement dessert", "Menu sans _________.", "gluten", "Sans gluten.", 0),
            Q("Menu du lundi ?", "Riz et poulet", "Pizza", "Rien", "riz et _________.", "poulet", "Riz et poulet.", 0),
            Q("Menu du vendredi ?", "Poisson et quinoa", "Poulet seulement", "Sandwich", "poisson et _________.", "quinoa", "Poisson et quinoa.", 0),
            Q("Prix du repas ?", "7,50 CHF", "75 CHF", "Gratuit", "_________ CHF le repas", "7,50", "7,50 CHF.", 0, fillA=["7.50"]),
            Q("Avant quand signaler allergies ?", "Mardi 10 h", "Vendredi soir", "Dans un mois", "avant mardi _________ h", "10", "Mardi 10 h.", 0),
            Q("Qui envoie ?", "Cantine Les Sources", "Un cinéma", "FitLake", "Cantine Les _________.", "Sources", "Cantine Les Sources.", 0),
        ],
    ),
    ("12", "4"): (
        """De : Association Quartier Vert
Objet : Atelier compost — places restantes

Bonjour,
Il reste 5 places pour l'atelier compost du samedi 9 h 30 au jardin partagé (impasse des Lilas).
Durée 90 minutes. Apportez des gants.
Enfants dès 8 ans bienvenus avec un adulte.
Inscription : répondre à cet e-mail avant vendredi midi.
À bientôt, Association Quartier Vert""",
        [
            Q("Combien de places restantes ?", "5", "50", "Aucune", "Il reste _________ places", "5", "5 places.", 0),
            Q("Quand ?", "Samedi 9 h 30", "Lundi 20 h", "Dimanche", "samedi _________ h 30", "9", "À 9 h 30.", 0),
            Q("Où ?", "Jardin partagé, impasse des Lilas", "Hôpital", "Gare", "impasse des _________.", "Lilas", "Impasse des Lilas.", 0),
            Q("Durée ?", "90 minutes", "10 minutes", "5 heures", "Durée _________ minutes", "90", "90 min.", 0),
            Q("Que apporter ?", "Des gants", "Un piano", "Rien", "Apportez des _________.", "gants", "Des gants.", 0),
            Q("Date limite inscription ?", "Vendredi midi", "Après l'atelier", "Dans un an", "avant _________ midi", "vendredi", "Vendredi midi.", 0),
        ],
    ),
    ("12", "5"): (
        """De : Appli ZenMinute
Objet : Votre série « 7 soirs calmes »

Bonjour,
Vous avez terminé 4 soirs sur 7 du programme « soirs calmes ».
Ce soir : respiration 4-7-8 (8 minutes) + étirements du cou.
Rappel : mode avion recommandé après 21 h.
Statistiques : votre temps d'écran a baissé de 18 % cette semaine. Bravo !
L'équipe ZenMinute""",
        [
            Q("Combien de soirs terminés ?", "4 sur 7", "7 sur 7", "0", "terminé _________ soirs sur 7", "4", "4 sur 7.", 0),
            Q("Durée respiration ce soir ?", "8 minutes", "1 minute", "1 heure", "(_________ minutes)", "8", "8 minutes.", 0),
            Q("Après quelle heure mode avion ?", "21 h", "12 h", "6 h", "après _________ h", "21", "Après 21 h.", 0),
            Q("Baisse du temps d'écran ?", "18 %", "80 %", "1 %", "baissé de _________ %", "18", "18 %.", 0),
            Q("Nom du programme ?", "7 soirs calmes", "Course 10 km", "Menu sans gluten", "programme « soirs _________ »", "calmes", "Soirs calmes.", 0),
            Q("Qui envoie ?", "ZenMinute", "La clinique", "Karim", "équipe _________.", "ZenMinute", "ZenMinute.", 0),
        ],
    ),
}


def main() -> None:
    for mod in ("11", "12"):
        path = COMM / f"express-e{mod}-cpe.ts"
        src = path.read_text(encoding="utf-8")
        lessons = ["1", "2", "3", "4"] if mod == "11" else ["1", "2", "3", "4", "5"]
        for les in lessons:
            for slot in ("12", "13"):
                text, facts = REPL[(mod, les, slot)]
                const = f"E{mod}_{les}_CE_{slot}_TEXT"
                src = patch_const(
                    src,
                    const,
                    text,
                    pool_inner(facts, "ce"),
                    f"e{mod}-{les}-ce-{slot}",
                )
        path.write_text(src, encoding="utf-8")
        print(f"patched {path.name}")

    for mod in ("11", "12"):
        path = COMM / f"express-e{mod}-email.ts"
        src = path.read_text(encoding="utf-8")
        lessons = ["1", "2", "3", "4"] if mod == "11" else ["1", "2", "3", "4", "5"]
        for les in lessons:
            text, facts = EMAIL15[(mod, les)]
            const = f"E{mod}_{les}_CE_EMAIL_15_TEXT"
            src = patch_const(
                src,
                const,
                text,
                pool_inner(facts, "cem"),
                f"e{mod}-{les}-ce-email-15",
            )
        path.write_text(src, encoding="utf-8")
        print(f"patched {path.name}")


if __name__ == "__main__":
    main()
