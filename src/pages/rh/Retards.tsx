import { HardHat } from 'lucide-react';
import { FormulaireEtHistorique } from '../../components/ui/FormulaireEtHistorique';
import { Badge } from '../../components/ui/Table';
import { retards } from './donnees';

export default function Retards() {
  return (
    <FormulaireEtHistorique
      icon={HardHat}
      titre="Signaler un retard"
      sousTitre="Prévenir d'une arrivée tardive"
      champs={[
        { label: 'Date', type: 'date' },
        { label: 'Durée estimée', placeholder: '15 min' },
        { label: 'Motif', type: 'textarea', placeholder: 'Embouteillage, transport en commun...' },
      ]}
      colonnesHistorique={['Référence', 'Date', 'Durée', 'Motif', 'Statut']}
      lignesHistorique={retards.map((r) => [
        r.id,
        r.date,
        r.duree,
        r.motif,
        <Badge tone={r.statut === 'Justifié' ? 'success' : 'warning'}>{r.statut}</Badge>,
      ])}
    />
  );
}
