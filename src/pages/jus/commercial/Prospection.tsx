import { Map } from 'lucide-react';
import { FormulaireEtHistorique } from '../../../components/ui/FormulaireEtHistorique';
import { Badge } from '../../../components/ui/Table';
import { prospects } from '../donnees';

const TONE = { 'À contacter': 'neutral', 'Rendez-vous pris': 'warning', 'Devis envoyé': 'success' } as const;

export default function Prospection() {
  return (
    <FormulaireEtHistorique
      icon={Map}
      titre="Prospection"
      sousTitre="Nouveaux contacts commerciaux"
      champs={[
        { label: 'Nom du prospect', placeholder: 'Épicerie Diallo' },
        { label: 'Secteur / Zone', placeholder: 'Bamako, Badalabougou' },
        { label: 'Notes', type: 'textarea' },
      ]}
      colonnesHistorique={['Nom', 'Secteur', 'Statut']}
      lignesHistorique={prospects.map((p) => [p.nom, p.secteur, <Badge tone={TONE[p.statut]}>{p.statut}</Badge>])}
    />
  );
}
