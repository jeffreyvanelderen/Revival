import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let spongebobText = '';

    for (let i = 0; i < value.length; i++) {
      const isEven = i % 2 === 0;
      spongebobText += isEven ? value[i].toUpperCase() : value[i].toLocaleLowerCase();
    }

    
    return spongebobText;
  }

}
