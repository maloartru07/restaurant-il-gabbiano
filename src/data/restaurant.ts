// Informations du restaurant. Modifiez ce fichier pour mettre à jour le site.
// Voir le README.md à la racine pour le mode d'emploi détaillé.

export const restaurant = {
  nom: "Il Gabbiano",
  cuisine: "Restaurant italien",
  accroche: "Trattoria de quartier à Issy-les-Moulineaux",
  adresse: {
    rue: "15 rue Maurice Hartmann",
    codePostal: "92130",
    ville: "Issy-les-Moulineaux",
    pays: "France",
  },
  telephone: {
    affichage: "01 46 45 72 30",
    lien: "+33146457230",
  },
  // Lien Google Maps vers l'adresse ci-dessus.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=15+rue+Maurice+Hartmann+92130+Issy-les-Moulineaux",
  tripadvisor: {
    note: 4.2,
    noteMax: 5,
    nombreAvis: 49,
    classement: "n°50 sur 221 restaurants à Issy-les-Moulineaux",
  },
  // Laissez vide ("") ou retirez l'URL pour masquer le bouton Instagram.
  instagramUrl: "",
};

// Horaires d'ouverture.
// IMPORTANT : ces horaires sont des exemples à remplacer. Tant que le
// restaurant ne les a pas confirmés, laissez `confirme: false` : le site
// affiche alors "Horaires à confirmer — merci d'appeler" au lieu d'inventer
// des créneaux. Dès que vous avez les vraies informations, renseignez les
// créneaux ci-dessous et passez `confirme` à `true`.
export const horairesConfirmes = false;

export type Creneau = { ouverture: string; fermeture: string };
export type HorairesJour = { jour: string; creneaux: Creneau[] | null };

// `creneaux: null` signifie fermé ce jour-là.
// Exemple de structure une fois confirmée :
// { jour: "Lundi", creneaux: [{ ouverture: "12:00", fermeture: "14:30" }, { ouverture: "19:00", fermeture: "22:30" }] }
export const horaires: HorairesJour[] = [
  { jour: "Lundi", creneaux: null },
  { jour: "Mardi", creneaux: null },
  { jour: "Mercredi", creneaux: null },
  { jour: "Jeudi", creneaux: null },
  { jour: "Vendredi", creneaux: null },
  { jour: "Samedi", creneaux: null },
  { jour: "Dimanche", creneaux: null },
];

export type Avis = {
  texte: string;
  auteur: string;
  date: string;
};

// Avis réels publiés sur Tripadvisor. Ne pas en inventer d'autres.
export const avis: Avis[] = [
  {
    texte: "Très bon restaurant italien. Je recommande vivement.",
    auteur: "NorthStar622618",
    date: "mars 2026",
  },
  {
    texte:
      "Endroit très sympathique, bien placé. Accueil, service et plats parfaits.",
    auteur: "Calimero9194",
    date: "février 2026",
  },
  {
    texte:
      "Nous adorons ce petit restau qui ne paye pas de mine mais… les pizzas sont excellentes, on est servi très rapidement, et Laura est charmante !",
    auteur: "Elisabeth L",
    date: "mars 2024",
  },
  {
    texte:
      "Un excellent italien ! […] Il n'y a pas que des pizzas, par ailleurs top (pâte, produits dont la sauce tomate…) ! Les pâtes par exemple et son « trio ». Desserts traditionnels et faits maison.",
    auteur: "Eric C",
    date: "janvier 2023",
  },
  {
    texte:
      "Les salades sont excellentes, notamment la paysanne et la campagnarde !",
    auteur: "alain b",
    date: "octobre 2020",
  },
  {
    texte:
      "Les pizzas sont parfaites. La pâte à pizza est parfaite et les pizzas sont excellentes et bien garnies.",
    auteur: "Ben",
    date: "septembre 2020",
  },
];

export const services = [
  "Déjeuner",
  "Dîner",
  "Service à table",
  "Plats à emporter",
  "Terrasse",
];
