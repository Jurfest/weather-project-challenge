import { Component, OnInit } from '@angular/core';
import { BroadcastSearchService } from '../broadcast-search.service'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit {
  temp:number[] = [];
  city:string[] = [];
  hour:string[] = [];
  description:string[] = [];
  wind:number[] = [];
  max_temp:number[] = []
  min_temp:number[] = []
  precip:number[] = []

  constructor(private _forecast: ApiService, private _broadcast: BroadcastSearchService) { }

  ngOnInit(): void {
    this._broadcast.broadcastSearchInput.subscribe(result => {
      console.log(result)
      this.callApiForecast(result)
    })
  }

  callApiForecast(city) {
    this._forecast.getDataForecast(city).subscribe((result) => {
      console.log(result);
      for(let dayData of result.data){
        this.temp.push(dayData.temp)
        this.city.push(dayData.city_name)
        this.hour.push(dayData.ob_time)
        this.description.push(dayData.weather.description)
        this.wind.push(dayData.wind_spd.toFixed(2))
        this.max_temp.push(dayData.max_temp)
        this.min_temp.push(dayData.min_temp)
        this.precip.push(dayData.precip)
      }

    })
  }

  // max_temp:number[]=[]
  // min_temp:number[]=[]
  // humidity:number[]=[]
  // wind:number[]=[]
  // description:string[]=[]

  // constructor(private broadcast:BroadcastSearchService, private api:ApiService) { }

  // ngOnInit(): void {
  //   this.broadcast.broadcastSearchInput.subscribe(
  //     result => { 
  //       this.callApiForecast(result)
  //     }
  //   );
  // }

  // callApiForecast(city) {
  //   this.api.getDataForecast(city).subscribe((result) => {
  //     console.log(result)
  //     console.log(result.data)
  //     for(let dayData of result.data){
  //       this.description.push(dayData.weather.description)
  //       this.wind.push(dayData.wind_spd.toFixed(2))
  //       this.max_temp.push(dayData.max_temp)
  //       this.min_temp.push(dayData.min_temp)
  //     }
  //   })

  //   console.log(this.max_temp)
  // }
}  

  

  
  

