import { Component } from '@angular/core';

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
          <a [routerLink]="['collection']" class="removeLinkStyle">
            <p-link-pure>Components Collection</p-link-pure>
          </a>
          <a [routerLink]="['forms']" class="removeLinkStyle">
            <p-link-pure>Forms</p-link-pure>
          </a>
          <a [routerLink]="['phn-header']" class="removeLinkStyle">
            <p-link-pure>Phn Header</p-link-pure>
          </a>
        </p-grid-item>
        <p-grid-item size="12">
          <p-divider class="divider"></p-divider>
        </p-grid-item>
      </p-grid>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
