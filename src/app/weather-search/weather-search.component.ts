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

  entries:any;
  weatherKeys:any;
  weatherValues:any;
  locale:any
  teste:any
  callApi(event) {
    let weatherData;
    let teste = event.target.value
    console.log(teste)
    this.apiservice.getData(teste).subscribe(
      (data) => {
        weatherData = new Object(data);
        this.locale = weatherData.data[0].city_name
        this.entries = weatherData.data[0].temp;
        this.weatherKeys = weatherData.data[0].wind_spd;
        this.weatherValues = weatherData.data[0].rh;
        console.log(this.locale)
        console.log(this.entries)
        console.log(this.weatherKeys)
        console.log(this.weatherValues)
      }
      );
      
    }
    
}
