import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAeonWrapperModule } from 'ngx-aeon-wrapper';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAeonWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
