import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app" class="appWrapper">
      <p-grid>
        <p-grid-item size="12">
          <p-headline variant="headline-1" [align]="'center'">Example usage of the Porsche-Design-System Angular
          </p-headline>
        </p-grid-item>
        <p-grid-item class="contentWrapperBig" size="12">
          <a [routerLink]="['componentsCollection']" class="link">
            <p-link-pure>Components Collection</p-link-pure>
          </a>
          <a [routerLink]="['forms']" class="link">
            <p-link-pure>Forms</p-link-pure>
          </a>
          <a [routerLink]="['phn-header']" class="link">
            <p-link-pure>Phn Header</p-link-pure>
          </a>
        </p-grid-item>
        <p-grid-item size="12">
          <p-divider class="divider"></p-divider>
        </p-grid-item>
        <p-grid-item size="12">
          <router-outlet></router-outlet>
        </p-grid-item>
      </p-grid>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
