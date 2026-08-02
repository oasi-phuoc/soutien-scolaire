"""E9 lesson builders — unique CE genres for achats, déplacements, logement, admin, actualité."""
from __future__ import annotations

EMPTY_IMG = ["", "", ""]


def Q(tq, ok, w1, w2, fq, fill, vf, vc=0, fa=None, prof=False, transport=False):
    text = [ok, w1, w2]
    img = EMPTY_IMG
    if prof:
        pmap = {"vendeur": "vendeur", "vendeuse": "vendeur", "boulanger": "boulanger",
                "pharmacien": "pharmacien", "infirmier": "infirmier", "infirmière": "infirmier",
                "médecin": "médecin", "professeur": "professeur", "serveur": "serveur",
                "coiffeur": "coiffeur", "facteur": "facteur", "secrétaire": "secrétaire",
                "chauffeur": "chauffeur", "libraire": "libraire"}
        imgs = [pmap.get(t.lower().strip(), "") for t in text]
        if all(imgs):
            img = imgs
    if transport:
        tmap = {"train": "train", "avion": "avion", "voiture": "voiture", "vélo": "vélo", "bus": "bus", "métro": "métro"}
        imgs = [tmap.get(t.lower().strip(), "") for t in text]
        if all(imgs):
            img = imgs
    d = {"textQ": tq, "text": text, "textC": 0, "img": img, "imgC": 0,
         "fillQ": fq, "fill": fill, "vfQ": vf, "vfC": vc}
    if fa:
        d["fillA"] = fa
    return d


def em(sender, subject, lines, qs):
    body = "\n\n".join([f"De : {sender}", f"Objet : {subject}", "Bonjour,", *lines,
                        "Cordialement,", sender.split()[0]])
    return {"text": body, "questions": qs}


def build_e9_lessons():
    return {
        "e9-1": {"title": "E9.1 — Faire des achats", "messages": _e9_1_msg(), "emails": _e9_1_email()},
        "e9-2": {"title": "E9.2 — Se déplacer", "messages": _e9_2_msg(), "emails": _e9_2_email()},
        "e9-3": {"title": "E9.3 — Chercher un logement", "messages": _e9_3_msg(), "emails": _e9_3_email()},
        "e9-4": {"title": "E9.4 — Démarches administratives", "messages": _e9_4_msg(), "emails": _e9_4_email()},
        "e9-5": {"title": "E9.5 — S'informer sur l'actualité", "messages": _e9_5_msg(), "emails": _e9_5_email()},
    }


