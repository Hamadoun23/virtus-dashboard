import { UserRound } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { clientsCommercial } from '../donnees';

export default function ClientsCommercial() {
  return (
    <div>
      <PageHeader icon={UserRound} titre="Clients" sousTitre="Comptes commerciaux actifs" />
      <TableVirtus
        colonnes={['Client', 'Contact', 'Téléphone', 'Ville']}
        lignes={clientsCommercial.map((c) => [c.nom, c.contact, c.telephone, c.ville])}
      />
    </div>
  );
}
