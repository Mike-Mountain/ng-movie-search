# NgMovieSearch

* This Project was created using a [starter-project](https://github.com/Mike-Mountain/ng-starter) that I built to make protoyping easier.
  The starter project contains boilerplate code that typically consumes time when creating a new project.
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.
* This project was created using a mobile-first methodology. Therefore, it is best viewed on a smaller screen.

## Technical Test instructions:
1. Create a Progressive WEB APP that allows a user to search for a movie and display the details
2.  Use the following Service as the Backend: http://omdbapi.com/
3.  Provide unit tests
4.  Use bootstrap for styling.
5.  Upload your project into your own GIT repository and share the project with us by Tuesday 9/02 @ 8:00

## Running the App:

### Development server
Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
* Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `:prod` flag for a production build.
* Run `npm run pwa` to build the app with the `:prod` flag, and then serve it via [http-server](https://www.npmjs.com/package/http-server).
* Run `npm run pwa:dev` to run an [http-server](https://www.npmjs.com/package/http-server) that points to the `dist` folder.
  Please note that you must have run a build command at least once before you run this command.

### Hosting
The app is hosted with firebase and can be viewed at [ng-media-search.web.app](https://ng-media-search.web.app).

The deployment process builds the app for production and uses the firebase cli to release a new version when running the 
command `npm run firebase:deploy`. This command (along with other firebase-specific files) is only present on the `firebase` branch.

### Running unit tests
Run `npm run test` to execute the unit tests. Code-coverage report will be generated as well.

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
