import { Component } from '@angular/core';
import { ICar } from 'src/app/models/ICar';
import { CarsService } from 'src/app/services/cars.service';
import { SimpleService } from 'src/app/services/simple.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent {
  cars: ICar[];
  car: ICar = {
    model: '',
    price: 0,
    year: 1990,
  };
  constructor(
    private _carService: CarsService,
    private eventService: SimpleService
  ) {}

  addCar(data: ICar): void {
    this._carService.addCar(data).subscribe({
      next: (response) => {
        this.eventService.emitEvent(data);
        alert(`Add car. Id: ${response.id}`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
