import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import type { chantiers } from './donnees';
import { journalParChantier } from './donnees';

type Chantier = (typeof chantiers)[number];

export default function Journal() {
  const chantier = useOutletContext<Chantier>();
  const entrees = journalParChantier[chantier.id] ?? [];

  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-sm font-bold text-white">Journal d'activité</h2>
      <div className="flex flex-col gap-4 border-l border-border pl-4">
        {entrees.map((entree, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-accent" />
            <p className="text-xs text-muted">
              {entree.date} · {entree.auteur}
            </p>
            <p className="mt-0.5 text-sm text-white">{entree.note}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
