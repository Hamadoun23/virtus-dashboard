import { UserRound } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { producteurs } from '../donnees';

export default function Producteurs() {
  return (
    <div>
      <PageHeader icon={UserRound} titre="Producteurs" sousTitre="Coopératives et producteurs partenaires" />
      <TableVirtus
        colonnes={['Nom', 'Zone', 'Volume mensuel']}
        lignes={producteurs.map((p) => [p.nom, p.zone, p.volumeMensuel])}
      />
    </div>
  );
}
