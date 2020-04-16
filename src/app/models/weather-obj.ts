export class WeatherObj {
  public city_name: string;
  public temp: number;
  public wind: number;
  public moisture: number;
  public city_img?: string;

  constructor(city_name: string, temp: number, wind:number, moisture:number, city_img?: string) {
    this.city_name = city_name;
    this.temp = temp;
    this.wind = wind;
    this.moisture = moisture;
    if(city_img){
      this.city_img = city_img;
    }
  }
}


// locale:string = "São Paulo"
  
//   hour:string = "Manha"

//   weather:string = "Calor"

//   temp:string = "12";
//   max_temp: string = "32º"
//   min_temp: string = "10º"

//   humidity:string = "67%"

//   wind:string = "12 K/M"