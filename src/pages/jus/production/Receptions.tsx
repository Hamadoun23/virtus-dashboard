import { PackageOpen } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../../components/ui/Table';
import { receptions } from '../donnees';

export default function Receptions() {
  return (
    <div>
      <PageHeader icon={PackageOpen} titre="Réceptions" sousTitre="Contrôle qualité à l'arrivée" />
      <TableVirtus
        colonnes={['Référence', 'Producteur', 'Quantité', 'Qualité']}
        lignes={receptions.map((r) => [
          r.id,
          r.producteur,
          r.quantite,
          <Badge tone={r.qualite === 'A' ? 'success' : 'warning'}>Qualité {r.qualite}</Badge>,
        ])}
      />
    </div>
  );
}
