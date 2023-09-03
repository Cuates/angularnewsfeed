import { NgModule } from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
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
  // Constructor
  constructor() {
  }
}