"""E4 scenarios — vêtements, restaurant, commerces alimentaires."""
from generate_all_data import Q

PROMPTS = {
    "document": ("Quel type de document est-ce ?", "C'est _________.", ["une facture d'électricité", "une carte scolaire"]),
    "vêtement": ("Quel vêtement est mentionné ?", "Le vêtement est _________.", ["un livre", "une chaise"]),
    "couleur": ("Quelle couleur est mentionnée ?", "La couleur est _________.", ["transparent", "multicolore"]),
    "taille": ("Quelle taille est indiquée ?", "La taille est _________.", ["taille 0", "XXXL géant"]),
    "prix": ("Quel prix est indiqué ?", "Le prix est _________.", ["1000 francs", "gratuit toujours"]),
    "commerce": ("Quel commerce est mentionné ?", "Le commerce est _________.", ["une école", "une banque"]),
    "plat": ("Quel plat est mentionné ?", "Le plat est _________.", ["une voiture", "un cahier"]),
    "boisson": ("Quelle boisson est mentionnée ?", "La boisson est _________.", ["de l'essence", "du savon"]),
    "heure": ("Quand cela se passe-t-il ?", "C'est _________.", ["à minuit", "en 1990"]),
    "lieu": ("Où cela se passe-t-il ?", "Le lieu est _________.", ["à la plage", "à l'aéroport"]),
    "produit": ("Quel produit est demandé ?", "Le produit est _________.", ["une télévision", "un vélo"]),
    "quantité": ("Quelle quantité est indiquée ?", "La quantité est _________.", ["mille pièces", "rien"]),
}

