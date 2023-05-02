import { Component, EventEmitter, Output } from '@angular/core';
import { ICar } from 'src/app/Models/ICar';
@Component({
  selector: 'app-input-car',
  templateUrl: './input-car.component.html',
  styleUrls: ['./input-car.component.css'],
})

export class InputCarComponent {
  @Output() outCar = new EventEmitter<ICar>();
  addCar(model: HTMLInputElement): void {
    this.outCar.emit({ id: 0, model: model.value, year: 2000 });
  }
}