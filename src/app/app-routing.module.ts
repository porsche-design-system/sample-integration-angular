import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './pages/collection.component';
import { FormsComponent } from './pages/forms.component';
import { PageWithPhnHeaderComponent } from './pages/page-with-phn-header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'componentsCollection',
    pathMatch: 'full'
  },
  {
    path: 'componentsCollection',
    component: CollectionComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'phn-header',
    component: PageWithPhnHeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
