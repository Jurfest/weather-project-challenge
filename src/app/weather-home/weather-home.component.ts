import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service'; 
import { BroadcastSearchService } from '../broadcast-search.service'

import { WeatherObj } from '../models/weather-obj';
// import { WeatherSearchComponent } from '../weather-search/weather-search.component';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})

export class WeatherHomeComponent implements OnInit {
  locale:string = "São Paulo"
  hour:string = "Manhã"
  weather:string = "Calor"
  temp: string = "0 °";
  humidity:string = "0%"
  wind:string = "0 K/M"
  

  
  // searchedCities: string[] = [Atlanta, Rio de Janeiro, São Paulo, Curitiba, Lisboa, Roma, Londres, Paris, Bogotá -->]
  constructor(private _apiservice: ApiService, private _broadcastSearchService: BroadcastSearchService) { }

  ngOnInit(): void {
    this.callApi("São Paulo");
    this._broadcastSearchService.broadcastSearchInput.subscribe(
      city => { 
        console.log(`evento do input e valor do input do component search sendo recebido em home: ${city}`);
        this.callApi(city)
      }
    );

  }

  // TODO: melhorar para string ou number - union melhor pois api pode mudar formato
  // temp: any;
  // wind: any;
  // humidity: any;
  // locale: any

  // TODO: melhorar para union
  // public weatherSelectData: any[] = [];

  callApi(city) {
    // this.apiservice.clearWeatherData();
    let weatherData;
    let locale;
    let temp;
    let wind;
    let humidity;
    let date;
    // TODO: utilizar outro tipo de binding para simplificar acesso a variavel do input
    this._apiservice.getData(city).subscribe(data => {
      weatherData = data
      locale = weatherData.data[0].city_name;
      temp = weatherData.data[0].temp;
      wind = weatherData.data[0].wind_spd;
      humidity = weatherData.data[0].rh;
      date = weatherData.data[0].deteTime;
      var newItem = new WeatherObj(locale, temp, wind, humidity);
      this.locale = locale;
      this.temp = String(temp) + " °";
      this.humidity = String(humidity) + "%";
      this.wind = String(wind) + "K/M"; // kilometro / min
      console.log(locale)
      console.log(temp)
      console.log(wind)
      console.log(humidity)
      console.log(newItem);
    });
  }

}
// locale: string = "São Paulo"
// hour: string = "Manha"
// weather: string = "Calor"
// temp: string = "12";
// humidity: string = "67%"
// wind: string = "12 K/M"
  
