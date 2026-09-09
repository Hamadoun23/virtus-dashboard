import { Clapperboard, Lightbulb, Users, Video } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { CalendrierPlanning } from './CalendrierPlanning';
import { clients, idees, tournages } from './donnees';

export default function TableauDeBordPlanning() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader icon={Clapperboard} titre="Planning" sousTitre="Gérez vos plannings et générez des rapports en un clic" />
      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Users} valeur={clients.length} libelle="Clients suivis" teinte="#60a5fa" />
        <StatTile icon={Video} valeur={tournages.length} libelle="Tournages ce mois" teinte="#ff8a4c" />
        <StatTile icon={Lightbulb} valeur={idees.length} libelle="Idées en cours" teinte="#facc15" />
      </div>
      <CalendrierPlanning />
    </div>
  );
}
