import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumbers',
  standalone: true,
})
export class SortNumbersPipe implements PipeTransform {

  transform(arr: number[], sortOrder:'asc' | 'desc'): number[]
  {
    if(sortOrder === 'asc'){
      return arr.sort((a, b) => a - b);
    }
    else if(sortOrder === 'desc'){
      return arr.sort((a, b) => b - a);
    }
    return arr;
  }

}
