
import {Component, Input} from '@angular/core'
import {MemberService} from './member.service'
import {Http} from '@angular/http'

@Component({
	selector: 'detail',
	templateUrl: './detail.html'
})

export class DetailComponent {
	@Input() selected :number = null;
	members:any[];
	constructor( private _member:MemberService) {
		this.members = [];
		this._member.getAllMember()
		.subscribe((data :any) => {
			this.members = data.members;
		})
	}
}