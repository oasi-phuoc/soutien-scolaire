#!/usr/bin/env python3
"""Expansion data for E9–E14 communication pools."""
from __future__ import annotations

def make_q(textQ, text, textC, fillQ, fill, vfQ, vfC=0, fillA=None, img=None, imgC=0):
    return {
        "textQ": textQ, "text": text, "textC": textC,
        "fillQ": fillQ, "fill": fill, "vfQ": vfQ, "vfC": vfC,
        "fillA": fillA, "img": img or ["", "", ""], "imgC": imgC,
    }


def po_lines(pairs: list[tuple[str, str]]) -> list[dict]:
    out = []
    for a, b in pairs:
        out.append({"role": "A", "text": a})
        out.append({"role": "B", "text": b})
    return out


def fq(textQ, correct, w1, w2, fillQ, fill, vfQ, vfC=0, fillA=None):
    return make_q(textQ, [correct, w1, w2], 0, fillQ, fill, vfQ, vfC, fillA)


def ce_entry(text: str, facts: list) -> dict:
    return {"text": text, "questions": facts}


def po(id_: str, title: str, context: str, ra: dict, rb: dict, pairs: list) -> dict:
    return {"id": id_, "title": title, "context": context, "roleA": ra, "roleB": rb, "lines": po_lines(pairs)}


def pe(id_: str, title: str, situation: str, instruction: str, points: list) -> dict:
    return {"id": id_, "title": title, "situation": situation, "instruction": instruction, "points": points}


def pee(id_: str, title: str, situation: str, instruction: str, points: list, frm: str, subject: str, body: str) -> dict:
    return {
        "id": id_, "title": title, "situation": situation, "instruction": instruction, "points": points,
        "sourceMessage": {"from": frm, "subject": subject, "body": body},
    }


# ── Role presets ──────────────────────────────────────────────────────────
VENDEUR = {"title": "Le vendeur", "vous": "le vendeur / la vendeuse"}
CLIENT = {"title": "Le client", "vous": "le client / la cliente"}
SAV = {"title": "L'employé du service après-vente", "vous": "l'employé(e) du service après-vente"}
PART = {"title": "Le vendeur particulier", "vous": "le vendeur / la vendeuse"}
ACH = {"title": "L'acheteur", "vous": "l'acheteur / l'acheteuse"}
AMI = {"title": "L'ami", "vous": "l'ami(e)"}
AGENT = {"title": "L'agent", "vous": "l'agent(e)"}
LOC = {"title": "Le locataire", "vous": "le locataire / la locataire"}
PROP = {"title": "Le propriétaire", "vous": "le propriétaire / la propriétaire"}
EMP = {"title": "L'employé", "vous": "l'employé(e)"}
COLL = {"title": "Le collègue", "vous": "le collègue / la collègue"}
MED = {"title": "Le médecin", "vous": "le médecin / la médecin"}
PAT = {"title": "Le patient", "vous": "le patient / la patiente"}
PROF = {"title": "Le professeur", "vous": "le professeur / la professeure"}
ELEVE = {"title": "L'élève", "vous": "l'élève"}
RH = {"title": "Le responsable RH", "vous": "le responsable RH"}
CAND = {"title": "Le candidat", "vous": "le candidat / la candidate"}


def gen_ce_variants(theme: str, base_title: str, scenarios: list[tuple]) -> list[dict]:
    """Generate CE entries from (title_suffix, body, facts_list) tuples. First is placeholder — kept from file."""
    return []  # first entry comes from existing file; we only add extras via scenarios


