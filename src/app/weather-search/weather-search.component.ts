import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
    this.onAddCity("São Paulo");
  }

  onAddCity(event){
    let city = event;
    console.log(`city: ${city}`);
    console.log(`event: ${event}`);
    this.apiservice.addCity(city);
  }
}
