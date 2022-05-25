import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CarDetailModule { }