def shopping_ce_extras() -> list[dict]:
    scenarios = [
        ("Voularty — Soldes multimédia", """Voularty — Soldes multimédia

C'est les soldes chez Voularty ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le rayon multimédia. Ordinateurs, tablettes et smartphones sont à petit prix.
Les offres sont disponibles sur le site Internet et en magasin. Vous pouvez payer en trois fois sans frais à partir de 150 €.
Pour toute commande en ligne, la livraison à domicile est gratuite. Comptez trois à cinq jours pour recevoir votre colis.
Un produit ne vous convient pas ? Vous avez quatorze jours pour le rapporter avec le ticket de caisse. Nous proposons un échange ou un remboursement complet.""", [
            fq("Jusqu'à quand durent les soldes chez Voularty ?", "Jusqu'au 19 juillet", "Jusqu'au 30 août", "Jusqu'au 1er septembre",
               "Les soldes durent jusqu'au 19 _________.", "juillet", "Les soldes Voularty finissent le 19 juillet."),
            fq("Quel rayon est en promotion ?", "Le multimédia", "Les vêtements", "L'alimentation",
               "Les réductions concernent le rayon _________.", "multimédia", "Les soldes concernent le rayon multimédia.", fillA=["multimedia"]),
            fq("À partir de quel montant peut-on payer en trois fois ?", "À partir de 150 €", "À partir de 50 €", "À partir de 300 €",
               "Paiement en trois fois sans frais à partir de _________ €.", "150", "Le paiement en trois fois est possible à partir de 150 €.", fillA=["cent cinquante"]),
            fq("Combien de temps pour recevoir une commande en ligne ?", "Trois à cinq jours", "Un jour", "Deux semaines",
               "Comptez trois à _________ jours pour recevoir votre colis.", "cinq", "La livraison prend trois à cinq jours."),
            fq("Combien de temps pour rapporter un produit ?", "Quatorze jours", "Sept jours", "Trente jours",
               "Vous avez _________ jours pour rapporter un produit.", "quatorze", "On peut rapporter un produit pendant quatorze jours.", fillA=["14"]),
            fq("Que propose le magasin pour un retour ?", "Un échange ou un remboursement", "Une réparation gratuite", "Un bon d'achat seulement",
               "Nous proposons un échange ou un _________.", "remboursement", "Le magasin rembourse seulement en bon d'achat.", vfC=1),
        ]),
        ("Leboncoin — Conseils de sécurité", """Leboncoin — Conseils pour acheter en sécurité

Avant de rencontrer un vendeur, lisez attentivement l'annonce et vérifiez les commentaires des autres acheteurs. Un vendeur avec des avis positifs inspire plus confiance.
Ne payez jamais avant d'avoir vu l'objet. Rencontrez le vendeur dans un lieu public, de préférence en journée. Emportez un ami si possible.
Testez l'appareil avant de payer : allumez-le, vérifiez qu'il fonctionne correctement et demandez la facture d'achat si elle existe.
En cas de problème après l'achat, contactez le service client du site. Conservez tous les messages échangés avec le vendeur.""", [
            fq("Que faut-il vérifier avant de rencontrer un vendeur ?", "Les commentaires des autres acheteurs", "Le numéro de téléphone seulement", "La couleur de l'objet",
               "Vérifiez les _________ des autres acheteurs.", "commentaires", "Il faut lire les commentaires avant d'acheter."),
            fq("Quand faut-il payer ?", "Après avoir vu l'objet", "Avant la rencontre", "Par virement uniquement",
               "Ne payez jamais avant d'avoir _________ l'objet.", "vu", "Il ne faut pas payer avant d'avoir vu l'objet."),
            fq("Où rencontrer le vendeur ?", "Dans un lieu public", "Chez le vendeur seul", "Dans un parking vide",
               "Rencontrez le vendeur dans un lieu _________.", "public", "Il vaut mieux se rencontrer dans un lieu public."),
            fq("Que faut-il faire avant de payer ?", "Tester l'appareil", "Signer un contrat", "Appeler la police",
               "_________ l'appareil avant de payer.", "Testez", "Il faut tester l'appareil avant de payer."),
            fq("Que demander au vendeur si possible ?", "La facture d'achat", "Son adresse personnelle", "Son relevé bancaire",
               "Demandez la _________ d'achat si elle existe.", "facture", "On peut demander la facture d'achat."),
            fq("Que faire en cas de problème après l'achat ?", "Contacter le service client", "Ne rien faire", "Publier une annonce",
               "Contactez le service _________ du site.", "client", "Il faut contacter le service client en cas de problème."),
        ]),
    ]
    # Generate remaining 17 from templates
    more = [
        ("Mode&Co — Politique de retour", "Mode&Co", "trente jours", "ticket de caisse", "échange ou remboursement", "vêtements", "gratuit", "magasin", "samedi", "10 h"),
        ("BricoMax — Garantie outils", "BricoMax", "deux ans", "réparation gratuite", "ticket de caisse", "outils électriques", "lundi au vendredi", "service après-vente", "bon de retour", "e-mail"),
        ("TechReprise — Appareils reconditionnés", "TechReprise", "douze mois", "moins cher", "testé", "smartphones", "quarante-huit heures", "livraison", "facture", "garantie"),
        ("BioMarché — Click and collect", "BioMarché", "deux heures", "gratuit", "magasin", "produits frais", "application", "notification", "paiement", "carte"),
        ("Fidélité Plus — Carte avantages", "Fidélité Plus", "cent points", "cinq euros", "magasins partenaires", "anniversaire", "réduction", "dix pour cent", "application", "mobile"),
        ("Outlet Village — Infos pratiques", "Outlet Village", "dimanche", "gratuit", "navette", "marques", "moins cinquante pour cent", "été", "restaurant", "midi"),
        ("Achat groupé — Entre voisins", "Achat groupé", "livraison unique", "moins cher", "voisin", "produits ménagers", "commande", "minimum", "cinquante euros", "répartition"),
        ("Alerte arnaque — Achat en ligne", "Alerte arnaque", "prix trop bas", "virement", "site officiel", "paiement sécurisé", "avis", "vendeur", "méfiance", "signalement"),
        ("ÉcoLivraison — Emballage durable", "ÉcoLivraison", "carton recyclé", "consigne", "retour", "emballage", "réutilisable", "gratuit", "point relais", "écologique"),
        ("Essai 30 jours — Satisfait ou remboursé", "Essai 30 jours", "trente jours", "remboursement", "sans frais", "retour", "colis", "étiquette", "prépayée", "gratuit"),
        ("Reprise ancien — Bon d'achat", "Reprise ancien", "cinquante euros", "ancien appareil", "magasin", "bon d'achat", "recyclage", "gratuit", "diagnostic", "immédiat"),
        ("Black Friday — Offres limitées", "Black Friday", "vingt-quatre heures", "stock limité", "minuit", "réductions", "site Internet", "file d'attente", "virtuelle", "huit heures"),
        ("Comparateur Prix — Application", "Comparateur Prix", "trois magasins", "moins cher", "code-barres", "scanner", "historique", "prix", "alerte", "baisse"),
        ("Réparation ou neuf — Guide", "Réparation ou neuf", "garantie", "moins cher", "réparer", "technicien", "devis", "gratuit", "quarante-huit heures", "délai"),
        ("Fête des mères — Promotions", "Fête des mères", "vingt-six mai", "coffrets", "fleurs", "parfums", "livraison", "gratuite", "dimanche", "commande"),
        ("Programme étudiant — Réductions", "Programme étudiant", "dix pour cent", "carte étudiante", "justificatif", "rentrée", "septembre", "partenaires", "magasins", "validité"),
        ("Avis clients — Plateforme", "Avis clients", "cinq étoiles", "commentaires", "vendeurs", "fiabilité", "modération", "signalement", "faux avis", "communauté"),
    ]
    for title, brand, *vals in more:
        v = vals + [""] * (10 - len(vals))
        scenarios.append((title, f"""{title}

{brand} informe ses clients : les retours sont possibles pendant {v[0]}, sur présentation du {v[1]}. Nous proposons un {v[2]} selon votre choix.
Le rayon {v[3]} propose des offres spéciales cette semaine. La livraison est {v[4]} pour toute commande passée en {v[5]}.
Notre équipe répond du {v[6]} au samedi, de {v[7]} à 18 h. Pour toute question, contactez le {v[8]} par {v[9]} ou téléphone.
Pensez à conserver votre preuve d'achat. Les promotions ne sont pas cumulables avec d'autres offres en cours.""", [
            fq(f"Quelle est la durée de retour chez {brand} ?", v[0].capitalize(), "Quarante jours", "Une semaine",
               f"Les retours sont possibles pendant {v[0]}.", v[0].split()[0] if v[0] else "trente", f"Les retours durent {v[0]}.", fillA=[v[0].split()[0]] if v[0] else None),
            fq("Que faut-il présenter pour un retour ?", "Le ticket de caisse", "Le passeport", "La carte bancaire",
               f"Sur présentation du {v[1]}.", v[1].split()[-1] if v[1] else "caisse", f"Il faut le {v[1]}.", fillA=[v[1].split()[-1]] if v[1] else None),
            fq("Que propose le magasin en cas de retour ?", "Un échange ou un remboursement", "Une réparation", "Un bon d'achat seulement",
               f"Nous proposons un {v[2]}.", v[2].split()[-1] if v[2] else "remboursement", "Le magasin propose un échange ou un remboursement."),
            fq("Quel rayon est en promotion ?", v[3].capitalize(), "L'alimentation", "Les jouets",
               f"Le rayon {v[3]} propose des offres.", v[3].split()[0] if v[3] else "vêtements", f"Le rayon {v[3]} est en promotion."),
            fq("La livraison est-elle payante ?", "Non, elle est gratuite", "Oui, toujours", "Seulement le dimanche",
               f"La livraison est {v[4]}.", v[4].split()[0] if v[4] else "gratuite", "La livraison est gratuite."),
            fq("Quand l'équipe répond-elle aux clients ?", "Du lundi au samedi", "Seulement le dimanche", "Jamais",
               f"Notre équipe répond du {v[6]} au samedi.", v[6].split()[-1] if v[6] else "lundi", "L'équipe répond en semaine."),
        ]))
    return [ce_entry(text, f) for _, text, f in scenarios[:19]]