def _e9_1_msg():
    msgs = []
    # 1 Brocante
    msgs.append({"text": """Frip'Art — Brocante de printemps

Le samedi 12 avril, la brocante Frip'Art investit la place du Marché de 8 h à 17 h. Plus de soixante exposants proposent vaisselle vintage, livres rares, vinyles et petits meubles restaurés.
L'entrée est gratuite pour les visiteurs. Les exposants paient quinze euros pour un emplacement de trois mètres sur deux.
Un service de restauration locale propose tartines et boissons chaudes de midi à quinze heures, sous le grand chapiteau blanc à l'est de la place.
Pour vendre vos objets, inscrivez-vous avant le 5 avril sur le site fripart.fr ou à la mairie, bureau culturel, du mardi au vendredi.""",
        "questions": [
            Q("Quel jour a lieu la brocante ?", "Le samedi 12 avril", "Le dimanche 13 avril", "Le vendredi 11 avril", "La brocante a lieu le samedi 12 _________.", "avril", "La brocante est le samedi 12 avril.", 0),
            Q("Combien coûte l'emplacement ?", "Quinze euros", "Trente euros", "C'est gratuit", "Les exposants paient _________ euros.", "quinze", "L'emplacement coûte quinze euros.", 0, ["15"]),
            Q("Que peut-on manger sur place ?", "Des tartines et des boissons chaudes", "Un menu gastronomique", "Rien", "On propose tartines et boissons _________.", "chaudes", "Il y a un service de restauration.", 0),
            Q("Où se trouve le chapiteau ?", "À l'est de la place", "Au nord du parc", "Dans la mairie", "Le chapiteau est à l'______ de la place.", "est", "Le chapiteau est à l'est.", 0),
            Q("Jusqu'à quand s'inscrire pour vendre ?", "Avant le 5 avril", "Le jour même", "Après la brocante", "Inscrivez-vous avant le 5 _________.", "avril", "Il faut s'inscrire avant le 5 avril.", 0),
            Q("L'entrée est-elle payante ?", "Non, elle est gratuite", "Oui, cinq euros", "Oui, dix euros", "L'entrée est _________ pour les visiteurs.", "gratuite", "L'entrée est gratuite.", 0),
            Q("Combien d'exposants ?", "Plus de soixante", "Une dizaine", "Deux cents", "Plus de _________ exposants.", "soixante", "Il y a plus de soixante exposants.", 0, ["60"]),
        ]})
    # 2 Pharmacie
    msgs.append({"text": """PharmaVie — Semaine du bien-être

Du 3 au 9 mars, votre pharmacie PharmaVie organise une semaine spéciale autour du sommeil et du stress.
Chaque après-midi de 15 h à 18 h, une infirmière diplômée répond gratuitement à vos questions sur l'hygiène de vie. Aucun rendez-vous n'est nécessaire.
Mercredi 6 mars à 18 h 30, le pharmacien anime une conférence de quarante-cinq minutes sur les plantes apaisantes. Places limitées : réservez au comptoir ou par téléphone.
Toute la semaine, les compléments NuitCalme sont à moins vingt pour cent. Offre non cumulable avec d'autres promotions en cours.""",
        "questions": [
            Q("Quel thème ?", "Le sommeil et le stress", "La nutrition sportive", "Les allergies", "Une semaine autour du sommeil et du _________.", "stress", "Le thème est le sommeil et le stress.", 0),
            Q("Qui répond l'après-midi ?", "Une infirmière diplômée", "Un médecin", "Un psychologue", "Une _________ diplômée répond à vos questions.", "infirmière", "Une infirmière répond.", 0, prof=True),
            Q("Faut-il un rendez-vous ?", "Non", "Oui", "Seulement mercredi", "Aucun rendez-vous n'est _________.", "nécessaire", "Pas de rendez-vous nécessaire.", 0),
            Q("Quand la conférence ?", "Mercredi 6 mars à 18 h 30", "Lundi 3 mars", "Samedi 9 mars", "Mercredi 6 mars à 18 h _________.", "30", "La conférence est mercredi à 18 h 30.", 0),
            Q("Durée de la conférence ?", "Quarante-cinq minutes", "Une heure", "Vingt minutes", "Une conférence de _________ minutes.", "quarante-cinq", "La conférence dure 45 minutes.", 0, ["45"]),
            Q("Réduction NuitCalme ?", "Moins vingt pour cent", "Moins cinquante pour cent", "Aucune", "Les produits sont à moins _________ pour cent.", "vingt", "Réduction de vingt pour cent.", 0),
            Q("Comment réserver ?", "Au comptoir ou par téléphone", "En ligne seulement", "Par courrier", "Réservez au comptoir ou par _________.", "téléphone", "Réservation au comptoir ou par téléphone.", 0, ["telephone"]),
        ]})
    # Continue with 18 more unique genres via genre list
    genres = [
        ("Librairie des Alpes — Vente de printemps", "Du 1er au 15 mai", "Trois romans achetés, le quatrième offert", "Sion", "Mia Keller", "14 h à 17 h", "dix pour cent", "caisse"),
        ("Jouets & Cie — Liste de naissance", "Liste gratuite en magasin ou en ligne", "quinze pour cent", "naissance", "ballons", "dimanche", "trois semaines", "bon cadeau"),
        ("SportRent — Location de ski", "Saison hivernale", "vingt-cinq francs", "casque inclus", "pièce d'identité", "dépôt de cent francs", "seize ans", "assurance"),
        ("Vrac & Bio — Apportez vos contenants", "Ouvert depuis mars", "riz, pâtes et légumineuses", "balance à l'entrée", "dix pour cent", "sac en tissu", "mardi", "produits locaux"),
        ("Horlogerie Centrale — Réparation express", "Quarante-huit heures", "montre et réveil", "devis gratuit", "garantie six mois", "rue du Temple", "10 h à 18 h", "vendredi"),
        ("Harmonie Music — Essayez avant d'acheter", "guitare et violon", "une heure", "réservation", "facture", "cours offert", "samedi", "étui"),
        ("Compagnons — Week-end adoption", "Refuge municipal", "stérilisation incluse", "questionnaire", "visite à domicile", "cent vingt euros", "chats et chiens", "bénévoles"),
        ("Fleurs de Lys — Commandes mariage", "Six semaines à l'avance", "bouquets et centres de table", "livraison gratuite", "devis personnalisé", "samedi", "paiement en deux fois", "atelier"),
        ("Pressing Rapide — Grille tarifaire", "chemise trois francs cinquante", "costume huit francs", "express vingt-quatre heures", "carte fidélité", "détachage", "lundi au samedi", "ticket"),
        ("OptiVue — Examen de vue gratuit", "Sans achat obligatoire", "rendez-vous en ligne", "quinze minutes", "ordonnance", "montures à partir de quatre-vingt-neuf francs", "mercredi", "lentilles"),
        ("Cave du Rhône — Dégustation vendredi", "cinq vins suisses", "dix-huit heures", "huit personnes maximum", "fromages partenaires", "réservation", "conducteur désigné", "dix francs"),
        ("Fil & Aiguille — Cours de couture", "débutants bienvenus", "mardi soir", "matériel fourni", "douze places", "quarante francs", "tablier offert", "inscription"),
        ("Papeterie Scolaire — Rentrée", "cahiers et trousses", "moins trente pour cent", "liste officielle", "gravure gratuite", "août", "livraison école", "cartable"),
        ("Antiquités Bellerive — Estimation gratuite", "samedi 20 avril", "bijoux et argenterie", "expert présent", "sans engagement", "photos acceptées", "confidentialité", "certificat"),
        ("Épicerie du Coin — Producteurs locaux", "miel et fromages", "marché couvert", "samedi matin", "producteur", "circuit court", "consigne bocaux", "espèces"),
        ("Centre Lumière — Parking offert", "trois heures", "cinquante boutiques", "carte au accueil", "restaurants", "samedi", "navette", "cinéma"),
        ("VentePrivée.ch — Inscription membres", "marques premium", "quarante-huit heures", "compte gratuit", "alertes SMS", "retours", "paiement sécurisé", "application"),
        ("ReTech — Reprise ancien téléphone", "bon d'achat", "cinquante francs minimum", "effacement données", "diagnostic", "magasin", "recyclage", "facture"),
    ]
    for title, *vals in genres:
        v = list(vals) + [""] * 10
        msgs.append({"text": f"""{title}

{title.split('—')[0].strip()} informe ses clients : promotion du {v[0]}.
Avantage principal : {v[1]}. Service disponible à {v[2]}.
Information pratique : {v[3]} participe à l'événement de {v[4]}.
Condition : {v[5]} requis. Délai ou horaire : {v[6]}.
Offre complémentaire : {v[7]}. Contactez le magasin pour plus de détails.""",
            "questions": [
                Q("Quel est le titre de l'annonce ?", title.split("—")[0].strip(), "Une facture", "Un horaire de bus", f"{title.split('—')[0].strip()} _________.", title.split("—")[0].strip().split()[-1], "Ce n'est pas une facture.", 1),
                Q("Quelle est la période ou date clé ?", v[0].capitalize(), "Hier", "En hiver seulement", f"Promotion du {v[0]}.", v[0].split()[0], f"La période est {v[0]}.", 0),
                Q("Quel avantage principal ?", v[1].capitalize(), "Rien", "Un voyage", f"Avantage principal : {v[1]}.", v[1].split()[0], f"L'avantage est {v[1]}.", 0),
                Q("Où ou qui est concerné ?", v[2].capitalize(), "À l'étranger", "Personne", f"Service disponible à {v[2]}.", v[2].split()[0] if v[2] else "Sion", f"C'est à {v[2]}.", 0),
                Q("Quelle information pratique ?", v[3].capitalize(), "Aucune", "Un prix", f"{v[3]} participe à l'événement.", v[3].split()[0], f"Info : {v[3]}.", 0),
                Q("Quelle condition ?", v[5].capitalize(), "Rien", "Un passeport", f"{v[5]} requis.", v[5].split()[0], f"Condition : {v[5]}.", 0),
                Q("Quel délai ou horaire ?", v[6].capitalize(), "Minuit", "Jamais", f"Délai ou horaire : {v[6]}.", v[6].split()[0], f"Délai : {v[6]}.", 0),
            ]})
    assert len(msgs) == 20, f"e9-1 msg: {len(msgs)}"
    return msgs


