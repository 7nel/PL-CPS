# PL-CPS'

Programme annuel des compétences psychosociales pour le Cycle d'orientation (9e–11e HarmoS) : une compétence par mois, des activités courtes à mener en classe (2 à 15 minutes) et des outils que les élèves peuvent réutiliser dans tout l'établissement.

Conçu et rédigé par **Pauline Lentes** et **Melody Ehrensperger**.

## Contenu

| Mois | Compétence | État |
|---|---|---|
| Septembre | Conscience de soi | 7 activités |
| Octobre | Communication efficace | 6 activités |
| Novembre | Empathie | 8 activités |
| Décembre | Gestion du stress | 9 activités |
| Janvier à juin | Estime de soi, gestion des conflits, résolution de problèmes, prise de décision, pensée critique, résilience | Objectifs et outils du programme, activités à venir |

Pour chaque compétence :

- **Activités** : objectif, durée, matériel, consigne, variante et questions de réflexion.
- **L'essentiel** : les principes de base à présenter aux élèves.
- **Pistes** ou **Guide élève** : idées complémentaires et stratégies à utiliser seul.
- **Repères** : pour l'équipe enseignante, ce que la recherche soutient, ce qui demande des nuances, avec les références en APA 7.

La page **« Pourquoi les CPS à l'école ? »** présente le cadre (définition de l'OMS, lien entre émotions et apprentissage, recommandations de mise en place).

## Projeter en classe

Le bouton **Projeter** ouvre le support de l'activité en grand pour le beamer, avec la consigne, les questions de réflexion et un minuteur réglé sur la durée prévue. La respiration carrée dispose d'un guide animé sur 6 cycles.

Raccourcis en projection : `←` `→` activité précédente ou suivante, `Espace` démarrer ou mettre en pause le minuteur, `F` plein écran, `Échap` fermer.

## Mise en ligne

Aucune installation ni compte n'est nécessaire, et aucune donnée n'est collectée. Seul le choix du thème clair ou sombre est gardé dans le navigateur.

- **En ligne** : activer GitHub Pages sur ce dépôt (Settings → Pages → Deploy from branch → `main` → `/root`). Adresse : `https://7nel.github.io/PL-CPS/` (respecter les majuscules).
- **En local** : le contenu est chargé depuis `data/competences.json`, ce que les navigateurs bloquent quand on ouvre `index.html` par double-clic. Pour travailler hors ligne, lancer un petit serveur dans le dossier (par exemple `python3 -m http.server`) puis ouvrir `http://localhost:8000`.

Chaque compétence a sa propre adresse, par exemple `…/PL-CPS/#stress` ou `…/PL-CPS/#communication`.

## Structure

- `index.html` : la page (mise en page, navigation, projection, minuteur). Elle lit le contenu au chargement.
- `data/competences.json` : tout le contenu des mois, un objet par compétence.
- `supports/` : les diapositives à projeter, en JPG 16:9.
- `icon-*.png`, `manifest.json` : icône et métadonnées pour l'écran d'accueil (tablette, téléphone, ordinateur).

## Mettre à jour le contenu

Pas besoin de toucher `index.html` : on modifie `data/competences.json` et on pousse le commit. Le site se met à jour tout seul (chargement avec contournement du cache).

Champs d'une compétence : `id`, `mois`, `nom`, `sous`, `hue` (`--h-orange`, `--h-green`, `--h-yellow`, `--h-pink`, `--h-blue`, `--h-plum`), `img`, `objectif`, `outils`, et selon l'avancement `essentiel`, `groupes`, `pistes`, `reperes`, ou `idees` pour un mois à construire.

Champs d'une activité (dans `groupes[].acts`) : `titre`, `img`, `duree` (texte affiché), `min` (durée du minuteur, en minutes), `objectif`, `materiel`, `consigne`, `exemples`, `variante`, `reflexion`, et en option `principes`, `source: "doc"` ou `guide: "breath"`.

Niveaux des `reperes.claims` : `solid`, `nuance`, `flou`, `todo`.

Un mois « à construire » devient complet dès qu'on lui ajoute un champ `groupes`.

## Licence

Code et contenu pédagogique : **Creative Commons Attribution – Pas d'utilisation commerciale 4.0 International (CC BY-NC 4.0)**, © 2025–2026 Pauline Lentes et Melody Ehrensperger. Voir [LICENSE](LICENSE).

Vous pouvez utiliser, partager et adapter cet outil pour votre classe ou votre établissement, à condition de créditer les deux autrices et de ne pas en faire un usage commercial.

Les illustrations Canva des supports et les polices restent sous leur licence d'origine : voir [NOTICE.md](NOTICE.md).
