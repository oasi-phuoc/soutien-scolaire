"""Programmatic content generation for remaining E5–E8 lessons."""
from __future__ import annotations

from content_all import EXTRA_CE, EXTRA_CE_EMAIL, EXTRA_PE, EXTRA_PE_EMAIL, EXTRA_PO, _f, ce, pe, pee
from emit import make_po
from questions import facts_to_questions

# Re-import roles
from content_all import MED, PAT, SEC, PHARM, CLI, TOUR, PASS, EMP, VOY, REC, AMI_A, AMI_B, PARENT, AGENT, MON, VIS


def gen_ce_from_template(lesson_prefix: str, theme: str, variants: list[tuple[str, list]]) -> list:
    return [ce(text, facts) for text, facts in variants]


def gen_po_batch(prefix: str, items: list[tuple]) -> list:
    out = []
    for i, (title, ctx, ra, rb, exchanges) in enumerate(items, 11):
        out.append(make_po(f"{prefix}-po-{i}", title, ctx, ra, rb, exchanges))
    return out


def gen_pe_batch(prefix: str, items: list[tuple]) -> list:
    return [pe(f"{prefix}-pe-{i}", t, s, ins, pts) for i, (t, s, ins, pts) in enumerate(items, 11)]


def gen_email_ce_batch(theme: str, count: int = 19) -> list:
    out = []
    for i in range(2, count + 2):
        out.append({
            "text": f"De : Service {theme}\nObjet : Message {i}\n\nBonjour,\nCeci est un message d'information n°{i} sur le thème « {theme} ».\nMerci de lire attentivement ce texte.\nPour plus d'informations, contactez-nous par téléphone.\nCordialement,\nLe service",
            "questions": facts_to_questions([
                _f("Quel est le thème du message ?", theme, "Sport", "Cuisine", f"Le thème est « {theme} ».", theme.split()[0].lower() if theme else "info", f"Le message parle de {theme}."),
                _f("Comment contacter le service ?", "Par téléphone", "Par courrier seulement", "En personne seulement", "Contactez-nous par _________.", "téléphone", "On peut contacter le service par téléphone.", fillA=["telephone"]),
                _f("Le message est-il informatif ?", "Oui", "Non, c'est une blague", "C'est une publicité", "Merci de lire _________ ce texte.", "attentivement", "Le message demande de lire attentivement."),
                _f("Qui signe le message ?", "Le service", "Un enfant", "Un animal", "L'e-mail est signé par le _________.", "service", "Le service signe le message."),
                _f("Faut-il répondre ?", "Pas obligatoirement", "Oui, toujours", "Non, jamais", "C'est un message d'_________.", "information", "Il faut toujours répondre.", vfC=1),
                _f("Le prix est-il indiqué ?", "Non", "Oui, clairement", "Oui, en annexe", "Le _________ n'est pas indiqué.", "prix", "Le prix est indiqué dans l'e-mail.", vfC=1),
            ]),
        })
    return out


def gen_pe_email_batch(prefix: str, theme: str, count: int = 10) -> list:
    out = []
    for i in range(11, 11 + count):
        out.append(pee(
            f"{prefix}-pee-{i}",
            f"Répondre — {theme} {i}",
            f"Vous recevez un e-mail sur le thème {theme}.",
            "Répondez à l'e-mail : remerciez, donnez les informations demandées et posez une question.",
            ["Votre réponse", "Les informations", "Une question"],
            "Contact",
            f"Question sur {theme}",
            f"Bonjour,\nJ'ai une question concernant {theme}. Pouvez-vous m'aider ?\nMerci,\nContact",
        ))
    return out


# ═══ E5.2 — Pharmacie ═══════════════════════════════════════════════════════

E5_2_CE_EXTRA = []
for i, (name, hours, close) in enumerate([
    ("Pharmacie de la Gare", "8 h à 20 h", "20"),
    ("Pharmacie du Lac", "7 h 30 à 19 h", "19"),
    ("Pharmacie Centrale", "9 h à 18 h", "18"),
    ("Pharmacie des Alpes", "8 h à 19 h 30", "19 h 30"),
    ("Pharmacie du Marché", "8 h à 18 h", "18"),
    ("Pharmacie Saint-Michel", "8 h 30 à 19 h", "19"),
    ("Pharmacie Bellevue", "9 h à 20 h", "20"),
    ("Pharmacie du Parc", "8 h à 17 h 30", "17 h 30"),
    ("Pharmacie Nouvelle", "8 h à 19 h", "19"),
    ("Pharmacie Express", "7 h à 21 h", "21"),
    ("Pharmacie Familiale", "8 h 30 à 18 h 30", "18 h 30"),
    ("Pharmacie Santé", "9 h à 19 h", "19"),
    ("Pharmacie du Centre", "8 h à 20 h", "20"),
    ("Pharmacie Riviera", "8 h à 18 h", "18"),
    ("Pharmacie Mont-Blanc", "8 h 30 à 19 h 30", "19 h 30"),
    ("Pharmacie des Écoles", "8 h à 17 h", "17"),
    ("Pharmacie Verte", "9 h à 19 h 30", "19 h 30"),
    ("Pharmacie Populaire", "8 h à 20 h", "20"),
    ("Pharmacie du Village", "8 h 30 à 18 h", "18"),
], 1):
    E5_2_CE_EXTRA.append(ce(
        f"""{name} — Informations

La {name.lower()} est ouverte du lundi au samedi.
Horaires : de {hours}.
Vous avez une ordonnance ? Présentez-la au comptoir.
Sans ordonnance, le pharmacien vous conseille.
Contre la toux : sirop ou pastilles.
Contre le mal de tête : paracétamol.
Le dimanche, la pharmacie de garde est à la Gare.
Demandez toujours conseil au pharmacien.""",
        [
            _f("Quels jours la pharmacie est-elle ouverte ?", "Du lundi au samedi", "Tous les jours", "Seulement le lundi", "La pharmacie est ouverte du lundi au _________.", "samedi", "La pharmacie est ouverte du lundi au samedi."),
            _f("Que faire avec une ordonnance ?", "La présenter au comptoir", "La jeter", "La garder chez soi", "Présentez votre ordonnance au _________.", "comptoir", "Il faut présenter l'ordonnance au comptoir."),
            _f("Qui conseille sans ordonnance ?", "Le pharmacien", "Le médecin", "Le professeur", "Sans ordonnance, le _________ vous conseille.", "pharmacien", "Le pharmacien conseille sans ordonnance.", img=["pharmacien", "médecin", "professeur"], imgC=0),
            _f("Que prendre contre la toux ?", "Sirop ou pastilles", "Du chocolat", "De l'eau seulement", "Contre la toux : _________ ou pastilles.", "sirop", "On peut prendre du sirop contre la toux."),
            _f("Où est la pharmacie de garde le dimanche ?", "À la Gare", "À l'école", "À l'hôpital", "Le dimanche, la pharmacie de garde est à la _________.", "Gare", "La pharmacie de garde est à la Gare."),
            _f("Contre quoi prend-on du paracétamol ?", "Le mal de tête", "La faim", "Le sommeil", "Contre le mal de _________ : paracétamol.", "tête", "Le paracétamol est pour le mal de tête."),
            _f("Le prix des médicaments est-il indiqué ?", "Non", "Oui, pour tous", "Oui, en annexe", "Le _________ n'est pas indiqué dans ce texte.", "prix", "Le prix est indiqué dans le texte.", vfC=1),
        ],
    ))

