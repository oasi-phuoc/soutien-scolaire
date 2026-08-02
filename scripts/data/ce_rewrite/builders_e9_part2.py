"""E9.3–E9.5 builders (logement, admin, actualité)."""
from builders_e9 import Q, em


def _genre_msgs(title, facts):
    """Build message from unique fact tuples (not shared template)."""
    msgs = []
    for t, *vals in facts:
        v = list(vals) + [""] * 8
        paras = [
            f"{t} — {v[0]}.",
            f"Information clé : {v[1]}. Détail : {v[2]}.",
            f"Condition : {v[3]}. Délai : {v[4]}.",
            f"Contact : {v[5]}. Remarque : {v[6]}.",
            f"Pour toute question, consultez le site officiel ou contactez le service concerné du lundi au vendredi.",
        ]
        msgs.append({"text": f"{t}\n\n" + "\n".join(paras), "questions": [
            Q("Quel est le sujet ?", t, "Un sport", "Une recette", f"{t} — _________.", t.split()[0], f"Sujet : {t}.", 0),
            Q("Première information ?", v[0].capitalize(), "Rien", "Un chat", f"{v[0]}.", v[0].split()[0], f"Info : {v[0]}.", 0),
            Q("Information clé ?", v[1].capitalize(), "Aucune", "Un secret", f"Information clé : {v[1]}.", v[1].split()[0], f"Clé : {v[1]}.", 0),
            Q("Quel détail ?", v[2].capitalize(), "Rien", "Un prix", f"Détail : {v[2]}.", v[2].split()[0], f"Détail : {v[2]}.", 0),
            Q("Quelle condition ?", v[3].capitalize(), "Aucune", "Un examen", f"Condition : {v[3]}.", v[3].split()[0], f"Condition : {v[3]}.", 0),
            Q("Quel délai ?", v[4].capitalize(), "Jamais", "Hier", f"Délai : {v[4]}.", v[4].split()[0], f"Délai : {v[4]}.", 0),
            Q("Quel contact ?", v[5].capitalize(), "Personne", "L'étranger", f"Contact : {v[5]}.", v[5].split()[0], f"Contact : {v[5]}.", 0),
        ]})
    return msgs


def _genre_emails(specs):
    emails = []
    for sender, subject, *vals in specs:
        v = list(vals) + [""] * 8
        def _w(i, default="information"):
            return v[i] if i < len(v) and v[i] else default
        emails.append(em(sender, subject,
            [f"Concernant {_w(0)} : {_w(1)}.", f"Délai : {_w(2)}. Action : {_w(3)}.", f"Contact : {_w(4)}. Merci."],
            [Q("Objet ?", subject, "Facture", "Menu", f"Objet : _________", subject.split()[0], f"Objet : {subject}.", 0),
             Q("Sujet ?", _w(0).capitalize(), "Rien", "Sport", f"Concernant {_w(0)}.", _w(0).split()[0] if _w(0) else "sujet", f"Sujet : {_w(0)}.", 0),
             Q("Information ?", _w(1).capitalize(), "Aucune", "Secret", f"{_w(1)}.", _w(1).split()[0] if _w(1) else "info", f"Info : {_w(1)}.", 0),
             Q("Délai ?", _w(2).capitalize(), "Jamais", "Hier", f"Délai : {_w(2)}.", _w(2).split()[0] if _w(2) else "délai", f"Délai : {_w(2)}.", 0),
             Q("Action ?", _w(3).capitalize(), "Rien", "Dormir", f"Action : {_w(3)}.", _w(3).split()[0] if _w(3) else "action", f"Action : {_w(3)}.", 0),
             Q("Expéditeur ?", sender, "Facteur", "Ami", f"De : _________", sender.split()[0], f"Expéditeur : {sender}.", 0),
             Q("Contact ?", _w(4).capitalize(), "Personne", "Étranger", f"Contact : {_w(4)}.", _w(4).split()[0] if _w(4) else "contact", f"Contact : {_w(4)}.", 0)]))
    return emails


