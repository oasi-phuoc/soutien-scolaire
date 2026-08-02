"""E7 scenarios — hôtel, sport, culture."""
from generate_all_data import Q
from scenarios_common import render_email


def build_e7_lessons():
    return {
        "e7-1": {"title": "E7.1 Aller à l'hôtel", "messages": _e7_1_messages(), "emails": _e7_1_emails()},
        "e7-2": {"title": "E7.2 Pratiquer une activité sportive", "messages": _e7_2_messages(), "emails": _e7_2_emails()},
        "e7-3": {"title": "E7.3 Visiter des lieux culturels", "messages": _e7_3_messages(), "emails": _e7_3_emails()},
    }


def _hotel_card(name, wifi, pwd, breakfast_h, breakfast_room, reception):
    text = f"""Carte bienvenue — {name}

Bienvenue ! WiFi : {wifi}. Mot de passe : {pwd}.
Petit-déjeuner {breakfast_h} salle {breakfast_room}.
Réception {reception}."""
    return {"text": text, "questions": [
        Q("Nom hôtel ?", name, "Gare", "Port", f"Carte bienvenue — _________.", name.split()[-1], f"Hôtel {name}.", 0),
        Q("WiFi réseau ?", wifi, "Bus_12", "Secret", f"WiFi : _________.", wifi, f"WiFi {wifi}.", 0),
        Q("Mot de passe WiFi ?", pwd, "12345", "rien", f"Mot de passe : _________.", pwd, f"MDP : {pwd}.", 0),
        Q("Horaires petit-déjeuner ?", breakfast_h, "20 h–23 h", "Fermé", f"Petit-déjeuner _________.", breakfast_h.split("–")[0].split()[-1], f"PDJ : {breakfast_h}.", 0),
        Q("Salle petit-déjeuner ?", breakfast_room, "Gare", "Rue", f"salle _________.", breakfast_room, f"Salle {breakfast_room}.", 0),
        Q("Réception ?", reception, "8 h–18 h", "Fermée", f"Réception _________.", reception.split("/")[0], f"Réception {reception}.", 0),
        Q("Type document ?", "Carte bienvenue hôtel", "Billet train", "Menu bus", "Carte _________.", "bienvenue", "Carte bienvenue.", 0),
    ]}


def _checkin_affiche(checkin, checkout, doc, caution):
    text = f"""Affiche — Réception hôtel

Check-in {checkin}. Check-out {checkout}.
{doc} obligatoire.
Caution : {caution}."""
    return {"text": text, "questions": [
        Q("Check-in ?", checkin, checkout, "8 h", f"Check-in _________.", checkin.replace(" h", ""), f"Check-in {checkin}.", 0),
        Q("Check-out ?", checkout, checkin, "23 h", f"Check-out _________.", checkout.replace(" h", ""), f"Check-out {checkout}.", 0),
        Q("Document obligatoire ?", doc, "Rien", "Chat", f"_________ obligatoire.", doc.split()[0], f"{doc} obligatoire.", 0),
        Q("Caution ?", caution, "Gratuit", "Interdit", f"Caution : _________.", caution.split()[0], f"Caution : {caution}.", 0),
        Q("Type affiche ?", "Réception hôtel", "Gare", "Bus", "Affiche — _________.", "Réception", "Affiche réception.", 0),
        Q("Check-in avant midi ?", "Non, 15 h", "Oui 8 h", "?", f"Check-in {checkin}.", checkin.replace(" h", ""), f"Check-in {checkin}.", 0),
        Q("Lieu ?", "Hôtel", "Aéroport", "École", "Réception _________.", "hôtel", "Hôtel.", 0),
    ]}


