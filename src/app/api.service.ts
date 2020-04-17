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
  // private cities: any[] = [];
  constructor(private http: HttpClient) { }
  
  getData(city:string) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.apiurlbase + this.cityComplement + city + this.keyComplement, 
      { 'headers': headers })
  }

}