def shopping_po_extras(prefix: str) -> list[dict]:
    titles = [
        ("Comparer deux téléviseurs", "Vous hésitez entre deux modèles dans un magasin d'électronique.", VENDEUR, CLIENT),
        ("Demander un devis réparation", "Votre aspirateur est en panne et vous l'apportez au magasin.", SAV, CLIENT),
        ("Acheter une tablette d'occasion", "Vous rencontrez un particulier pour une tablette vue sur Internet.", PART, ACH),
        ("Utiliser un bon de réduction", "Vous avez reçu un bon de réduction par e-mail pour un magasin de chaussures.", VENDEUR, CLIENT),
        ("Commander sans stock", "Le produit que vous voulez n'est plus disponible en magasin.", VENDEUR, CLIENT),
        ("Payer en plusieurs fois", "Vous voulez acheter un ordinateur et payer en trois fois.", VENDEUR, CLIENT),
        ("Retourner un cadeau", "Un ami vous a offert un livre que vous possédez déjà.", VENDEUR, CLIENT),
        ("Demander conseil à un ami", "Vous ne savez pas s'il vaut mieux acheter neuf ou d'occasion.", AMI, AMI),
        ("Réclamer une livraison", "Votre colis est arrivé abîmé.", SAV, CLIENT),
        ("Acheter en soldes", "Vous cherchez un bon plan pendant les soldes d'hiver.", VENDEUR, CLIENT),
    ]
    dialogs = [
        [("Bonjour ! Je peux vous aider ?", "Bonjour, je compare ces deux téléviseurs. Lequel consomme le moins ?"),
         ("Le modèle à gauche est plus économe.", "Et la garantie, c'est combien de temps ?"),
         ("Deux ans pour les deux modèles.", "D'accord. Je prends celui de gauche, s'il vous plaît."),
         ("Très bien. Vous payez comment ?", "Par carte bancaire. Et la livraison, c'est possible ?"),
         ("Oui, gratuite à partir de 300 €.", "Parfait, merci beaucoup !")],
        [("Bonjour, que puis-je faire pour vous ?", "Bonjour, mon aspirateur ne aspire plus depuis hier."),
         ("Je vais regarder. Il est encore sous garantie ?", "Non, il a plus de trois ans."),
         ("Dans ce cas, je vous prépare un devis de réparation.", "Ça coûtera combien, à peu près ?"),
         ("Entre 40 et 60 € selon la pièce.", "D'accord, faites le devis. Je vous rappelle demain."),
         ("Très bien, je vous l'envoie par e-mail.", "Merci, à demain !")],
        [("Bonjour ! Vous venez pour la tablette ?", "Oui, je peux la tester avant d'acheter ?"),
         ("Bien sûr. Elle est en très bon état.", "Elle est encore sous garantie ?"),
         ("Non, mais je vous donne la facture d'origine.", "Vous acceptez 180 € au lieu de 200 ?"),
         ("D'accord pour 180 € en espèces.", "Parfait, voici l'argent. Merci !"),
         ("Merci à vous. Bonne journée !", "Bonne journée !")],
        [("Bonjour madame !", "Bonjour, j'ai un bon de réduction de 15 %. Il est encore valable ?"),
         ("Oui, jusqu'à dimanche. Vous cherchez quoi ?", "Des baskets pour courir, taille 42."),
         ("Ce modèle est en promotion en plus du bon.", "Super ! Je peux les essayer ?"),
         ("Oui, la cabine est là-bas.", "Elles sont parfaites. Je les prends !"),
         ("Très bien. Votre bon sera déduit à la caisse.", "Merci beaucoup !")],
        [("Bonjour !", "Bonjour, vous avez ce modèle de cafetière en stock ?"),
         ("Non, plus en magasin, mais disponible en ligne.", "La livraison prend combien de temps ?"),
         ("Trois à cinq jours à domicile.", "Et si elle ne me plaît pas, je peux la rapporter ?"),
         ("Oui, quatorze jours avec le ticket.", "D'accord, je commande sur votre site alors."),
         ("Très bien. Vous recevrez un e-mail de confirmation.", "Merci !")],
        [("Bonjour, je peux vous renseigner ?", "Bonjour, ce portable coûte 450 €. Je peux payer en trois fois ?"),
         ("Oui, sans frais à partir de 200 €.", "Il me faut quoi comme documents ?"),
         ("Juste une pièce d'identité et une carte bancaire.", "Parfait. Je commence les démarches maintenant."),
         ("Très bien, suivez-moi au comptoir.", "Merci, c'est très pratique !"),
         ("Je vous en prie. Bonne journée !", "Bonne journée !")],
        [("Bonjour !", "Bonjour, je voudrais échanger ce livre. C'est un cadeau en double."),
         ("Vous avez le ticket sans prix, c'est un cadeau ?", "Oui, exactement."),
         ("Pas de problème. Vous pouvez choisir un autre livre.", "Merci. Celui-ci sur la cuisine, s'il vous plaît."),
         ("Très bien. La différence est de 3 €.", "Voici 3 €. Merci beaucoup !"),
         ("Avec plaisir. Bonne lecture !", "Merci, au revoir !")],
        [("Tu hésites encore pour ton ordinateur ?", "Oui. Le neuf coûte trop cher pour moi."),
         ("Regarde les annonces d'occasion. C'est souvent très bien.", "Mais comment savoir si le vendeur est sérieux ?"),
         ("Lis les commentaires et rencontre-le en public.", "Bonne idée. J'ai vu un portable pas cher près de chez moi."),
         ("Teste-le bien avant de payer.", "Oui, je vais lui proposer un rendez-vous samedi."),
         ("Tu veux que je vienne avec toi ?", "Volontiers, merci !")],
        [("Service clients, bonjour !", "Bonjour, mon colis est arrivé avec un coin abîmé."),
         ("Je suis désolé. Vous avez le numéro de commande ?", "Oui, c'est le 92 341."),
         ("Je vois. Voulez-vous un échange ou un remboursement ?", "Un échange, s'il vous plaît."),
         ("D'accord, je vous renvoie un colis aujourd'hui.", "Merci. La livraison est gratuite ?"),
         ("Oui, bien sûr, c'est gratuit.", "Parfait, merci !")],
        [("Bonjour ! Les soldes d'hiver continuent.", "Bonjour, vous avez des manteaux à moins 50 % ?"),
         ("Oui, au fond du magasin. Quelle taille ?", "Taille M, de préférence noir ou bleu."),
         ("J'ai un manteau bleu à 79 € au lieu de 160 €.", "Je peux l'essayer ?"),
         ("Oui, les cabines sont à droite.", "Il me va bien. Je le prends !"),
         ("Excellent choix ! À la caisse, s'il vous plaît.", "Merci !")],
    ]
    return [po(f"{prefix}-po-{i+11}", titles[i][0], titles[i][1], titles[i][2], titles[i][3], dialogs[i]) for i in range(10)]


