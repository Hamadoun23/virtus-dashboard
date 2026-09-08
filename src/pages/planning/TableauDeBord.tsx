import { Clapperboard, Lightbulb, Users, Video } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { clients, idees, tournages } from './donnees';

export default function TableauDeBordPlanning() {
  return (
    <div>
      <PageHeader icon={Clapperboard} titre="Planning" sousTitre="Tournages, publications, idées de contenu" />
      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Users} valeur={clients.length} libelle="Clients suivis" teinte="#60a5fa" />
        <StatTile icon={Video} valeur={tournages.length} libelle="Tournages à venir" teinte="#ff8a4c" />
        <StatTile icon={Lightbulb} valeur={idees.length} libelle="Idées en cours" teinte="#facc15" />
      </div>
    </div>
  );
}
