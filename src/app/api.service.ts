import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiurlbase = "http://api.weatherbit.io/v2.0/current";
  
  private cityComplement = "?city=";
  private keyComplement = "&key=cbf7ff9ea59249408e922b1d8762773d";

  constructor(private http: HttpClient) { }
  
  getData(city) {
    // lang = [language](optional)
    // units = [units](optional)
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    // .set('key', 'cbf7ff9ea59249408e922b1d8762773d')
    
    return this.http.get(this.apiurlbase + this.cityComplement + city + this.keyComplement, 
      { 'headers': headers })
  }
}
