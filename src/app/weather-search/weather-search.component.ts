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
  callApi() {
    let weatherData;
    this.apiservice.getData("Raleigh").subscribe(
      (data) => {
        weatherData = new Object(data);
        this.entries = Object.entries(weatherData.data[0]);
        this.weatherKeys = Object.keys(weatherData.data[0]);
        this.weatherValues = Object.values(weatherData.data[0]);
        console.log(this.entries)
        console.log(this.weatherValues)
        console.log(this.weatherKeys)
      }
    );
    
  }

}
