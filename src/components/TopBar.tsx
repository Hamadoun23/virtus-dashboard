import { Bell, Command, Crown, Moon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { NAVIGATION } from '../lib/navigation';
import { AvatarStack, Avatar } from './ui/Avatar';

function titrePour(pathname: string): string | null {
  for (const groupe of NAVIGATION) {
    for (const item of groupe.items) {
      const actif = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);
      if (actif) return item.label === 'Tableau de bord' ? groupe.label : item.label;
    }
  }
  return null;
}

export function TopBar() {
  const { pathname } = useLocation();
  const titre = titrePour(pathname);

  return (
    <header className="flex items-center justify-between border-b border-border bg-bg px-8 py-4">
      <div>
        {titre ? (
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface2 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-white">{titre}</span>
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface2 px-3 py-1.5">
          <Crown size={14} className="text-accent2" />
          <span className="text-xs font-semibold text-white">Membre Pro</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface2 px-3 py-1.5">
          <Command size={14} className="text-muted" />
          <span className="text-xs font-semibold text-muted">Raccourcis</span>
        </div>

        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface2">
          <Moon size={14} className="text-muted" />
        </button>

        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface2">
          <Bell size={14} className="text-muted" />
        </button>

        <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface2 px-2 py-1.5">
          <AvatarStack labels={['CH', 'JL']} size={22} />
          <span className="pr-1 text-xs font-semibold text-muted">+2</span>
        </div>

        <Avatar label="Hamadoun Cissé" size={34} />
      </div>
    </header>
  );
}