MSG_PATTERNS = [
    "{genre}\n\nJe regarde {main}. Détail important : {note}.\nL'information affichée est {when} chez {place}.\nAvant de partir, il faut {action}. Détail : {detail}.",
    "{genre}\n\nSalut ! Pour {main}, information : {when}.\nOn se retrouve chez {place}. {note} est le détail à vérifier.\nPense à {action}; Détail : {detail}.",
    "{genre}\n\nÀ noter aujourd'hui : {main}.\nLieu : {place}. Moment : {when}.\nPetit détail : {note}. Action prévue : {action}.\n{detail}.",
    "{genre}\n\nLa cliente hésite encore pour {main}.\nChez {place}, elle vérifie {note} et demande conseil.\nInformation : {when}. Elle doit {action}.\n{detail}.",
    "{genre}\n\nOffre courte sur {main}.\nElle est disponible chez {place}. Information : {when}.\nLe vendeur rappelle {note}. Pour profiter de l'offre, il faut {action}.\n{detail}.",
    "{genre}\n\nBonjour, votre demande pour {main} est prête.\nPassez chez {place}. Information : {when}.\nAu comptoir, annoncez {note} et pensez à {action}.\n{detail}.",
    "{genre}\n\nListe rapide avant de sortir : {main}.\nAdresse : {place}. Moment prévu : {when}.\nDétail à ne pas oublier : {note}.\nSur place, il faut {action}. Détail : {detail}.",
    "{genre}\n\nNotification du magasin : {main} est disponible.\nLe retrait se fait chez {place}. Information : {when}.\nLa note indique {note}.\nLe client doit {action}. Détail : {detail}.",
    "{genre}\n\nPetit avis sur {main}.\nJ'ai testé chez {place}; {note} m'a plu.\nJ'y retourne avec cette information : {when}. Action prévue : {action}.\n{detail}.",
    "{genre}\n\nCommande de groupe : {main}.\nLa personne responsable passe chez {place}. Information notée : {when}.\nElle confirme {note} par téléphone.\nIl reste à {action}. Détail : {detail}.",
    "{genre}\n\nAlerte du jour : {main}.\nChez {place}, il reste peu de stock.\nInformation : {when}. Cherchez {note}.\nPour finaliser, il faut {action}. Détail : {detail}.",
    "{genre}\n\nConversation courte :\n— Tu veux {main} ?\n— Oui, chez {place}.\n— Information : {when}; détail : {note}.\n— D'accord, action : {action}. Détail : {detail}.",
    "{genre}\n\nSur l'ardoise, on lit {main}.\nLe lieu est {place}; l'information indiquée est {when}.\nLa ligne suivante parle de {note}.\nLe client doit {action}. Détail : {detail}.",
    "{genre}\n\nRappel dans le téléphone : {main}.\nDépart ou passage avec cette information : {when}.\nLieu : {place}.\nVérifier {note} avant de payer.\nEnsuite, {action}. Détail : {detail}.",
    "{genre}\n\nAnnonce locale : {main} arrive ce matin.\nChez {place}, l'information affichée est {when}.\n{note} est mis de côté.\nAction simple : {action}. Détail : {detail}.",
    "{genre}\n\nPetit message au vendeur : je viens pour {main}.\nJe serai chez {place}. Information : {when}.\nMerci de préparer {note}.\nSur place, je vais {action}. Détail : {detail}.",
    "{genre}\n\nCarte de fidélité : offre sur {main}.\nElle fonctionne chez {place}; information : {when}.\nLe détail lu en magasin est {note}.\nPour l'utiliser, il faut {action}. Détail : {detail}.",
    "{genre}\n\nPour la fête, il faut {main}.\nLa réservation est chez {place}. Information : {when}.\nLa vendeuse confirme {note}.\nDernière étape : {action}. Détail : {detail}.",
    "{genre}\n\nMessage de confirmation : {main}.\nLe retrait se fait chez {place}. Information : {when}.\nLa commande porte la note {note}.\nConsigne : {action}. Détail : {detail}.",
    "{genre}\n\nDernière idée du week-end : {main}.\nOn passe chez {place}. Information : {when}.\nOn regarde d'abord {note}.\nSi tout va bien, on peut {action}. Détail : {detail}.",
]
EMAIL_PATTERNS = [
    "De : {place}\nObjet : {main}\n\nBonjour,\n\nVotre demande est notée. Information principale : {when}. Le détail principal est {note}.\nConsigne : {action}. Détail : {detail}.\n\nCordialement",
    "De : Service client\nObjet : Confirmation\n\nBonjour,\n\nNous confirmons {main} chez {place}.\nInformation : {when}. La note du dossier : {note}.\nAction demandée : {action}. Détail : {detail}.\n\nService client",
    "De : {place}\nObjet : Rappel avant votre venue\n\nBonjour,\n\nAvant de venir pour {main}, vérifiez {note}.\nInformation indiquée : {when}. Sur place, il faudra {action}.\n{detail}.\n\nMerci",
    "De : Boutique en ligne\nObjet : Votre suivi\n\nBonjour,\n\nVotre demande pour {main} avance.\nPoint de retrait : {place}. Information : {when}.\nDétail à confirmer : {note}. Consigne : {action}.\n\nBoutique en ligne",
    "De : {place}\nObjet : Offre limitée\n\nBonjour,\n\nL'offre sur {main} est disponible. Information : {when}.\nElle concerne {note}. Pour en profiter, consigne : {action}.\n{detail}.\n\nÀ bientôt",
    "De : Réservation\nObjet : Préparation\n\nBonjour,\n\nNous préparons {main}. Vous pouvez passer chez {place}. Information : {when}.\nLa fiche indique {note}. Au comptoir, pensez à {action}.\n{detail}.\n\nRéservation",
    "De : Carte fidélité\nObjet : Avantage du jour\n\nBonjour,\n\nVotre avantage concerne {main}.\nIl est disponible chez {place}. Information : {when}. Détail : {note}.\nPour l'activer, il faut {action}. Détail : {detail}.\n\nCarte fidélité",
    "De : {place}\nObjet : Dernière vérification\n\nBonjour,\n\nNous gardons {main}. Information : {when}.\nLa note enregistrée est {note}. Consigne : {action} au moment de votre venue.\n{detail}.\n\nCordialement",
    "De : Support\nObjet : Question reçue\n\nBonjour,\n\nVous avez posé une question sur {main}.\nRéponse : chez {place}, c'est possible. Information : {when}.\nIl faut seulement {action}. {note}. Détail : {detail}.\n\nSupport",
    "De : {place}\nObjet : Commande de groupe\n\nBonjour,\n\nLa commande pour {main} est prévue. Information : {when}.\nElle porte la note {note}. Consigne : {action} avant le retrait.\n{detail}.\n\nLe magasin",
    "De : Alerte stock\nObjet : Disponibilité\n\nBonjour,\n\n{main} est de nouveau disponible chez {place}.\nInformation : {when}. Le détail à vérifier est {note}.\nConsigne : {action}. Détail : {detail}.\n\nAlerte stock",
    "De : {place}\nObjet : Réponse à votre message\n\nBonjour,\n\nOui, nous avons {main}.\nVous pouvez passer. Information : {when}. Demandez la note {note}.\nEnsuite, action simple : {action}. Détail : {detail}.\n\nMerci",
    "De : Ardoise du jour\nObjet : Information\n\nBonjour,\n\nAujourd'hui, nous proposons {main}.\nC'est disponible chez {place}. Information : {when}. Détail : {note}.\nAction conseillée : {action}. Détail : {detail}.\n\nBonne journée",
    "De : Rappel automatique\nObjet : Rendez-vous\n\nBonjour,\n\nVotre rappel concerne {main}.\nRendez-vous chez {place}. Information : {when}. Vérifiez {note}.\nConsigne : {action}. Détail : {detail}.\n\nRappel automatique",
    "De : {place}\nObjet : Nouveauté\n\nBonjour,\n\nLa nouveauté {main} arrive. Information : {when}.\nElle est liée à {note}. Pour la réserver, vous pouvez {action}.\n{detail}.\n\nÀ bientôt",
    "De : Vendeur\nObjet : Message noté\n\nBonjour,\n\nJ'ai bien noté votre demande pour {main}.\nJe vous attends chez {place}. Information : {when}. Je prépare {note}.\nSur place, vous pourrez {action}. Détail : {detail}.\n\nLe vendeur",
    "De : Programme fidélité\nObjet : Votre offre\n\nBonjour,\n\nVotre offre porte sur {main}.\nElle fonctionne chez {place}; information : {when}. La condition est {note}.\nN'oubliez pas cette action : {action}. Détail : {detail}.\n\nProgramme fidélité",
    "De : {place}\nObjet : Fête confirmée\n\nBonjour,\n\nPour votre fête, {main} est réservé.\nInformation : {when}. La fiche indique {note}.\nConsigne : {action}. Détail : {detail}.\n\nCordialement",
    "De : Confirmation\nObjet : Retrait\n\nBonjour,\n\nVotre retrait pour {main} est prêt chez {place}.\nInformation : {when}. La note est {note}.\nConsigne : {action}. Détail : {detail}.\n\nConfirmation",
    "De : {place}\nObjet : Idée week-end\n\nBonjour,\n\nPour ce week-end, nous conseillons {main}.\nInformation : {when}. Regardez {note} avant de choisir.\nVous pourrez {action}. Détail : {detail}.\n\nBon week-end",
]


