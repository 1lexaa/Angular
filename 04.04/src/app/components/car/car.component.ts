import { Component, Input } from "@angular/core";
import { ICar } from "src/app/Models/ICar";

@Component({selector:"app-car", templateUrl: './car.component.html', styleUrls: ['./car.component.css']})

export class CarComponent
{
    @Input('item') item: ICar;
}