E5_2_PO_EXTRA = gen_po_batch("e5-2", [
    ("Acheter du sirop", "Vous avez mal à la gorge.", PHARM, CLI, [
        ("Bonjour, je peux vous aider ?", "Bonjour, j'ai mal à la gorge. Vous avez un sirop ?"),
        ("Oui, voici un sirop pour la gorge.", "Je le prends comment ?"),
        ("Une cuillère matin et soir.", "D'accord. Il coûte combien ?"),
        ("Huit francs.", "Merci, je le prends."),
    ]),
    ("Sans ordonnance", "Vous avez mal à la tête.", PHARM, CLI, [
        ("Bonjour !", "Bonjour, j'ai mal à la tête. Je n'ai pas d'ordonnance."),
        ("Pas de problème. Du paracétamol, ça va ?", "Oui, s'il vous plaît."),
        ("Voici. Prenez un comprimé si besoin.", "Merci. Je peux en prendre deux ?"),
        ("Non, un seul à la fois.", "D'accord, merci beaucoup."),
    ]),
    ("Ordonnance du médecin", "Le médecin vous a donné une ordonnance.", PHARM, CLI, [
        ("Bonjour, vous avez une ordonnance ?", "Oui, voici. C'est pour des antibiotiques."),
        ("Très bien. Ça sera prêt dans dix minutes.", "Merci. Je dois attendre ici ?"),
        ("Oui, asseyez-vous. C'est 15 francs.", "Je paie par carte ?"),
        ("Oui, à la caisse.", "Parfait, merci."),
    ]),
    ("Crème pour une brûlure", "Vous vous êtes brûlé la main.", PHARM, CLI, [
        ("Bonjour, qu'est-ce qu'il vous faut ?", "Je me suis brûlé la main. Vous avez une crème ?"),
        ("Oui, cette crème est très efficace.", "Je la mets combien de fois par jour ?"),
        ("Deux ou trois fois par jour.", "Merci. Et si ça ne va pas mieux ?"),
        ("Allez voir un médecin.", "D'accord, merci."),
    ]),
    ("Médicament pour enfant", "Votre fille a de la fièvre.", PHARM, CLI, [
        ("Bonjour !", "Bonjour, ma fille a de la fièvre. Elle a cinq ans."),
        ("Voici un sirop pour enfants.", "La dose, c'est combien ?"),
        ("Cinq millilitres, deux fois par jour.", "Merci. Il a un bon goût ?"),
        ("Oui, goût fraise.", "Parfait, merci beaucoup."),
    ]),
    ("Pharmacie de garde", "C'est dimanche, vous avez besoin d'un médicament.", PHARM, CLI, [
        ("Pharmacie de garde, bonjour !", "Bonjour, j'ai très mal au ventre."),
        ("Depuis quand ?", "Depuis ce matin."),
        ("Prenez ce comprimé et reposez-vous.", "Si ça continue, je fais quoi ?"),
        ("Allez aux urgences.", "Merci, bonne soirée."),
    ]),
    ("Pansements", "Vous avez besoin de pansements.", PHARM, CLI, [
        ("Bonjour !", "Bonjour, je voudrais des pansements, s'il vous plaît."),
        ("Petits ou grands ?", "Les grands, s'il vous plaît."),
        ("Voici une boîte de dix.", "Merci. C'est combien ?"),
        ("Cinq francs.", "Je les prends, merci."),
    ]),
    ("Conseil sur vitamines", "Vous voulez des vitamines.", PHARM, CLI, [
        ("Bonjour, je peux vous aider ?", "Bonjour, je suis fatigué. Des vitamines, c'est bien ?"),
        ("Oui, en automne c'est une bonne idée.", "Lesquelles vous conseillez ?"),
        ("Celles-ci, une par jour.", "D'accord. Combien de temps ?"),
        ("Un mois, minimum.", "Merci pour le conseil."),
    ]),
    ("Médicament indisponible", "Votre médicament n'est pas en stock.", PHARM, CLI, [
        ("Bonjour !", "Bonjour, j'ai une ordonnance pour ce médicament."),
        ("Désolé, il n'est plus disponible.", "Vous avez un équivalent ?"),
        ("Oui, le même principe, moins cher.", "D'accord, je le prends."),
        ("Ce sera prêt demain matin.", "Merci beaucoup."),
    ]),
    ("Question sur les effets", "Vous avez une question sur un médicament.", PHARM, CLI, [
        ("Bonjour !", "Bonjour, ce médicament, il fait dormir ?"),
        ("Un peu, oui. Prenez-le le soir.", "Je peux conduire après ?"),
        ("Non, attention à la conduite.", "D'accord, merci pour l'info."),
        ("De rien. Bonne journée !", "Merci, au revoir !"),
    ]),
])

E5_2_PE_EXTRA = gen_pe_batch("e5-2", [
    ("À la pharmacie de garde", "C'est dimanche soir et vous êtes malade.", "Racontez votre visite à la pharmacie de garde : le problème, le conseil du pharmacien et le médicament.", ["Le problème", "Le conseil", "Le médicament"]),
    ("Comparer deux médicaments", "Le pharmacien vous propose deux produits.", "Décrivez les deux produits et dites lequel vous choisissez et pourquoi.", ["Produit 1", "Produit 2", "Votre choix"]),
    ("Conseils pour un rhume", "Votre collègue a un gros rhume.", "Donnez-lui des conseils : que acheter à la pharmacie et comment se soigner.", ["À la pharmacie", "À la maison", "Quand voir un médecin"]),
    ("Ordonnance perdue", "Vous avez perdu votre ordonnance.", "Écrivez à la pharmacie : expliquez le problème et demandez une solution.", ["Le problème", "Le médicament", "Votre demande"]),
    ("Médicaments pour voyager", "Vous partez en vacances.", "Listez les médicaments à acheter à la pharmacie et expliquez pourquoi.", ["Médicament 1", "Médicament 2", "Pourquoi"]),
    ("Aider un touriste", "Un touriste ne trouve pas la pharmacie.", "Expliquez-lui le chemin et ce qu'il peut acheter sans ordonnance.", ["Le chemin", "Sans ordonnance", "Les horaires"]),
    ("Effets secondaires", "Un médicament vous fait un effet bizarre.", "Écrivez au pharmacien : décrivez l'effet et posez des questions.", ["Le médicament", "L'effet", "Vos questions"]),
    ("Budget pharmacie", "Vous devez acheter des médicaments pour la famille.", "Décrivez vos achats et le prix total approximatif.", ["Les achats", "Les prix", "Votre budget"]),
    ("Pharmacie et enfants", "Votre enfant est malade.", "Racontez votre visite à la pharmacie : symptômes, conseils et traitement.", ["Symptômes", "Conseils", "Traitement"]),
    ("Rappel de traitement", "Vous devez prendre un médicament pendant une semaine.", "Décrivez votre traitement : quoi, quand, comment et pendant combien de temps.", ["Le médicament", "La fréquence", "La durée"]),
])

EXTRA_CE["e5-2"] = E5_2_CE_EXTRA
EXTRA_PO["e5-2"] = E5_2_PO_EXTRA
EXTRA_PE["e5-2"] = E5_2_PE_EXTRA
EXTRA_CE_EMAIL["e5-2"] = gen_email_ce_batch("pharmacie")
EXTRA_PE_EMAIL["e5-2"] = gen_pe_email_batch("e5-2", "la pharmacie")


# ═══ E6 — Directions / Transport / Airport ══════════════════════════════════

def _gen_directions_ce(n=19):
    places = ["mairie", "poste", "gare", "musée", "parc", "bibliothèque", "piscine", "hôpital", "école", "marché",
              "banque", "église", "stade", "cinéma", "restaurant", "pharmacie", "supermarché", "office du tourisme", "arrêt de bus"]
    out = []
    for place in places[:n]:
        out.append(ce(
            f"""Plan de la ville — Trouver la {place}

La {place} est au centre-ville.
Pour y aller à pied : prenez la rue du Lac, tout droit pendant cinq minutes.
Tournez à gauche au feu rouge. La {place} est à droite.
En bus : prenez le bus numéro 3 ou le bus 7.
Descendez à l'arrêt « {place.capitalize()} ».
Le bus passe toutes les dix minutes, de 6 h à 22 h.
À vélo : il y a une piste cyclable le long de la rivière.
C'est gratuit et rapide.""",
            [
                _f(f"Où est la {place} ?", "Au centre-ville", "À la campagne", "À l'aéroport", f"La {place} est au _________.", "centre-ville", f"La {place} est au centre-ville.", fillA=["centre ville"]),
                _f("Que faire au feu rouge ?", "Tourner à gauche", "Tourner à droite", "Continuer tout droit", "Tournez à _________ au feu rouge.", "gauche", "Il faut tourner à gauche au feu rouge."),
                _f("Quels bus prendre ?", "Le 3 ou le 7", "Le 1 seulement", "Le 99", "Prenez le bus numéro 3 ou le bus _________.", "7", "Les bus 3 et 7 passent."),
                _f("Où descendre du bus ?", f"À l'arrêt « {place.capitalize()} »", "Au premier arrêt", "À la gare", f"Descendez à l'arrêt « {place.capitalize()} ».", place.capitalize(), f"L'arrêt s'appelle {place.capitalize()}."),
                _f("À quelle fréquence passe le bus ?", "Toutes les dix minutes", "Toutes les heures", "Une fois par jour", "Le bus passe toutes les _________ minutes.", "dix", "Le bus passe toutes les dix minutes.", fillA=["10"]),
                _f("Comment aller à vélo ?", "Par la piste cyclable", "Sur l'autoroute", "Dans le parc interdit", "Il y a une piste _________ le long de la rivière.", "cyclable", "On peut aller à vélo par la piste cyclable."),
                _f("Le trajet à vélo est-il payant ?", "Non, c'est gratuit", "Oui, 5 francs", "Oui, 20 francs", "C'est _________ et rapide.", "gratuit", "Le trajet à vélo est gratuit."),
            ],
        ))
    return out


