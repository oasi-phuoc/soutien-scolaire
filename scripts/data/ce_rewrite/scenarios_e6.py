"""E6 scenarios — chemin, transport, aéroport."""
from generate_all_data import Q
from scenarios_common import render_email


def build_e6_lessons():
    return {
        "e6-1": {"title": "E6.1 Demander son chemin", "messages": _e6_1_messages(), "emails": _e6_1_emails()},
        "e6-2": {"title": "E6.2 Voyager en transport public", "messages": _e6_2_messages(), "emails": _e6_2_emails()},
        "e6-3": {"title": "E6.3 Aller à l'aéroport", "messages": _e6_3_messages(), "emails": _e6_3_emails()},
    }


def _panneau(street, d1, dir1, d2, dir2, d3, dir3):
    text = f"""Panneau — {street}

{d1} : {dir1}.
{d2} : {dir2}.
{d3} : {dir3}."""
    return {"text": text, "questions": [
        Q(f"Où est {d1} ?", dir1.rstrip("."), "Au hasard", "Inconnu", f"{d1} : _________.", dir1.split()[0], f"{d1} : {dir1}.", 0),
        Q(f"Où est {d2} ?", dir2.rstrip("."), "Tout droit", "En haut", f"{d2} : _________.", dir2.split()[0], f"{d2} : {dir2}.", 0),
        Q(f"Où est {d3} ?", dir3.rstrip("."), "Derrière", "Loin", f"{d3} : _________.", dir3.split()[0], f"{d3} : {dir3}.", 0),
        Q("Quel type de document ?", "Un panneau de directions", "Un menu", "Une facture", "Panneau — _________.", street.split()[-1], "C'est un panneau.", 0),
        Q(f"La rue s'appelle comment ?", street, "Rue du Soleil", "Avenue Paris", f"Panneau — _________.", street.split("—")[-1].strip() if "—" in street else street, f"Rue : {street}.", 0),
        Q("Peut-on lire des directions ?", "Oui", "Non", "On ne sait pas", "Panneau de _________.", "directions", "Oui, des directions.", 0),
        Q("Combien de destinations ?", "Trois", "Une", "Dix", "Trois _________.", "destinations", "Trois destinations.", 0),
    ]}


def _plan(city, p1, c1, p2, c2, p3, c3, p4, c4):
    text = f"""Plan — Centre de {city}

{p1} : {c1}.
{p2} : {c2}.
{p3} : {c3}.
{p4} : {c4}."""
    return {"text": text, "questions": [
        Q(f"Où est {p1} ?", c1.rstrip("."), "B1", "D4", f"{p1} : _________.", c1.split()[0], f"{p1} : {c1}.", 0),
        Q(f"Où est {p2} ?", c2.rstrip("."), "A3", "C5", f"{p2} : _________.", c2.split()[0], f"{p2} : {c2}.", 0),
        Q(f"Où est {p3} ?", c3.rstrip("."), "A1", "B2", f"{p3} : _________.", c3.split()[0], f"{p3} : {c3}.", 0),
        Q(f"Où est {p4} ?", c4.rstrip("."), "Centre", "Nord", f"{p4} : _________.", c4.split()[0], f"{p4} : {c4}.", 0),
        Q("Quelle ville ?", city, "Paris", "Berlin", f"Centre de _________.", city, f"Ville : {city}.", 0),
        Q("Type de document ?", "Un plan de ville", "Un roman", "Un billet", "Plan — Centre de _________.", city, "Plan de ville.", 0),
        Q("Le plan aide à se repérer ?", "Oui", "Non", "Peut-être", "Plan de _________.", "ville", "Oui, pour se repérer.", 0),
    ]}


def _affiche_ot(city, hours_wd, hours_sa, address, lang, tour_time, tour_place):
    text = f"""Affiche — Office du tourisme de {city}

Ouvert lun–ven {hours_wd}, sam {hours_sa}.
Adresse : {address}.
Plans gratuits, conseils en {lang}.
Visites guidées : départ {tour_time}, {tour_place}."""
    return {"text": text, "questions": [
        Q("Horaires en semaine ?", hours_wd, "Fermé", "Nuit", f"Lun–ven _________.", hours_wd.split("–")[-1].strip(), f"Semaine : {hours_wd}.", 0),
        Q("Horaires samedi ?", hours_sa, hours_wd, "Fermé", f"Sam _________.", hours_sa.split("–")[-1].strip().split()[0], f"Samedi : {hours_sa}.", 0),
        Q("Adresse ?", address, "Gare", "Port", f"Adresse : _________.", address.split()[-1], f"Adresse : {address}.", 0),
        Q("Les plans sont-ils payants ?", "Non, gratuits", "Oui, 50 fr", "Interdits", "Plans _________.", "gratuits", "Plans gratuits.", 0),
        Q("Langues des conseils ?", lang, "Latin", "Aucune", f"Conseils en _________.", lang.split(" et ")[0], f"Langues : {lang}.", 0),
        Q("Heure visite guidée ?", tour_time, "6 h", "23 h", f"Départ _________.", tour_time.replace(" h", ""), f"Départ {tour_time}.", 0),
        Q("Lieu de départ visite ?", tour_place, "Gare", "Aéroport", f"Départ {tour_time}, _________.", tour_place.split()[-1], f"Lieu : {tour_place}.", 0),
    ]}


