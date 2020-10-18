import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'http://api.openweathermap.org/data/2.5';
  apiKey = '6750f627afa043d7eb1677a5b46002d1';

  constructor(private http: HttpClient) {}

  getWeatherDataByLocation(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appId', this.apiKey);

    return this.http.get(`${this.url}/weather`, { params });
  }

  getWeatherDataByCity(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appId', this.apiKey);

    return this.http.get(`${this.url}/weather`, { params });
  }

  getForecastDataByLocation(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('cnt', '16')
      .set('units', 'metric')
      .set('appId', this.apiKey);

    return this.http.get(`${this.url}/forecast`, { params });
  }

  getForecastDataByCity(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('cnt', '16')
      .set('units', 'metric')
      .set('appId', this.apiKey);

    return this.http.get(`${this.url}/forecast`, { params });
  }

  getCityList(): Observable<any> {
    return this.http.get('./assets/city.list.json');
  }
}
