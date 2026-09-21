# De Bertin à QGIS

Cours interactif de sémiologie graphique appliquée à QGIS 3.x.
Dix modules, contrôles de lecture corrigés automatiquement, TP sur la province
de la Ngounié (Gabon).

**Louis Kadryl Yembi-Yembi** — Géographe, géomaticien, cartographe
Université de Caen Normandie — L3 SIG/DAT

La partie sémiologie s'appuie sur l'intervention de Mahefa Mamy Rakotoarisoa
(Université de Caen Normandie) et sur Jacques Bertin, *Sémiologie graphique*,
Paris/La Haye, Gauthier-Villars/Mouton, 1967.

---

## Mettre le cours en ligne

1. Créez un dépôt GitHub — par exemple `cours-semiologie-qgis`.
2. Déposez-y le contenu de ce dossier (`index.html`, `config.js`, `.nojekyll`, `donnees/`).
3. Dans **Settings → Pages**, choisissez *Deploy from a branch*, branche `main`, dossier `/ (root)`.
4. Le cours est en ligne à `https://VOTRE-COMPTE.github.io/cours-semiologie-qgis/` au bout d'une minute.

Le fichier `.nojekyll` empêche GitHub de passer le site dans Jekyll — sans lui,
les dossiers commençant par un souligné seraient ignorés.

## Déposer les données du TP

L'emplacement des données est défini **dans le seul fichier `config.js`**.
Trois montages sont prévus et documentés en commentaire dans ce fichier :

| | Montage | Limite | Quand l'utiliser |
|---|---|---|---|
| **A** | Archive dans `donnees/` | 100 Mo par fichier | SRTM déjà découpé sur l'emprise de la Ngounié |
| **B** | GitHub Releases | 2 Go par fichier | Archive au-delà de 50 Mo — **recommandé** |
| **C** | Lien externe | aucune | Drive, Nextcloud, serveur de l'université |

Pour passer de l'un à l'autre : décommentez le bloc voulu dans `config.js`,
poussez. Aucune autre ligne du site n'est à toucher.

### Montage A — archive dans le dépôt

```bash
cd G:\DISQUE_DUR\Cours_SIG\QGIS_COURS
# Compressez DONNEES_TD2 en un seul .zip, puis :
copy DONNEES_TD2.zip  <dépôt>\donnees\
git add donnees/DONNEES_TD2.zip
git commit -m "Données du TD2"
git push
```

Vérifiez d'abord le poids : `git` refuse les fichiers de plus de 100 Mo.
Si le SRTM brut est volumineux, découpez-le sur l'emprise de la Ngounié
avant de le livrer — c'est de toute façon ce que le module 9 demande de faire.

### Montage B — GitHub Releases

1. Onglet **Releases** → *Draft a new release*, tag `donnees-v1`.
2. Glissez `DONNEES_TD2.zip` dans la zone *Attach binaries*.
3. Publiez, copiez le lien du fichier joint.
4. Reportez-le dans `config.js`, bloc **B**, et commentez le bloc **A**.

---

## Structure

```
index.html     le cours entier — une page, routage par ancre (#m1, #donnees)
config.js      ← LE SEUL FICHIER À MODIFIER pour changer la source des données
.nojekyll      désactive Jekyll
donnees/       archive du TP (montage A)
```

`index.html` est généré : ne l'éditez pas à la main. La source est
`src/app.html`, reconstruite par `python3 build.py`.

## Progression des étudiants

Les résultats aux contrôles sont conservés dans le `localStorage` du navigateur
de l'étudiant. Ils ne remontent nulle part : aucun serveur, aucune collecte.
Un étudiant qui change de poste repart de zéro — dites-le-leur.

Si vous souhaitez un jour relever les notes, il faudra un service externe
(formulaire, LMS) ; le cours est conçu pour pouvoir s'y brancher sans réécriture.

## État des modules

| # | Module | État |
|---|---|---|
| 01 | La carte est un langage | **en ligne** |
| 02 | Les données sources | en rédaction |
| 03 | Les modes d'implantation | en rédaction |
| 04 | Les variables visuelles | en rédaction |
| 05 | La couleur | en rédaction |
| 06 | Analyse de cartes | en rédaction |
| 07 | QGIS — prise en main | en rédaction |
| 08 | TP Ngounié — formations géologiques | en rédaction |
| 09 | TP Ngounié — relief | en rédaction |
| 10 | Mise en page et export | en rédaction |
