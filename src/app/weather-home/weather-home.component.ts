import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

  locale:string = "SÃO PAULO"
  
  hour:string = "MANHA"

  weather:string = "CALOR"

  temp:string = "12º"
  max_temp: string = "32º"
  min_temp: string = "10º"

  humidity:string = "67%"

  wind:string = "12 K/M"
  
  
  constructor() { }



  ngOnInit(): void {
  }

}
