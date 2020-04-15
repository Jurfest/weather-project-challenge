import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  search(event){

  }

  ngOnInit(): void {
    this.callApi()
  }

  entries:any;
  weatherKeys:any;
  weatherValues:any;
  locale:any
  teste:any
  callApi() {
    let weatherData;
    this.apiservice.getData("Raleigh").subscribe(
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
