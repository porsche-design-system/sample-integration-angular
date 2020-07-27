import { Component } from '@angular/core';
import { color, text } from '@porsche-design-system/utilities';

/**
 * Test site to see if utilities package works
 */
@Component({
  selector: `utilities-page`,
  template: `
  <div [style]="textMedium">JS utilities</div>
  <div [ngStyle]="{width: '50px', height: '50px', background: backgroundColor}"></div>
  <div class="textSizeMedium">Scss utilities</div>
  <div style="width: 50px; height: 50px;" class="backgroundColorPds"></div>`,
  styleUrls: ['./utilities.page.scss']
})
export class UtilitiesPage {
  public backgroundColor = color.brand;
  public textMedium = text.medium;
}
