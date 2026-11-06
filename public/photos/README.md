# Dossier photos

Photos du restaurant, avec ces noms de fichiers pour qu'elles soient utilisées automatiquement :

- `pizza.jpg` — une pizza
- `pates.jpg` — un plat de pâtes
- `salade.jpg` — une salade
- `tiramisu.jpg` — le tiramisu
- `maison.jpg` — photo d'ambiance utilisée dans la section « La maison »

Ces cinq fichiers sont déjà en place (photos fournies directement, recadrées
et compressées pour le web). Pour les remplacer par de nouvelles photos,
déposez simplement un fichier du même nom : il remplace automatiquement
l'ancien. S'il manque un fichier, le site affiche un fond de couleur élégant
à la place (voir `src/components/PhotoSlot.astro`). Aucune image n'est
inventée ni récupérée depuis Tripadvisor, Google ou Instagram.

Format recommandé : `.jpg` ou `.webp`, environ 1600×1200 px, poids inférieur à 400 Ko pour garder le site rapide.
