# Mon Blog

Un blog simple créé avec Eleventy.

## Installation

1. **Clonez ce dépôt :**

    ```bash
    git clone https://github.com/RichetinB/Blog_Stage.git
    ```

2. **Accédez au répertoire du projet :**

    ```bash
    cd mon-blog
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

## Utilisation

- **Démarrez le serveur de développement :**

    ```bash
    npx eleventy --serve
    ```

    Cela lancera un serveur de développement local. Vous pourrez accéder à votre blog à l'adresse `http://localhost:8080`.

- **Générez le site statique :**

    ```bash
    npx eleventy
    ```

    Cela générera les fichiers HTML statiques dans le dossier `_site`.


## Personnalisation

- **Contenu des Articles :**
    - Les articles sont des fichiers HTML dans le dossier `posts/`. Vous pouvez créer de nouveaux articles en ajoutant des fichiers HTML dans ce dossier.

- **Modèles :**
    - Le fichier `_includes/layout.njk` est le modèle utilisé pour chaque page du site. Vous pouvez le personnaliser selon vos besoins.

- **Styles :**
    - Les styles CSS sont dans le dossier `styles/`. Vous pouvez personnaliser le fichier `main.css` pour modifier l'apparence de votre blog.

- **Configuration :**
    - Le fichier `.eleventy.js` contient la configuration d'Eleventy. Vous pouvez modifier cette configuration selon vos besoins.

## Déploiement

- Une fois que vous avez généré votre site statique (`_site/`), vous pouvez le déployer sur n'importe quelle plateforme d'hébergement statique, comme GitHub Pages, Netlify ou Vercel.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
