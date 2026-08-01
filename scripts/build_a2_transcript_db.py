#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build cleaned A2 audio transcript DB from corrigés + known dialogue banks."""
from __future__ import annotations
import json
from pathlib import Path

# Hand-cleaned transcripts keyed by CD track number (matches /A2/NNN.mp3)
T: dict[int, str] = {}

T[1] = """- Allô !
- Allô Raphaël, c'est Jules ! Comment ça va ?
- Très bien, et toi ?
- Bien, mais mon lave-linge est tombé en panne.
- Ah ! Tu vas le faire réparer ?
- Non, il est vieux et il n'est plus sous garantie, alors je vais acheter une nouvelle machine.
- Oui, je comprends. « Bien chez soi » fait des promotions en ce moment sur le rayon électroménager. Il y a des offres en magasin et sur leur site.
- Ah, je ne savais pas. Mais le centre commercial est loin de chez moi, et si je commande sur le site Internet, il faut attendre quelques semaines. Alors je préfère acheter un lave-linge d'occasion.
- Oui, c'est vrai que c'est plus rapide et souvent moins cher. T'as regardé sur Leboncoin ?
- Oui, et justement, je t'appelle pour ça. À côté de chez moi, j'ai trouvé un lave-linge pas cher et en très bon état. Et le vendeur a des commentaires positifs. Mais il n'y a pas de service de livraison. Tu pourrais m'aider à le porter ?
- Bien sûr !"""

T[4] = """- Mon lave-linge est tombé en panne.
- Tu vas le faire réparer ?
- Non, il n'est plus sous garantie.
- Je préfère acheter un lave-linge d'occasion.
- T'as regardé sur Leboncoin ?
- Oui, j'ai trouvé un lave-linge pas cher et en très bon état.
- Je vous appelle parce que j'ai acheté un téléphone portable sur votre site, mais il est en panne.
- D'accord. Pourriez-vous me donner la référence de la commande ?
- Vous proposez un service de livraison à domicile ?
- Je viens rapporter ce manteau. Il ne me va pas.
- Nous avons d'autres tailles si vous souhaitez échanger.
- Non, je voudrais un remboursement, s'il vous plaît.
- Très bien. Vous avez le ticket de caisse ?"""

T[5] = """C'est les soldes chez « Voularty » ! Jusqu'au 19 juillet, profitez de réductions exceptionnelles sur tout le rayon multimédia ! Ordinateurs, tablettes et smartphones à petit prix ! Les offres sont disponibles sur le site Internet et en magasin, alors n'attendez plus !"""

T[6] = """- Bonjour monsieur. Je viens rapporter ce manteau. Il ne me va pas.
- D'accord, madame. Nous avons d'autres tailles si vous souhaitez échanger.
- Non, je voudrais un remboursement, s'il vous plaît.
- Très bien. Vous avez le ticket de caisse ?
- Oui, tenez."""

T[7] = """- Service après-vente, Matthieu à votre écoute.
- Bonjour monsieur. Je vous appelle parce que j'ai acheté un téléphone portable sur votre site mais, depuis hier, il ne s'allume plus.
- D'accord. Pourriez-vous me donner la référence de la commande ?
- Oui, c'est la commande VF3367Y.
- J'y suis. Il s'agit d'un smartphone commandé le 20 août 2020 qui est encore sous garantie. Donc je vous envoie un bon de retour par e-mail, et vous pouvez retourner le smartphone au service réparation.
- Très bien. Merci monsieur !"""

T[8] = """Bonjour madame. Je vous appelle parce que j'ai vu votre annonce pour la vente d'un réfrigérateur et je voudrais vous poser quelques questions. De quelle couleur est le frigo ? Quelles sont ses dimensions ? Est-ce qu'il est encore sous garantie ? Je voudrais aussi savoir si vous proposez un service de livraison à domicile ou s'il faut venir le chercher. Vous pouvez m'appeler au 06.14.53.76.84. À bientôt !"""

