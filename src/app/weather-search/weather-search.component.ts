import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
import { BroadcastSearchService } from '../broadcast-search.service'
import { WeatherObj } from '../models/weather-obj';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private _broadcastSearchService: BroadcastSearchService) { }

  ngOnInit(): void {
  
  }

  onSearchCity(city){
    console.log(`event: ${event}`);
    this._broadcastSearchService.broadcastSearch(city);
  }

}
  