def shopping_pe_extras(prefix: str) -> list[dict]:
    items = [
        ("Comparer deux offres", "Vous hésitez entre acheter un réfrigérateur neuf en magasin ou d'occasion sur Internet.",
         "Écrivez un message à un ami : décrivez les deux offres, donnez votre avis et demandez son conseil.",
         ["Les deux offres (prix, état)", "Votre hésitation", "Sa question ou demande de conseil"]),
        ("Réclamation livraison", "Un colis est arrivé avec un jour de retard et l'emballage est abîmé.",
         "Écrivez au service clients : décrivez le problème, demandez une solution et restez poli.",
         ["Le retard et l'état du colis", "Ce que vous attendez comme solution", "Votre ton poli"]),
        ("Avis sur un site", "Vous avez acheté un objet d'occasion sur un site entre particuliers.",
         "Rédigez un avis : décrivez le vendeur, l'objet reçu et recommandez ou non ce site.",
         ["Le vendeur et la communication", "L'état de l'objet", "Votre recommandation"]),
        ("Budget achats", "Vous préparez vos achats pour la rentrée avec un budget limité.",
         "Écrivez une liste avec priorités : expliquez ce que vous achetez en priorité et pourquoi.",
         ["Votre budget", "Trois achats prioritaires", "Ce que vous reporterez"]),
        ("Conseil à un ami", "Un ami veut acheter son premier smartphone en France.",
         "Écrivez-lui un message : donnez trois conseils pour bien choisir et éviter les arnaques.",
         ["Trois conseils pratiques", "Un piège à éviter", "Une formule de politesse"]),
        ("Retour produit", "Un appareil acheté en ligne ne fonctionne pas correctement.",
         "Écrivez au service après-vente : rappelez l'achat, décrivez le défaut et demandez un échange.",
         ["La référence de commande", "Le problème constaté", "Votre demande d'échange"]),
        ("Soldes et promotions", "Les soldes commencent demain et vous voulez organiser vos achats.",
         "Écrivez un plan : quels articles chercher, quel budget par article et où aller.",
         ["Les articles recherchés", "Le budget par article", "Les magasins ou sites"]),
        ("Vente entre particuliers", "Vous vendez un canapé sur un site d'annonces.",
         "Rédigez l'annonce : décrivez le canapé, fixez le prix et indiquez comment le récupérer.",
         ["Description et dimensions", "Le prix et la négociation", "Modalités de retrait"]),
        ("Garantie et SAV", "Votre télévision tombe en panne un mois après l'achat.",
         "Écrivez au magasin : rappelez la date d'achat, décrivez la panne et demandez une intervention.",
         ["La date et le modèle", "La panne constatée", "Votre demande"]),
        ("Achat responsable", "Vous voulez acheter un ordinateur portable en pensant à l'environnement.",
         "Écrivez un court texte : expliquez vos critères (reconditionné, durabilité) et votre choix final.",
         ["Vos critères écologiques", "Les options comparées", "Votre décision"]),
    ]
    return [pe(f"{prefix}-pe-{i+11}", t, s, ins, pts) for i, (t, s, ins, pts) in enumerate(items)]