def build_e4_lessons():
    return {
        "e4-1": {"title": "E4.1 Acheter des vêtements", "messages": _make(CLOTHES, clothes_facts, False), "emails": _make(_emails(CLOTHES), clothes_facts, True)},
        "e4-2": {"title": "E4.2 Au restaurant", "messages": _make(RESTAURANT, restaurant_facts, False), "emails": _make(_emails(RESTAURANT), restaurant_facts, True)},
        "e4-3": {"title": "E4.3 À la boulangerie", "messages": _make(BAKERY, bakery_facts, False), "emails": _make(_emails(BAKERY), bakery_facts, True)},
    }


def F(kind, answer):
    q, fill_q, wrongs = PROMPTS[kind]
    return Q(q, answer, wrongs[0], wrongs[1], fill_q, answer, f"Le texte mentionne {answer}.", 0)


def _make(rows, fact_builder, email):
    patterns = EMAIL_PATTERNS if email else MSG_PATTERNS
    items = []
    for idx, row in enumerate(rows):
        genre, doc, main, when, place, note, action, detail = row
        text = patterns[idx].format(genre=genre, main=main, when=when, place=place, note=note, action=action, detail=detail)
        items.append({"text": text, "questions": [F(k, v) for k, v in fact_builder(row)]})
    return items


def _emails(rows):
    return [(g, "un e-mail", main, when, place, note, action, detail) for g, _doc, main, when, place, note, action, detail in rows]


def clothes_facts(r):
    return [("document", r[1]), ("vêtement", r[2]), ("prix", r[3]), ("commerce", r[4]), ("couleur", r[5]), ("taille", r[7])]


def restaurant_facts(r):
    return [("document", r[1]), ("plat", r[2]), ("heure", r[3]), ("lieu", r[4]), ("boisson", r[5]), ("prix", r[7])]


def bakery_facts(r):
    return [("document", r[1]), ("produit", r[2]), ("heure", r[3]), ("commerce", r[4]), ("quantité", r[5]), ("prix", r[7])]

