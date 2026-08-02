"""E8 scenarios — bilan A1 (situations quotidiennes variées)."""
from generate_all_data import Q
from scenarios_common import render_email, render_forum


def build_e8_lessons():
    return {
        "e8-1": {"title": "E8.1 Bilan A1", "messages": _e8_1_messages(), "emails": _e8_1_emails()},
    }


def _daily_msg(header, body, qs):
    return {"text": f"{header}\n\n{body}", "questions": qs}


def _e8_1_messages():
    items = [
        _daily_msg("Magasin — Soldes", "Soldes -30 % vêtements jusqu'au 31 janvier.\nOuvert 9 h–19 h.\nCabines 1er étage.", [
            Q("Promotion ?", "-30 %", "-3 %", "Gratuit", "Soldes ___ %.", "30", "-30 %.", 0),
            Q("Jusqu'au ?", "31 janvier", "31 mars", "Demain", "jusqu'au ___ janvier.", "31", "31 janvier.", 0),
            Q("Horaires ?", "9 h–19 h", "Nuit", "Fermé", "Ouvert 9 h–___ h.", "19", "9-19 h.", 0),
            Q("Cabines ?", "1er étage", "Sous-sol", "Rue", "Cabines ___ étage.", "1er", "1er étage.", 0),
            Q("Type lieu ?", "Magasin", "Gare", "Hôpital", "Magasin — _________.", "Soldes", "Magasin.", 0),
            Q("Produits ?", "Vêtements", "Voitures", "Maisons", "vêtements ___ %.", "30", "Vêtements.", 0),
            Q("Texte A1 ?", "Oui", "Non", "Difficile", "Niveau _________.", "A1", "A1.", 0),
        ]),
        _daily_msg("Restaurant — Menu midi", "Menu midi 18 fr.\nEntrée + plat + dessert.\nService 11 h 30–14 h.", [
            Q("Prix menu ?", "18 fr", "80 fr", "Gratuit", "Menu midi ___ fr.", "18", "18 fr.", 0),
            Q("Contenu ?", "Entrée + plat + dessert", "Boisson seule", "Rien", "Entrée + plat + _________.", "dessert", "Complet.", 0),
            Q("Horaires service ?", "11 h 30–14 h", "Nuit", "Matin seul", "Service 11 h 30–___ h.", "14", "11h30-14h.", 0),
            Q("Type lieu ?", "Restaurant", "Gare", "École", "Restaurant — _________.", "Menu", "Restaurant.", 0),
            Q("Repas ?", "Midi", "Petit-déjeuner", "?", "Menu _________.", "midi", "Midi.", 0),
            Q("Dessert inclus ?", "Oui", "Non", "?", "plat + _________.", "dessert", "Oui.", 0),
            Q("Prix raisonnable A1 ?", "Oui", "1000 fr", "?", "___ fr.", "18", "18 fr.", 0),
        ]),
        _daily_msg("École — Rentrée", "Rentrée lundi 26 août 8 h 15.\nFournitures : cahiers, stylos, règle.\nRendez-vous cour de l'école.", [
            Q("Date rentrée ?", "Lundi 26 août", "Dimanche", "Hier", "Rentrée lundi ___ août.", "26", "26 août.", 0),
            Q("Heure ?", "8 h 15", "20 h", "Midi", "8 h ___.", "15", "8h15.", 0),
            Q("Fournitures ?", "Cahiers, stylos, règle", "Voiture", "Chat", "Fournitures : _________.", "cahiers", "Cahiers etc.", 0),
            Q("Lieu RDV ?", "Cour de l'école", "Gare", "Plage", "cour de l'_________.", "école", "Cour école.", 0),
            Q("Type document ?", "Info école", "Menu", "Bus", "École — _________.", "Rentrée", "École.", 0),
            Q("Jour ?", "Lundi", "Samedi", "?", "_________ 26 août.", "lundi", "Lundi.", 0),
            Q("Pour qui ?", "Élèves", "Pilotes", "?", "Rentrée _________.", "élèves", "Élèves.", 0),
        ]),
        _daily_msg("Médecin — Horaires", "Cabinet ouvert lun–ven 8 h–18 h.\nRDV par téléphone 021 111 22 33.\nUrgences week-end : 144.", [
            Q("Horaires ?", "8 h–18 h", "Nuit", "Fermé", "8 h–___ h.", "18", "8-18 h.", 0),
            Q("RDV comment ?", "Par téléphone", "Par courrier", "?", "RDV par _________.", "téléphone", "Téléphone.", 0),
            Q("Numéro ?", "021 111 22 33", "117", "12", "021 111 ___ 33.", "22", "021 111 22 33.", 0),
            Q("Urgences week-end ?", "144", "12", "0", "Urgences : _________.", "144", "144.", 0),
            Q("Type lieu ?", "Cabinet médical", "Gare", "?", "Cabinet _________.", "médical", "Médecin.", 0, prof=True),
            Q("Ouvert week-end ?", "Non", "Oui", "?", "Cabinet fermé _________.", "week-end", "Fermé WE.", 0),
            Q("Jours ouverture ?", "Lun–ven", "Sam–dim", "?", "lun–_________.", "ven", "Lun-ven.", 0),
        ]),
        _daily_msg("Pharmacie — Garde", "Pharmacie de garde : composez 1818.\nOuverte 24 h week-end et jours fériés.\nAdresse sur répondeur.", [
            Q("Numéro garde ?", "1818", "144", "117", "composez _________.", "1818", "1818.", 0),
            Q("Horaires garde ?", "24 h week-end", "8 h–12 h", "Fermé", "24 h _________.", "week-end", "24h WE.", 0),
            Q("Adresse ?", "Sur répondeur", "Inconnue", "Gare", "Adresse sur _________.", "répondeur", "Répondeur.", 0),
            Q("Type lieu ?", "Pharmacie", "Restaurant", "?", "Pharmacie de _________.", "garde", "Pharmacie.", 0, prof=True),
            Q("Quand appeler 1818 ?", "Week-end", "Lundi matin", "?", "week-end et jours _________.", "fériés", "WE/fériés.", 0),
            Q("Ouverte garde ?", "24 h", "1 h", "?", "Ouverte ___ h.", "24", "24h.", 0),
            Q("Urgence médicamenteuse ?", "Oui", "Non", "?", "Pharmacie de _________.", "garde", "Oui.", 0),
        ]),
    ]
    more = [
        ("Bus — Horaires", "Bus 8 : gare 7 h, centre 7 h 15.\nToutes les 15 min.\nTicket 3,50 fr.", "Bus", "8", "15 min", "3,50 fr"),
        ("Hôtel — Check-in", "Check-in 15 h. WiFi gratuit.\nPetit-déjeuner 7 h–10 h.\nDépart 11 h.", "15 h", "11 h", "7 h–10 h", "gratuit"),
        ("Banque — Horaires", "Banque ouverte mar–ven 9 h–17 h.\nGuichet automatique 24 h.\nConseiller sur RDV.", "mar–ven", "9 h–17 h", "24 h", "RDV"),
        ("Poste — Colis", "Colis disponible 5 jours.\nPièce d'identité obligatoire.\nHoraires 7 h 30–18 h.", "5 jours", "identité", "7 h 30–18 h", "colis"),
        ("Piscine — Règles", "Piscine 12 h–20 h mer–dim.\nBonnet obligatoire.\nDouche avant entrée.", "12 h–20 h", "bonnet", "douche", "mer–dim"),
        ("Boulangerie — Pain", "Pain frais 6 h–12 h.\nFermé lundi.\nCroissants jusqu'à 11 h.", "6 h–12 h", "lundi", "11 h", "pain"),
        ("Travail — Réunion", "Réunion vendredi 14 h salle 3.\nOrdre du jour : projet budget.\nDurée 1 h.", "vendredi 14 h", "salle 3", "budget", "1 h"),
        ("Famille — Anniversaire", "Anniversaire samedi 16 h chez grand-mère.\nGâteau chocolat.\nApportez un cadeau si vous voulez.", "samedi 16 h", "grand-mère", "chocolat", "cadeau"),
        ("Vacances — Voyage", "Voyage Italie 10–17 juillet.\nBillets train réservés.\nHôtel Rome centre.", "Italie", "10–17 juillet", "train", "Rome"),
        ("Sport — Match", "Match foot dimanche 15 h stade.\nBillets 15 fr.\nÉquipe locale.", "dimanche 15 h", "15 fr", "stade", "foot"),
        ("Culture — Musée", "Musée gratuit 1er dimanche.\nOuvert 10 h–18 h.\nExposition temporaire.", "1er dimanche", "10 h–18 h", "gratuit", "exposition"),
        ("Appartement — Visite", "Visite appartement mardi 18 h.\nAdresse rue du Lac 5.\n3 pièces, 950 fr.", "mardi 18 h", "rue du Lac 5", "3 pièces", "950 fr"),
        ("Voisin — Bruit", "Pas de musique forte après 22 h.\nMerci de votre compréhension.\nRèglement immeuble.", "22 h", "musique", "règlement", "voisins"),
    ]
    for hdr, body, k1, k2, k3, k4 in more:
        items.append(_daily_msg(hdr, body, [
            Q("Sujet principal ?", hdr.split("—")[-1].strip(), "Bus", "?", f"{hdr.split('—')[0].strip()} — _________.", k1.split()[0], f"Sujet : {hdr}.", 0),
            Q("Info clé 1 ?", k1, "Paris", "?", f"Info : _________.", k1.split()[0], f"{k1}.", 0),
            Q("Info clé 2 ?", k2, "Rien", "?", f"_________ : {k2}.", k2.split()[0], f"{k2}.", 0),
            Q("Type situation ?", "Quotidien A1", "Roman", "?", "Situation _________.", "quotidienne", "A1 quotidien.", 0),
            Q("Texte court ?", "Oui", "Non", "Long", "Texte _________.", "court", "Court.", 0),
            Q("Thème bilan ?", "Mix A1", "Transport seul", "?", "Bilan _________.", "A1", "Mix A1.", 0),
            Q("Document utile ?", "Oui", "Non", "?", "Document _________.", "utile", "Oui.", 0),
        ]))
    forum = render_forum("Ana", 25, "espagnole", "Lausanne", "deux ans", "étudiante", "l'université", "le lundi et le mercredi", "la musique et la lecture", "Je cherche des amis pour parler français.")
    items.append(forum)
    items.append(_daily_msg("Santé — Vaccin", "Vaccination grippe gratuite 65+.\nSans RDV en pharmacie.\nCampagne octobre–décembre.", [
        Q("Pour qui ?", "65+", "Enfants", "Tous", "gratuite ___+.", "65", "65+.", 0),
        Q("RDV ?", "Sans RDV", "Obligatoire", "?", "Sans _________.", "RDV", "Sans RDV.", 0),
        Q("Où ?", "Pharmacie", "Gare", "?", "en _________.", "pharmacie", "Pharmacie.", 0, prof=True),
        Q("Prix ?", "Gratuit", "50 fr", "?", "vaccination _________.", "gratuite", "Gratuit.", 0),
        Q("Période ?", "Octobre–décembre", "Été", "?", "Campagne _________.", "octobre", "Oct-déc.", 0),
        Q("Maladie ?", "Grippe", "Fièvre", "?", "vaccination _________.", "grippe", "Grippe.", 0),
        Q("Bilan A1 ?", "Oui", "Non", "?", "Thème _________.", "santé", "Santé A1.", 0),
    ]))
    return items[:20]


