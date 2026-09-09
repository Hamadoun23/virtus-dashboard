import { Landmark, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';

export default function Finance() {
  return (
    <div>
      <PageHeader icon={Landmark} titre="Jus d'orange — Finance" sousTitre="Vue d'ensemble financière" />
      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Wallet} valeur="700 000 F" libelle="Solde de trésorerie" teinte="#34d399" />
        <StatTile icon={TrendingUp} valeur="2.13 M F" libelle="Entrées ce mois" teinte="#60a5fa" />
        <StatTile icon={TrendingDown} valeur="1.43 M F" libelle="Sorties ce mois" teinte="#f87171" />
      </div>
      <Link to="/jus/finance/tresorerie" className="mt-4 inline-block text-xs font-semibold text-accent2">
        Voir le détail de la trésorerie →
      </Link>
    </div>
  );
}
