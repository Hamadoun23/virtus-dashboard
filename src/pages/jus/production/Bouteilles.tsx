import { Wine } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { PageHeader } from '../../../components/ui/PageHeader';
import { ProgressBar } from '../../../components/ui/ProgressBar';
import { bouteilles } from '../donnees';

export default function Bouteilles() {
  return (
    <div>
      <PageHeader icon={Wine} titre="Bouteilles" sousTitre="Stock de produit fini par format" />
      <div className="grid grid-cols-2 gap-4">
        {bouteilles.map((b) => (
          <Card key={b.format} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Format {b.format}</span>
              <span className="text-lg font-extrabold text-white">{b.enStock}</span>
            </div>
            <ProgressBar progress={Math.min((b.enStock / (b.seuil * 3)) * 100, 100)} />
            <p className="text-xs text-muted">Seuil d'alerte : {b.seuil} unités</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
