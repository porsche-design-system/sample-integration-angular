import { Component } from '@angular/core';
import {
  AccordionChangeEvent,
  PageChangeEvent,
  TabChangeEvent,
} from '@porsche-design-system/components-angular/lib/types';
import { ToastManager } from '@porsche-design-system/components-angular';

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
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-button (click)="queueToast()">Queue Toast</p-button>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-headline variant="headline-4">Links</p-headline>
        <p-divider class="divider"></p-divider>
        <p-link>
          <a href="https://www.porsche.com" class="removeLinkStyle">porsche.com</a>
        </p-link>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperBig">
        <p-link-pure [stretch]="true"><a href="#hashTest">Test PLinkPure</a></p-link-pure>
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
        <p-headline variant="headline-4">Accordion</p-headline>
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <div class="accordion-wrapper">
          <p-accordion
            heading="Some Heading"
            tag="h3"
            [open]="isAccordion1Open"
            (accordionChange)="onAccordion1Change($event)"
          >
            <p-text>{{ content }}</p-text>
            <p-text>{{ content }}</p-text>
          </p-accordion>
          <p-accordion
            heading="Some Heading"
            tag="h3"
            [open]="isAccordion2Open"
            (accordionChange)="onAccordion2Change($event)"
          >
            <p-text>{{ content }}</p-text>
            <p-text>{{ content }}</p-text>
          </p-accordion>
        </div>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-headline variant="headline-4">Popover</p-headline>
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-text>
          Lorem ipsum dolor sit amet, <p-popover>Some descriptive content</p-popover> consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<p-popover
            [description]="'Short info opened top'"
            [direction]="'top'"
          ></p-popover>
          sed diam voluptua.
        </p-text>
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
      .accordion-wrapper {
        max-width: 800px;
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
  isAccordion1Open = false;
  isAccordion2Open = false;
  private toastCounter = 1;

  content =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

  constructor(private toastManager: ToastManager) {}

  onAccordion1Change(e: CustomEvent<AccordionChangeEvent>) {
    this.isAccordion1Open = e.detail.open;
  }
  onAccordion2Change(e: CustomEvent<AccordionChangeEvent>) {
    this.isAccordion2Open = e.detail.open;
  }

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

  queueToast() {
    this.toastManager.addMessage({ text: `Some message ${this.toastCounter}`, state: 'neutral' });
    this.toastCounter++;
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
