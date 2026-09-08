/** Données fictives pour les écrans RH — même esprit que `virtus/donnees.ts`
 * du hub : le style est réel, le contenu ne l'est pas encore. */

export const soldeConges = { pris: 12, restant: 18, total: 30 };

export const demandesConges = [
  { id: 'C-241', periode: '12 → 16 sept. 2024', type: 'Congé annuel', statut: 'Approuvé' as const },
  { id: 'C-238', periode: '3 → 4 juil. 2024', type: 'Congé annuel', statut: 'Approuvé' as const },
  { id: 'C-252', periode: '2 → 3 oct. 2024', type: 'Congé annuel', statut: 'En attente' as const },
];

export const demandesPermission = [
  { id: 'P-118', date: '18 sept. 2024', motif: 'Rendez-vous médical', duree: '2h', statut: 'Approuvé' as const },
  { id: 'P-121', date: '25 sept. 2024', motif: 'Démarche administrative', duree: '3h', statut: 'En attente' as const },
];

export const retards = [
  { id: 'R-45', date: '20 sept. 2024', duree: '25 min', motif: 'Embouteillage', statut: 'Justifié' as const },
  { id: 'R-46', date: '27 sept. 2024', duree: '10 min', motif: 'Transport en commun', statut: 'En attente' as const },
];

export const demandesFinance = [
  { id: 'DF-88', objet: 'Remboursement transport', montant: '45 000 F', statut: 'Approuvé' as const },
  { id: 'DF-91', objet: 'Avance sur salaire', montant: '150 000 F', statut: 'En attente' as const },
];

export const aValiderRh = [
  { id: 'C-252', collaborateur: 'Awa Diarra', type: 'Congé annuel', depuis: '2 jours', urgent: false },
  { id: 'P-121', collaborateur: 'Boubacar Traoré', type: 'Permission', depuis: '4 heures', urgent: true },
  { id: 'DF-91', collaborateur: 'Fatou Konaté', type: 'Demande Finance', depuis: '1 jour', urgent: false },
];

export const historique = [
  { id: 'C-241', collaborateur: 'Hamadoun Cissé', type: 'Congé annuel', date: '12 sept. 2024', decision: 'Approuvé' as const },
  { id: 'R-40', collaborateur: 'Awa Diarra', type: 'Retard', date: '9 sept. 2024', decision: 'Justifié' as const },
  { id: 'DF-82', collaborateur: 'Boubacar Traoré', type: 'Demande Finance', date: '4 sept. 2024', decision: 'Refusé' as const },
];

export const departements = [
  { nom: 'Direction générale', effectif: 4, responsable: 'Y. H. Diallo' },
  { nom: 'RH & Finance', effectif: 6, responsable: 'Hamadoun Cissé' },
  { nom: 'Jus d\'orange', effectif: 22, responsable: 'M. Koné' },
  { nom: 'Chantiers', effectif: 15, responsable: 'S. Coulibaly' },
  { nom: 'Planning', effectif: 5, responsable: 'A. Diarra' },
];

export const annuaire = [
  { nom: 'Hamadoun Cissé', poste: 'Développeur', departement: 'RH & Finance', email: 'hcisse@gdamali.net' },
  { nom: 'Awa Diarra', poste: 'Chargée RH', departement: 'RH & Finance', email: 'a.diarra@gdamali.net' },
  { nom: 'Boubacar Traoré', poste: 'Chef de chantier', departement: 'Chantiers', email: 'b.traore@gdamali.net' },
  { nom: 'Fatou Konaté', poste: 'Commerciale', departement: "Jus d'orange", email: 'f.konate@gdamali.net' },
];
