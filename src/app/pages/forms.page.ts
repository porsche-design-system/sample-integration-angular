import { Component } from '@angular/core';
import type { StepperHorizontalItemState } from '@porsche-design-system/components-angular';
import { SegmentedControlUpdateEvent, StepperHorizontalUpdateEvent } from '@porsche-design-system/components-angular';

@Component({
    selector: 'forms-page',
    template: `
    <p-grid>
      <p-grid-item size="12">
        <p-heading size="medium">Form Examples</p-heading>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-heading size="medium" data-test-id="selectHeading">{{ selectInput }}</p-heading>
      </p-grid-item>
      <p-grid-item size="5">
        <p-select [name]="'PDS Select'" [label]="'Change Heading by changing Selected value'" [hideLabel]="false" (update)="handleSelectChange($event)" [value]="selectInput">
          <p-select-option value="Heading A">Heading A</p-select-option>
          <p-select-option value="Heading B">Heading B</p-select-option>
          <p-select-option value="Heading C">Heading C</p-select-option>
        </p-select
        >
      </p-grid-item>
      <p-grid-item size="12">
        <p-segmented-control
          style="margin-top: 1rem"
          [value]="currentValue"
          (segmentedControlChange)="onSegmentedControlChange($event)"
          aria-label="Choose an Option"
        >
          <p-segmented-control-item [value]="1">Option 1</p-segmented-control-item>
          <p-segmented-control-item [value]="2">Option 2</p-segmented-control-item>
          <p-segmented-control-item [value]="3">Option 3</p-segmented-control-item>
          <p-segmented-control-item [value]="4">Option 4</p-segmented-control-item>
          <p-segmented-control-item [value]="5">Option 5</p-segmented-control-item>
        </p-segmented-control>

        <p-text>Current value of segmented-control: {{ currentValue }}</p-text></p-grid-item
      >
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-stepper-horizontal (stepChange)="onStepChange($event)">
          <ng-container *ngFor="let step of steps">
            <p-stepper-horizontal-item [state]="step.state">
              {{ step.name }}
            </p-stepper-horizontal-item>
          </ng-container>
        </p-stepper-horizontal>

        <ng-container *ngFor="let content of stepContent; let i = index">
          <p-text *ngIf="getActiveStepIndex(steps) === i">{{ content }}</p-text>
        </ng-container>

        <p-button-group>
          <p-button
            [icon]="'arrow-head-left'"
            [variant]="'secondary'"
            [disabled]="getActiveStepIndex(steps) === 0"
            (click)="onNextPrevStep('prev')"
          >
            Previous Step
          </p-button>

          <p-button
            [variant]="'primary'"
            [disabled]="getActiveStepIndex(steps) === steps.length - 1"
            (click)="onNextPrevStep('next')"
          >
            Next Step
          </p-button>
        </p-button-group>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="12">
        <p-heading *ngIf="checkBox" size="medium" data-test-id="checkboxHeading">Checkbox Worked</p-heading>
        <p-checkbox [name]="'Check me for Heading'" [label]="'Check me for Heading'" (update)="handleCheckbox()" data-test-id="checkbox" [checked]="checkBox">
        </p-checkbox>
        <p-heading *ngIf="radioButton" size="medium">Radio Worked</p-heading>
        <p-radio-button-wrapper [label]="'Click me for Heading'">
          <input [type]="'radio'" [name]="'Click me for Heading'" (change)="handleRadio()" />
        </p-radio-button-wrapper>
      </p-grid-item>
      <p-grid-item size="12">
        <p-divider class="divider"></p-divider>
      </p-grid-item>
      <p-grid-item size="6">
        <p-textarea name="pds-textarea" [label]="'PDS Textarea'" [hideLabel]="false">
        </p-textarea>
      </p-grid-item>
      <p-grid-item size="6">
        <p-input-text name="some-name" label="Write here to Change Text beneath" (keyup)="handleTextField($event)"></p-input-text>
        <p-heading size="medium">{{ textFieldHeading }}</p-heading>
        <p-input-text [name]="'Slotted input'">
          <span [slot]="'label'">Input Text with a <p-link-pure [href]="'#slottedLink'">Slotted Link</p-link-pure>.</span>
        </p-input-text>
      </p-grid-item>
      <p-grid-item size="6">
        <p-pin-code [label]="'Default'"></p-pin-code>
        <p-pin-code [label]="'Default'" [type]="'password'"></p-pin-code>
      </p-grid-item>
      <p-grid-item size="6">
        <p-multi-select [name]="'name'" [label]="'Some Label'" [description]="'Some description'" [theme]="'light'" required>
          <p-multi-select-option [value]="'a'">Option A</p-multi-select-option>
          <p-multi-select-option [value]="'b'">Option B</p-multi-select-option>
          <p-multi-select-option [value]="'c'">Option C</p-multi-select-option>
          <p-multi-select-option [value]="'d'">Option D</p-multi-select-option>
          <p-multi-select-option [value]="'e'">Option E</p-multi-select-option>
          <p-multi-select-option [value]="'f'">Option F</p-multi-select-option>
        </p-multi-select>
      </p-grid-item>
    </p-grid>
  `,
    standalone: false
})
export class FormsPage {
  selectInput = 'Heading A';
  checkBox = false;
  radioButton = false;
  textFieldHeading = 'Change me';
  textValue = '';
  currentValue = 1;
  steps: StepperHorizontalItemProps[] = [
    {
      state: 'current',
      name: 'Enter personal details',
    },
    {
      name: 'Confirm e-mail',
    },
    {
      name: 'Set password',
    },
  ];
  stepContent: string[] = [
    'A form with personal details could be displayed here.',
    'A form with a verification code input field could be displayed here.',
    'A form with a password input field could be displayed here.',
  ];

  onSegmentedControlChange(e: CustomEvent<SegmentedControlUpdateEvent>) {
    this.currentValue = e.detail.value as number;
  }

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
      this.textFieldHeading = 'Change me';
    } else {
      this.textFieldHeading = this.textValue;
    }
  }
  getActiveStepIndex(steps: StepperHorizontalItemProps[]): number {
    return steps.findIndex((step) => step.state === 'current');
  }

  onNextPrevStep(direction: 'next' | 'prev'): void {
    const newState = [...this.steps];
    const activeStepIndex = this.getActiveStepIndex(newState);

    if (direction === 'next') {
      newState[activeStepIndex].state = 'complete';
      newState[activeStepIndex + 1].state = 'current';
    } else {
      delete newState[activeStepIndex].state;
      newState[activeStepIndex - 1].state = 'current';
    }

    this.steps = newState;
  }

  onStepChange(e: CustomEvent<StepperHorizontalUpdateEvent>): void {
    const { activeStepIndex } = e.detail;

    const newState = [...this.steps];
    for (let i = activeStepIndex + 1; i < newState.length; i++) {
      // reset step state when going back via stepper horizontal item click
      delete newState[i].state;
    }
    newState[activeStepIndex].state = 'current';

    this.steps = newState;
  }
}

type StepperHorizontalItemProps = {
  state?: StepperHorizontalItemState;
  name: string;
};
