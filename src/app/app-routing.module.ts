import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarHomeComponent} from './car-home/car-home/car-home.component';
import {CarDetailComponent} from './car-detail/car-detail/car-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CarHomeComponent
  },
  {
    path: 'detail/:carname',
    component: CarDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
