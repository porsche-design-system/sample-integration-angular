import { Component, ViewEncapsulation } from '@angular/core';
import { ExtendedRoute, routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  template: `
    <div class="pageLayout">
      <p-grid>
        <p-grid-item size="12">
          <p-headline variant="headline-2" [align]="'center'"
            >Example usage of the Porsche-Design-System Angular</p-headline
          >
        </p-grid-item>
        <p-grid-item size="12">
          <p-divider class="divider"></p-divider>
        </p-grid-item>
        <p-grid-item size="12">
          <ng-container *ngFor="let route of routes">
            <p-link-pure>
              <a [routerLink]="route.path">{{ route.name }}</a>
            </p-link-pure>
          </ng-container>
        </p-grid-item>
        <p-grid-item size="12">
          <p-divider class="divider"></p-divider>
        </p-grid-item>
      </p-grid>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public routes: ExtendedRoute[] = routes;
}
