import { Building2 } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { TableVirtus } from '../../components/ui/Table';
import { departements } from './donnees';

export default function Organisation() {
  return (
    <div>
      <PageHeader icon={Building2} titre="Organisation" sousTitre="Répartir les agents par département" />
      <TableVirtus
        colonnes={['Département', 'Effectif', 'Responsable']}
        lignes={departements.map((d) => [d.nom, `${d.effectif} agents`, d.responsable])}
      />
    </div>
  );
}
