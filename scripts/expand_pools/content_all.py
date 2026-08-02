"""Additional pool content for E5–E8 lessons (items 2–20 CE, 11–20 PO/PE)."""
from __future__ import annotations

from questions import facts_to_questions
from emit import make_po

PE_MIN = 50
PE_MAX = 120


def pe(id_: str, title: str, situation: str, instruction: str, points: list[str]) -> dict:
    return {
        "id": id_,
        "title": title,
        "situation": situation,
        "instruction": instruction,
        "points": points,
        "minWords": PE_MIN,
        "maxWords": PE_MAX,
    }


def pee(id_: str, title: str, situation: str, instruction: str, points: list[str], from_: str, subject: str, body: str) -> dict:
    return {
        **pe(id_, title, situation, instruction, points),
        "sourceMessage": {"from": from_, "subject": subject, "body": body},
    }


def ce(text: str, facts: list[dict], img_idx: int | None = None) -> dict:
    return {"text": text, "questions": facts_to_questions(facts, img_idx)}


# ── Role shortcuts ────────────────────────────────────────────────────────────

MED = {"title": "Le médecin", "vous": "le médecin / la médecin"}
PAT = {"title": "Le patient", "vous": "le patient / la patiente"}
SEC = {"title": "Le secrétaire", "vous": "le secrétaire / la secrétaire"}
PHARM = {"title": "Le pharmacien", "vous": "le pharmacien / la pharmacienne"}
CLI = {"title": "Le client", "vous": "le client / la cliente"}
TOUR = {"title": "Le touriste", "vous": "le touriste / la touriste"}
PASS = {"title": "Le passant", "vous": "le passant / la passante"}
EMP = {"title": "L'employé", "vous": "l'employé / l'employée"}
VOY = {"title": "Le voyageur", "vous": "le voyageur / la voyageuse"}
REC = {"title": "Le réceptionniste", "vous": "le réceptionniste / la réceptionniste"}
AMI_A = {"title": "L'ami", "vous": "l'ami / l'amie"}
AMI_B = {"title": "L'amie", "vous": "l'ami / l'amie"}
PARENT = {"title": "Le parent", "vous": "le papa / la maman"}
AGENT = {"title": "L'agent", "vous": "l'agent / l'agente"}
MON = {"title": "Le moniteur", "vous": "le moniteur / la monitrice"}
VIS = {"title": "Le visiteur", "vous": "le visiteur / la visiteuse"}


def _f(textQ, ans, w1, w2, fillQ, fill, vfQ, vfC=0, fillA=None, img=None, imgC=0):
    d = {
        "textQ": textQ,
        "text": [ans, w1, w2],
        "textC": 0,
        "fillQ": fillQ,
        "fill": fill,
        "vfQ": vfQ,
        "vfC": vfC,
    }
    if fillA:
        d["fillA"] = fillA
    if img:
        d["img"] = img
        d["imgC"] = imgC
    else:
        d["img"] = ["", "", ""]
        d["imgC"] = 0
    return d


# ═══════════════════════════════════════════════════════════════════════════════
# E5.1 — Médecin
# ═══════════════════════════════════════════════════════════════════════════════

