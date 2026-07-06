# Analyse des réponses « QCM image » (CO)

_Généré par `scripts/analyze-image-answers.cjs` — 2026-07-06_

Index d'images utilisé : **pool câblé uniquement** (910 slugs).

Questions CO à image analysées : **950** · libellés distincts : **1884**

## Catégories de libellés (distincts)

| Catégorie | Nb | Décision | Exemples |
| --- | --- | --- | --- |
| time | 101 | → horloge (garder) | 12 h, 12 h 15, 12 h 30, 8 h 56, 9 h, 15 h, 14 h, 16 h, 18 h, 17 h, 13 h, 19 h |
| price | 59 | → image prix (garder) | 5 €, 7 €, 7,50 €, 123 €, 223 €, 323 €, 30 €, 40 €, 50 €, 15 €, 20 €, 25 € |
| object | 223 | garder (image) | Rose, Jeudi, Vendredi, Samedi, Bus, Train, Restaurant, Piscine, Cinéma, Maillot, Appareil photo, Allemagne |
| percent | 18 | RETIRER | 20 %, 30 %, 50 %, -30 %, -40 %, -50 %, 25 %, 40 %, 70 %, 15 %, 10 %, 12 % |
| number | 244 | RETIRER | 2 jours, 4 jours, 7 jours, 2, 3, 4, 1, 16 mars, 26 mars, 6 avril, 03 88..., 04 78... |
| other | 1239 | RETIRER | Isabelle, Laëtitia, Le Mambo, Le Giovanni, Le Bolide, Tramway, Rue des Peupliers, Rue des Guerriers-Samouraïs, Rue des Clochottes, Davy, Geneviève, Chez Laëtitia |

## Décision par question

- Questions gardant la forme image (3 options illustrables) : **163**
- Questions perdant la forme image : **787**

Raisons de retrait (types non illustrables présents) :
- other : 626
- number : 123
- percent : 21
- number+other : 6
- time : 3
- other+price : 3
- price : 2
- other+time : 1
- other+percent : 1
- number+time : 1

## Temps — horloges générées (89) ; ignorés / plages horaires (12)

**Générés :** 1 h · 1 h 30 · 10 h · 10 h 15 · 10 h 30 · 10h · 10h30 · 11 h · 11 h 20 · 11 h 45 · 11h · 11h15 · 11h25 · 11h55 · 12 h · 12 h 10 · 12 h 15 · 12 h 30 · 12h · 12h02 · 12h15 · 13 h · 13h · 13h12 · 13h30 · 13h45 · 14 h · 14 h 20 · 14h · 14h15 · 15 h · 15 h 05 · 15 h 30 · 15h · 15h30 · 15h50 · 16 h · 16 h 40 · 16h · 16h30 · 17 h · 17h · 17h30 · 18 h · 18h · 18h30 · 19 h · 19h · 19h30 · 2 h · 20 h · 20h · 20h30 · 21 h · 21h · 22h · 22h30 · 23 h · 23h · 5 h · 7 h 30 · 7h · 7h25 · 8 h · 8 h 56 · 8h · 9 h · 9h · 9h25 · 9h30 · Midi · À 10 h · À 11 h · À 12 h 30 · À 13 h · À 14 h · À 15 h · À 16 h · À 17 h 30 · À 18 h · À 19 h · À 20 h · À 20 h 30 · À 21 h · À 7 h · À 8 h · À 8 h 30 · À 9 h · À 9 h 30

**Ignorés (plages, format non horaire) → forme image retirée :** 11h-14h · 13h-16h · 13h-18h · 15h-18h · 1h42-2h16 · 6 h 30 – 9 h 30 · 7 h – 10 h · 8 h 30 – 18 h 30 · 8 h – 11 h · 8 h – 20 h · 8h-19h · 9 h – 19 h

## Prix — images générées (49) ; ignorés (10)

**Générés :** 1 euro · 1 € · 10 € · 10,50 € · 100 € · 12 € · 123 € · 14 € · 15 € · 150 € · 16 € · 17 € · 19 € · 199 € · 2 € · 2,50 € · 20 € · 200 € · 2000 € · 223 € · 25 € · 28 € · 29 € · 299 € · 3 € · 3,50 € · 30 € · 30 € HT · 32 € · 323 € · 35 € · 38 € · 39 € · 40 € · 45 € · 45 € HT · 48 € HT · 499 € · 5 € · 5,50 € · 50 € · 500 € · 59 € · 60 € · 7 € · 7,50 € · 8 € · 89 € · 9 €

**Ignorés (plages, faux positifs comme « Euro 2002 », « Francs-Moisins », « Oui, 1 € ») → forme image retirée :** 100+ € · 20-30 € · 200-300 € · 5-10 € · 50-100 € · 500-600 € · Euro 2002 · Francs-Moisins · Oui, 1 € · Oui, 5 €
