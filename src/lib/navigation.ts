import {
  Boxes,
  Building2,
  Calendar,
  Citrus,
  ClipboardList,
  FileText,
  FlaskConical,
  HardHat,
  Home,
  Landmark,
  Lightbulb,
  Megaphone,
  ReceiptText,
  Settings,
  ShoppingCart,
  UserCog,
  UserRound,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavGroup = {
  key: string;
  label: string;
  color: string;
  items: NavItem[];
};

/** Reprend fidèlement la structure réelle du hub (voir `frontend/src/rh/lib/navigation.ts`,
 * `frontend/src/jus/lib/nav.ts`, `frontend/src/planning/composants/espace-planning.tsx`) —
 * mêmes libellés, mêmes chemins, réorganisés en groupes pour la sidebar Virtus. */
export const NAVIGATION: NavGroup[] = [
  {
    key: 'accueil',
    label: 'Accueil',
    color: 'bg-accent',
    items: [{ label: 'Tableau de bord', href: '/', icon: Home }],
  },
  {
    key: 'board',
    label: 'Board',
    color: 'bg-violet-400',
    items: [{ label: 'Administration', href: '/administration', icon: Building2 }],
  },
  {
    key: 'rh',
    label: 'RH & Finance',
    color: 'bg-blue-400',
    items: [
      { label: 'Tableau de bord', href: '/rh', icon: Home },
      { label: 'À valider', href: '/rh/validations', icon: ClipboardList },
      { label: 'Historique', href: '/rh/historique', icon: FileText },
      { label: 'Mes congés', href: '/rh/absences', icon: Calendar },
      { label: 'Mes permissions', href: '/rh/permissions', icon: UserRound },
      { label: 'Signaler un retard', href: '/rh/retards', icon: HardHat },
      { label: 'Mes demandes', href: '/rh/mes-demandes', icon: ReceiptText },
      { label: 'Organisation', href: '/rh/organisation', icon: Users },
      { label: 'Annuaire', href: '/rh/annuaire', icon: Users },
      { label: 'Mon espace', href: '/rh/mon-espace', icon: UserCog },
    ],
  },
  {
    key: 'orange',
    label: "Jus d'orange",
    color: 'bg-amber-400',
    items: [
      { label: 'Commercial', href: '/jus/commercial', icon: ShoppingCart },
      { label: 'Production', href: '/jus/production', icon: FlaskConical },
      { label: 'Finance', href: '/jus/finance', icon: Landmark },
      { label: 'Direction', href: '/jus/direction', icon: Citrus },
      { label: 'Reporting', href: '/jus/reporting', icon: Boxes },
    ],
  },
  {
    key: 'chantiers',
    label: 'Chantiers',
    color: 'bg-emerald-400',
    items: [{ label: 'Suivi de chantier', href: '/chantiers', icon: HardHat }],
  },
  {
    key: 'planning',
    label: 'Planning',
    color: 'bg-rose-400',
    items: [
      { label: 'Tableau de bord', href: '/planning', icon: Home },
      { label: 'Clients', href: '/planning/clients', icon: Users },
      { label: 'Idées de contenu', href: '/planning/idees-contenu', icon: Lightbulb },
      { label: 'Tournages', href: '/planning/tournages', icon: Video },
      { label: 'Publications', href: '/planning/publications', icon: Megaphone },
    ],
  },
];

export const PIED_NAVIGATION: NavItem[] = [
  { label: 'Mon compte', href: '/mon-compte', icon: Settings },
];