def _gps(dest, start, steps, duration):
    text = f"""Message GPS — Itinéraire vers {dest}

Départ : {start}.
{steps}
Durée : {duration} à pied."""
    return {"text": text, "questions": [
        Q("Point de départ ?", start, dest, "Hôtel", f"Départ : _________.", start, f"Départ : {start}.", 0),
        Q("Destination ?", dest, start, "École", f"Itinéraire vers _________.", dest, f"Vers {dest}.", 0),
        Q("Durée du trajet ?", duration, "2 heures", "1 jour", f"Durée : _________.", duration.split()[0], f"Durée : {duration}.", 0),
        Q("Type de message ?", "Itinéraire GPS", "Recette", "Ordonnance", "Message _________ — Itinéraire", "GPS", "GPS itinéraire.", 0),
        Q("Le trajet est à pied ?", "Oui", "En avion", "En bateau", "à _________.", "pied", "À pied.", 0),
        Q("Première instruction mentionnée ?", steps.split(".")[0].strip(), "Rien", "Dormir", "Première étape : _________.", steps.split()[0], "Voir les étapes.", 0),
        Q("Le GPS donne un chemin ?", "Oui", "Non", "Un menu", "Itinéraire vers _________.", dest, "Oui, un chemin.", 0),
    ]}


def _note_hotel(restaurant, direction, distance, landmark, tip):
    text = f"""Note — Réception Hôtel du Lac

Pour aller au restaurant {restaurant} :
Sortez de l'hôtel, tournez {direction}.
Marchez {distance} jusqu'au {landmark}.
Le restaurant est {tip}."""
    return {"text": text, "questions": [
        Q("Quelle direction en sortant ?", direction, "À droite", "En arrière", f"Tournez _________.", direction.replace("à ", ""), f"Direction : {direction}.", 0),
        Q("Distance à marcher ?", distance, "50 km", "1 m", f"Marchez _________.", distance.split()[0], f"Distance : {distance}.", 0),
        Q("Jusqu'où marcher ?", landmark, "Gare", "École", f"Jusqu'au _________.", landmark, f"Jusqu'au {landmark}.", 0),
        Q("Nom du restaurant ?", restaurant, "Le Lac", "La Gare", f"Restaurant _________.", restaurant.replace("Le ", ""), f"Restaurant {restaurant}.", 0),
        Q("Qui donne l'information ?", "La réception de l'hôtel", "Le bus", "La poste", "Réception Hôtel du _________.", "Lac", "Réception hôtel.", 0, transport=True),
        Q("Le repère final ?", tip.split(",")[0], "Rien", "Un chat", f"Le restaurant est _________.", tip.split()[0], f"Repère : {tip}.", 0),
        Q("Type de document ?", "Une note d'hôtel", "Un billet de train", "Un SMS", "Note — Réception _________.", "Hôtel", "Note hôtel.", 0),
    ]}


def _e6_1_messages():
    specs = [
        ("Rue de la Gare", "Gare", "tout droit 300 m, puis à gauche", "Musée", "à droite après le pont", "Hôtel Central", "deuxième rue à droite"),
        ("Place du Marché", "Mairie", "tout droit 200 m", "Église", "à gauche place Saint-Pierre", "Port", "au fond, après le parking"),
        ("Avenue du Lac", "Plage", "descendre vers le lac", "Office du tourisme", "face à la gare", "Musée", "rue du Temple, à droite"),
        ("Quartier Gare", "Guichet CFF", "hall principal", "Métro M2", "niveau -1, flèches bleues", "Taxis", "sortie nord"),
        ("Vieille Ville", "Cathédrale", "monter la rue Pierre", "Château", "au sommet de la colline", "Place de la Palud", "redescendre rue du Grand-Pont"),
        ("Bord du lac", "Jetée", "promenade vers l'ouest", "Restaurant du Port", "après les bateaux", "Parc", "derrière l'hôtel Beau-Rivage"),
        ("Campus UNIL", "Bibliothèque", "bâtiment Anthropole", "Mensa", "face au parking", "Arrêt bus", "devant le bâtiment Géopolis"),
        ("Zone industrielle", "Usine", "rue de l'Industrie 12", "Cafétéria", "entrée principale", "Parking visiteurs", "à droite du portail"),
        ("Marché couvert", "Entrée marché", "place de la Riponne", "Fromager", "allée centrale", "Sortie est", "vers la cathédrale"),
        ("Parc de l'Indépendance", "Fontaine", "centre du parc", "Aire de jeux", "côté nord", "Sortie sud", "vers le lac"),
        ("Hôpital", "Urgences", "entrée Est, 24 h/24", "Pharmacie", "rez-de-chaussée hall B", "Parking", "sous-sol P2"),
        ("Stade", "Billetterie", "porte 3", "Tribune nord", "escalier B", "Vestiaires", "couloir ouest"),
        ("Gare routière", "Quai 5", "niveau 0", "Consigne", "près des guichets", "Sortie ville", "passerelle piétons"),
        ("Lac Léman — Ouchy", "Métro M2", "station Ouchy", "Bateaux", "quai à gauche", "Olympique", "palais en face du lac"),
        ("Centre commercial", "Migros", "niveau 0", "Cinéma", "niveau 2", "Parking", "sortie rouge, 2e étage"),
        ("Vignoble", "Cave", "chemin des Vignes 8", "Point de vue", "200 m plus haut", "Bus 25", "arrêt Vignes"),
        ("Frontière", "Douane", "route principale", "Parking douane", "à droite", "Sentier piéton", "panneau jaune"),
        ("Camping", "Réception", "entrée principale", "Sanitaires", "bloc B", "Piscine", "derrière le restaurant"),
        ("Bibliothèque", "Accueil", "rez-de-chaussée", "Salle lecture", "1er étage", "Sortie secours", "côté jardin"),
        ("Funiculaire", "Station bas", "Ouchy", "Station haut", "Flon, 5 min de marche", "Billetterie", "distributeur automatique"),
    ]
    out = [_panneau(s, d1, dir1, d2, dir2, d3, dir3) for s, d1, dir1, d2, dir2, d3, dir3 in specs[:10]]
    plans = [
        ("Morges", "Place du Marché", "centre A3", "Église Saint-Jean", "B2 nord", "Port", "D4 sud", "Gare", "A1 ouest"),
        ("Lausanne", "Cathédrale", "C4 centre", "Gare", "A2 ouest", "Flon", "B3 est", "Ouchy", "D1 sud"),
        ("Nyon", "Château", "B1 nord", "Musée", "C2 centre", "Lac", "D3 sud", "Gare", "A1 ouest"),
        ("Vevey", "Grande Place", "centre", "Gare", "nord", "Port", "sud", "Musée", "est"),
        ("Yverdon", "Centre thermal", "A2", "Lac", "sud", "Gare", "ouest", "Château", "nord"),
    ]
    out += [_plan(c, p1, c1, p2, c2, p3, c3, p4, c4) for c, p1, c1, p2, c2, p3, c3, p4, c4 in plans]
    ot = [
        ("Lausanne", "9 h–18 h", "10 h–17 h", "place de la Palud 2", "français et anglais", "14 h", "place de la Palud"),
        ("Genève", "8 h–19 h", "9 h–18 h", "rue du Mont-Blanc 14", "français et allemand", "11 h", "gare Cornavin"),
        ("Montreux", "9 h–17 h", "10 h–16 h", "avenue des Alpes 1", "français et anglais", "15 h", "gare"),
        ("Neuchâtel", "9 h–12 h et 14 h–18 h", "10 h–14 h", "rue du Seyon 1", "français", "10 h 30", "place Pury"),
        ("Sion", "8 h 30–17 h", "9 h–12 h", "place de la Planta 2", "français et italien", "16 h", "château"),
    ]
    out += [_affiche_ot(*s) for s in ot]
    return out


