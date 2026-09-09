import { Megaphone } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { publications } from './donnees';

export default function Publications() {
  return (
    <div>
      <PageHeader icon={Megaphone} titre="Publications" sousTitre="Ce qui est publié ou programmé" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Canal', 'Date', 'Statut']}
        lignes={publications.map((p) => [
          p.id,
          p.client,
          p.canal,
          p.date,
          <Badge tone={p.statut === 'Publiée' ? 'success' : p.statut === 'En retard' ? 'danger' : 'warning'}>
            {p.statut}
          </Badge>,
        ])}
      />
    </div>
  );
}
