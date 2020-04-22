import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './pages/collection.component';
import { FormsComponent } from './pages/forms.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
