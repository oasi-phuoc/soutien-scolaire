"""E4 scenarios — vêtements, restaurant, boulangerie."""
from generate_all_data import Q
from scenarios_common import render_email


def build_e4_lessons():
    return {
        "e4-1": {"title": "E4.1 Acheter des vêtements", "messages": _e4_1_messages(), "emails": _e4_1_emails()},
        "e4-2": {"title": "E4.2 Au restaurant", "messages": _e4_2_messages(), "emails": _e4_2_emails()},
        "e4-3": {"title": "E4.3 À la boulangerie", "messages": _e4_3_messages(), "emails": _e4_3_emails()},
    }


def _clothes_msg(header, writer, item, color, size, price, shop, promo):
    text = f"""{header}

{writer}
Article : {item}. Couleur : {color}.
Taille : {size}. Prix : {price} francs.
Magasin : {shop}.
Promotion : {promo}."""
    return {"text": text, "questions": [
        Q("Quel article ?", item.capitalize(), "Une voiture", "Un livre", f"Article : _________.", item, f"C'est {item}.", 0),
        Q("Quelle couleur ?", color.capitalize(), "Invisible", "Sept couleurs", f"Couleur : _________.", color, f"Couleur : {color}.", 0),
        Q("Quelle taille ?", size.upper() if len(size) <= 3 else size.capitalize(), "XXXL géant", "Taille 0", f"Taille : _________.", size, f"Taille : {size}.", 0),
        Q("Quel prix ?", f"{price} francs", "1 franc", "10000 francs", f"Prix : _________ francs.", price, f"Prix : {price} francs.", 0),
        Q("Quel magasin ?", shop, "Une pharmacie", "Une gare", f"Magasin : _________.", shop.split()[0], f"Magasin : {shop}.", 0),
        Q("Quelle promotion ?", promo.capitalize(), "Rien", "Un chat gratuit", f"Promotion : _________.", promo.split()[0], f"Promotion : {promo}.", 0),
        Q("Le texte parle-t-il d'un prix ?", "Oui", "Non", "On ne sait pas", f"Prix : _________ francs.", price, "Le texte indique un prix.", 0),
    ]}


def _e4_1_messages():
    specs = [
        ("SMS amie", "Salut !", "robe d'été", "bleu", "M", "59", "H&M", "-20 % cette semaine"),
        ("Petite annonce", "À VENDRE —", "manteau d'hiver", "noir", "L", "80", "entre particuliers", "bon état"),
        ("WhatsApp", "Hey !", "jean slim", "gris", "32", "69", "C&A", "2e à -50 %"),
        ("Note shopping", "À acheter —", "pull en laine", "rouge", "S", "45", "Migros mode", "soldes -30 %"),
        ("Message vendeur", "Bonjour,", "chemise blanche", "blanc", "M", "39", "Zara", "3 pour 2"),
        ("Forum mode", "Bonjour,", "baskets sport", "blanc et noir", "42", "89", "Decathlon", "carte fidélité -10 %"),
        ("E-mail boutique", "Bonjour,", "pantalon costume", "marine", "48", "99", "PKZ", "livraison gratuite"),
        ("Affichage magasin", "PROMO —", "écharpe en soie", "vert", "unique", "25", "boutique Soie+", "-40 % aujourd'hui"),
        ("SMS", "Coucou !", "jupe plissée", "rose", "38", "35", "Promod", "nouvelle collection"),
        ("Annonce Leboncoin", "Vends —", "veste en cuir", "marron", "M", "120", "Leboncoin", "prix négociable"),
        ("WhatsApp groupe", "Salut !", "short de sport", "noir", "L", "29", "Intersport", "membre -15 %"),
        ("Note", "Liste —", "chaussettes pack", "blanc", "39-42", "12", "Coop", "2e paire gratuite"),
        ("Message", "Bonjour,", "costume complet", "gris foncé", "50", "250", "Charles Vögele", "costume + cravate"),
        ("SMS", "Hey !", "t-shirt coton", "jaune", "L", "15", "Ochsner", "3 pour 25 francs"),
        ("Affichage", "SOLDES —", "blouson jeans", "bleu clair", "M", "55", "Gap", "-50 % soldes"),
        ("WhatsApp", "Salut !", "legging yoga", "violet", "S", "32", "Athleta", "nouveau client -20 %"),
        ("Petite annonce", "Cherche —", "chaussures ville", "noir", "40", "60", "friperie", "bon état accepté"),
        ("E-mail", "Bonjour,", "manteau imperméable", "kaki", "XL", "110", "Globus", "carte bonus -15 %"),
        ("Note", "Shopping —", "cravate soie", "bordeaux", "unique", "35", "boutique homme", "coffret cadeau"),
        ("SMS", "Coucou !", "pyjama coton", "bleu marine", "M", "28", "Manor", "promo nuit -25 %"),
    ]
    return [_clothes_msg(h, w, i, c, s, p, sh, pr) for h, w, i, c, s, p, sh, pr in specs]


