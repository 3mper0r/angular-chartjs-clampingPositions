import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DecimalToTimePipe } from './Pipes/decimal-to-time.pipe';
import { ChartDataComponent } from './chart-data/chart-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalToTimePipe,
    ChartDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