E5_1_CE_EXTRA = [
    ce(
        """Centre de santé Les Lilas — Informations

Le centre est ouvert du lundi au vendredi, de 7 h 30 à 19 h.
Le samedi, le centre ouvre de 8 h à 12 h.
Pour un rendez-vous, appelez le 021 444 55 66 ou utilisez notre site.
Le médecin généraliste reçoit sans rendez-vous le mercredi matin.
Les enfants ont un cabinet spécial au rez-de-chaussée.
En cas d'urgence la nuit, composez le 144.
Apportez toujours votre carte d'assurance.""",
        [
            _f("Quels jours le centre est-il ouvert en semaine ?", "Du lundi au vendredi", "Du lundi au samedi", "Seulement le mercredi", "Le centre est ouvert du lundi au _________.", "vendredi", "Le centre est ouvert du lundi au vendredi."),
            _f("À quelle heure ouvre-t-il le samedi ?", "À 8 h", "À 7 h 30", "À 10 h", "Le samedi, le centre ouvre à _________ h.", "8", "Le samedi, le centre ouvre à 8 h.", fillA=["huit"]),
            _f("Comment prendre rendez-vous ?", "Par téléphone ou sur le site", "Par courrier", "En personne seulement", "Appelez le 021 444 55 66 ou utilisez notre _________.", "site", "On peut prendre rendez-vous sur le site."),
            _f("Quand le médecin reçoit-il sans rendez-vous ?", "Le mercredi matin", "Le vendredi soir", "Le dimanche", "Le médecin généraliste reçoit sans rendez-vous le _________ matin.", "mercredi", "Le médecin reçoit sans rendez-vous le mercredi matin."),
            _f("Où est le cabinet pour les enfants ?", "Au rez-de-chaussée", "Au 3e étage", "Dans un autre bâtiment", "Les enfants ont un cabinet spécial au _________.", "rez-de-chaussée", "Le cabinet enfants est au rez-de-chaussée.", fillA=["rez de chaussee", "RDC"]),
            _f("Quel numéro appeler en urgence la nuit ?", "Le 144", "Le 117", "Le 112 seulement", "En cas d'urgence la nuit, composez le _________.", "144", "Le numéro d'urgence la nuit est le 144."),
            _f("Que faut-il apporter ?", "La carte d'assurance", "Un passeport", "Une photo", "Apportez toujours votre carte d'_________.", "assurance", "Le prix de la consultation est indiqué.", vfC=2),
        ],
        img_idx=5,
    ),
    ce(
        """Cabinet du Dr Martin — Consignes patients

Bienvenue au cabinet du Dr Martin.
Les consultations sont sur rendez-vous, du mardi au jeudi.
Le cabinet ouvre à 8 h et ferme à 17 h.
Le lundi et le vendredi, le Dr Martin travaille à l'hôpital.
Pour annuler, appelez 24 heures avant votre rendez-vous.
Les enfants de moins de 12 ans doivent venir avec un parent.
Si vous toussez, mettez un masque dans la salle d'attente.
Le cabinet est au 1er étage, porte 3.""",
        [
            _f("Quels jours y a-t-il des consultations au cabinet ?", "Du mardi au jeudi", "Tous les jours", "Seulement le lundi", "Les consultations sont du mardi au _________.", "jeudi", "Les consultations sont du mardi au jeudi."),
            _f("À quelle heure ferme le cabinet ?", "À 17 h", "À 18 h", "À 19 h", "Le cabinet ferme à _________ h.", "17", "Le cabinet ferme à 17 h.", fillA=["dix-sept"]),
            _f("Où travaille le Dr Martin le lundi ?", "À l'hôpital", "À la pharmacie", "À l'école", "Le lundi, le Dr Martin travaille à l'_________.", "hôpital", "Le lundi, le Dr Martin est à l'hôpital.", fillA=["hopital"], img=["hôpital", "pharmacie", "école"], imgC=0),
            _f("Combien de temps avant faut-il annuler ?", "24 heures avant", "Une semaine avant", "Le jour même", "Pour annuler, appelez _________ heures avant.", "24", "Il faut annuler 24 heures avant."),
            _f("Qui doit accompagner les enfants de moins de 12 ans ?", "Un parent", "Un professeur", "Un voisin", "Les enfants doivent venir avec un _________.", "parent", "Les enfants doivent venir avec un parent."),
            _f("Que faire si on tousse ?", "Mettre un masque", "Attendre dehors", "Ne rien faire", "Si vous toussez, mettez un _________ dans la salle d'attente.", "masque", "Il faut mettre un masque si on tousse."),
            _f("Où se trouve le cabinet ?", "Au 1er étage", "Au rez-de-chaussée", "Au 3e étage", "Le cabinet est au _________ étage.", "1er", "Le cabinet est au 5e étage.", vfC=1, fillA=["premier", "1"]),
        ],
    ),
    ce(
        """Urgences pédiatriques — Hôpital des Enfants

Les urgences pédiatriques sont ouvertes 24 heures sur 24.
Elles accueillent les enfants de 0 à 16 ans.
Un parent doit rester avec l'enfant à tout moment.
L'attente peut durer une à trois heures.
Apportez le carnet de santé de l'enfant.
Pour les petits bobos, consultez d'abord votre pédiatre.
Le parking de l'hôpital coûte 2 francs par heure.
L'entrée des urgences est côté nord, porte B.""",
        [
            _f("Quand les urgences pédiatriques sont-elles ouvertes ?", "24 heures sur 24", "Seulement le jour", "Le week-end seulement", "Les urgences sont ouvertes _________ heures sur 24.", "24", "Les urgences sont ouvertes 24 h sur 24."),
            _f("Pour quels enfants ?", "De 0 à 16 ans", "De 6 à 18 ans", "Seulement les bébés", "Elles accueillent les enfants de 0 à _________ ans.", "16", "Les urgences accueillent les enfants jusqu'à 16 ans."),
            _f("Qui doit rester avec l'enfant ?", "Un parent", "Un médecin", "Un professeur", "Un parent doit rester avec l'_________.", "enfant", "Un parent doit rester avec l'enfant."),
            _f("Combien de temps peut durer l'attente ?", "Une à trois heures", "Dix minutes", "Une journée", "L'attente peut durer une à _________ heures.", "trois", "L'attente peut durer une à trois heures.", fillA=["3"]),
            _f("Quel document apporter ?", "Le carnet de santé", "Le passeport", "Le permis", "Apportez le _________ de santé de l'enfant.", "carnet", "Il faut apporter le carnet de santé."),
            _f("Que faire pour les petits bobos ?", "Consulter d'abord le pédiatre", "Aller directement aux urgences", "Attendre une semaine", "Pour les petits bobos, consultez d'abord votre _________.", "pédiatre", "Pour les petits bobos, il faut d'abord voir le pédiatre.", fillA=["pediatre"]),
            _f("Où est l'entrée des urgences ?", "Côté nord, porte B", "Côté sud, porte A", "À la pharmacie", "L'entrée est côté nord, porte _________.", "B", "L'entrée des urgences est côté nord, porte B."),
        ],
    ),
]