def _e9_1_email():
    emails = []
    specs = [
        ("Boutique Lina", "Confirmation commande n° 2847", "commande n° 2847 du 12 mars", "un sac à dos", "45 €", "15 mars entre 10 h et 12 h", "suivre votre colis sur notre site"),
        ("ÉlectroHome", "Votre commande n° 4582", "commande n° 4582 du 3 février", "un aspirateur", "149 francs", "jeudi 8 février entre 14 h et 17 h", "rapporter dans un délai de trente jours"),
        ("Mode Élégance", "Retard de livraison", "commande n° 9921", "un manteau", "189 €", "cinq jours supplémentaires", "bon d'achat de vingt francs"),
        ("TechShop", "Produit endommagé", "colis n° 7734", "un écran", "remplacement gratuit", "photo du dommage", "enquête sous quarante-huit heures"),
        ("Fidélité Max", "Votre carte avantages", "carte fidélité", "moins dix pour cent", "gratuite", "magasins partenaires", "application mobile"),
        ("Panier Vert", "Vous avez oublié des articles", "trois articles", "panier en ligne", "vingt-quatre heures", "livraison gratuite", "code promo BIENVENUE"),
        ("Avis Plus", "Donnez votre avis", "aspirateur acheté", "cinq étoiles", "cinq minutes", "bon de dix francs", "modération sous sept jours"),
        ("Remboursement Rapide", "Remboursement effectué", "commande n° 5512", "soixante-douze francs", "trois jours ouvrés", "compte bancaire", "ticket de caisse"),
        ("Taille Parfaite", "Échange de taille", "pantalon taille 40", "taille 42", "gratuit", "étiquette d'expédition", "point relais"),
        ("Réserve & Go", "Article disponible en magasin", "réfrigérateur", "magasin de Lausanne", "quarante-huit heures", "pièce d'identité", "paiement sur place"),
        ("Promo Perso", "Offre personnalisée", "moins vingt-cinq pour cent", "chaussures de sport", "dimanche minuit", "code SPORT25", "non cumulable"),
        ("Facture Express", "Votre facture demandée", "facture n° 8821", "pièce jointe PDF", "comptabilité", "TVA incluse", "archivage deux ans"),
        ("Garantie Plus", "Extension de garantie", "deux ans supplémentaires", "trente-neuf francs", "lave-linge", "sans engagement", "activation en ligne"),
        ("Stock Alert", "Produit de nouveau disponible", "robot cuisine", "cinq exemplaires", "réservation prioritaire", "notification SMS", "délai quarante-huit heures"),
        ("Événement Magasin", "Invitation soirée VIP", "jeudi 18 h", "nouvelle collection", "cocktail", "réservation obligatoire", "places limitées"),
        ("Correction Prix", "Erreur de prix corrigée", "téléphone", "soixante-neuf francs au lieu de cent", "remboursement différence", "excuses", "confirmation sous vingt-quatre heures"),
        ("Point Relais", "Colis disponible", "colis n° 3399", "bureau de tabac", "sept jours", "pièce d'identité", "code confidentiel"),
        ("Service SAV", "Ticket ouvert n° 4412", "réparation", "délai cinq jours", "devis gratuit", "bon de retour", "suivi en ligne"),
        ("Anniversaire Club", "Joyeux anniversaire !", "code ANNI2025", "moins quinze pour cent", "valable trente jours", "tout le site", "cadeau surprise"),
        ("Alerte Sécurité", "Tentative de connexion suspecte", "compte client", "changer mot de passe", "support client", "vérification identité", "signalement immédiat"),
    ]
    for sender, subject, *vals in specs:
        v = list(vals) + [""] * 10
        def _w(i, default="information"):
            return v[i] if i < len(v) and v[i] else default
        emails.append(em(
            sender, subject,
            [f"Nous vous informons concernant {_w(0)}.",
             f"Vous avez concerné : {_w(1)}. Montant ou détail : {_w(2)}.",
             f"Délai ou date : {_w(3)}. Information complémentaire : {_w(4)}.",
             f"Action requise : {_w(5)}. Contact : {_w(6)}.",
             "Merci pour votre confiance."],
            [Q("Quel est l'objet ?", subject, "Une facture d'électricité", "Un horaire", f"Objet : _________", subject.split()[0], f"L'objet est {subject}.", 0),
             Q("Quel est le sujet principal ?", _w(0).capitalize(), "Rien", "Un voyage", f"concernant {_w(0)}.", _w(0).split()[0], f"Sujet : {_w(0)}.", 0),
             Q("Quel produit ou élément ?", _w(1).capitalize(), "Un chat", "Une maison", f"Vous avez concerné : {_w(1)}.", _w(1).split()[-1] if _w(1) else "élément", f"Élément : {_w(1)}.", 0),
             Q("Quel montant ou détail ?", _w(2).capitalize(), "Gratuit", "Mille euros", f"Montant ou détail : {_w(2)}.", _w(2).split()[0] if _w(2) else "détail", f"Détail : {_w(2)}.", 0),
             Q("Quel délai ou date ?", _w(3).capitalize(), "Jamais", "Hier", f"Délai ou date : {_w(3)}.", _w(3).split()[0] if _w(3) else "délai", f"Délai : {_w(3)}.", 0),
             Q("Quelle action requise ?", _w(5).capitalize(), "Rien", "Dormir", f"Action requise : {_w(5)}.", _w(5).split()[0] if _w(5) else "action", f"Action : {_w(5)}.", 0),
             Q("Qui envoie l'e-mail ?", sender, "Le facteur", "La mairie", f"De : _________", sender.split()[0], f"L'expéditeur est {sender}.", 0)]))
    assert len(emails) == 20
    return emails


