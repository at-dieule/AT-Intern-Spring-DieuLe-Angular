import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import  { TrainersComponent } from './service/trainer.component';
import  { DetailComponent } from './service/detail.component';
import  { Mypipe } from './service/mypipe.pipe';



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
