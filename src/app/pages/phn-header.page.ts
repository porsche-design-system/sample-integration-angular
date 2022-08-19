import { Component } from '@angular/core';

@Component({
  selector: 'phn-header-page',
  template: `
    <phn-header env="preview" locale="de-DE" style="position: absolute; left: 0; right: 0;"></phn-header>

    <div style="padding-top: 150px">
      <div>
        <p-button>Some PButton</p-button>
      </div>
      <div>
        <p-link-pure href="#">Some PLinkPure</p-link-pure>
      </div>
      <div>
        <p-icon name="configurate"></p-icon>
        <p-icon name="compare"></p-icon>
        <p-icon name="search"></p-icon>
      </div>
    </div>
  `,
})
export class PhnHeaderPage {}
