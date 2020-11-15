import { Observable, of } from 'rxjs';
import { ICurrentWeather } from '../icurrent-weather';
import { IWeatherService } from '../iweather-service';

export class WeatherServiceFake implements IWeatherService{
  private fakeWeather: ICurrentWeather = {
    city: 'Bellevue',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 61,
    description: 'light rain'
  }
  public getCurrentWeather(search: string|number, country?: string):
  Observable<ICurrentWeather>{
    return of (this.fakeWeather);
  }
}