def e9_3_msg():
    facts = [
        ("Agence du Parc — Studio à louer", "Studio meublé trente-deux mètres carrés", "loyer mille cent francs charges comprises", "caution trois mois", "disponible premier juin", "quartier calme", "visite sur rendez-vous", "balcon"),
        ("Colocation Étudiants — Chambre libre", "chambre douze mètres carrés", "loyer six cent cinquante francs", "cuisine partagée", "proche université", "non-fumeur", "dossier complet", "dès septembre"),
        ("Régie Centrale — Visite appartement", "trois pièces soixante mètres carrés", "quatrième étage avec ascenseur", "samedi quatorze heures", "rue des Alpes", "cave incluse", "place de parc optionnelle", "animaux non acceptés"),
        ("Petite annonce — Sous-location été", "juillet et août", "appartement deux pièces", "mille cinq cents francs par mois", "meublé", "proche lac", "étudiant préféré", "contrat écrit"),
        ("Caution solidaire — Information", "garant exigé", "revenus trois fois le loyer", "documents justificatifs", "formulaire en ligne", "délai cinq jours", "régie partenaire", "gratuit"),
        ("État des lieux — Rendez-vous", "entrée premier octobre", "dix heures", "présence obligatoire", "photos", "compteur eau", "clés remises", "procès-verbal"),
        ("Assurance ménage — Obligatoire", "responsabilité civile", "quarante-cinq francs par an", "attestation à fournir", "avant emménagement", "sinistre couvert", "partenaire recommandé", "en ligne"),
        ("Charges locatives — Détail", "eau chauffage ascenseur", "deux cent vingt francs", "provision mensuelle", "régularisation annuelle", "compteur individuel", "économies possibles", "réunion copropriété"),
        ("Quittance de loyer — Demande", "modèle officiel", "envoi mensuel", "preuve paiement", "banque", "délai quarante-huit heures", "format PDF", "archivage"),
        ("Résiliation bail — Préavis", "trois mois", "lettre recommandée", "fin de mois", "état des lieux sortie", "restitution caution", "délai un mois", "modèle fourni"),
        ("Travaux copropriété — Information", "ravalement façade", "juin à septembre", "nuisances possibles", "ascenseur maintenu", "parking extérieur", "réunion info", "budget voté"),
        ("Logement social — Candidature", "dossier en ligne", "revenus plafonnés", "priorité familles", "délai six mois", "visite attribution", "bail trois ans", "renouvelable"),
        ("Airbnb règlement — Quartier", "locations courtes durées", "autorisation commune", "nuisances signalées", "amende possible", "voisins", "règlement intérieur", "calme après vingt-deux heures"),
        ("Déménagement — Ascenseur réservation", "samedi réservé", "caution deux cents francs", "protection sols", "horaire huit à dix-huit heures", "réservation gardien", "monte-meubles", "assurance"),
        ("Diagnostic énergétique — Obligatoire", "classe C", "validité dix ans", "travaux recommandés", "isolation", "chauffage", "coût estimé", "aides cantonales"),
        ("Colocation — Règlement intérieur", "ménage tournant", "visiteurs limités", "cuisine propre", "factures partagées", "réunion mensuelle", "médiateur", "caution partagée"),
        ("Garage à louer — Annonce", "quinze mètres carrés", "cent quatre-vingts francs", "sous-sol sécurisé", "accès badge", "vélo possible", "disponible immédiatement", "bail un an"),
        ("Logement temporaire — Hôtel résidence", "studio équipé", "quatre-vingt-dix francs par nuit", "minimum sept nuits", "ménage hebdomadaire", "réception vingt-quatre heures", "proche gare", "réservation en ligne"),
        ("Aide au logement — Subvention", "complément loyer", "dossier CAF", "revenus modestes", "montant variable", "renouvellement annuel", "justificatifs", "délai traitement"),
        ("Visite virtuelle — Appartement", "lien vidéo", "trois pièces lumineuses", "visite physique ensuite", "candidature en ligne", "dossier PDF", "réponse sous une semaine", "priorité premier arrivé"),
    ]
    return _genre_msgs("Logement", facts)


