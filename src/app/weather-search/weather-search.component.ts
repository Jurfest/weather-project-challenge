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
  chaves:any;
  valores:any;
  callApi() {
    let weatherData;
    this.apiservice.getData("Raleigh").subscribe(
      (data) => {
        weatherData = new Object(data);
        this.entries = Object.entries(weatherData.data);
        this.chaves = Object.keys(weatherData.data);
        this.valores = Object.values(weatherData.data);
        console.log(this.entries)
        console.log(this.chaves)
        console.log(this.valores)
      }
    );
    
  }

}
