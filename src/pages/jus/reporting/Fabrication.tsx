import { FlaskConical } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { reportingFabrication } from '../donnees';

export default function Fabrication() {
  return (
    <div>
      <PageHeader icon={FlaskConical} titre="Reporting — Fabrication" sousTitre="Rendement par lot" />
      <TableVirtus
        colonnes={['Lot', 'Rendement', 'Volume produit']}
        lignes={reportingFabrication.map((f) => [f.lot, f.rendement, f.volumeProduit])}
      />
    </div>
  );
}
