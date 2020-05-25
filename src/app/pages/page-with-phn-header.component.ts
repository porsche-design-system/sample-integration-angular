import { Component } from '@angular/core';

@Component({
  selector: 'page-with-phn-header',
  template: `
    <phn-header></phn-header>
    <div style="paddingTop: 20px">
      <div>
        <p-button>Some PButton</p-button>
      </div>
      <div>
        <p-link-pure>Some PLinkPure</p-link-pure>
      </div>
      <div>
        <p-icon name="configurate"></p-icon>
        <p-icon name="compare"></p-icon>
        <p-icon name="search"></p-icon>
      </div>
    </div>
  `,
})
export class PageWithPhnHeaderComponent {}
