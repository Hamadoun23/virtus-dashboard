import { Clapperboard, Lightbulb, Users, Video } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { useApi } from '../../lib/hooks/useApi';
import { listerClients, listerIdees, tableauDeBord } from '../../lib/api/planning';
import { CalendrierPlanning } from './CalendrierPlanning';

const maintenant = new Date();

export default function TableauDeBordPlanning() {
  const clients = useApi(listerClients, []);
  const idees = useApi(listerIdees, []);
  const bord = useApi(() => tableauDeBord(maintenant.getMonth() + 1, maintenant.getFullYear()), []);

  return (
    <div className="flex flex-col gap-4">
      <PageHeader icon={Clapperboard} titre="Planning" sousTitre="Gérez vos plannings et générez des rapports en un clic" />
      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Users} valeur={clients.donnees?.length ?? '—'} libelle="Clients suivis" teinte="#60a5fa" />
        <StatTile
          icon={Video}
          valeur={bord.donnees?.stats.shootings_this_month ?? '—'}
          libelle="Tournages ce mois"
          teinte="#ff8a4c"
        />
        <StatTile icon={Lightbulb} valeur={idees.donnees?.length ?? '—'} libelle="Idées en cours" teinte="#facc15" />
      </div>
      <CalendrierPlanning />
    </div>
  );
}
