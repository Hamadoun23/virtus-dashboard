import { ReceiptText } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../../components/ui/Table';
import { facturesCommercial } from '../donnees';

export default function Factures() {
  return (
    <div>
      <PageHeader icon={ReceiptText} titre="Factures" sousTitre="Facturation client" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Montant', 'Échéance', 'Statut']}
        lignes={facturesCommercial.map((f) => [
          f.id,
          f.client,
          f.montant,
          f.echeance,
          <Badge tone={f.statut === 'Payée' ? 'success' : 'warning'}>{f.statut}</Badge>,
        ])}
      />
    </div>
  );
}