def _e7_1_messages():
    cards = [
        ("Hôtel du Lac", "Lac2024", "accueil123", "7 h–10 h", "Riviera", "24 h/24"),
        ("Hôtel Bellevue", "Bellevue_Guest", "lac2025", "6 h 30–10 h 30", "Alpes", "24 h/24"),
        ("Hôtel Central", "Central_WiFi", "welcome99", "7 h–11 h", "Jardin", "6 h–23 h"),
        ("Hôtel Mont-Blanc", "MontBlanc", "hotel2024", "7 h–10 h", "Panorama", "24 h/24"),
        ("Auberge du Port", "Port_Free", "bateau12", "8 h–10 h", "Marina", "7 h–22 h"),
    ]
    out = [_hotel_card(*c) for c in cards]
    checks = [
        ("15 h", "11 h", "Passeport ou carte d'identité", "carte bancaire"),
        ("14 h", "10 h", "Pièce d'identité", "carte bancaire ou espèces"),
        ("15 h", "11 h", "Passeport", "empreinte carte"),
        ("16 h", "12 h", "Carte d'identité", "carte bancaire"),
        ("15 h", "11 h", "Passeport ou permis", "carte bancaire"),
    ]
    out += [_checkin_affiche(*c) for c in checks]
    notes = [
        ("Règlement intérieur", "Silence après 22 h.\nAnimaux interdits.\nFumer interdit dans les chambres."),
        ("Mini-bar", "Mini-bar : eau 5 fr, jus 6 fr, bière 8 fr.\nFacturation à la chambre.\nRemplissage quotidien."),
        ("Service chambre", "Room service 7 h–22 h.\nMenu sur la télévision.\nCommande au poste 0."),
        ("Parking", "Parking souterrain 25 fr/nuit.\nPlaces limitées.\nRéservation à la réception."),
        ("Piscine", "Piscine 7 h–21 h.\nBonnet obligatoire.\nEnfants accompagnés."),
        ("Blanchisserie", "Service blanchisserie express.\nDépôt avant 9 h, retour 18 h.\nTarif : 15 fr/kg."),
        ("Réveil", "Réveil téléphonique sur demande.\nComposer 0 pour réception.\nGratuit."),
        ("Consigne", "Consigne bagages gratuite.\nAccès 24 h avec carte chambre.\nRez-de-chaussée."),
        ("Ascenseur", "Ascenseur panne : utiliser escalier B.\nRéparation prévue demain 10 h.\nExcuses."),
        ("Climatisation", "Climatisation : télécommande murale.\nTempérature 20–24 °C.\nFenêtre fermée."),
    ]
    for title, body in notes:
        w = body.split()[0]
        out.append({"text": f"Note — {title}\n\n{body}", "questions": [
            Q("Sujet ?", title, "Bus", "Train", f"Note — _________.", title.split()[0], f"Sujet : {title}.", 0),
            Q("Lieu ?", "Hôtel", "Gare", "Plage", "Note _________.", "hôtel", "Hôtel.", 0),
            Q("Premier mot du corps ?", w, "Zéro", "?", f"Mot : _________.", w.rstrip(":").rstrip("."), f"{w}.", 0),
            Q("Type document ?", f"Note {title.lower()}", "Roman", "Bus", "Type : _________.", "Note", "Note hôtel.", 0),
            Q("Info pratique ?", "Oui", "Non", "?", "Info _________.", "pratique", "Oui.", 0),
            Q("Pour client hôtel ?", "Oui", "Non", "Conducteur bus", "Pour _________.", "client", "Oui.", 0),
            Q("Texte court ?", "Oui", "Non", "Long", "Texte _________.", "court", "Court A1.", 0),
        ]})
    return out[:20]


