import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { By } from '@angular/platform-browser';
import { FormsPage } from './forms.page';
import { componentsReady } from '@porsche-design-system/components-js';


describe('Forms', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PorscheDesignSystemModule
      ],
      declarations: [
        FormsPage
      ],
    }).compileComponents();
  }));

  it('Headline should appear after Checkbox Click', async () => {
    const fixture = TestBed.createComponent(FormsPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const checkBoxEl = compiled.querySelector('p-checkbox-wrapper > input');
    checkBoxEl.click();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('p-headline[data-test-id=checkboxHeadline]'))).toBeTruthy();
  });

});
