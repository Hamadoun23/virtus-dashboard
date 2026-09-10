import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    // Servi derrière la passerelle nginx de GDA Hub (voir docker-compose.yml
    // à la racine du dépôt) : le Host vu par Vite n'est pas localhost.
    host: true,
    allowedHosts: true,
    watch: {
      // Le dépôt héberge aussi les 6 services Django (backend/) et leurs
      // dépendances (gateway/, libs/, infra/) : les exclure évite à Vite de
      // surveiller des milliers de fichiers Python sans rapport avec ce
      // frontend, qui ralentiraient le rechargement à chaque `pip install`.
      ignored: ['**/backend/**', '**/gateway/**', '**/libs/**', '**/infra/**'],
    },
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
});