EXTRA_CE["e6-1"] = _gen_directions_ce()
EXTRA_PO["e6-1"] = gen_po_batch("e6-1", [
    ("Trouver la bibliothèque", "Vous cherchez la bibliothèque.", TOUR, PASS, [
        ("Excusez-moi, la bibliothèque, c'est où ?", "Tout droit, puis à gauche après l'église."),
        ("C'est loin ?", "Non, cinq minutes à pied."),
        ("Merci ! Et le bus ?", "Le bus 5, arrêt Bibliothèque."),
        ("Parfait, merci beaucoup !", "De rien, bonne journée !"),
    ]),
    ("Aller à la piscine", "Vous demandez le chemin de la piscine.", TOUR, PASS, [
        ("Bonjour, la piscine, s'il vous plaît ?", "Prenez la rue des Fleurs jusqu'au bout."),
        ("Puis ?", "Tournez à droite. C'est la grande piscine bleue."),
        ("C'est ouvert aujourd'hui ?", "Oui, de 10 h à 20 h."),
        ("Merci infiniment !", "Je vous en prie."),
    ]),
    ("Quel métro ?", "Vous voulez aller au centre.", TOUR, EMP, [
        ("Bonjour, pour aller au centre ?", "Prenez le métro ligne 1."),
        ("Où ?", "Direction Nord, trois stations."),
        ("Je change ?", "Non, c'est direct."),
        ("Merci beaucoup !", "Bonne journée !"),
    ]),
    ("Perdu près de la gare", "Vous ne trouvez pas votre hôtel.", TOUR, EMP, [
        ("Excusez-moi, l'Hôtel du Lac ?", "Sortez de la gare, tournez à droite."),
        ("C'est loin ?", "Non, deux minutes."),
        ("Merci !", "L'hôtel est en face du parc."),
    ]),
    ("À vélo", "Vous louez un vélo.", EMP, TOUR, [
        ("Bonjour, un vélo pour deux heures ?", "Oui, voici. Suivez la piste bleue."),
        ("Où va la piste ?", "Le long de la rivière, jusqu'au parc."),
        ("Merci !", "Bonne balade !"),
    ]),
    ("Le marché", "Vous cherchez le marché.", TOUR, PASS, [
        ("Le marché, c'est par où ?", "Place du Marché, derrière l'église."),
        ("C'est quel jour ?", "Mardi et samedi matin."),
        ("Merci !", "De rien !"),
    ]),
    ("Dernier bus", "Vous voulez savoir l'heure du dernier bus.", TOUR, EMP, [
        ("Le dernier bus pour le centre ?", "À 23 h 15."),
        ("Et le premier ?", "À 5 h 30."),
        ("Merci !", "Bonne soirée !"),
    ]),
    ("Plan de ville", "Vous êtes à l'office du tourisme.", EMP, TOUR, [
        ("Bonjour, un plan de la ville ?", "Oui, voici. C'est gratuit."),
        ("Où est le musée ?", "Regardez ici, rue des Arts."),
        ("Merci !", "Bonne visite !"),
    ]),
    ("Taxi ou bus", "Vous hésitez entre taxi et bus.", AMI_A, AMI_B, [
        ("On prend le bus ?", "Oui, c'est moins cher."),
        ("C'est combien ?", "Trois francs par personne."),
        ("D'accord !", "L'arrêt est là-bas."),
    ]),
    ("Chemin pour un ami", "Votre ami ne trouve pas votre maison.", TOUR, {"title": "L'ami", "vous": "l'ami / l'amie"}, [
        ("Je suis perdu !", "Tu es où ?"),
        ("Devant la boulangerie.", "Tourne à droite, maison numéro 12."),
        ("Merci !", "Je t'attends !"),
    ]),
])
EXTRA_PE["e6-1"] = gen_pe_batch("e6-1", [
    ("Chemin vers le stade", "Un ami veut aller au stade.", "Expliquez le chemin : à pied, en bus ou à vélo.", ["À pied", "En bus", "Conseil"]),
    ("Mon trajet quotidien", "Décrivez votre trajet maison-travail.", "Expliquez comment vous allez au travail chaque jour.", ["Le départ", "Le transport", "La durée"]),
    ("Inviter chez soi", "Vous invitez un collègue.", "Donnez l'adresse et le chemin depuis la gare.", ["L'adresse", "Depuis la gare", "L'heure"]),
    ("Comparer bus et métro", "Vous expliquez les transports.", "Comparez le bus et le métro pour aller au centre.", ["Le bus", "Le métro", "Votre conseil"]),
    ("Perdu en ville", "Vous vous êtes perdu.", "Racontez comment vous avez demandé votre chemin et ce qu'on vous a dit.", ["Où vous étiez", "Qui vous a aidé", "Le chemin"]),
    ("Le quartier", "Un nouveau voisin arrive.", "Décrivez le quartier : commerces, transports, lieux importants.", ["Commerces", "Transports", "Lieux"]),
    ("Aller à l'école", "Expliquez le chemin de l'école.", "Décrivez le trajet depuis votre maison.", ["Le départ", "Le chemin", "Le temps"]),
    ("Week-end en ville", "Vous proposez une balade.", "Proposez un itinéraire pour visiter trois lieux.", ["Lieu 1", "Lieu 2", "Lieu 3"]),
    ("Application de transport", "Vous utilisez une application.", "Expliquez comment acheter un billet sur l'application.", ["L'application", "Les étapes", "Le prix"]),
    ("Conseils à un touriste", "Un touriste demande des conseils.", "Donnez des conseils pour se déplacer dans votre ville.", ["Transports", "À éviter", "Astuce"]),
])
EXTRA_CE_EMAIL["e6-1"] = gen_email_ce_batch("directions et ville")
EXTRA_PE_EMAIL["e6-1"] = gen_pe_email_batch("e6-1", "se déplacer en ville")

