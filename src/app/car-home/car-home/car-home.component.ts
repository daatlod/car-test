import { Component, OnInit } from '@angular/core';
import { CarListComponent } from '../car-list/car-list.component';
import { CarBannerComponent } from '../car-banner/car-banner.component';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.scss']
})
export class CarHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