CLOTHES = [
    ("SMS amie", "un SMS", "une robe d'été", "59 francs", "H&M", "bleu", "essayer la robe", "taille M"),
    ("Petite annonce", "une annonce", "un manteau d'hiver", "80 francs", "vente entre particuliers", "noir", "contacter le vendeur", "taille L"),
    ("WhatsApp shopping", "un WhatsApp", "un jean slim", "69 francs", "C&A", "gris", "vérifier la cabine", "taille 32"),
    ("Note shopping", "une note", "un pull en laine", "45 francs", "Migros mode", "rouge", "prendre la carte client", "taille S"),
    ("Message vendeur", "un message", "une chemise blanche", "39 francs", "Zara", "blanc", "demander le cintre", "taille M"),
    ("Forum mode", "un forum", "des baskets de sport", "89 francs", "Decathlon", "blanc et noir", "utiliser la carte fidélité", "taille 42"),
    ("E-mail boutique", "un e-mail", "un pantalon de costume", "99 francs", "PKZ", "bleu marine", "réserver l'ourlet", "taille 48"),
    ("Affiche vitrine", "une affiche", "une écharpe en soie", "25 francs", "Boutique Soie+", "vert", "passer au comptoir", "taille unique"),
    ("Avis client", "un avis", "une jupe plissée", "35 francs", "Promod", "rose", "garder le ticket", "taille 38"),
    ("Commande de groupe", "une commande", "des shorts de sport", "29 francs", "Intersport", "noir", "payer avant jeudi", "taille L"),
    ("Alerte stock", "une alerte", "des chaussettes", "12 francs", "Coop mode", "blanc", "prendre deux packs", "taille 39-42"),
    ("Dialogue boutique", "un dialogue", "un costume complet", "250 francs", "Charles Vögele", "gris foncé", "prendre rendez-vous", "taille 50"),
    ("Ardoise soldes", "une ardoise", "un t-shirt coton", "15 francs", "Ochsner", "jaune", "choisir trois couleurs", "taille L"),
    ("Rappel téléphone", "un rappel", "un blouson jeans", "55 francs", "Gap", "bleu clair", "vérifier les manches", "taille M"),
    ("Annonce locale", "une annonce", "un legging yoga", "32 francs", "Athleta", "violet", "entrer le code promo", "taille S"),
    ("Message au vendeur", "un message", "des chaussures de ville", "60 francs", "friperie du Lac", "noir", "essayer la paire", "taille 40"),
    ("Offre fidélité", "une offre", "un manteau imperméable", "110 francs", "Globus", "kaki", "montrer la carte bonus", "taille XL"),
    ("Réservation fête", "une réservation", "une cravate en soie", "35 francs", "boutique homme", "bordeaux", "demander un coffret", "taille unique"),
    ("Confirmation retrait", "une confirmation", "un pyjama coton", "28 francs", "Manor", "bleu marine", "présenter le numéro", "taille M"),
    ("Idée week-end", "une idée", "une veste légère", "49 francs", "Outlet Aubonne", "beige", "comparer deux modèles", "taille L"),
]
RESTAURANT = [
    ("Menu du jour", "un menu", "salade et poisson", "à 12 h 30", "Restaurant Le Lac", "eau minérale", "réserver une table", "28 francs"),
    ("SMS réservation", "un SMS", "une fondue moitié-moitié", "à 19 h", "Fondue House", "vin blanc", "confirmer deux personnes", "35 francs"),
    ("WhatsApp livraison", "un WhatsApp", "une pizza margherita", "à 20 h", "Pizzeria Roma", "coca-cola", "payer à la livraison", "18 francs"),
    ("Note serveur", "une note", "un steak frites", "à 13 h", "table 8", "bière pression", "demander une cuisson à point", "32 francs"),
    ("Affiche spécialité", "une affiche", "un risotto aux champignons", "à midi", "Brasserie du Centre", "jus d'orange", "choisir le plat végétarien", "24 francs"),
    ("E-mail restaurant", "un e-mail", "un menu dégustation", "à 20 h 30", "Restaurant Le Sapin", "champagne", "préparer l'anniversaire", "65 francs"),
    ("Liste famille", "une liste", "un burger classique", "à 18 h 30", "Burger King", "limonade", "prendre une table en terrasse", "22 francs"),
    ("Notification ardoise", "une notification", "un filet de perche", "ce soir", "Café du Port", "vin du lac", "demander la vue sur le lac", "38 francs"),
    ("Avis client", "un avis", "des pâtes carbonara", "à 19 h 30", "Restaurant Italien", "eau gazeuse", "partager l'addition", "21 francs"),
    ("Commande de groupe", "une commande", "une salade César", "à 13 h", "Snack Bar", "thé glacé", "retirer sans croûtons", "16 francs"),
    ("Alerte cantine", "une alerte", "un menu enfant", "à midi", "table 6", "jus de pomme", "demander le jouet", "12 francs"),
    ("Dialogue café", "un dialogue", "une tarte aux pommes", "à 15 h", "Café Bellevue", "café", "prendre une part maison", "8 francs"),
    ("Ardoise happy hour", "une ardoise", "un plateau apéro", "de 17 h à 19 h", "bar du Centre", "spritz", "venir avec trois amis", "15 francs"),
    ("Rappel déjeuner", "un rappel", "une soupe du jour", "à 12 h", "table 10", "pain", "commander une entrée chaude", "9 francs"),
    ("Annonce terrasse", "une annonce", "un plateau de fruits de mer", "à 21 h", "terrasse du lac", "vin blanc", "confirmer la table", "55 francs"),
    ("Message cuisine", "un message", "un poulet rôti", "à 19 h", "table 14", "eau", "servir sans gluten", "26 francs"),
    ("Offre goûter", "une offre", "une crêpe sucrée", "à 16 h", "Crêperie Bretonne", "chocolat chaud", "choisir sucre ou chocolat", "10 francs"),
    ("Réservation midi", "une réservation", "un plat du jour et dessert", "entre 12 h et 14 h", "Formule Midi", "café", "manger rapidement", "22 francs"),
    ("Confirmation dîner", "une confirmation", "une salade niçoise", "à 20 h", "terrasse 5", "rosé", "garder la table dehors", "19 francs"),
    ("Idée végan", "une idée", "un menu végétalien", "à 19 h", "Restaurant Vert", "smoothie", "demander les options bio", "25 francs"),
]
BAKERY = [
    ("Affiche vitrine", "une affiche", "une baguette tradition", "à 7 h", "Boulangerie Martin", "2 pièces", "passer tôt", "2.80 francs"),
    ("SMS commande", "un SMS", "des croissants au beurre", "demain à 8 h", "Boulangerie du Lac", "6 pièces", "réserver au prénom Marie", "12 francs"),
    ("Note commande", "une note", "un gâteau au chocolat", "samedi à 10 h", "Pâtisserie Douceur", "1 gâteau", "écrire le prénom", "35 francs"),
    ("WhatsApp voisin", "un WhatsApp", "un pain complet", "ce matin", "Pain & Co", "1 pain", "prendre un sac", "3.50 francs"),
    ("Ardoise du jour", "une ardoise", "une quiche lorraine", "à midi", "Boulangerie Centrale", "4 parts", "réchauffer cinq minutes", "18 francs"),
    ("E-mail bureau", "un e-mail", "des viennoiseries assorties", "vendredi à 7 h", "Viennoiserie Express", "12 pièces", "livrer à l'entreprise", "24 francs"),
    ("Liste famille", "une liste", "du pain aux noix", "à 17 h", "Maison du Pain", "2 pains", "couper les tranches", "7 francs"),
    ("Notification sandwich", "une notification", "des sandwichs jambon-fromage", "de 11 h à 14 h", "Le Fournil", "3 sandwiches", "prendre la formule", "15 francs"),
    ("Avis client", "un avis", "une tarte aux pommes", "dimanche", "Boulangerie des Alpes", "1 tarte", "réserver avant midi", "22 francs"),
    ("Commande de groupe", "une commande", "des brioches", "le matin", "Boulangerie Rossi", "4 brioches", "payer ensemble", "8 francs"),
    ("Alerte pâtisserie", "une alerte", "des éclairs au chocolat", "cet après-midi", "Pâtisserie Fine", "6 éclairs", "choisir les parfums", "18 francs"),
    ("Dialogue comptoir", "un dialogue", "une fougasse aux olives", "à midi", "Boulangerie Nyon", "2 pièces", "demander un sachet", "9 francs"),
    ("Ardoise campagne", "une ardoise", "un pain de campagne", "toute la journée", "Fournil Tradition", "1 pain", "demander la cuisson foncée", "4 francs"),
    ("Rappel frigo", "un rappel", "du pain de mie", "ce soir", "Coop boulangerie", "2 paquets", "acheter avant fermeture", "5 francs"),
    ("Annonce nouveauté", "une annonce", "du pain sans gluten", "à 7 h", "Artisan Boulanger", "1 pain", "réserver la veille", "5.50 francs"),
    ("Message au boulanger", "un message", "des chaussons aux pommes", "le matin", "Boulangerie Soleil", "8 pièces", "mettre de côté", "16 francs"),
    ("Offre fidélité", "une offre", "des madeleines", "après l'école", "Pains & Gourmandises", "12 pièces", "montrer la carte", "10 francs"),
    ("Réservation mariage", "une réservation", "une pièce montée", "samedi à 16 h", "Pâtisserie Mariage", "3 étages", "confirmer le prénom", "120 francs"),
    ("Confirmation retrait", "une confirmation", "un pain aux céréales", "tous les matins", "Boulangerie Village", "1 pain", "présenter le numéro", "4.20 francs"),
    ("Idée dessert", "une idée", "une boîte de macarons", "24 h avant", "Pâtisserie Fine", "12 macarons", "choisir les parfums", "24 francs"),
]
