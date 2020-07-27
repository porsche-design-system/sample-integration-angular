import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { CollectionPage, FormsPage, PhnHeaderPage, UtilitiesPage } from './pages';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CollectionPage, FormsPage, UtilitiesPage, PhnHeaderPage],
  imports: [BrowserModule, AppRoutingModule, PorscheDesignSystemModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
