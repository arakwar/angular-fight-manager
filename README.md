# FightManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## ROADMAP
- Add a list of defaults tiles in the scrollbar that can be added to the grid with a click
- Save a grid status locally, and load grids
- Zoom in the grid (browser zoom works in desktop, but on mobile I don't know how pinch would work, and browser zoom also affects the sidebar while I'd prefer not to)
- Move the grid, to be free of the fixer width and height of the browser. We could use overflow and scrollbars, but it wouldn't support "negative scroll" properly. I'd like to treat the grid like a 2D platformer map, where you have the level loaded, and you "move" a camera over it.
- Push the map online, so multiple people can conenct on it and see it
- Allow multiple people to interact with the map at the same time
- Either include in the project or fork the project for : Add a initiative list to manage players turn, and add additionnal info on each characters as needed. Informations can be provate or public, so a Game master can have his mminions and boss informations loaded in the map for a fight to come, and players can write down basic info about them to help the Game Master.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
