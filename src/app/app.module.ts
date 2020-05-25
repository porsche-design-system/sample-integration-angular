import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { CollectionComponent } from './pages/collection.component';
import { FormsComponent } from './pages/forms.component';
import { FormsModule } from '@angular/forms';
import { PageWithPhnHeaderComponent } from './pages/page-with-phn-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    FormsComponent,
    PageWithPhnHeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PorscheDesignSystemModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