def shopping_pe_email_extras(prefix: str) -> list[dict]:
    items = [
        ("Livraison retardée", "Votre commande de chaussures a deux semaines de retard.",
         "Répondez : rappelez la date de commande, exprimez votre mécontentement et demandez une date précise.",
         ["La date de commande", "Votre mécontentement", "Une date de livraison"],
         "SportDirect", "Retard de livraison — commande 5521",
         "Bonjour,\nVotre commande 5521 a pris du retard.\nNous faisons notre maximum pour l'expédier.\nSportDirect"),
        ("Produit défectueux", "Un grille-pain acheté en ligne ne fonctionne pas.",
         "Répondez : décrivez le problème, demandez un remboursement ou un échange et joignez une photo si possible.",
         ["Le problème constaté", "Votre demande", "Votre disponibilité"],
         "CuisineShop", "Votre achat — grille-pain",
         "Bonjour,\nMerci pour votre achat.\nAvez-vous des questions sur votre produit ?\nCuisineShop"),
        ("Demande de facture", "Vous avez besoin d'une facture pour un achat professionnel.",
         "Répondez : rappelez l'achat, donnez vos coordonnées professionnelles et demandez la facture par e-mail.",
         ["La référence d'achat", "Vos coordonnées pro", "Votre demande de facture"],
         "Bureau Plus", "Merci pour votre visite",
         "Bonjour,\nMerci d'avoir visité notre magasin.\nÀ bientôt !\nBureau Plus"),
        ("Annulation commande", "Vous voulez annuler une commande passée hier.",
         "Répondez : donnez le numéro de commande, expliquez pourquoi vous annulez et demandez confirmation.",
         ["Le numéro de commande", "La raison d'annulation", "Demande de confirmation"],
         "TechStore", "Confirmation commande 8812",
         "Bonjour,\nVotre commande 8812 est confirmée.\nExpédition prévue demain.\nTechStore"),
        ("Question avant achat", "Vous hésitez à acheter un canapé sur un site.",
         "Répondez au vendeur : posez des questions sur les dimensions, l'état et la livraison.",
         ["Deux questions sur le canapé", "Une question sur la livraison", "Votre proposition de rendez-vous"],
         "Sophie M.", "Canapé d'occasion — votre message",
         "Bonjour,\nMerci pour votre message sur l'annonce.\nLe canapé est toujours disponible.\nSophie"),
        ("Remerciement vendeur", "Vous avez reçu un objet en très bon état.",
         "Répondez : remerciez le vendeur, confirmez que tout est correct et laissez un avis positif.",
         ["Votre remerciement", "Confirmation de l'état", "Votre avis positif"],
         "Marc L.", "Vente tablette — confirmation",
         "Bonjour,\nLa tablette vous a-t-elle été livrée correctement ?\nMarc"),
        ("Réclamation prix", "Le prix facturé est différent du prix affiché.",
         "Répondez : expliquez l'erreur, joignez une capture d'écran et demandez un remboursement de la différence.",
         ["L'erreur de prix", "La preuve", "Votre demande de remboursement"],
         "MegaPromo", "Votre facture n° 3340",
         "Bonjour,\nVeuillez trouver ci-joint votre facture.\nMegaPromo"),
        ("Demande garantie", "Votre appareil est en panne sous garantie.",
         "Répondez : rappelez la date d'achat, décrivez la panne et demandez les démarches de retour.",
         ["La date d'achat", "La panne", "Les démarches souhaitées"],
         "ÉlectroSAV", "Garantie — votre demande",
         "Bonjour,\nNous avons bien reçu votre message.\nÉlectroSAV"),
        ("Offre commerciale", "Un magasin vous propose une carte de fidélité.",
         "Répondez : posez des questions sur les avantages, les conditions et dites si vous êtes intéressé(e).",
         ["Deux questions sur la carte", "Votre intérêt ou refus", "Une formule de politesse"],
         "Fidélité Max", "Découvrez notre carte avantages",
         "Bonjour,\nProfitez de -10 % avec notre carte fidélité.\nFidélité Max"),
        ("Confirmation retrait", "Vous devez confirmer le retrait d'un colis en point relais.",
         "Répondez : confirmez votre passage, indiquez un créneau horaire et demandez l'adresse exacte.",
         ["Votre confirmation", "Le créneau horaire", "Demande d'adresse"],
         "ColisRelais", "Votre colis est arrivé",
         "Bonjour,\nVotre colis vous attend au point relais.\nColisRelais"),
    ]
    return [pee(f"{prefix}-pee-{i+11}", t, s, ins, pts, frm, subj, body) for i, (t, s, ins, pts, frm, subj, body) in enumerate(items)]


