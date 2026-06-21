export type FormField = {
  id: string;
  label: string;
  type?: "text" | "date" | "email" | "tel";
  options?: string[];
  wide?: boolean;
};

export type FormTemplate = {
  id: string;
  situation: string;
  organization: string;
  title: string;
  fields: FormField[];
};

const IDENTITY: FormField[] = [
  { id: "nom", label: "Nom" },
  { id: "prenom", label: "Prénom" },
  { id: "naissance", label: "Date de naissance", type: "date" },
  { id: "nationalite", label: "Nationalité" },
];

const CONTACT: FormField[] = [
  { id: "adresse", label: "Adresse (rue et numéro)", wide: true },
  { id: "npa", label: "NPA" },
  { id: "localite", label: "Localité" },
  { id: "telephone", label: "Téléphone", type: "tel" },
  { id: "courriel", label: "Courriel", type: "email" },
];

export const SWISS_FORM_TEMPLATES: FormTemplate[] = [
  {
    id: "hes-so",
    situation: "Vous souhaitez suivre une formation à la HES-SO Valais-Wallis. Remplissez la demande d'inscription avec des informations fictives.",
    organization: "HES-SO Valais-Wallis",
    title: "Demande d'inscription",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "formation", label: "Formation souhaitée", wide: true },
      { id: "diplome", label: "Dernier diplôme obtenu", wide: true },
      { id: "rentree", label: "Rentrée souhaitée", options: ["Août", "Février"] },
    ],
  },
  {
    id: "ecole-langues",
    situation: "Vous habitez à Lausanne et vous voulez vous inscrire dans une école de langues. Remplissez la fiche d'inscription.",
    organization: "Centre de langues Léman",
    title: "Fiche d'inscription",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "langues", label: "Langue(s) déjà parlée(s)", wide: true },
      { id: "langue-apprendre", label: "Langue que vous voulez apprendre", wide: true },
      { id: "niveau", label: "Niveau actuel", options: ["Débutant", "A1", "A2", "B1", "B2"] },
      { id: "horaire", label: "Horaire préféré", options: ["Matin", "Après-midi", "Soir"] },
    ],
  },
  {
    id: "theatre",
    situation: "Vous habitez à Sion et vous voulez suivre un cours de théâtre. Remplissez la fiche d'inscription.",
    organization: "Atelier Théâtre de Sion",
    title: "Inscription au cours",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "jour", label: "Jour de cours souhaité", options: ["Lundi", "Mercredi", "Jeudi", "Samedi"] },
      { id: "experience", label: "Avez-vous déjà fait du théâtre ?", options: ["Oui", "Non"] },
      { id: "annees", label: "Nombre d'années de pratique" },
      { id: "motivation", label: "Votre motivation", wide: true },
    ],
  },
  {
    id: "sport",
    situation: "Vous souhaitez pratiquer un sport dans un centre sportif de Martigny. Remplissez le formulaire.",
    organization: "Centre sportif de Martigny",
    title: "Demande d'adhésion",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "activite", label: "Activité souhaitée", options: ["Fitness", "Natation", "Football", "Yoga", "Badminton"] },
      { id: "disponibilites", label: "Deux jours où vous êtes disponible", wide: true },
      { id: "urgence", label: "Personne à contacter en cas d'urgence", wide: true },
      { id: "medical", label: "Information médicale importante", wide: true },
    ],
  },
  {
    id: "hotel",
    situation: "Vous arrivez dans un hôtel à Zermatt. Remplissez la fiche d'arrivée avec des informations fictives.",
    organization: "Hôtel des Alpes — Zermatt",
    title: "Fiche d'arrivée",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "document", label: "Numéro de passeport ou carte d'identité", wide: true },
      { id: "arrivee", label: "Date d'arrivée", type: "date" },
      { id: "nuits", label: "Nombre de nuits" },
      { id: "personnes", label: "Nombre de personnes" },
      { id: "langues", label: "Langue(s) parlée(s)", wide: true },
    ],
  },
  {
    id: "cff",
    situation: "Vous utilisez régulièrement le train en Suisse et souhaitez acheter un abonnement. Remplissez la demande SwissPass.",
    organization: "CFF — SwissPass",
    title: "Demande d'abonnement",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "domicile", label: "Gare de départ habituelle" },
      { id: "destination", label: "Destination habituelle" },
      { id: "abonnement", label: "Abonnement souhaité", options: ["Demi-tarif", "AG 2e classe", "AG 1re classe", "Abonnement de parcours"] },
      { id: "debut", label: "Date de début", type: "date" },
    ],
  },
  {
    id: "bibliotheque",
    situation: "Vous voulez emprunter des livres à la bibliothèque de votre commune. Remplissez la demande de carte.",
    organization: "Bibliothèque municipale",
    title: "Demande de carte de lecteur",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "commune", label: "Commune de domicile" },
      { id: "lecture", label: "Types de livres préférés", wide: true },
      { id: "langue-livres", label: "Langue(s) de lecture", wide: true },
      { id: "reglement", label: "J'accepte le règlement", options: ["Oui", "Non"] },
    ],
  },
  {
    id: "location-appartement",
    situation: "Vous cherchez un appartement à Fribourg. Remplissez le formulaire de candidature avec des informations fictives.",
    organization: "Régie du Centre",
    title: "Candidature pour un logement",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "profession", label: "Profession" },
      { id: "employeur", label: "Employeur", wide: true },
      { id: "revenu", label: "Revenu mensuel brut" },
      { id: "personnes", label: "Nombre de personnes dans le logement" },
      { id: "entree", label: "Date d'entrée souhaitée", type: "date" },
      { id: "animaux", label: "Avez-vous un animal ?", options: ["Oui", "Non"] },
    ],
  },
  {
    id: "assurance-menage",
    situation: "Vous avez emménagé dans un nouveau logement en Suisse et souhaitez l'assurer. Remplissez la proposition d'assurance.",
    organization: "Assurance Helvétia Habitat",
    title: "Assurance ménage",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "profession", label: "Profession" },
      { id: "surface", label: "Surface du logement en m²" },
      { id: "pieces", label: "Nombre de pièces" },
      { id: "habitants", label: "Nombre de personnes au domicile" },
      { id: "debut", label: "Début de l'assurance", type: "date" },
    ],
  },
  {
    id: "location-voiture",
    situation: "Vous souhaitez louer une voiture à Genève. Remplissez la demande de réservation avec des informations fictives.",
    organization: "Mobilité Genève",
    title: "Location de véhicule",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "permis", label: "Numéro du permis de conduire", wide: true },
      { id: "depart", label: "Date de départ", type: "date" },
      { id: "retour", label: "Date de retour", type: "date" },
      { id: "vehicule", label: "Catégorie de véhicule", options: ["Citadine", "Break", "Familiale", "Utilitaire"] },
      { id: "conducteur", label: "Deuxième conducteur", options: ["Oui", "Non"] },
    ],
  },
  {
    id: "adoption-animal",
    situation: "Vous souhaitez adopter un animal dans un refuge valaisan. Remplissez le questionnaire de candidature.",
    organization: "Refuge des animaux du Valais",
    title: "Formulaire d'adoption",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "animal", label: "Animal souhaité", options: ["Chat", "Chien", "Autre"] },
      { id: "logement", label: "Type de logement", options: ["Appartement", "Maison"] },
      { id: "jardin", label: "Avez-vous un jardin ?", options: ["Oui", "Non"] },
      { id: "experience", label: "Avez-vous déjà eu un animal ?", options: ["Oui", "Non"] },
      { id: "motivation", label: "Pourquoi souhaitez-vous adopter ?", wide: true },
    ],
  },
  {
    id: "benevolat",
    situation: "Vous souhaitez aider lors d'une manifestation culturelle à Neuchâtel. Remplissez la fiche de bénévolat.",
    organization: "Festival culturel de Neuchâtel",
    title: "Inscription bénévole",
    fields: [
      ...IDENTITY, ...CONTACT,
      { id: "langues", label: "Langue(s) parlée(s)", wide: true },
      { id: "mission", label: "Mission souhaitée", options: ["Accueil", "Billetterie", "Montage", "Restauration", "Information"] },
      { id: "disponibilites", label: "Dates et horaires disponibles", wide: true },
      { id: "experience", label: "Expérience de bénévolat", wide: true },
    ],
  },
];

export function randomFormTemplates(count = 5): FormTemplate[] {
  const shuffled = [...SWISS_FORM_TEMPLATES];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target]!, shuffled[index]!];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
