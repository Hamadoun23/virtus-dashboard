import { Wallet } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { paiementsCommercial } from '../donnees';

export default function Paiements() {
  return (
    <div>
      <PageHeader icon={Wallet} titre="Paiements" sousTitre="Encaissements reçus" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Montant', 'Mode', 'Date']}
        lignes={paiementsCommercial.map((p) => [p.id, p.client, p.montant, p.mode, p.date])}
      />
    </div>
  );
}