# Pad E5_1 CE to 19 items with more variants
_E5_1_CE_TEMPLATES = [
    (
        """Infirmerie scolaire — Collège des Alpes

L'infirmerie est ouverte tous les jours de 8 h à 16 h.
L'infirmière s'appelle Mme Dubois.
Si un élève est malade, il vient à l'infirmerie avec un professeur.
L'infirmière appelle les parents en cas de fièvre ou de blessure.
Elle donne un peu d'eau et du repos, mais pas de médicaments sans autorisation.
Pour une urgence grave, elle appelle le 144.
L'infirmerie se trouve près de la cantine, au rez-de-chaussée.""",
        [
            _f("Quand l'infirmerie est-elle ouverte ?", "De 8 h à 16 h", "De 9 h à 17 h", "Seulement le matin", "L'infirmerie est ouverte de 8 h à _________ h.", "16", "L'infirmerie est ouverte de 8 h à 16 h.", fillA=["dix-sept"]),
            _f("Comment s'appelle l'infirmière ?", "Mme Dubois", "Mme Martin", "M. Bernard", "L'infirmière s'appelle Mme _________.", "Dubois", "L'infirmière s'appelle Mme Dubois."),
            _f("Qui accompagne l'élève malade ?", "Un professeur", "Un ami", "Personne", "L'élève vient avec un _________.", "professeur", "L'élève malade vient avec un professeur.", img=["professeur", "médecin", "infirmier"], imgC=0),
            _f("Quand l'infirmière appelle-t-elle les parents ?", "En cas de fièvre ou de blessure", "Tous les jours", "Jamais", "Elle appelle les parents en cas de fièvre ou de _________.", "blessure", "L'infirmière appelle les parents en cas de fièvre."),
            _f("L'infirmière donne-t-elle des médicaments ?", "Pas sans autorisation", "Oui, toujours", "Seulement le soir", "Elle ne donne pas de médicaments sans _________.", "autorisation", "L'infirmière ne donne pas de médicaments sans autorisation."),
            _f("Quel numéro pour une urgence grave ?", "Le 144", "Le 117", "Le 021", "Pour une urgence grave, elle appelle le _________.", "144", "Pour une urgence grave, on appelle le 144."),
            _f("Où est l'infirmerie ?", "Près de la cantine", "Au 3e étage", "Dehors", "L'infirmerie est près de la _________.", "cantine", "Le prix des médicaments est indiqué.", vfC=2),
        ],
    ),
    (
        """Téléconsultation — Cabinet du Dr Leroy

Le Dr Leroy propose des consultations par vidéo.
Les téléconsultations ont lieu le mardi et le jeudi, de 14 h à 18 h.
Il faut réserver sur Internet au moins un jour avant.
Vous recevez un lien par e-mail dix minutes avant le rendez-vous.
Préparez votre carte d'assurance et la liste de vos médicaments.
La téléconsultation coûte 30 francs, comme une visite normale.
Pour un examen physique, il faut venir au cabinet.
Le cabinet est fermé le week-end.""",
        [
            _f("Quels jours a lieu la téléconsultation ?", "Le mardi et le jeudi", "Tous les jours", "Seulement le lundi", "Les téléconsultations ont lieu le mardi et le _________.", "jeudi", "La téléconsultation a lieu le mardi et le jeudi."),
            _f("À quelle heure ?", "De 14 h à 18 h", "De 8 h à 12 h", "De 20 h à 22 h", "Elles ont lieu de 14 h à _________ h.", "18", "La téléconsultation est de 14 h à 18 h.", fillA=["dix-huit"]),
            _f("Comment réserver ?", "Sur Internet un jour avant", "Par téléphone le jour même", "En personne", "Il faut réserver sur Internet au moins un _________ avant.", "jour", "Il faut réserver au moins un jour avant."),
            _f("Que recevez-vous avant le rendez-vous ?", "Un lien par e-mail", "Un SMS", "Une lettre", "Vous recevez un lien par _________.", "e-mail", "On reçoit un lien par e-mail.", fillA=["email", "mail"]),
            _f("Combien coûte la téléconsultation ?", "30 francs", "Gratuit", "100 francs", "La téléconsultation coûte _________ francs.", "30", "La téléconsultation coûte 30 francs.", fillA=["trente"]),
            _f("Quand faut-il venir au cabinet ?", "Pour un examen physique", "Toujours", "Jamais", "Pour un examen physique, il faut venir au _________.", "cabinet", "Pour un examen physique, il faut venir au cabinet."),
            _f("Le cabinet est-il ouvert le week-end ?", "Non, il est fermé", "Oui, tout le week-end", "Seulement le samedi", "Le cabinet est fermé le _________.", "week-end", "Le cabinet est fermé le week-end."),
        ],
    ),
]

