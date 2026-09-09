import { ReceiptText, ShoppingCart, Users, Wallet } from 'lucide-react';
import { EtatChargement, EtatErreur } from '../../components/ui/EtatRequete';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { useApi } from '../../lib/hooks/useApi';
import { listerVentes, obtenirSummary } from '../../lib/api/jus';

const TONE = { ACHAT_VENTE: 'success', PARTIELLE: 'warning', DEPOT_VENTE: 'neutral' } as const;

export default function Commercial() {
  const summary = useApi(obtenirSummary, []);
  const ventes = useApi(() => listerVentes(), []);

  if (summary.chargement || ventes.chargement) return <EtatChargement texte="Chargement…" />;
  if (summary.erreur || !summary.donnees) return <EtatErreur message={summary.erreur ?? 'Indisponible'} recharger={summary.recharger} />;
  if (ventes.erreur) return <EtatErreur message={ventes.erreur} recharger={ventes.recharger} />;

  const { kpi } = summary.donnees;

  return (
    <div>
      <PageHeader icon={ShoppingCart} titre="Jus d'orange — Commercial" sousTitre="Prospection, clients, ventes" />

      <div className="mb-4 grid grid-cols-3 gap-4">
        <StatTile icon={Users} valeur={kpi.clients} libelle="Clients" teinte="#60a5fa" />
        <StatTile icon={ShoppingCart} valeur={kpi.ventes} libelle="Ventes" teinte="#ff8a4c" />
        <StatTile icon={Wallet} valeur={`${kpi.ca_total} F`} libelle="Chiffre d'affaires" teinte="#34d399" />
      </div>

      <div className="mb-3 flex items-center gap-2">
        <ReceiptText size={15} className="text-accent2" />
        <h2 className="text-sm font-bold text-white">Dernières ventes</h2>
      </div>
      <TableVirtus
        colonnes={['Client', 'Montant', 'Statut']}
        lignes={(ventes.donnees ?? []).slice(0, 8).map((v) => [
          v.client_nom,
          `${v.montant_total} F`,
          <Badge tone={TONE[v.statut_paiement]}>{v.statut_display}</Badge>,
        ])}
      />
    </div>
  );
}
