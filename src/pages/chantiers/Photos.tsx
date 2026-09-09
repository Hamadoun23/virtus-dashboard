import { Camera } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import type { chantiers } from './donnees';

type Chantier = (typeof chantiers)[number];

const LEGENDES = ['Fondations', 'Coulage dalle', 'Livraison matériaux', 'Vue d\'ensemble', 'Second œuvre', 'Accès chantier'];

export default function Photos() {
  const chantier = useOutletContext<Chantier>();

  return (
    <div>
      <p className="mb-4 text-xs text-muted">
        Galerie du chantier {chantier.nom} — aperçu d'exemple, aucune photo réelle n'est encore reliée à ce chantier.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {LEGENDES.map((legende) => (
          <Card key={legende} className="flex aspect-video flex-col items-center justify-center gap-2 !p-4">
            <Camera size={22} className="text-muted" />
            <p className="text-xs text-muted">{legende}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
