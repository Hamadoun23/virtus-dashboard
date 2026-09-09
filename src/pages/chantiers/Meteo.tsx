import { Cloud, CloudRain, Sun } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import type { chantiers } from './donnees';
import { meteoParChantier } from './donnees';

type Chantier = (typeof chantiers)[number];

function iconePour(condition: string) {
  if (condition.includes('Averse') || condition.includes('Orage')) return CloudRain;
  if (condition.includes('Nuageux')) return Cloud;
  return Sun;
}

export default function Meteo() {
  const chantier = useOutletContext<Chantier>();
  const previsions = meteoParChantier[chantier.id] ?? [];

  return (
    <div className="grid grid-cols-3 gap-4">
      {previsions.map((prevision) => {
        const Icone = iconePour(prevision.condition);
        return (
          <Card key={prevision.jour} className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs text-muted">{prevision.jour}</p>
            <Icone size={28} className="text-accent2" />
            <p className="font-display text-2xl font-bold tabular-nums text-white">{prevision.temp}</p>
            <p className="text-xs text-muted">{prevision.condition}</p>
          </Card>
        );
      })}
    </div>
  );
}