def shopping_ce_email_extras() -> list[dict]:
    """Generate 19 additional CE email texts for shopping theme."""
    templates = [
        ("De : Boutique Lina\nObjet : Confirmation de commande\n\nBonjour,\nVotre commande n° 2847 du 12 mars est confirmée.\nVous avez commandé un sac à dos à 45 €.\nLa livraison est prévue le 15 mars entre 10 h et 12 h.\nVous pouvez suivre votre colis sur notre site.\nMerci pour votre confiance.\nBoutique Lina",
         [fq("Quel numéro de commande ?", "2847", "2748", "2487", "Votre commande n° _________ est confirmée.", "2847", "La commande porte le numéro 2847."),
          fq("Qu'a commandé le client ?", "Un sac à dos", "Un manteau", "Un téléphone", "Vous avez commandé un _________ à dos.", "sac", "Le client a commandé un sac à dos."),
          fq("Quel est le prix ?", "45 €", "55 €", "35 €", "Un sac à dos à _________ €.", "45", "Le sac coûte 45 €."),
          fq("Quand est la livraison ?", "Le 15 mars", "Le 12 mars", "Le 20 mars", "La livraison est prévue le 15 _________.", "mars", "La livraison est le 15 mars."),
          fq("À quelle heure ?", "Entre 10 h et 12 h", "Entre 14 h et 16 h", "Le soir", "Entre 10 h et _________ h.", "12", "La livraison est le matin."),
          fq("Peut-on suivre le colis ?", "Oui, sur le site", "Non", "Seulement par téléphone", "Vous pouvez _________ votre colis sur notre site.", "suivre", "On peut suivre le colis en ligne.")]),
    ]
    # Add 18 more with variations
    for n in range(2, 20):
        templates.append((
            f"De : Service {['Moda','Tech','Home','Sport','Bio'][n%5]}\nObjet : Votre commande n° {1000+n}\n\nBonjour,\nVotre commande n° {1000+n} du {5+n} avril est en cours de préparation.\nMontant : {30+n*5} €. Livraison gratuite.\nDélai estimé : {3+n%4} jours ouvrés.\nRetour possible sous {14+n%10} jours avec ticket.\nGarantie : {1+n%2} an(s).\nCordialement,\nLe service clients",
            [fq("Quel numéro de commande ?", str(1000+n), str(1001+n), str(999+n), f"Votre commande n° _________ est en préparation.", str(1000+n), f"La commande est la n° {1000+n}."),
             fq("Quel est le montant ?", f"{30+n*5} €", "50 €", "100 €", f"Montant : _________ €.", str(30+n*5), f"Le montant est {30+n*5} €."),
             fq("La livraison est-elle gratuite ?", "Oui", "Non", "On ne sait pas", "Livraison _________.", "gratuite", "La livraison est gratuite."),
             fq("Quel est le délai ?", f"{3+n%4} jours ouvrés", "Un jour", "Deux semaines", f"Délai estimé : _________ jours ouvrés.", str(3+n%4), f"Le délai est {3+n%4} jours."),
             fq("Combien de temps pour un retour ?", f"{14+n%10} jours", "7 jours", "60 jours", f"Retour possible sous _________ jours.", str(14+n%10), "Un retour est possible."),
             fq("Quelle garantie ?", f"{1+n%2} an(s)", "5 ans", "Aucune", f"Garantie : _________ an(s).", str(1+n%2), "Il y a une garantie.")],
        ))
    return [ce_entry(t, f) for t, f in templates[:19]]