def _e8_1_emails():
    specs = [
        ("École de langues", "Forum — amis français", ["Je cherche des amis pour parler français.", "Cours le lundi 18 h.", "Contact : forum@mail.ch"]),
        ("Marie Dupont", "Invitation café", ["Café mardi 10 h place Centrale.", "On parle français.", "À mardi !"]),
        ("Paul Girard", "Rappel RDV médecin", ["RDV jeudi 9 h 30 Dr Martin.", "Apportez carte assurance.", "Cabinet rue du Lac 8."]),
        ("Pharmacie du Lac", "Médicament prêt", ["Votre ordonnance est prête.", "Retrait aujourd'hui avant 18 h.", "Pièce d'identité."]),
        ("TL Info", "Abonnement", ["Abonnement mensuel activé.", "75 fr zone 11.", "Valable 1 mois."]),
        ("Hôtel Central", "Confirmation", ["Réservation 2 nuits confirmée.", "Arrivée 15 h.", "WiFi gratuit."]),
        ("Restaurant Le Port", "Réservation", ["Table 2 personnes samedi 19 h 30.", "Terrasse si beau temps.", "À samedi."]),
        ("Banque Populaire", "Rendez-vous", ["RDV conseiller mardi 14 h.", "Agence rue Centrale.", "Apportez pièce d'identité."]),
        ("La Poste", "Colis arrivé", ["Colis disponible 5 jours.", "Horaires 7 h 30–18 h.", "Pièce d'identité."]),
        ("Migros", "Offre fidélité", ["-10 % ce week-end.", "Carte Cumulus.", "Bons achats !"]),
        ("Club sport", "Cours essai", ["Essai yoga gratuit mardi 18 h.", "Tenue confortable.", "Inscription réponse mail."]),
        ("Musée", "Billet gratuit", ["Entrée gratuite 1er dimanche.", "10 h–18 h.", "Exposition photo."]),
        ("Propriétaire", "Loyer", ["Loyer mars 1200 fr.", "Échéance 1er mars.", "Virement IBAN en pièce jointe."]),
        ("Collègue", "Réunion", ["Réunion vendredi 14 h reportée 15 h.", "Salle 3.", "Ordre du jour inchangé."]),
        ("Grand-mère", "Anniversaire", ["Anniversaire samedi 16 h.", "Gâteau chocolat.", "Venez si vous pouvez !"]),
        ("Agence voyage", "Billets Italie", ["Billets train 10–17 juillet OK.", "Départ 8 h 12.", "Bon voyage !"]),
        ("Voisin", "Fête bruit", ["Fête samedi soir jusqu'à 23 h.", "Désolé pour le bruit.", "Merci compréhension."]),
        ("Médecin", "Résultats", ["Résultats analyses normaux.", "Pas de RDV nécessaire.", "Dr Blanc."]),
        ("Boulangerie", "Commande", ["Pain commandé prêt demain 7 h.", "Paiement à la caisse.", "Merci !"]),
        ("Forum A1", "Colocation", ["Cherche colocataire 2 pièces Lausanne.", "Loyer 600 fr.", "Contact : coloc@mail.ch"]),
    ]
    emails = []
    for sender, subject, lines in specs:
        emails.append(render_email(sender, subject, lines, [
            Q("Qui écrit ?", sender, "Bus", "Train", f"De : _________.", sender.split()[0], f"{sender}.", 0),
            Q("Objet ?", subject, "Menu", "?", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
            Q("Situation A1 ?", "Oui", "Non", "Difficile", "Situation _________.", "A1", "A1.", 0),
            Q("Première info ?", lines[0], "Rien", "?", f"Info : _________.", lines[0].split()[0], f"{lines[0]}.", 0),
            Q("Type message ?", "E-mail quotidien", "Roman", "?", "E-mail _________.", "quotidien", "Quotidien.", 0),
            Q("Texte court ?", "Oui", "Non", "Long", "Message _________.", "court", "Court.", 0),
            Q("Thème bilan A1 ?", "Oui", "Non", "?", "Bilan _________.", "A1", "Oui.", 0),
        ]))
    return emails