def _e7_1_emails():
    specs = [
        ("Hôtel du Lac", "Confirmation réservation", ["Réservation confirmée chambre 204.", "Arrivée 15 h, départ 11 h.", "WiFi gratuit. Petit-déjeuner inclus."]),
        ("Hôtel Bellevue", "Bienvenue", ["Bienvenue à l'Hôtel Bellevue !", "Check-in 15 h. Mot de passe WiFi : lac2025.", "Réception 24 h/24."]),
        ("Réception Central", "Chambre prête", ["Votre chambre 312 est prête.", "3e étage, ascenseur A.", "Clés à la réception."]),
        ("Hôtel Mont-Blanc", "Rappel check-out", ["Rappel : check-out demain 11 h.", "Facture à régler à la réception.", "Consigne bagages gratuite."]),
        ("Auberge du Port", "Annulation", ["Votre réservation du 12 mars est annulée.", "Remboursement sous 5 jours.", "À bientôt."]),
        ("Hôtel du Lac", "Room service", ["Room service disponible 7 h–22 h.", "Menu sur la télé chambre.", "Commande au poste 0."]),
        ("Hôtel Riviera", "Offre spa", ["Spa gratuit pour les clients.", "Ouvert 9 h–20 h.", "Réservation à la réception."]),
        ("Réception Bellevue", "Objet trouvé", ["Nous avons trouvé un parapluie.", "Disponible à la réception.", "Décrivez-le pour le récupérer."]),
        ("Hôtel Central", "Facture", ["Votre facture séjour : 420 fr.", "Détail en pièce jointe.", "Merci de votre visite."]),
        ("Hôtel du Parc", "Parking", ["Place parking P2 réservée.", "25 fr/nuit.", "Entrée par rue des Alpes."]),
        ("Réception Lac", "Chambre non fumeur", ["Chambre 108 non fumeur confirmée.", "Étage 1.", "Animaux non acceptés."]),
        ("Hôtel Alpes", "Petit-déjeuner", ["Petit-déjeuner buffet 7 h–10 h.", "Salle Alpes rez-de-chaussée.", "Boissons chaudes incluses."]),
        ("Hôtel Ouchy", "Vue lac", ["Chambre vue lac confirmée.", "Étage 5 chambre 502.", "Arrivée possible dès 14 h."]),
        ("Réception", "Carte perdue", ["Carte chambre désactivée.", "Nouvelle carte à la réception.", "Pièce d'identité requise."]),
        ("Hôtel Gare", "Train tôt", ["Petit-déjeuner à emporter possible.", "Demandez la veille avant 20 h.", "Départ gare 5 min à pied."]),
        ("Hôtel Flon", "Séjour prolongé", ["Prolongation 2 nuits acceptée.", "Même chambre 215.", "Tarif inchangé."]),
        ("Réception", "Nettoyage", ["Ménage chambre 10 h–14 h.", "Panneau « Ne pas déranger » disponible.", "Service gratuit."]),
        ("Hôtel Morges", "Confirmation groupe", ["Réservation groupe 4 chambres OK.", "Arrivée vendredi 16 h.", "Facture unique à la réception."]),
        ("Hôtel Nyon", "WiFi problème", ["WiFi réparé.", "Nouveau mot de passe : nyon2025.", "Redémarrez votre appareil."]),
        ("Réception", "Merci", ["Merci pour votre séjour.", "Laissez un avis en ligne.", "Réduction 10 % prochaine visite."]),
    ]
    return [_hotel_email(s, sub, lines) for s, sub, lines in specs]


