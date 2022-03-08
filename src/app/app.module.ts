import { NgModule } from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes as faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHome as faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo as faInfo } from '@fortawesome/free-solid-svg-icons';
import { faSpinner as faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt as faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper as faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle as faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';

import { AboutComponent } from './media/component/about/about.component';
import { DisplayDataComponent } from './media/component/display-data/display-data.component';
import { FooterComponent } from './media/share/component/footer/footer.component';
import { HeaderComponent } from './media/share/component/header/header.component';
import { LoaderComponent } from './media/share/component/loader/loader.component';
import { NavigationMenuComponent } from './media/share/component/navigation-menu/navigation-menu.component';
import { PageNotFoundComponent } from './media/share/component/page-not-found/page-not-found.component';

import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DisplayDataComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    NavigationMenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    NgxScrollTopModule
  ],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // Add font awesome to the constructor
  constructor(library: FaIconLibrary) {
    // Adding the icons to be utilized throughout the web pages
    library.addIcons(faBars, faTimes, faHome, faInfo, faSpinner, faTrashAlt, faExternalLinkAlt, faNewspaper, faExclamationTriangle);
  }
}