# ── Theme-based generic generators for other sub-lessons ─────────────────

THEMES = {
    "e9-1": ("achats", VENDEUR, CLIENT, shopping_ce_extras, shopping_po_extras, shopping_pe_extras, shopping_pe_email_extras, shopping_ce_email_extras),
    "e9-2": ("déplacements", AGENT, CLIENT, None, None, None, None, None),
    "e9-3": ("logement", PROP, LOC, None, None, None, None, None),
    "e9-4": ("démarches", EMP, CLIENT, None, None, None, None, None),
    "e9-5": ("actualité", COLL, AMI, None, None, None, None, None),
}


def generic_ce_extras(theme: str, count: int = 19) -> list[dict]:
    bodies = []
    for n in range(2, count + 2):
        bodies.append(ce_entry(
            f"""Info {theme.capitalize()} — Message {n}

Chers lecteurs, voici les informations importantes pour cette semaine concernant {theme}.
Le service est ouvert du lundi au vendredi, de 9 h à 18 h. Pour toute demande, contactez-nous par téléphone ou par e-mail.
Les démarches se font en ligne ou sur place, selon votre situation. Pensez à apporter une pièce d'identité et un justificatif de domicile.
Les délais de traitement sont de {n} jours ouvrés en moyenne. En cas d'urgence, un numéro spécial est disponible le samedi matin.
Pour plus de détails, consultez notre site Internet ou rendez-vous à l'accueil. Notre équipe se tient à votre disposition.""",
            [
                fq(f"Quel thème traite ce message ?", theme.capitalize(), "Le sport", "La cuisine",
                   f"Les informations concernent {theme}.", theme.split()[0] if " " in theme else theme, f"Le texte parle de {theme}."),
                fq("Quels sont les horaires d'ouverture ?", "Du lundi au vendredi, 9 h–18 h", "Le dimanche seulement", "24 h sur 24",
                   "Le service est ouvert du lundi au _________.", "vendredi", "Le service est ouvert en semaine."),
                fq("Quels documents faut-il apporter ?", "Pièce d'identité et justificatif de domicile", "Un passeport seulement", "Rien",
                   "Pensez à apporter une pièce d'_________ et un justificatif de domicile.", "identité", "Il faut une pièce d'identité."),
                fq("Combien de temps pour le traitement ?", f"{n} jours ouvrés", "Un jour", "Un mois",
                   f"Les délais sont de {n} jours _________.", "ouvrés", f"Le délai moyen est {n} jours."),
                fq("Peut-on contacter le service le samedi ?", "Oui, le matin", "Non, jamais", "Seulement le dimanche",
                   "Un numéro spécial est disponible le _________ matin.", "samedi", "Un numéro est disponible le samedi matin."),
                fq("Où trouver plus d'informations ?", "Sur le site Internet ou à l'accueil", "À la bibliothèque", "À l'étranger",
                   "Consultez notre site _________ ou rendez-vous à l'accueil.", "Internet", "On peut consulter le site Internet."),
            ],
        ))
    return bodies


def generic_po_extras(prefix: str, theme: str, ra: dict, rb: dict) -> list[dict]:
    situations = [
        f"Demander des informations sur {theme}",
        f"Résoudre un problème lié à {theme}",
        f"Prendre un rendez-vous pour {theme}",
        f"Confirmer un rendez-vous {theme}",
        f"Demander conseil à un proche sur {theme}",
        f"Signaler un retard lié à {theme}",
        f"Faire une réclamation polie sur {theme}",
        f"Obtenir un renseignement urgent sur {theme}",
        f"Comparer deux options pour {theme}",
        f"Remercier pour une aide concernant {theme}",
    ]
    result = []
    for i, sit in enumerate(situations):
        pairs = [
            ("Bonjour ! Je peux vous aider ?", f"Bonjour, j'ai une question sur {theme}."),
            ("Bien sûr, dites-moi.", "C'est au sujet de mon dossier / ma situation."),
            ("Je comprends. Quand avez-vous besoin d'une réponse ?", "Le plus tôt possible, si c'est possible."),
            ("Je vais vérifier et vous recontacte.", "Merci. Vous pouvez m'envoyer un e-mail ?"),
            ("Oui, je vous écris dans la journée.", "Parfait, merci beaucoup !"),
        ]
        result.append(po(f"{prefix}-po-{i+11}", sit.capitalize(), f"Vous devez gérer une situation : {sit}.", ra, rb, pairs))
    return result


