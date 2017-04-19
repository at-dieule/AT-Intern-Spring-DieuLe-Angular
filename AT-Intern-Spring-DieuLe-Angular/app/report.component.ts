import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Welcome to Angular World</h1>
    <div #abc>Hello {{ name }}</div>
  `,
})
export class AppComponent {
  name: string = 'DIeu';

  @ViewChild('abc')
  abcDiv: ElementRef;

  ngAfterViewInit() {
    this.abcDiv.nativeElement.style.backgroundColor = 'red';
  }
}