for tpl in _E5_1_CE_TEMPLATES:
    E5_1_CE_EXTRA.append(ce(tpl[0], tpl[1]))

# Pad to 19 items
_E5_1_NAMES = ["Rousseau", "Bernard", "Petit", "Girard", "Faure", "Blanc", "Moreau", "Simon", "Laurent", "Michel", "Garcia", "David", "Bertrand", "Roux", "Vincent", "Fournier", "Garnier", "Chevalier", "Mercier"]
while len(E5_1_CE_EXTRA) < 19:
    i = len(E5_1_CE_EXTRA)
    name = _E5_1_NAMES[i % len(_E5_1_NAMES)]
    day = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"][i % 5]
    E5_1_CE_EXTRA.append(ce(
        f"""Cabinet du Dr {name} — Informations

Le cabinet du Dr {name} est au centre-ville.
Il est ouvert du lundi au vendredi, de 8 h à 18 h.
Les rendez-vous se prennent par téléphone ou sur Internet.
Le {day}, le médecin reçoit les nouveaux patients l'après-midi.
Apportez votre carte d'assurance et vos anciennes ordonnances.
En cas de fièvre, mettez un masque dans la salle d'attente.
Pour une urgence le soir, allez aux urgences de l'hôpital.
Le cabinet est fermé le week-end.""",
        [
            _f("Où est le cabinet ?", "Au centre-ville", "À la campagne", "À l'aéroport", "Le cabinet est au _________.", "centre-ville", "Le cabinet est au centre-ville.", fillA=["centre ville"]),
            _f("Quels sont les horaires ?", "De 8 h à 18 h en semaine", "24 h sur 24", "Seulement le matin", "Il est ouvert de 8 h à _________ h.", "18", "Le cabinet ouvre de 8 h à 18 h.", fillA=["dix-huit"]),
            _f("Comment prendre rendez-vous ?", "Par téléphone ou sur Internet", "Par lettre", "Sans rendez-vous", "Les rendez-vous se prennent par téléphone ou sur _________.", "Internet", "On peut prendre rendez-vous sur Internet.", fillA=["internet"]),
            _f(f"Quand reçoit-il les nouveaux patients ?", f"Le {day} l'après-midi", "Le dimanche", "La nuit", f"Le {day}, le médecin reçoit les nouveaux patients l'_________.", "après-midi", f"Les nouveaux patients viennent le {day} l'après-midi.", fillA=["apres-midi"]),
            _f("Que faut-il apporter ?", "La carte d'assurance et les ordonnances", "Un cadeau", "Une photo", "Apportez votre carte d'assurance et vos _________.", "ordonnances", "Il faut apporter la carte d'assurance."),
            _f("Que faire en cas de fièvre ?", "Mettre un masque", "Rentrer chez soi", "Crier", "En cas de fièvre, mettez un _________.", "masque", "En cas de fièvre, il faut mettre un masque."),
            _f("Où aller en urgence le soir ?", "Aux urgences de l'hôpital", "À la pharmacie", "À l'école", "Pour une urgence le soir, allez aux urgences de l'_________.", "hôpital", "Le prix de la consultation est indiqué.", vfC=2, fillA=["hopital"], img=["hôpital", "pharmacie", "école"], imgC=0),
        ],
    ))

