import { Award, Calendar, UserCog } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatTile } from '../../components/ui/StatTile';
import { soldeConges } from './donnees';

export default function MonEspace() {
  return (
    <div>
      <PageHeader icon={UserCog} titre="Mon espace" sousTitre="Solde de congés, ancienneté, contrat" />

      <div className="grid grid-cols-3 gap-4">
        <StatTile icon={Calendar} valeur={`${soldeConges.restant} j`} libelle="Solde de congés" teinte="#34d399" />
        <StatTile icon={Award} valeur="3 ans" libelle="Ancienneté" teinte="#ff8a4c" />
        <StatTile icon={UserCog} valeur="CDI" libelle="Type de contrat" teinte="#a78bfa" />
      </div>

      <Card className="mt-4">
        <h2 className="text-sm font-bold text-white">Informations</h2>
        <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-xs text-muted">Poste</dt>
            <dd className="mt-1 text-white">Développeur</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Département</dt>
            <dd className="mt-1 text-white">RH & Finance</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Date d'entrée</dt>
            <dd className="mt-1 text-white">1 sept. 2021</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Responsable</dt>
            <dd className="mt-1 text-white">Y. H. Diallo</dd>
          </div>
        </dl>
      </Card>
    </div>
  );
}