T[9] = """- Salut Vincent ! Tu sais comment aller au mariage de Thomas le week-end prochain ?
- Oui, je viens de louer une voiture. Je pensais prendre le train, mais c'est plus long et plus cher.
- Et en covoiturage ?
- Les trajets proposés ne sont pas pratiques.
- Dommage. Tu es passé par une agence pour la location ?
- Non, un service de location de voitures entre particuliers. Ça s'appelle « Loue ma voiture ! ». Tu connais ?
- Pas du tout. Mais… c'est sûr comme service ?
- Oui, c'est sûr et simple. Tu t'inscris, tu enregistres une pièce d'identité et ton permis de conduire, et tu loues une voiture.
- Il y a une assurance ?
- Oui, c'est compris. Et pour cette voiture, le propriétaire vient de faire le contrôle technique.
- Et pour l'essence ?
- À la fin du week-end, je dois juste faire le plein dans une station-service avant de rendre la voiture."""

T[12] = """- Je viens de louer une voiture pour le week-end.
- Tu es passé par une agence ?
- Non, un service entre particuliers. Tu t'inscris, tu enregistres ton permis, et tu loues.
- Il y a une assurance ?
- Oui, c'est compris. Le propriétaire vient de faire le contrôle technique.
- Et pour l'essence ?
- Je dois faire le plein avant de rendre la voiture.
- Tu peux aussi prendre le tram avec un ticket commun pour le parking."""

T[13] = """- Bonjour monsieur. Je viens d'avoir un petit accident et le clignotant ne marche plus.
- D'accord madame, je vais regarder et vérifier l'état général du véhicule. Je vous appelle dans la journée pour la réparation."""

T[14] = """Chers voyageurs, pour améliorer notre réseau de transports, des travaux sur la ligne 5 viennent de débuter. La station « Victor Hugo » n'est plus desservie, mais des bus de remplacement sont à votre disposition. Votre ticket de transport reste valable."""

T[15] = """- Bonsoir monsieur, je viens d'entendre l'annonce. Donc, il y a une panne sur la ligne 8 ?
- Oui, et malheureusement le trafic est interrompu.
- Je dois aller Place de la République. Est-ce que je peux prendre le bus 14 ?
- Non, le service des bus termine à 23 h 00. Mais vous pouvez prendre le bus de nuit N5 qui vous laisse rue Voltaire, donc pas loin. Sinon, on vient de m'informer qu'une navette va être proposée dans une petite heure."""

T[16] = """- Salut Laure ! Je viens de partir du bureau, donc je vais chercher ma voiture et j'arrive !
- Très bien ! Mais ils viennent d'annoncer un véhicule en panne sur la D5 et il y a des embouteillages. Tu devrais peut-être laisser ta voiture au parc relais et prendre le tram. En plus, c'est difficile de stationner dans mon quartier.
- Oui, t'as raison. C'est un ticket commun pour le parking et le tram ?
- Oui, avec transports illimités pour la journée.
- D'accord ! À tout à l'heure !"""

T[17] = """- Agence du Rhône, bonjour.
- Bonjour monsieur. Je cherche un appartement à louer. Sur votre site, il y a deux annonces intéressantes. Je voudrais vous poser quelques questions…
- Bien sûr. Quels appartements vous intéressent ?
- Le T3 dans le quartier de la Banque et le T2, rue Ancienne.
- Désolé, le T2 n'est plus disponible. Les nouveaux locataires vont emménager demain.
- Déjà ? Bon, et le T3, il est libre ?
- Oui, il est disponible. Nous allons organiser les visites la semaine prochaine.
- Très bien… Cet appartement est à quel étage ?
- Au 5e, c'est le dernier étage de l'immeuble. Vous avez une jolie vue sur les montagnes.
- Il y a bien un ascenseur ?
- Bien sûr, l'immeuble est moderne et l'appartement est rénové.
- Parfait. Les visites, c'est quel jour ? Est-ce que je dois m'inscrire ?
- Mardi prochain de 17 heures à 19 heures, pas besoin de vous inscrire. Je vais vous donner l'adresse exacte."""

T[20] = """- Je cherche un appartement à louer.
- Quel type d'appartement vous intéresse : un studio, un T2 ?
- Est-ce que c'est proche de la gare ?
- Oui, c'est à 5 minutes à pied.
- Est-ce que le studio est toujours disponible ?
- Oui, il est libre à partir de mars. / Non, il n'est plus disponible.
- L'appartement se trouve dans le quartier de la Banque.
- Pouvez-vous me donner l'adresse exacte ?
- Est-ce que c'est lumineux ?
- Oui, l'appartement est exposé sud.
- L'appartement est rénové ?
- Non, mais l'état général est excellent.
- Alors, cette visite ? Tu penses quoi du studio ?
- Un coup de cœur ! J'adore !
- Les visites sont organisées la semaine prochaine.
- Est-ce que je dois m'inscrire ?
- Non, pas besoin !
- Tu signes le bail quand ?
- J'attends la réponse de l'agence."""

