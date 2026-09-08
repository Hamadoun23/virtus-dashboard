import { FileText } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { historique } from './donnees';

const TONE = { Approuvé: 'success', Justifié: 'success', Refusé: 'danger' } as const;

export default function Historique() {
  return (
    <div>
      <PageHeader icon={FileText} titre="Historique" sousTitre="Tout ce qui a été demandé et décidé" />
      <TableVirtus
        colonnes={['Référence', 'Collaborateur', 'Type', 'Date', 'Décision']}
        lignes={historique.map((h) => [
          h.id,
          h.collaborateur,
          h.type,
          h.date,
          <Badge tone={TONE[h.decision]}>{h.decision}</Badge>,
        ])}
      />
    </div>
  );
}
