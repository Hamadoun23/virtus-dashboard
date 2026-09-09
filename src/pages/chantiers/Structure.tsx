import { Users } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import type { chantiers } from './donnees';
import { equipeParChantier } from './donnees';

type Chantier = (typeof chantiers)[number];

export default function Structure() {
  const chantier = useOutletContext<Chantier>();
  const equipe = equipeParChantier[chantier.id] ?? [];

  return (
    <Card className="flex flex-col gap-3">
      <h2 className="text-sm font-bold text-white">Équipe sur site</h2>
      {equipe.map((membre) => (
        <div key={membre.nom} className="flex items-center gap-3 rounded-2xl border border-border bg-surface2 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
            <Users size={15} className="text-accent2" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{membre.nom}</p>
            <p className="text-xs text-muted">{membre.role}</p>
          </div>
        </div>
      ))}
    </Card>
  );
}
