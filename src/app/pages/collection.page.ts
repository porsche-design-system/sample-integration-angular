import { Component } from '@angular/core';

@Component({
  selector: 'collection-page',
  template: `
    <p-grid>
      <p-grid-item size="12">
        <p-headline variant="headline-4">Buttons</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-button [disabled]="isDisabled" (click)="onButtonClick()">Submit</p-button>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-button-pure [disabled]="!isDisabled" (click)="onButtonPureClick()">Dismiss</p-button-pure>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-headline id="headline" variant="headline-4">{{ headlineText }}</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline variant="headline-4">Links</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <a href="https://www.porsche.com" class="removeLinkStyle">
          <p-link>porsche.com</p-link>
        </a>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperBig">
        <a href="#hashTest" class="removeLinkStyle">
          <p-link-pure>Test PLinkPure</p-link-pure>
        </a>
        <p-link-pure href="#propHashTest">Test propHash</p-link-pure>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline variant="headline-4">Icons</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-spinner size="small"></p-spinner>
      </p-grid-item>
      <p-grid-item size="12">
        <p-icon size="medium" name="highway" role="img"></p-icon>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline variant="headline-4">You are on Page {{ activePage }} Page</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-pagination
          totalItemsCount="11"
          itemsPerPage="3"
          [activePage]="activePage"
          (pageChange)="handleActivePage($event)"
        ></p-pagination>
      </p-grid-item>
    </p-grid>
  `,
  styleUrls: ['../app.component.css'],
})
export class CollectionPage {
  headlineText = '';
  activePage = 1;
  isDisabled = false;

  onButtonClick() {
    this.headlineText = 'Headline appears through Button click';
    this.isDisabled = !this.isDisabled;
  }

  onButtonPureClick() {
    this.headlineText = '';
    this.isDisabled = !this.isDisabled;
  }

  handleActivePage(event: CustomEvent) {
    this.activePage = event.detail.page;
  }
}
