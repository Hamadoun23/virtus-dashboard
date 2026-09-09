import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Globe } from 'lucide-react';

const PHOTOS = ['/login-1.jpg', '/login-2.jpg'];

export default function Connexion() {
  const navigate = useNavigate();
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const minuteur = setInterval(() => setPhotoIndex((i) => (i + 1) % PHOTOS.length), 6000);
    return () => clearInterval(minuteur);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-bg text-white">
      {/* Volet gauche : identité visuelle GDA, photos réelles du parc de véhicules. */}
      <div className="relative hidden w-[55%] overflow-hidden lg:block">
        {PHOTOS.map((photo, index) => (
          <div
            key={photo}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url('${photo}')`, opacity: index === photoIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

        <div className="relative flex h-full flex-col justify-between p-10">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow">
              <img src="/logo-gda.png" alt="GD&A" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">GDA Hub</span>
          </div>

          <div>
            <h1 className="font-display max-w-md text-3xl font-bold leading-tight text-white">
              Un compte, tout le groupe.
            </h1>
            <p className="mt-3 max-w-sm text-sm text-white/80">
              RH, Finance, Jus d'orange, Chantiers, Planning — une seule connexion pour circuler entre les
              applications de GDA.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <MapPin size={13} />
                Cité El Farako, Rue 817, Porte 50
              </span>
              <span className="flex items-center gap-2">
                <Phone size={13} />
                (+223) 76 05 51 51
              </span>
              <span className="flex items-center gap-2">
                <Globe size={13} />
                www.gdamali.net
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Volet droit : formulaire de connexion. */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow">
              <img src="/logo-gda.png" alt="GD&A" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">GDA Hub</span>
          </div>

          <h2 className="font-display text-2xl font-bold text-white">Connexion</h2>
          <p className="mt-1 text-sm text-muted">Accédez à votre espace GDA Hub</p>

          <form
            className="mt-6 flex flex-col gap-3"
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
    </div>
  );
}
