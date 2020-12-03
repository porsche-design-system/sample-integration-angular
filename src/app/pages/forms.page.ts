import { Component } from '@angular/core';

@Component({
  selector: 'forms-page',
  template: `
    <p-grid>
      <p-grid-item size="12">
        <p-headline variant="headline-3">Form Examples</p-headline>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline variant="headline-4" data-test-id="selectHeadline">{{ selectInput }}</p-headline>
      </p-grid-item>
      <p-grid-item size="5">
        <p-select-wrapper [label]="'Change Headline by changing Selected value'" [hideLabel]="false">
          <select [name]="'PDS Select'" (change)="handleSelectChange($event)" [value]="selectInput">
            <option value="Headline A">Headline A</option>
            <option value="Headline B">Headline B</option>
            <option value="Headline C">Headline C</option>
          </select></p-select-wrapper
        >
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-headline *ngIf="checkBox" variant="headline-4" data-test-id="checkboxHeadline">Checkbox Worked</p-headline>
        <p-checkbox-wrapper [label]="'Check me for Headline'">
          <input
            [type]="'checkbox'"
            [name]="'Check me for Headline'"
            (change)="handleCheckbox()"
            data-test-id="checkbox"
            [checked]="checkBox"
          />
        </p-checkbox-wrapper>
        <p-headline *ngIf="radioButton" variant="headline-4">Radio Worked</p-headline>
        <p-radio-button-wrapper [label]="'Click me for Headline'">
          <input [type]="'radio'" [name]="'Click me for Headline'" (change)="handleRadio()" />
        </p-radio-button-wrapper>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="6">
        <p-textarea-wrapper [label]="'PDS Textarea'" [hideLabel]="false">
          <textarea></textarea>
        </p-textarea-wrapper>
      </p-grid-item>
      <p-grid-item size="6">
        <p-text-field-wrapper label="Write here to Change Text beneath" hide-label="false">
          <input type="text" name="some-name" (keyup)="handleTextField($event)" />
        </p-text-field-wrapper>
        <p-headline variant="headline-4">{{ textFieldHeadline }}</p-headline>
        <p-text-field-wrapper>
          <span [slot]="'label'">Textfield with a <a [href]="'#slottedLink'">Slotted Link</a>.</span>
          <input [type]="'text'" [name]="'Slotted input'" />
        </p-text-field-wrapper>
      </p-grid-item>
    </p-grid>
  `,
})
export class FormsPage {
  selectInput = 'Headline A';
  checkBox = false;
  radioButton = false;
  textFieldHeadline = 'Change me';
  textValue = '';

  handleSelectChange(event) {
    this.selectInput = event.target.value;
  }

  handleCheckbox() {
    this.checkBox = this.checkBox === false;
  }

  handleRadio() {
    this.radioButton = this.radioButton === false;
  }

  handleTextField(event: KeyboardEvent) {
    this.textValue = (event.target as HTMLInputElement).value;
    if (this.textValue === '') {
      this.textFieldHeadline = 'Change me';
    } else {
      this.textFieldHeadline = this.textValue;
    }
  }
}
