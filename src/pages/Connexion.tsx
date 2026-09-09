import { useNavigate } from 'react-router-dom';

export default function Connexion() {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/motif-orange.jpg')" }}
    >
      <div className="w-full max-w-sm rounded-3xl border border-border bg-surface p-8 backdrop-blur-xl">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-black">
            <span className="text-lg font-black">↗</span>
          </div>
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">GDA Hub</p>
            <p className="text-xs text-muted">Un compte, tout le groupe</p>
          </div>
        </div>

        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-muted">Adresse professionnelle</label>
            <input
              type="email"
              placeholder="prenom.nom@gdamali.net"
              className="w-full rounded-xl border border-border bg-surface2 px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-muted">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-border bg-surface2 px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
          <button type="submit" className="mt-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-black">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
