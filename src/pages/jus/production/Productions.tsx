import { FlaskConical } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { productions } from '../donnees';

export default function Productions() {
  return (
    <div>
      <PageHeader icon={FlaskConical} titre="Productions" sousTitre="Lots de fabrication" />
      <TableVirtus
        colonnes={['Référence', 'Lot', 'Volume', 'Date']}
        lignes={productions.map((p) => [p.id, p.lot, p.volume, p.date])}
      />
    </div>
  );
}