def _hotel_email(sender, subject, lines):
    return render_email(sender, subject, lines, [
        Q("Qui écrit ?", sender, "La gare", "Le bus", f"De : _________.", sender.split()[0], f"{sender}.", 0),
        Q("Objet ?", subject, "Menu", "Train", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
        Q("Thème hôtel ?", "Oui", "Non", "Sport", "Thème _________.", "hôtel", "Oui.", 0),
        Q("Première info ?", lines[0], "Rien", "?", f"Info : _________.", lines[0].split()[0], f"{lines[0]}.", 0),
        Q("Type message ?", "E-mail hôtel", "Facture bus", "Ordonnance", "E-mail _________.", "hôtel", "E-mail hôtel.", 0),
        Q("Texte court ?", "Oui", "Non", "Roman", "Message _________.", "court", "Court A1.", 0),
        Q("Utile pour séjour ?", "Oui", "Non", "Cuisiner", "Utile pour _________.", "séjour", "Oui.", 0),
    ])


def _sport_affiche(name, hours, course1, course2, trial):
    text = f"""Affiche — {name}

Ouvert {hours}.
Cours : {course1}, {course2}.
Essai gratuit : {trial}."""
    return {"text": text, "questions": [
        Q("Nom salle ?", name, "Pharmacie", "Gare", f"Affiche — _________.", name.split()[-1], f"{name}.", 0),
        Q("Horaires ?", hours, "Nuit", "Fermé", f"Ouvert _________.", hours.split("–")[0].split()[-1], f"Horaires : {hours}.", 0),
        Q("Premier cours ?", course1.split(",")[0], "Cuisine", "Lecture", f"Cours : _________.", course1.split()[0], f"Cours : {course1}.", 0),
        Q("Deuxième cours ?", course2.split(",")[0] if "," in course2 else course2, "Dormir", "?", f"{course2}.", course2.split()[0], f"{course2}.", 0),
        Q("Essai ?", trial, "50 fr", "Interdit", f"Essai gratuit : _________.", trial.split()[0], f"Essai : {trial}.", 0),
        Q("Type lieu ?", "Salle de sport", "Musée", "Banque", "Lieu : _________.", "sport", "Sport.", 0),
        Q("Inscription nécessaire ?", "Probable", "Non jamais", "?", "Cours sur _________.", "affiche", "Voir affiche.", 0),
    ]}


def _e7_2_messages():
    salles = [
        ("Salle Fit+", "6 h–22 h lun–sam", "yoga mardi 18 h", "aquagym jeudi 19 h", "1 jour"),
        ("Gym Center", "5 h 30–23 h", "spinning lundi 19 h", "pilates mercredi 17 h", "1 séance"),
        ("Sport Club Morges", "7 h–21 h", "musculation tous les jours", "crossfit vendredi 18 h", "1 semaine"),
        ("Piscine Lausanne", "12 h–20 h mer–dim", "natation enfants mardi 16 h", "aquagym samedi 10 h", "1 entrée"),
        ("Tennis Club", "8 h–22 h", "cours débutant lundi 17 h", "tournoi dimanche", "1 cours"),
    ]
    out = [_sport_affiche(*s) for s in salles]
    flyers = [
        ("Football club", "Cours foot lundi et mercredi 17 h.\nInscription au bureau.\nTenue de sport obligatoire.\nPremier cours gratuit."),
        ("Club running", "Sortie running samedi 8 h parc.\nTous niveaux.\nInscription gratuite en ligne."),
        ("Escalade indoor", "Mur 15 m. Ouvert 10 h–22 h.\nChaussons location 5 fr.\nCours initiation samedi."),
        ("Danse studio", "Salsa mardi 19 h, bachata jeudi 20 h.\nPartenaire non obligatoire.\nEssai 10 fr."),
        ("Badminton hall", "Terrains réservation en ligne.\nRaquettes location 3 fr.\nTournoi mensuel."),
        ("Vélo club", "Balade dimanche 9 h gare.\nCasque obligatoire.\nParcours 30 km."),
        ("Natation masters", "Entraînement lun/mer/ven 7 h.\nPiscine 50 m.\nLicence annuelle 80 fr."),
        ("Yoga parc", "Cours gratuit été 18 h parc.\nTapis fourni.\nTous niveaux bienvenus."),
        ("Musculation", "Salle 24 h avec badge.\nCoach lundi 18 h gratuit.\nDouche et casiers."),
        ("Basket club", "Match amical samedi 15 h.\nGymnase municipal.\nInscription 20 fr."),
        ("Ski club", "Sortie ski 6 h bus parking.\nForfait non inclus.\nRéunion info jeudi 19 h."),
        ("Volley plage", "Terrain sable juin–août.\nCours mer 17 h.\nÉquipe 6 joueurs."),
        ("Golf initiation", "Cours samedi 10 h practice.\nClubs prêtés.\n10 balles incluses."),
        ("Boxe fitness", "Cours cardio boxe mardi 18 h 30.\nGants fournis.\nRéservation obligatoire."),
        ("Patinage", "Patinoire oct–mars 14 h–21 h.\nLocation patins 8 fr.\nCours enfants samedi."),
    ]
    for title, body in flyers:
        sport = title.split()[0]
        out.append({"text": f"Flyer — {title}\n\n{body}", "questions": [
            Q("Sport ?", sport, "Cuisine", "Lecture", f"Flyer — _________.", sport, f"{sport}.", 0),
            Q("Type document ?", "Flyer sport", "Menu", "Bus", "Flyer _________.", "sport", "Flyer.", 0),
            Q("Inscription ?", "Au bureau ou en ligne" if "inscription" in body.lower() or "Inscription" in body else "Voir texte", "Jamais", "?", "Inscription _________.", "bureau" if "bureau" in body else "ligne", "Voir flyer.", 0),
            Q("Tenue sport ?", "Obligatoire" if "obligatoire" in body.lower() else "Non précisé", "Interdite", "?", "tenue _________.", "obligatoire" if "obligatoire" in body.lower() else "sport", "Voir texte.", 0),
            Q("Premier cours ?", "Gratuit" if "gratuit" in body.lower() else "Payant", "1000 fr", "?", "premier cours _________.", "gratuit" if "gratuit" in body.lower() else "payant", "Voir flyer.", 0),
            Q("Lieu sport ?", "Club ou salle", "Pharmacie", "?", "Lieu : _________.", "club", "Club/salle.", 0),
            Q("Texte court ?", "Oui", "Non", "Long", "Texte _________.", "court", "Court A1.", 0),
        ]})
    return out[:20]


def _e7_2_emails():
    specs = [
        ("Fit+", "Inscription confirmée", ["Inscription cours yoga confirmée.", "Mardi 18 h salle 2.", "Tenue confortable."]),
        ("Tennis Club", "Réservation terrain", ["Terrain réservé samedi 10 h.", "Durée 1 h.", "Raquettes disponibles au club."]),
        ("Piscine Lausanne", "Cours natation", ["Cours natation enfant confirmé.", "Mardi 16 h.", "Maillot et bonnet obligatoires."]),
        ("Running Team", "Sortie dimanche", ["Sortie running dimanche 8 h.", "Départ parc Mon-Repos.", "Distances 5 et 10 km."]),
        ("Gym Center", "Abonnement", ["Abonnement mensuel activé.", "75 fr/mois.", "Accès 5 h 30–23 h."]),
        ("Foot club", "Match samedi", ["Match samedi 15 h stade.", "Rassemblement 14 h 30.", "Tenue verte."]),
        ("Yoga studio", "Cours annulé", ["Cours mardi annulé.", "Report jeudi même heure.", "Excuses."]),
        ("Escalade", "Initiation", ["Cours initiation samedi 11 h.", "Chaussons fournis.", "Réservation confirmée."]),
        ("Danse", "Soirée salsa", ["Soirée salsa vendredi 20 h.", "Cours débutant 19 h.", "Entrée 15 fr."]),
        ("Badminton", "Tournoi", ["Tournoi samedi 9 h.", "Inscription jusqu'à vendredi.", "Prix : 20 fr."]),
        ("Vélo club", "Balade", ["Balade dimanche 9 h gare.", "Parcours plat 30 km.", "Casque obligatoire."]),
        ("Basket", "Entraînement", ["Entraînement mercredi 18 h gym.", "Chaussures salle.", "Première séance gratuite."]),
        ("Ski club", "Sortie", ["Sortie ski 6 h parking.", "Bus réservé.", "Forfait à votre charge."]),
        ("Boxe fit", "Place confirmée", ["Cours cardio boxe mardi 18 h 30.", "Gants fournis.", "Arrivez 10 min avant."]),
        ("Golf", "Cours samedi", ["Cours initiation samedi 10 h.", "Clubs prêtés.", "Réservation OK."]),
        ("Volley", "Équipe complète", ["Équipe volley complète.", "Match jeudi 19 h.", "Terrain sable."]),
        ("Patinage", "Session libre", ["Patinoire samedi 14 h–17 h.", "Location patins 8 fr.", "Bonne glace !"]),
        ("Natation", "Licence", ["Licence annuelle enregistrée.", "80 fr.", "Valable 12 mois."]),
        ("Sport municipal", "Horaires été", ["Piscine ouverte 8 h–21 h en été.", "Cours aquagym samedi.", "Bonne saison !"]),
        ("Coach Martin", "Programme perso", ["Programme musculation envoyé.", "3 séances/semaine.", "Questions : répondez à ce mail."]),
    ]
    return [_sport_email(s, sub, lines) for s, sub, lines in specs]


def _sport_email(sender, subject, lines):
    return render_email(sender, subject, lines, [
        Q("Qui écrit ?", sender, "Pharmacie", "Gare", f"De : _________.", sender.split()[0], f"{sender}.", 0),
        Q("Objet ?", subject, "Menu", "Train", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
        Q("Thème sport ?", "Oui", "Non", "Cuisine", "Thème _________.", "sport", "Oui.", 0),
        Q("Première info ?", lines[0], "Rien", "?", f"Info : _________.", lines[0].split()[0], f"{lines[0]}.", 0),
        Q("Type message ?", "E-mail sport", "Facture", "Ordonnance", "E-mail _________.", "sport", "E-mail sport.", 0),
        Q("Texte court ?", "Oui", "Non", "Long", "Message _________.", "court", "Court A1.", 0),
        Q("Utile pour activité ?", "Oui", "Non", "Dormir", "Utile pour _________.", "activité", "Oui.", 0),
    ])


def _culture_musee(name, closed, hours, adult, child, audio):
    text = f"""Affiche — {name}

Fermé {closed}.
Ouvert {hours}.
Billet adulte {adult}. {child}.
Audioguide {audio}."""
    return {"text": text, "questions": [
        Q("Nom lieu ?", name, "Gare", "Bus", f"Affiche — _________.", name.split()[-1], f"{name}.", 0),
        Q("Jour fermé ?", closed, "Mardi", "Mercredi", f"Fermé _________.", closed, f"Fermé {closed}.", 0),
        Q("Horaires ?", hours, "Nuit", "?", f"Ouvert _________.", hours.split("–")[0].split()[-1], f"Horaires : {hours}.", 0),
        Q("Tarif adulte ?", adult, "Gratuit", "1000 fr", f"Adulte _________.", adult.split()[0], f"Adulte {adult}.", 0),
        Q("Enfants ?", child, "12 fr", "Interdit", f"Enfants : _________.", child.split()[0], f"{child}.", 0),
        Q("Audioguide ?", audio, "Gratuit", "?", f"Audioguide _________.", audio.split()[0], f"Audioguide {audio}.", 0),
        Q("Type lieu ?", "Culture", "Restaurant", "Gare", "Lieu _________.", "culturel", "Culture.", 0),
    ]}


def _e7_3_messages():
    musees = [
        ("Musée d'art", "lundi", "mar–dim 10 h–18 h", "12 fr", "Gratuit -18 ans", "5 fr"),
        ("Musée historique", "mardi", "mer–dim 11 h–17 h", "10 fr", "Gratuit -16 ans", "4 fr"),
        ("Galerie contemporaine", "lundi", "jeu–dim 12 h–20 h", "15 fr", "Gratuit -12 ans", "6 fr"),
        ("Musée sciences", "lundi", "mar–ven 9 h–17 h, sam–dim 10 h–18 h", "18 fr", "Gratuit -6 ans", "5 fr"),
        ("Château médiéval", "lundi hiver", "avril–oct 10 h–18 h", "14 fr", "Gratuit -10 ans", "7 fr"),
    ]
    out = [_culture_musee(*m) for m in musees]
    lieux = [
        ("Théâtre municipal", "Saison sept–juin.\nSpectacles mer–sam 20 h.\nBilletterie 14 h–19 h.\nTarif 25–45 fr."),
        ("Cinéma Rex", "Films en VF et VO.\nSéances 14 h, 17 h, 20 h.\nTicket 15 fr, étudiant 12 fr."),
        ("Bibliothèque centrale", "Inscription gratuite.\nOuvert lun–ven 10 h–19 h.\nPrêt 4 semaines, 10 livres max."),
        ("Opéra de Lausanne", "Saison oct–mai.\nReprésentations jeu–dim.\nPlaces à partir de 35 fr."),
        ("Festival musique", "3 jours en juillet.\nParc la Grange.\nPass 1 jour 40 fr, 3 jours 90 fr."),
        ("Exposition photo", "Galerie rue du Lac 5.\nEntrée libre.\nOuvert 11 h–18 h mer–dim."),
        ("Concert jazz", "Club Blue Note.\nVendredi et samedi 21 h.\nEntrée 20 fr, réservation conseillée."),
        ("Zoo", "Ouvert 9 h–18 h.\nAdulte 28 fr, enfant 18 fr.\nRepas animaux 11 h et 15 h."),
        ("Château de Chillon", "Ouvert 9 h–19 h été.\nAdulte 13 fr.\nVisite guidée 14 h."),
        ("Cinéma plein air", "Été seulement, parc.\nFilms vendredi 21 h 30.\nEntrée 10 fr, couverture conseillée."),
        ("Atelier poterie", "Cours samedi 14 h.\nMatériel fourni.\nInscription 8 personnes max."),
        ("Spectacle enfants", "Dimanche 15 h théâtre.\nDurée 45 min.\nTicket 12 fr, -6 ans gratuit."),
        ("Visite guidée ville", "Départ place Palud samedi 10 h.\nDurée 1 h 30.\nGratuit, sans réservation."),
        ("Monument historique", "Tour clocher ouverte 10 h–17 h.\nVue panoramique.\nTicket 5 fr."),
        ("Marché artisanal", "Premier dimanche du mois.\nPlace du Marché 9 h–16 h.\nEntrée libre."),
    ]
    for title, body in lieux:
        out.append({"text": f"Horaires — {title}\n\n{body}", "questions": [
            Q("Lieu ?", title, "Gare", "Bus", f"Horaires — _________.", title.split()[0], f"{title}.", 0),
            Q("Type ?", "Lieu culturel", "Restaurant", "Pharmacie", "Type _________.", "culturel", "Culture.", 0),
            Q("Ouvert ?", "Oui selon horaires", "Fermé toujours", "?", "Ouvert _________.", "selon", "Voir horaires.", 0),
            Q("Tarif mentionné ?", "Oui" if "fr" in body else "Non ou gratuit", "Non", "?", "Tarif _________.", "oui" if "fr" in body else "non", "Voir texte.", 0),
            Q("Premier mot corps ?", body.split()[0], "?", "?", f"Mot : _________.", body.split()[0], f"{body.split()[0]}.", 0),
            Q("Réservation ?", "Conseillée" if "réservation" in body.lower() else "Non précisé", "Interdite", "?", "Réservation _________.", "conseillée" if "réservation" in body.lower() else "non", "Voir texte.", 0),
            Q("Texte court ?", "Oui", "Non", "Long", "Texte _________.", "court", "Court A1.", 0),
        ]})
    return out[:20]


def _e7_3_emails():
    specs = [
        ("Musée d'art", "Exposition temporaire", ["Nouvelle exposition dès vendredi.", "Billet combiné 18 fr.", "Ouvert 10 h–18 h."]),
        ("Théâtre municipal", "Billets confirmés", ["2 places samedi 20 h confirmées.", "Rang C places 12–13.", "Arrivez 15 min avant."]),
        ("Cinéma Rex", "Séance demain", ["Film demain 17 h salle 2.", "Ticket électronique en pièce jointe.", "Bon film !"]),
        ("Bibliothèque", "Livre disponible", ["Votre livre réservé est disponible.", "Retrait avant vendredi.", "Prolongation possible en ligne."]),
        ("Opéra", "Programme saison", ["Nouvelle saison disponible.", "Abonnement 3 spectacles 90 fr.", "Réservation en ligne."]),
        ("Festival", "Pass confirmé", ["Pass 3 jours confirmé.", "Valable 12–14 juillet.", "Bracelet à l'entrée."]),
        ("Galerie", "Vernissage", ["Vernissage jeudi 18 h.", "Entrée libre.", "Vin et snacks."]),
        ("Concert jazz", "Réservation", ["Table réservée vendredi 21 h.", "2 personnes.", "Arrivez 20 h 45."]),
        ("Zoo", "Visite école", ["Visite groupe confirmée mardi 10 h.", "Tarif groupe 12 fr/enfant.", "Guide fourni."]),
        ("Château", "Visite guidée", ["Visite guidée samedi 14 h.", "Départ cour intérieure.", "Durée 1 h."]),
        ("Cinéma plein air", "Météo OK", ["Séance maintenue ce soir 21 h 30.", "Apportez couverture.", "Pop-corn sur place."]),
        ("Atelier", "Place confirmée", ["Place atelier poterie samedi OK.", "14 h rue des Arts 3.", "Tablier fourni."]),
        ("Théâtre enfants", "Billets", ["4 billets dimanche 15 h.", "Spectacle 45 min.", "Accès fauteuils roulants."]),
        ("Office culture", "Visite ville", ["Visite guidée samedi 10 h.", "Départ place Palud.", "Gratuit."]),
        ("Monument", "Horaires été", ["Tour ouverte 9 h–19 h en été.", "Ticket 5 fr.", "Dernier accès 18 h 30."]),
        ("Marché artisanal", "Stand confirmé", ["Stand dimanche 9 h–16 h.", "Place du Marché.", "Tables fournies."]),
        ("Musée", "Audioguide", ["Audioguide 5 fr en supplément.", "Disponible à l'accueil.", "Langues FR/EN/DE."]),
        ("Opéra", "Annulation", ["Spectacle vendredi annulé.", "Remboursement automatique.", "Excuses."]),
        ("Bibliothèque", "Amende", ["Livre en retard : amende 5 fr.", "Réglez à l'accueil.", "Merci."]),
        ("Festival", "Programme", ["Programme complet en pièce jointe.", "Scène principale et secondaire.", "Bonne fête !"]),
    ]
    return [_culture_email(s, sub, lines) for s, sub, lines in specs]


def _culture_email(sender, subject, lines):
    return render_email(sender, subject, lines, [
        Q("Qui écrit ?", sender, "Bus", "Gare", f"De : _________.", sender.split()[0], f"{sender}.", 0),
        Q("Objet ?", subject, "Menu", "Train", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
        Q("Thème culture ?", "Oui", "Non", "Transport", "Thème _________.", "culture", "Oui.", 0),
        Q("Première info ?", lines[0], "Rien", "?", f"Info : _________.", lines[0].split()[0], f"{lines[0]}.", 0),
        Q("Type message ?", "E-mail culture", "Facture bus", "Ordonnance", "E-mail _________.", "culture", "E-mail culture.", 0),
        Q("Texte court ?", "Oui", "Non", "Long", "Message _________.", "court", "Court A1.", 0),
        Q("Utile pour visite ?", "Oui", "Non", "Cuisiner", "Utile pour _________.", "visite", "Oui.", 0),
    ])
