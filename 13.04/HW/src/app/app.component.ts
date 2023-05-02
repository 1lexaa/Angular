import {
  Component,
  OnInit
} from '@angular/core';
import { ICar } from './models/ICar';
import { CarsService } from './services/cars.service';
import { SimpleService } from './services/simple.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarsService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit
{
  title = 'app-ng';
  cars: ICar[] = [];
  timer: any = Date.now();
  constructor(
    private _carsService: CarsService,
    private eventService: SimpleService
  ) {}
  ngOnInit(): void {
    console.log('Init');
    this.listCars();
    this.eventService.subscribeToEvent((data: ICar) => {
      this.cars.push(data);
    });
  }

  listCars(): any {
    this._carsService.getAllCars().subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
