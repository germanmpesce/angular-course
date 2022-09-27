import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HerosModule } from './heros/heros.module';
import { AccountantModule } from './accountant/accountant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerosModule,
    AccountantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
