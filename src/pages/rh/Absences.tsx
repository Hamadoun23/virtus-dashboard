import { Calendar } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { FormulaireEtHistorique } from '../../components/ui/FormulaireEtHistorique';
import { CircularProgress } from '../../components/ui/CircularProgress';
import { Badge } from '../../components/ui/Table';
import { demandesConges, soldeConges } from './donnees';

export default function Absences() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Card className="flex flex-1 items-center gap-4">
          <CircularProgress
            progress={(soldeConges.pris / soldeConges.total) * 100}
            size={64}
            strokeWidth={6}
            gradientId="conges-gradient"
            label={`${soldeConges.restant}j`}
          />
          <div>
            <p className="text-sm font-semibold text-white">
              {soldeConges.restant} jours restants sur {soldeConges.total}
            </p>
            <p className="text-xs text-muted">{soldeConges.pris} jours déjà pris cette année</p>
          </div>
        </Card>
      </div>

      <FormulaireEtHistorique
        icon={Calendar}
        titre="Mes congés"
        sousTitre="Poser des jours sur son solde annuel"
        champs={[
          { label: 'Type de congé', placeholder: 'Congé annuel' },
          { label: 'Du', type: 'date' },
          { label: 'Au', type: 'date' },
          { label: 'Motif (optionnel)', type: 'textarea', placeholder: 'Précisez si besoin...' },
        ]}
        colonnesHistorique={['Référence', 'Période', 'Type', 'Statut']}
        lignesHistorique={demandesConges.map((d) => [
          d.id,
          d.periode,
          d.type,
          <Badge tone={d.statut === 'Approuvé' ? 'success' : 'warning'}>{d.statut}</Badge>,
        ])}
      />
    </div>
  );
}
