/** Données fictives pour tout le module Jus d'orange — même esprit que
 * `rh/donnees.ts` : le style et la structure sont réels, le contenu non. */

// --- Commercial -----------------------------------------------------------

export const ventesCommercial = [
  { id: 'V-512', client: 'Supermarché Azar', montant: '780 000 F', statut: 'Payée' as const },
  { id: 'V-513', client: 'Boutique Kanté', montant: '150 000 F', statut: 'En attente' as const },
  { id: 'V-514', client: 'Grossiste Sahel', montant: '1 200 000 F', statut: 'Payée' as const },
];

export const prospects = [
  { nom: 'Épicerie Diallo', secteur: 'Bamako, Badalabougou', statut: 'À contacter' as const },
  { nom: 'Restaurant Le Sahel', secteur: 'Bamako, ACI 2000', statut: 'Rendez-vous pris' as const },
  { nom: 'Supermarché Kita', secteur: 'Kita', statut: 'Devis envoyé' as const },
];

export const clientsCommercial = [
  { nom: 'Supermarché Azar', contact: 'M. Azar', telephone: '+223 76 00 00 01', ville: 'Bamako' },
  { nom: 'Boutique Kanté', contact: 'A. Kanté', telephone: '+223 76 00 00 02', ville: 'Ségou' },
  { nom: 'Grossiste Sahel', contact: 'O. Traoré', telephone: '+223 76 00 00 03', ville: 'Bamako' },
];

export const commandesCommercial = [
  { id: 'CMD-201', client: 'Supermarché Azar', articles: '200 bouteilles 1L', statut: 'En préparation' as const },
  { id: 'CMD-202', client: 'Grossiste Sahel', articles: '500 bouteilles 1L', statut: 'Expédiée' as const },
  { id: 'CMD-203', client: 'Boutique Kanté', articles: '80 bouteilles 33cl', statut: 'Livrée' as const },
];

export const facturesCommercial = [
  { id: 'FA-330', client: 'Supermarché Azar', montant: '780 000 F', echeance: '30 sept. 2024', statut: 'Payée' as const },
  { id: 'FA-331', client: 'Boutique Kanté', montant: '150 000 F', echeance: '10 oct. 2024', statut: 'En attente' as const },
];

export const paiementsCommercial = [
  { id: 'PAI-88', client: 'Supermarché Azar', montant: '780 000 F', mode: 'Virement', date: '28 sept. 2024' },
  { id: 'PAI-89', client: 'Grossiste Sahel', montant: '1 200 000 F', mode: 'Chèque', date: '25 sept. 2024' },
];

// --- Production -------------------------------------------------------------

export const productionEtapes = [
  { etape: 'Cueillette', valeur: '2.4 t', tendance: '+8%' },
  { etape: 'Réception', valeur: '2.3 t', tendance: '+5%' },
  { etape: 'Production', valeur: '1 800 L', tendance: '+12%' },
  { etape: 'Conditionnement', valeur: '3 600 bouteilles', tendance: '+9%' },
];

export const producteurs = [
  { nom: 'Coopérative Sikasso', zone: 'Sikasso', volumeMensuel: '1.2 t' },
  { nom: 'Coopérative Bougouni', zone: 'Bougouni', volumeMensuel: '0.8 t' },
  { nom: 'Producteur N. Coulibaly', zone: 'Koutiala', volumeMensuel: '0.4 t' },
];

export const cueillettes = [
  { id: 'CU-140', producteur: 'Coopérative Sikasso', quantite: '600 kg', date: '18 sept. 2024' },
  { id: 'CU-141', producteur: 'Coopérative Bougouni', quantite: '420 kg', date: '19 sept. 2024' },
];

export const articlesStock = [
  { article: 'Bouteille 1L vide', quantite: 8200, unite: 'unités' },
  { article: 'Bouchon', quantite: 15000, unite: 'unités' },
  { article: 'Étiquette', quantite: 12000, unite: 'unités' },
  { article: 'Carton x12', quantite: 640, unite: 'unités' },
];

export const receptions = [
  { id: 'RE-77', producteur: 'Coopérative Sikasso', quantite: '600 kg', qualite: 'A' as const },
  { id: 'RE-78', producteur: 'Coopérative Bougouni', quantite: '420 kg', qualite: 'B' as const },
];

export const productions = [
  { id: 'PR-55', lot: 'Lot 2024-09-A', volume: '900 L', date: '20 sept. 2024' },
  { id: 'PR-56', lot: 'Lot 2024-09-B', volume: '900 L', date: '21 sept. 2024' },
];

export const conditionnements = [
  { id: 'CO-30', lot: 'Lot 2024-09-A', format: '1L', quantite: 1800 },
  { id: 'CO-31', lot: 'Lot 2024-09-B', format: '33cl', quantite: 2700 },
];

export const bouteilles = [
  { format: '1L', enStock: 3200, seuil: 1000 },
  { format: '33cl', enStock: 4800, seuil: 1500 },
];

export const inventaires = [
  { id: 'INV-12', zone: 'Entrepôt principal', date: '15 sept. 2024', ecart: '0%' },
  { id: 'INV-11', zone: 'Entrepôt secondaire', date: '1 sept. 2024', ecart: '-2%' },
];

// --- Finance ------------------------------------------------------------

export const tresorerie = [
  { id: 'T-01', libelle: 'Ventes commerciales', montant: '2 130 000 F', sens: 'Entrée' as const },
  { id: 'T-02', libelle: 'Achats matières premières', montant: '540 000 F', sens: 'Sortie' as const },
  { id: 'T-03', libelle: 'Salaires production', montant: '890 000 F', sens: 'Sortie' as const },
];

// --- Direction ------------------------------------------------------------

export const utilisateursDirection = [
  { nom: 'M. Koné', role: 'Directeur Jus d\'orange' },
  { nom: 'Fatou Konaté', role: 'Responsable commercial' },
  { nom: 'S. Coulibaly', role: 'Responsable production' },
];

// --- Reporting --------------------------------------------------------------

export const reportingChaine = [
  { etape: 'Récolte', progression: 92 },
  { etape: 'Approvisionnement', progression: 78 },
  { etape: 'Fabrication', progression: 65 },
  { etape: 'Emballage', progression: 70 },
  { etape: 'Distribution', progression: 54 },
];

export const reportingRecolte = [
  { periode: 'Semaine 36', volume: '2.4 t', zone: 'Sikasso' },
  { periode: 'Semaine 35', volume: '2.1 t', zone: 'Bougouni' },
];

export const reportingAppro = [
  { fournisseur: 'Coopérative Sikasso', volumeLivre: '1.2 t', delaiMoyen: '2 j' },
  { fournisseur: 'Coopérative Bougouni', volumeLivre: '0.8 t', delaiMoyen: '3 j' },
];

export const reportingFabrication = [
  { lot: 'Lot 2024-09-A', rendement: '92%', volumeProduit: '900 L' },
  { lot: 'Lot 2024-09-B', rendement: '89%', volumeProduit: '900 L' },
];

export const reportingEmballage = [
  { format: '1L', tauxCasse: '1.2%', cadence: '600 u/h' },
  { format: '33cl', tauxCasse: '0.8%', cadence: '900 u/h' },
];

export const reportingEntrepot = [
  { zone: 'Entrepôt principal', occupation: '76%' },
  { zone: 'Entrepôt secondaire', occupation: '54%' },
];

export const reportingDistribution = [
  { destination: 'Bamako', volume: '2 400 bouteilles', delaiMoyen: '1 j' },
  { destination: 'Ségou', volume: '900 bouteilles', delaiMoyen: '2 j' },
];
