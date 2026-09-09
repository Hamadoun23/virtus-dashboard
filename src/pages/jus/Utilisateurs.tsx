import { Users } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { TableVirtus } from '../../components/ui/Table';
import { utilisateursDirection } from './donnees';

export default function Utilisateurs() {
  return (
    <div>
      <PageHeader icon={Users} titre="Utilisateurs" sousTitre="Accès à l'application Jus d'orange" />
      <TableVirtus colonnes={['Nom', 'Rôle']} lignes={utilisateursDirection.map((u) => [u.nom, u.role])} />
    </div>
  );
}
