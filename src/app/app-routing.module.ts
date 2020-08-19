import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromPages from './pages';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
  {
    path: 'collection',
    component: fromPages.CollectionPage,
  },
  {
    path: 'forms',
    component: fromPages.FormsPage,
  },
  {
    path: 'performance',
    component: fromPages.PerformancePage,
  },
  {
    path: 'phn-header',
    component: fromPages.PhnHeaderPage,
  },
  {
    path: 'utilities',
    component: fromPages.UtilitiesPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
