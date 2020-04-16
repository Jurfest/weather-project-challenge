import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { WeatherObj } from '../models/weather-obj';
// TODO: separar em outro serviço, pois chamada a api sendo feita somente em 
// home e passando apenas valor do input entre componentes

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  // searchedCities: string[] = [Atlanta, Rio de Janeiro, São Paulo, Curitiba, Lisboa, Roma, Londres, Paris, Bogotá -->]
  constructor(private apiservice: ApiService) { }

ngOnInit(): void {
    this.callApi("São Paulo")
  }

  // TODO: melhorar para string ou number - union melhor pois api pode mudar formato
  // temp: any;
  // wind: any;
  // humidity: any;
  // locale: any

  // TODO: melhorar para union
  public weatherSelectData: any[] = [];

  callApi(city) {
    // this.apiservice.clearWeatherData();
    let weatherData;
    let locale;
    let temp;
    let wind;
    let humidity;
    // TODO: utilizar outro tipo de binding para simplificar acesso a variavel do input
    this.apiservice.getData(city).subscribe(data => {
      weatherData = data
      locale = weatherData.data[0].city_name;
      temp = weatherData.data[0].temp;
      wind = weatherData.data[0].wind_spd;
      humidity = weatherData.data[0].rh;
      const newItem = new WeatherObj(locale, temp, wind, humidity);

      console.log(locale)
      console.log(temp)
      console.log(wind)
      console.log(humidity)
  });
  
}

  
  onAddCity(city){
      console.log(`event: ${event}`);
      this.callApi(city);
    }
  }
  