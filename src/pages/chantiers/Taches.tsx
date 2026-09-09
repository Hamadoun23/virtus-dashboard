import { useOutletContext } from 'react-router-dom';
import { Badge, TableVirtus } from '../../components/ui/Table';
import type { chantiers } from './donnees';
import { tachesParChantier } from './donnees';

type Chantier = (typeof chantiers)[number];

const TONE = { 'À faire': 'neutral', 'En cours': 'warning', Terminée: 'success' } as const;

export default function Taches() {
  const chantier = useOutletContext<Chantier>();
  const taches = tachesParChantier[chantier.id] ?? [];

  return (
    <TableVirtus
      colonnes={['Référence', 'Tâche', 'Responsable', 'Échéance', 'Statut']}
      lignes={taches.map((t) => [
        t.id,
        t.titre,
        t.responsable,
        t.echeance,
        <Badge tone={TONE[t.statut]}>{t.statut}</Badge>,
      ])}
    />
  );
}
