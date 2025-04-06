import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnChanges {
  @Input() inputValue: string = '';
  previousValue: string | undefined;
  currentValue: string | undefined;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from the ngOnChanges');
    console.log(changes);
  }
}
