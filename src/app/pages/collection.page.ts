import { Component } from '@angular/core';
import type {
  AccordionUpdateEvent,
  PaginationUpdateEvent,
  TabsUpdateEvent,
} from '@porsche-design-system/components-angular';
import { ToastManager } from '@porsche-design-system/components-angular';

@Component({
  selector: 'collection-page',
  template: `
    <p-grid>
      <p-grid-item size="12">
        <p-heading size="medium">Buttons</p-heading>
        <p-divider class="divider"></p-divider>
        <p-button [disabled]="isDisabled" (click)="onButtonClick()">Submit</p-button>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-button-pure [disabled]="!isDisabled" (click)="onButtonPureClick()">Dismiss</p-button-pure>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperSmall">
        <p-heading id="heading" size="medium">{{ headingText }}</p-heading>
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
        <p-heading size="medium">Links</p-heading>
        <p-divider class="divider"></p-divider>
        <p-link>
          <a href="https://www.porsche.com" class="removeLinkStyle">porsche.com</a>
        </p-link>
      </p-grid-item>
      <p-grid-item size="12" class="contentWrapperBig">
        <p-link-pure [stretch]="true"><a href="#hashTest" class="removeLinkStyle">Test PLinkPure</a></p-link-pure>
        <p-link-pure href="#propHashTest">Test propHash</p-link-pure>
      </p-grid-item>
      <p-grid-item size="5">
        <p-link-tile href="#" label="Some Label" description="Default">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII="
            alt="Some alt text"
          />
        </p-link-tile>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-heading size="medium">Tabs</p-heading>
        <p-divider class="divider"></p-divider>
        <p-tabs-bar [activeTabIndex]="activeTab" (update)="handleTabUpdate($event)">
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </p-tabs-bar>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-heading size="medium">Icons</p-heading>
        <p-divider class="divider"></p-divider>
        <p-spinner size="small"></p-spinner>
      </p-grid-item>
      <p-grid-item size="12">
        <p-icon size="medium" name="highway" role="img"></p-icon>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-heading size="medium">Accordion</p-heading>
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <div class="accordion-wrapper">
          <p-accordion heading="Some Heading" tag="h3" [open]="isAccordion1Open" (update)="onAccordion1Update($event)">
            <p-text>{{ content }}</p-text>
            <p-text>{{ content }}</p-text>
          </p-accordion>
          <p-accordion heading="Some Heading" tag="h3" [open]="isAccordion2Open" (update)="onAccordion2Update($event)">
            <p-text>{{ content }}</p-text>
            <p-text>{{ content }}</p-text>
          </p-accordion>
        </div>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-heading size="medium">Popover</p-heading>
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-text>
          Lorem ipsum dolor sit amet,
          <p-popover>Some descriptive content</p-popover>
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          <p-popover [description]="'Short info opened top'" [direction]="'top'"></p-popover>
          sed diam voluptua.
        </p-text>
      </p-grid-item>

      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
        <p-heading size="medium">You are on Page {{ activePage }} Page</p-heading>
        <p-divider class="divider"></p-divider>
        <p-pagination
          totalItemsCount="11"
          itemsPerPage="3"
          [activePage]="activePage"
          (update)="handlePageUpdate($event)"
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
  headingText = '';
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

  onAccordion1Update(e: CustomEvent<AccordionUpdateEvent>) {
    this.isAccordion1Open = e.detail.open;
  }
  onAccordion2Update(e: CustomEvent<AccordionUpdateEvent>) {
    this.isAccordion2Open = e.detail.open;
  }

  onButtonClick() {
    this.headingText = 'Heading appears through Button click';
    this.isDisabled = !this.isDisabled;
  }

  onButtonPureClick() {
    this.headingText = '';
    this.isDisabled = !this.isDisabled;
  }

  openModal() {
    this.isModalOpen = true;
  }

  queueToast() {
    this.toastManager.addMessage({ text: `Some message ${this.toastCounter}`, state: 'info' });
    this.toastCounter++;
  }

  handleModalClose(ev: CustomEvent<void>) {
    console.log(ev);
    this.isModalOpen = false;
  }

  handlePageUpdate(ev: CustomEvent<PaginationUpdateEvent>) {
    console.log(ev);
    this.activePage = ev.detail.page;
  }

  handleTabUpdate(ev: CustomEvent<TabsUpdateEvent>) {
    console.log(ev);
    this.activeTab = ev.detail.activeTabIndex;
  }
}
