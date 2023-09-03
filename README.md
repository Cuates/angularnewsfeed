# angularnewsfeed
angularnewsfeed

## Table of Contents
* [Version](#version)
* [Important Note](#important-note)
* [Prerequisite Environment](#prerequisite-environment)
* [Generating Angular app with extra features](#generating-angular-app-with-extra-features)
* [Basic Commands](#basic-commands)
* [Change Page Title](#change-page-title)
* [Change FavIcon](#change-favicon)
* [Setup the Angular project in Nginx conf file](#setup-the-angular-project-in-nginx-conf-file)
* [Modify the following files to change the custom uri](#modify-the–following-files-to-change-the-custom-uri)
* [Links](#links)

### Version
* 0.0.1

### **Important Note**
* This script was written with Angular 13.2.5 methods on NodeJS 17.6.0
* Updates to script with Angular 16.0.3 methods on NodeJS 18.16.0

### Prerequisite Environment
* Install
  * NodeJS
    * Use the following web site to download for your operating system (Windows/Mac OS/Linux)
      * https://nodejs.org/
      * `node -v`
* Npm
  * `npm install -g npm@latest`
  * `npm -v`

### Generating Angular app with extra features
* Generate Angular App
  * Navigate to project
    * `cd /path/of/project/location/`
      * Execute any of the commands below
        * `ng new <project-name>`
          * Type Yes for routing
          * Choose SCSS
        * `ng new <project-name> --style=scss/css/... --skipTests --routing=true/false`
          * NOTE: A newer flag will be utilized from now on
            * `ng new <project-name> --style=scss/css/... --skip-tests=true/false --routing=true/false`
          * **WAIT FOR THIS TO FINISH**
* Open Command Prompt without Administrator
  * Navigate to project
    * `cd /path/inside/parent/directory`
      * Serve Angular project (default HTTP host and port number)
        * `ng serve`
* Start Angular which opens in a web browser
  * `ng serve -o`
* Check for outdated packages
  * Make sure you are in the correct directory to install the font in the new angular project
    * Open a terminal and navigate to the project location
      * Execute the following command in the powershell terminal
        * `npm outdated`
* Update packages
  * Make sure you are in the correct directory to install the font in the new angular project
    * Open a terminal and navigate to the project location
      * Execute the following command in the powershell terminal
        * ng update <package_name>
        * i.e. `ng update @angular/material`
      * Not sure if this works but a website says if you are updating from an existing lower version to a newer version, then remove the package first and then add the new package to the project again
        * Remove existing package
          * npm remove <package_name>
          * i.e. `npm remove @angular/material`
        * Add new package
          * npm add <package_name>
          * i.e. `npm add @angular/material`
* Install package
  * Make sure you are in the correct directory for nexus to install the font in the new angular project
    * Open a terminal and navigate to the project location
      * Execute the following command in the powershell terminal
        * ng add <package_name>
        * i.e. `ng add @angular/material`
* Bootstrap (Make sure you are in the Angular project folder)
  * Install Bootstrap
    * `npm install --save bootstrap`
      * **WAIT FOR THIS TO FINISH**
  * Reconfigure the angular.json file to include the new bootstrap files
    * Open the angular.json file in the scripts sections and add the two lines for bootstrap.
      * <pre>
          "styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
          ],
          "scripts": [
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
          ]
        </pre>
    * Save and exit
* FontAwesome
  * Install
    * `ng add @fortawesome/angular-fontawesome`
      * Would you like to proceed? Y
      * Select the following Free Icons
        * Free Solid Icons
        * Free Regular Icons
        * Free Brands Icons
        * Do not select the following Icons as they are not free to use
          * Pro Solid Icons    [ Requires: https://fontawesome.com/pro ]
          * Pro Regular Icons  [ Requires: https://fontawesome.com/pro ]
          * Pro Light Icons    [ Requires: https://fontawesome.com/pro ]
          * Pro Duotone Icons  [ Requires: https://fontawesome.com/pro ]
      * Click Enter
        * **WAIT FOR THIS TO FINISH**
  * Utilize the font awesome in your project add the following lines to your app.module.ts file. Your icons will differ from what is shown below.
    * <pre>
        import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
        import { faBars as faBars } from '@fortawesome/free-solid-svg-icons';
        import { faTimes as faTimes } from '@fortawesome/free-solid-svg-icons';
        import { faHome as faHome } from '@fortawesome/free-solid-svg-icons';
        import { faPlus as faPlus } from '@fortawesome/free-solid-svg-icons';
        import { faSearch as faSearch } from '@fortawesome/free-solid-svg-icons';
        import { faInfo as faInfo } from '@fortawesome/free-solid-svg-icons';
        import { faEdit as faEdit } from '@fortawesome/free-solid-svg-icons';
        import { faSpinner as faSpinner } from '@fortawesome/free-solid-svg-icons';
        import { faTrashAlt as faTrashAlt } from '@fortawesome/free-solid-svg-icons';
        import { faThumbsUp as faThumbsUp } from '@fortawesome/free-solid-svg-icons';
        import { faThumbsDown as faThumbsDown } from '@fortawesome/free-solid-svg-icons';
        import { faExternalLinkAlt as faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
        import { faFilm as faFilm } from '@fortawesome/free-solid-svg-icons';
        import { faNewspaper as faNewspaper } from '@fortawesome/free-solid-svg-icons';
        import { faExclamationTriangle as faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
      </pre>
  * Add the following lines of code to your app.module.ts file as well. Create a constructor function to retrieve the font awesome icon(s) of choice. Put the constructor into the export class AppModule section at the bottom of the page
    * <pre>
        // Add font awesome to the constructor
        constructor(library: FaIconLibrary) {
          // Adding the icons to be utilized throughout the web pages
          library.addIcons(faBars, faTimes, faHome, faInfo, faSearch, faPlus, faEdit, faSpinner, faTrashAlt, faThumbsUp, faThumbsDown, faExternalLinkAlt, faFilm, faNewspaper, faExclamationTriangle);
        }
      </pre>
* Angular Material Package
  * `ng add @angular/material`
    * <pre>
        Would you like to proceed? (Y/n) Yes
        (You can customize the following color if the prebuilt colors do not meet your style)
        Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys) Pick either Indigo/Pink or Custom
        ❯ Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
          Deep Purple/Amber  [ Preview: https://material.angular.io?theme=deeppurple-amber ]
          Pink/Blue Grey     [ Preview: https://material.angular.io?theme=pink-bluegrey ]
          Purple/Green       [ Preview: https://material.angular.io?theme=purple-green ]
          Custom
        ? Set up global Angular Material typography styles? (y/N) Yes
        ? Include the Angular animations module?
        > Include and enable animations
        ? Set up browser animations for Angular Material? (Y/n) Yes
      </pre>
    * The above will automatically be inserted into the angular.json file under the styles sections of the file
      * `"./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",`
* Install Material Datepicker and Time Picker Package **NOT COMPATIBLE WITH ANGULAR 16+ AT THE MOMENT**
  * `npm install @angular-material-components/datetime-picker`
* Install Material Moment Adapter Package **NOT COMPATIBLE WITH ANGULAR 16+ AT THE MOMENT**
  * `npm install @angular-material-components/moment-adapter`
* Utilize the Material Datepicker and Time Picker and Material Moment Adapter in your project, add the following lines to your app.module.ts file. Your settings will differ from what is shown below.
  * Add the following into the import section of the src/app/app.module.ts file
    * <pre>
        import { FormsModule, ReactiveFormsModule } from '@angular/forms';

        import { MatDatepickerModule } from '@angular/material/datepicker';
        import { MatInputModule } from '@angular/material/input';
        import { MatSelectModule } from '@angular/material/select';
        import { MatButtonModule } from '@angular/material/button';
        import { MatNativeDateModule } from '@angular/material/core';
        import { MatIconModule } from '@angular/material/icon';
        import { MatFormFieldModule } from '@angular/material/form-field';

        import { NgxMatMomentAdapter } from '@angular-material-components/moment-adapter';
        import {NgxMatDateFormats, NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule, NGX_MAT_DATE_FORMATS, NgxMatDateAdapter } from '@angular-material-components/datetime-picker';

        Add the following customer date formats under the import section at the top
        // Setting custom date time display for date time pickers input field
        export const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
          parse: {
            dateInput: "YYYY-MM-DD HH:mm:ss"
          },
          display: {
            dateInput: "YYYY-MM-DD HH:mm:ss",
            monthYearLabel: "MMM YYYY",
            dateA11yLabel: "LL",
            monthYearA11yLabel: "MMMM YYYY"
          }
        };
      </pre>
  * Add the following to the NgModule import section
    * <pre>
        FormsModule,
        HttpClientModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        ReactiveFormsModule
      </pre>
  * Add the following to the NgModule providers section towards the bottom of the page
    * <pre>
        {
          provide: NgxMatDateAdapter,
          useClass: NgxMatMomentAdapter,
        },
        {
          provide: NGX_MAT_DATE_FORMATS,
          useValue: CUSTOM_DATE_FORMATS
        }
      </pre>
* Include the following to your code to get date time picker displaying properly
  * Navigate to the .ts component of choice file and add the following to the import section
    * <pre>
        import { FormControl } from '@angular/forms';
      </pre>
  * Add the following to the export class component name section
    * <pre>
        public dateControl = new FormControl(new Date());
      </pre>
    * Save and Exit
  * Navigate to the .html component of choice file and add the following to the html code
    * <pre>
        &#60;mat-form-field&#62;
          &#60;input class="inputStyleDateTimePicker" matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date & time" [formControl]="dateControl"&#62;
          &#60;mat-datepicker-toggle matSuffix [for]="$any(picker)"&#62;&#60;/mat-datepicker-toggle&#62;
          &#60;ngx-mat-datetime-picker #picker [showSpinners]="true" [showSeconds]="true" [stepHour]="1" [stepMinute]="1" [stepSecond]="1" [touchUi]="false" [enableMeridian]="false"
          [disableMinute]="false" [hideTime]="false">&#60;/ngx-mat-datetime-picker&#62;
        &#60;/mat-form-field&#62;
      </pre>
    * Save and Exit
  * Navigate to the .scss component of choice file and add the following to the css code
    * <pre>
        // Input field styling
        .mat-form-field {
          font-size: .3em;
        }

        // Date Time Picker input field style
        .inputStyleDateTimePicker {
          font-size: 3.5em;
        }

        // Input field icon styling
        .mat-datepicker-toggle {
          font-size: 3.5em;
        }
      </pre>
    * Save and Exit
* Scroll To Top of Page
  * `ng add ngx-scrolltop`
    * <pre>
        ℹ Using package manager: npm
        ✔ Found compatible package version: ngx-scrolltop@4.1.2.
        ✔ Package information loaded.

        The package ngx-scrolltop@4.1.2 will be installed and executed.
        Would you like to proceed? (Y/n) Y
      </pre>
    * The following tag will be added to the app.component.html
      * `<ngx-scrolltop></ngx-scrolltop>`
        * NOTE: If you do not want the scroll top on all pages, then remove the ngx-scrolltop tags from app.component.html. Add the tags to the specific component pages of choice.
    * The following will be added to the app.module.ts file
      * `import { NgxScrollTopModule } from 'ngx-scrolltop';`
      * Also, to the NgModule imports section
        * `NgxScrollTopModule`

### Basic Commands
* Generate component
  * Spelled out flags 
    * `ng generate component <name-of-component> --skip-tests=true`
  * Short version flags
    * `ng g c <name-of-component> --skip-tests=true`
  * If you want the component to be placed into a folder
    * `ng g c <folder_name>/<name-of-component> --skip-tests=true`
* Generate service
  * Spelled out flags
    * `ng generate service <name-of-service> --skip-tests=true`
  * Short version flags
    * `ng g s <name-of-service> --skip-tests=true`
  * If you want the service to be placed into a folder
    * `ng g s <folder_name>/<name-of-service> --skip-tests=true`
* Generate Interface
  * Spelled out flags
    * `ng generate interface <name-of-interface> [type]`
  * Short version flags
    * `ng g i <name-of-interface> [type]`
  * i.e. `ng g i <name-of-interface> interface`
* Generate Class
  * Spelled out flags
    * `ng generate class <name-of-class> --skip-tests=true`
  * Short version flags
    * `ng g cl <name-of-class> --skip-tests=true`
  * i.e. `ng g cl <name-of-class> --skip-tests=true`
* Generate Enum (Enumerator)
  * Spelled out flags
    * `ng generate enum <name-of-enum> --type=enum`
  * Short version flags
    * `ng g e <name-of-enum> --type=enum`
  * i.e. `ng g e <name-of-class> --type=enum`
* Generate Directive
  * Spelled out flags
    * `ng generate directive <name-of-directive>`
  * Short version flags
    * `ng g d <name-of-directive>`
  * i.e. `ng g d <name-of-directive>`

### Change Page Title
* Get the title to display for each component
  * Add the following line to the app.module.ts file
    * <pre>
        import { BrowserModule, Title } from '@angular/platform-browser';
      </pre>
  * Add the following to the NgModule providers section
    * <pre>
        Title
      </pre>
  * Add the following line to the component.ts of choice file
    * <pre>
        import { Title } from '@angular/platform-browser';
      </pre>
  * Add the following line in the export class section of the component.ts of choice file
    * <pre>
        title = 'page_title';
      </pre>
  * Add the following line in the export class constructor() parameter function of the component.ts of choice file
    * <pre>
        constructor(private titleService:Title) { }
      </pre>
  * Add the following line in the export class ngOnIntit() function of the component.ts of choice file
    * <pre>
        this.titleService.setTitle(this.title);
      </pre>

### Change FavIcon
* Overwrite the favicon.ico with your icon by replacing the file in src directory

### Setup the Angular project in Nginx conf file
* Open your nginx configuration of choice and add the following two sections to the file in your "server" section
  * <pre>
      listen &#60;port_number&#62;
      server_name &#60;domain_name/container_name&#62;
      root /path/to/nginx/html;
      index index.html

      location &#60;/angular/base_url&#62; {
        alias &#60;/path/to/nginx/html&#62;
        try_files $uri /index.html?$args;
        autoindex off;
      }
    </pre>
  * Save and Exit
* Test and restart nginx if successful test
  * Test Nginx
    * `sudo nginx -t`
  * Restart Nginx Service
    * `sudo systemctl restart nginx`

### Modify the following files to change the custom uri
* If you have a specific URI that you are targeting, then proceed with the following modification
  * Navigate to the angular project src folder and locate the "&#60;base href=""&#62;" line in src/index.html file
    * Change line
      * From
        * `<base href="/">`
      * To
        * `<base href="/<uri_name>/">`
    * Save and Exit

### Build Application for Production
* Navigate to project directory
  * `cd /path/inside/parent/directory`
    * Run ng build command in Angular CLI
      * To get the preview of the application, run the following command:
        * `ng serve --configuration production`
          * This starts a local HTTP server with production files. Navigate to http://localhost:4200/ to view the application.
      * Execute the following command to get the application ready for deployment
        * `ng build --configuration production`
          * If you get the following warning and or error message(s), then you will need to up the maximumWarning and or maximumError in the angular.json file.
            * "Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 835.05 kB with a total of 1.30 MB.
            * Error: bundle initial exceeded maximum budget. Budget 1.00 MB was not met by 311.05 kB with a total of 1.30 MB."
          * Locate the "configurations" section in angular.json for your type of build (dev/stage/prod). Make the necessary changes to your angular.json file for the configuration build you are trying to execute and all should be fixed.
            * From
              * <pre>
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                </pre>
            * To
              * <pre>
                  "maximumWarning": "2mb",
                  "maximumError": "2mb"
                </pre>
          * Save and Exit
          * Re-execute build command above

### Links
[nvm](https://github.com/nvm-sh/nvm) <br />
[how-to-install-node-js-on-centos-8](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-centos-8) <br />
[Angular Error initial exceeded maximum budget Budget 5.00 MB was not met by 197.06 kB with a total of 5.19 MB](https://stackoverflow.com/questions/68523451/angular-error-initial-exceeded-maximum-budget-budget-5-00-mb-was-not-met-by) <br />
[angular deployment](https://angular.io/guide/deployment) <br />
[how-to-bundle-an-angular-app-for-production](https://www.geeksforgeeks.org/how-to-bundle-an-angular-app-for-production/) <br />
[angular build](https://angular.io/cli/build) <br />
[how-to-use-environment-variable-in-angularexample](https://www.itsolutionstuff.com/post/how-to-use-environment-variable-in-angularexample.html) <br />
[when-running-ng-build-the-index-html-does-nothing](https://stackoverflow.com/questions/51718020/when-running-ng-build-the-index-html-does-nothing) <br />
[how-can-i-declare-a-global-variable-in-angular-2-typescript](https://stackoverflow.com/questions/36158848/how-can-i-declare-a-global-variable-in-angular-2-typescript) <br />
[ref_pxtoemconversion](https://www.w3schools.com/TAGS/ref_pxtoemconversion.asp) <br />
[what-noopener-noreferrer-nofollow-explained](https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/) <br />
[getbootstrap position](https://getbootstrap.com/docs/5.1/utilities/position/) <br />
[how-do-i-detect-the-user-s-browser-and-apply-a-specific-css-file](https://stackoverflow.com/questions/5621749/how-do-i-detect-the-user-s-browser-and-apply-a-specific-css-file) <br />
[sass-use-variables-across-multiple-files](https://stackoverflow.com/questions/17598996/sass-use-variables-across-multiple-files) <br />
[angular-calling-parent-component-function-from-child-component-5dcccdc771d9](https://medium.com/@sohailnazar4/angular-calling-parent-component-function-from-child-component-5dcccdc771d9) <br />
[how-to-overlay-one-div-over-another](https://www.w3docs.com/snippets/html/how-to-overlay-one-div-over-another.html) <br />
[how-to-disable-mat-input-in-angular-code-example](https://newbedev.com/how-to-disable-mat-input-in-angular-code-example) <br />
[how-to-change-height-in-mat-form-field](https://stackoverflow.com/questions/54760371/how-to-change-height-in-mat-form-field) <br />
[changing-border-color-in-mat-form-field](https://stackoverflow.com/questions/51096529/changing-border-color-in-mat-form-field) <br />
[styling-mat-form-field-input-in-angular-material](https://stackoverflow.com/questions/48540533/styling-mat-form-field-input-in-angular-material) <br />
[angular-material-datepicker-validation](https://www.concretepage.com/angular-material/angular-material-datepicker-validation) <br />
[how-to-check-form-is-valid-or-not-in-angularexample](https://www.itsolutionstuff.com/post/how-to-check-form-is-valid-or-not-in-angularexample.html) <br />
[how-to-set-a-custom-error-message-to-a-form-in-angular](https://stackoverflow.com/questions/60000152/how-to-set-a-custom-error-message-to-a-form-in-angular) <br />
[form-validators](https://www.ngdevelop.tech/angular/tutorial/form-validators/) <br />
[angular-form-control-example](https://appdividend.com/2019/12/16/angular-form-control-example/) <br />
[angular.forms/FormControl/setErrors/typescript-formcontrol-seterrors-method-examples](https://typescript.hotexamples.com/examples/%40angular.forms/FormControl/setErrors/typescript-formcontrol-seterrors-method-examples.html)<br />
[angular FormControl](https://angular.io/api/forms/FormControl) <br />
[how-to-clear-an-angular-reactive-form-input-values](https://stackoverflow.com/questions/54937287/how-to-clear-an-angular-reactive-form-input-values) <br />
[angular DatePipe](https://angular.io/api/common/DatePipe) <br />
[angular-10-formatdate-method](https://www.geeksforgeeks.org/angular-10-formatdate-method/) <br />
[angular-date-pipe-formatting-date-times-in-angular-with-examples](https://www.angularjswiki.com/angular/angular-date-pipe-formatting-date-times-in-angular-with-examples/) <br />
[angular-material-form-validation](https://code-maze.com/angular-material-form-validation/) <br />
[input Add example of using mat-error with parent formgroup validation](https://github.com/angular/components/issues/8513) <br />
[angular-material-show-mat-error-on-button-click](https://stackoverflow.com/questions/46745171/angular-material-show-mat-error-on-button-click) <br />
[angular-formcontrol-validators](https://www.concretepage.com/angular/angular-formcontrol-validators) <br />
[material angular form field](https://v7.material.angular.io/components/form-field/overview) <br />
[hex-color-picker](https://colors-picker.com/hex-color-picker/) <br />
[color-picker](https://webbrowsertools.com/color-picker) <br />
[color-names](https://www.colorhexa.com/color-names) <br />
[shades-of-white-color-names-html-hex-rgb-codes](https://www.color-meanings.com/shades-of-white-color-names-html-hex-rgb-codes) <br />
[html-color-white](https://html-color.codes/white) <br />
[angular-regex-url-pattern-validation-example-tutorial](https://remotestack.io/angular-regex-url-pattern-validation-example-tutorial/) <br />
[angular-disable-button-example.html](https://www.netjstech.com/2020/04/angular-disable-button-example.html) <br />
[material angular button](https://material.angular.io/components/button/overview) <br />
[angular-material-design-how-to-add-custom-button-color](https://stackoverflow.com/questions/45144023/angular-material-design-how-to-add-custom-button-color) <br />
[angular button-types-example](https://stackblitz.com/edit/angular-xzbxx4?file=app%2Fbutton-types-example.html) <br />
[angular-material-and-changing-fonts](https://stackoverflow.com/questions/43747518/angular-material-and-changing-fonts) <br />
[spinner-loads-for-every-button-when-clicked-on-a-specific-button](https://stackoverflow.com/questions/62211625/spinner-loads-for-every-button-when-clicked-on-a-specific-button) <br />
[how-to-change-spin-speed-for-fa-icon-element-i](https://stackoverflow.com/questions/55572850/how-to-change-spin-speed-for-fa-icon-element-in-angular-font-awesome) <br />
[create-button-spinner-when-clicked-in-angular-5](https://stackoverflow.com/questions/50303328/create-button-spinner-when-clicked-in-angular-5) <br />
[how-to-add-a-loading-spinner-to-an-angular-material-button-step-by-step-guide](https://danielk.tech/home/how-to-add-a-loading-spinner-to-an-angular-material-button-step-by-step-guide) <br />
[how-to-access-json-array-object-in-html-using-angular](https://stackoverflow.com/questions/28175381/how-to-access-json-array-object-in-html-using-angular) <br />
[elementref-in-angular](https://www.tektutorialshub.com/angular/elementref-in-angular/) <br />
[angular-viewchild-access-component](https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component) <br />
[angular-material-input-clear-button-icon-lay-out-fails](https://stackoverflow.com/questions/53480147/angular-material-input-clear-button-icon-lay-out-fails) <br />
[angular-clear-input-field](https://reactgo.com/angular-clear-input-field/) <br />
[material angular input](https://v7.material.angular.io/components/input/overview) <br />
[angular-material-select](https://www.educba.com/angular-material-select/) <br />
[angular-material-109-mat-select-tutorial-with-local-and-dynamic-http-response](https://www.freakyjolly.com/angular-material-109-mat-select-tutorial-with-local-and-dynamic-http-response/) <br />
[access-material-select-options](https://juristr.com/blog/2020/06/access-material-select-options/) <br />
[mat-select-in-angular-material](https://www.geeksforgeeks.org/mat-select-in-angular-material/) <br />
[angular-material-109-mat-select-tutorial-with-local-and-dynamic-http-response](https://www.freakyjolly.com/angular-material-109-mat-select-tutorial-with-local-and-dynamic-http-response/) <br />
[how-to-use-mat-select-trigger-with-ngfor](https://stackoverflow.com/questions/56231754/how-to-use-mat-select-trigger-with-ngfor) <br />
[typescript-use-correct-version-of-settimeout-node-vs-window](https://stackoverflow.com/questions/45802988/typescript-use-correct-version-of-settimeout-node-vs-window) <br />
[onchange-equivalent-in-angular2](https://stackoverflow.com/questions/36366375/onchange-equivalent-in-angular2) <br />
[how-to-match-value-with-regex-in-angular](https://stackoverflow.com/questions/59407562/how-to-match-value-with-regex-in-angular) <br />
[regexr](https://regexr.com/) <br />
[angular-how-to-remove-element-from-arrayexample.html](https://www.itsolutionstuff.com/post/angular-how-to-remove-element-from-arrayexample.html) <br />
[access-key-and-value-of-object-using-ngfor](https://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor) <br />
[how-to-loop-through-object-properties-with-ngfor-in-angular-59e8](https://dev.to/sandeepbalachandran/how-to-loop-through-object-properties-with-ngfor-in-angular-59e8) <br />
[angular-5-how-to-display-array-of-objects-in-html-by-ngfor](https://stackoverflow.com/questions/52148255/angular-5-how-to-display-array-of-objects-in-html-by-ngfor) <br />
[angular app.component.html 01](https://stackblitz.com/edit/angular-g8dmif?file=src%2Fapp%2Fapp.component.html) <br />
[angular-on-keyup-enter-send-the-current-text-of-an-inpu](https://stackoverflow.com/questions/54345085/angular-on-keyup-enter-send-the-current-text-of-an-input-to-a-method) <br />
[angular-5-button-submit-on-enter-key-press](https://stackoverflow.com/questions/50129245/angular-5-button-submit-on-enter-key-press) <br />
[Angular 13 tutorial - event handling & making function part 7](https://www.youtube.com/watch?v=6LRBT4goYvE) <br />
[how-to-call-an-angular-component-on-click-event-angular](https://stackoverflow.com/questions/58795311/how-to-call-an-angular-component-on-click-event-angular) <br />
[how-to-get-value-of-input-field-in-typescript-file-angular-4](https://pretagteam.com/question/how-to-get-value-of-input-field-in-typescript-file-angular-4) <br />
[data-transfer-one-component-to-another-angular-7-c076272c78e1](https://medium.com/@nodexperts_88267/data-transfer-one-component-to-another-angular-7-c076272c78e1) <br />
[angular-get-input-value-multiple-ways](https://www.cloudhadoop.com/angular-get-input-value-multiple-ways/) <br />
[mozilla CSS @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) <br />
[css3-spin-animation](https://stackoverflow.com/questions/14859322/css3-spin-animation) <br />
[how-to-add-a-body-to-angular-httpclient-delete-function](https://stackoverflow.com/questions/46049082/how-to-add-a-body-to-angular-httpclient-delete-function) <br />
[angular-httpclient-post Body](https://www.concretepage.com/angular/angular-httpclient-post#Body) <br />
[angular-httpclient-get-example](https://www.concretepage.com/angular-2/angular-httpclient-get-example) <br />
[angular httpclient get-params](https://www.angularjswiki.com/httpclient/get-params/) <br />
[angular app.component.html 02](https://stackblitz.com/edit/angular-harudq?file=src%2Fapp%2Fapp.component.html) <br />
[how-to-share-the-http-response-between-two-components-in-angular-6](https://stackoverflow.com/questions/51739644/how-to-share-the-http-response-between-two-components-in-angular-6) <br />
[pass-api-data-from-one-componen](https://stackoverflow.com/questions/47376442/pass-api-data-from-one-component-into-another-component/47385677#47385677) <br />
[angular-13-httpclient-http-services-tutorial-exampleexample](https://www.itsolutionstuff.com/post/angular-13-httpclient-http-services-tutorial-exampleexample.html) <br />
[angular-service-example](https://www.cloudhadoop.com/angular-service-example/) <br />
[angular-13-services-example-tutorial](https://www.tutsmake.com/angular-13-services-example-tutorial/) <br />
[angular-13-httpclient-http-services-example](https://www.tutsmake.com/angular-13-httpclient-http-services-example/) <br />
[angular-service-tutorial-with-example](https://www.positronx.io/angular-service-tutorial-with-example/) <br />
[angular-service-example-crud-operations](https://www.freakyjolly.com/angular-service-example-crud-operations/) <br />
[Test JSON data string](http://jsonplaceholder.typicode.com/posts) <br />
[angular-httpheaders](https://www.tektutorialshub.com/angular/angular-httpheaders/) <br />
[angular-ngfor-template-element](https://ultimatecourses.com/blog/angular-ngfor-template-element) <br />
[ngfor-repeating-components](https://stackoverflow.com/questions/37520170/ngfor-repeating-components) <br />
[angular generate component-command](https://angular.io/cli/generate#component-command) <br />
[do-you-know-how-to-resolve-cors-issues-in-angular-9d818474825f](https://medium.com/weekly-webtips/do-you-know-how-to-resolve-cors-issues-in-angular-9d818474825f) <br />
[javascript-how-to-access-the-return-value-of-a-promise-object-1bck](https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck) <br />
[angular/use-ngif-else-on-angular](https://www.delftstack.com/howto/angular/use-ngif-else-on-angular/) <br />
[angular-http-get-with-parameter](https://stackoverflow.com/questions/44280303/angular-http-get-with-parameter) <br />
[show-a-loading-gif-for-each-http-request-angular-4](https://stackoverflow.com/questions/45323108/show-a-loading-gif-for-each-http-request-angular-4) <br />
[angular defining-observers](https://angular.io/guide/observables#defining-observers) <br />
[Observable subscribe](https://rxjs-dev.firebaseapp.com/api/index/class/Observable#subscribe-) <br />
[subscribe-is-deprecated-use-an-observer-instead-o](https://stackoverflow.com/questions/55472124/subscribe-is-deprecated-use-an-observer-instead-of-an-error-callback) <br />
[Refine subscribe and tap signatures](https://github.com/ReactiveX/rxjs/issues/4159) <br />
[fix subscribe Deprecate null starting parameter signatures for subscribe](https://github.com/ReactiveX/rxjs/pull/4202) <br />
[angular-material-components moment-adapter](https://www.npmjs.com/package/@angular-material-components/moment-adapter) <br />
[cannot-find-module-angular-material-moment-adapter](https://stackoverflow.com/questions/47816319/cannot-find-module-angular-material-moment-adapter) <br />
[how-to-remove-space-bottom-mat-form-field](https://stackoverflow.com/questions/53684763/how-to-remove-space-bottom-mat-form-field) <br />
[momentjsbdisplaying format](https://momentjs.com/docs/#/displaying/format/) <br />
[material angular form-field](https://material.angular.io/components/form-field/overview) <br />
[material angular theming](https://material.angular.io/guide/theming) <br />
[material angular floating-label](https://material.angular.io/components/form-field/overview#floating-label) <br />
[custom-theme-for-angular-material-components-series-part-1-create-a-theme](https://indepth.dev/posts/1320/custom-theme-for-angular-material-components-series-part-1-create-a-theme) <br />
[create-angular-material-8-custom-theme](https://www.positronx.io/create-angular-material-8-custom-theme/) <br />
[demo-ngx-mat-datetime-picker app.component.html](https://stackblitz.com/edit/demo-ngx-mat-datetime-picker?file=src%2Fapp%2Fapp.component.html) <br />
[3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-i](https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/) <br />
[angular datepicker-formats-example](https://stackblitz.com/edit/angular-d2qoxi-iy68bi?file=app%2Fdatepicker-formats-example.html) <br />
[change-time-format-in-datetime-picker-input-reactive-forms](https://stackoverflow.com/questions/62167547/change-time-format-in-datetime-picker-input-reactive-forms) <br />
[datepicker-in-angular](https://www.delftstack.com/howto/angular/datepicker-in-angular/) <br />
[mat-datetimepicker](https://github.com/kuhnroyal/mat-datetimepicker) <br />
[mozilla datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) <br />
[att_input_type_datetime-local.asp](https://www.w3schools.com/tags/att_input_type_datetime-local.asp) <br />
[how-to-set-bootstrap-timepicker-using-datetimepicker-library](https://www.geeksforgeeks.org/how-to-set-bootstrap-timepicker-using-datetimepicker-library/) <br />
[format-daty-i-godziny-w-ngx-mat-datetime-picker](https://zigzac.pl/questions/6020629/jak-moge-dostosowac-format-daty-i-godziny-w-ngx-mat-datetime-picker) <br />
[how-can-i-customize-date-and-time-format-in-ngx-mat-datetim](https://stackoverflow.com/questions/62767985/how-can-i-customize-date-and-time-format-in-ngx-mat-datetime-picker) <br />
[angular-moment-picker](https://indrimuska.github.io/angular-moment-picker/) <br />
[angular-moment-picker momentpickerprovider](https://github.com/indrimuska/angular-moment-picker#momentpickerprovider) <br />
[angular bootstrap datepicker](https://angular-ui.github.io/bootstrap/#!#%2Fdatepicker) <br />
[top-10-date-picker-components-directives-for-angular](https://angularscript.com/top-10-date-picker-components-directives-for-angular/) <br />
[material angular /datepicker](https://material.angular.io/components/datepicker/overview) <br />
[angular-material-109-datepicker-timepicker-tutorial](https://www.freakyjolly.com/angular-material-109-datepicker-timepicker-tutorial/) <br />
[angular-material-datepicker-change-format-of-selected-date](https://www.freakyjolly.com/angular-material-datepicker-change-format-of-selected-date/) <br />
[how-to-add-angular-time-picker-in-angular](https://edupala.com/how-to-add-angular-time-picker-in-angular/) <br />
[angular-13-material-datepicker-tutorial-exampleexample](https://www.itsolutionstuff.com/post/angular-13-material-datepicker-tutorial-exampleexample.html) <br />
[ngxmatdatetimepicker-is-not-assignable-to-type-matdatepickerbase](https://stackoverflow.com/questions/64826483/ngxmatdatetimepicker-is-not-assignable-to-type-matdatepickerbase) <br />
[angular-material-components datetime-picker](https://www.npmjs.com/package/@angular-material-components/datetime-picker) <br />
[angular-ngmodel](https://appdividend.com/2022/01/19/angular-ngmodel/) <br />
[Fetching & Displaying Current Date in Angular](https://www.youtube.com/watch?v=ofX6zb4rHM0) <br />
[Angular Datepicker mat-datepicker How to use angular material datepicker](https://www.youtube.com/watch?v=OxAHbXSTfoo) <br />
[Angular Material Datepicker mat-datepicker How to use angular material datepicker to show as html](https://www.youtube.com/watch?v=MVrK4mHzrDM) <br />
[How to add datepicker using angular material](https://www.youtube.com/watch?v=GuiAb6BxT3I) <br />
[angular-datetime-picker-meeting-calendar-owldatetime](https://codezup.com/angular-datetime-picker-meeting-calendar-owldatetime/) <br />
[angular-forms-ngmodel-directive](https://www.geeksforgeeks.org/angular-forms-ngmodel-directive/) <br />
[font-awesome-icon-with-an-onclick-event-set](https://stackoverflow.com/questions/35185974/font-awesome-icon-with-an-onclick-event-set) <br />
[typescript-property-does-not-exist-on-type](https://stackoverflow.com/questions/34274487/typescript-property-does-not-exist-on-type) <br />
[visualstudio code remote ssh](https://code.visualstudio.com/docs/remote/ssh) <br />
[set-up-vs-code-with-a-remote](https://engineerworkshop.com/blog/set-up-vs-code-with-a-remote/) <br />
[connect-to-your-remote-servers-from-visual-studio-code-eb5a5875e348](https://medium.com/@sujaypillai/connect-to-your-remote-servers-from-visual-studio-code-eb5a5875e348) <br />
[angular styleguide folders-by-feature-structure](https://angular.io/guide/styleguide#folders-by-feature-structure) <br />
[angular-folder-structure-best-practices](https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/) <br />
[angular-project-structure-best-practice](https://stackoverflow.com/questions/52933476/angular-project-structure-best-practice) <br />
[angular-architecture-best-practices](https://dev-academy.com/angular-architecture-best-practices/) <br />
[Bootstrap Image](https://getbootstrap.com/docs/5.0/content/images/) <br />
[ngx-scrolltop](https://github.com/bartholomej/ngx-scrolltop) <br />
[Adding-a-Scroll-to-Top-button-in-Angular](https://www.techtrek.io/Adding-a-Scroll-to-Top-button-in-Angular) <br />
[what-is-the-difference-between-parseint-and-number](https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number/4090577#4090577) <br />
[how-to-get-query-string-from-url-in-angularexample](https://www.itsolutionstuff.com/post/how-to-get-query-string-from-url-in-angularexample.html) <br />
[angular-pass-url-parameters-query-strings](https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/) <br />
[angular-13-tutorial-routing-and-navigation](https://www.djamware.com/post/62197130a88c5503bd165482/angular-13-tutorial-routing-and-navigation) <br />
[angular-router-tutorial](https://www.positronx.io/angular-router-tutorial/) <br />
[how-to-take-the-values-from-the-case-sensitive-query-param-variables](https://stackoverflow.com/questions/50098153/how-to-take-the-values-from-the-case-sensitive-query-param-variables) <br />
[typescript_string_tolowercase](https://www.tutorialspoint.com/typescript/typescript_string_tolowercase.htm) <br />
[angular-query-parameters](https://www.digitalocean.com/community/tutorials/angular-query-parameters) <br />
[routerlinkactive-allow-any-query-params](https://stackoverflow.com/questions/41998274/routerlinkactive-allow-any-query-params) <br />
[IsActiveMatchOptions](https://angular.io/api/router/IsActiveMatchOptions) <br />
[RouterLinkActive](https://angular.io/api/router/RouterLinkActive) <br />
[angular-passing-optional-query-parameters-to-route/](https://www.tektutorialshub.com/angular/angular-passing-optional-query-parameters-to-route/) <br />
