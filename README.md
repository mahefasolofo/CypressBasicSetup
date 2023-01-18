# Installation et configuration Cypress

## 1. Créer un nouveau projet
    - Création nouveau Repository dans Github avec fichier Readme.md
    - npm init : fichier Json créé avec les paramètres par défaut

## 2. Installer Cypress
    - ``npm install cypress --save-dev`` : 
        node_modules et package-lock.json créés 

## 3. Configurer Cypress avec Typescript
    - ``npm install --save-dev typescript`` : 
    - Création de tsconfig.json à la racine du projet : avec les valeurs donné dans la documentation de cypress : `npx tsc --init`
    - - essai d'un premier tests E2E : ``npx cypress open`` :
fichier : cypress.config.ts example.cy.ts fichiers dans support er fixtures . créés


- Ajouter  `lint` commande au fichier `package.json`: 
```js
{  
  "scripts": {  
    "lint": "tsc --noEmit"  
  }  
}
```

    


## 4. Ajouter une intégration CI dans Github Actions
1.  Créez un nouveau dépôt GitHub ou utilisez un dépôt existant pour votre projet.
    
2.  Accédez à l'onglet "Actions" dans votre dépôt GitHub pour créer un nouveau workflow.
    
3.  Utilisez l'éditeur de workflow intégré pour créer une configuration de workflow `ci.yml`. La configuration de workflow doit définir les étapes de votre pipeline CI, comme le déploiement, les tests et les vérifications de build.
    
4.  Ajoutez des actions GitHub prédéfinies ou des actions personnalisées pour automatiser les étapes de votre pipeline CI.
    
5.  Testez votre workflow en effectuant une modification dans votre dépôt GitHub et vérifiez que les étapes de votre pipeline CI sont déclenchées correctement.
    
6.  Configurez les paramètres de déclenchement pour définir quand le workflow doit être déclenché, comme lorsque des modifications sont apportées à un certain type de fichier ou lorsque une demande de tirage est ouverte ou fusionnée.
    
7.  Enregistrez et publiez votre workflow pour qu'il soit automatiquement déclenché lorsque des modifications sont apportées à votre dépôt.


## 5. Lancer les tests Cypress dans Github Actions

Création de rapport à l'aide de mochawesome
```bash
- `npm i mochawesome --save-dev`
- cypress.config.ts
	reporter: 'mochawesome',
- ` npx cypress run --reporter mochawesome`
```
Création d'un rapport HTML en local avec mochawesome

- installation de mochawesome-merge pour avoir un seul fichier .json 
`npm install mochawesome-merge --save-dev`

- merge : 
`npx mochawesome-merge "cypress/results/*.json" > mochawesome.json`

- générer HTML : 
`npx marge mochawesome.json`