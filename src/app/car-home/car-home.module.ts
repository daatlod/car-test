import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CarHomeComponent } from './car-home/car-home.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarBannerComponent } from './car-banner/car-banner.component';



@NgModule({
  declarations: [
    CarHomeComponent,
    CarListComponent,
    CarBannerComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CarHomeModule { }