def generic_pe_extras(prefix: str, theme: str) -> list[dict]:
    items = [
        (f"Décrire une expérience — {theme}", f"Vous avez vécu une situation importante liée à {theme}.",
         f"Racontez cette expérience : le contexte, ce qui s'est passé et le résultat.",
         ["Le contexte", "Les événements principaux", "Le résultat"]),
        (f"Demander des informations — {theme}", f"Vous avez besoin d'informations sur {theme}.",
         f"Écrivez un message formel : présentez-vous, posez trois questions précises et remerciez.",
         ["Votre présentation", "Trois questions", "Formule de politesse"]),
        (f"Donner votre avis — {theme}", f"On vous demande votre avis sur {theme}.",
         f"Exprimez votre opinion : avantages, inconvénients et recommandation.",
         ["Les points positifs", "Les points négatifs", "Votre recommandation"]),
        (f"Raconter un problème — {theme}", f"Vous avez rencontré un problème avec {theme}.",
         f"Décrivez le problème, ce que vous avez fait et ce que vous attendez maintenant.",
         ["Le problème", "Vos actions", "Votre attente"]),
        (f"Proposer une solution — {theme}", f"Un ami a un souci lié à {theme}.",
         f"Écrivez-lui un message avec deux conseils pratiques et une offre d'aide.",
         ["Deux conseils", "Votre offre d'aide", "Formule amicale"]),
        (f"Comparer deux options — {theme}", f"Vous hésitez entre deux choix pour {theme}.",
         f"Listez les avantages et inconvénients de chaque option et indiquez votre préférence.",
         ["Option A", "Option B", "Votre choix"]),
        (f"Planifier une démarche — {theme}", f"Vous devez organiser une démarche liée à {theme}.",
         f"Écrivez un plan avec les étapes, les documents nécessaires et les délais.",
         ["Les étapes", "Les documents", "Les délais"]),
        (f"Remercier — {theme}", f"Quelqu'un vous a aidé(e) pour {theme}.",
         f"Écrivez un message de remerciement : rappelez l'aide reçue et proposez de rendre la pareille.",
         ["L'aide reçue", "Votre gratitude", "Votre proposition"]),
        (f"Informer — {theme}", f"Vous devez informer un proche d'une nouvelle sur {theme}.",
         f"Écrivez un message clair avec les faits importants et une question pour lui.",
         ["Les informations clés", "Les détails pratiques", "Une question"]),
        (f"Bilan personnel — {theme}", f"Vous faites le bilan de votre expérience avec {theme}.",
         f"Rédigez un texte : ce que vous avez appris, ce qui reste à faire et vos objectifs.",
         ["Ce que vous avez appris", "Ce qui reste à faire", "Vos objectifs"]),
    ]
    return [pe(f"{prefix}-pe-{i+11}", t, s, ins, pts) for i, (t, s, ins, pts) in enumerate(items)]


def generic_pe_email_extras(prefix: str, theme: str) -> list[dict]:
    items = []
    for i in range(10):
        n = i + 11
        items.append(pee(
            f"{prefix}-pee-{n}",
            f"Répondre — {theme} ({n})",
            f"Vous avez reçu un e-mail concernant {theme}.",
            f"Répondez poliment : confirmez la réception, répondez aux questions et proposez une suite.",
            ["Confirmation de réception", "Réponses aux questions", "Proposition de suite"],
            f"Service {theme.capitalize()}",
            f"Votre demande — référence {n}00",
            f"Bonjour,\nNous avons bien reçu votre message concernant {theme}.\nPouvez-vous nous préciser votre disponibilité ?\nCordialement,\nLe service",
        ))
    return items


def generic_ce_email_extras(theme: str) -> list[dict]:
    return generic_ce_extras(f"e-mail {theme}", 19)


# Build EXPANSIONS dict — populated at import time
EXPANSIONS: dict = {}

SUB_LESSONS = [
    ("e9-1", "achats", VENDEUR, CLIENT),
    ("e9-2", "déplacements", AGENT, CLIENT),
    ("e9-3", "logement", PROP, LOC),
    ("e9-4", "démarches administratives", EMP, CLIENT),
    ("e9-5", "l'actualité", COLL, AMI),
    ("e10-1", "invitations", AMI, AMI),
    ("e10-2", "rencontres", AMI, AMI),
    ("e10-3", "événements", AMI, AMI),
    ("e10-4", "vie scolaire", PROF, ELEVE),
    ("e10-5", "vie associative", AMI, AMI),
    ("e11-1", "cuisine", AMI, AMI),
    ("e11-2", "activités", AMI, AMI),
    ("e11-3", "goûts", AMI, AMI),
    ("e11-4", "vacances", AMI, AMI),
    ("e12-1", "santé", MED, PAT),
    ("e12-2", "sport", AMI, AMI),
    ("e12-3", "alimentation", AMI, AMI),
    ("e12-4", "la ville", AGENT, CLIENT),
    ("e12-5", "bien-être", AMI, AMI),
    ("e13-1", "formation", PROF, ELEVE),
    ("e13-2", "stage", RH, CAND),
    ("e13-3", "emploi", RH, CAND),
    ("e13-4", "entretien", RH, CAND),
    ("e13-5", "entreprise", COLL, COLL),
    ("e14-1", "bilan A2", AMI, AMI),
]

for key, theme, ra, rb in SUB_LESSONS:
    if key == "e9-1":
        ce_extra = shopping_ce_extras()
        po_extra = shopping_po_extras(key)
        pe_extra = shopping_pe_extras(key)
        pe_email_extra = shopping_pe_email_extras(key)
        ce_email_extra = shopping_ce_email_extras()
    else:
        ce_extra = generic_ce_extras(theme)
        po_extra = generic_po_extras(key, theme, ra, rb)
        pe_extra = generic_pe_extras(key, theme)
        pe_email_extra = generic_pe_email_extras(key, theme)
        ce_email_extra = generic_ce_email_extras(theme)

    EXPANSIONS[key] = {
        "ce_extra": ce_extra,
        "po_extra": po_extra,
        "pe_extra": pe_extra,
        "pe_email_extra": pe_email_extra,
        "ce_email_extra": ce_email_extra,
    }
