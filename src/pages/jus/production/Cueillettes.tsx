import { Sprout } from 'lucide-react';
import { FormulaireEtHistorique } from '../../../components/ui/FormulaireEtHistorique';
import { cueillettes } from '../donnees';

export default function Cueillettes() {
  return (
    <FormulaireEtHistorique
      icon={Sprout}
      titre="Cueillettes"
      sousTitre="Enregistrer une cueillette"
      champs={[
        { label: 'Producteur', placeholder: 'Coopérative Sikasso' },
        { label: 'Quantité', placeholder: '600 kg' },
        { label: 'Date', type: 'date' },
      ]}
      colonnesHistorique={['Référence', 'Producteur', 'Quantité', 'Date']}
      lignesHistorique={cueillettes.map((c) => [c.id, c.producteur, c.quantite, c.date])}
    />
  );
}
