import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
  standalone: true
})
export class HighlightElementDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostBinding('style.color') textcolor? : string;

  colorArray = [
    '#f2aa4cff',
    '#101820ff',
    '#2a3132',
    '#003b46',
    '#07575b',
    '#021c1e',
    '#2a2f33',
    '#1e1f26'
  ];

  private setRandomColor(){
    const colorPick = Math.floor(Math.random() * this.
    colorArray.length);

    if(this.backgroundColor !== this.colorArray[colorPick]) {
      this.backgroundColor = this.colorArray[colorPick];
      this.textcolor = '#ccc';
    }else{
      this.setRandomColor();
    }
  }

  @HostListener('click') onToggle() {
   this.setRandomColor();
  }

  ngOnInit(): void {
    this.backgroundColor = '#f2aa4cff';
    this.textcolor = '#101820ff';
  }

}
