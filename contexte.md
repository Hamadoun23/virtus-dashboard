# Contexte pour la suite du travail (IDE local)

Ce fichier résume l'état du projet à la fin des sessions de développement à distance, pour reprendre le travail localement (Docker + backend réel).

## État du dépôt

`Hamadoun23/virtus-dashboard`, branche `main`. Un seul repo : frontend React/Vite
(`src/`) + 6 services Django (`backend/`) + passerelle nginx (`gateway/`) +
`docker-compose.yml`. Voir `README.md` pour la structure complète et les ports.

Tout le travail de développement (CRUD, réconciliation backend/frontend, sidebar,
tableaux de bord) a été fait **sans Docker disponible** — vérifié par lecture de
code, appels HTTP simulés (SQLite local quand possible) et un frontend testé
contre un backend entièrement mocké. **Rien de tout ça n'a tourné avec la vraie
pile Docker.** C'est la première chose à faire maintenant.

## Étape 1 — Démarrer la pile

```bash
cp .env.example .env
docker compose up -d --build
```

Puis `http://localhost:8080`. Compte super admin par défaut :
`hcisse@gdamali.net` / `admin` (défini dans `.env`, à changer à la première
connexion).

## Étape 2 — Alimenter les bases avec des données de démonstration

**Les tableaux de bord construits cette session (accueil du hub, RH, Jus
d'orange, Chantiers, Planning, Campagnes) affichent de vraies données —
donc sur une base vide, ils seront vides.** Il faut charger des données
fictives pour que ça se remplisse. Des commandes de seed existent déjà pour
la plupart des services :

```bash
# 1. Identity d'abord — crée le catalogue d'applications + le super admin
docker compose exec identity python manage.py amorcer

# 2. Comptes du personnel (a besoin d'un fichier d'effectif — l'exemple anonyme
#    suffit pour une démo : infra/effectif/personnel.exemple.json)
docker compose exec identity python manage.py importer_comptes

# 3. FinanceRH (RH + Finance) — jeu de démo complet, avec pointages/retards
#    (c'est ce qui alimente la nouvelle page Présences et le dashboard d'accueil)
docker compose exec financerh python manage.py seed_configuration
docker compose exec financerh python manage.py seed_personnel
docker compose exec financerh python manage.py seed_demo --reset --mouvements

# 4. Jus d'orange
docker compose exec jusorange python manage.py create_users
docker compose exec jusorange python manage.py init_articles
docker compose exec jusorange python manage.py populate_sample

# 5. Chantiers
docker compose exec chantiers python manage.py donnees_test

# 6. Planning
docker compose exec planning python manage.py donnees_test
```

### Campagnes — pas de commande de seed existante

**`backend/campagnes` n'a aucune commande de génération de données fictives**
(contrairement aux 5 autres services). À écrire : une commande Django
(`backend/campagnes/campagnes/management/commands/donnees_test.py`, en
suivant le même nom/pattern que Chantiers et Planning) qui crée quelques
campagnes (vente_carte et enrolement_app), des agences, des commerciaux
avec habilitations, des ventes et enrôlements de démo — pour que
`/campagnes` et son tableau de bord (`TableauDeBord.tsx`, qui affiche
`venteTrend`, `classement`, `pctCommerciauxActifs`...) ne soient pas vides.
Le modèle de données est dans `backend/campagnes/campagnes/models.py` et
`backend/campagnes/terrain/models.py`.

## Étape 3 — Vérifier que chaque tableau de bord affiche des vraies données

Une fois les bases peuplées, recharger chaque écran et vérifier que les
chiffres sont cohérents avec ce qui a été inséré (pas de `NaN`, pas de `—`
partout, pas de listes vides alors que des données existent) :

- `/` (accueil du hub) — congés, dossiers à valider, graphique à deux courbes
- `/rh`, `/rh/presences` — solde de congés, pointages
- `/jus/commercial`, `/jus/production`, `/jus/finance`, `/jus/direction`,
  `/jus/reporting` — les 5 tableaux de bord
- `/chantiers` — avancement moyen, liste de projets
- `/planning` — tournages/publications à venir
- `/campagnes` — une fois la commande de seed écrite (étape 2)

## Points d'attention déjà identifiés (à confirmer en conditions réelles)

- Le pont d'authentification hub → chaque service (`backend/*/**/hub.py`,
  JWT RS256 via JWKS) n'a jamais été testé avec un vrai navigateur — vérifier
  qu'un compte connecté au hub arrive bien authentifié sur chaque app.
- Le pont SSO Campagnes (cookie de session Django + JWT du hub, voir
  `src/lib/api/campagnesClient.ts`) n'a jamais tourné en conditions réelles.
- `backend/campagnes` utilise MySQL — c'est le seul service dont le code n'a
  pas pu être testé par exécution réelle (seulement relu et vérifié
  statiquement), donc à surveiller en priorité.
- Les corrections suivantes ont été faites sans pouvoir les revérifier après
  coup avec un vrai backend qui tourne : motif obligatoire (≥10 caractères)
  pour Arrêter/Annuler/Reprogrammer une campagne, justification obligatoire
  dès qu'un avancement de tâche augmente (Chantiers → Saisie du jour).
