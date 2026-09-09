import { Sprout } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { reportingRecolte } from '../donnees';

export default function Recolte() {
  return (
    <div>
      <PageHeader icon={Sprout} titre="Reporting — Récolte" sousTitre="Volumes récoltés par période" />
      <TableVirtus
        colonnes={['Période', 'Volume', 'Zone']}
        lignes={reportingRecolte.map((r) => [r.periode, r.volume, r.zone])}
      />
    </div>
  );
}
