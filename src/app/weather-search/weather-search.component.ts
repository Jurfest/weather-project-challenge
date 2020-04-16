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

  public weatherDatabase:any;
  
  callApi(event) {
    let teste = event.target.value
    this.apiservice.getData(teste).subscribe(data => {this.weatherDatabase = data
    
      this.locale = this.weatherDatabase.data[0].city_name;
      this.temp = this.weatherDatabase.data[0].temp;
      this.wind = this.weatherDatabase.data[0].wind_spd;
      this.humidity = this.weatherDatabase.data[0].rh;
  
          console.log(this.weatherDatabase)
          console.log(this.locale)
          console.log(this.temp)
          console.log(this.wind)
          console.log(this.humidity)
    
    });
    

    // this.apiservice.getData(teste).subscribe(
    //   (data) => {
    //     weatherData = new Object(data);
    //     this.weatherDatabase.push(this.locale = weatherData.data[0].city_name)
    //     this.weatherDatabase.push(this.temp = weatherData.data[0].temp);
    //     this.weatherDatabase.push(this.wind = weatherData.data[0].wind_spd);
    //     this.weatherDatabase.push(this.humidity= weatherData.data[0].rh);
        
    //     console.log(this.weatherDatabase)
    //     console.log(this.locale)
    //     console.log(this.temp)
    //     console.log(this.wind)
    //     console.log(this.humidity)
    //   }
    //   );
      
    }
    
}