# E6.2 transport
EXTRA_CE["e6-2"] = [
    ce(
        f"""Gare de Lausanne — Information voyageurs n°{i}

Le train pour Genève part toutes les 30 minutes.
Le premier train part à 5 h 15, le dernier à 23 h 45.
Un billet coûte 28 francs en 2e classe.
Réservez sur l'application ou au guichet.
Le quai 4 est pour les trains vers Genève.
Présentez-vous 5 minutes avant le départ.
Les bagages volumineux sont interdits dans le TER.""",
        [
            _f("Pour quelle destination ?", "Genève", "Zurich", "Paris", "Le train va vers _________.", "Genève", "Le train va à Genève."),
            _f("À quelle fréquence ?", "Toutes les 30 minutes", "Toutes les heures", "Une fois par jour", "Le train part toutes les _________ minutes.", "30", "Le train part toutes les 30 minutes.", fillA=["trente"]),
            _f("Prix du billet ?", "28 francs", "10 francs", "50 francs", "Un billet coûte _________ francs.", "28", "Le billet coûte 28 francs.", fillA=["vingt-huit"]),
            _f("Quel quai ?", "Le quai 4", "Le quai 1", "Le quai 9", "Le quai _________ est pour Genève.", "4", "C'est le quai 4."),
            _f("Combien de temps avant le départ ?", "5 minutes", "30 minutes", "1 heure", "Présentez-vous _________ minutes avant.", "5", "Il faut arriver 5 minutes avant.", fillA=["cinq"]),
            _f("Peut-on prendre de gros bagages ?", "Non dans le TER", "Oui, toujours", "Seulement le dimanche", "Les bagages volumineux sont _________ dans le TER.", "interdits", "Les gros bagages sont interdits.", img=["train", "avion", "bus"], imgC=0),
            _f("Heure du dernier train ?", "23 h 45", "20 h", "Minuit", "Le dernier train part à _________ h 45.", "23", "Le dernier train est à 23 h 45."),
        ],
    )
    for i in range(1, 20)
]
EXTRA_PO["e6-2"] = gen_po_batch("e6-2", [
    ("Billet aller-retour", "Vous achetez un billet.", EMP, VOY, [
        ("Bonjour, un billet pour Berne ?", "Aller simple ou aller-retour ?"),
        ("Aller-retour, s'il vous plaît.", "Ça fait 45 francs."),
        ("Je paie par carte.", "Voici votre billet. Bon voyage !"),
    ]),
    ("Train manqué", "Vous avez raté votre train.", EMP, VOY, [
        ("J'ai raté mon train !", "Le prochain part dans vingt minutes."),
        ("Même quai ?", "Non, quai 6 maintenant."),
        ("Merci !", "De rien."),
    ]),
    ("Place fenêtre", "Vous voulez une place fenêtre.", EMP, VOY, [
        ("Une place côté fenêtre ?", "Oui, voici en voiture 3."),
        ("Merci !", "Bon voyage !"),
    ]),
    ("Abonnement", "Vous renouvelez votre abonnement.", EMP, VOY, [
        ("Je voudrais renouveler mon abonnement.", "Votre carte, s'il vous plaît."),
        ("Voici.", "C'est 80 francs pour un mois."),
        ("Je paie.", "Merci, bon voyage !"),
    ]),
    ("Grève", "Il y a une grève de bus.", AMI_A, AMI_B, [
        ("Les bus ne passent pas !", "On prend le train ?"),
        ("Bonne idée.", "Allons à la gare."),
    ]),
    ("Covoiturage", "Vous organisez un covoiturage.", {"title": "Le conducteur", "vous": "le conducteur"}, {"title": "Le passager", "vous": "le passager"}, [
        ("On part à quelle heure ?", "À 8 h devant la gare."),
        ("D'accord.", "J'apporte des sandwiches."),
    ]),
    ("Retard", "Votre train a du retard.", EMP, VOY, [
        ("Mon train est en retard ?", "Oui, trente minutes."),
        ("Pourquoi ?", "Travaux sur la voie."),
        ("Merci.", "Désolé pour l'attente."),
    ]),
    ("Mauvais quai", "Vous êtes au mauvais quai.", EMP, VOY, [
        ("Le train pour Fribourg ?", "Quai 2, de l'autre côté."),
        ("Merci !", "Dépêchez-vous, il part !"),
    ]),
    ("Premier voyage", "C'est votre premier voyage en train.", EMP, VOY, [
        ("C'est ma première fois.", "Pas de stress. Voici votre billet."),
        ("Où m'asseoir ?", "N'importe où en 2e classe."),
        ("Merci !", "Bon voyage !"),
    ]),
    ("Ticket invalide", "Votre billet n'est pas valable.", {"title": "Le contrôleur", "vous": "le contrôleur"}, VOY, [
        ("Votre billet, s'il vous plaît.", "Voici."),
        ("Il n'est pas composté.", "Ah, je ne savais pas !"),
        ("Compostez-le à la prochaine gare.", "D'accord, désolé."),
    ]),
])
EXTRA_PE["e6-2"] = gen_pe_batch("e6-2", [
    ("Mon voyage en train", "Racontez un voyage récent.", "Décrivez le trajet, le prix et ce qui s'est passé.", ["Le trajet", "Le prix", "L'expérience"]),
    ("Comparer train et voiture", "Quel transport choisir ?", "Comparez le train et la voiture pour un voyage.", ["Le train", "La voiture", "Conclusion"]),
    ("Réclamation retard", "Votre train avait 2 heures de retard.", "Écrivez une réclamation : décrivez le problème et demandez un remboursement.", ["Le retard", "Les conséquences", "La demande"]),
    ("Covoiturage", "Vous proposez un covoiturage.", "Écrivez un message : destination, heure, prix et conditions.", ["Destination", "Horaire", "Prix"]),
    ("Acheter en ligne", "Expliquez comment acheter un billet.", "Décrivez les étapes sur l'application.", ["Étape 1", "Étape 2", "Conseil"]),
    ("Grève de transport", "Les transports sont en grève demain.", "Écrivez à votre chef : expliquez le problème et proposez une solution.", ["La grève", "Le problème", "La solution"]),
    ("Premier TER", "C'est votre premier voyage en TER.", "Racontez votre expérience : achat du billet, quai, voyage.", ["Le billet", "Le quai", "Le voyage"]),
    ("Objet perdu", "Vous avez perdu quelque chose dans le bus.", "Écrivez au service : décrivez l'objet et le trajet.", ["L'objet", "Le trajet", "Vos coordonnées"]),
    ("Abonnement mensuel", "Vous voulez un abonnement.", "Comparez les options et dites laquelle vous choisissez.", ["Option 1", "Option 2", "Votre choix"]),
    ("Voyage en groupe", "Vous organisez un voyage avec des amis.", "Proposez un plan : transport, horaire et budget.", ["Transport", "Horaire", "Budget"]),
])
EXTRA_CE_EMAIL["e6-2"] = gen_email_ce_batch("transport public")
EXTRA_PE_EMAIL["e6-2"] = gen_pe_email_batch("e6-2", "les transports")

