import { Package } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { reportingEmballage } from '../donnees';

export default function Emballage() {
  return (
    <div>
      <PageHeader icon={Package} titre="Reporting — Emballage" sousTitre="Taux de casse et cadence" />
      <TableVirtus
        colonnes={['Format', 'Taux de casse', 'Cadence']}
        lignes={reportingEmballage.map((e) => [e.format, e.tauxCasse, e.cadence])}
      />
    </div>
  );
}