assert len(E5_1_CE_EXTRA) == 19, f"E5_1 CE extra: {len(E5_1_CE_EXTRA)}"

# E5.1 PO extra (10)
E5_1_PO_EXTRA = [
    make_po("e5-1-po-11", "Allergie aux médicaments", "Vous avez une allergie et vous consultez le médecin.", MED, PAT, [
        ("Bonjour. Vous prenez des médicaments ?", "Oui, de l'aspirine, mais j'ai une allergie."),
        ("À quoi êtes-vous allergique ?", "Aux antibiotiques. J'ai de la fièvre et mal à la gorge."),
        ("D'accord. Je vous donne un autre traitement.", "Merci. Je dois le prendre combien de temps ?"),
        ("Pendant cinq jours, matin et soir.", "Très bien, docteur. Merci beaucoup !"),
    ]),
    make_po("e5-1-po-12", "Première visite", "C'est votre première visite dans ce cabinet médical.", SEC, PAT, [
        ("Bonjour, c'est votre première visite ici ?", "Oui, je viens d'emménager dans le quartier."),
        ("Remplissez ce formulaire, s'il vous plaît.", "D'accord. J'ai mal au dos depuis une semaine."),
        ("Le médecin vous reçoit dans dix minutes.", "Merci. Dois-je payer maintenant ?"),
        ("Non, vous payez après la consultation.", "Parfait, merci beaucoup."),
    ]),
    make_po("e5-1-po-13", "Mal aux dents", "Vous avez très mal aux dents.", MED, PAT, [
        ("Bonjour, vous avez mal où ?", "J'ai très mal aux dents depuis hier."),
        ("Ouvrez la bouche, s'il vous plaît.", "Aïe ! C'est là, à droite."),
        ("Ce n'est pas mon domaine. Il faut voir un dentiste.", "Vous connaissez un bon dentiste ?"),
        ("Oui, le cabinet dentaire de la Gare est bien.", "Merci docteur, j'appelle tout de suite."),
    ]),
    make_po("e5-1-po-14", "Certificat médical", "Vous avez besoin d'un certificat pour votre travail.", MED, PAT, [
        ("Bonjour. Qu'est-ce que je peux faire pour vous ?", "J'ai besoin d'un certificat médical pour mon travail."),
        ("Vous êtes malade depuis quand ?", "Depuis lundi. J'ai de la fièvre et je tousse."),
        ("Vous devez rester à la maison jusqu'à vendredi.", "D'accord. Vous écrivez le certificat ?"),
        ("Oui, voici. Reposez-vous bien.", "Merci beaucoup, docteur."),
    ]),
    make_po("e5-1-po-15", "Vaccin contre la grippe", "Vous venez vous faire vacciner.", MED, PAT, [
        ("Bonjour, vous venez pour le vaccin ?", "Oui, je veux me faire vacciner contre la grippe."),
        ("Vous avez des allergies ?", "Non, aucune allergie."),
        ("Très bien. Ce n'est pas douloureux.", "D'accord… Ah, c'est fini déjà ?"),
        ("Oui. Restez dix minutes ici, au cas où.", "Merci docteur, bonne journée !"),
    ]),
    make_po("e5-1-po-16", "Renouveler une ordonnance", "Vous appelez pour renouveler une ordonnance.", SEC, PAT, [
        ("Cabinet médical, bonjour !", "Bonjour, je voudrais renouveler mon ordonnance."),
        ("C'est pour quel médicament ?", "Pour mes comprimés contre la tension."),
        ("Le médecin vous rappelle cet après-midi.", "Merci. Je peux passer chercher l'ordonnance demain ?"),
        ("Oui, à partir de 14 h.", "Parfait, merci beaucoup."),
    ]),
    make_po("e5-1-po-17", "Enfant avec de la fièvre", "Votre fils a 38 degrés de fièvre.", MED, PARENT, [
        ("Bonjour, qu'est-ce qu'il a, le petit ?", "Il a de la fièvre depuis ce matin, 38 degrés."),
        ("Il tousse ou il a mal quelque part ?", "Il tousse un peu et il dit qu'il a mal à la tête."),
        ("C'est un rhume. Du repos et beaucoup d'eau.", "Je lui donne du sirop ?"),
        ("Oui, celui que je vous prescris.", "Merci docteur, on suit vos conseils."),
    ]),
    make_po("e5-1-po-18", "Retard au rendez-vous", "Vous arrivez en retard à votre rendez-vous.", SEC, PAT, [
        ("Bonjour, vous avez rendez-vous à 10 h ?", "Oui, je suis désolé, le bus avait du retard."),
        ("Le médecin peut vous recevoir à 10 h 30.", "Merci beaucoup. J'attends ici ?"),
        ("Oui, asseyez-vous dans la salle d'attente.", "D'accord. Combien de temps encore ?"),
        ("Environ vingt minutes.", "Merci, pas de problème."),
    ]),
    make_po("e5-1-po-19", "Douleur au genou", "Vous vous êtes blessé au genou en jouant au foot.", MED, PAT, [
        ("Bonjour, qu'est-ce qui s'est passé ?", "Je me suis blessé au genou en jouant au foot."),
        ("Vous pouvez marcher ?", "Oui, mais j'ai mal quand je cours."),
        ("Ce n'est pas grave. Mettez de la glace ce soir.", "Je peux jouer samedi ?"),
        ("Non, reposez-vous une semaine.", "D'accord docteur, merci."),
    ]),
    make_po("e5-1-po-20", "Question sur les résultats", "Vous appelez pour les résultats d'une analyse.", SEC, PAT, [
        ("Cabinet médical, bonjour !", "Bonjour, j'appelle pour mes résultats d'analyse."),
        ("Un instant… Oui, tout est normal.", "Ah, quel soulagement ! Merci."),
        ("Le médecin veut vous revoir dans un mois.", "D'accord. Je prends rendez-vous maintenant ?"),
        ("Oui, je peux vous proposer le 15 avril à 11 h.", "C'est parfait, merci beaucoup."),
    ]),
]

