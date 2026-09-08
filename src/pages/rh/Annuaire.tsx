import { Users } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { TableVirtus } from '../../components/ui/Table';
import { annuaire } from './donnees';

export default function Annuaire() {
  return (
    <div>
      <PageHeader icon={Users} titre="Annuaire" sousTitre="Coordonnées des collègues" />
      <TableVirtus
        colonnes={['Nom', 'Poste', 'Département', 'Email']}
        lignes={annuaire.map((a) => [a.nom, a.poste, a.departement, a.email])}
      />
    </div>
  );
}
