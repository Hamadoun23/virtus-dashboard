import { Calendar, MapPin, User } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { ProgressBar } from '../../components/ui/ProgressBar';
import type { chantiers } from './donnees';

type Chantier = (typeof chantiers)[number];

export default function Detail() {
  const chantier = useOutletContext<Chantier>();

  return (
    <div className="grid grid-cols-[1fr_1.4fr] gap-6">
      <Card className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-sm">
          <User size={15} className="text-muted" />
          <span className="text-white">{chantier.client}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin size={15} className="text-muted" />
          <span className="text-white">{chantier.adresse}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <User size={15} className="text-muted" />
          <span className="text-white">Chef de chantier : {chantier.chefDeChantier}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Calendar size={15} className="text-muted" />
          <span className="text-white">
            {chantier.dateDebut} → {chantier.dateFinPrevue}
          </span>
        </div>
      </Card>

      <Card className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white">Avancement global</h2>
          <span className="font-display text-base font-bold tabular-nums text-white">{chantier.avancement}%</span>
        </div>
        <ProgressBar progress={chantier.avancement} />

        <div className="mt-2 flex flex-col gap-4">
          {chantier.etapes.map((etape) => (
            <div key={etape.nom} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted">{etape.nom}</span>
                <span className="text-xs font-semibold text-white">{etape.avancement}%</span>
              </div>
              <ProgressBar progress={etape.avancement} height={6} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
