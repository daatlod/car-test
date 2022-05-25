import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CarHomeModule } from './car-home/car-home.module';
import { CarDetailModule } from './car-detail/car-detail.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarHomeModule,
    CarDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
