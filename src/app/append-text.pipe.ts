import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText',
  standalone: true
})
export class AppendTextPipe implements PipeTransform {

  transform(value: string, suffixVal:string): unknown {
    return value + suffixVal;
  }

}
