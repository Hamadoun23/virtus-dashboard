import { FlaskConical } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';
import { productionEtapes } from './donnees';

export default function Production() {
  return (
    <div>
      <PageHeader icon={FlaskConical} titre="Jus d'orange — Production" sousTitre="De la cueillette au conditionnement" />
      <div className="grid grid-cols-4 gap-4">
        {productionEtapes.map((etape) => (
          <Card key={etape.etape} className="flex flex-col gap-2">
            <p className="text-xs text-muted">{etape.etape}</p>
            <p className="text-xl font-extrabold text-white">{etape.valeur}</p>
            <span className="w-fit rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
              {etape.tendance} vs mois dernier
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
