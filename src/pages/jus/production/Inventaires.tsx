import { ClipboardList } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../../components/ui/Table';
import { inventaires } from '../donnees';

export default function Inventaires() {
  return (
    <div>
      <PageHeader icon={ClipboardList} titre="Inventaires" sousTitre="Comptages physiques" />
      <TableVirtus
        colonnes={['Référence', 'Zone', 'Date', 'Écart']}
        lignes={inventaires.map((i) => [
          i.id,
          i.zone,
          i.date,
          <Badge tone={i.ecart === '0%' ? 'success' : 'warning'}>{i.ecart}</Badge>,
        ])}
      />
    </div>
  );
}
