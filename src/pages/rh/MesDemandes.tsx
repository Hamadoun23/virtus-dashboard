import { ReceiptText } from 'lucide-react';
import { FormulaireEtHistorique } from '../../components/ui/FormulaireEtHistorique';
import { Badge } from '../../components/ui/Table';
import { demandesFinance } from './donnees';

export default function MesDemandes() {
  return (
    <FormulaireEtHistorique
      icon={ReceiptText}
      titre="Mes demandes"
      sousTitre="Soumettre une demande à la Finance"
      champs={[
        { label: 'Objet', placeholder: 'Remboursement transport' },
        { label: 'Montant', placeholder: '45 000 F' },
        { label: 'Justification', type: 'textarea' },
      ]}
      colonnesHistorique={['Référence', 'Objet', 'Montant', 'Statut']}
      lignesHistorique={demandesFinance.map((d) => [
        d.id,
        d.objet,
        d.montant,
        <Badge tone={d.statut === 'Approuvé' ? 'success' : 'warning'}>{d.statut}</Badge>,
      ])}
    />
  );
}
