import { ReceiptText, ShoppingCart, Users, Wallet } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { ventesCommercial } from './donnees';

export default function Commercial() {
  return (
    <div>
      <PageHeader icon={ShoppingCart} titre="Jus d'orange — Commercial" sousTitre="Prospection, clients, ventes" />

      <div className="mb-4 grid grid-cols-3 gap-4">
        <StatTile icon={Users} valeur={42} libelle="Clients actifs" teinte="#60a5fa" />
        <StatTile icon={ShoppingCart} valeur={128} libelle="Commandes ce mois" teinte="#ff8a4c" />
        <StatTile icon={Wallet} valeur="2.1 M F" libelle="Chiffre d'affaires du mois" teinte="#34d399" />
      </div>

      <div className="mb-3 flex items-center gap-2">
        <ReceiptText size={15} className="text-accent2" />
        <h2 className="text-sm font-bold text-white">Dernières ventes</h2>
      </div>
      <TableVirtus
        colonnes={['Référence', 'Client', 'Montant', 'Statut']}
        lignes={ventesCommercial.map((v) => [
          v.id,
          v.client,
          v.montant,
          <Badge tone={v.statut === 'Payée' ? 'success' : 'warning'}>{v.statut}</Badge>,
        ])}
      />
    </div>
  );
}