T[21] = """Vous allez voir, c'est un bel appartement. Ici un grand salon de 19 m2. Là, vous avez deux chambres et deux salles de bain. La cuisine est équipée. Et regardez cette belle terrasse exposée sud. Vous avez une magnifique vue sur le parc !"""

T[22] = """- Bonjour, vous êtes Madame Norin, la gardienne ?
- Oui, c'est moi.
- Je viens d'avoir votre numéro par l'agence immobilière. Je voudrais visiter le studio au rez-de-chaussée.
- Il y a une visite groupée demain à 16 h. Venez avec votre dossier complet.
- D'accord, merci madame."""

T[23] = """- Une visite d'appartement, c'est rapide, soyez préparé ! Écoutez les conseils de notre spécialiste.
- Avant de visiter, étudiez le quartier. Regardez la rue : y a-t-il des commerces, une poste ? Observez aussi l'immeuble : est-il moderne, rénové, calme ? Vous allez être content d'avoir un ascenseur si votre futur appartement est au dernier étage. Parlez avec le gardien.
- Et pendant la visite ?
- Regardez tout. Un salon lumineux, une jolie vue sont bien sûr importants, mais vérifiez surtout l'état de l'appartement."""

T[24] = """- Salut Flo, alors cette visite ? Tu penses quoi du studio ?
- Salut Allan. C'est un coup de cœur ! Il est grand — 35 m2 — et exposé est-ouest.
- Et le quartier ?
- C'est à 5 minutes d'une station de métro. Je vais aussi discuter avec le gardien pour savoir si c'est calme. Bon, 490 € de loyer c'est un peu cher, mais les charges sont comprises, alors je pense que ça va aller.
- Tu signes le bail quand ?
- Attends, attends… l'agence va me donner une réponse demain."""

T[25] = """- Personne suivante... J'ai dit : Personne suivante ! Bonjour !
- Bonjour, je voudrais des informations pour renouveler mon titre de séjour qui expire dans 5 mois.
- Pour faire une demande de renouvellement, vous devez envoyer votre carte de séjour qui arrive à expiration.
- Pouvez-vous me donner l'adresse postale ?
- C'est écrit sur ce papier.
- Je dois envoyer une lettre recommandée ?
- Non, utilisez une lettre simple au tarif normal. Avec la carte, vous envoyez ce formulaire avec votre nom, celui de votre conjoint et de vos enfants à charge, un justificatif de domicile et 3 photos d'identité. N'oubliez pas d'ajouter un timbre fiscal.
- Quand est-ce que je dois faire ma demande ?
- N'attendez pas trop ! Envoyez votre demande au moins 60 jours avant la date d'expiration de votre carte.
- Merci pour ces informations, j'ai tout noté."""

T[28] = """- Je voudrais renouveler mon titre de séjour.
- Vous devez envoyer votre carte de séjour qui arrive à expiration.
- Je dois envoyer une lettre recommandée ?
- Non, une lettre simple suffit, avec un justificatif de domicile et des photos d'identité.
- Quand dois-je faire ma demande ?
- Au moins 60 jours avant l'expiration.
- Tu as pris ton forfait chez quel opérateur ?
- Green Mobile, mais c'est un peu cher.
- Demande-leur une réduction : tu es un client fidèle !"""

T[29] = """- Tu as pris ton forfait chez quel opérateur ?
- Green Mobile, mais c'est un peu cher.
- Ah bon ? Tu payes combien par mois ?
- J'ai choisi un forfait à 25 € pour 6 h avec sms illimités.
- Oui, c'est cher. Tu es client chez eux depuis combien de temps ?
- Ça doit faire 5 ans.
- Tu es un client fidèle alors demande-leur une réduction sur ton forfait !
- Tu as raison ! Je vais faire ça !"""

T[30] = """- En plus de votre compte courant, vous pouvez ouvrir un livret A.
- Qu'est-ce que c'est ?
- C'est un compte qui vous permet d'épargner… d'économiser. Vous choisissez le montant que vous souhaitez mettre de côté tous les mois. C'est automatique.
- Et si j'ai besoin d'utiliser cet argent ?
- Aucun problème ! Vous pouvez à tout moment retirer l'argent du livret.
- Et je peux y mettre la somme que je veux ?
- Oui, mais n'oubliez pas, le montant maximum est de 23 000 € !"""

