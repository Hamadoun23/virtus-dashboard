import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Globe, MapPin, Phone } from 'lucide-react';

const PHOTOS = ['/login-1.jpg', '/login-2.jpg'];

export default function Connexion() {
  const navigate = useNavigate();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [motDePasseVisible, setMotDePasseVisible] = useState(false);

  useEffect(() => {
    const minuteur = setInterval(() => setPhotoIndex((i) => (i + 1) % PHOTOS.length), 6000);
    return () => clearInterval(minuteur);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-bg text-white">
      {/* Volet gauche : identité visuelle GDA portée par les photos réelles du parc — le logo est déjà floqué sur les véhicules, inutile de le dupliquer ici. */}
      <div className="relative hidden w-[58%] overflow-hidden lg:block">
        {PHOTOS.map((photo, index) => (
          <div
            key={photo}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{
              backgroundImage: `url('${photo}')`,
              opacity: index === photoIndex ? 1 : 0,
              transform: index === photoIndex ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 1.5s ease-in-out, transform 6s ease-out',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        <div
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #ff6a2b, transparent 70%)' }}
        />

        <div className="relative flex h-full flex-col justify-between p-12">
          <span className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
            Groupe GDA
          </span>

          <div className="max-w-lg">
            <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] text-white">
              Un compte,
              <br />
              tout le groupe.
            </h1>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/75">
              RH, Finance, Jus d'orange, Chantiers, Planning — une seule connexion pour circuler
              entre toutes les applications de GDA.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <div className="flex gap-1.5">
                {PHOTOS.map((photo, index) => (
                  <span
                    key={photo}
                    className="h-1 rounded-full transition-all duration-500"
                    style={{
                      width: index === photoIndex ? 22 : 8,
                      backgroundColor: index === photoIndex ? '#ff6a2b' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-xs text-white/65">
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
      <div className="relative flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-[380px]">
          <span className="mb-8 block font-display text-sm font-bold uppercase tracking-[0.2em] text-accent2 lg:hidden">
            GDA Hub
          </span>

          <h2 className="font-display text-[1.75rem] font-bold text-white">Bon retour</h2>
          <p className="mt-1.5 text-sm text-muted">Connectez-vous à votre espace GDA Hub</p>

          <form
            className="mt-8 flex flex-col gap-4"
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
                className="w-full rounded-xl border border-border bg-surface2 px-3.5 py-3 text-sm text-white placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-semibold text-muted">Mot de passe</label>
                <button type="button" className="text-xs font-semibold text-accent2 hover:text-accent">
                  Mot de passe oublié ?
                </button>
              </div>
              <div className="relative">
                <input
                  type={motDePasseVisible ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-surface2 px-3.5 py-3 pr-10 text-sm text-white placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
                <button
                  type="button"
                  onClick={() => setMotDePasseVisible((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                >
                  {motDePasseVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="mt-1 flex w-fit items-center gap-2 text-xs text-muted">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-border bg-surface2 accent-accent" />
              Rester connecté
            </label>

            <button
              type="submit"
              className="group mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-black transition-transform hover:brightness-110 active:scale-[0.98]"
            >
              Se connecter
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-muted">
            Accès réservé aux collaborateurs GDA · besoin d'aide ? contactez votre administrateur.
          </p>
        </div>
      </div>
    </div>
  );
}
