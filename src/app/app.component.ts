import { Component, ViewEncapsulation } from '@angular/core';
import { CDN_BASE_URL, JS_MANIFEST } from '@porsche-design-system/browser-notification-banner';

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
          <a [routerLink]="['utilities']" class="removeLinkStyle">
            <p-link-pure>Utilities</p-link-pure>
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
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  loadAPI: Promise<any>;

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  public loadScript(): void {
    const url = CDN_BASE_URL;
    const initFileName = JS_MANIFEST.init;
    const body = document.getElementsByTagName('body')[0];
    const notificationBanner = document.createElement('script');
    notificationBanner.src = `${url}/${initFileName}`;
    body.appendChild(notificationBanner);
  }
}