def _e4_1_emails():
    emails = []
    specs = [
        ("H&M Genève", "Confirmation commande", "robe bleue taille M", "59 francs", "livraison 3-5 jours", "retour gratuit 30 jours"),
        ("Zara Online", "Votre colis est parti", "chemise blanche + pantalon", "138 francs", "livraison demain", "suivi en pièce jointe"),
        ("PKZ Lausanne", "Soldes d'hiver", "manteaux et pulls", "-30 à -50 %", "jusqu'au 28 février", "en magasin et en ligne"),
        ("Decathlon", "Carte fidélité", "baskets et vêtements sport", "-10 % permanent", "valable 1 an", "cumulable avec promos"),
        ("Globus", "Nouvelle collection", "costumes et cravates", "à partir de 199 francs", "conseiller en magasin", "essayage gratuit"),
        ("Promod", "Promo spéciale", "jupes et robes", "-40 % cette semaine", "code PROMO40", "en ligne seulement"),
        ("C&A", "2e article -50 %", "jeans et t-shirts", "offre limitée", "jusqu'à dimanche", "tous les magasins"),
        ("Manor", "Bon d'achat", "vêtements maison", "20 francs offerts", "dès 100 francs d'achat", "valable 2 semaines"),
        ("Intersport", "Membre club", "équipement sport", "-15 % sur tout", "adhésion gratuite", "points fidélité"),
        ("Ochsner", "Pack t-shirts", "3 t-shirts coton", "25 francs le lot", "couleurs au choix", "en magasin"),
        ("Boutique Soie+", "Nouveautés", "écharpes et foulards", "à partir de 25 francs", "livraison offerte", "dès 50 francs"),
        ("Leboncoin", "Annonce validée", "veste cuir marron", "120 francs", "contact acheteurs", "photos en ligne"),
        ("Gap", "Soldes finales", "blousons et jeans", "-50 %", "derniers jours", "stock limité"),
        ("Charles Vögele", "Costume sur mesure", "costume gris", "250 francs", "retouches gratuites", "rendez-vous en magasin"),
        ("Athleta", "Bienvenue", "leggings et brassières", "-20 % première commande", "code BIENVENUE20", "en ligne"),
        ("Coop mode", "Promo chaussettes", "pack de 3 paires", "2e pack gratuit", "jusqu'à vendredi", "en magasin"),
        ("Friperie du Lac", "Nouveautés", "vêtements seconde main", "dès 5 francs", "samedi et dimanche", "bon état garanti"),
        ("Migros mode", "Pulls en laine", "collection hiver", "dès 29 francs", "-30 % soldes", "en ligne et magasin"),
        ("Ikea textile", "Linge de maison", "pyjamas et serviettes", "promo famille", "jusqu'au 15 mars", "magasins Ikea"),
        ("Outlet Aubonne", "Outlet village", "marques premium", "-60 % max", "tous les jours", "navette gratuite"),
    ]
    for sender, subject, items, price, delivery, condition in specs:
        lines = [
            f"Merci pour votre intérêt chez {sender.split()[0]}.",
            f"Articles : {items}.",
            f"Prix : {price}.",
            f"Livraison/délai : {delivery}.",
            f"Condition : {condition}.",
        ]
        qs = [
            Q("Quels articles ?", items.capitalize(), "Une voiture", "Un chat", f"Articles : _________.", items.split()[0], f"Articles : {items}.", 0),
            Q("Quel prix ?", price, "1 franc", "Gratuit toujours", f"Prix : _________.", price.split()[0], f"Prix : {price}.", 0),
            Q("Quelle livraison/délai ?", delivery.capitalize(), "Jamais", "En 10 ans", f"Livraison : _________.", delivery.split()[0], f"Livraison : {delivery}.", 0),
            Q("Quelle condition ?", condition.capitalize(), "Rien", "Un chat", f"Condition : _________.", condition.split()[0], f"Condition : {condition}.", 0),
            Q("Quel est l'objet ?", subject, "Une facture d'électricité", "Un divorce", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
            Q("Quelle boutique ?", sender.split()[0], "Une pharmacie", "Une gare", f"chez _________.", sender.split()[0], f"C'est {sender}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails


def _restaurant_msg(header, writer, dish, price, drink, table, time, service):
    text = f"""{header}

{writer}
Plat : {dish}. Prix : {price} francs.
Boisson : {drink}. Table : {table}.
Heure : {time}. Service : {service}."""
    return {"text": text, "questions": [
        Q("Quel plat ?", dish.capitalize(), "Une voiture", "Un livre", f"Plat : _________.", dish, f"Plat : {dish}.", 0),
        Q("Quel prix ?", f"{price} francs", "1 franc", "1000 francs", f"Prix : _________ francs.", price, f"Prix : {price} francs.", 0),
        Q("Quelle boisson ?", drink.capitalize(), "De l'essence", "Du savon", f"Boisson : _________.", drink, f"Boisson : {drink}.", 0),
        Q("Quelle table ?", table, "Dehors", "À la plage", f"Table : _________.", table.split()[-1], f"Table : {table}.", 0),
        Q("À quelle heure ?", time, "3 h du matin", "Minuit", f"Heure : _________.", time.replace(" h", "").split(":")[0], f"Heure : {time}.", 0),
        Q("Quel type de service ?", service.capitalize(), "Aucun", "Un chat", f"Service : _________.", service.split()[0], f"Service : {service}.", 0),
        Q("Le plat coûte-t-il plus de 20 francs ?", "Oui" if int(price) > 20 else "Non", "Non" if int(price) > 20 else "Oui", "On ne sait pas", f"Prix : _________ francs.", price, f"Le prix est {price} francs.", 0),
    ]}


def _e4_2_messages():
    specs = [
        ("Menu du jour", "Restaurant Le Lac —", "salade et poisson", "28", "eau minérale", "n° 5 près de la fenêtre", "12 h 30", "serveur sympathique"),
        ("SMS réservation", "Bonjour,", "fondue moitié-moitié", "35", "vin blanc", "n° 12", "19 h", "réservation confirmée"),
        ("WhatsApp", "Salut !", "pizza margherita", "18", "coca-cola", "n° 3 terrasse", "20 h", "livraison à domicile"),
        ("Note serveur", "Table 8 —", "steak frites", "32", "bière pression", "n° 8", "13 h", "client régulier"),
        ("Affichage", "Spécialité —", "risotto aux champignons", "24", "jus d'orange", "n° 1", "midi", "plat végétarien"),
        ("E-mail restaurant", "Bonjour,", "menu dégustation 3 plats", "65", "champagne", "n° 15", "20 h 30", "anniversaire"),
        ("SMS", "Coucou !", "burger classique", "22", "limonade", "n° 7", "18 h 30", "en terrasse"),
        ("Ardoise", "Suggestion chef —", "filet de perche", "38", "vin du lac", "n° 4", "soir", "poisson du jour"),
        ("WhatsApp groupe", "Hey !", "pâtes carbonara", "21", "eau gazeuse", "n° 9", "19 h 30", "partager l'addition"),
        ("Note", "Commande —", "salade César", "16", "thé glacé", "à emporter", "13 h", "sans croûtons"),
        ("Message", "Bonjour,", "menu enfant", "12", "jus de pomme", "n° 6", "midi", "jouet offert"),
        ("SMS", "Salut !", "tarte aux pommes", "8", "café", "n° 2", "15 h", "dessert maison"),
        ("Affichage", "Happy hour —", "apéro plateaux", "15", "spritz", "bar", "17 h – 19 h", "promotion"),
        ("WhatsApp", "Coucou !", "soupe du jour", "9", "pain", "n° 10", "12 h", "entrée chaude"),
        ("Réservation", "Confirmé —", "plateau fruits de mer", "55", "vin blanc", "n° 20", "21 h", "vue sur le lac"),
        ("Note cuisine", "Table 14 —", "poulet rôti", "26", "eau", "n° 14", "19 h", "sans gluten"),
        ("SMS", "Hey !", "crêpe sucrée", "10", "chocolat chaud", "n° 11", "16 h", "goûter"),
        ("Menu", "Formule midi —", "plat du jour + dessert", "22", "café", "n° 3", "12 h – 14 h", "rapide"),
        ("WhatsApp", "Salut !", "salade niçoise", "19", "rosé", "terrasse n° 5", "20 h", "soirée chaude"),
        ("Message", "Bonjour,", "menu végétalien", "25", "smoothie", "n° 16", "19 h", "options végan"),
    ]
    return [_restaurant_msg(h, w, d, p, dr, t, tm, s) for h, w, d, p, dr, t, tm, s in specs]


def _e4_2_emails():
    emails = []
    specs = [
        ("Restaurant Le Lac", "Réservation confirmée", "table 5 à 19 h", "2 personnes", "menu à la carte", "terrasse si beau temps"),
        ("Pizzeria Roma", "Commande livraison", "pizza margherita + coca", "28 francs", "livraison 30 min", "paiement à la livraison"),
        ("Brasserie du Centre", "Menu du jour", "poisson + dessert", "32 francs", "midi 12 h – 14 h", "café inclus"),
        ("Restaurant Le Sapin", "Anniversaire", "menu dégustation 3 plats", "65 francs/personne", "samedi 20 h 30", "gâteau offert"),
        ("Café du Port", "Brunch réservé", "brunch complet", "28 francs", "dimanche 10 h", "jus d'orange frais"),
        ("Fondue House", "Réservation fondue", "fondue moitié-moitié", "35 francs/personne", "vendredi 19 h", "vin blanc conseillé"),
        ("Burger King", "Commande en ligne", "menu burger + frites", "18 francs", "retrait 15 min", "code QR en pièce jointe"),
        ("Sushi Zen", "Plateau sushi", "plateau 24 pièces", "45 francs", "livraison gratuite", "wasabi et gingembre inclus"),
        ("Crêperie Bretonne", "Crêpes sucrées", "2 crêpes + boisson", "20 francs", "après-midi", "nutella ou sucre"),
        ("Restaurant Indien", "Menu végétarien", "thali végétarien", "22 francs", "ce soir 19 h", "épicé niveau 2"),
        ("Steakhouse", "Réservation", "steak frites", "32 francs", "table 8 à 20 h", "cuisson à point"),
        ("Restaurant Chinois", "Menu famille", "5 plats à partager", "80 francs", "4 personnes", "thé offert"),
        ("Traiteur", "Buffet événement", "plateau apéro 20 pers.", "150 francs", "livraison samedi", "vaisselle incluse"),
        ("Restaurant Gastronomique", "Menu étoile", "menu 5 plats", "120 francs", "réservation obligatoire", "accord mets-vins"),
        ("Snack Bar", "Formule midi", "sandwich + boisson", "12 francs", "11 h – 15 h", "rapide"),
        ("Restaurant Italien", "Pâtes fraîches", "carbonara maison", "21 francs", "ce soir", "parmesan inclus"),
        ("Bar à vin", "Dégustation", "5 vins + fromages", "40 francs", "jeudi 18 h", "réservation 6 personnes max"),
        ("Restaurant Libanais", "Mezze", "assortiment mezze", "25 francs", "partage 2 pers.", "houmous et falafels"),
        ("Crêperie", "Galette salée", "galette complète", "16 francs", "midi", "cidre en option"),
        ("Restaurant Végétalien", "Menu vert", "3 plats vegan", "30 francs", "mardi 19 h", "produits bio"),
    ]
    for sender, subject, order, price, when, note in specs:
        lines = [
            f"Merci pour votre commande/réservation chez {sender.split()[0]}.",
            f"Commande : {order}.",
            f"Prix : {price}.",
            f"Quand : {when}.",
            f"Note : {note}.",
        ]
        qs = [
            Q("Quelle commande ?", order.capitalize(), "Une voiture", "Un chat", f"Commande : _________.", order.split()[0], f"Commande : {order}.", 0),
            Q("Quel prix ?", price, "1 franc", "Gratuit", f"Prix : _________.", price.split()[0], f"Prix : {price}.", 0),
            Q("Quand ?", when.capitalize(), "Jamais", "En 1800", f"Quand : _________.", when.split()[0], f"Quand : {when}.", 0),
            Q("Quelle note ?", note.capitalize(), "Rien", "Un chat", f"Note : _________.", note.split()[0], f"Note : {note}.", 0),
            Q("Quel restaurant ?", sender.split()[0], "Une pharmacie", "Une école", f"chez _________.", sender.split()[0], f"C'est {sender}.", 0),
            Q("Quel est l'objet ?", subject, "Une facture d'électricité", "Un examen", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails


def _bakery_msg(header, writer, product, quantity, price, time, baker, special):
    text = f"""{header}

{writer}
Produit : {product}. Quantité : {quantity}.
Prix : {price} francs. Heure : {time}.
Boulanger : {baker}.
Spécialité : {special}."""
    return {"text": text, "questions": [
        Q("Quel produit ?", product.capitalize(), "Une voiture", "Un livre", f"Produit : _________.", product, f"Produit : {product}.", 0),
        Q("Quelle quantité ?", quantity, "Rien", "Mille", f"Quantité : _________.", quantity.split()[0], f"Quantité : {quantity}.", 0),
        Q("Quel prix ?", f"{price} francs", "1 franc", "500 francs", f"Prix : _________ francs.", price, f"Prix : {price} francs.", 0),
        Q("À quelle heure ?", time, "Minuit", "4 h", f"Heure : _________.", time.replace(" h", "").split("–")[0].strip(), f"Heure : {time}.", 0),
        Q("Quel boulanger ?", baker, "Un chat", "Personne", f"Boulanger : _________.", baker.split()[-1], f"Boulanger : {baker}.", 0),
        Q("Quelle spécialité ?", special.capitalize(), "Rien", "De la pluie", f"Spécialité : _________.", special.split()[0], f"Spécialité : {special}.", 0),
        Q("Le texte mentionne-t-il une quantité ?", "Oui", "Non", "On ne sait pas", f"Quantité : _________.", quantity.split()[0], "Une quantité est indiquée.", 0),
    ]}


def _e4_3_messages():
    specs = [
        ("Affichage vitrine", "Boulangerie Martin —", "baguette tradition", "2 pièces", "2.80", "7 h – 19 h", "Thomas", "pain au levain"),
        ("SMS commande", "Bonjour,", "croissants au beurre", "6 pièces", "12", "demain 8 h", "Marie", "beurre AOP"),
        ("Note commande", "Pour samedi —", "gâteau au chocolat", "1 gâteau", "35", "samedi 10 h", "Sophie", "personnalisable"),
        ("WhatsApp", "Salut !", "pain complet", "1 pain", "3.50", "ce matin", "Paul", "farine bio"),
        ("Ardoise", "Du jour —", "quiche lorraine", "4 parts", "18", "midi", "Emma", "maison"),
        ("E-mail", "Bonjour,", "viennoiseries assorties", "12 pièces", "24", "vendredi 7 h", "Marco", "assortiment"),
        ("SMS", "Coucou !", "pain aux noix", "2 pains", "7", "17 h", "Nina", "noix du Jura"),
        ("Affichage", "Promo —", "sandwich jambon-fromage", "3 sandwiches", "15", "11 h – 14 h", "Hugo", "pain maison"),
        ("Note", "Réservation —", "tarte aux pommes", "1 tarte", "22", "dimanche", "Clara", "pommes locales"),
        ("WhatsApp", "Hey !", "brioche", "4 brioches", "8", "matin", "David", "recette grand-mère"),
        ("Message", "Bonjour,", "éclairs au chocolat", "6 éclairs", "18", "après-midi", "Léa", "chocolat suisse"),
        ("SMS", "Salut !", "fougasse aux olives", "2 pièces", "9", "midi", "Antoine", "olives de Provence"),
        ("Ardoise", "Spécial —", "pain de campagne", "1 pain", "4", "toute la journée", "Victor", "cuisson au feu de bois"),
        ("Note frigo", "À acheter —", "pain de mie", "2 paquets", "5", "ce soir", "Sara", "sans croûte"),
        ("WhatsApp", "Coucou !", "chausson aux pommes", "8 pièces", "16", "matin", "Inès", "pommes golden"),
        ("Affichage", "Nouveau —", "pain sans gluten", "1 pain", "5.50", "7 h", "Maya", "certifié"),
        ("SMS", "Hey !", "pizza bread", "2 pièces", "8", "midi", "Omar", "tomate et basilic"),
        ("Commande", "Pour mariage —", "pièce montée", "1 pièce", "120", "samedi 16 h", "Julie", "3 étages"),
        ("Note", "Goûter —", "madeleines", "12 pièces", "10", "15 h", "Tom", "recette française"),
        ("WhatsApp", "Salut !", "pain aux céréales", "1 pain", "4.20", "matin", "Karim", "5 céréales"),
    ]
    return [_bakery_msg(h, w, pr, q, p, t, b, s) for h, w, pr, q, p, t, b, s in specs]


def _e4_3_emails():
    emails = []
    specs = [
        ("Boulangerie Martin", "Commande confirmée", "6 croissants + 2 baguettes", "15.80 francs", "demain 8 h", "retrait au comptoir"),
        ("Boulangerie du Lac", "Gâteau anniversaire", "gâteau chocolat 20 parts", "45 francs", "samedi 14 h", "prénom sur le gâteau"),
        ("Pain & Co", "Pain bio", "pain complet + aux noix", "7 francs", "ce matin 7 h", "farine locale"),
        ("Viennoiserie Express", "Viennoiseries bureau", "20 croissants + pains chocolat", "48 francs", "lundi 7 h 30", "livraison entreprise"),
        ("Boulangerie Centrale", "Commande mariage", "pièce montée 3 étages", "120 francs", "samedi 16 h", "dégustation prévue"),
        ("Artisan Boulanger", "Pain sans gluten", "2 pains sans gluten", "11 francs", "mercredi", "certifié bio"),
        ("Boulangerie des Alpes", "Tarte aux fruits", "tarte saison", "28 francs", "dimanche midi", "fruits de saison"),
        ("Le Fournil", "Sandwichs traiteur", "10 sandwiches assortis", "50 francs", "vendredi midi", "livraison gratuite"),
        ("Boulangerie Rossi", "Brioches Pâques", "brioches décorées", "15 francs", "avant Pâques", "commande 48 h avant"),
        ("Maison du Pain", "Abonnement pain", "pain livré chaque jour", "25 francs/semaine", "dès lundi", "livraison matinale"),
        ("Boulangerie Bio", "Farine locale", "pain de campagne bio", "4.50 francs", "tous les jours", "farine du moulin voisin"),
        ("Pâtisserie Douceur", "Éclairs assortis", "12 éclairs 4 parfums", "36 francs", "samedi", "chocolat, café, vanille, pistache"),
        ("Boulangerie Express", "Commande rapide", "baguette + croissant", "4.50 francs", "dans 15 min", "paiement en ligne"),
        ("Fournil Tradition", "Pain au levain", "pain tradition 1 kg", "5 francs", "ce matin", "levain naturel"),
        ("Boulangerie Soleil", "Quiche du jour", "quiche lorraine 6 parts", "24 francs", "midi", "réchauffer 5 min"),
        ("Pains & Gourmandises", "Goûter enfants", "madeleines + jus", "12 francs", "après l'école", "sans arôme artificiel"),
        ("Boulangerie Nyon", "Fougasse", "fougasse olives 2 pièces", "9 francs", "samedi matin", "olives de Provence"),
        ("Art du Pain", "Cours boulangerie", "atelier pain maison", "60 francs", "samedi 9 h", "places limitées"),
        ("Boulangerie Village", "Pain aux céréales", "pain 5 céréales", "4.20 francs", "tous les matins", "graines de tournesol"),
        ("Pâtisserie Fine", "Macarons", "boîte 12 macarons", "24 francs", "commande 24 h avant", "parfums au choix"),
    ]
    for sender, subject, order, price, when, note in specs:
        lines = [
            f"Merci pour votre commande chez {sender.split()[0]}.",
            f"Commande : {order}.",
            f"Prix : {price}.",
            f"Quand : {when}.",
            f"Note : {note}.",
        ]
        qs = [
            Q("Quelle commande ?", order.capitalize(), "Une voiture", "Un chat", f"Commande : _________.", order.split()[0], f"Commande : {order}.", 0),
            Q("Quel prix ?", price, "1 franc", "Gratuit", f"Prix : _________.", price.split()[0], f"Prix : {price}.", 0),
            Q("Quand ?", when.capitalize(), "Jamais", "En 1800", f"Quand : _________.", when.split()[0], f"Quand : {when}.", 0),
            Q("Quelle note ?", note.capitalize(), "Rien", "Un chat", f"Note : _________.", note.split()[0], f"Note : {note}.", 0),
            Q("Quelle boulangerie ?", sender.split()[0], "Une pharmacie", "Une gare", f"chez _________.", sender.split()[0], f"C'est {sender}.", 0),
            Q("Quel est l'objet ?", subject, "Une facture d'électricité", "Un examen", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
        ]
        emails.append(render_email(sender, subject, lines, qs))
    return emails
