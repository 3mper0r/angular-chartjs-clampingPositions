import { AfterViewInit, Component, OnInit, Output } from '@angular/core';

import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent  implements AfterViewInit{
  myChart: any
  ngAfterViewInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: '' ,
          data: [2000],
          backgroundColor: 'rgba(186, 220, 154)',
          borderColor: 'rgba(131, 195, 62)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: false,
            min: 0,
            max: 25000,
            ticks: {
              stepSize: 1,

            }, display: false,
          }
        }
      }
    });
  }
}