def _e6_1_emails():
    specs = [
        ("Léo Martin", "Soirée samedi — le chemin", "Samedi 20 h chez moi : chemin des Vignes 14.\nBus 25, arrêt Vignes.\nSi perdu, appelle-moi."),
        ("Office de tourisme", "Plan gratuit Lausanne", "Plan gratuit à l'office, place de la Palud 2.\nOuvert 9 h–18 h.\nVisite guidée 14 h."),
        ("Marie Dupont", "Rendez-vous place Centrale", "RDV mardi 18 h place Centrale.\nMétro M1, arrêt Riponne.\nJe porte une veste rouge."),
        ("Paul Girard", "Chemin pour la fête", "Fête vendredi 19 h rue du Lac 8.\nTram 2 jusqu'à Ouchy.\nPuis 5 min à pied le long du lac."),
        ("Sophie Weber", "Visite appartement", "Visite mercredi 17 h rue des Alpes 22.\nBus 8 arrêt Alpes.\nSonner au 3e étage."),
        ("Hugo Blanc", "Match de foot dimanche", "Match dimanche 15 h stade de la Pontaise.\nBus 21 arrêt Stade.\nOn se retrouve à l'entrée."),
        ("Emma Laurent", "Anniversaire au parc", "Anniversaire samedi 14 h parc Mon-Repos.\nEntrée avenue Eglantine.\nApporte un gâteau !"),
        ("Nina Costa", "Cours de français", "Cours lundi 9 h école de langues, rue Centrale 5.\nMétro M2 arrêt Grancy.\nPremière leçon gratuite."),
        ("David Kim", "Colocation à visiter", "Coloc à voir jeudi 18 h 30 avenue de la Gare 12.\nGare à 5 min à pied.\nChambre au 2e étage."),
        ("Sara Alami", "Marché samedi matin", "Marché samedi 8 h place de la Riponne.\nTram 7 arrêt Riponne.\nOn achète des fraises."),
        ("Tom Müller", "Randonnée dimanche", "Randonnée dimanche 8 h départ gare Morges.\nTrain IC direction Lausanne.\nPrévoir chaussures de marche."),
        ("Julie Petit", "Réunion association", "Réunion lundi 19 h 30 mairie, salle 2.\nEntrée place du Marché.\nOrdre du jour : budget."),
        ("Omar Hassan", "Garage — récupérer la voiture", "Voiture prête mardi 16 h garage rue de l'Industrie 3.\nBus 12 arrêt Industrie.\nFacture à payer sur place."),
        ("Clara Rossi", "Concert vendredi", "Concert vendredi 20 h salle Paderewski.\nMétro M1 arrêt Flon.\nBillets à l'entrée."),
        ("Yann Leroy", "Pique-nique au lac", "Pique-nique dimanche 12 h plage d'Ouchy.\nMétro M2 terminus Ouchy.\nApporte une serviette."),
        ("Inès Moreau", "Cours de cuisine", "Cours mercredi 18 h école cuisine, rue du Port 4.\nBus 1 arrêt Port.\nTablier fourni."),
        ("Victor Stein", "Visite musée", "Musée samedi 10 h entrée groupes.\nTram 8 arrêt Beaulieu.\nTarif réduit avec carte étudiant."),
        ("Léa Bernard", "Déménagement — aide", "Déménagement samedi 9 h rue des Fleurs 6.\nParking visiteurs derrière l'immeuble.\nMerci d'apporter des cartons."),
        ("Marc Dubois", "Point de rencontre gare", "On se retrouve vendredi 8 h 15 hall gare Lausanne.\nSous la grande horloge.\nTrain pour Genève 8 h 32."),
        ("Anna Weber", "Chemin école enfants", "École des enfants : rue des Écoles 10.\nTraverser le parc, sortie nord.\nCloche à 8 h 20."),
    ]
    emails = []
    for sender, subject, body in specs:
        lines = body.split("\n")
        emails.append(render_email(sender, subject, lines, [
            Q("Quel jour ou date ?", lines[0].split()[0] if lines else "?", "Lundi", "Jamais", "Le _________.", lines[0].split()[0] if lines else "?", "Voir le texte.", 0),
            Q("Quel lieu principal ?", lines[0].split()[-1].rstrip(".") if lines else "?", "Paris", "Lyon", "Lieu : _________.", lines[0].split()[-1].rstrip(".") if lines else "?", "Lieu dans le texte.", 0),
            Q("Quel transport ?", next((w for w in lines[1] if any(t in w for t in ["Bus", "Tram", "Métro", "Train"])), "À pied") if len(lines) > 1 else "À pied", "Avion", "Bateau", "Transport : _________.", "Bus", "Transport indiqué.", 0, transport=True),
            Q("Qui écrit ?", sender, "La gare", "Un chat", f"De : _________.", sender.split()[0], f"Expéditeur : {sender}.", 0),
            Q("Objet du mail ?", subject, "Facture", "Menu", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
            Q("Type de message ?", "Un e-mail avec directions", "Une ordonnance", "Un ticket", "Message avec _________.", "directions", "E-mail directions.", 0),
            Q("Le texte donne un chemin ?", "Oui", "Non", "Un prix seulement", "Chemin pour _________.", "venir", "Oui, un chemin.", 0),
        ]))
    return emails


def _bus_horaires(line, route, hours, freq, last, price):
    text = f"""Horaires — {line}

{route}.
Départ gare {hours}, toutes les {freq}.
Dernier départ {last}.
Ticket {price}."""
    return {"text": text, "questions": [
        Q("Quelle ligne ?", line, "Bus 99", "Tram 0", f"Horaires — _________.", line.split()[-1], f"Ligne : {line}.", 0, transport=True),
        Q("Quel trajet ?", route, "Paris-Londres", "La mer", f"Trajet : _________.", route.split("–")[0], f"Trajet : {route}.", 0),
        Q("Fréquence ?", f"Toutes les {freq}", "1 fois par jour", "Jamais", f"Toutes les _________.", freq.split()[0], f"Fréquence : {freq}.", 0),
        Q("Dernier départ ?", last, "6 h", "Midi", f"Dernier départ _________.", last.split()[0], f"Dernier : {last}.", 0),
        Q("Prix du ticket ?", price, "Gratuit", "1000 fr", f"Ticket _________.", price.split()[0], f"Prix : {price}.", 0),
        Q("Horaires de service ?", hours, "Nuit seulement", "Fermé", f"Départ gare _________.", hours.split("–")[0].split()[-1], f"Horaires : {hours}.", 0),
        Q("Type de document ?", "Horaires de transport", "Recette", "Roman", "Horaires — _________.", line.split()[0], "Horaires transport.", 0),
    ]}


def _gare_affiche(station, hall, v18, dir18, v916, dir916, lift):
    text = f"""Affiche — Gare {station}

{hall}.
Voies 1–8 : niveau 0, direction {dir18}.
Voies 9–16 : sous-sol, direction {dir916}.
Ascenseur : {lift}."""
    return {"text": text, "questions": [
        Q("Quelle gare ?", station, "Paris", "Rome", f"Gare _________.", station, f"Gare {station}.", 0, transport=True),
        Q("Où sont les guichets ?", hall.split(":")[0] if ":" in hall else hall, "Dehors", "Sur le toit", f"{hall.split(':')[0] if ':' in hall else hall} : guichets.", hall.split(":")[0].split()[-1] if ":" in hall else hall.split()[0], f"Guichets : {hall}.", 0),
        Q("Voies 1–8 — direction ?", dir18, dir916, "Sud", f"Direction _________.", dir18, f"Direction : {dir18}.", 0),
        Q("Voies 9–16 — où ?", "Sous-sol", "Niveau 0", "Rue", "Voies 9–16 : _________.", "sous-sol", "Sous-sol.", 0),
        Q("Direction voies 9–16 ?", dir916, dir18, "Lyon", f"Direction _________.", dir916, f"Direction : {dir916}.", 0),
        Q("Ascenseur ?", lift, "Interdit", "Absent", f"Ascenseur : _________.", lift.split()[-1], f"Ascenseur : {lift}.", 0),
        Q("Type de lieu ?", "Une gare", "Une pharmacie", "Un cinéma", "Affiche — Gare _________.", station, "C'est une gare.", 0, transport=True),
    ]}


def _billet(train, dep, voie, arr, car, seat, card_ok):
    text = f"""Billet — {train}

Départ : {dep}, voie {voie}.
Arrivée : {arr}.
Place : voiture {car}, siège {seat}.
Carte d'embarquement sur téléphone : {card_ok}."""
    return {"text": text, "questions": [
        Q("Quel train ?", train, "Bus 12", "Tram 1", f"Billet — _________.", train.split()[0], f"Train : {train}.", 0, transport=True),
        Q("Heure de départ ?", dep, arr, "23 h", f"Départ : _________.", dep.split()[-1], f"Départ : {dep}.", 0),
        Q("Voie ?", voie, car, seat, f"Voie _________.", voie, f"Voie {voie}.", 0),
        Q("Heure d'arrivée ?", arr, dep, "8 h", f"Arrivée : _________.", arr.replace(" h", ""), f"Arrivée : {arr}.", 0),
        Q("Numéro de siège ?", seat, voie, car, f"Siège _________.", seat, f"Siège {seat}.", 0),
        Q("Carte sur téléphone ?", card_ok, "Interdite", "Obligatoire papier", f"sur téléphone : _________.", card_ok.split()[0], f"Téléphone : {card_ok}.", 0),
        Q("Voiture ?", car, seat, voie, f"Voiture _________.", car, f"Voiture {car}.", 0),
    ]}


def _e6_2_messages():
    buses = [
        ("Bus 12", "Lausanne–Pully", "6 h–23 h", "10 min", "23 h 15", "3,50 fr"),
        ("Bus 8", "Lausanne centre–Ouchy", "5 h 30–0 h 30", "8 min", "0 h 22", "3,50 fr"),
        ("Bus 25", "Lausanne–Villars-Sainte-Croix", "6 h–22 h", "20 min", "22 h 10", "4,20 fr"),
        ("Tram 1", "Flon–Renens", "4 h 30–0 h 30", "5 min", "0 h 30", "zone 11"),
        ("Tram 2", "Ouchy–Grand-Pont", "5 h–0 h 15", "6 min", "0 h 10", "zone 11"),
        ("Bus 21", "Lausanne–Stade Olympique", "6 h–23 h", "15 min", "23 h 05", "3,50 fr"),
        ("Bus 16", "Lausanne–Epalinges", "6 h–21 h", "12 min", "21 h 20", "3,50 fr"),
        ("Bus 3", "Lausanne–Belmont", "5 h 45–23 h 30", "10 min", "23 h 40", "3,50 fr"),
    ]
    out = [_bus_horaires(f"Ligne {l}", r, h, f, la, p) for l, r, h, f, la, p in buses]
    gares = [
        ("Lausanne", "Hall principal : guichets", "1–8", "Genève", "9–16", "Berne", "centre du hall"),
        ("Genève Cornavin", "Hall : billetterie", "1–8", "Lausanne", "9–16", "Zurich", "niveau 0"),
        ("Berne", "Hall central : guichets", "1–6", "Zurich", "7–12", "Genève", "côté est"),
        ("Zurich HB", "Hall principal", "3–12", "Berne", "21–26", "Bâle", "milieu du hall"),
    ]
    out += [_gare_affiche(*g) for g in gares]
    billets = [
        ("TGV Paris–Lyon", "8 h 12", "5", "10 h 00", "8", "42", "acceptée"),
        ("IC 5 Lausanne–Genève", "14 h 32", "3", "15 h 15", "4", "27", "acceptée"),
        ("IR 70 Berne–Zurich", "9 h 05", "7", "10 h 02", "2", "15", "acceptée"),
        ("RE Genève–Lausanne", "17 h 48", "2", "18 h 35", "6", "81", "acceptée"),
        ("TGV Genève–Paris", "7 h 42", "4", "11 h 18", "11", "56", "acceptée"),
        ("RER A Paris", "9 h 30", "12", "9 h 55", "3", "88", "acceptée"),
        ("TER Lyon–Grenoble", "13 h 20", "6", "14 h 45", "5", "33", "acceptée"),
        ("S-Bahn Zurich", "8 h 00", "9", "8 h 22", "1", "12", "acceptée"),
    ]
    out += [_billet(*b) for b in billets[:4]]
    extras = [
        ("Panneau — Quai 3", "Train pour Genève. Départ 14 h 32.\nAttention à la marche.\nCorrespondance M1 : panneaux jaunes."),
        ("Message — RER A retard", "RER A : 15 min de retard. Cause : incident technique.\nProchain passage 9 h 45. Excuses de la RATP."),
        ("Note — Grève vendredi", "Grève vendredi des transports publics.\nBus de remplacement ligne 8. Horaires 7 h–19 h.\nInfos : tl.ch/greve"),
        ("Flyer — Abonnement mensuel", "Abonnement mensuel TL : 75 fr.\nValable bus, tram et métro zone 11.\nPhoto obligatoire. Achat au guichet gare."),
    ]
    for hdr, body in extras:
        out.append({"text": f"{hdr}\n\n{body}", "questions": [
            Q("Sujet principal ?", hdr.split("—")[-1].strip(), "Un menu", "Une recette", f"{hdr.split('—')[0].strip()} — _________.", hdr.split("—")[-1].strip().split()[0], f"Sujet : {hdr}.", 0),
            Q("Type de document ?", hdr.split("—")[0].strip(), "Roman", "Poème", "Type : _________.", hdr.split("—")[0].strip(), f"Type : {hdr.split('—')[0].strip()}.", 0),
            Q("Info transport ?", "Oui", "Non", "Recette", "Document _________.", "transport", "Oui, transport.", 0),
            Q("Texte court A1 ?", "Oui", "Non", "Très difficile", "Niveau _________.", "A1", "Court et simple.", 0),
            Q("Premier mot du corps ?", body.split()[0], "Zéro", "Cent", "Mot : _________.", body.split()[0], f"Commence par {body.split()[0]}.", 0),
            Q("Document utile voyageur ?", "Oui", "Non", "Pour cuisiner", "Utile pour _________.", "voyager", "Oui, pour voyager.", 0),
            Q("Lecture obligatoire ?", "Non", "Oui toujours", "?", "Lecture _________.", "facultative", "Non obligatoire.", 1),
        ]})
    return out


def _e6_2_emails():
    specs = [
        ("CFF Info", "Retard train IC 5", ["Train IC 5 : 20 min de retard.", "Nouveau départ 16 h 40 voie 7.", "Excuses CFF."]),
        ("TL Lausanne", "Bus 12 — info", ["Bus 12 : départ gare 8 h.", "Direction Pully.", "Toutes les 10 min."]),
        ("SBB Mobile", "Billet confirmé", ["Votre billet Lausanne–Genève est confirmé.", "Départ 14 h 32 voie 3.", "Carte mobile valide."]),
        ("RATP", "RER A perturbé", ["RER A : 15 min retard.", "Prochain train 9 h 45.", "Motif : incident technique."]),
        ("TL Info", "Tram 1 ce soir", ["Tram 1 : dernier passage 0 h 30.", "Direction Renens.", "Bonne soirée."]),
        ("CFF", "Changement de voie", ["Votre train pour Berne part voie 9.", "Départ 10 h 15.", "Merci de votre compréhension."]),
        ("Mobilis", "Abonnement renouvelé", ["Votre abonnement zone 11 est renouvelé.", "Valable 1 mois.", "Prix : 75 fr."]),
        ("FlixBus", "Réservation bus", ["Bus Genève–Lyon confirmé.", "Départ 7 h 30 gare routière.", "Place 12."]),
        ("Swiss Travel", "Demi-tarif actif", ["Votre carte demi-tarif est active.", "Réduction 50 % sur les trains.", "Présentez-la à chaque voyage."]),
        ("TL Grève", "Info grève vendredi", ["Grève vendredi bus et tram.", "Bus remplacement ligne 8.", "Horaires 7 h–19 h."]),
        ("CFF", "Train supprimé", ["Train 18 h 12 Lausanne–Zurich supprimé.", "Train suivant 18 h 42.", "Excuses."]),
        ("TGV INOUI", "Billet Paris–Lyon", ["Billet confirmé 8 h 12 voie 5.", "Arrivée Lyon 10 h.", "Siège 42 voiture 8."]),
        ("TL", "Bus 25 retard", ["Bus 25 : 5 min retard.", "Cause : trafic.", "Prochain départ 14 h 20."]),
        ("SBB", "Réservation place", ["Place fenêtre réservée.", "Voiture 4 siège 21.", "Train IC 1 demain 7 h 05."]),
        ("Navette aéroport", "Navette gratuite", ["Navette gare–aéroport gratuite.", "Départ toutes les 30 min.", "Durée 15 min."]),
        ("CFF", "Correspondance ratée", ["Votre correspondance est manquée.", "Prochain train dans 30 min.", "Billet toujours valable."]),
        ("TL", "Nouvelle ligne bus", ["Nouvelle ligne bus 32 dès lundi.", "Lausanne–Epalinges.", "Départ toutes les 15 min."]),
        ("Parking CFF", "Place réservée", ["Place parking P1 réservée.", "Gare Lausanne.", "Valable 24 h."]),
        ("CFF", "Train à l'heure", ["Votre train 15 h 32 est à l'heure.", "Voie 4.", "Bon voyage."]),
        ("TL", "Ticket mobile", ["Achetez vos tickets sur l'app TL.", "Horaires en temps réel.", "Gratuit à télécharger."]),
    ]
    emails = []
    for sender, subject, lines in specs:
        emails.append(render_email(sender, subject, lines, [
            Q("Qui envoie ?", sender, "Un restaurant", "Un médecin", f"De : _________.", sender.split()[0], f"Expéditeur : {sender}.", 0),
            Q("Objet ?", subject, "Menu", "Recette", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
            Q("Sujet transport ?", "Oui", "Non", "Cuisine", "Info _________.", "transport", "Oui, transport.", 0),
            Q("Première info ?", lines[0], "Rien", "Un chat", "Info : _________.", lines[0].split()[0], f"Info : {lines[0]}.", 0),
            Q("Type message ?", "E-mail transport", "Facture médicale", "Invitation mariage", "E-mail _________.", "transport", "E-mail transport.", 0),
            Q("Texte court ?", "Oui", "Non", "Très long", "Message _________.", "court", "Court A1.", 0),
            Q("Utile pour voyager ?", "Oui", "Non", "Pour dormir", "Utile pour _________.", "voyager", "Oui.", 0),
        ]))
    return emails


def _airport(hdr, body, qs):
    return {"text": f"{hdr}\n\n{body}", "questions": qs}


def _e6_3_messages():
    items = [
        _airport("Panneau — Départs Terminal 1", "Terminal 1 départs.\nEnregistrement hall A. Vols Schengen hall B.\nContrôle sécurité : retirez liquides > 100 ml.", [
            Q("Quel terminal ?", "Terminal 1", "Terminal 9", "Gare", "Terminal ___ départs.", "1", "Terminal 1.", 0),
            Q("Enregistrement ?", "Hall A", "Hall B", "Rue", "Enregistrement hall ___.", "A", "Hall A.", 0, transport=True),
            Q("Vols Schengen ?", "Hall B", "Hall A", "Parking", "Vols Schengen hall ___.", "B", "Hall B.", 0),
            Q("Liquides ?", "> 100 ml interdits", "Tous autorisés", "?", "Liquides > ___ ml.", "100", "100 ml max.", 0),
            Q("Type document ?", "Panneau aéroport", "Menu", "Bus", "Panneau — Départs ___.", "Terminal", "Panneau aéroport.", 0),
            Q("Contrôle ?", "Sécurité", "Restaurant", "Cinéma", "Contrôle ___.", "sécurité", "Sécurité.", 0),
            Q("Lieu ?", "Aéroport", "Gare", "Hôtel", "Départs Terminal ___.", "1", "Aéroport.", 0, transport=True),
        ]),
        _airport("Affiche — Enregistrement", "Enregistrement en ligne 24 h avant le vol.\nBagage cabine 8 kg max.\nArrivez 2 h avant vol international.", [
            Q("En ligne quand ?", "24 h avant", "1 h avant", "1 semaine", "En ligne ___ h avant.", "24", "24 h avant.", 0),
            Q("Cabine poids max ?", "8 kg", "80 kg", "0 kg", "Cabine ___ kg max.", "8", "8 kg.", 0),
            Q("Arriver avant vol international ?", "2 h", "10 min", "1 semaine", "Arrivez ___ h avant.", "2", "2 h avant.", 0),
            Q("Type ?", "Affiche enregistrement", "Bus", "Pharmacie", "Affiche — ___.", "Enregistrement", "Affiche.", 0),
            Q("Bagage cabine ?", "8 kg max", "Illimité", "?", "Bagage cabine ___ kg.", "8", "8 kg.", 0),
            Q("Enregistrement en ligne ?", "24 h avant", "Sur place seulement", "?", "en ligne ___ h avant.", "24", "24 h.", 0),
            Q("Vol international ?", "Arriver 2 h avant", "5 min avant", "?", "___ h avant international.", "2", "2 h.", 0),
        ]),
        _airport("Notice — Bagages", "Bagage soute : 23 kg max classe économique.\nDimensions cabine : 55 × 40 × 23 cm.\nObjets interdits : couteaux, ciseaux.", [
            Q("Soute poids max ?", "23 kg", "8 kg", "230 kg", "Soute ___ kg max.", "23", "23 kg.", 0),
            Q("Dimensions cabine ?", "55 × 40 × 23 cm", "100 × 100", "?", "55 × 40 × ___ cm.", "23", "55×40×23.", 0),
            Q("Objets interdits ?", "Couteaux et ciseaux", "Livres", "Vêtements", "___ interdits.", "Couteaux", "Couteaux interdits.", 0),
            Q("Type ?", "Notice bagages", "Menu", "Tram", "Notice — ___.", "Bagages", "Notice.", 0),
            Q("Classe économique soute ?", "23 kg", "8 kg", "?", "___ kg max économique.", "23", "23 kg.", 0),
            Q("Cabine ?", "Dimensions limitées", "Illimité", "?", "Dimensions cabine ___.", "55", "Limitées.", 0),
            Q("Couteaux autorisés ?", "Non", "Oui", "?", "Couteaux ___.", "interdits", "Non.", 0),
        ]),
        _airport("SMS — Vol retardé", "Vol LX 1234 Genève–Paris retardé 45 min.\nNouveau départ 15 h 20 porte B 12.\nExcuses Swiss.", [
            Q("Numéro de vol ?", "LX 1234", "Bus 12", "Tram 1", "Vol ___.", "LX 1234", "LX 1234.", 0, transport=True),
            Q("Retard ?", "45 min", "4 min", "4 h", "Retard ___ min.", "45", "45 min.", 0),
            Q("Nouveau départ ?", "15 h 20", "8 h 12", "23 h", "Nouveau départ ___ h 20.", "15", "15 h 20.", 0),
            Q("Porte ?", "B 12", "A 1", "Rue", "Porte ___.", "B", "Porte B 12.", 0),
            Q("Trajet ?", "Genève–Paris", "Lausanne–bus", "?", "Genève–___.", "Paris", "Genève-Paris.", 0),
            Q("Qui excuse ?", "Swiss", "TL", "Restaurant", "Excuses ___.", "Swiss", "Swiss.", 0),
            Q("Type message ?", "SMS retard vol", "Menu", "Facture", "SMS — Vol ___.", "retardé", "SMS retard.", 0),
        ]),
    ]
    more = [
        ("Écran — Porte B 22", "Vol LX 567 Zurich–Londres.\nEmbarquement 14 h 50.\nDépart 15 h 20.\nStatut : à l'heure."),
        ("Annonce — Dernière appel", "Dernier appel vol AF 1234 porte A 5.\nPassagers manquants : présentez-vous immédiatement.\nFermeture porte dans 10 min."),
        ("Flyer — Duty-free", "Boutiques duty-free après contrôle.\nParfums, chocolats, souvenirs.\nPaiement en francs ou euros."),
        ("Plan — Terminal 2", "Terminal 2 arrivées niveau 0.\nDéparts niveau 1.\nNavette gratuite vers Terminal 1 toutes les 10 min."),
        ("Consigne — Objets interdits", "Interdit en cabine : liquides > 100 ml, couteaux, outils.\nOrdinateurs et tablettes : sortir au contrôle.\nCeinture et montre : dans le bac."),
        ("Affiche — Passeport", "Vols internationaux : passeport obligatoire.\nVérifiez validité 6 mois après le voyage.\nVisa si nécessaire selon destination."),
        ("SMS — Porte changée", "Vol LX 890 : porte changée.\nNouvelle porte C 8.\nDépart 18 h 05 maintenu."),
        ("Notice — Poussettes", "Poussettes : enregistrement gratuit à la porte.\nRécupération au tapis bagages.\nDemandez une étiquette au comptoir."),
        ("Panneau — Navette", "Navette aéroport–gare gratuite.\nDépart toutes les 15 min devant Terminal 1.\nDurée 12 min."),
        ("Affiche — WiFi aéroport", "WiFi gratuit : réseau Airport_Free.\nConnexion 4 h max.\nRechargez au comptoir information."),
        ("Message — Vol annulé", "Vol LX 456 annulé cause météo.\nRemboursement ou vol suivant demain 9 h.\nComptoir Swiss hall A."),
        ("Flyer — Fast Track", "Fast Track sécurité : 25 fr.\nFile prioritaire 5 min.\nAchat en ligne ou comptoir."),
        ("Écran — Retard", "Vol BA 321 Londres : retard 30 min.\nNouveau départ 16 h 45 porte B 3.\nExcuses."),
        ("Notice — Animaux", "Animaux en cabine : cage max 55 cm, 8 kg.\nRéservation obligatoire.\nFrais : 50 fr."),
        ("Affiche — Douane", "Marchandises à déclarer : au-delà de 300 fr.\nFormulaire bleu avant douane.\nFile verte : rien à déclarer."),
        ("SMS — Enregistrement", "Enregistrement en ligne ouvert vol LX 200.\nDépart 11 h 40 Genève–Nice.\nCarte d'embarquement sur téléphone."),
        ("Panneau — Salon", "Salon Swiss lounge porte B 15.\nAccès : classe affaires ou statut fréquent.\nOuvert 5 h–22 h."),
    ]
    for hdr, body in more:
        words = body.replace(".", " ").split()
        key = words[2] if len(words) > 2 else "info"
        items.append(_airport(hdr, body, [
            Q("Sujet ?", hdr.split("—")[-1].strip(), "Menu", "Bus", f"{hdr.split('—')[0].strip()} — _________.", key, f"Sujet : {hdr}.", 0),
            Q("Lieu ?", "Aéroport", "Gare", "École", "Document _________.", "aéroport", "Aéroport.", 0, transport=True),
            Q("Info voyage ?", "Oui", "Non", "Recette", "Info pour _________.", "voyager", "Oui.", 0),
            Q("Premier mot du corps ?", words[0], "Zéro", "?", "Mot : _________.", words[0], f"{words[0]}.", 0),
            Q("Texte court A1 ?", "Oui", "Non", "Difficile", "Niveau _________.", "A1", "Court.", 0),
            Q("Type document ?", hdr.split("—")[0].strip(), "Roman", "Poème", "Type : _________.", hdr.split("—")[0].strip(), f"Type : {hdr.split('—')[0].strip()}.", 0),
            Q("Thème aéroport ?", "Oui", "Non", "Plage", "Thème _________.", "aéroport", "Oui.", 0),
        ]))
    return items[:20]


def _e6_3_emails():
    specs = [
        ("Swiss", "Vol confirmé LX 123", ["Vol LX 123 Genève–Paris confirmé.", "Départ 15 h 10 porte B 22.", "Enregistrement en ligne ouvert."]),
        ("Swiss", "Retard vol LX 456", ["Vol LX 456 retardé 45 min.", "Nouveau départ 16 h 20 porte C 8.", "Excuses pour la gêne."]),
        ("EasyJet", "Enregistrement ouvert", ["Enregistrement en ligne ouvert.", "Vol demain 7 h 30 Genève–Barcelone.", "Bagage cabine 8 kg max."]),
        ("Air France", "Porte modifiée", ["Vol AF 890 : porte changée.", "Nouvelle porte A 12.", "Départ 14 h 05 maintenu."]),
        ("Aéroport Genève", "Navette gratuite", ["Navette gare–aéroport gratuite.", "Départ toutes les 15 min.", "Durée 12 min."]),
        ("Swiss", "Vol annulé", ["Vol LX 789 annulé cause météo.", "Remboursement ou vol demain 9 h.", "Comptoir hall A."]),
        ("Ryanair", "Billet électronique", ["Votre billet Dublin–Genève est prêt.", "Présentez carte d'embarquement sur téléphone.", "Arrivez 2 h avant."]),
        ("Swiss", "Bagage enregistré", ["Bagage enregistré 18 kg.", "Étiquette sur votre e-mail.", "Récupération tapis 3."]),
        ("Lufthansa", "Correspondance Zurich", ["Correspondance Zurich 45 min.", "Porte B 25.", "Train aéroport 5 min."]),
        ("Aéroport Genève", "Contrôle sécurité", ["Arrivez 2 h avant vol international.", "Liquides max 100 ml en cabine.", "Ordinateur à sortir du sac."]),
        ("British Airways", "Vol à l'heure", ["Vol BA 321 Londres à l'heure.", "Embarquement 10 h 40 porte B 3.", "Bonne journée."]),
        ("Swiss", "Siège confirmé", ["Siège 12A fenêtre confirmé.", "Vol LX 200 Genève–Nice.", "Départ 11 h 40."]),
        ("Vueling", "Enregistrement ferme", ["Enregistrement ferme dans 1 h.", "Vol VY 1234 Barcelone.", "Présentez-vous au comptoir."]),
        ("Aéroport Genève", "Parking P1", ["Place parking P1 réservée 24 h.", "Tarif 38 fr.", "Sortie ticket au comptoir."]),
        ("Swiss", "Fast Track offre", ["Fast Track sécurité 25 fr.", "File rapide 5 min.", "Achat en ligne."]),
        ("Turkish Airlines", "Vol Istanbul", ["Vol TK 190 confirmé.", "Départ 13 h 25 porte C 6.", "Passeport obligatoire."]),
        ("Swiss", "Dernière appel", ["Dernier appel vol LX 55 porte A 5.", "Fermeture porte dans 10 min.", "Présentez-vous immédiatement."]),
        ("Aéroport Genève", "WiFi gratuit", ["WiFi Airport_Free gratuit 4 h.", "Mot de passe sur écran d'accueil.", "Recharge au comptoir info."]),
        ("Emirates", "Vol Dubai", ["Vol EK 89 confirmé.", "Départ 22 h 10 porte B 18.", "Enregistrement 3 h avant."]),
        ("Swiss", "Merci de voyager", ["Merci d'avoir voyagé avec Swiss.", "Donnez votre avis sur le vol.", "À bientôt."]),
    ]
    emails = []
    for sender, subject, lines in specs:
        emails.append(render_email(sender, subject, lines, [
            Q("Qui envoie ?", sender, "Boulanger", "Facteur", f"De : _________.", sender.split()[0], f"{sender}.", 0),
            Q("Objet ?", subject, "Menu", "Recette", f"Objet : _________.", subject.split()[0], f"Objet : {subject}.", 0),
            Q("Thème aéroport ?", "Oui", "Non", "Restaurant", "Thème _________.", "aéroport", "Oui.", 0),
            Q("Première ligne ?", lines[0], "Rien", "?", "Info : _________.", lines[0].split()[0], f"{lines[0]}.", 0),
            Q("Type message ?", "E-mail aéroport", "Facture", "Invitation", "E-mail _________.", "aéroport", "E-mail aéroport.", 0),
            Q("Texte court ?", "Oui", "Non", "Long", "Message _________.", "court", "Court A1.", 0),
            Q("Utile pour voyager ?", "Oui", "Non", "Cuisiner", "Utile pour _________.", "voyager", "Oui.", 0),
        ]))
    return emails
