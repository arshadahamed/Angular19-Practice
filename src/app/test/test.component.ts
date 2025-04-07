import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit,OnDestroy {
  // @Input() inputValue: string = '';
  // previousValue: string | undefined;
  // currentValue: string | undefined;
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Calling from the ngOnChanges');
  //   console.log(changes);
  // }

  // @Input() user: any;
  // private previousUserName: string | undefined;
  // // ngOnChanges(changes: SimpleChanges): void {
  // //   console.log('ngOnChanges called',changes);
  // // }
  // ngDoCheck(): void {
  // if (this.user.name !== this.previousUserName) {
  //   this.previousUserName = this.user.name;
  //   console.log('ngDoCheck called: User name changed to: ',
  //     this.user.name);
  // }
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck called: Change detection cycle running...');
  // }

  // @ViewChild('wrapper') wrapper!: ElementRef;
  // @ContentChild('contentWraper') content!: ElementRef;
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit() called');
  //   console.log('ngAfterContentInit() - wrapper', this.wrapper);
  //   console.log('ngAfterContentInit() - content', this.content);
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked() called');
  // }
  // ngAfterViewInit(): void {
  //   const divElement: HTMLElement = this.wrapper.nativeElement;
  //   divElement.style.color = 'maroon';
  //   divElement.style.fontSize = '20px';
  //   divElement.style.fontWeight = 'Bold';
  //   console.log('ngAfterViewInit() called', this.wrapper);
  // }

  ngOnInit(): void {
    console.log('TestComponent : ngOnInit() called');
  }
  ngOnDestroy(): void {
    console.log('TestComponent : ngOnDestroy() called');
  }
}