def e9_3_email():
    specs = [
        ("Régie du Lac", "Candidature reçue", "appartement trois pièces", "dossier complet", "réponse sous dix jours", "visite possible", "Agence du Parc"),
        ("Propriétaire M. Dubois", "Confirmation visite", "samedi quatorze heures", "rue des Alpes 12", "apporter pièce identité", "durée trente minutes"),
        ("Coloc Étudiants", "Chambre disponible", "septembre", "six cent cinquante francs", "cuisine partagée", "dossier demandé"),
        ("Assurance Habitation", "Attestation envoyée", "responsabilité civile", "quarante-cinq francs", "validité un an", "PDF joint"),
        ("Régie Centrale", "État des lieux entrée", "premier octobre dix heures", "présence obligatoire", "clés remises", "procès-verbal"),
        ("Service Logement", "Subvention accordée", "complément loyer", "cent quatre-vingts francs", "versement mensuel", "renouvellement annuel"),
        ("Agence ImmoPlus", "Bail à signer", "studio meublé", "loyer mille cent francs", "caution trois mois", "rendez-vous mercredi"),
        ("Copropriété Les Tilleuls", "Travaux façade", "juin à septembre", "nuisances possibles", "ascenseur maintenu", "réunion info"),
        ("Hôtel Résidence", "Confirmation séjour", "sept nuits minimum", "quatre-vingt-dix francs par nuit", "studio équipé", "ménage inclus"),
        ("Cautionnement.ch", "Garantie acceptée", "caution solidaire", "dossier validé", "attestation envoyée", "propriétaire informé"),
        ("Déménagement Express", "Réservation ascenseur", "samedi huit heures", "caution deux cents francs", "protection sols", "gardien prévenu"),
        ("Diagnostic Pro", "Rapport énergétique", "classe C", "travaux recommandés", "validité dix ans", "PDF joint"),
        ("Airbnb Support", "Règlement quartier", "locations courtes", "autorisation requise", "nuisances interdites", "amende possible"),
        ("Garage Sécurisé", "Location confirmée", "quinze mètres carrés", "cent quatre-vingts francs", "badge accès", "bail un an"),
        ("Quittance Online", "Quittance mars", "loyer payé", "preuve envoyée", "format PDF", "archivage"),
        ("Résiliation Service", "Préavis enregistré", "trois mois", "fin juin", "état des lieux prévu", "caution restituée"),
        ("Visite Virtuelle", "Lien vidéo appartement", "trois pièces", "candidature en ligne", "réponse une semaine", "priorité premier arrivé"),
        ("Logement Social", "Dossier reçu", "candidature enregistrée", "délai six mois", "priorité familles", "visite si attribution"),
        ("Sous-location Été", "Confirmation juillet-août", "mille cinq cents par mois", "meublé", "contrat écrit", "proche lac"),
        ("Charges Régie", "Régularisation annuelle", "provision deux cent vingt francs", "remboursement quarante francs", "compteur individuel", "facture jointe"),
    ]
    return _genre_emails(specs)


