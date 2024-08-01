import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CollectionPage } from './collection.page';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { By } from '@angular/platform-browser';

describe('Collection', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PorscheDesignSystemModule],
      declarations: [CollectionPage],
    }).compileComponents();
  }));

  it('should display heading after button Click', () => {
    const fixture = TestBed.createComponent(CollectionPage);
    const compiled = fixture.nativeElement;
    const submitButton = fixture.debugElement.query(By.css('p-button'));

    submitButton.nativeElement.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-heading[id="heading"]').textContent).toContain(
      'Heading appears through Button click'
    );
  });

  it('should dismiss heading after button Click', () => {
    const fixture = TestBed.createComponent(CollectionPage);
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('p-button');
    const dismissButton = compiled.querySelector('p-button-pure');

    submitButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-heading[id="heading"]').textContent).toContain(
      'Heading appears through Button click'
    );
    dismissButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-heading[id="heading"]').textContent).toBe('');
  });
});
