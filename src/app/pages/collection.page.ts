import { Component } from '@angular/core';
import { PageChangeEvent, TabChangeEvent } from '@porsche-design-system/components-angular/lib/types';

@Component({
  selector: 'collection-page',
  template: `
    <p-grid>
      <p-grid-item size="12">
        <p-headline variant="headline-4">Buttons</p-headline>
        <p-divider class="divider"></p-divider>
        <p-button [disabled]="isDisabled" (click)="onButtonClick()">Submit</p-button>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-button-pure [disabled]="!isDisabled" (click)="onButtonPureClick()">Dismiss</p-button-pure>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-headline id="headline" variant="headline-4">{{ headlineText }}</p-headline>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-button (click)="openModal()">Open Modal</p-button>
        <p-modal [heading]="'Some Heading'" [open]="isModalOpen" (close)="handleModalClose($event)">
          <p-text>Some Content</p-text>
          <p-button-group class="footer">
            <p-button>Save</p-button>
            <p-button variant="tertiary" (click)="handleModalClose($event)">Close</p-button>
          </p-button-group>
        </p-modal>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-headline variant="headline-4">Links</p-headline>
        <p-divider class="divider"></p-divider>

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
        <p-headline variant="headline-4">Tabs</p-headline>
        <p-divider class="divider"></p-divider>
        <p-tabs-bar [activeTabIndex]="activeTab" (tabChange)="handleTabChange($event)">
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </p-tabs-bar>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-headline variant="headline-4">Icons</p-headline>
        <p-divider class="divider"></p-divider>
        <p-spinner size="small"></p-spinner>
      </p-grid-item>
      <p-grid-item size="12">
        <p-icon size="medium" name="highway" role="img"></p-icon>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-headline variant="headline-4">You are on Page {{ activePage }} Page</p-headline>
        <p-divider class="divider"></p-divider>
        <p-pagination
          totalItemsCount="11"
          itemsPerPage="3"
          [activePage]="activePage"
          (pageChange)="handlePageChange($event)"
        ></p-pagination>
      </p-grid-item>
    </p-grid>
  `,
  styles: [
    `
      .footer {
        padding: 2rem 0 0;
      }
    `,
  ],
})
export class CollectionPage {
  headlineText = '';
  activeTab = 0;
  activePage = 1;
  isDisabled = false;
  isModalOpen = false;

  onButtonClick() {
    this.headlineText = 'Headline appears through Button click';
    this.isDisabled = !this.isDisabled;
  }

  onButtonPureClick() {
    this.headlineText = '';
    this.isDisabled = !this.isDisabled;
  }

  openModal() {
    this.isModalOpen = true;
  }

  handleModalClose(ev: CustomEvent<void>) {
    console.log(ev);
    this.isModalOpen = false;
  }

  handlePageChange(ev: CustomEvent<PageChangeEvent>) {
    console.log(ev);
    this.activePage = ev.detail.page;
  }

  handleTabChange(ev: CustomEvent<TabChangeEvent>) {
    console.log(ev);
    this.activeTab = ev.detail.activeTabIndex;
  }
}
