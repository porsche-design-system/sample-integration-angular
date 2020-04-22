import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { CollectionComponent } from './pages/collection.component';
import { FormsComponent } from './pages/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    FormsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PorscheDesignSystemModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
