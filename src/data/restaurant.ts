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
  google: {
    note: 4.5,
    noteMax: 5,
    nombreAvis: 277,
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

// Avis réels publiés sur Google. Sélection des avis les plus récents et les
// mieux notés parmi ceux fournis par le restaurant (277 avis au total,
// moyenne 4,5/5 sur Google). Ne pas en inventer d'autres.
export const avisGoogle: Avis[] = [
  {
    texte: "Très bonne pizza et une équipe très agréable.",
    auteur: "David Billot",
    date: "juin 2026",
  },
  {
    texte:
      "Meilleure pizza italienne de la région parisienne. Le chef est très gentil et la dame à l'accueil très accueillante. Ambiance conviviale et chaleureuse. Je recommande fortement !",
    auteur: "Yh Hv",
    date: "mai 2026",
  },
  {
    texte:
      "J'ai mangé une tagliatelle quatre fromages extraordinaire, les pizzas et la gentillesse de la serveuse inégalée, un patron tout souriant et toujours là pour vous rendre service […]",
    auteur: "Panos Fytrakis",
    date: "avril 2026",
  },
  {
    texte:
      "Top, le chef est vraiment gentil, un plaisir d'avoir pu discuter avec lui et les plats sont délicieux.",
    auteur: "Julien Jacquemet",
    date: "mars 2026",
  },
  {
    texte:
      "Un restaurant de quartier magnifique. Nous avons très bien mangé et le personnel était vraiment adorable.",
    auteur: "peg peg",
    date: "janvier 2026",
  },
  {
    texte:
      "Une ambiance chaleureuse, de vrais italiens à la cuisine, des gens souriants et disponibles ! Un vrai italien comme on les aime ! C'est le meilleur resto italien du coin que ce soit pour les pizzas ou pour les pâtes […]",
    auteur: "Charles Boone",
    date: "janvier 2026",
  },
];

export const services = [
  "Déjeuner",
  "Dîner",
  "Service à table",
  "Plats à emporter",
  "Terrasse",
];

// Carte transcrite depuis les photos de la carte papier du restaurant.
// Pas de prix à l'affichage, sauf la formule du midi (son prix est sa
// caractéristique même). Ne pas ajouter de plats qui ne figurent pas sur
// les photos fournies.

export type Formule = {
  nom: string;
  prix: string;
  categories: { titre: string; plats: string[] }[];
};

export const formuleMidi: Formule = {
  nom: "Formule du midi",
  prix: "18,00 €",
  categories: [
    { titre: "Entrée", plats: ["Œuf mayonnaise", "Salade mixte", "Pâté de campagne"] },
    {
      titre: "Plat",
      plats: ["Viandes du jour", "Tagliatelles boscaiola", "Penne gratiné au four"],
    },
    { titre: "Dessert", plats: ["Dessert du jour", "Salade de fruits"] },
  ],
};

export type CategorieCarte = { titre: string; plats: string[] };

export const carte: CategorieCarte[] = [
  {
    titre: "Hors-d'œuvre & salades",
    plats: [
      "Chèvre chaud sur salade",
      "Salade rafraîchissante",
      "Salade caprese",
      "Salade campagnarde",
      "Salade Il Gabbiano",
      "Salade norvégienne",
      "Avocat vinaigrette",
      "Avocat aux crevettes",
      "Salade César",
    ],
  },
  {
    titre: "Entrées",
    plats: ["Escargots farcis", "Moules farcies"],
  },
  {
    titre: "Charcuteries",
    plats: ["Jambon de Parme", "Carpaccio de bœuf"],
  },
  {
    titre: "Poissons",
    plats: ["Gambas grillées", "Gambas provençale", "Gambas Il Gabbiano"],
  },
  {
    titre: "Viandes",
    plats: [
      "Escalope milanaise",
      "Escalope à la crème",
      "Escalope au citron",
      "Escalope gorgonzola",
      "Escalope marsala",
      "Escalope bolognaise gratinée au four",
      "Escalope saltimbocca",
      "Escalope fiorentina",
    ],
  },
  {
    titre: "Pizzas",
    plats: [
      "Margherita",
      "Napolitaine",
      "Reine",
      "Capri",
      "Campione",
      "Orientale",
      "Paysanne",
      "Quatre fromages",
      "Quatre saisons",
      "Parma",
      "Norvégienne",
      "Végétarienne",
      "Il Gabbiano",
    ],
  },
  {
    titre: "Nos fromages",
    plats: ["Chèvre", "Mozzarella", "Gorgonzola", "Assiette de fromages"],
  },
  {
    titre: "Apéritifs",
    plats: ["Ricard", "Pastis", "Americano"],
  },
];
