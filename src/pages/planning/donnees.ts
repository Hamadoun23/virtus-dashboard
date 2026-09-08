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

export const tournages = [
  { id: 'TR-12', client: 'Supermarché Azar', date: '24 sept. 2024', lieu: 'Bamako, Hippodrome', statut: 'Planifié' as const },
  { id: 'TR-13', client: 'Banque Sahel', date: '2 oct. 2024', lieu: 'Bamako, ACI 2000', statut: 'À confirmer' as const },
];

export const publications = [
  { id: 'PU-30', client: 'Hôtel Wassa', canal: 'Instagram', date: '21 sept. 2024', statut: 'Publiée' as const },
  { id: 'PU-31', client: 'Supermarché Azar', canal: 'Facebook', date: '25 sept. 2024', statut: 'Planifiée' as const },
];
