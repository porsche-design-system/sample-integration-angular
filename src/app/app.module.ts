import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import * as fromPages from './pages';
import { FormsModule } from '@angular/forms';
import {AgGridAngular} from 'ag-grid-angular';

@NgModule({
  declarations: [AppComponent, ...fromPages.pages],
    imports: [BrowserModule, AppRoutingModule, PorscheDesignSystemModule, FormsModule, AgGridAngular],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