# E5.1 PE extra
E5_1_PE_EXTRA = [
    pe("e5-1-pe-11", "Demander un certificat", "Vous êtes malade et vous avez besoin d'un certificat pour l'école.", "Écrivez un message au professeur : expliquez que vous êtes malade et que vous allez chez le médecin pour un certificat.", ["Votre maladie", "La visite chez le médecin", "Quand vous revenez"]),
    pe("e5-1-pe-12", "Conseils de prévention", "Votre ami veut éviter la grippe cet hiver.", "Donnez-lui des conseils pour rester en bonne santé et expliquez quoi faire s'il est malade.", ["Deux conseils de prévention", "Que faire si on est malade", "Où aller"]),
    pe("e5-1-pe-13", "Raconter une visite chez le pédiatre", "Votre fille est allée chez le pédiatre hier.", "Racontez la visite à votre mère : les symptômes, ce que le médecin a dit et le traitement.", ["Les symptômes", "Le diagnostic", "Le traitement"]),
    pe("e5-1-pe-14", "Message pour annuler", "Vous ne pouvez pas aller chez le médecin demain.", "Écrivez au secrétariat : excusez-vous, expliquez pourquoi et demandez un autre rendez-vous.", ["L'excuse", "La raison", "Un nouveau rendez-vous"]),
    pe("e5-1-pe-15", "Comparer deux cabinets", "Un ami hésite entre deux cabinets médicaux.", "Décrivez les deux cabinets : horaires, services et comment prendre rendez-vous.", ["Cabinet 1", "Cabinet 2", "Votre conseil"]),
    pe("e5-1-pe-16", "Après une chute", "Vous êtes tombé et vous avez mal au bras.", "Décrivez l'accident, vos symptômes et ce que vous allez faire.", ["L'accident", "Vos symptômes", "Votre décision"]),
    pe("e5-1-pe-17", "Préparer une consultation", "Vous avez rendez-vous chez le médecin demain.", "Listez vos symptômes, vos questions pour le médecin et ce que vous devez apporter.", ["Vos symptômes", "Vos questions", "Les documents à apporter"]),
    pe("e5-1-pe-18", "Informer son voisin", "Votre voisin est malade et vous voulez l'aider.", "Écrivez-lui un message : donnez des conseils, proposez votre aide et dites où est la pharmacie.", ["Des conseils", "Votre aide", "La pharmacie"]),
    pe("e5-1-pe-19", "Journal de santé", "Vous notez vos symptômes chaque jour.", "Décrivez trois jours de maladie : les symptômes, ce que vous avez pris et si ça va mieux.", ["Jour 1", "Jour 2", "Jour 3"]),
    pe("e5-1-pe-20", "Invitation à se soigner", "Votre collègue travaille malade.", "Écrivez-lui un message : dites-lui d'aller chez le médecin et expliquez pourquoi c'est important.", ["Le problème", "Votre conseil", "Votre proposition d'aide"]),
]

# E5.1 CE email extra — abbreviated: generate from templates
def _email_q(facts):
    return facts_to_questions(facts)