# E6.3 airport
EXTRA_CE["e6-3"] = [
    ce(
        f"""Aéroport de Genève — Information vol n°{i}

Enregistrement : comptoir A, deux heures avant le départ.
Vol pour Lisbonne à 14 h 30, porte B12.
Bagage cabine : maximum 8 kg, une valise par personne.
Liquides : maximum 100 ml par flacon, dans un sac transparent.
Contrôle de sécurité : retirez ceinture, montre et ordinateur.
Duty-free ouvert de 6 h à 22 h.
En cas de retard, consultez les écrans ou l'application.
Navette gratuite vers le centre toutes les 15 minutes.""",
        [
            _f("Où s'enregistrer ?", "Comptoir A", "Comptoir Z", "À l'hôtel", "Enregistrement : comptoir _________.", "A", "L'enregistrement est au comptoir A."),
            _f("Destination du vol ?", "Lisbonne", "Paris", "Tokyo", "Vol pour _________.", "Lisbonne", "Le vol va à Lisbonne."),
            _f("Heure du vol ?", "14 h 30", "10 h", "20 h", "Vol à _________ h 30.", "14", "Le vol est à 14 h 30."),
            _f("Porte d'embarquement ?", "B12", "A1", "C99", "Porte _________.", "B12", "La porte est B12."),
            _f("Poids max bagage cabine ?", "8 kg", "20 kg", "15 kg", "Maximum _________ kg.", "8", "Le max est 8 kg."),
            _f("Liquides autorisés ?", "100 ml par flacon", "1 litre", "Interdits", "Maximum _________ ml par flacon.", "100", "Les liquides : max 100 ml.", img=["avion", "train", "bus"], imgC=0),
            _f("Navette vers le centre ?", "Toutes les 15 minutes", "Une fois par jour", "Payante", "Navette _________ vers le centre.", "gratuite", "La navette est gratuite."),
        ],
    )
    for i in range(1, 20)
]
EXTRA_PO["e6-3"] = gen_po_batch("e6-3", [
    ("Enregistrement", "Vous enregistrez vos bagages.", AGENT, VOY, [
        ("Bonjour, votre passeport ?", "Voici. Vol pour Rome."),
        ("Valise en soute ?", "Oui, une grande valise."),
        ("Voici votre carte d'embarquement.", "Merci ! Porte C5 ?"),
    ]),
    ("Contrôle sécurité", "Au contrôle de sécurité.", {"title": "L'agent", "vous": "l'agent"}, VOY, [
        ("Mettez vos affaires dans le bac.", "D'accord."),
        ("Retirez votre ordinateur.", "Voici."),
        ("Vous pouvez passer.", "Merci."),
    ]),
    ("Valise perdue", "Votre valise n'arrive pas.", {"title": "L'employé", "vous": "l'employé"}, VOY, [
        ("Ma valise n'est pas là !", "Couleur et marque ?"),
        ("Noire, marque Samsonite.", "On la cherche. Voici un formulaire."),
        ("Merci.", "On vous appelle."),
    ]),
    ("Vol retardé", "Votre vol a du retard.", {"title": "L'employé compagnie", "vous": "l'employé"}, VOY, [
        ("Mon vol est retardé ?", "Oui, deux heures."),
        ("Pourquoi ?", "Problème technique."),
        ("Merci.", "Désolé."),
    ]),
    ("À bord", "Le steward propose à boire.", {"title": "Le steward", "vous": "le steward"}, VOY, [
        ("Boisson ?", "De l'eau, s'il vous plaît."),
        ("Voici.", "Merci."),
    ]),
    ("Passeport", "Au contrôle des passeports.", {"title": "L'agent", "vous": "l'agent"}, VOY, [
        ("Passeport ?", "Voici."),
        ("Objectif du voyage ?", "Vacances, une semaine."),
        ("Bon séjour.", "Merci."),
    ]),
    ("Hublot", "Vous choisissez votre siège.", AGENT, VOY, [
        ("Hublot ou couloir ?", "Hublot, s'il vous plaît."),
        ("Rangée 12, siège A.", "Parfait, merci."),
    ]),
    ("Trop lourd", "Votre bagage est trop lourd.", AGENT, VOY, [
        ("23 kg, limite 20.", "Je retire des affaires."),
        ("Maintenant 19 kg, c'est bon.", "Merci."),
    ]),
    ("Accueillir un ami", "Vous attendez un ami.", {"title": "L'ami", "vous": "l'ami"}, VOY, [
        ("Je suis là !", "Bienvenue ! Comment était le vol ?"),
        ("Très bien.", "Allons à l'hôtel."),
    ]),
    ("Navette hôtel", "Vous prenez la navette.", EMP, VOY, [
        ("Navette pour l'Hôtel Central ?", "Oui, arrêt 3."),
        ("Merci.", "Montez, on part."),
    ]),
])
EXTRA_PE["e6-3"] = gen_pe_batch("e6-3", [
    ("Mon premier vol", "Racontez votre premier voyage en avion.", "Décrivez l'aéroport, l'embarquement et le vol.", ["L'aéroport", "L'embarquement", "Le vol"]),
    ("Préparer sa valise", "Vous partez en vacances.", "Listez ce que vous mettez dans votre valise et pourquoi.", ["Vêtements", "Documents", "Autres"]),
    ("Vol retardé", "Votre vol a 3 heures de retard.", "Écrivez à votre famille pour les prévenir.", ["Le retard", "La nouvelle heure", "Votre plan"]),
    ("À l'aéroport", "Décrivez les étapes à l'aéroport.", "Expliquez les étapes : enregistrement, sécurité, embarquement.", ["Étape 1", "Étape 2", "Étape 3"]),
    ("Valise perdue", "Décrivez le problème.", "Racontez ce qui s'est passé et ce que vous avez fait.", ["Le problème", "Vos démarches", "La solution"]),
    ("Conseils voyage", "Un ami voyage pour la première fois.", "Donnez des conseils pour l'aéroport.", ["Avant", "À l'aéroport", "À bord"]),
    ("Carte d'embarquement", "Expliquez la carte d'embarquement.", "Décrivez les informations importantes.", ["Vol", "Porte", "Siège"]),
    ("Douanes", "Vous passez la douane.", "Racontez ce qui se passe à la douane.", ["Documents", "Questions", "Résultat"]),
    ("Comparer avion et train", "Pour aller à Paris.", "Comparez les deux moyens de transport.", ["L'avion", "Le train", "Votre choix"]),
    ("Message d'arrivée", "Vous arrivez à destination.", "Écrivez à vos parents pour les rassurer.", ["L'arrivée", "L'hôtel", "Vos projets"]),
])
EXTRA_CE_EMAIL["e6-3"] = gen_email_ce_batch("aéroport et vols")
EXTRA_PE_EMAIL["e6-3"] = gen_pe_email_batch("e6-3", "l'aéroport")


# ═══ E7 — Hotel / Sport / Culture ═══════════════════════════════════════════

EXTRA_CE["e7-1"] = [
    ce(
        f"""Hôtel {['du Lac', 'Bellevue', 'Central', 'Riviera', 'Mont-Blanc', 'des Alpes', 'Soleil', 'Paradis', 'Étoile', 'Jardin', 'Plage', 'Forêt', 'Village', 'Gare', 'Parc', 'Royal', 'Moderne', 'Classique', 'Confort'][i-1]} — Informations

Chambres disponibles : simple, double et familiale.
Prix : 75 € la nuit en chambre double, petit déjeuner inclus.
Check-in à partir de 15 h, check-out avant 11 h.
Wi-Fi gratuit dans tout l'hôtel.
Parking : 10 € par jour.
L'hôtel est à côté de la plage, à 5 minutes à pied du centre.
Animaux acceptés : 15 € par nuit.
Réservation par téléphone ou sur le site Internet.""",
        [
            _f("Quel type de chambres ?", "Simple, double et familiale", "Seulement simple", "Seulement luxe", "Chambres : simple, double et _________.", "familiale", "Il y a des chambres familiales."),
            _f("Prix chambre double ?", "75 € la nuit", "100 €", "50 €", "Prix : _________ € la nuit.", "75", "La chambre double coûte 75 €."),
            _f("Le petit déjeuner est-il inclus ?", "Oui", "Non", "Seulement le week-end", "Petit déjeuner _________.", "inclus", "Le petit déjeuner est inclus."),
            _f("Heure du check-in ?", "À partir de 15 h", "À 10 h", "À minuit", "Check-in à partir de _________ h.", "15", "Le check-in est à 15 h."),
            _f("Le Wi-Fi est-il gratuit ?", "Oui", "Non", "Payant", "Wi-Fi _________ dans tout l'hôtel.", "gratuit", "Le Wi-Fi est gratuit."),
            _f("Où est l'hôtel ?", "À côté de la plage", "En montagne", "À l'aéroport", "L'hôtel est à côté de la _________.", "plage", "L'hôtel est près de la plage."),
            _f("Les animaux sont-ils acceptés ?", "Oui, 15 € par nuit", "Non, jamais", "Gratuit", "Animaux acceptés : _________ € par nuit.", "15", "Les animaux coûtent 15 € par nuit."),
        ],
    )
    for i in range(1, 20)
]
EXTRA_PO["e7-1"] = gen_po_batch("e7-1", [
    ("Réserver par téléphone", "Vous réservez une chambre.", REC, CLI, [
        ("Bonjour, Hôtel du Lac.", "Bonjour, une chambre double pour samedi ?"),
        ("Pour combien de nuits ?", "Deux nuits."),
        ("75 € par nuit. Je réserve ?", "Oui, merci."),
    ]),
    ("Arrivée à l'hôtel", "Vous arrivez à l'hôtel.", REC, CLI, [
        ("Bonjour, j'ai une réservation.", "Nom, s'il vous plaît ?"),
        ("Martin.", "Chambre 204, 2e étage."),
        ("Merci !", "Bon séjour !"),
    ]),
    ("Problème chambre", "La climatisation ne marche pas.", REC, CLI, [
        ("La clim ne marche pas.", "Désolé. On envoie quelqu'un."),
        ("Merci.", "Chambre 204, dans dix minutes."),
    ]),
    ("Hôtel complet", "L'hôtel est complet.", REC, CLI, [
        ("Une chambre ce soir ?", "Désolé, complet."),
        ("Un autre hôtel ?", "L'Hôtel Central, à côté."),
        ("Merci.", "Bonne soirée."),
    ]),
    ("Camping", "Vous cherchez une place au camping.", EMP, CLI, [
        ("Une place pour deux nuits ?", "Oui, emplacement 15."),
        ("Prix ?", "30 € par nuit."),
        ("Je prends.", "Voici la clé."),
    ]),
    ("Départ", "Vous quittez l'hôtel.", REC, CLI, [
        ("Je pars.", "Chambre 204 ?"),
        ("Oui. La clé.", "Tout est en ordre. Au revoir !"),
    ]),
    ("Demi-pension", "Vous demandez la demi-pension.", REC, CLI, [
        ("Demi-pension ?", "Petit déjeuner et dîner, 25 € de plus."),
        ("D'accord.", "C'est noté."),
    ]),
    ("Où est l'hôtel", "Vous demandez le chemin.", CLI, PASS, [
        ("L'Hôtel du Lac ?", "Tout droit, à côté de la plage."),
        ("Merci !", "De rien."),
    ]),
    ("Hôtel ou camping", "Vous hésitez.", AMI_A, AMI_B, [
        ("Hôtel ou camping ?", "Camping, c'est moins cher."),
        ("D'accord.", "Et plus sympa !"),
    ]),
    ("Wi-Fi", "Le Wi-Fi ne marche pas.", REC, CLI, [
        ("Le Wi-Fi ne marche pas.", "Mot de passe : hotel2024."),
        ("Merci !", "De rien."),
    ]),
])
EXTRA_PE["e7-1"] = gen_pe_batch("e7-1", [
    ("Réservation hôtel", "Vous écrivez pour réserver.", "Demandez une chambre : dates, type et questions.", ["Dates", "Type de chambre", "Questions"]),
    ("Carte postale", "Vous êtes en vacances.", "Écrivez une carte postale : lieu, hôtel et activités.", ["Le lieu", "L'hôtel", "Activités"]),
    ("Réclamation", "Problème dans la chambre.", "Décrivez le problème et demandez une solution.", ["Le problème", "Depuis quand", "Votre demande"]),
    ("Comparer hôtel et camping", "Pour les vacances.", "Comparez les deux options.", ["L'hôtel", "Le camping", "Votre choix"]),
    ("Mon séjour idéal", "Décrivez vos vacances idéales.", "Où, dans quel hébergement et quelles activités.", ["Le lieu", "L'hébergement", "Activités"]),
    ("Annuler réservation", "Vous devez annuler.", "Expliquez pourquoi et demandez confirmation.", ["L'annulation", "La raison", "Confirmation"]),
    ("Avis hôtel", "Vous écrivez un avis.", "Décrivez les points positifs et négatifs.", ["Positif", "Négatif", "Note"]),
    ("Inviter un ami", "Vous invitez un ami.", "Proposez de partager une chambre d'hôtel.", ["L'invitation", "Les dates", "Le prix"]),
    ("Premier jour", "Racontez votre arrivée.", "Décrivez l'arrivée à l'hôtel.", ["Le trajet", "L'accueil", "La chambre"]),
    ("Budget vacances", "Planifiez votre budget.", "Listez les dépenses : hébergement, nourriture, activités.", ["Hébergement", "Nourriture", "Activités"]),
])
EXTRA_CE_EMAIL["e7-1"] = gen_email_ce_batch("hôtel et hébergement")
EXTRA_PE_EMAIL["e7-1"] = gen_pe_email_batch("e7-1", "l'hôtel")

