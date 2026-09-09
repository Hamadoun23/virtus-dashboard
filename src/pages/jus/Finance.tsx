import { Landmark, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EtatChargement, EtatErreur } from '../../components/ui/EtatRequete';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { useApi } from '../../lib/hooks/useApi';
import { obtenirRapprochement } from '../../lib/api/jus';

export default function Finance() {
  const rapprochement = useApi(obtenirRapprochement, []);

  if (rapprochement.chargement) return <EtatChargement texte="Chargement…" />;
  if (rapprochement.erreur || !rapprochement.donnees) {
    return <EtatErreur message={rapprochement.erreur ?? 'Indisponible'} recharger={rapprochement.recharger} />;
  }

  const { totaux } = rapprochement.donnees;

  return (
    <div>
      <PageHeader icon={Landmark} titre="Jus d'orange — Finance" sousTitre="Vue d'ensemble financière" />
      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Wallet} valeur={`${totaux.total_commercial} F`} libelle="Facturé (commercial)" teinte="#60a5fa" />
        <StatTile icon={TrendingUp} valeur={`${totaux.total_recu} F`} libelle="Reçu (trésorerie)" teinte="#34d399" />
        <StatTile icon={TrendingDown} valeur={`${totaux.ecart_global} F`} libelle="Écart global" teinte="#f87171" />
      </div>
      <Link to="/jus/finance/tresorerie" className="mt-4 inline-block text-xs font-semibold text-accent2">
        Voir le détail de la trésorerie →
      </Link>
    </div>
  );
}
