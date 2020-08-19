import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import * as fromPages from './pages';

export type ExtendedRoute = Route & {
  name: string;
};

export const routes: ExtendedRoute[] = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
    name: 'Collection Page'
  },
  {
    path: 'collection',
    component: fromPages.CollectionPage,
    name: 'Collection Page'
  },
  {
    path: 'forms',
    component: fromPages.FormsPage,
    name: 'Forms'
  },
  {
    path: 'performance',
    component: fromPages.PerformancePage,
    name: 'Performance'
  },
  {
    path: 'phn-header',
    component: fromPages.PhnHeaderPage,
    name: 'Phn Header'
  },
  {
    path: 'utilities',
    component: fromPages.UtilitiesPage,
    name: 'Utilities'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