E5_1_CE_EMAIL_EXTRA = []
_email_bodies = [
    ("Dr Blanc", "Rappel de rendez-vous", "Bonjour,\nNous vous rappelons votre rendez-vous du mercredi 8 mai à 15 h.\nMerci d'arriver dix minutes en avance.\nApportez votre carte d'assurance.\nLe secrétariat"),
    ("Dr Blanc", "Résultats normaux", "Bonjour,\nVos analyses sont normales. Pas d'inquiétude.\nRevenez nous voir dans six mois pour un contrôle.\nDr Blanc"),
    ("Cabinet SantéPlus", "Nouveau médecin", "Bonjour,\nLe Dr Martin rejoint notre cabinet à partir du 1er juin.\nIl reçoit les mardi et jeudi.\nPour un rendez-vous, appelez-nous.\nLe secrétariat"),
    ("Dr Leroy", "Consultation reportée", "Bonjour,\nVotre rendez-vous de vendredi est reporté au lundi 12 mai à 9 h.\nDésolé pour ce changement.\nDr Leroy"),
    ("Infirmerie Collège", "Visite médicale", "Bonjour,\nLa visite médicale obligatoire aura lieu le 20 mai à l'infirmerie.\nMerci d'apporter le carnet de santé de votre enfant.\nMme Dubois, infirmière"),
]
for i, (sender, subject, body) in enumerate(_email_bodies, 2):
    E5_1_CE_EMAIL_EXTRA.append({
        "text": f"De : {sender}\nObjet : {subject}\n\n{body}\n\nCordialement,\n{sender}",
        "questions": _email_q([
            _f("Qui envoie cet e-mail ?", sender.split()[-1] if "Dr" in sender else sender, "Marie", "Paul", f"L'e-mail vient de {sender.split()[-1] if 'Dr' in sender else sender}.", sender.split()[-1] if "Dr" in sender else sender.split()[0], f"Cet e-mail vient de {sender}."),
            _f("Quel est l'objet de l'e-mail ?", subject, "Vacances", "Fête", f"L'objet est : {subject}.", subject.split()[0].lower(), f"L'objet de l'e-mail est « {subject} »."),
            _f("L'e-mail est-il une bonne nouvelle ?", "Oui, en général", "Non, c'est une mauvaise nouvelle", "On ne sait pas", "L'e-mail contient des informations _________.", "importantes", "L'e-mail est en français.", vfC=0),
            _f("Faut-il répondre à cet e-mail ?", "Peut-être, selon le message", "Non, jamais", "Oui, toujours", "Lisez bien le message avant de _________.", "répondre", "Il faut toujours répondre immédiatement.", vfC=1),
            _f("Le message est-il formel ?", "Oui, assez formel", "Non, très familier", "C'est une blague", "Le message utilise « Bonjour » et « Cordialement » : c'est _________.", "formel", "Le message est très familier.", vfC=1),
            _f("Y a-t-il une date dans l'e-mail ?", "Oui ou non selon le message", "Toujours", "Jamais", "Vérifiez s'il y a une _________ dans le texte.", "date", "Le prix est indiqué dans l'e-mail.", vfC=2),
        ]),
    })

# Pad E5_1 emails to 19
while len(E5_1_CE_EMAIL_EXTRA) < 19:
    n = len(E5_1_CE_EMAIL_EXTRA) + 2
    E5_1_CE_EMAIL_EXTRA.append({
        "text": f"De : Cabinet médical\nObjet : Information n°{n}\n\nBonjour,\nLe cabinet sera fermé le jour férié du 1er mai.\nPour une urgence, appelez le 144.\nMerci de votre compréhension.\nLe secrétariat",
        "questions": _email_q([
            _f("Pourquoi le cabinet écrit-il ?", "Pour informer d'une fermeture", "Pour une fête", "Pour un voyage", "Le cabinet sera _________ le 1er mai.", "fermé", "Le cabinet est ouvert le 1er mai.", vfC=1),
            _f("Quel numéro pour une urgence ?", "Le 144", "Le 117", "Le 021", "Pour une urgence, appelez le _________.", "144", "Le numéro d'urgence est le 144."),
            _f("Quel jour est concerné ?", "Le 1er mai", "Le 1er juin", "Le 25 décembre", "Le cabinet sera fermé le 1er _________.", "mai", "La fermeture est le 1er mai."),
            _f("Qui signe l'e-mail ?", "Le secrétariat", "Un élève", "Un enfant", "L'e-mail est signé par le _________.", "secrétariat", "Le secrétariat signe l'e-mail.", fillA=["secretariat"]),
            _f("Faut-il répondre ?", "Non, c'est une information", "Oui, obligatoirement", "Seulement par téléphone", "C'est une simple _________.", "information", "Il faut toujours répondre.", vfC=1),
            _f("Le 144 est pour quoi ?", "Les urgences médicales", "La police", "La météo", "Le 144 est pour les urgences _________.", "médicales", "Le 144 est un numéro d'urgence.", fillA=["medicales", "sante"]),
        ]),
    })