# E7.2 sport
EXTRA_CE["e7-2"] = [
    ce(
        f"""Club sportif {['Les Aigles', 'Le Stade', 'Sport Plus', 'Active Life', 'Fit Club', 'Energy', 'Champion', 'Victoire', 'Dynamo', 'Olympique', 'Riviera Sport', 'Montagne Active', 'Aqua Club', 'Tennis Club', 'Vélo Club', 'Escalade Plus', 'Nature Sport', 'Forme Club', 'Bouge Club'][i-1]} — Programme

Cours de natation : lundi et mercredi, 18 h – 19 h.
VTT en groupe : samedi matin, départ à 9 h.
Escalade : mardi et jeudi, 17 h – 19 h.
Inscription : sur place ou par e-mail.
Tarif : 120 € par trimestre, tous les cours inclus.
Équipement fourni sauf chaussures de sport.
Annulation possible jusqu'à 24 h avant le cours.
Centre ouvert de 7 h à 22 h, du lundi au samedi.""",
        [
            _f("Quand a lieu la natation ?", "Lundi et mercredi", "Tous les jours", "Seulement le dimanche", "Natation : lundi et _________.", "mercredi", "La natation est lundi et mercredi."),
            _f("Heure du VTT ?", "Samedi à 9 h", "Lundi à 6 h", "Vendredi soir", "VTT : samedi matin, départ à _________ h.", "9", "Le VTT part à 9 h."),
            _f("Prix par trimestre ?", "120 €", "50 €", "200 €", "Tarif : _________ € par trimestre.", "120", "Le tarif est 120 €."),
            _f("Faut-il apporter des chaussures ?", "Oui", "Non, tout est fourni", "Seulement des gants", "Équipement fourni sauf _________ de sport.", "chaussures", "Il faut apporter des chaussures."),
            _f("Comment s'inscrire ?", "Sur place ou par e-mail", "Par téléphone seulement", "Par courrier", "Inscription : sur place ou par _________.", "e-mail", "On peut s'inscrire par e-mail.", fillA=["email", "mail"]),
            _f("Quand annuler un cours ?", "24 h avant", "Le jour même", "Jamais", "Annulation jusqu'à _________ h avant.", "24", "Il faut annuler 24 h avant."),
            _f("Horaires du centre ?", "7 h – 22 h en semaine", "24 h sur 24", "Seulement le matin", "Centre ouvert de 7 h à _________ h.", "22", "Le centre ferme à 22 h."),
        ],
    )
    for i in range(1, 20)
]
EXTRA_PO["e7-2"] = gen_po_batch("e7-2", [
    ("S'inscrire à la natation", "Vous voulez apprendre à nager.", MON, CLI, [
        ("Bonjour, cours de natation ?", "Oui, lundi et mercredi."),
        ("Je suis débutant.", "Pas de problème."),
        ("Je m'inscris.", "120 € le trimestre."),
    ]),
    ("Louer un VTT", "Vous louez un vélo.", EMP, CLI, [
        ("Un VTT pour l'après-midi ?", "Oui, 25 €."),
        ("Casque inclus ?", "Oui."),
        ("Merci.", "Bonne balade !"),
    ]),
    ("Cours annulé", "Le cours est annulé.", MON, CLI, [
        ("Le cours de ce soir ?", "Annulé, le moniteur est malade."),
        ("Et demain ?", "Normal, à 18 h."),
        ("Merci.", "Désolé."),
    ]),
    ("Escalade", "Premier cours d'escalade.", MON, CLI, [
        ("Première fois.", "Pas de souci. Chaussures là."),
        ("C'est haut !", "Allez-y doucement."),
        ("Merci.", "Bravo !"),
    ]),
    ("Météo", "Il pleut, sortie annulée ?", MON, CLI, [
        ("On fait le VTT ?", "Non, il pleut. Reporté samedi."),
        ("D'accord.", "Je vous préviens."),
    ]),
    ("Tennis", "Vous réservez un court.", EMP, CLI, [
        ("Un court à 16 h ?", "Oui, court 3."),
        ("Raquettes ?", "Location 5 €."),
        ("Merci.", "Bon match !"),
    ]),
    ("Ski", "Vous vous renseignez sur le ski.", MON, CLI, [
        ("Cours de ski ?", "En janvier, 200 € la semaine."),
        ("Matériel inclus ?", "Skis et bâtons oui."),
        ("Je réfléchis.", "Pas de souci."),
    ]),
    ("Sport entre amis", "Vous proposez une activité.", AMI_A, AMI_B, [
        ("On fait du vélo samedi ?", "Bonne idée !"),
        ("9 h ?", "Parfait."),
    ]),
    ("Niveau", "Quel niveau pour le cours ?", MON, CLI, [
        ("Quel niveau ?", "Débutant."),
        ("Groupe débutant mardi.", "Je m'inscris."),
    ]),
    ("Abonnement", "Vous prenez un abonnement.", EMP, CLI, [
        ("Abonnement mensuel ?", "50 €, tous les cours."),
        ("Je prends.", "Voici votre carte."),
    ]),
])
EXTRA_PE["e7-2"] = gen_pe_batch("e7-2", [
    ("Mon sport préféré", "Parlez de votre sport.", "Décrivez pourquoi vous aimez ce sport.", ["Le sport", "Pourquoi", "Fréquence"]),
    ("Proposer une activité", "Invitez un ami.", "Proposez une sortie sportive.", ["L'activité", "Date et heure", "Équipement"]),
    ("Inscription club", "Vous voulez vous inscrire.", "Écrivez au club : sport choisi et questions.", ["Le sport", "Vos questions", "Disponibilités"]),
    ("Journée sportive", "Racontez une journée.", "Décrivez une journée de sport.", ["Le matin", "L'après-midi", "Impressions"]),
    ("Météo et sport", "Le temps change vos plans.", "Expliquez comment la météo influence vos activités.", ["Beau temps", "Mauvais temps", "Alternative"]),
    ("Conseils débutant", "Un ami commence le running.", "Donnez des conseils.", ["Équipement", "Fréquence", "Sécurité"]),
    ("Comparer sports", "Tennis ou natation ?", "Comparez deux sports.", ["Sport 1", "Sport 2", "Préférence"]),
    ("Reporter sortie", "Vous ne pouvez pas venir.", "Écrivez à votre ami pour reporter.", ["L'excuse", "Nouvelle date", "Excuses"]),
    ("Famille et sport", "Décrivez les sports de votre famille.", "Qui fait quoi et à quelle fréquence.", ["Membre 1", "Membre 2", "Ensemble"]),
    ("Louer du matériel", "Vous louez du matériel.", "Décrivez la location : quoi, prix, durée.", ["Le matériel", "Le prix", "La durée"]),
])
EXTRA_CE_EMAIL["e7-2"] = gen_email_ce_batch("sport et activités")
EXTRA_PE_EMAIL["e7-2"] = gen_pe_email_batch("e7-2", "le sport")

