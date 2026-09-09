export const tachesParChantier: Record<
  string,
  { id: string; titre: string; responsable: string; echeance: string; statut: 'À faire' | 'En cours' | 'Terminée' }[]
> = {
  'CH-08': [
    { id: 'T-201', titre: 'Coulage dalle étage 1', responsable: 'Boubacar Traoré', echeance: '25 sept. 2024', statut: 'En cours' },
    { id: 'T-202', titre: 'Pose des huisseries', responsable: 'M. Sissoko', echeance: '2 oct. 2024', statut: 'À faire' },
    { id: 'T-203', titre: 'Terrassement accès', responsable: 'Boubacar Traoré', echeance: '10 sept. 2024', statut: 'Terminée' },
  ],
  'CH-09': [
    { id: 'T-210', titre: 'Fondations aile Nord', responsable: 'S. Coulibaly', echeance: '28 sept. 2024', statut: 'En cours' },
    { id: 'T-211', titre: 'Commande charpente métallique', responsable: 'S. Coulibaly', echeance: '5 oct. 2024', statut: 'À faire' },
  ],
  'CH-07': [
    { id: 'T-190', titre: 'Réception des travaux', responsable: 'Boubacar Traoré', echeance: '18 mai 2024', statut: 'Terminée' },
  ],
};

export const journalParChantier: Record<string, { date: string; auteur: string; note: string }[]> = {
  'CH-08': [
    { date: '20 sept. 2024', auteur: 'Boubacar Traoré', note: 'Livraison de ciment reçue, stockage abri Nord.' },
    { date: '18 sept. 2024', auteur: 'Boubacar Traoré', note: 'Contrôle qualité du gros œuvre — RAS.' },
    { date: '12 sept. 2024', auteur: 'M. Sissoko', note: 'Retard fournisseur menuiserie, nouveau délai communiqué.' },
  ],
  'CH-09': [
    { date: '19 sept. 2024', auteur: 'S. Coulibaly', note: 'Terrassement terminé sur la zone Sud.' },
  ],
  'CH-07': [
    { date: '20 mai 2024', auteur: 'Boubacar Traoré', note: 'Chantier réceptionné sans réserve.' },
  ],
};

export const equipeParChantier: Record<string, { nom: string; role: string }[]> = {
  'CH-08': [
    { nom: 'Boubacar Traoré', role: 'Chef de chantier' },
    { nom: 'M. Sissoko', role: 'Conducteur de travaux' },
    { nom: '4 ouvriers qualifiés', role: 'Équipe gros œuvre' },
  ],
  'CH-09': [
    { nom: 'S. Coulibaly', role: 'Chef de chantier' },
    { nom: '6 ouvriers qualifiés', role: 'Équipe fondations' },
  ],
  'CH-07': [{ nom: 'Boubacar Traoré', role: 'Chef de chantier' }],
};

export const meteoParChantier: Record<string, { jour: string; temp: string; condition: string }[]> = {
  'CH-08': [
    { jour: "Aujourd'hui", temp: '31°C', condition: 'Ensoleillé' },
    { jour: 'Demain', temp: '29°C', condition: 'Averses possibles' },
    { jour: 'Après-demain', temp: '30°C', condition: 'Nuageux' },
  ],
  'CH-09': [
    { jour: "Aujourd'hui", temp: '32°C', condition: 'Ensoleillé' },
    { jour: 'Demain', temp: '31°C', condition: 'Ensoleillé' },
    { jour: 'Après-demain', temp: '28°C', condition: 'Orageux' },
  ],
  'CH-07': [{ jour: "Aujourd'hui", temp: '30°C', condition: 'Ensoleillé' }],
};

export const chantiers = [
  {
    id: 'CH-08',
    nom: 'Résidence Sotuba',
    avancement: 65,
    statut: 'En cours' as const,
    client: 'Particulier — M. Sangaré',
    adresse: 'Sotuba, Bamako',
    chefDeChantier: 'Boubacar Traoré',
    dateDebut: '3 juin 2024',
    dateFinPrevue: '15 nov. 2024',
    etapes: [
      { nom: 'Fondations', avancement: 100 },
      { nom: 'Gros œuvre', avancement: 80 },
      { nom: 'Second œuvre', avancement: 40 },
      { nom: 'Finitions', avancement: 0 },
    ],
  },
  {
    id: 'CH-09',
    nom: 'Entrepôt ACI',
    avancement: 20,
    statut: 'En cours' as const,
    client: 'Sarl Distribution Mali',
    adresse: 'ACI 2000, Bamako',
    chefDeChantier: 'S. Coulibaly',
    dateDebut: '12 août 2024',
    dateFinPrevue: '30 janv. 2025',
    etapes: [
      { nom: 'Fondations', avancement: 60 },
      { nom: 'Gros œuvre', avancement: 10 },
      { nom: 'Second œuvre', avancement: 0 },
      { nom: 'Finitions', avancement: 0 },
    ],
  },
  {
    id: 'CH-07',
    nom: 'Villa Badalabougou',
    avancement: 100,
    statut: 'Terminé' as const,
    client: 'Particulier — Mme Keïta',
    adresse: 'Badalabougou, Bamako',
    chefDeChantier: 'Boubacar Traoré',
    dateDebut: '2 janv. 2024',
    dateFinPrevue: '20 mai 2024',
    etapes: [
      { nom: 'Fondations', avancement: 100 },
      { nom: 'Gros œuvre', avancement: 100 },
      { nom: 'Second œuvre', avancement: 100 },
      { nom: 'Finitions', avancement: 100 },
    ],
  },
];