T[31] = """- Pour ouvrir un compte il faut un justificatif de domicile et une pièce d'identité. Comptez 1 semaine pour avoir votre carte bancaire et 2 semaines pour votre chéquier.
- Comme justificatif, j'ai pris une facture de téléphone portable.
- Non, il faut plutôt une facture d'électricité."""

T[32] = """- Je voudrais envoyer une lettre recommandée. Comment ça fonctionne ?
- Avec une lettre recommandée vous recevez chez vous un accusé de réception : c'est la preuve que le destinataire a bien reçu votre lettre.
- Et c'est combien ?
- C'est 4,55 €."""

T[33] = """- Tu as regardé les infos hier soir ? Ils ont parlé de la crise économique…
- Non, hier je suis partie tard du bureau. Tu sais, je ne regarde pas beaucoup la télé, je lis la presse en ligne.
- Tu es abonnée à un journal ?
- Je reçois la newsletter de Ouest-France et je lis aussi les articles des journaux et des magazines gratuits.
- Moi, je n'aime pas lire, je préfère regarder le journal télévisé.
- Tu regardes le JT sur quelle chaîne ?
- Sur Arte à 19 h 45. Je m'intéresse à l'actualité en France bien sûr mais aussi en Europe ! Hier, je suis rentré tard et j'ai regardé le journal de 20 heures sur France 2.
- Tu écoutes la radio aussi ?
- Oui ! Ce matin j'ai écouté l'interview du ministre de l'Économie au journal de 8 h sur France Inter."""

T[36] = """- Tu as regardé les infos hier soir ?
- Non, je lis la presse en ligne.
- Tu es abonnée à un journal ?
- Je reçois la newsletter de Ouest-France.
- Moi, je préfère le journal télévisé sur Arte.
- Hier, je suis rentré tard et j'ai regardé le journal de 20 heures sur France 2.
- Ce matin j'ai écouté la radio sur France Inter."""

T[37] = """- Tiens, regarde… j'ai acheté 3 magazines pour lire à la plage : l'Express pour l'actualité économique et politique, Elle pour la mode et Télérama pour l'actualité culturelle.
- Et tu n'as pas pris l'Équipe pour le sport ?
- Zut, j'ai oublié !"""

T[38] = """Bonjour à tous, vous êtes sur France Inter, il est 8 heures. Les titres du jour. Accident sur l'autoroute A7 : 30 blessés. Nouveau projet social du gouvernement contre la crise économique. L'épidémie de grippe. Neige sur les routes et enfin du football avec le match PSG-OM."""

T[39] = """Découvrez notre offre spéciale d'abonnement 100 % numérique à Tout Savoir : accès illimité au site et à l'appli avec plus de 40 contenus par semaine, la chaîne Tout Savoir TV en replay et en live 24h/24, des podcasts de nos journalistes ! Et en plus… 6 numéros numériques par an ! Profitez de notre offre spéciale jusqu'au 10 octobre, 88 % de réduction. 1 € par mois au lieu de 8,35 €."""

T[40] = """Voici le résultat de notre étude « Les Français et l'information sur Internet ». Les auteurs ont analysé les données de connexion de 2 372 personnes de plus de 18 ans sur 30 jours consécutifs. Les Français passent en moyenne 3 % de leur temps sur internet, sur des sources d'information en ligne, soit 4,9 minutes de connexion par jour. Les sources d'information les plus consultées sont la presse quotidienne régionale, l'actualité sportive et la presse quotidienne nationale."""

# Continue with E10+ — phrase banks and key exercise audios
T[41] = """- Dis-moi Pedro, qu'est-ce que tu fais jeudi ? Tu es libre ?
- Ben… pourquoi ?
- C'est le 14 Juillet et on ne travaille pas jeudi, tu sais ?
- Ah oui ! C'est le jour de votre fête nationale et Violette m'a invité à déjeuner avec sa famille !
- C'est super un déjeuner de famille !
- J'ai refusé son invitation…
- Alors, ça te dit de venir pique-niquer à la plage avec nous ?
- Merci, mais j'ai reçu une invitation de la mairie pour assister au défilé et au repas sur la place du village. J'ai accepté !
- Tu vas aller au feu d'artifice et au bal sur la place de la mairie ce soir ?
- Non, je ne suis pas invité.
- Mais tu n'as pas besoin d'invitation !
- Alors oui, j'adore danser !"""

