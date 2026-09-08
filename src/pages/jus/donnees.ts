export const ventesCommercial = [
  { id: 'V-512', client: 'Supermarché Azar', montant: '780 000 F', statut: 'Payée' as const },
  { id: 'V-513', client: 'Boutique Kanté', montant: '150 000 F', statut: 'En attente' as const },
  { id: 'V-514', client: 'Grossiste Sahel', montant: '1 200 000 F', statut: 'Payée' as const },
];

export const productionEtapes = [
  { etape: 'Cueillette', valeur: '2.4 t', tendance: '+8%' },
  { etape: 'Réception', valeur: '2.3 t', tendance: '+5%' },
  { etape: 'Production', valeur: '1 800 L', tendance: '+12%' },
  { etape: 'Conditionnement', valeur: '3 600 bouteilles', tendance: '+9%' },
];

export const tresorerie = [
  { id: 'T-01', libelle: 'Ventes commerciales', montant: '2 130 000 F', sens: 'Entrée' as const },
  { id: 'T-02', libelle: 'Achats matières premières', montant: '540 000 F', sens: 'Sortie' as const },
  { id: 'T-03', libelle: 'Salaires production', montant: '890 000 F', sens: 'Sortie' as const },
];

export const utilisateursDirection = [
  { nom: 'M. Koné', role: 'Directeur Jus d\'orange' },
  { nom: 'Fatou Konaté', role: 'Responsable commercial' },
  { nom: 'S. Coulibaly', role: 'Responsable production' },
];

export const reportingChaine = [
  { etape: 'Récolte', progression: 92 },
  { etape: 'Approvisionnement', progression: 78 },
  { etape: 'Fabrication', progression: 65 },
  { etape: 'Emballage', progression: 70 },
  { etape: 'Distribution', progression: 54 },
];
