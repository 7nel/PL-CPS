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

## Écrans visés

Deux usages, deux exigences :

- **Le site** (vue de l'année, pages des mois, cartes d'activité, repères) doit rester lisible et utilisable sur **ordinateur, tablette et téléphone**. Toute modification se vérifie aux trois largeurs, sans défilement horizontal.
- **La vue projetée** (bouton « Projeter ») est la seule vue **optimisée pour le beamer** : texte dimensionné pour être lu du fond de la classe, support affiché le plus grand possible, commandes au clavier. Elle reste utilisable sur tablette et téléphone, où les blocs s'empilent (support, chrono, explications), mais c'est le rendu au beamer qui prime en cas d'arbitrage.

## Projeter en classe

Le bouton **Projeter** ouvre l'activité en grand pour le beamer. La vue projetée se compose du **support** (la diapositive) et de blocs séparés, chacun avec sa couleur, la même tout au long de l'année :

- **Consigne** en bleu, **Exemples** en jaune, **Moment de réflexion** en rose ;
- **Chrono** en vert : le bloc entier se remplit de gauche à droite à mesure que le temps passe, comme dans PL-planif’. Il n'y a plus de barre de progression séparée.

**Masquer et afficher.** Chaque bloc porte une icône « œil barré » qui le masque. Un bloc masqué devient une pastille « + » de sa couleur dans l'en-tête ; un clic dessus le réaffiche. Le support occupe la place libérée : sans explications, il prend toute la largeur et le chrono passe en bandeau dessous ; sans rien d'autre, il remplit l'écran. Tout est affiché à l'ouverture de chaque activité : les réglages ne sont pas gardés d'une activité à l'autre.

**Support seul.** Un clic sur le support l'affiche seul, sur fond noir, sur tout l'écran (vrai plein écran quand le navigateur le permet ; sur iPhone, il couvre la fenêtre). Un clic ou `Échap` revient à la vue projetée.

**En-tête.** Il ne porte que le titre et quatre icônes : activité précédente, activité suivante, plein écran, fermer. Les boutons de la vue projetée, y compris ceux qui masquent un bloc, font 44 px de haut.

**Consigne longue.** Quand les blocs de texte dépassent la hauteur de l’écran, ils défilent à l’intérieur de leur colonne et un bouton « Suite » avec un fondu en bas l’indique. Il disparaît une fois le bas atteint. Avec « réduire les animations », le défilement est instantané.

Si le chrono est masqué pendant qu'il tourne, il réapparaît à la fin du temps. Il affiche alors un court message calme, sans son.

Pour la respiration carrée, on choisit 4, 5 ou 6 cycles et un seul bouton lance le guide et le chrono ensemble. Quand le chrono est masqué, un bouton « Démarrer » apparaît sous le guide.

Raccourcis en projection : `←` `→` activité précédente ou suivante, `Espace` démarrer ou mettre en pause le chrono (quel que soit le bouton sélectionné), `C` consigne, `E` exemples, `R` réflexion, `T` chrono (masquer ou afficher), `F` plein écran, `Échap` fermer. Un rappel de ces raccourcis s’affiche en bas de l'écran sur ordinateur et se masque avec le bouton « Masquer ce rappel » (le choix est gardé dans le navigateur). Le focus clavier reste dans la projection et revient sur le bouton « Projeter » à la fermeture.

Sur les cartes d'activité, la consigne est dans un encadré bleu, la couleur « consigne » de la vue projetée.

## Lisibilité

Tout le texte courant fait 18 px au minimum. Seule exception assumée : la liste des références APA, à 16 px. Les mois sans activités sont rangés dans la rangée « Bientôt » de la vue de l’année, avec leur objectif et leurs outils sur la page du mois.

## Trouver une activité

La vue de l’année affiche les dix mois dans une seule frise : pour chacun, le mois, la compétence et son état (« En cours », nombre d’activités, ou « À construire »). Le mois en cours est en couleur ; chaque case ouvre le mois. Sur la page d’une compétence, les onglets de classe (Activités, L’essentiel) sont à gauche et ceux de l’équipe (Repères, et Pistes quand elles ne sont pas destinées aux élèves) à droite, après « Pour l’équipe ». Quatre boutons sous les onglets filtrent les activités par durée : 3 min ou moins, 4 à 6 min, 7 min et plus. Chaque carte montre la durée, le bouton « Projeter » en tête, puis l’objectif ; la consigne complète est dans « Consigne et détails ».

## Mise en ligne

Aucune installation ni compte n'est nécessaire, et aucune donnée n'est collectée. Seul le choix du thème clair ou sombre est gardé dans le navigateur.

- **En ligne** : activer GitHub Pages sur ce dépôt (Settings → Pages → Deploy from branch → `main` → `/root`). Adresse : `https://7nel.github.io/PL-CPS/` (respecter les majuscules).
- **En local** : le contenu est chargé depuis `data/competences.json`, ce que les navigateurs bloquent quand on ouvre `index.html` par double-clic. Pour travailler hors ligne, lancer un petit serveur dans le dossier (par exemple `python3 -m http.server`) puis ouvrir `http://localhost:8000`.
- **Hors ligne en classe** : après une première visite en ligne, `sw.js` met le site, les polices (`fonts/`) et les supports en cache, et il s'ouvre ensuite sans réseau. Le contenu est récupéré en priorité sur le réseau ; après une mise à jour du site, la copie en cache est remplacée à la visite suivante. Pour forcer le renouvellement des supports, changer le numéro de `CACHE` dans `sw.js`.
- **Polices** : Atkinson Hyperlegible et Lexend sont hébergées dans `fonts/` (latin uniquement), sans appel à Google Fonts.

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