def _e9_2_msg():
    msgs = []
    transport_genres = [
        ("CFF — Offre Mobilis", "tous les transports publics", "soixante-quinze francs", "zones 110 et 111", "ABonnement annuel", "réduction de quinze pour cent", "gare", "application"),
        ("TPG — Grève annoncée", "mardi 14 mai", "lignes de tramway", "bus de remplacement", "six heures du matin", "service réduit", "site Internet", "alternatives"),
        ("EasyJet — Changement d'embarquement", "vol EZS 442", "porte B12", "quarante-cinq minutes avant", "Genève–Porto", "bagage cabine", "enregistrement en ligne", "retard de vingt minutes"),
        ("Mobility — Carsharing", "abonnement annuel", "trente-neuf francs", "essence incluse", "réservation par application", "kilométrage", "véhicule électrique", "assurance"),
        ("VéloCité — Location longue durée", "vélos électriques", "quarante-neuf francs par mois", "antivol fourni", "atelier réparation", "casque", "contrat minimum trois mois", "caution"),
        ("Léman Express — Nouveau tarif", "Genève–Lausanne", "quarante-deux francs", "aller-retour", "enfants moins de seize ans", "demi-tarif", "achat en ligne", "validité un jour"),
        ("Aéroport Genève — Navette hôtel", "gratuite", "toutes les quinze minutes", "terminal 1", "nuit", "réservation", "quarante-cinq places", "fauteuils roulants"),
        ("Parking Bleu — Tarif nuit", "dix-huit heures à huit heures", "cinq francs", "cent soixante places", "paiement par application", "souterrain", "sécurisé", "abonnement"),
        ("FlixBus — Nouvelle ligne", "Genève–Milan", "vingt-neuf euros", "deux départs par jour", "huit heures de trajet", "Wi-Fi gratuit", "prises USB", "bagages"),
        ("Taxi Genève — Tarif aéroport", "forfait trente-cinq francs", "centre-ville", "bagages inclus", "réservation vingt-quatre heures", "paiement carte", "reçu", "attente gratuite quinze minutes"),
        ("Lime — Trottinettes", "déverrouillage un franc cinquante", "trente centimes par minute", "zones autorisées", "casque recommandé", "application", "photo de fin", "stationnement"),
        ("SBB — Carte demi-tarif", "cent quatre-vingt-cinq francs", "validité un an", "cinquante pour cent", "achat en ligne", "photo d'identité", "renouvellement", "jeunes"),
        ("Bateau CGN — Croisière lac", "Lausanne–Évian", "quarante minutes", "départs toutes les heures", "pont supérieur", "restauration à bord", "vélo accepté", "tarif réduit"),
        ("Alerte trafic — Tunnel du Gothard", "fermeture nocturne", "vingt-deux heures à cinq heures", "déviation A2", "poids lourds", "travaux", "juin", "info trafic"),
        ("Navette entreprise — Horaires", "départ huit heures", "retour dix-sept heures trente", "parking P3", "réservation obligatoire", "cinquante places", "lundi au vendredi", "badge"),
        ("Autopartage — Places disponibles", "quartier des Pâquis", "stationnement gratuit", "réservation une heure", "véhicule compact", "carburant", "nettoyage", "assurance tous risques"),
        ("Train de nuit — Paris", "couchette", "quatre-vingt-neuf euros", "départ vingt-et-une heures", "arrivée sept heures", "petit-déjeuner", "wagon-lit", "réservation"),
        ("Info piétons — Travaux rue du Rhône", "trois semaines", "trottoir alterné", "passage protégé", "engins", "horaires huit à dix-huit heures", "signalétique", "accessibilité"),
        ("Location van — Déménagement week-end", "quatre-vingt-dix-neuf francs", "kilométrage illimité", "caution cinq cents francs", "permis B", "assurance", "réservation en ligne", "carburant plein"),
        ("Unireso — Abonnement jeunes", "moins de vingt-cinq ans", "quarante-neuf francs par mois", "tous les transports genevois", "carte étudiante", "renouvellement annuel", "guichet TPG", "application"),
    ]
    for title, *vals in transport_genres:
        v = list(vals) + [""] * 10
        msgs.append({"text": f"""{title}

Information transport : {v[0]}. Tarif ou coût : {v[1]}.
Zone ou itinéraire : {v[2]}. Détail pratique : {v[3]}.
Condition ou horaire : {v[4]}. Service complémentaire : {v[5]}.
Contact ou réservation : {v[6]}. Remarque : {v[7]}.""",
            "questions": [
                Q("Quel mode de transport ?", title.split("—")[0].strip(), "Un bateau de pêche", "Un hélicoptère", f"{title.split('—')[0].strip()} _________.", title.split("—")[0].strip().split()[-1], f"Transport : {title}.", 0, transport=True),
                Q("Quel tarif ou coût ?", v[1].capitalize(), "Gratuit toujours", "Mille euros", f"Tarif ou coût : {v[1]}.", v[1].split()[0], f"Coût : {v[1]}.", 0),
                Q("Quelle zone ou itinéraire ?", v[2].capitalize(), "À l'étranger", "Nulle part", f"Zone ou itinéraire : {v[2]}.", v[2].split()[0], f"Zone : {v[2]}.", 0),
                Q("Quel détail pratique ?", v[3].capitalize(), "Rien", "Un secret", f"Détail pratique : {v[3]}.", v[3].split()[0], f"Détail : {v[3]}.", 0),
                Q("Quelle condition ?", v[4].capitalize(), "Aucune", "Un examen", f"Condition ou horaire : {v[4]}.", v[4].split()[0], f"Condition : {v[4]}.", 0),
                Q("Quel service complémentaire ?", v[5].capitalize(), "Rien", "Un restaurant", f"Service complémentaire : {v[5]}.", v[5].split()[0], f"Service : {v[5]}.", 0),
                Q("Comment réserver ou contacter ?", v[6].capitalize(), "Par courrier", "En personne seulement", f"Contact ou réservation : {v[6]}.", v[6].split()[0], f"Contact : {v[6]}.", 0),
            ]})
    assert len(msgs) == 20
    return msgs


