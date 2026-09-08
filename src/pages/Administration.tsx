import { Building2 } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Badge, TableVirtus } from '../components/ui/Table';

const comptes = [
  { nom: 'Hamadoun Cissé', email: 'hcisse@gdamali.net', role: 'Super administrateur', statut: 'Actif' as const },
  { nom: 'Awa Diarra', email: 'a.diarra@gdamali.net', role: 'RH', statut: 'Actif' as const },
  { nom: 'M. Koné', email: 'm.kone@gdamali.net', role: 'Direction', statut: 'Actif' as const },
];

export default function Administration() {
  return (
    <div>
      <PageHeader icon={Building2} titre="Administration" sousTitre="Comptes et habilitations" />
      <TableVirtus
        colonnes={['Nom', 'Email', 'Rôle', 'Statut']}
        lignes={comptes.map((c) => [c.nom, c.email, c.role, <Badge tone="success">{c.statut}</Badge>])}
      />
    </div>
  );
}
