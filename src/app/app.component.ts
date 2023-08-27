import { AfterViewInit, Component, Inject, Injectable, OnInit } from '@angular/core';
import werkZeugData from '../data/data.json'
import { WerkzeugData } from './models/werkzeug-data';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { isNullOrUndef } from 'chart.js/dist/helpers/helpers.core';
import { transpose } from 'd3';
Chart.register(...registerables);
//import * as echarts from 'echarts'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit  {
  title = 'first-angular-app';
  
  //newMemberName: string = ''
  //names: string[] = []
  //errorMessage: string = ''
  
  chartData: number[][] = []
  data: WerkzeugData[] = werkZeugData;
  cposmin: any  
  cposmax: any 

  

  // createChartJsBar(minValue: number, maxValue: number) {
  //   werkZeugData.map(data => {
  //     this.chartData.push([data.cposmin, data.cposmax])
  //   });
  // }
  
  myChart: any 
  ngAfterViewInit() {

    const minValues = this.data.map(min => min.cposmin)
    const maxValues = this.data.map(max => max.cposmax)

    //const diff = maxValues[] - minValues

    //const covalue = this.data.forEach(diff => diff.cposmax - diff.cposmin)

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: '',
          data: [minValues, maxValues],
          backgroundColor: 'rgba(186, 220, 154)',
          borderColor: 'rgba(131, 195, 62)',
          borderWidth: 1,
          borderSkipped: false,
          barPercentage: 30,
          barThickness: 30,
          minBarLength: 30
          
        }]
      },
      options: {
        
        indexAxis: 'y',       
      
        scales: {
          x: {
            
            stacked: true,
            beginAtZero: false,
            min: 16000,
            max: 22000,
            display: true,
            grid: {
              display:false,
            },
            ticks: {
              mirror: true,
              stepSize: 1,
              display: false, 
              
            },
              
          },
          y: {
            stacked: true,
            display: true,
            
          }

        }
      }
    });
    
  }
 
    
//   const ctx = document.getElementById('myChart');

//   new Chart('myChart', {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

  
}

