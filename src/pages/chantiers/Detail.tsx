import { ArrowLeft, Calendar, HardHat, MapPin, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Table';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { chantiers } from './donnees';

export default function Detail() {
  const { id } = useParams();
  const chantier = chantiers.find((c) => c.id === id);

  if (!chantier) {
    return (
      <div>
        <Link to="/chantiers" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent2">
          <ArrowLeft size={14} />
          Retour aux chantiers
        </Link>
        <p className="text-sm text-muted">Chantier introuvable.</p>
      </div>
    );
  }

  return (
    <div>
      <Link to="/chantiers" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent2">
        <ArrowLeft size={14} />
        Retour aux chantiers
      </Link>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/20">
            <HardHat size={18} className="text-accent2" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{chantier.nom}</h1>
            <p className="text-xs text-muted">{chantier.id}</p>
          </div>
        </div>
        <Badge tone={chantier.statut === 'Terminé' ? 'success' : 'warning'}>{chantier.statut}</Badge>
      </div>

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
            <HardHat size={15} className="text-muted" />
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
            <span className="text-base font-extrabold text-white">{chantier.avancement}%</span>
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
    </div>
  );
}
