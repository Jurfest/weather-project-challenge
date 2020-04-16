import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// OBS: chamada a api sendo feita somente em home e passando apenas valor do input entre componentes

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  // searchedCities: string[] = ["São Paulo"]
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.onAddCity("São Paulo");
  }

  onAddCity(event){
    let city = event.target.value;
    this.apiservice.addCity(city);
  }
}
