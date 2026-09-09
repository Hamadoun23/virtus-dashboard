export const clients = [
  { nom: 'Supermarché Azar', secteur: 'Distribution', contact: 'contact@azar.ml' },
  { nom: 'Banque Sahel', secteur: 'Finance', contact: 'com@banquesahel.ml' },
  { nom: 'Hôtel Wassa', secteur: 'Hôtellerie', contact: 'marketing@wassa.ml' },
];

export const idees = [
  { titre: 'Série "Portrait d\'agriculteur"', client: 'Jus d\'orange', statut: 'À tourner' as const },
  { titre: 'Campagne Ramadan', client: 'Supermarché Azar', statut: 'En idéation' as const },
  { titre: 'Interview client fidèle', client: 'Hôtel Wassa', statut: 'Validée' as const },
];

export type StatutTournage = 'planifie' | 'a_venir' | 'en_retard' | 'termine' | 'annule';
export type StatutPublication = 'planifiee' | 'a_venir' | 'en_retard' | 'publiee' | 'annulee';

export const tournages: { id: string; client: string; dateISO: string; lieu: string; statut: StatutTournage }[] = [
  { id: 'TR-10', client: 'Hôtel Wassa', dateISO: '2024-09-05', lieu: 'Bamako, ACI 2000', statut: 'termine' },
  { id: 'TR-11', client: 'Banque Sahel', dateISO: '2024-09-11', lieu: 'Bamako, Hippodrome', statut: 'termine' },
  { id: 'TR-12', client: 'Supermarché Azar', dateISO: '2024-09-24', lieu: 'Bamako, Hippodrome', statut: 'a_venir' },
  { id: 'TR-13', client: 'Banque Sahel', dateISO: '2024-09-19', lieu: 'Bamako, ACI 2000', statut: 'en_retard' },
  { id: 'TR-14', client: 'Hôtel Wassa', dateISO: '2024-10-02', lieu: 'Bamako, Sotuba', statut: 'planifie' },
];

export const publicationsCalendrier: {
  id: string;
  client: string;
  canal: string;
  dateISO: string;
  statut: StatutPublication;
  idee?: string;
}[] = [
  { id: 'PU-28', client: 'Hôtel Wassa', canal: 'Instagram', dateISO: '2024-09-08', statut: 'publiee' },
  { id: 'PU-29', client: 'Supermarché Azar', canal: 'Facebook', dateISO: '2024-09-14', statut: 'publiee' },
  { id: 'PU-30', client: 'Hôtel Wassa', canal: 'Instagram', dateISO: '2024-09-21', statut: 'publiee' },
  {
    id: 'PU-31',
    client: 'Supermarché Azar',
    canal: 'Facebook',
    dateISO: '2024-09-25',
    statut: 'a_venir',
    idee: 'Campagne Ramadan',
  },
  { id: 'PU-32', client: 'Banque Sahel', canal: 'LinkedIn', dateISO: '2024-09-18', statut: 'en_retard' },
];

// Vues "liste" (Tournages / Publications), format d'affichage direct.
export const tournagesListe = [
  { id: 'TR-12', client: 'Supermarché Azar', date: '24 sept. 2024', lieu: 'Bamako, Hippodrome', statut: 'Planifié' as const },
  { id: 'TR-13', client: 'Banque Sahel', date: '19 sept. 2024', lieu: 'Bamako, ACI 2000', statut: 'En retard' as const },
  { id: 'TR-14', client: 'Hôtel Wassa', date: '2 oct. 2024', lieu: 'Bamako, Sotuba', statut: 'À confirmer' as const },
];

export const publications = [
  { id: 'PU-30', client: 'Hôtel Wassa', canal: 'Instagram', date: '21 sept. 2024', statut: 'Publiée' as const },
  { id: 'PU-31', client: 'Supermarché Azar', canal: 'Facebook', date: '25 sept. 2024', statut: 'Planifiée' as const },
  { id: 'PU-32', client: 'Banque Sahel', canal: 'LinkedIn', date: '18 sept. 2024', statut: 'En retard' as const },
];
