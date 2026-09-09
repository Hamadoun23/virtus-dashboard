import { ShoppingCart } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../../components/ui/Table';
import { commandesCommercial } from '../donnees';

const TONE = { 'En préparation': 'warning', Expédiée: 'neutral', Livrée: 'success' } as const;

export default function Commandes() {
  return (
    <div>
      <PageHeader icon={ShoppingCart} titre="Commandes" sousTitre="Suivi des commandes clients" />
      <TableVirtus
        colonnes={['Référence', 'Client', 'Articles', 'Statut']}
        lignes={commandesCommercial.map((c) => [
          c.id,
          c.client,
          c.articles,
          <Badge tone={TONE[c.statut]}>{c.statut}</Badge>,
        ])}
      />
    </div>
  );
}
