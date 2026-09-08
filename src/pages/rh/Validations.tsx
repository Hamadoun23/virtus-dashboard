import { ClipboardList } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { aValiderRh } from './donnees';

export default function Validations() {
  return (
    <div>
      <PageHeader icon={ClipboardList} titre="À valider" sousTitre="Dossiers attendant votre décision" />
      <TableVirtus
        colonnes={['Référence', 'Collaborateur', 'Type', 'En attente depuis', 'Statut', '']}
        lignes={aValiderRh.map((dossier) => [
          dossier.id,
          dossier.collaborateur,
          dossier.type,
          dossier.depuis,
          dossier.urgent ? <Badge tone="danger">Urgent</Badge> : <Badge>En attente</Badge>,
          <div className="flex gap-2">
            <button className="rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-black">Approuver</button>
            <button className="rounded-lg border border-border px-2.5 py-1 text-xs font-semibold text-muted">
              Refuser
            </button>
          </div>,
        ])}
      />
    </div>
  );
}
