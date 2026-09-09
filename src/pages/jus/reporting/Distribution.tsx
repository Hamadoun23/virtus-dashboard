import { FileText } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { reportingDistribution } from '../donnees';

export default function Distribution() {
  return (
    <div>
      <PageHeader icon={FileText} titre="Reporting — Distribution" sousTitre="Volumes livrés par destination" />
      <TableVirtus
        colonnes={['Destination', 'Volume', 'Délai moyen']}
        lignes={reportingDistribution.map((d) => [d.destination, d.volume, d.delaiMoyen])}
      />
    </div>
  );
}
