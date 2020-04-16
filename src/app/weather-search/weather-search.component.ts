import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.callApi("São Paulo")
  }

  temp:any;
  wind:any;
  humidity:any;
  locale:any

  // TODO: melhorar para union
  public weatherSelectData: any[] = [];
  
  callApi(event) {
    this.apiservice.clearWeatherData();
    let weatherData;
    // TODO: utilizar outro tipo de binding para simplificar acesso a variavel do input
    let inputCity = event.target.value;
    this.apiservice.getData(inputCity).subscribe(data => {
      // weatherData = new Object(data);
      weatherData = data
      this.locale = weatherData.data[0].city_name;
      this.temp = weatherData.data[0].temp;
      this.wind = weatherData.data[0].wind_spd;
      this.humidity = weatherData.data[0].rh;
      this.weatherSelectData.push(this.locale);
      this.weatherSelectData.push(this.temp);
      this.weatherSelectData.push(this.wind);
      this.weatherSelectData.push(this.humidity);
      console.log(this.locale)
      console.log(this.temp)
      console.log(this.wind)
      console.log(this.humidity)
      this.apiservice.setWeatherData(this.weatherSelectData);
    });
    
      
    }
    
}
