import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Accueil from './pages/Accueil';
import Administration from './pages/Administration';
import Chantiers from './pages/Chantiers';
import Connexion from './pages/Connexion';
import MonCompte from './pages/MonCompte';
import Commercial from './pages/jus/Commercial';
import Direction from './pages/jus/Direction';
import Finance from './pages/jus/Finance';
import Production from './pages/jus/Production';
import Reporting from './pages/jus/Reporting';
import Clients from './pages/planning/Clients';
import IdeesContenu from './pages/planning/IdeesContenu';
import Publications from './pages/planning/Publications';
import TableauDeBordPlanning from './pages/planning/TableauDeBord';
import Tournages from './pages/planning/Tournages';
import Absences from './pages/rh/Absences';
import Annuaire from './pages/rh/Annuaire';
import Historique from './pages/rh/Historique';
import MesDemandes from './pages/rh/MesDemandes';
import MonEspace from './pages/rh/MonEspace';
import Organisation from './pages/rh/Organisation';
import Permissions from './pages/rh/Permissions';
import Retards from './pages/rh/Retards';
import TableauDeBordRh from './pages/rh/TableauDeBord';
import Validations from './pages/rh/Validations';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />

        <Route element={<App />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/mon-compte" element={<MonCompte />} />

          <Route path="/rh" element={<TableauDeBordRh />} />
          <Route path="/rh/absences" element={<Absences />} />
          <Route path="/rh/annuaire" element={<Annuaire />} />
          <Route path="/rh/historique" element={<Historique />} />
          <Route path="/rh/mes-demandes" element={<MesDemandes />} />
          <Route path="/rh/mon-espace" element={<MonEspace />} />
          <Route path="/rh/organisation" element={<Organisation />} />
          <Route path="/rh/permissions" element={<Permissions />} />
          <Route path="/rh/retards" element={<Retards />} />
          <Route path="/rh/validations" element={<Validations />} />

          <Route path="/jus/commercial" element={<Commercial />} />
          <Route path="/jus/production" element={<Production />} />
          <Route path="/jus/finance" element={<Finance />} />
          <Route path="/jus/direction" element={<Direction />} />
          <Route path="/jus/reporting" element={<Reporting />} />

          <Route path="/chantiers" element={<Chantiers />} />

          <Route path="/planning" element={<TableauDeBordPlanning />} />
          <Route path="/planning/clients" element={<Clients />} />
          <Route path="/planning/idees-contenu" element={<IdeesContenu />} />
          <Route path="/planning/tournages" element={<Tournages />} />
          <Route path="/planning/publications" element={<Publications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
