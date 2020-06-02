import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPage, FormsPage, PhnHeaderPage } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
  {
    path: 'collection',
    component: CollectionPage,
  },
  {
    path: 'forms',
    component: FormsPage,
  },
  {
    path: 'phn-header',
    component: PhnHeaderPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
