# Overrides de contenu (mode édition admin)

Les fichiers JSON dans `data/` sont produits par le mode édition en ligne
(compte **admin** uniquement). Ils sont commités via l'API GitHub lorsque
`CONTENT_GITHUB_TOKEN` est configuré, et/ou stockés dans Supabase
(`curriculum_content_overrides`).

Format d'un fichier :

```json
{
  "key": "vocab:theme:famille",
  "domain": "vocab",
  "label": "Vocabulaire — famille",
  "payload": { "...": "document curriculum complet" },
  "updatedAt": "2026-07-12T00:00:00.000Z",
  "updatedBy": null,
  "gitPath": "lib/curriculum/content/overrides/data/vocab__theme__famille.json"
}
```

Au runtime, ces overrides remplacent le contenu TypeScript de base
(lecture, vocabulaire, grammaire, maths…).
