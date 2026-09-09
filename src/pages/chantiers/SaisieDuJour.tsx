import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import type { chantiers } from './donnees';

type Chantier = (typeof chantiers)[number];

export default function SaisieDuJour() {
  const chantier = useOutletContext<Chantier>();

  return (
    <Card>
      <h2 className="text-sm font-bold text-white">Saisie du jour — {chantier.nom}</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">Effectif présent</label>
          <input
            type="number"
            placeholder="8"
            className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-muted">Avancement du jour</label>
          <input
            placeholder="+2% sur le gros œuvre"
            className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label className="mb-1.5 block text-xs font-semibold text-muted">Observations</label>
          <textarea
            rows={4}
            placeholder="Travaux réalisés, incidents, livraisons reçues..."
            className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
      </div>
      <button className="mt-4 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-black">
        Enregistrer la saisie
      </button>
    </Card>
  );
}
