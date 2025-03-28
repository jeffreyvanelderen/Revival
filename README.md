# Revival

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

First, set the correct node version using NVM:

```bash
nvm use
```

Download node_modules

```bash
npm install
```

Create `.env` with the needed properties, see `.env-example`. [You might need to create your own dog api key!](https://thedogapi.com/signup)

```.env
NG_APP_DOG_API_KEY=123
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

```bash
ng generate service service-name
```

```bash
ng generate guard guard-name
```

```bash
ng generate directive directive-name
```

```bash
ng generate pipe pipe-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
