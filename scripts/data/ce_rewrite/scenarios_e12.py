"""E12 CE scenarios: health, sport, balanced eating, city life, self-care."""
from __future__ import annotations

from builders_e11_e12 import build_lesson

WRONG_PLACES = ["la gare centrale", "le parking souterrain", "la poste principale", "le musée fermé", "la piscine vide"]


def p(value: str) -> list[str]:
    return [part.strip() for part in value.strip().split("|")]


def lesson(lesson_title: str, theme: str, activities: str, items: str, benefits: str, warnings: str,
           wrong_activities: list[str], wrong_items: list[str], wrong_benefits: list[str]) -> dict:
    data = {
        "lesson": lesson_title,
        "theme": theme,
        "activities": p(activities),
        "items": p(items),
        "benefits": p(benefits),
        "warnings": p(warnings),
        "wrong_places": WRONG_PLACES,
        "wrong_activities": wrong_activities,
        "wrong_items": wrong_items,
        "wrong_benefits": wrong_benefits,
    }
    for key in ("activities", "items", "benefits", "warnings"):
        assert len(data[key]) == 20, f"{lesson_title}: {key} has {len(data[key])} entries"
    return build_lesson(data)


LESSONS = {
    "e12-1": lesson(
        "S'occuper de sa santé",
        "santé",
        """une séance pour préparer une consultation|un atelier pharmacie sans ordonnance|une rencontre sur les petits maux d'hiver|une information sur le sommeil|un cours pour lire une notice|une discussion sur les rendez-vous médicaux|un atelier trousse de premiers secours|une séance gestes en cas de fièvre|une présentation du cabinet infirmier|un échange sur les allergies|une matinée tension et respiration|un atelier pour expliquer sa douleur|une rencontre prévention des écrans|un point info assurance maladie|une séance hygiène des mains|un atelier ordonnance claire|une discussion santé mentale simple|une information sur les vaccins|un parcours santé du quartier|une permanence questions médicales""",
        """une carte d'assurance|une liste de médicaments|un paquet de mouchoirs|un carnet de sommeil|une notice de médicament|un agenda|des pansements|un thermomètre|un carnet de questions|une liste des allergies|une bouteille d'eau|un dessin du corps|un chronomètre|un document administratif|un petit savon|une ordonnance récente|un cahier personnel|un carnet de vaccination|des chaussures souples|un stylo""",
        """poser des questions au médecin|demander conseil au pharmacien|réagir quand on tousse|dormir plus régulièrement|prendre un médicament correctement|ne pas oublier un rendez-vous|aider sans paniquer|surveiller la température|savoir où demander un soin|expliquer une réaction allergique|se calmer quand on est essoufflé|nommer une douleur simplement|faire des pauses loin des écrans|comprendre un remboursement|éviter de transmettre des microbes|lire une dose sur l'ordonnance|dire quand on ne va pas bien|comprendre le rappel d'un vaccin|bouger un peu chaque semaine|préparer ses questions avant d'appeler""",
        """les informations privées restent confidentielles|les médicaments ne se partagent pas|les personnes fiévreuses portent un masque|les téléphones restent en mode silencieux|la notice ne remplace pas le médecin|les retards déplacent les rendez-vous suivants|les ciseaux sont utilisés par un adulte|on appelle les urgences si la personne respire mal|les soins ne se font pas sans accord|les aliments apportés doivent être notés|on s'assoit si la tête tourne|on ne montre pas une blessure grave en groupe|les écrans sont rangés pendant l'exercice|les papiers originaux restent dans le sac|le gel ne remplace pas toujours le lavage|on ne change jamais la dose seul|personne n'est obligé de parler de sa vie privée|les questions personnelles se posent à la fin|la marche reste lente|les réponses ne remplacent pas une consultation""",
        ["une dégustation de desserts", "un atelier peinture", "une sortie shopping"],
        ["un ballon", "un passeport", "une guitare"],
        ["préparer une fête", "réparer un vélo", "décorer une vitrine"],
    ),
    "e12-2": lesson(
        "Faire du sport",
        "sport",
        """un entraînement course débutant|une séance d'étirements|un cours de natation douce|un atelier équilibre sur tapis|une initiation au basket loisirs|une marche rapide en groupe|un circuit renforcement léger|une découverte du volley|une séance de respiration après effort|un test de vélo en sécurité|une matinée sports en famille|un entraînement fractionné facile|une séance d'échauffement guidé|un cours de tennis découverte|une sortie raquettes en salle|une initiation à l'escalade basse|un atelier récupération musculaire|une rencontre avec un coach|un défi pas quotidiens|une séance sport sans compétition""",
        """des baskets adaptées|une serviette|un bonnet de bain|un tapis|un ballon|une gourde pleine|un élastique souple|des genouillères|un vêtement sec|un casque|une tenue de sport|une montre simple|une corde à sauter|une raquette|des chaussures propres|un baudrier fourni|une petite collation|un carnet d'objectifs|un podomètre|un sourire""",
        """courir sans se blesser|garder les muscles souples|nager avec confiance|tenir debout plus facilement|jouer en équipe|améliorer son souffle|renforcer le dos|envoyer le ballon au bon endroit|récupérer calmement|freiner correctement|bouger avec les enfants|changer de rythme doucement|préparer le corps avant l'effort|tenir la raquette sans douleur|réagir plus vite|vaincre une petite peur|éviter les courbatures|choisir un objectif réaliste|marcher davantage chaque jour|prendre plaisir à bouger""",
        """on commence par cinq minutes de marche|les mouvements brusques sont évités|la douche est obligatoire avant le bassin|les tapis se nettoient après la séance|les bijoux restent au vestiaire|le groupe attend aux passages piétons|les charges lourdes sont interdites|les ballons se rangent dans le filet|on boit avant d'avoir très soif|les freins sont contrôlés au départ|les enfants restent avec un adulte|chacun choisit sa vitesse|un bon échauffement dure dix minutes|les balles perdues se signalent|la salle doit rester sèche|on descend si on a peur|les massages forts sont déconseillés|un objectif trop haut décourage|les pas sont notés le soir|les scores ne sont pas affichés""",
        ["une réunion de cuisine", "un cours de chant", "une visite d'appartement"],
        ["une carte bancaire", "un livre de recettes", "un tournevis"],
        ["faire une sieste", "acheter un billet", "choisir une peinture"],
    ),
    "e12-3": lesson(
        "Manger équilibré",
        "alimentation",
        """un atelier assiette équilibrée|une visite au rayon fruits|un cours petit déjeuner simple|une discussion sur les boissons sucrées|un atelier goûter sain|une séance menu de la semaine|une lecture d'étiquettes nutritionnelles|un échange recettes avec légumes|une préparation de salade complète|un atelier portions raisonnables|une rencontre avec une diététicienne|un défi eau pendant la journée|une séance courses avec petit budget|un cours soupe repas|une information sur les protéines|un atelier lunch au travail|une comparaison pain blanc et pain complet|une animation fruits de saison|une discussion sur les repas rapides|un pique-nique équilibré""",
        """une assiette vide|un sac réutilisable|un bol|une gourde|une boîte à goûter|un calendrier|un emballage alimentaire|un légume préféré|un grand saladier|une cuillère doseuse|un carnet alimentaire|une bouteille d'eau|une liste de courses|une casserole|une boîte de pois chiches|une boîte repas|deux tranches de pain|un fruit de saison|un ticket de caisse|une nappe""",
        """composer un repas complet|choisir des fruits mûrs|éviter d'avoir faim trop vite|boire moins de sucre|préparer une collation pratique|gagner du temps le soir|repérer le sel et le gras|cuisiner plus de légumes|manger frais sans compliquer|servir une quantité adaptée|poser des questions sur son alimentation|penser à boire régulièrement|acheter utile sans trop dépenser|faire un dîner léger|varier les sources d'énergie|emporter un repas équilibré|choisir un pain plus nourrissant|manger selon la saison|améliorer un repas rapide|partager un repas dehors""",
        """les allergies sont écrites sur la feuille|les fruits abîmés ne sont pas utilisés|le café ne remplace pas un repas|les boissons énergisantes sont déconseillées|les noix sont séparées à cause des allergies|les menus restent simples|les chiffres se lisent pour 100 grammes|les couteaux restent sur la table centrale|la salade se garde au frais|on ne pèse pas les personnes|les conseils ne remplacent pas un médecin|les verres se remplissent avant la pause|les promotions ne sont pas toujours utiles|la soupe chaude se transporte avec attention|les régimes extrêmes ne sont pas présentés|la boîte doit bien fermer|on goûte avant de juger|les fruits sont lavés sur place|les sauces sont servies à part|les déchets repartent dans le sac""",
        ["un entraînement de basket", "un atelier mécanique", "une séance de coiffure"],
        ["un casque", "une clé anglaise", "un passeport"],
        ["réparer une roue", "choisir une coupe de cheveux", "réserver un hôtel"],
    ),
    "e12-4": lesson(
        "Vivre en ville",
        "ville",
        """une balade pour lire le plan du quartier|un atelier transports publics|une visite des services municipaux|une discussion voisins et bruit|un point info tri des déchets|une marche sécurité piétons|une réunion jardin en ville|un atelier trouver une adresse|une présentation des marchés locaux|une séance comparer ville et campagne|un café citoyen sur les espaces verts|une information travaux de rue|un atelier vivre en immeuble|une découverte des pistes cyclables|une réunion sur les loyers|une visite de la médiathèque|un parcours commerces utiles|un échange sur les animaux en ville|une lecture des panneaux publics|un projet fresque de quartier""",
        """un plan papier|une carte de bus|une pièce d'identité|un exemple de règle|un sac de tri|un gilet clair|des graines|un carnet d'adresses|un panier|deux photos|une idée d'arbre|une photo de la rue|le règlement de l'immeuble|un casque de vélo|une annonce de logement|une carte de lecteur|une liste de courses|une laisse|un panneau photographié|un croquis""",
        """se repérer plus facilement|acheter le bon billet|savoir où faire une demande|vivre plus calmement avec ses voisins|trier sans se tromper|traverser avec prudence|mettre plus de vert dans la rue|demander son chemin clairement|acheter près de chez soi|nuancer son avis sur la ville|imaginer un parc plus agréable|comprendre pourquoi la rue est fermée|respecter les espaces communs|rouler sans gêner les piétons|lire une annonce avec attention|emprunter des livres gratuitement|trouver les magasins essentiels|respecter les voisins et les animaux|comprendre une consigne publique|embellir un mur abîmé""",
        """le groupe reste sur le trottoir|les tickets doivent être validés|les bureaux ferment à midi|les discussions restent respectueuses|les bouteilles vont dans le bon bac|on attend le feu vert|on ne cueille pas les fleurs|les adresses privées ne sont pas partagées|les sacs restent devant soi|on compare sans critiquer les habitants|les chiens sont tenus en laisse|la rue est barrée deux jours|les vélos restent au local prévu|le casque est conseillé|les prix changent selon le quartier|les livres reviennent à temps|les achats ne sont pas obligatoires|les animaux bruyants restent dehors|les panneaux dangereux ne se touchent pas|la peinture sèche pendant une heure""",
        ["une recette de gâteau", "une randonnée en forêt", "un cours de natation"],
        ["une poêle", "un sac de couchage", "un maillot"],
        ["préparer un dessert", "camper en montagne", "nager plus vite"],
    ),
    "e12-5": lesson(
        "Prendre soin de soi",
        "bien-être",
        """un atelier bonnes résolutions réalistes|une séance relaxation courte|une information sur les insomnies|un atelier soin du visage|une discussion hygiène quotidienne|un cours respiration anti-stress|une séance organiser sa semaine|un atelier pause sans écran|une rencontre image de soi|un moment bain de pieds|une initiation automassage|un échange sur les habitudes du soir|une séance choisir un cadeau bien-être|un atelier rangement apaisant|une promenade lente pour se calmer|une discussion dire non poliment|un point info produits de toilette|un atelier rituel du matin|une séance gratitude simple|une journée prendre soin de soi""",
        """une liste de trois objectifs|un coussin|un carnet de nuit|une serviette douce|une brosse à dents|un minuteur|un agenda|une boîte pour le téléphone|un miroir de poche|une petite bassine|une balle souple|un pyjama confortable|une idée de cadeau|un sac à donner|des chaussures faciles|une phrase préparée|un flacon vide|un réveil|trois papiers colorés|une gourde""",
        """choisir une résolution possible|relâcher les épaules|repérer ce qui empêche de dormir|nettoyer la peau doucement|garder de bonnes habitudes|se calmer avant un examen|prévoir du repos|faire une vraie pause|se parler avec respect|détendre les pieds|soulager une tension légère|préparer une soirée calme|offrir un cadeau utile|rendre la chambre plus calme|ralentir la respiration|protéger son temps|lire une étiquette simple|commencer la journée doucement|voir les petites choses positives|écouter son corps""",
        """les objectifs trop grands sont évités|les téléphones restent hors du cercle|les conseils ne remplacent pas un médecin|les produits parfumés sont testés sur la main|les affaires personnelles restent dans le sac|on arrête si la tête tourne|les rendez-vous importants sont notés en rouge|la pause dure au moins dix minutes|personne ne critique le corps d'un autre|l'eau reste tiède|on ne masse pas une zone douloureuse|les écrans s'éteignent trente minutes avant le lit|le prix du cadeau reste raisonnable|les objets cassés partent au recyclage|la marche reste silencieuse au début|dire non ne veut pas dire être méchant|les produits irritants sont évités|on évite de regarder son téléphone au réveil|les papiers restent anonymes|chacun choisit son rythme""",
        ["un contrôle de vocabulaire", "une réparation de scooter", "une réunion de chantier"],
        ["un marteau", "un casque de moto", "une facture"],
        ["gagner une compétition", "peindre un mur", "réserver un avion"],
    ),
}
