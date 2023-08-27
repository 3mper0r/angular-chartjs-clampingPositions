import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DecimalToTimePipe } from './Pipes/decimal-to-time.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    DecimalToTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
