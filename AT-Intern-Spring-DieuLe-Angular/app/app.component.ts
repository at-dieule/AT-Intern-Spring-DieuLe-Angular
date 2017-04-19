import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello</h1>
	<input type="text" name='name' [(ngModel)]="name">
	<button type ="button" (click)="addmember()"> Add </button>
	<ul>
		<li *ngFor = "let item of member">{{item}} </li>

	</ul>

  `,
})
export class AppComponent  { 
	name: string;
	member: any;
	constructor(){
		this.name = '';
		this.member =[];
	}
	addmember(){
		this.member.push(this.name);
	}
	
}
