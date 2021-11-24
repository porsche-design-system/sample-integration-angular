import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import * as fromPages from './pages';

export type ExtendedRoute = Route & {
  name?: string;
};

export const routes: ExtendedRoute[] = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
  {
    path: 'collection',
    component: fromPages.CollectionPageComponent,
    name: 'Collection Page',
  },
  {
    path: 'forms',
    component: fromPages.FormsPage,
    name: 'Forms',
  },
  {
    path: 'performance',
    component: fromPages.PerformancePage,
    name: 'Performance',
  },
  {
    path: 'phn-header',
    component: fromPages.PhnHeaderPage,
    name: 'Phn Header',
  },
  {
    path: 'utilities',
    component: fromPages.UtilitiesPage,
    name: 'Utilities',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
