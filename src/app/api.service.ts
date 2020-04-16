import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiurlbase = "http://api.weatherbit.io/v2.0/current";
  private cityComplement = "?city=";
  private keyComplement = "&key=cbf7ff9ea59249408e922b1d8762773d";

  // TODO: tipos podem ser string ou number - testar union
  // TODO: usar class e setar valores de tempo?
  private cities: any[] = [];
  constructor(private http: HttpClient) { }
  
  getData(city) {
    // lang = [language](optional)
    // units = [units](optional)
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.apiurlbase + this.cityComplement + city + this.keyComplement, 
      { 'headers': headers })
  }

  addCity(city){
    this.cities.push(city);
  }

  // TODO: passar cities sem usar essa função
  getCity(){
    return this.cities;
  }

  // TODO: melhorar tipagem
  // TODO: na verdade por enquanto funciona como addWeatherData (so para testar)
  // setWeatherData(data:any){
  //   this.weatherData.push(data)
  // }

  // clearWeatherData(){
  //   this.weatherData = [];
  // }

  // getWeatherData(){
  //   return this.weatherData;
  // }
}