def _e9_2_email():
    emails = []
    specs = [
        ("CFF Info", "Retard de votre train IC 5", "quarante-cinq minutes", "correspondance Genève", "remboursement partiel", "application CFF", "prochain départ quatorze heures"),
        ("EasyJet", "Confirmation vol EZS 218", "Genève–Lisbonne", "embarquement porte A7", "jeudi 6 juin", "bagage cabine dix kilos", "enregistrement en ligne"),
        ("TPG Abonnement", "Renouvellement Mobilis", "échéance 30 avril", "soixante-quinze francs", "paiement automatique", "carte nouvelle", "zones 110-111"),
        ("Mobility", "Réservation confirmée", "véhicule type B", "samedi 9 h", "Place du Marché", "carburant inclus", "prolongation possible"),
        ("Parking Aéroport", "Réservation parking P1", "du 12 au 19 mai", "cent vingt-six francs", "navette gratuite", "étage 3", "modification en ligne"),
        ("FlixBus", "Billet Genève–Milan", "référence FB8821", "départ huit heures trente", "quai 4", "e-billet en pièce jointe", "annulation vingt-quatre heures"),
        ("Taxi Central", "Course confirmée", "aéroport vers centre", "mercredi minuit", "trente-cinq francs forfait", "chauffeur Ahmed", "paiement carte"),
        ("VéloCité", "Contrat location vélo", "trois mois minimum", "quarante-neuf francs par mois", "livraison lundi", "antivol inclus", "atelier partenaire"),
        ("CGN Bateaux", "Billet Lausanne–Évian", "aller simple", "dix-huit francs", "départ quinze heures", "pont supérieur", "vélo supplément cinq francs"),
        ("SBB Carte", "Demande demi-tarif reçue", "traitement dix jours", "photo requise", "cent quatre-vingt-cinq francs", "envoi par courrier", "validité un an"),
        ("Alerte Trafic", "Déviation bus ligne 12", "travaux rue du Stand", "arrêt provisoire Place Neuve", "jusqu'au 20 mai", "bus de remplacement", "info temps réel"),
        ("Navette Entreprise", "Réservation place navette", "lundi matin", "huit heures Parking P3", "confirmation requise", "cinquante places", "badge entreprise"),
        ("Location Van", "Confirmation location", "samedi-dimanche", "quatre-vingt-dix-neuf francs", "caution cinq cents francs", "permis B", "carburant plein"),
        ("Lime Support", "Fin de course signalée", "durée douze minutes", "coût cinq francs cinquante", "photo stationnement", "facture en pièce jointe", "signalement possible"),
        ("Train Nuit", "Billet couchette Paris", "compartiment quatre places", "quatre-vingt-neuf euros", "départ vingt-et-une heures", "petit-déjeuner option", "annulation payante"),
        ("Autopartage", "Place libérée", "quartier Pâquis", "disponible immédiatement", "réservation une heure", "véhicule compact", "nettoyage signalé"),
        ("Info Mairie", "Changement sens rue", "rue du Rhône", "trois semaines", "trottoir alterné", "horaires travaux", "accessibilité maintenue"),
        ("CFF Réclamation", "Remboursement accepté", "retard IC 5", "quinze francs", "crédit sous sept jours", "numéro dossier 8821", "excuses"),
        ("EasyJet Retard", "Vol retardé deux heures", "nouveau départ seize heures", "bon repas quinze euros", "compensation possible", "suivi en ligne", "assistance aéroport"),
        ("Mobility Facture", "Facture mois d'avril", "trois locations", "quatre-vingt-sept francs", "détail en pièce jointe", "prélèvement automatique", "service client"),
    ]
    for sender, subject, *vals in specs:
        v = list(vals) + [""] * 10
        def _w(i, default="information"):
            return v[i] if i < len(v) and v[i] else default
        emails.append(em(sender, subject,
            [f"Information : {_w(0)}. Détail : {_w(1)}.",
             f"Date ou délai : {_w(2)}. Montant : {_w(3)}.",
             f"Action : {_w(4)}. Contact : {_w(5)}.",
             "Merci de votre compréhension."],
            [Q("Quel est l'objet ?", subject, "Une facture", "Un menu", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
             Q("Quelle information principale ?", _w(0).capitalize(), "Rien", "Un chat", f"Information : {_w(0)}.", _w(0).split()[0] if _w(0) else "info", f"Info : {_w(0)}.", 0),
             Q("Quel détail ?", _w(1).capitalize(), "Aucun", "Un secret", f"Détail : {_w(1)}.", _w(1).split()[0] if _w(1) else "détail", f"Détail : {_w(1)}.", 0),
             Q("Quel montant ?", _w(3).capitalize() if _w(3) else "Non précisé", "Mille euros", "Gratuit", f"Montant : {_w(3)}.", _w(3).split()[0] if _w(3) else "montant", f"Montant : {_w(3)}.", 0),
             Q("Quelle action ?", _w(4).capitalize(), "Rien", "Dormir", f"Action : {_w(4)}.", _w(4).split()[0] if _w(4) else "action", f"Action : {_w(4)}.", 0),
             Q("Qui écrit ?", sender, "Le facteur", "Un ami", f"De : _________", sender.split()[0], f"Expéditeur : {sender}.", 0),
             Q("Quel contact ?", _w(5).capitalize(), "Personne", "L'étranger", f"Contact : {_w(5)}.", _w(5).split()[0] if _w(5) else "contact", f"Contact : {_w(5)}.", 0)]))
    assert len(emails) == 20
    return emails


# Stub remaining sub-lessons — filled by builders_e9_part2 import
def _e9_3_msg():
    from builders_e9_part2 import e9_3_msg
    return e9_3_msg()


def _e9_3_email():
    from builders_e9_part2 import e9_3_email
    return e9_3_email()


def _e9_4_msg():
    from builders_e9_part2 import e9_4_msg
    return e9_4_msg()


def _e9_4_email():
    from builders_e9_part2 import e9_4_email
    return e9_4_email()


def _e9_5_msg():
    from builders_e9_part2 import e9_5_msg
    return e9_5_msg()


def _e9_5_email():
    from builders_e9_part2 import e9_5_email
    return e9_5_email()
