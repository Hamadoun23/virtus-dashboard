import { Lightbulb } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { idees } from './donnees';

const TONE = { 'À tourner': 'warning', 'En idéation': 'neutral', Validée: 'success' } as const;

export default function IdeesContenu() {
  return (
    <div>
      <PageHeader icon={Lightbulb} titre="Idées de contenu" sousTitre="Ce qui se prépare pour vos clients" />
      <TableVirtus
        colonnes={['Idée', 'Client', 'Statut']}
        lignes={idees.map((i) => [i.titre, i.client, <Badge tone={TONE[i.statut]}>{i.statut}</Badge>])}
      />
    </div>
  );
}
