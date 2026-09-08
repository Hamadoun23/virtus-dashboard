import { Users } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { TableVirtus } from '../../components/ui/Table';
import { clients } from './donnees';

export default function Clients() {
  return (
    <div>
      <PageHeader icon={Users} titre="Clients" sousTitre="Comptes suivis par Planning" />
      <TableVirtus colonnes={['Nom', 'Secteur', 'Contact']} lignes={clients.map((c) => [c.nom, c.secteur, c.contact])} />
    </div>
  );
}
