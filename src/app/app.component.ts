import { AfterViewInit, Component, ViewChild } from '@angular/core';
import werkZeugData from '../data/data.json'
import { WerkzeugData } from './models/werkzeug-data';
import { Chart } from 'chart.js';
import { ChartDataComponent } from './chart-data/chart-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  //newMemberName: string = ''
  //names: string[] = []
  //errorMessage: string = ''
  

  
  myChart: any
  data: WerkzeugData[] = werkZeugData;

}
