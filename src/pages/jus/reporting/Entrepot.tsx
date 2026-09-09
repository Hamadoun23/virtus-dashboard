import { Boxes } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { PageHeader } from '../../../components/ui/PageHeader';
import { ProgressBar } from '../../../components/ui/ProgressBar';
import { reportingEntrepot } from '../donnees';

export default function Entrepot() {
  return (
    <div>
      <PageHeader icon={Boxes} titre="Reporting — Entrepôt" sousTitre="Taux d'occupation" />
      <Card className="flex flex-col gap-5">
        {reportingEntrepot.map((e) => (
          <div key={e.zone} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{e.zone}</span>
              <span className="text-sm font-bold text-white">{e.occupation}</span>
            </div>
            <ProgressBar progress={parseInt(e.occupation)} />
          </div>
        ))}
      </Card>
    </div>
  );
}
