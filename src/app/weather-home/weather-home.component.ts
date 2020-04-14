import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

  locale:string = "São Paulo"
  
  hour:string = "Manha"

  weather:string = "Calor"

  temp:string = "12 º"
  max_temp: string = "32º"
  min_temp: string = "10º"

  humidity:string = "67%"

  wind:string = "12 K/M"
  
  
  constructor() { }



  ngOnInit(): void {
  }

}
