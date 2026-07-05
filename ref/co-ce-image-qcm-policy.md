# Politique QCM image CE / CO

_Mis à jour — juillet 2026_

## Images générées

- **Horloges** : `public/assets/words/img/horloge-HHhMM.webp` (SVG programmatique → WebP)
- **Prix** : `public/assets/words/img/prix-<montant>-<eur|fr|chf>[-ht].webp`
- Index : `lib/curriculum/content/communication/word-image-index.ts` (régénérer via `node scripts/generate-word-image-index.cjs`)

Commandes :

```bash
node scripts/generate-clock-price-images.cjs
node scripts/generate-word-image-index.cjs
```

## Forme « QCM image » conservée uniquement si

Les 3 réponses passent `isImageableLabel()` dans `lib/curriculum/word-image-resolver.ts` :

| Type | Exemple | Décision |
|------|---------|----------|
| Heure unique | `9 h`, `Midi`, `À 8 h 30` | ✅ horloge générée |
| Prix unique | `5 €`, `30 € HT` | ✅ étiquette prix générée |
| Objet concret | `Le bus`, `Un appareil photo`, `La marche` | ✅ image vocab/lecture |

## Types retirés du QCM image

| Type | Exemples |
|------|----------|
| Prénoms / noms | Isabelle, Hugo, Rose (seul), Depardieu |
| Villes / pays | Strasbourg, Allemagne, Bruxelles |
| Adresses | Rue des Peupliers, Chez Laëtitia |
| Nombres / quantités | 2 jours, 4 personnes, 16 mars, 03 88… |
| Pourcentages | 20 %, -30 % |
| Plages horaires | 8 h – 11 h, 11h-14h |
| Plages de prix | 20-30 €, 100+ € |
| Jours (réponse calendaire) | Jeudi, Vendredi |
| Phrases / labels mixtes | Oui, 1 €, Euro 2002, Francs-Moisins |
| Établissements (nom propre) | Le Mambo, Le Giovanni, Formule + |

## Statistiques CO (pool)

- Questions avec QCM image possible : **133 / 950**
- Questions sans forme image (texte + saisie seulement) : **817 / 950**

## CE

Les 5 QCM image CE (objets / lieux) restent inchangés — toutes les options sont illustrables.
