import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CollectionPageComponent } from './collection.page';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { By } from '@angular/platform-browser';

describe('Collection', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PorscheDesignSystemModule],
      declarations: [CollectionPageComponent],
    }).compileComponents();
  }));

  it('should display headline after button Click', () => {
    const fixture = TestBed.createComponent(CollectionPageComponent);
    const compiled = fixture.nativeElement;
    const submitButton = fixture.debugElement.query(By.css('p-button'));

    submitButton.nativeElement.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-headline[id="headline"]').textContent).toContain(
      'Headline appears through Button click'
    );
  });

  it('should dismiss headline after button Click', () => {
    const fixture = TestBed.createComponent(CollectionPageComponent);
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('p-button');
    const dismissButton = compiled.querySelector('p-button-pure');

    submitButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-headline[id="headline"]').textContent).toContain(
      'Headline appears through Button click'
    );
    dismissButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p-headline[id="headline"]').textContent).toBe('');
  });
});
