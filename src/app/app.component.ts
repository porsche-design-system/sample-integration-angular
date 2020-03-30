import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickMessage = '';
  selectInput = 'Headline A';
  checkBox = false;
  radioButton = false;
  textFieldHeadline = 'Change me';
  textValue = '';
  activePage = 1;

  onButtonClick() {
    this.clickMessage = 'Headline appears through Button click';
  }

  onButtonPureClick() {
    this.clickMessage = '';
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
    }else {
      this.textFieldHeadline = this.textValue;
    }
  }
}
