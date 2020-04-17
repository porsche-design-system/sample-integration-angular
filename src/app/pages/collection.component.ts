import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  template: `
    <p-grid>
      <p-grid-item size="12">
        <p-headline variant="headline-3">Buttons</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline variant="headline-4">{{clickMessage}}</p-headline>
      </p-grid-item>
      <p-grid-item size="2">
        <p-button (click)="onButtonClick()">Submit</p-button>
        <br>
        <br>
        <p-button-pure (click)="onButtonPureClick()">Dismiss</p-button-pure>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline variant="headline-3">Links</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="3">
        <a href="#aWrappedLink" class="link">
          <p-link>a Wrapped Link</p-link>
        </a>
        <br>
        <br>
        <a href="/form" class="link">
          <p-link-pure>a Wrapped p-link-pure</p-link-pure>
        </a>
        <br>
        <p-link-pure href="#pLinkPure">p-link-pure with href</p-link-pure>
      </p-grid-item>
    </p-grid>
    <p-pagination [activePage]="activePage"></p-pagination>
  `,
  styleUrls: ['../app.component.css']
})

export class CollectionComponent {
  clickMessage = '';
  activePage = 1;

  onButtonClick() {
    this.clickMessage = 'Headline appears through Button click';
  }

  onButtonPureClick() {
    this.clickMessage = '';
  }
}






