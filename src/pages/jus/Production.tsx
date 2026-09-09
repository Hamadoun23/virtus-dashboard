import { AlertTriangle, Boxes, FlaskConical, Sprout, Wine } from 'lucide-react';
import { EtatChargement, EtatErreur } from '../../components/ui/EtatRequete';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { useApi } from '../../lib/hooks/useApi';
import { obtenirSummary } from '../../lib/api/jus';

export default function Production() {
  const summary = useApi(obtenirSummary, []);

  if (summary.chargement) return <EtatChargement texte="Chargement…" />;
  if (summary.erreur || !summary.donnees) return <EtatErreur message={summary.erreur ?? 'Indisponible'} recharger={summary.recharger} />;

  const { kpi } = summary.donnees;

  return (
    <div>
      <PageHeader icon={FlaskConical} titre="Jus d'orange — Production" sousTitre="De la cueillette au conditionnement" />
      <div className="grid grid-cols-4 gap-4">
        <StatTile icon={Sprout} valeur={`${kpi.recolte_total} kg`} libelle="Récolte totale" teinte="#4ade80" />
        <StatTile icon={Boxes} valeur={kpi.jus_stock} libelle="Stock de jus" teinte="#60a5fa" />
        <StatTile icon={Wine} valeur={kpi.bouteilles} libelle="Bouteilles en stock" teinte="#a78bfa" />
        <StatTile icon={AlertTriangle} valeur={kpi.articles_sous_seuil} libelle="Articles sous le seuil" teinte="#f87171" />
      </div>
    </div>
  );
}
