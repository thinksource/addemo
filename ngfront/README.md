# Ngfront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### About Responsive design

I do not write much Responsive designing of CSS, since it is too much of them if you want to adaptive ever screen of device, just have 3 samples of them.

1, 
at index.html have   

```
<link rel="stylesheet" type="text/css"
　　　　media="screen and (min-device-width: 1200px)"
　　　　href="largeScreen.css" />
```
and the file largeScreen.css have screen focus css.

2, the table componment have lots screen defined css at table.component.scss

3, the Search-bar componment using bootstrap defined css for diferent size of screen for 

```
<label class="offset-md-2 offset-lg-3 offset-xl-4">Search: &nbsp;</label>
```

different screen using different offset position for this label and this line