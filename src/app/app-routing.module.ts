import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayDataComponent } from './media/component/display-data/display-data.component';
import { AboutComponent } from './media/component/about/about.component';
import { PageNotFoundComponent } from './media/share/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayDataComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  // Wild Card Route for 404 request
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }