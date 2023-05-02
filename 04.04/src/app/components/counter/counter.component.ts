import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit
{
  counter: number = 0;

  constructor()
  {
    console.log('Construct component');
  }

  public UP(): void { this.counter++; }
  public DOWN(): void { this.counter--; }
  public DEFAULT(): void { this.counter = 0; }

  ngOnInit(): void { console.log('+++init component counter+++')}
}
