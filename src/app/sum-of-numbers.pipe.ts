import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumOfNumbers',
  standalone: true,
  // pure: false // If you want to make it impure, uncomment this line
})
export class SumOfNumbersPipe implements PipeTransform {

  transform(value: number[]): number {
    let sum = 0;
    for (let num of value) {
      sum += num;
    }
    return sum;
  }

}
