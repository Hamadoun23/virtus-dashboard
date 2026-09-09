import { Citrus } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../../components/ui/Table';
import { ventesCommercial } from '../donnees';

export default function Ventes() {
  return (
    <div>
      <PageHeader icon={Citrus} titre="Ventes" sousTitre="Toutes les ventes commerciales" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Montant', 'Statut']}
        lignes={ventesCommercial.map((v) => [
          v.id,
          v.client,
          v.montant,
          <Badge tone={v.statut === 'Payée' ? 'success' : 'warning'}>{v.statut}</Badge>,
        ])}
      />
    </div>
  );
}
