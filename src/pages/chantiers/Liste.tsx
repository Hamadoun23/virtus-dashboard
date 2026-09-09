import { HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { chantiers } from './donnees';

export default function Liste() {
  return (
    <div>
      <PageHeader icon={HardHat} titre="Chantiers" sousTitre="Suivi de chantier" />
      <TableVirtus
        colonnes={['Référence', 'Chantier', 'Avancement', 'Statut', '']}
        lignes={chantiers.map((c) => [
          c.id,
          c.nom,
          `${c.avancement}%`,
          <Badge tone={c.statut === 'Terminé' ? 'success' : 'warning'}>{c.statut}</Badge>,
          <Link to={`/chantiers/${c.id}`} className="text-xs font-semibold text-accent2">
            Voir le détail →
          </Link>,
        ])}
      />
    </div>
  );
}
