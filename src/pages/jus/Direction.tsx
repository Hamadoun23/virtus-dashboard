import { Citrus } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { TableVirtus } from '../../components/ui/Table';
import { utilisateursDirection } from './donnees';

export default function Direction() {
  return (
    <div>
      <PageHeader icon={Citrus} titre="Jus d'orange — Direction" sousTitre="Vue d'ensemble et utilisateurs" />
      <TableVirtus colonnes={['Nom', 'Rôle']} lignes={utilisateursDirection.map((u) => [u.nom, u.role])} />
    </div>
  );
}
