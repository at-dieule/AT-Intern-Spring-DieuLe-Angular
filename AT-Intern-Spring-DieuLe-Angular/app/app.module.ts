import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import  { TrainersComponent } from './d6/trainer.component';
import  { DetailComponent } from './d6/detail.component';
import  { Mypipe } from './d6/mypipe.pipe';



@NgModule({
  imports: [ 
			BrowserModule ,
			FormsModule,
			HttpModule,
			JsonpModule
    		],
  declarations: [TrainersComponent, DetailComponent, Mypipe],
  bootstrap:    [ TrainersComponent]
})
export class AppModule { }
