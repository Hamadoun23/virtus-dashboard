import { Boxes } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { reportingChaine } from './donnees';

export default function Reporting() {
  return (
    <div>
      <PageHeader icon={Boxes} titre="Jus d'orange — Reporting" sousTitre="Récolte, fabrication, distribution" />
      <Card className="flex flex-col gap-5">
        {reportingChaine.map((etape) => (
          <div key={etape.etape} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{etape.etape}</span>
              <span className="text-sm font-bold text-white">{etape.progression}%</span>
            </div>
            <ProgressBar progress={etape.progression} />
          </div>
        ))}
      </Card>
    </div>
  );
}
