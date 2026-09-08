import { HardHat } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Badge, TableVirtus } from '../components/ui/Table';

const chantiers = [
  { id: 'CH-08', nom: 'Résidence Sotuba', avancement: '65%', statut: 'En cours' as const },
  { id: 'CH-09', nom: 'Entrepôt ACI', avancement: '20%', statut: 'En cours' as const },
  { id: 'CH-07', nom: 'Villa Badalabougou', avancement: '100%', statut: 'Terminé' as const },
];

export default function Chantiers() {
  return (
    <div>
      <PageHeader icon={HardHat} titre="Chantiers" sousTitre="Suivi de chantier" />
      <TableVirtus
        colonnes={['Référence', 'Chantier', 'Avancement', 'Statut']}
        lignes={chantiers.map((c) => [
          c.id,
          c.nom,
          c.avancement,
          <Badge tone={c.statut === 'Terminé' ? 'success' : 'warning'}>{c.statut}</Badge>,
        ])}
      />
    </div>
  );
}
