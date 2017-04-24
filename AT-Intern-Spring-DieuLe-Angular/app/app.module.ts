import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './day6/app.component';

import { DetailComponent }  from './day6/detail.component';
import { Mypipe }  from './day5/avatar.pipe';



@NgModule({
  imports: [ 
			BrowserModule ,
			FormsModule,
			HttpModule,
			JsonpModule
    		],
  declarations: [AppComponent, DetailComponent, Mypipe],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