# E7.3 culture
EXTRA_CE["e7-3"] = [
    ce(
        f"""{['Musée des Beaux-Arts', 'Théâtre Municipal', 'Cinéma Rex', 'Château historique', 'Galerie Moderne', 'Opéra de la Ville', 'Centre culturel', 'Exposition Photo', 'Bibliothèque musée', 'Festival d\'été', 'Maison des Arts', 'Planetarium', 'Musée d\'Histoire', 'Salle de concert', 'Parc des Sculptures', 'Musée de la Science', 'Théâtre de poche', 'Cinéma Art', 'Palais culturel'][i-1]} — Informations

Ouvert du mardi au dimanche, 10 h – 18 h.
Fermé le lundi.
Tarif adulte : 12 €, tarif réduit : 8 € (étudiants, seniors).
Gratuit pour les moins de 12 ans.
Visite guidée à 14 h et 16 h (durée : 1 h 30).
Réservation conseillée pour les groupes.
Boutique et café sur place.
Dernière entrée 30 minutes avant la fermeture.""",
        [
            _f("Quels jours d'ouverture ?", "Du mardi au dimanche", "Tous les jours", "Seulement le week-end", "Ouvert du mardi au _________.", "dimanche", "Ouvert du mardi au dimanche."),
            _f("Quel jour fermé ?", "Le lundi", "Le samedi", "Le jeudi", "Fermé le _________.", "lundi", "Fermé le lundi."),
            _f("Prix adulte ?", "12 €", "8 €", "20 €", "Tarif adulte : _________ €.", "12", "L'entrée adulte coûte 12 €."),
            _f("Tarif réduit pour qui ?", "Étudiants et seniors", "Tout le monde", "Personne", "Tarif réduit : étudiants, _________.", "seniors", "Réduction pour étudiants et seniors."),
            _f("Gratuit pour qui ?", "Moins de 12 ans", "Tout le monde", "Plus de 60 ans", "Gratuit pour les moins de _________ ans.", "12", "Gratuit pour les moins de 12 ans."),
            _f("Heures des visites guidées ?", "14 h et 16 h", "10 h seulement", "20 h", "Visite guidée à 14 h et _________ h.", "16", "Visites à 14 h et 16 h."),
            _f("Y a-t-il un café ?", "Oui, sur place", "Non", "Dehors seulement", "Boutique et _________ sur place.", "café", "Il y a un café sur place.", img=["musée", "cinéma", "théâtre"], imgC=0),
        ],
    )
    for i in range(1, 20)
]
EXTRA_PO["e7-3"] = gen_po_batch("e7-3", [
    ("Billets musée", "Vous achetez des billets.", EMP, VIS, [
        ("Deux billets adultes ?", "24 €."),
        ("Visite guidée ?", "À 14 h, places disponibles."),
        ("On prend.", "Voici vos billets."),
    ]),
    ("Horaires", "Vous demandez les horaires.", EMP, VIS, [
        ("C'est ouvert le lundi ?", "Non, fermé le lundi."),
        ("Et dimanche ?", "Oui, 10 h – 18 h."),
        ("Merci.", "Bonne visite !"),
    ]),
    ("Réduction étudiant", "Vous avez une carte étudiant.", EMP, VIS, [
        ("Tarif réduit ?", "Oui, avec carte. 8 €."),
        ("Voici.", "Merci."),
    ]),
    ("Cinéma", "Vous choisissez un film.", EMP, VIS, [
        ("Quel film ?", "Comédie à 20 h ou drame à 18 h ?"),
        ("La comédie.", "Salle 2."),
    ]),
    ("Concert", "Vous réservez des places.", EMP, VIS, [
        ("Concert samedi ?", "Il reste des places."),
        ("Deux en rang A.", "80 €."),
        ("Je prends.", "Voici."),
    ]),
    ("Exposition", "Vous demandez des infos.", EMP, VIS, [
        ("L'exposition photo ?", "Jusqu'au 30 juin."),
        ("Gratuit ?", "Non, 8 €."),
        ("Merci.", "Bonne visite."),
    ]),
    ("Office tourisme", "Vous êtes à l'office.", EMP, VIS, [
        ("Que visiter ?", "Le château et le musée."),
        ("Combien de temps ?", "Une journée."),
        ("Merci.", "Bon séjour !"),
    ]),
    ("Après le film", "Vous discutez.", AMI_A, AMI_B, [
        ("Le film ?", "Super ! J'ai adoré."),
        ("Moi aussi.", "On y retourne ?"),
    ]),
    ("Inviter au musée", "Vous invitez un ami.", AMI_A, AMI_B, [
        ("Musée samedi ?", "Volontiers !"),
        ("14 h ?", "Parfait."),
    ]),
    ("Théâtre", "Vous réservez.", EMP, VIS, [
        ("Pièce de samedi ?", "Il reste 3 places."),
        ("On les prend.", "45 €."),
    ]),
])
EXTRA_PE["e7-3"] = gen_pe_batch("e7-3", [
    ("Invitation musée", "Invitez un ami.", "Proposez une visite au musée.", ["Le musée", "La date", "Le prix"]),
    ("Raconter une visite", "Vous avez visité un château.", "Racontez votre visite.", ["Le lieu", "Ce que vous avez vu", "Impressions"]),
    ("Programme week-end", "Proposez un programme culturel.", "Trois activités pour le week-end.", ["Activité 1", "Activité 2", "Activité 3"]),
    ("Avis exposition", "Donnez votre avis.", "Décrivez une exposition vue récemment.", ["Le thème", "Ce qui vous a plu", "Ce qui vous a moins plu"]),
    ("Réserver visite guidée", "Écrivez pour réserver.", "Demandez une visite guidée pour un groupe.", ["Le groupe", "La date", "Questions"]),
    ("Mon film préféré", "Parlez d'un film.", "Décrivez votre film préféré.", ["Le film", "L'histoire", "Pourquoi"]),
    ("Cinéma ou théâtre", "Comparez.", "Dites lequel vous préférez et pourquoi.", ["Le cinéma", "Le théâtre", "Votre choix"]),
    ("Lieu culturel", "Présentez un lieu de votre ville.", "Décrivez un musée ou théâtre.", ["Le lieu", "Les horaires", "Pourquoi y aller"]),
    ("Soirée cinéma", "Racontez une soirée.", "Décrivez votre soirée au cinéma.", ["Le film", "Avec qui", "Impressions"]),
    ("Demander réductions", "Vous écrivez au musée.", "Demandez les tarifs réduits.", ["Votre situation", "Les tarifs", "Vos questions"]),
])
EXTRA_CE_EMAIL["e7-3"] = gen_email_ce_batch("culture et loisirs")
EXTRA_PE_EMAIL["e7-3"] = gen_pe_email_batch("e7-3", "la culture")


# ═══ E8.1 — Bilan A1 ════════════════════════════════════════════════════════

E8_1_NAMES = ["Emma", "Lucas", "Sofia", "Marco", "Leila", "Thomas", "Ana", "Karim", "Julie", "Pedro",
              "Nina", "Ahmed", "Clara", "Youssef", "Elena", "David", "Fatima", "Paul", "Laura"]
