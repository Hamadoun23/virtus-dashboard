import {
  ArrowLeft,
  Camera,
  Cloud,
  FileText,
  HardHat,
  History,
  LayoutDashboard,
  ListTree,
  PencilLine,
} from 'lucide-react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { Badge } from '../../components/ui/Table';
import { chantiers } from './donnees';

const ONGLETS = [
  { label: 'Tableau de bord', suffixe: '', icon: LayoutDashboard, bout: true },
  { label: 'Saisie du jour', suffixe: 'saisie', icon: PencilLine },
  { label: 'Toutes les tâches', suffixe: 'taches', icon: ListTree },
  { label: 'Galerie photos', suffixe: 'photos', icon: Camera },
  { label: 'Structure', suffixe: 'structure', icon: HardHat },
  { label: "Journal d'activité", suffixe: 'journal', icon: History },
  { label: 'Prévisions météo', suffixe: 'meteo', icon: Cloud },
  { label: 'Rapport', suffixe: 'rapport', icon: FileText },
];

export default function ChantierLayout() {
  const { id } = useParams();
  const chantier = chantiers.find((c) => c.id === id);

  if (!chantier) {
    return (
      <div>
        <Link to="/chantiers" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent2">
          <ArrowLeft size={14} />
          Retour aux chantiers
        </Link>
        <p className="text-sm text-muted">Chantier introuvable.</p>
      </div>
    );
  }

  return (
    <div>
      <Link to="/chantiers" className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent2">
        <ArrowLeft size={14} />
        Retour aux chantiers
      </Link>

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/20">
            <HardHat size={18} className="text-accent2" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{chantier.nom}</h1>
            <p className="text-xs text-muted">{chantier.id}</p>
          </div>
        </div>
        <Badge tone={chantier.statut === 'Terminé' ? 'success' : 'warning'}>{chantier.statut}</Badge>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {ONGLETS.map((onglet) => (
          <NavLink
            key={onglet.suffixe}
            to={onglet.suffixe ? `/chantiers/${chantier.id}/${onglet.suffixe}` : `/chantiers/${chantier.id}`}
            end={onglet.bout}
            className={({ isActive }) =>
              `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                isActive ? 'bg-accent text-black' : 'bg-surface2 text-muted hover:text-white'
              }`
            }
          >
            <onglet.icon size={13} />
            {onglet.label}
          </NavLink>
        ))}
      </div>

      <Outlet context={chantier} />
    </div>
  );
}
