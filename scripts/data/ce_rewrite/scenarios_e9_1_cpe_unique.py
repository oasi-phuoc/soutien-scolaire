"""Unique replacement CE messages for E9.1 shopping templates."""
from __future__ import annotations

from scenarios_e10_unique import make_lesson, r


ROWS = [
    r("Boutique Lina", "le retrait d'un sac à dos bleu commandé en ligne", "comptoir retrait, rue du Marché 8", "vendredi entre 16 h et 18 h", "la commande porte le numéro 2847", "Prix déjà payé : 45 €", "présenter une pièce d'identité", "retrait@boutiquelina.fr", "Nadia"),
    r("Électro Service", "une garantie prolongée pour un lave-linge", "rayon service après-vente", "jusqu'au 30 avril", "la garantie couvre les pièces et le déplacement", "Supplément : 39 € pour trois ans", "garder la facture originale", "021 440 18 18", "Marc"),
    r("Librairie des Alpes", "une offre sur les romans de poche", "caisse de la librairie", "du 1er au 15 mai", "le quatrième roman est offert après trois achats", "Carte de fidélité gratuite", "demander le tampon avant de payer", "librairie.alpes@mail.fr", "Mia"),
    r("Jouets & Cie", "une liste de naissance à préparer", "espace conseils du magasin", "samedi à 10 h 30", "un vendeur aide à choisir poussette, lit et doudou", "Bon cadeau de 15 € dès 100 € d'achats", "prendre rendez-vous en magasin", "naissance@jouetscie.fr", "Sarah"),
    r("SportRent", "la location de skis pour le week-end", "atelier location, niveau -1", "vendredi dès 17 h", "le casque est inclus dans le prix", "Forfait week-end : 25 francs", "laisser une caution et montrer une pièce d'identité", "sport-rent@montagne.ch", "Yanis"),
    r("Vrac & Bio", "une remise sur les produits en vrac", "balance à l'entrée du magasin", "mardi toute la journée", "riz, pâtes et lentilles sont concernés", "Réduction : 10 % avec un sac en tissu", "peser les contenants avant de remplir", "vracbio@local.fr", "Clara"),
    r("Horlogerie Centrale", "un devis pour réparer une montre", "atelier derrière la vitrine", "jeudi entre 10 h et 18 h", "le devis est gratuit et valable quinze jours", "Garantie réparation : six mois", "déposer la montre avec son bracelet", "atelier@horlogerie.ch", "Omar"),
    r("Harmonie Music", "l'achat d'une guitare d'occasion", "coin instruments d'occasion", "samedi à 14 h", "la guitare est vendue avec un étui souple", "Prix : 120 francs, cours d'essai offert", "essayer l'instrument avant de payer", "music@harmonie.fr", "Lucie"),
    r("Refuge Compagnons", "une vente d'accessoires pour animaux", "stand devant le refuge municipal", "dimanche de 9 h à 12 h", "les bénéfices paient les soins des chats", "Laisses à 6 € et paniers à 12 €", "venir avec de la monnaie", "refuge.compagnons@mail.fr", "Tom"),
    r("Fleurs de Lys", "une commande de bouquet pour un mariage", "atelier floral, rue Haute 3", "avant le 20 juin", "la fleuriste propose des pivoines blanches", "Acompte demandé : 30 €", "envoyer une photo des couleurs souhaitées", "contact@fleursdelys.fr", "Inès"),
    r("Pressing Rapide", "un tarif spécial pour costumes et chemises", "pressing de la gare", "du lundi au samedi avant 11 h", "les vêtements déposés le matin sont prêts le soir", "Chemise : 3,50 €; costume : 8 €", "conserver le ticket jaune", "pressing.rapide@mail.fr", "Pablo"),
    r("OptiVue", "un contrôle gratuit des lunettes", "boutique OptiVue du centre", "mercredi après-midi", "l'opticien vérifie les vis et nettoie les verres", "Montures dès 89 francs", "apporter l'ordonnance si elle est récente", "optivue@lunettes.ch", "Amina"),
    r("Cave du Rhône", "une dégustation de vins suisses", "caveau sous le magasin", "vendredi à 18 h", "cinq vins seront présentés avec des fromages", "Participation : 10 francs", "réserver car il y a huit places", "cave-rhone@mail.ch", "Bastien"),
    r("Fil & Aiguille", "un atelier couture pour débutants", "arrière-boutique textile", "mardi soir à 18 h 30", "le matériel est fourni pour coudre une trousse", "Atelier : 40 francs, tablier offert", "s'inscrire avant lundi", "atelier@filetaiguille.fr", "Nora"),
    r("Papeterie Scolaire", "une opération rentrée sur cahiers et trousses", "rayon école au premier étage", "tout le mois d'août", "la liste officielle du collège est disponible", "Réduction : 30 % sur le deuxième cartable", "demander la gravure du prénom à la caisse", "papeterie.scolaire@mail.fr", "Malo"),
    r("Antiquités Bellerive", "une estimation gratuite de bijoux anciens", "salon privé du magasin", "samedi 20 avril", "un expert regarde chaque objet pendant dix minutes", "Certificat écrit : 15 € si demandé", "apporter des photos pour les meubles lourds", "bellerive@antiquites.fr", "Jeanne"),
    r("Épicerie du Coin", "un marché de producteurs locaux", "devant l'épicerie couverte", "samedi matin dès 8 h", "un producteur fera goûter miel et fromages", "Consigne : 1 € pour les bocaux", "rapporter les bocaux propres", "epicerieducoin@local.fr", "Hugo"),
    r("Centre Lumière", "une soirée shopping avec navette gratuite", "entrée principale du centre commercial", "vendredi de 18 h à 21 h", "cinquante boutiques resteront ouvertes plus tard", "Restaurants ouverts avec menus à 12 €", "prendre la carte de réduction à l'accueil", "centre.lumiere@mail.fr", "Léa"),
    r("VentePrivée.ch", "une vente en ligne de marques premium", "site web et application mobile", "pendant quarante-huit heures", "les retours sont possibles sous quatorze jours", "Compte gratuit obligatoire", "activer les alertes SMS", "support@venteprivee.ch", "Noé"),
    r("ReTech", "la reprise d'un ancien téléphone", "comptoir recyclage du magasin", "jusqu'à samedi soir", "les données sont effacées devant le client", "Bon d'achat dès 50 francs selon l'état", "apporter le chargeur et la facture", "reprise@retech.ch", "Rosa"),
]


LESSONS = {"e9-1": {"messages": make_lesson(ROWS)["messages"]}}
