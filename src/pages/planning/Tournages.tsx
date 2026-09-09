import { Video } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { tournagesListe } from './donnees';

const TONE = { Planifié: 'success', 'En retard': 'danger', 'À confirmer': 'warning' } as const;

export default function Tournages() {
  return (
    <div>
      <PageHeader icon={Video} titre="Tournages" sousTitre="Planifiés et à confirmer" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Date', 'Lieu', 'Statut']}
        lignes={tournagesListe.map((t) => [t.id, t.client, t.date, t.lieu, <Badge tone={TONE[t.statut]}>{t.statut}</Badge>])}
      />
    </div>
  );
}
