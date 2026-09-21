/* ============================================================================
   CONFIGURATION DU COURS — SEUL FICHIER À MODIFIER POUR CHANGER LES DONNÉES
   ============================================================================

   L'emplacement des données du TP est défini ici, et nulle part ailleurs.
   Modifiez ce fichier, poussez sur GitHub : le cours entier pointe vers la
   nouvelle source en quelques secondes, sans toucher à index.html.

   TROIS SOURCES POSSIBLES — décommentez celle que vous utilisez.

   A · Archive dans le dépôt (donnees/DONNEES_TD2.zip)
       Le plus simple. Limite GitHub : 100 Mo par fichier, et le dépôt
       est déconseillé au-delà de 1 Go. Convient si le SRTM est découpé
       sur l'emprise de la Ngounié plutôt que livré en dalle entière.

   B · GitHub Releases
       Jusqu'à 2 Go par fichier, hors historique Git — donc le dépôt
       reste léger et les clones rapides. Recommandé si l'archive dépasse
       50 Mo. Créez une release, glissez le .zip, copiez le lien obtenu.

   C · Hébergement externe
       Drive, Nextcloud, serveur de l'université. Collez l'URL de
       téléchargement direct (pas la page d'aperçu).
   ============================================================================ */

window.COURS_CONFIG = {

  depot: "cours-semiologie-qgis",

  donnees: {

    /* ---- A · dans le dépôt (actif par défaut) ---- */
    nom:    "DONNEES_TD2.zip",
    url:    "donnees/DONNEES_TD2.zip",

    /* ---- B · GitHub Releases ----
    nom:    "DONNEES_TD2.zip",
    url:    "https://github.com/VOTRE-COMPTE/cours-semiologie-qgis/releases/download/donnees-v1/DONNEES_TD2.zip",
    */

    /* ---- C · hébergement externe ----
    nom:    "DONNEES_TD2.zip",
    url:    "https://nextcloud.unicaen.fr/s/XXXXXXXX/download",
    */

    taille: "à renseigner",
    maj:    "septembre 2026",
    srs:    "WGS 84 / UTM 32S — EPSG:32732",

    note:   "Décompressez l'archive à un emplacement définitif avant de commencer : "
          + "les projets QGIS mémorisent des chemins relatifs vers les couches.",

    /* Contenu annoncé aux étudiants. Ajustez les noms de fichiers
       pour qu'ils correspondent exactement à votre archive. */
    contenu: [
      ["Dep_Gabon.shp",          "Découpage départemental du Gabon — polygones"],
      ["Geologie.shp",           "Carte géologique nationale — polygones"],
      ["Nomenclature_Geol.xlsx", "Table de correspondance des faciès — sans géométrie"],
      ["SRTM.tif",               "Modèle numérique de terrain, 30 m — raster"],
      ["hydro.shp",              "Réseau hydrographique — lignes"]
    ]
  }
};
