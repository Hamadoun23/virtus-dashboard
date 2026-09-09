import { ArrowRight, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { useAuth } from '../lib/auth/AuthContext';
import { APPLICATIONS_HUB } from '../lib/navigation';
import type { Application } from '../lib/api/identity';

function metaPour(app: Application) {
  const segment = app.chemin.split('/')[1];
  return APPLICATIONS_HUB.find((m) => m.chemin.split('/')[1] === segment);
}

/** Écran d'accueil du hub : le lanceur d'applications tel qu'il existe réellement dans
 * `identity` — chaque utilisateur ne voit que les applications auxquelles il a accès
 * (`applications`, renvoyées à la connexion). Cliquer sur une carte quitte le hub pour
 * entrer dans l'application métier (voir Sidebar : la navigation change alors totalement). */
export default function Accueil() {
  const { identite, applications } = useAuth();

  return (
    <div>
      <PageHeader
        icon={LayoutGrid}
        titre={identite ? `Bonjour ${identite.nom_complet.split(' ')[0]}` : 'Mes applications'}
        sousTitre="Choisissez une application pour continuer"
      />

      {applications.length === 0 ? (
        <Card className="py-10 text-center text-sm text-muted">
          Aucune application ne vous a été attribuée pour le moment. Contactez votre administrateur.
        </Card>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {applications
            .filter((a) => a.active)
            .sort((a, b) => a.ordre - b.ordre)
            .map((app) => {
              const meta = metaPour(app);
              const Icone = meta?.icon ?? LayoutGrid;
              return (
                <Link
                  key={app.id}
                  to={app.chemin}
                  className="group flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 backdrop-blur-xl transition-colors hover:border-accent/40"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${meta?.couleur ?? 'bg-accent'} bg-opacity-20`}>
                    <Icone size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-base font-bold text-white">{app.nom}</h2>
                    <p className="mt-1 text-xs text-muted">{app.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-accent2 opacity-0 transition-opacity group-hover:opacity-100">
                    Ouvrir
                    <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
}
