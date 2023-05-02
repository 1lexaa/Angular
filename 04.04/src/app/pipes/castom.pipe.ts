import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'castom'})

export class CastomPipe implements PipeTransform 
{
  nvalue: string;

  transform(value: string, ...args: unknown[]): any 
  {
    this.nvalue = `${value}___test`;
    return null;
  }
}
