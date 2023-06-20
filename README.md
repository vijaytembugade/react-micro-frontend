# Webpack, typescript and react template with Module federation

This repository consist complete webpack and typescript setup for react application. Also included Module federation part including one micro-app build with webpack(react).

## Files and Folder

- webpack folder contain 4 file of webpack.config
  - webpack.common.js : it is common config for both `dev` and `prod` environment.
  - webpack.dev.js : it is for development environment.
  - webpack.prod.js : it is for production environment.
  - webpack.config.js : it is main config file which will be served.
- .babelrc : This file content the babel configuration of for converting ES6 code to backword compatible code of javascript.
- .eslintrc : file configure for linting
- .prettierrc: file containing configuration for formatting with prettier.
- microapp1 : it is one different react application which can be integrated with main application with MF.
- src : it is source folder for main application.  

### NOTE:

webpack.config files are written in ES6 syntax instead of ES5. For that I have updated package.json file, with `type: module` property.

### Module Federation Plugin:

It contain app `microapp1` which is mini application which can be used inside of webpack main template. This is also form of Micro-frontend where one app is integrated with another using Module Federation plugin. This can be improved for further more apps.

## Dependencies:

Application have package.json which have dependencies and dev-dependencies for main app and micro app.

## starting project on local:

1. clone the repo
2. `yarn install` for installing dependencies.
3. cd microapp1
4. `yarn install` in microapp1
5. come back main folder `cd ..`
6. `yarn run main` to start both application
7. to create a build run build command in both the apps (refer package.json for more)
