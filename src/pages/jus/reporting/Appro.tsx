import { PackageOpen } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { reportingAppro } from '../donnees';

export default function Appro() {
  return (
    <div>
      <PageHeader icon={PackageOpen} titre="Reporting — Approvisionnement" sousTitre="Fournisseurs et délais" />
      <TableVirtus
        colonnes={['Fournisseur', 'Volume livré', 'Délai moyen']}
        lignes={reportingAppro.map((a) => [a.fournisseur, a.volumeLivre, a.delaiMoyen])}
      />
    </div>
  );
}
