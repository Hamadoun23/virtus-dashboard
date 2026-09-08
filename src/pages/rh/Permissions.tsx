import { UserRound } from 'lucide-react';
import { FormulaireEtHistorique } from '../../components/ui/FormulaireEtHistorique';
import { Badge } from '../../components/ui/Table';
import { demandesPermission } from './donnees';

export default function Permissions() {
  return (
    <FormulaireEtHistorique
      icon={UserRound}
      titre="Mes permissions"
      sousTitre="S'absenter sans entamer son solde de congés"
      champs={[
        { label: 'Date', type: 'date' },
        { label: 'Durée estimée', placeholder: '2h' },
        { label: 'Motif', type: 'textarea', placeholder: 'Rendez-vous médical, démarche administrative...' },
      ]}
      colonnesHistorique={['Référence', 'Date', 'Motif', 'Durée', 'Statut']}
      lignesHistorique={demandesPermission.map((d) => [
        d.id,
        d.date,
        d.motif,
        d.duree,
        <Badge tone={d.statut === 'Approuvé' ? 'success' : 'warning'}>{d.statut}</Badge>,
      ])}
    />
  );
}
