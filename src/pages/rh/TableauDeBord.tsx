import { AlertTriangle, Calendar, ClipboardList, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { Badge } from '../../components/ui/Table';
import { aValiderRh, soldeConges } from './donnees';

export default function TableauDeBordRh() {
  return (
    <div>
      <PageHeader icon={Users} titre="RH & Finance" sousTitre="Ce qui attend votre décision" />

      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={ClipboardList} valeur={aValiderRh.length} libelle="Dossiers à valider" teinte="#ff8a4c" />
        <StatTile
          icon={AlertTriangle}
          valeur={aValiderRh.filter((d) => d.urgent).length}
          libelle="Urgents"
          teinte="#f87171"
        />
        <StatTile icon={Calendar} valeur={`${soldeConges.restant} j`} libelle="Solde de congés restant" teinte="#34d399" />
      </div>

      <Card className="mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white">À valider</h2>
          <Link to="/rh/validations" className="text-xs font-semibold text-accent2">
            Tout voir →
          </Link>
        </div>
        <div className="mt-4 space-y-2">
          {aValiderRh.map((dossier) => (
            <div
              key={dossier.id}
              className={`flex items-center justify-between rounded-2xl border p-3 ${
                dossier.urgent ? 'border-red-500/30 bg-red-500/5' : 'border-border bg-surface2'
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-white">{dossier.collaborateur}</p>
                <p className="text-xs text-muted">
                  {dossier.type} · {dossier.id} · depuis {dossier.depuis}
                </p>
              </div>
              {dossier.urgent ? <Badge tone="danger">Urgent</Badge> : <Badge>En attente</Badge>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
