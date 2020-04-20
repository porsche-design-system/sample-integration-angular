import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { By } from '@angular/platform-browser';
import { FormsComponent } from './forms.component';
import { componentsReady } from '@porsche-design-system/components-js';


describe('Forms', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PorscheDesignSystemModule
      ],
      declarations: [
        FormsComponent
      ],
    }).compileComponents();
  }));

  it('should display headline after selected Value', async () => {
    const fixture = TestBed.createComponent(FormsComponent);
    const compiled = fixture.nativeElement;
    const selectEl = fixture.debugElement.query(By.css('p-select-wrapper'));
    selectEl.nativeElement.click();
    fixture.detectChanges();
    await componentsReady();
    const option = fixture.debugElement.query(By.css('option[value="Headline B"]'));
    option.nativeElement.click();
    fixture.detectChanges();
    await componentsReady();
    expect(compiled.querySelector('p-headline[data-test-id="selectHeadline"]').textContent).toContain('Headline B');
  });

  it('Headline should appear after Checkbox Click', async () => {
    const fixture = TestBed.createComponent(FormsComponent);
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    await componentsReady();
    const checkBoxEl = fixture.debugElement.query(By.css('p-checkbox-wrapper')).nativeElement;
    checkBoxEl.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-headline[data-test-id=checkboxHeadline]').textContent).toContain('Checkbox Worked');
  });

});
