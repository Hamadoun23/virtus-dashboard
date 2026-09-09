import { Citrus, ShoppingCart, TrendingUp, Users } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';

export default function Direction() {
  return (
    <div>
      <PageHeader icon={Citrus} titre="Jus d'orange — Direction" sousTitre="Vue d'ensemble" />
      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Users} valeur={3} libelle="Utilisateurs actifs" teinte="#a78bfa" />
        <StatTile icon={ShoppingCart} valeur="2.13 M F" libelle="Chiffre d'affaires du mois" teinte="#34d399" />
        <StatTile icon={TrendingUp} valeur="+9%" libelle="Croissance vs mois dernier" teinte="#ff8a4c" />
      </div>
    </div>
  );
}
