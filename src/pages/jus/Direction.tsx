import { Citrus, ShoppingCart, Users, Wine } from 'lucide-react';
import { EtatChargement, EtatErreur } from '../../components/ui/EtatRequete';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { useApi } from '../../lib/hooks/useApi';
import { listerUtilisateursJus, obtenirSummary } from '../../lib/api/jus';

export default function Direction() {
  const summary = useApi(obtenirSummary, []);
  const utilisateurs = useApi(() => listerUtilisateursJus(), []);

  if (summary.chargement) return <EtatChargement texte="Chargement…" />;
  if (summary.erreur || !summary.donnees) return <EtatErreur message={summary.erreur ?? 'Indisponible'} recharger={summary.recharger} />;

  const { kpi } = summary.donnees;

  return (
    <div>
      <PageHeader icon={Citrus} titre="Jus d'orange — Direction" sousTitre="Vue d'ensemble" />
      <div className="grid grid-cols-4 gap-4">
        <StatTile icon={Users} valeur={utilisateurs.donnees?.filter((u) => u.is_active).length ?? '—'} libelle="Utilisateurs actifs" teinte="#a78bfa" />
        <StatTile icon={ShoppingCart} valeur={`${kpi.ca_total} F`} libelle="Chiffre d'affaires" teinte="#34d399" />
        <StatTile icon={Wine} valeur={kpi.bouteilles} libelle="Bouteilles en stock" teinte="#ff8a4c" />
        <StatTile icon={ShoppingCart} valeur={kpi.ventes} libelle="Ventes" teinte="#60a5fa" />
      </div>
    </div>
  );
}
