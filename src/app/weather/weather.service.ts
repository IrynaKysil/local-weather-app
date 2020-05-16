import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ICurrentWeatherData {
  weather: [
    {
      description: string,
      icon: string
    }
  ]
  main: {
    temp: number
  },
  dt: number,
  sys: {
    country: string
  },
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
}
