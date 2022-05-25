import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:3000/cars";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(carId?:number){
    let idNumber  = carId ? `/${carId}` : '';
    return this.httpClient.get(`${this.REST_API_SERVER}${idNumber}`);
  }
}