def e9_4_msg():
    facts = [
        ("Préfecture — Renouvellement titre de séjour", "rendez-vous obligatoire", "dossier complet", "quatre photos", "justificatif domicile", "trois mois avant expiration", "frais cent vingt-six euros", "délai deux mois"),
        ("Mairie — Inscription sur les listes électorales", "avant vendredi trente et un mars", "carte d'identité", "justificatif domicile", "formulaire Cerfa", "premier vote", "bureau de vote attribué", "carte électorale"),
        ("CAF — Aide au logement", "dossier en ligne", "revenus deux mille cinq cents euros max", "bail et quittances", "RIB", "traitement six semaines", "versement mensuel", "renouvellement annuel"),
        ("Impôts — Déclaration revenus", "avant trente et un mai", "formulaire en ligne", "numéro fiscal", "pièces justificatives", "avis automatique", "remboursement possible", "délai traitement"),
        ("Pôle Emploi — Actualisation", "tous les mois", "Internet ou téléphone", "attestation employeur", "formation", "indemnisation", "rendez-vous conseiller", "offres adaptées"),
        ("Sécurité sociale — Carte Vitale", "mise à jour adresse", "attestation mutuelle", "médecin traitant", "déclaration naissance", "remboursement soins", "espace ameli", "délai quinze jours"),
        ("Consulat — Passeport", "rendez-vous en ligne", "deux photos norme", "ancien passeport", "justificatif identité", "délai six semaines", "retrait sur place", "urgence voyage"),
        ("Poste — Changement adresse", "service gratuit", "redirection courrier six mois", "formulaire en ligne", "ancienne et nouvelle adresse", "confirmation e-mail", "début sous cinq jours", "tous expéditeurs"),
        ("Banque — Ouverture compte", "rendez-vous agence", "pièce identité", "justificatif domicile", "contrat travail", "dépôt minimum cent euros", "carte sous dix jours", "application mobile"),
        ("Assurance maladie — Affiliation", "formulaire S1106", "carte Vitale", "médecin déclaré", "droits ouverts", "remboursement soins", "complémentaire", "délai trois semaines"),
        ("Permis de conduire — Échange", "permis étranger", "traduction officielle", "visite médicale", "photo norme", "délai deux mois", "retrait préfecture", "frais quatre-vingt-six euros"),
        ("École — Inscription enfant", "rentrée septembre", "certificat scolarité", "vaccinations", "justificatif domicile", "délai mars", "affectation école", "fournitures liste"),
        ("Allocation familiale — Demande", "dossier CAF", "livret de famille", "revenus", "enfants à charge", "versement trimestriel", "délai traitement", "espace en ligne"),
        ("Carte handicap — Demande MDPH", "formulaire Cerfa", "certificat médical", "entretien", "délai quatre mois", "droits associés", "stationnement", "aides adaptées"),
        ("Naturalisation — Dossier", "cinq ans résidence", "test langue B1", "entretien civique", "casier judiciaire", "délai dix-huit mois", "cérémonie", "frais"),
        ("Déclaration naissance — Mairie", "trois jours après accouchement", "certificat médical", "pièces parents", "livret famille", "acte naissance", "gratuit", "choix prénom"),
        ("Changement état civil — Mariage", "publication bans", "dossier mairie", "témoins", "cérémonie civile", "délai deux mois", "acte mariage", "nom conjoint"),
        ("Recensement citoyen — JDC", "dix-huit ans", "convocation automatique", "journée défense", "formulaire", "attestation", "obligatoire", "report possible"),
        ("Extrait casier judiciaire — Demande", "bulletin n°3", "en ligne", "gratuit", "délai vingt-quatre heures", "PDF sécurisé", "employeur", "volontariat"),
        ("Attestation hébergement — Modèle", "hébergeant déclare", "pièce identité hébergeur", "justificatif domicile", "signature", "gratuit", "démarches administratives", "validité trois mois"),
    ]
    return _genre_msgs("Administration", facts)