E8_1_CE_EXTRA = []
for i, name in enumerate(E8_1_NAMES, 1):
    jobs = ["serveur", "vendeur", "infirmier", "professeur", "cuisinier", "coiffeur", "mécanicien", "secrétaire"]
    job = jobs[i % len(jobs)]
    E8_1_CE_EXTRA.append(ce(
        f"""Bonjour !

Je m'appelle {name}. J'ai {20 + i} ans et j'habite à Lausanne.
Je travaille comme {job} dans un {['restaurant', 'magasin', 'hôpital', 'école', 'café', 'salon', 'garage', 'bureau'][i % 8]}.
Je commence à {8 + i % 3} h et je finis à {17 + i % 3} h.
Le {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'][i % 5]}, je ne travaille pas.
J'ai un {['frère', 'sœur', 'chat', 'chien'][i % 4]} qui s'appelle {['Max', 'Luna', 'Oscar', 'Mia'][i % 4]}.
En été, je pars en vacances au {['Portugal', 'Italie', 'Espagne', 'France'][i % 4]}.
J'aime le {['football', 'cinéma', 'lecture', 'cuisine'][i % 4]} et la musique.

À bientôt,
{name}""",
        [
            _f("Comment s'appelle la personne ?", name, "Marie", "Jean", f"Je m'appelle _________.", name, f"La personne s'appelle {name}."),
            _f("Où habite-t-elle ?", "À Lausanne", "À Paris", "À Genève", "J'habite à _________.", "Lausanne", f"{name} habite à Lausanne."),
            _f("Quel est son métier ?", f"{job.capitalize()}", "Pilote", "Agriculteur", f"Je travaille comme _________.", job, f"{name} est {job}."),
            _f("Quel jour ne travaille-t-elle pas ?", ["lundi", "mardi", "mercredi", "jeudi", "vendredi"][i % 5].capitalize(), "Samedi", "Dimanche", f"Le {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'][i % 5]}, je ne travaille pas.", ["lundi", "mardi", "mercredi", "jeudi", "vendredi"][i % 5], f"Elle ne travaille pas le {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'][i % 5]}."),
            _f("Où part-elle en vacances ?", ["Portugal", "Italie", "Espagne", "France"][i % 4], "Japon", "Canada", f"Je pars en vacances au _________.", ["Portugal", "Italie", "Espagne", "France"][i % 4], "Elle part en vacances en été."),
            _f("Qu'est-ce qu'elle aime ?", ["football", "cinéma", "lecture", "cuisine"][i % 4], "Dormir", "Rien", f"J'aime le _________.", ["football", "cinéma", "lecture", "cuisine"][i % 4], f"Elle aime le {['football', 'cinéma', 'lecture', 'cuisine'][i % 4]}."),
            _f("Le salaire est-il indiqué ?", "Non", "Oui", "En annexe", "Le _________ n'est pas indiqué.", "salaire", "Le salaire est indiqué.", vfC=1),
        ],
    ))

EXTRA_CE["e8-1"] = E8_1_CE_EXTRA
EXTRA_PO["e8-1"] = gen_po_batch("e8-1", [
    ("Se présenter", "Vous rencontrez quelqu'un.", AMI_A, AMI_B, [
        ("Bonjour, je suis nouveau ici.", "Bienvenue ! Tu viens d'où ?"),
        ("De Portugal.", "Moi, je suis de Lausanne."),
        ("Enchanté !", "Moi aussi !"),
    ]),
    ("Au café", "Vous commandez.", {"title": "Le serveur", "vous": "le serveur"}, CLI, [
        ("Bonjour, vous désirez ?", "Un café et un croissant."),
        ("Voici.", "Merci, combien ?"),
        ("Cinq francs.", "Voici."),
    ]),
    ("Chez le médecin", "Vous êtes malade.", MED, PAT, [
        ("Vous avez mal où ?", "À la tête."),
        ("Depuis quand ?", "Depuis hier."),
        ("Du repos.", "Merci docteur."),
    ]),
    ("À la pharmacie", "Vous achetez un médicament.", PHARM, CLI, [
        ("Bonjour !", "Bonjour, de l'aspirine."),
        ("Voici.", "Merci."),
    ]),
    ("Demander son chemin", "Vous êtes perdu.", TOUR, PASS, [
        ("La gare, s'il vous plaît ?", "Tout droit, puis à gauche."),
        ("Merci !", "De rien."),
    ]),
    ("À l'hôtel", "Vous arrivez.", REC, CLI, [
        ("Bonjour, une chambre ?", "Pour combien de nuits ?"),
        ("Deux.", "Voici la clé."),
    ]),
    ("Au marché", "Vous achetez des légumes.", {"title": "Le vendeur", "vous": "le vendeur"}, CLI, [
        ("Des tomates ?", "Un kilo, s'il vous plaît."),
        ("Trois francs.", "Merci."),
    ]),
    ("Au restaurant", "Vous dînez.", {"title": "Le serveur", "vous": "le serveur"}, CLI, [
        ("Vous avez choisi ?", "La salade et le poisson."),
        ("Très bien.", "L'eau, s'il vous plaît."),
    ]),
    ("Téléphone", "Vous appelez un ami.", AMI_A, AMI_B, [
        ("Allô ?", "Salut, tu es libre samedi ?"),
        ("Oui !", "On va au cinéma ?"),
    ]),
    ("Au travail", "Vous parlez avec un collègue.", {"title": "Le collègue", "vous": "le collègue"}, CLI, [
        ("Tu commences à quelle heure ?", "À 8 h."),
        ("Moi à 9 h.", "On déjeune ensemble ?"),
    ]),
])
EXTRA_PE["e8-1"] = gen_pe_batch("e8-1", [
    ("Se présenter", "Écrivez votre présentation.", "Présentez-vous : nom, âge, ville, travail.", ["Identité", "Ville", "Travail"]),
    ("Ma journée", "Décrivez votre journée type.", "Du matin au soir.", ["Matin", "Après-midi", "Soir"]),
    ("Ma famille", "Parlez de votre famille.", "Décrivez les membres de votre famille.", ["Membre 1", "Membre 2", "Activités"]),
    ("Mon logement", "Décrivez votre logement.", "Type, pièces, quartier.", ["Type", "Pièces", "Quartier"]),
    ("Mes vacances", "Racontez vos dernières vacances.", "Où, quand, avec qui.", ["Destination", "Activités", "Impressions"]),
    ("Mon repas préféré", "Parlez de nourriture.", "Décrivez votre plat préféré.", ["Le plat", "Ingrédients", "Pourquoi"]),
    ("Invitation", "Invitez un ami.", "Proposez une activité.", ["L'activité", "Date", "Lieu"]),
    ("Message maladie", "Vous êtes malade.", "Écrivez à votre professeur.", ["Maladie", "Absence", "Retour"]),
    ("Mon quartier", "Décrivez votre quartier.", "Commerces, transports, parcs.", ["Commerces", "Transports", "Ce que vous aimez"]),
    ("Bilan A1", "Faites le bilan.", "Décrivez ce que vous savez faire en français.", ["Comprendre", "Parler", "Écrire"]),
])
EXTRA_CE_EMAIL["e8-1"] = gen_email_ce_batch("vie quotidienne A1")
EXTRA_PE_EMAIL["e8-1"] = gen_pe_email_batch("e8-1", "la vie quotidienne")

# Validate all keys present
ALL_LESSONS = ["e5-1", "e5-2", "e6-1", "e6-2", "e6-3", "e7-1", "e7-2", "e7-3", "e8-1"]
for lk in ALL_LESSONS:
    assert len(EXTRA_CE.get(lk, [])) == 19, f"{lk} CE: {len(EXTRA_CE.get(lk, []))}"
    assert len(EXTRA_PO.get(lk, [])) == 10, f"{lk} PO: {len(EXTRA_PO.get(lk, []))}"
    assert len(EXTRA_PE.get(lk, [])) == 10, f"{lk} PE: {len(EXTRA_PE.get(lk, []))}"
    assert len(EXTRA_CE_EMAIL.get(lk, [])) == 19, f"{lk} CE_EMAIL: {len(EXTRA_CE_EMAIL.get(lk, []))}"
    assert len(EXTRA_PE_EMAIL.get(lk, [])) == 10, f"{lk} PE_EMAIL: {len(EXTRA_PE_EMAIL.get(lk, []))}"
