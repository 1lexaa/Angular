import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherstack.com/current';
  private readonly accessKey = '6af05fee795a508b5ac6b03ae6f15751';

  constructor(private http: HttpClient) { }

  getCurrentWeather(location: string) {
    return this.http.get(`${this.apiUrl}?access_key=${this.accessKey}&query=${location}`);
  }
}