def e9_4_email():
    specs = [
        ("Préfecture", "Convocation renouvellement", "titre de séjour", "mercredi quatorze heures", "dossier complet", "bureau 204"),
        ("Mairie de Sion", "Inscription électorale", "liste électorale", "carte électorale", "avant trente et un mars", "bureau vote"),
        ("CAF", "Dossier aide logement", "traitement six semaines", "versement mensuel", "documents reçus", "espace en ligne"),
        ("Impôts", "Avis imposition disponible", "déclaration validée", "remboursement deux cents euros", "virement sous quinze jours", "espace impots.gouv"),
        ("Pôle Emploi", "Rappel actualisation", "mensuelle obligatoire", "avant fin du mois", "Internet ou téléphone", "indemnisation"),
        ("Ameli", "Carte Vitale mise à jour", "nouvelle adresse", "délai quinze jours", "envoi automatique", "espace ameli"),
        ("Consulat", "Passeport prêt", "retrait sur place", "lundi à vendredi", "pièce identité", "délai six semaines"),
        ("La Poste", "Redirection courrier activée", "six mois", "nouvelle adresse", "confirmation", "gratuit"),
        ("Banque Populaire", "Compte ouvert", "carte sous dix jours", "application mobile", "RIB joint", "rendez-vous conseiller"),
        ("CPAM", "Affiliation confirmée", "droits ouverts", "carte Vitale", "médecin traitant", "remboursements"),
        ("Préfecture Permis", "Échange permis accepté", "retrait dans deux mois", "visite médicale validée", "frais quatre-vingt-six euros"),
        ("École Communale", "Inscription confirmée", "rentrée septembre", "affectation école", "liste fournitures", "réunion parents"),
        ("CAF Famille", "Allocations accordées", "versement trimestriel", "enfants à charge", "renouvellement annuel"),
        ("MDPH", "Dossier handicap reçu", "entretien programmé", "délai quatre mois", "droits possibles"),
        ("Service Naturalisation", "Dossier complet", "test langue programmé", "entretien civique", "délai dix-huit mois"),
        ("État Civil", "Acte naissance délivré", "livret famille", "gratuit", "retrait mairie", "trois jours délai"),
        ("Mairie Mariage", "Publication bans", "cérémonie programmée", "dossier validé", "témoins confirmés"),
        ("JDC Service", "Convocation recensement", "journée défense", "formulaire joint", "obligatoire"),
        ("Casier Judiciaire", "Bulletin n°3 disponible", "PDF sécurisé", "téléchargement vingt-quatre heures", "gratuit"),
        ("Hébergement Attestation", "Modèle validé", "signature hébergeur", "validité trois mois", "démarches possibles"),
    ]
    return _genre_emails(specs)


def e9_5_msg():
    facts = [
        ("La Tribune — Municipales : les candidats débattent", "élection dimanche", "cinq candidats", "débat télévisé jeudi", "thèmes logement et transports", "sondage serré", "abstention prévue", "bureaux ouverts huit à dix-huit heures"),
        ("Météo-France — Vigilance orange", "orages violents", "vendredi soir", "pluies intenses", "vents forts", "éviter déplacements", "inondations possibles", "mise à jour seize heures"),
        ("Radio Lac — Festival musique annoncé", "juillet trois jours", "tête d'affiche internationale", "billets en vente lundi", "camping sur place", "transports renforcés", "bénévoles recherchés", "programme complet site"),
        ("Le Quotidien — Grève transports", "mardi toute la journée", "bus et tramways", "manifestation matin", "perturbations majeures", "télétravail conseillé", "info trafic temps réel", "reprise mercredi"),
        ("TV Locale — Reportage agriculture", "producteurs locaux", "circuit court", "marché hebdomadaire", "bio en hausse", "jeunes agriculteurs", "aides cantonales", "interview ministre"),
        ("Blog Citoyen — Projet vélo", "piste cyclable nouvelle", "douze kilomètres", "fin travaux automne", "budget deux millions", "sécurité améliorée", "pétition soutien", "réunion publique"),
        ("Agence Presse — Économie locale", "chômage en baisse", "taux cinq pour cent", "créations emploi", "secteur santé", "tourisme record", "inflation modérée", "prévisions positives"),
        ("Journal Régional — Santé publique", "campagne vaccination", "grippe saisonnière", "pharmacies participantes", "gratuit plus de soixante-cinq ans", "rendez-vous en ligne", "couverture soixante-dix pour cent", "rappel conseillé"),
        ("Podcast Info — Éducation", "réforme scolaire", "numérique en classe", "formation enseignants", "budget augmenté", "parents inquiets", "déploiement trois ans", "expert interviewé"),
        ("Flash Info — Accident route", "autoroute A9", "bouchon cinq kilomètres", "secours sur place", "deux blessés légers", "circulation alternée", "éviter secteur", "mise à jour continue"),
        ("Enquête Opinion — Environnement", "soixante-dix pour cent préoccupés", "recyclage insuffisant", "transports publics favorisés", "énergie renouvelable", "jeunes engagés", "municipalité responsable", "résultats complets"),
        ("Culture Plus — Exposition art", "musée des Beaux-Arts", "artistes contemporains", "entrée gratuite dimanche", "visite guidée quatorze heures", "catalogue vente", "jusqu'au trente juin", "réservation conseillée"),
        ("Sport Hebdo — Marathon ville", "dix mille participants", "parcours urbain", "dimanche huit heures", "inscriptions complètes", "bénévoles", "ravitaillement", "médaille finisher"),
        ("Tech News — Fibre optique", "déploiement accéléré", "quatre-vingts pour cent foyers", "débit gigabit", "opérateurs", "fin deux mille vingt-six", "inscription en ligne", "installation gratuite"),
        ("Société — Logement étudiant", "pénurie chambres", "prix en hausse", "résidences saturées", "colocations", "aides étudiants", "construction prévue", "témoignages"),
        ("International — Sommet climat", "accord partiel", "réduction émissions", "finances vertes", "manifestations", "prochaine étape", "réactions locales", "analyse expert"),
        ("Faits Divers — Vol vélo", "campus universitaire", "caméras surveillance", "témoignages", "plainte déposée", "conseils sécurité", "marquage antivol", "statistiques hausse"),
        ("Économie — Ouverture magasin", "centre commercial", "cent cinquante emplois", "samedi inauguration", "promotions", "parkings gratuits", "horaires étendus", "concours"),
        ("Santé — Canicule prévue", "températures trente-cinq degrés", "recommandations préfecture", "hydratation", "personnes fragiles", "îlots fraîcheur", "écoles adaptées", "vigilance"),
        ("Médias — Nouveau journal local", "lancement septembre", "gratuit", "actualité quartier", "petites annonces", "journalistes indépendants", "distribution boîtes", "version en ligne"),
    ]
    return _genre_msgs("Actualité", facts)


