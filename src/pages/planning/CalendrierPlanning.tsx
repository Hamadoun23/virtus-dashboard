import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { publicationsCalendrier, tournages, type StatutPublication, type StatutTournage } from './donnees';

const JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MOIS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];

const COULEUR_TOURNAGE: Record<StatutTournage, string> = {
  planifie: '#ff8a4c',
  a_venir: '#facc15',
  en_retard: '#f87171',
  termine: '#34d399',
  annule: '#6b7280',
};

const COULEUR_PUBLICATION: Record<StatutPublication, string> = {
  planifiee: '#60a5fa',
  a_venir: '#facc15',
  en_retard: '#f87171',
  publiee: '#34d399',
  annulee: '#6b7280',
};

function joursDuMois(mois: number, annee: number) {
  const premierJour = new Date(annee, mois, 1);
  // Lundi = 0 ... Dimanche = 6, plutôt que le dimanche = 0 par défaut de JS.
  const decalage = (premierJour.getDay() + 6) % 7;
  const nbJours = new Date(annee, mois + 1, 0).getDate();

  const cases: { date: Date | null }[] = [];
  for (let i = 0; i < decalage; i++) cases.push({ date: null });
  for (let jour = 1; jour <= nbJours; jour++) cases.push({ date: new Date(annee, mois, jour) });
  while (cases.length % 7 !== 0) cases.push({ date: null });

  const semaines: { date: Date | null }[][] = [];
  for (let i = 0; i < cases.length; i += 7) semaines.push(cases.slice(i, i + 7));
  return semaines;
}

function versISO(date: Date) {
  const annee = date.getFullYear();
  const mois = String(date.getMonth() + 1).padStart(2, '0');
  const jour = String(date.getDate()).padStart(2, '0');
  return `${annee}-${mois}-${jour}`;
}

export function CalendrierPlanning() {
  const [periode, setPeriode] = useState({ mois: 8, annee: 2024 }); // 8 = septembre (0-indexé)

  const semaines = useMemo(() => joursDuMois(periode.mois, periode.annee), [periode]);

  const changerMois = (delta: number) => {
    setPeriode((p) => {
      const total = p.mois + delta;
      const annee = p.annee + Math.floor(total / 12);
      const mois = ((total % 12) + 12) % 12;
      return { mois, annee };
    });
  };

  return (
    <Card className="!p-0 overflow-hidden">
      <div className="flex items-center justify-between p-5 pb-0">
        <h2 className="text-base font-bold text-white">
          Planning global — {MOIS[periode.mois]} {periode.annee}
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => changerMois(-1)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-surface2"
          >
            <ChevronLeft size={14} className="text-white" />
          </button>
          <button
            onClick={() => changerMois(1)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-surface2"
          >
            <ChevronRight size={14} className="text-white" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto p-5">
        <table className="w-full min-w-[720px] border-separate border-spacing-1">
          <thead>
            <tr>
              {JOURS.map((jour) => (
                <th key={jour} className="pb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  {jour}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semaines.map((semaine, si) => (
              <tr key={si}>
                {semaine.map((cellule, ci) => {
                  if (!cellule.date) {
                    return <td key={ci} className="h-24 rounded-xl bg-transparent" />;
                  }
                  const iso = versISO(cellule.date);
                  const tournagesJour = tournages.filter((t) => t.dateISO === iso);
                  const publicationsJour = publicationsCalendrier.filter((p) => p.dateISO === iso);
                  return (
                    <td key={ci} className="h-24 w-[14.2%] rounded-xl border border-border bg-surface2/60 p-1.5 align-top">
                      <span className="text-[11px] font-semibold text-muted">{cellule.date.getDate()}</span>
                      <div className="mt-1 space-y-1">
                        {tournagesJour.map((t) => (
                          <div
                            key={t.id}
                            title={`Tournage — ${t.client}`}
                            className="truncate rounded px-1.5 py-0.5 text-[10px] font-semibold text-white"
                            style={{ backgroundColor: `${COULEUR_TOURNAGE[t.statut]}cc` }}
                          >
                            🎥 {t.client}
                          </div>
                        ))}
                        {publicationsJour.map((p) => (
                          <div
                            key={p.id}
                            title={`Publication — ${p.client}`}
                            className="truncate rounded px-1.5 py-0.5 text-[10px] font-semibold text-white"
                            style={{ backgroundColor: `${COULEUR_PUBLICATION[p.statut]}cc` }}
                          >
                            📢 {p.client}
                          </div>
                        ))}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-4 border-t border-border p-5 text-[11px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: COULEUR_TOURNAGE.a_venir }} /> Tournage à venir
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: COULEUR_TOURNAGE.en_retard }} /> En retard
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: COULEUR_TOURNAGE.termine }} /> Terminé / Publiée
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: COULEUR_PUBLICATION.planifiee }} /> Publication planifiée
        </span>
      </div>
    </Card>
  );
}
