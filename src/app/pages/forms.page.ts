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
        <p-select-wrapper [label]="'Change Heading by changing Selected value'" [hideLabel]="false">
          <select [name]="'PDS Select'" (change)="handleSelectChange($event)" [value]="selectInput">
            <option value="Heading A">Heading A</option>
            <option value="Heading B">Heading B</option>
            <option value="Heading C">Heading C</option>
          </select></p-select-wrapper
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
        <p-checkbox-wrapper [label]="'Check me for Heading'">
          <input
            [type]="'checkbox'"
            [name]="'Check me for Heading'"
            (change)="handleCheckbox()"
            data-test-id="checkbox"
            [checked]="checkBox"
          />
        </p-checkbox-wrapper>
        <p-heading *ngIf="radioButton" size="medium">Radio Worked</p-heading>
        <p-radio-button-wrapper [label]="'Click me for Heading'">
          <input [type]="'radio'" [name]="'Click me for Heading'" (change)="handleRadio()" />
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
        <p-heading size="medium">{{ textFieldHeading }}</p-heading>
        <p-text-field-wrapper>
          <span [slot]="'label'">Textfield with a <a [href]="'#slottedLink'">Slotted Link</a>.</span>
          <input [type]="'text'" [name]="'Slotted input'" />
        </p-text-field-wrapper>
      </p-grid-item>
    </p-grid>
  `,
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
