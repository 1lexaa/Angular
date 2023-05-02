import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  image: string = "../../assets/Images/DW.png"
  test: string = 'start';
  constructor()
  {
    // setTimeout(() => {this.image = "../../assets/Images/PS.png"}, 3000);
  }

  changeValue(ev: any): void
  {
    this.test = ev.target.value;
  }
}