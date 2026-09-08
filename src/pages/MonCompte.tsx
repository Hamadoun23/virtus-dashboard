import { Settings } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Avatar } from '../components/ui/Avatar';

export default function MonCompte() {
  return (
    <div>
      <PageHeader icon={Settings} titre="Mon compte" sousTitre="Informations personnelles et mot de passe" />

      <div className="grid grid-cols-[auto_1fr] gap-6">
        <Card className="flex flex-col items-center gap-3">
          <Avatar label="Hamadoun Cissé" size={72} />
          <button className="rounded-xl border border-border bg-surface2 px-3 py-2 text-xs font-semibold text-white">
            Changer la photo
          </button>
        </Card>

        <Card className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted">Nom complet</label>
              <input
                defaultValue="Hamadoun Cissé"
                className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted">Fonction</label>
              <input
                defaultValue="Développeur"
                className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-muted">Adresse professionnelle</label>
              <input
                defaultValue="hcisse@gdamali.net"
                className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
              />
            </div>
          </div>
          <button className="mt-2 w-fit rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-black">
            Enregistrer
          </button>
        </Card>
      </div>

      <Card className="mt-4">
        <h2 className="text-sm font-bold text-white">Mot de passe</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirmer"
            className="w-full rounded-xl border border-border bg-surface2 px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
        <button className="mt-3 w-fit rounded-xl border border-border bg-surface2 px-4 py-2.5 text-xs font-bold text-white">
          Mettre à jour le mot de passe
        </button>
      </Card>
    </div>
  );
}
