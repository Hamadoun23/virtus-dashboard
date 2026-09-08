import type { LucideIcon } from 'lucide-react';
import { Card } from './Card';
import { PageHeader } from './PageHeader';
import { TableVirtus } from './Table';

export function FormulaireEtHistorique({
  icon,
  titre,
  sousTitre,
  champs,
  colonnesHistorique,
  lignesHistorique,
}: {
  icon: LucideIcon;
  titre: string;
  sousTitre: string;
  champs: { label: string; type?: string; placeholder?: string }[];
  colonnesHistorique: string[];
  lignesHistorique: React.ReactNode[][];
}) {
  return (
    <div>
      <PageHeader icon={icon} titre={titre} sousTitre={sousTitre} />

      <div className="grid grid-cols-[1fr_1.6fr] gap-6">
        <Card>
          <h2 className="text-sm font-bold text-white">Nouvelle demande</h2>
          <div className="mt-4 flex flex-col gap-3">
            {champs.map((champ) => (
              <div key={champ.label}>
                <label className="mb-1.5 block text-xs font-semibold text-muted">{champ.label}</label>
                {champ.type === 'textarea' ? (
                  <textarea
                    placeholder={champ.placeholder}
                    rows={3}
                    className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                ) : (
                  <input
                    type={champ.type ?? 'text'}
                    placeholder={champ.placeholder}
                    className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                )}
              </div>
            ))}
            <button className="mt-1 rounded-xl bg-accent px-3 py-2.5 text-xs font-bold text-black">
              Envoyer la demande
            </button>
          </div>
        </Card>

        <div>
          <h2 className="mb-3 text-sm font-bold text-white">Mes demandes précédentes</h2>
          <TableVirtus colonnes={colonnesHistorique} lignes={lignesHistorique} />
        </div>
      </div>
    </div>
  );
}