def e9_5_email():
    specs = [
        ("La Tribune", "Newsletter municipales", "élection dimanche", "cinq candidats", "débat jeudi", "bureaux ouverts"),
        ("Météo Alert", "Vigilance orange", "orages vendredi", "éviter déplacements", "mise à jour seize heures"),
        ("Festival Musique", "Billets en vente", "juillet trois jours", "camping sur place", "programme site"),
        ("Info Trafic", "Grève mardi", "bus tramways perturbés", "télétravail conseillé", "reprise mercredi"),
        ("TV Locale", "Reportage agriculture", "producteurs locaux", "marché hebdomadaire", "interview"),
        ("Blog Vélo", "Piste cyclable", "douze kilomètres", "fin automne", "réunion publique"),
        ("Agence Éco", "Chômage baisse", "taux cinq pour cent", "créations emploi", "prévisions positives"),
        ("Santé Publique", "Campagne vaccination", "grippe saisonnière", "gratuit plus soixante-cinq ans", "rendez-vous en ligne"),
        ("Podcast Éducation", "Réforme scolaire", "numérique classe", "déploiement trois ans", "expert interviewé"),
        ("Flash Route", "Accident A9", "bouchon cinq kilomètres", "circulation alternée", "éviter secteur"),
        ("Enquête Env", "Soixante-dix pour cent préoccupés", "recyclage", "transports publics", "résultats"),
        ("Culture Plus", "Exposition art", "entrée gratuite dimanche", "jusqu'au trente juin", "réservation"),
        ("Sport Hebdo", "Marathon dimanche", "dix mille participants", "inscriptions complètes", "huit heures départ"),
        ("Tech News", "Fibre optique", "quatre-vingts pour cent foyers", "installation gratuite", "inscription en ligne"),
        ("Société Logement", "Pénurie chambres étudiant", "prix hausse", "aides étudiants", "témoignages"),
        ("Info International", "Sommet climat", "accord partiel", "manifestations", "analyse expert"),
        ("Faits Divers", "Vol vélo campus", "caméras surveillance", "plainte déposée", "conseils sécurité"),
        ("Économie Locale", "Ouverture magasin", "cent cinquante emplois", "samedi inauguration", "promotions"),
        ("Santé Canicule", "Températures trente-cinq degrés", "recommandations préfecture", "îlots fraîcheur"),
        ("Médias Local", "Nouveau journal", "lancement septembre", "gratuit", "version en ligne"),
    ]
    return _genre_emails(specs)
