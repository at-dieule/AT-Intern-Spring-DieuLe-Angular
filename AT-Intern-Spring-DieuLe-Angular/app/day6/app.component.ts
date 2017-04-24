
import {Component} from '@angular/core'
import {MemberService} from './member.service'
import {Http} from '@angular/http'

@Component({
  selector: 'my-app',
  providers: [MemberService],
  templateUrl: './app.html'
})

export class AppComponent {
  members:any[];
  selectedItem :number;
  constructor( private _member: MemberService) {
    this.members = [];
    this._member.getAllMember()
    .subscribe((data :any) => {
      this.members = data.members;
    });
    this.selectedItem = 0;
  }
  viewDetail(i :number) {
    this.selectedItem = i;
  }
}