import { Package } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { conditionnements } from '../donnees';

export default function Conditionnements() {
  return (
    <div>
      <PageHeader icon={Package} titre="Conditionnements" sousTitre="Mise en bouteille par lot" />
      <TableVirtus
        colonnes={['Référence', 'Lot', 'Format', 'Quantité']}
        lignes={conditionnements.map((c) => [c.id, c.lot, c.format, c.quantite])}
      />
    </div>
  );
}