T[44] = """- Ça te dit de venir manger à la maison dimanche prochain, le 10 ?
- C'est gentil, mais je ne suis pas libre.
- Et le dimanche d'après, le 17 ?
- Le 17, ça marche !
- Dis-moi, je suis invitée chez les Durand samedi. Qu'est-ce que je peux apporter ?
- Ils ont un jardin, tu pourrais apporter une plante…
- Tu veux venir voir une expo avec moi, samedi ?
- Bonne idée ! Je peux venir avec un ami ?
- Bien sûr, avec plaisir !
- Tu viens prendre un pot avec nous, ce soir ?
- Super ! On se retrouve où ?
- Tu es dispo pour un ciné mercredi ?
- Non, impossible ! J'ai rendez-vous avec mon père !
- Paul, seriez-vous disponible pour dîner à la maison, samedi prochain ?
- Je regrette / Je suis désolé, ce n'est pas possible. Une autre fois peut-être ?"""

T[46] = """- Merci, ce bouquet de tulipes est superbe, je vais le mettre dans un vase. Mais venez au salon… Nous allons prendre l'apéritif avant de passer à table."""

T[47] = """- Pierre, je suis invité chez des Français pour la première fois. Tu peux me donner des conseils ?
- D'accord, Tapio ! Alors, tu n'es pas obligé d'être à l'heure ! Tu peux arriver 15 minutes plus tard ! Et puis, tu peux garder tes chaussures dans l'appartement. N'oublie pas d'offrir un petit cadeau, des fleurs, des chocolats ou un souvenir de ton pays.
- J'aimerais bien apporter ma guitare et chanter des chansons."""

T[48] = """- Léa, tu viens au pique-nique samedi ?
- Non, désolée, je ne suis pas libre ce week-end.
- Dommage ! On se retrouve une autre fois."""

T[49] = """- Bonjour madame Dumas. Je suis désolé pour mon retard.
- Ce n'est pas grave. Entrez, nous allons commencer l'apéritif."""

T[50] = """- Salut Teresa, tu es allée au musée ce week-end ?
- Non, j'étais seule et je ne savais pas quoi faire.
- Tu connais MeetFriends ?
- Qu'est-ce que c'est ?
- C'est un site où tu peux t'inscrire pour rencontrer des personnes. Tu peux faire des randonnées, du sport, aller à des soirées, des conférences avec elles…
- Ah oui ! ça, c'est bien ! Je vais directement sur le site, c'est ça ?"""

T[53] = """- Tu veux rencontrer de nouvelles personnes ?
- Inscris-toi sur un site de rencontres d'activités.
- Tu peux y faire du sport, aller à des soirées…
- J'adore la salsa ! Je peux y aller avec Valérie !
- Au Café des langues, on y parle français et d'autres langues."""

T[54] = """- Il est super sympa, ton nouveau copain Léo ! Tu l'as rencontré où ?
- Sur une application. On a choisi un pseudo, puis on a commencé à discuter.
- Et maintenant vous sortez ensemble ?
- Oui, on y va souvent au cinéma."""

T[55] = """- Alors Chloé, peux-tu parler à nos auditeurs du Café des langues ?
- Bien sûr ! C'est un lieu où l'on peut rencontrer des gens et pratiquer des langues. On y vient pour discuter, autour d'un café. C'est gratuit et ouvert à tous."""

T[56] = """Y a un post de Valérie… Elle y va.
- J'adore la salsa ! Je peux y aller avec elle !"""

T[57] = """- Ça va, Théo ?
- Oui. Tu y penses encore, à cette soirée ?
- Oui, j'y pense. Et toi, tu y joues au foot ce week-end ?
- Non, elle n'y joue pas. Nous y partons pour Noël."""

# Save what we have and continue adding in the emitter via fallbacks
Path("/tmp/express-a2-gen/transcripts_partial.json").write_text(
    json.dumps({str(k): v for k, v in T.items()}, ensure_ascii=False, indent=2)
)
print(f"Saved {len(T)} transcripts")
print("Missing from E9-E10 sample:", [n for n in [4,1,5,6,7,8,12,9,13,14,15,16,20,17,21,22,23,24,28,25,29,30,31,32,36,33,37,38,39,40,44,41,46,47,48,49,53,50,54,55,56,57] if n not in T])
