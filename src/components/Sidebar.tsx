import { Bell, ChevronRight, Search, Settings, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../lib/navigation';
import { Avatar } from './ui/Avatar';

function estActif(chemin: string, href: string) {
  if (href === '/') return chemin === '/';
  return chemin === href || chemin.startsWith(`${href}/`);
}

export function Sidebar() {
  const { pathname } = useLocation();
  const [lightMode, setLightMode] = useState(false);

  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col overflow-hidden border-r border-border bg-surface">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-black">
          <span className="text-lg font-black">↗</span>
        </div>
        <div className="leading-tight">
          <p className="text-lg font-extrabold text-white">GDA Hub</p>
          <p className="text-xs text-muted">Espace connecté</p>
        </div>
      </div>

      <div className="mx-4 flex items-center gap-2 rounded-2xl border border-border bg-surface2 px-3 py-2.5">
        <Search size={16} className="text-muted" />
        <input
          placeholder="Rechercher..."
          className="w-full bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
        />
      </div>

      <nav className="mt-4 flex-1 space-y-5 overflow-y-auto px-3 pb-4">
        {NAVIGATION.map((groupe) => (
          <div key={groupe.key}>
            <div className="mb-1 flex items-center gap-2 px-3">
              <span className={`h-1.5 w-1.5 rounded-full ${groupe.color}`} />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{groupe.label}</p>
            </div>
            <div className="space-y-0.5">
              {groupe.items.map((item) => {
                const Icone = item.icon;
                const actif = estActif(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      actif ? 'bg-accent text-black' : 'text-muted hover:bg-surface2 hover:text-white'
                    }`}
                  >
                    <Icone size={16} className="shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-1 border-t border-border px-3 py-3">
        <button className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface2 hover:text-white">
          <span className="flex items-center gap-3">
            <Bell size={17} />
            Notifications
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-black">
            3
          </span>
        </button>
        <Link
          to="/mon-compte"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted hover:bg-surface2 hover:text-white"
        >
          <Settings size={17} />
          Paramètres
        </Link>
      </div>

      <div className="border-t border-border p-3">
        <button
          onClick={() => setLightMode((v) => !v)}
          className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface2 px-3 py-2.5"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-white">
            <Sun size={16} className="text-accent2" />
            Mode clair
          </span>
          <span
            className={`flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${
              lightMode ? 'bg-accent' : 'bg-surface'
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full bg-white transition-transform ${
                lightMode ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        <Link
          to="/mon-compte"
          className="mt-3 flex items-center gap-3 rounded-2xl border border-border bg-surface2 px-3 py-2.5"
        >
          <Avatar label="Hamadoun Cissé" size={36} />
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold text-white">Hamadoun Cissé</p>
            <p className="text-xs text-muted">Développeur</p>
          </div>
          <ChevronRight size={16} className="text-muted" />
        </Link>
      </div>
    </aside>
  );
}
