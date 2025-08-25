import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { By } from '@angular/platform-browser';
import { FormsPage } from './forms.page';

describe('Forms', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PorscheDesignSystemModule],
      declarations: [FormsPage],
    }).compileComponents();
  }));

  it('Heading should appear after Checkbox Click', async () => {
    const fixture = TestBed.createComponent(FormsPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const checkBoxEl = compiled.querySelector('p-checkbox[data-test-id=checkbox]');
    checkBoxEl.click();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('p-heading[data-test-id=checkboxHeading]'))).toBeTruthy();
  });
});
