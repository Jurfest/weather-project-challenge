import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiurlbase = "http://api.weatherbit.io/v2.0/current";
  private cityComplement = "?city=";
  private keyComplement = "&key=e90d181113a9497498a7d94d25833642";

  private forecastUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
  private forecasUrlKey = '&days=7&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30'

  // TODO: tipos podem ser string ou number - testar union
  // private cities: any[] = [];
  constructor(private http: HttpClient) { }
  
  getData(city:string) {
    // const headers = new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.apiurlbase + this.cityComplement + city + this.keyComplement, 
      // { 'headers': headers })

    )
  }

  getDataForecast(city:string) {
    console.log("estamos no ponto a")
    let finalUrl = this.forecastUrl + "city="+city + this.forecasUrlKey;
    return this.http.get(finalUrl)
  }
}
