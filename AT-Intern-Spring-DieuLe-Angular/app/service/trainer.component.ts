import  { Component } from '@angular/core';
import  { TrainersService } from './service.component';
import {Http} from '@angular/http';
import  {Mypipe} from './mypipe.pipe';


@Component({
  selector: 'my-app',
  templateUrl: './trainer.html',
  providers: [ TrainersService ],
})

export class TrainersComponent {
  trainers: any;
  selected: any;
  constructor(private _trainerService: TrainersService) {
    this.trainers = [];
    this.selected = null;
    this._trainerService.getAllTrainer()

    .subscribe((data: any)=> {
      this.trainers = data.trainers;
    })
  }
  // viewDetail(i: number) {
  //   this.selected = i;
  // }
  viewDetail(i: number) {
    this.selected = this.trainers[i].name;
  }
}
