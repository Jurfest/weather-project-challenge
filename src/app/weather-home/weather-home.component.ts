import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 
import { WeatherObj } from '../models/weather-obj';
import { WeatherSearchComponent } from '../weather-search/weather-search.component';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  //@Input('weatherItem') item: WeatherItem;
  locale:string = "São Paulo"
  
  hour:string = "Manha"

  weather:string = "Calor"

  temp:string = "12";
  max_temp: string = "32º"
  min_temp: string = "10º"

  humidity:string = "67%"

  wind:string = "12 K/M"

  //obj = new WeatherObj();
  
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }


 
}
