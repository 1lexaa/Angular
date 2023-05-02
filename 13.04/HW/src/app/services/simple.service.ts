import { Injectable, EventEmitter } from '@angular/core';
import { ICar } from '../models/ICar';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  public eventEmitter: EventEmitter<ICar> = new EventEmitter<ICar>();

  public emitEvent(data: ICar) {
    this.eventEmitter.emit(data);
  }

  public subscribeToEvent(callback: (data: ICar) => void) {
    this.eventEmitter.subscribe(callback);
  }
}
