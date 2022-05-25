import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { carType } from '../../types/car.type';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public cars: carType[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe( (data:any) =>{
      console.log(data);
      this.cars = data;
    })  
  }

}
