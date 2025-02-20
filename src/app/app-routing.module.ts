import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import * as pages from './pages';

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
    component: pages.CollectionPage,
    name: 'Collection Page',
  },
  {
    path: 'forms',
    component: pages.FormsPage,
    name: 'Forms',
  },
  {
    path: 'performance',
    component: pages.PerformancePage,
    name: 'Performance',
  },
  {
    path: 'phn-header',
    component: pages.PhnHeaderPage,
    name: 'Phn Header',
  },
  {
    path: 'ag-grid',
    component: pages.AgGridPage,
    name: 'AG Grid',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
