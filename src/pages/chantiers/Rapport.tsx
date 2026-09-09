import { Download, FileText } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { ProgressBar } from '../../components/ui/ProgressBar';
import type { chantiers } from './donnees';

type Chantier = (typeof chantiers)[number];

export default function Rapport() {
  const chantier = useOutletContext<Chantier>();

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/20">
          <FileText size={18} className="text-accent2" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Rapport de chantier</h2>
          <p className="text-xs text-muted">{chantier.nom} — au {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Avancement global</span>
          <span className="font-semibold text-white">{chantier.avancement}%</span>
        </div>
        <div className="mt-2">
          <ProgressBar progress={chantier.avancement} />
        </div>
      </div>

      <button className="flex w-fit items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-black">
        <Download size={14} />
        Générer le rapport PDF
      </button>
    </Card>
  );
}
