import { Video } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { tournages } from './donnees';

export default function Tournages() {
  return (
    <div>
      <PageHeader icon={Video} titre="Tournages" sousTitre="Planifiés et à confirmer" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Date', 'Lieu', 'Statut']}
        lignes={tournages.map((t) => [
          t.id,
          t.client,
          t.date,
          t.lieu,
          <Badge tone={t.statut === 'Planifié' ? 'success' : 'warning'}>{t.statut}</Badge>,
        ])}
      />
    </div>
  );
}
