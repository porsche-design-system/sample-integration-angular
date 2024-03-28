import { Component, ViewEncapsulation } from '@angular/core';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@Component({
  selector: 'app-component-standalone',
  standalone: true,
  imports: [PorscheDesignSystemModule],
  template: `
    <p-divider class="divider"></p-divider>
    <p-heading size="medium" [align]="'center'"
      >Example Standalone Component with Porsche-Design-System Angular
    </p-heading>
    <p-divider class="divider"></p-divider>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponentStandalone {}
