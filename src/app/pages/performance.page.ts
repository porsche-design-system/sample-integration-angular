import { Component } from '@angular/core';

type SelectableElement = 'text' | 'checkbox' | 'button';

@Component({
  selector: 'performance',
  template: `<p-grid>
      <p-grid-item size="12">
        <p-headline variant="headline-4">Choose Element and Count</p-headline>
      </p-grid-item>
      <p-grid-item size="4"
        ><p-select-wrapper
          ><select [value]="element" (change)="onElementChange($event)">
            <option *ngFor="let element of SELECTABLE_ELEMENTS" [value]="element">{{ element }}</option>
          </select></p-select-wrapper
        ></p-grid-item
      >
      <p-grid-item size="4"
        ><p-select-wrapper
          ><select (change)="onCountChange($event)" [value]="count">
            <option *ngFor="let count of SELECTABLE_COUNTS" [value]="count">{{ count }}</option>
          </select></p-select-wrapper
        ></p-grid-item
      >
      <p-grid-item size="4"
        ><p-checkbox-wrapper label="Render"
          ><input type="checkbox" (change)="onShouldRender($event)" checked /></p-checkbox-wrapper
      ></p-grid-item>
    </p-grid>
    <p-grid style="margin-top: 2rem;">
      <p-grid-item *ngIf="shouldRender" size="12">
        <ng-container *ngFor="let elementOnPage of elementsOnPage; let i = index">
          <ng-container [ngSwitch]="element">
            <p-text *ngSwitchCase="'text'">{{ content + i }}</p-text>
            <p-checkbox-wrapper *ngSwitchCase="'checkbox'" [label]="content + i">
              <input type="checkbox" />
            </p-checkbox-wrapper>
            <p-button *ngSwitchCase="'button'" [variant]="'primary'">{{ content + i }}</p-button>
          </ng-container>
        </ng-container>
      </p-grid-item>
    </p-grid>`,
})
export class PerformancePage {
  public SELECTABLE_ELEMENTS: SelectableElement[] = ['text', 'checkbox', 'button'];
  public SELECTABLE_COUNTS = [25, 50, 100];

  public count = 25;
  public element = 'text';
  public elementsOnPage = Array(this.count);

  public content = 'Lorem Ipsum ';
  public shouldRender = true;

  onElementChange = (e) => {
    this.element = e.target.value;
  };
  onCountChange = (e) => {
    this.count = +e.target.value;
    this.elementsOnPage = Array(this.count);
  };
  onShouldRender = (e) => {
    this.shouldRender = e.target.checked;
  };
}
