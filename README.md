# antiadblock-admin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.
``
## Prerequisities

1. Install [nodejs](https://nodejs.org/en/download/package-manager/)
2. Install [yarn](https://yarnpkg.com/en/docs/install#linux-tab)
3. Install [angular-cli](https://github.com/angular/angular-cli)

	```bash
	sudo yarn global add @angular/cli
	sudo ng completion -b > /etc/bash_completion.d/ng
	ng set --global packageManager=yarn
	```
4. Install dependencies

	```bash
	yarn install
	```
5. Clone and run [antiadblock-api](https://gitlab.performax.cz/antiadblock/api)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
You can specify which browser and reporter you want, for example:
```bash
ng test --browsers=Chrome --reporters=kjhtml
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
