import { AlertTriangle, Briefcase, Building2, Calendar, ClipboardList, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { CircularProgress } from '../components/ui/CircularProgress';
import { PageHeader } from '../components/ui/PageHeader';
import { StatTile } from '../components/ui/StatTile';
import { Badge } from '../components/ui/Table';
import { useAuth } from '../lib/auth/AuthContext';
import { useApi } from '../lib/hooks/useApi';
import { demandesAValider, monSolde } from '../lib/api/rh';

/** Écran d'accueil du hub : le vrai tableau de bord de l'utilisateur, pas un lanceur
 * d'applications — celles-ci vivent en permanence dans la Sidebar (voir Sidebar.tsx). */
export default function Accueil() {
  const { identite, utilisateur, applications } = useAuth();
  const annee = new Date().getFullYear();

  const accesRh = applications.some((a) => a.chemin.startsWith('/rh'));
  const solde = useApi(() => (accesRh ? monSolde(annee) : Promise.resolve(null)), [accesRh, annee]);
  const dossiers = useApi(() => (accesRh ? demandesAValider() : Promise.resolve([])), [accesRh]);

  const applicationsActives = applications.filter((a) => a.active);
  const anneesAnciennete = utilisateur ? Math.floor(utilisateur.anciennete_mois / 12) : 0;
  const ratioConges = solde.donnees
    ? (solde.donnees.jours_restants / (solde.donnees.jours_acquis + solde.donnees.jours_reportes || 1)) * 100
    : 0;

  return (
    <div>
      <PageHeader
        icon={LayoutGrid}
        titre={identite ? `Bonjour ${identite.nom_complet.split(' ')[0]}` : 'Tableau de bord'}
        sousTitre="Ce qui vous concerne aujourd'hui"
      />

      <div className="mb-4 grid grid-cols-3 gap-4">
        <StatTile icon={LayoutGrid} valeur={applicationsActives.length} libelle="Applications disponibles" teinte="#ff8a4c" />
        {utilisateur ? (
          <>
            <StatTile icon={Building2} valeur={utilisateur.departement_nom || '—'} libelle="Département" teinte="#60a5fa" />
            <StatTile
              icon={Calendar}
              valeur={anneesAnciennete > 0 ? `${anneesAnciennete} an${anneesAnciennete > 1 ? 's' : ''}` : `${utilisateur.anciennete_mois} mois`}
              libelle="Ancienneté"
              teinte="#34d399"
            />
          </>
        ) : (
          <StatTile icon={Briefcase} valeur={identite?.fonction || '—'} libelle="Fonction" teinte="#60a5fa" />
        )}
      </div>

      {accesRh && (
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <Card className="flex flex-col items-center justify-center gap-2">
            <CircularProgress progress={ratioConges} gradientId="accueil-conges-gradient" label={solde.donnees ? `${solde.donnees.jours_restants}j` : '—'} />
            <p className="text-center text-xs text-muted">Solde de congés restant</p>
          </Card>

          <Card>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ClipboardList size={15} className="text-accent2" />
                <h2 className="text-sm font-bold text-white">À valider</h2>
              </div>
              <Link to="/rh/validations" className="text-xs font-semibold text-accent2">
                Tout voir →
              </Link>
            </div>
            {(dossiers.donnees ?? []).length === 0 ? (
              <p className="py-6 text-center text-xs text-muted">Rien n'attend votre décision pour le moment.</p>
            ) : (
              <div className="space-y-2">
                {(dossiers.donnees ?? []).slice(0, 4).map((d) => (
                  <div key={d.id} className="flex items-center justify-between rounded-2xl border border-border bg-surface2 p-3">
                    <div className="flex items-center gap-2">
                      {(d.categorie === 'RETARD' || d.categorie === 'PERMISSION') && <AlertTriangle size={13} className="text-red-400" />}
                      <div>
                        <p className="text-sm font-semibold text-white">{d.demandeur_nom}</p>
                        <p className="text-xs text-muted">
                          {d.type_absence_libelle} · {d.numero}
                        </p>
                      </div>
                    </div>
                    <Badge>{d.statut_libelle}</Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
