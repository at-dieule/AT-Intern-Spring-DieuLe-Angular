import  { Component,OnInit } from '@angular/core';
import  { TrainersService } from './service.component';
import {Http} from '@angular/http';
import  {Mypipe} from './mypipe.pipe';
import { NgModel,NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './trainer.html',
  providers: [ TrainersService ,NgModel],
})

export class TrainersComponent {
 member: any;
  memberForm : FormGroup;
  firstname : FormControl;
  lastname : FormControl;
  birthday : FormControl;
  team : FormControl;
  email : FormControl;
  github : FormControl;

  constructor(fb: FormBuilder){
    this.memberForm = fb.group({
      'firstname' : ["Le", Validators.required],
      'lastname': ["DIeu", Validators.required],
      'birthday' : "",
      'team' : ["PHP", Validators.required],
      'email' : [null, Validators.required],
      'github' : ["at-dieule", Validators.required],
    })
  }


  addMember(form: any) {
    console.log(form.value);
    this.member.push(form.value)
  }
  addEmail(){
     var email= this.firstname.value + '.' + this.lastname.value + '@asiantech.vn';
     this.email.setValue(email);
   }
}