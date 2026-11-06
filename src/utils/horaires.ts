import { horaires, horairesConfirmes, type Creneau } from "../data/restaurant";

export type StatutJour = {
  texte: string;
  ouvert: boolean | null;
};

function minutesDepuisMinuit(heure: string): number {
  const [h, m] = heure.split(":").map(Number);
  return h * 60 + m;
}

function estDansCreneau(maintenant: number, creneau: Creneau): boolean {
  return (
    maintenant >= minutesDepuisMinuit(creneau.ouverture) &&
    maintenant < minutesDepuisMinuit(creneau.fermeture)
  );
}

// Calcule un statut "ouvert / fermé" à partir des horaires renseignés.
// Si les horaires ne sont pas encore confirmés, renvoie une invitation à appeler
// plutôt qu'une information inventée.
export function statutDuJour(maintenant: Date = new Date()): StatutJour {
  if (!horairesConfirmes) {
    return { texte: "Horaires à confirmer — appelez-nous", ouvert: null };
  }

  const jourIndex = (maintenant.getDay() + 6) % 7; // 0 = lundi
  const jourDuJour = horaires[jourIndex];
  const minutesActuelles = maintenant.getHours() * 60 + maintenant.getMinutes();

  if (!jourDuJour?.creneaux) {
    return { texte: "Fermé aujourd'hui", ouvert: false };
  }

  const ouvert = jourDuJour.creneaux.some((c) => estDansCreneau(minutesActuelles, c));
  return {
    texte: ouvert ? "Ouvert actuellement" : "Fermé actuellement",
    ouvert,
  };
}