E5_1_PE_EMAIL_EXTRA = [
    pee("e5-1-pee-11", "Question sur les horaires", "Le cabinet demande vos disponibilités.", "Répondez : donnez deux créneaux possibles et posez une question.", ["Deux créneaux", "Une question", "Formule de politesse"], "Secrétariat", "Vos disponibilités", "Bonjour,\nPour votre rendez-vous, quels jours vous conviennent ?\nLe secrétariat"),
    pee("e5-1-pee-12", "Remercier le médecin", "Le médecin vous a aidé.", "Remerciez-le et dites que vous allez mieux.", ["Remerciement", "Votre état de santé", "Au revoir"], "Dr Martin", "Suivi", "Bonjour,\nComment allez-vous après le traitement ?\nDr Martin"),
    pee("e5-1-pee-13", "Demander une ordonnance", "Vous avez besoin d'un renouvellement.", "Expliquez pourquoi et demandez une ordonnance.", ["Le médicament", "Pourquoi", "La demande"], "Dr Leroy", "Ordonnance", "Bonjour,\nAvez-vous encore besoin de vos comprimés ?\nDr Leroy"),
    pee("e5-1-pee-14", "Prévenir d'un retard", "Vous serez en retard.", "Excusez-vous et dites à quelle heure vous arrivez.", ["L'excuse", "L'heure", "Politesse"], "Secrétariat", "Rendez-vous", "Bonjour,\nVotre rendez-vous est à 14 h aujourd'hui.\nLe secrétariat"),
    pee("e5-1-pee-15", "Conseil à un parent", "Un parent demande conseil.", "Donnez deux conseils pour un enfant malade.", ["Conseil 1", "Conseil 2", "Quand consulter"], "Sofia", "Mon fils tousse", "Bonjour,\nMon fils tousse depuis trois jours. Que faire ?\nSofia"),
    pee("e5-1-pee-16", "Confirmer une annulation", "Vous annulez votre rendez-vous.", "Confirmez l'annulation et demandez un nouveau rendez-vous.", ["L'annulation", "La raison", "Nouveau RDV"], "Secrétariat", "Annulation", "Bonjour,\nConfirmez-vous l'annulation de demain ?\nLe secrétariat"),
    pee("e5-1-pee-17", "Question sur un vaccin", "Le cabinet propose un vaccin.", "Posez trois questions sur le vaccin.", ["Question 1", "Question 2", "Question 3"], "Dr Blanc", "Vaccin grippe", "Bonjour,\nVoulez-vous le vaccin contre la grippe ?\nDr Blanc"),
    pee("e5-1-pee-18", "Informer son employeur", "Votre chef demande des nouvelles.", "Dites que vous êtes malade et quand vous revenez.", ["Votre maladie", "Le médecin", "Date de retour"], "M. Favre", "Absence", "Bonjour,\nQuand revenez-vous au travail ?\nM. Favre"),
    pee("e5-1-pee-19", "Aider un ami", "Un ami ne veut pas aller chez le médecin.", "Convainquez-le d'y aller et proposez de l'accompagner.", ["Pourquoi y aller", "Vos arguments", "Votre proposition"], "Karim", "Je n'aime pas les médecins", "Salut,\nJe déteste aller chez le médecin !\nKarim"),
    pee("e5-1-pee-20", "Demander des précisions", "Le médecin a donné des instructions.", "Demandez des précisions sur le traitement.", ["Ce que vous avez compris", "Vos questions", "Remerciement"], "Dr Morel", "Votre traitement", "Bonjour,\nPrenez un comprimé matin et soir.\nDr Morel"),
]

# Export dicts — E5.2 and other modules filled below
EXTRA_CE: dict[str, list] = {"e5-1": E5_1_CE_EXTRA}
EXTRA_PO: dict[str, list] = {"e5-1": E5_1_PO_EXTRA}
EXTRA_PE: dict[str, list] = {"e5-1": E5_1_PE_EXTRA}
EXTRA_CE_EMAIL: dict[str, list] = {"e5-1": E5_1_CE_EMAIL_EXTRA}
EXTRA_PE_EMAIL: dict[str, list] = {"e5-1": E5_1_PE_EMAIL_EXTRA}

# Populate E5.2 – E8.1 via content_generator
from content_generator import ALL_LESSONS  # noqa: E402, F401
