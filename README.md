# Il Gabbiano — maquette de site vitrine

Maquette de démonstration pour le restaurant italien **Il Gabbiano**, à
Issy-les-Moulineaux. Site statique, sans backend ni base de données,
construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com).

⚠️ **Ceci n'est pas le site officiel du restaurant** — c'est une démo à
présenter au propriétaire. Le pied de page du site le rappelle.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est alors disponible sur `http://localhost:4321`.

Pour vérifier que tout compile avant de déployer :

```bash
npm run build
npm run preview
```

## Modifier le contenu

Tout le contenu modifiable est centralisé dans **`src/data/restaurant.ts`**.
Vous n'avez normalement pas besoin de toucher aux composants `.astro` pour
mettre à jour les informations du restaurant.

### Horaires

Dans `src/data/restaurant.ts` :

1. Passez `horairesConfirmes` à `true`.
2. Remplissez le tableau `horaires` avec les créneaux réels, par jour. Un
   jour fermé s'écrit `creneaux: null`. Exemple pour un lundi ouvert midi et
   soir :

   ```ts
   { jour: "Lundi", creneaux: [
       { ouverture: "12:00", fermeture: "14:30" },
       { ouverture: "19:00", fermeture: "22:30" },
     ] },
   ```

Tant que `horairesConfirmes` vaut `false`, le site n'invente aucun horaire :
il affiche "Horaires à confirmer — appelez-nous" dans le héros et les infos
pratiques, et aucune donnée d'horaires n'est ajoutée au JSON-LD (SEO).

### Avis clients

Le tableau `avis` dans `src/data/restaurant.ts` contient les citations
affichées dans la section « Avis ». Chaque avis a la forme :

```ts
{ texte: "…", auteur: "…", date: "…" }
```

N'ajoutez que des avis réellement publiés (Tripadvisor ou autre plateforme
équivalente), avec l'auteur et la date tels qu'affichés sur la plateforme
d'origine.

La note globale et le nombre d'avis se modifient dans l'objet
`restaurant.tripadvisor` (`note`, `noteMax`, `nombreAvis`, `classement`).

### Coordonnées, téléphone, Instagram

Toujours dans `src/data/restaurant.ts`, l'objet `restaurant` regroupe
l'adresse, le téléphone (`affichage` pour le texte visible, `lien` pour le
lien `tel:`), le lien Google Maps et `instagramUrl`. Si `instagramUrl` est
une chaîne vide (`""`), le lien Instagram du pied de page est automatiquement
masqué.

### Photos

Déposez vos images dans **`public/photos/`** avec ces noms de fichiers :

- `pizza.jpg`
- `pates.jpg`
- `salade.jpg`
- `tiramisu.jpg`

Dès qu'un fichier existe, il remplace automatiquement le fond de couleur
générique utilisé en attendant (voir `src/components/PhotoSlot.astro`).
Formats recommandés : `.jpg` ou `.webp`, environ 1600×1200 px, moins de
400 Ko pour rester rapide.

## Déployer

Le site est 100 % statique (dossier `dist/` généré par `npm run build`), il
se déploie donc en quelques clics sur Vercel ou Netlify.

### Vercel

1. Importez le dépôt GitHub sur [vercel.com/new](https://vercel.com/new).
2. Vercel détecte Astro automatiquement :
   - Build command : `npm run build`
   - Output directory : `dist`
3. Déployez. Chaque push sur la branche principale redéploie le site.

### Netlify

1. Importez le dépôt sur [app.netlify.com](https://app.netlify.com).
2. Configurez :
   - Build command : `npm run build`
   - Publish directory : `dist`
3. Déployez. Chaque push redéploie automatiquement.

Aucune variable d'environnement n'est nécessaire : le site n'a pas de
backend.

## Stack technique

- [Astro](https://astro.build) — génération de site statique
- [Tailwind CSS](https://tailwindcss.com) — styles utilitaires
- Aucune base de données, aucun formulaire de réservation en ligne : le
  bouton « Réserver » appelle simplement le restaurant.
