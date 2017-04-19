import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './day5/app.component';

import { DetailComponent }  from './day5/detail.component';



@NgModule({
  imports: [ 
			BrowserModule ,
			FormsModule,
			HttpModule,
			JsonpModule
    		],
  declarations: [AppComponent, DetailComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
