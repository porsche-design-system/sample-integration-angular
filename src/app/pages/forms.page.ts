import {Component} from '@angular/core';
import type {StepperState} from '@porsche-design-system/components-angular';
import {SegmentedControlChangeEvent, StepChangeEvent} from '@porsche-design-system/components-angular';

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
            [variant]="'tertiary'"
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

  onSegmentedControlChange(e: CustomEvent<SegmentedControlChangeEvent>) {
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
      this.textFieldHeadline = 'Change me';
    } else {
      this.textFieldHeadline = this.textValue;
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

  onStepChange(e: CustomEvent<StepChangeEvent>): void {
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
  state?: StepperState;
  name: string;
};
