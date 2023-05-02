import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { WeatherService } from '../../services/synoptic.service';
import { IWeatherResponse } from '../../models/IWeatherResponse';

@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit
 {
  weather: any;
  constructor(private _dialog: MatDialog, private weatherService: WeatherService) {}

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.weatherService.getCurrentWeather(`${latitude},${longitude}`).subscribe((data: any) => {
          this.weather = data.current;
        });
      });
    }
  }
  
  addCar(): void { this._dialog.open(FormAddCarComponent);}
}
