import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Accueil from './pages/Accueil';
import Administration from './pages/Administration';
import Connexion from './pages/Connexion';
import MonCompte from './pages/MonCompte';

import ChantiersDetail from './pages/chantiers/Detail';
import ChantiersListe from './pages/chantiers/Liste';

import Commercial from './pages/jus/Commercial';
import Direction from './pages/jus/Direction';
import Finance from './pages/jus/Finance';
import Production from './pages/jus/Production';
import Reporting from './pages/jus/Reporting';
import Tresorerie from './pages/jus/Tresorerie';
import Utilisateurs from './pages/jus/Utilisateurs';

import ClientsCommercial from './pages/jus/commercial/Clients';
import Commandes from './pages/jus/commercial/Commandes';
import Factures from './pages/jus/commercial/Factures';
import Paiements from './pages/jus/commercial/Paiements';
import Prospection from './pages/jus/commercial/Prospection';
import Ventes from './pages/jus/commercial/Ventes';

import Articles from './pages/jus/production/Articles';
import Bouteilles from './pages/jus/production/Bouteilles';
import Conditionnements from './pages/jus/production/Conditionnements';
import Cueillettes from './pages/jus/production/Cueillettes';
import Inventaires from './pages/jus/production/Inventaires';
import Producteurs from './pages/jus/production/Producteurs';
import Productions from './pages/jus/production/Productions';
import Receptions from './pages/jus/production/Receptions';

import Appro from './pages/jus/reporting/Appro';
import Distribution from './pages/jus/reporting/Distribution';
import Emballage from './pages/jus/reporting/Emballage';
import Entrepot from './pages/jus/reporting/Entrepot';
import Fabrication from './pages/jus/reporting/Fabrication';
import Recolte from './pages/jus/reporting/Recolte';

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
          <Route path="/jus/commercial/prospection" element={<Prospection />} />
          <Route path="/jus/commercial/clients" element={<ClientsCommercial />} />
          <Route path="/jus/commercial/ventes" element={<Ventes />} />
          <Route path="/jus/commercial/commandes" element={<Commandes />} />
          <Route path="/jus/commercial/factures" element={<Factures />} />
          <Route path="/jus/commercial/paiements" element={<Paiements />} />

          <Route path="/jus/production" element={<Production />} />
          <Route path="/jus/production/producteurs" element={<Producteurs />} />
          <Route path="/jus/production/cueillettes" element={<Cueillettes />} />
          <Route path="/jus/production/articles" element={<Articles />} />
          <Route path="/jus/production/receptions" element={<Receptions />} />
          <Route path="/jus/production/productions" element={<Productions />} />
          <Route path="/jus/production/conditionnements" element={<Conditionnements />} />
          <Route path="/jus/production/bouteilles" element={<Bouteilles />} />
          <Route path="/jus/production/inventaires" element={<Inventaires />} />

          <Route path="/jus/finance" element={<Finance />} />
          <Route path="/jus/finance/tresorerie" element={<Tresorerie />} />

          <Route path="/jus/direction" element={<Direction />} />
          <Route path="/jus/direction/utilisateurs" element={<Utilisateurs />} />

          <Route path="/jus/reporting" element={<Reporting />} />
          <Route path="/jus/reporting/recolte" element={<Recolte />} />
          <Route path="/jus/reporting/appro" element={<Appro />} />
          <Route path="/jus/reporting/fabrication" element={<Fabrication />} />
          <Route path="/jus/reporting/emballage" element={<Emballage />} />
          <Route path="/jus/reporting/entrepot" element={<Entrepot />} />
          <Route path="/jus/reporting/distribution" element={<Distribution />} />

          <Route path="/chantiers" element={<ChantiersListe />} />
          <Route path="/chantiers/:id" element={<ChantiersDetail />} />

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
