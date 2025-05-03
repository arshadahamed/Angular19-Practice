import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterCount',
  standalone: true,
})
export class LetterCountPipe implements PipeTransform {

  transform(value: string): number {
    let count = 0;
    for(const ch of value) {
      if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        count++;
      }
    }
    return count;
  }

}
