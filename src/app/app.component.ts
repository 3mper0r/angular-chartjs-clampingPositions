import { AfterViewInit, Component } from '@angular/core';
import werkZeugData from '../data/data.json'
import { WerkzeugData } from './models/werkzeug-data';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit  {
  title = 'first-angular-app';  
  chartData: number[][] = []
  data: WerkzeugData[] = werkZeugData;
  minValue:any
  maxValue: any
  createBar(minValue: number, maxValue: number) {
    return new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: 'Spannpositionen der Werkzeuge',
          data: [[minValue, maxValue]],
          backgroundColor: 'rgba(186, 220, 154)',
          borderColor: 'rgba(131, 195, 62)',
          borderWidth: 1,
        }],
      },
      options: {
        plugins : {
          legend: {
            display: false,
          }
        },
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
              crossAlign: 'far',
              mirror: true,
              stepSize: 10,
              display: false, 
            },  
          },
          y: {
            ticks: {
              crossAlign: 'far',
              mirror: true
            },
            //stacked: true,
            display: true,
          }
        }
      }
      }
    )}
    
    
  myChart: any
  ngAfterViewInit() {
        
  const minValues = this.data.map(min => min.cposmin)
  const maxValues = this.data.map(max => max.cposmax)

  const coovalue = this.data.forEach(diff => diff.cposmax - diff.cposmin)

  function createBar(minValue: number, maxValue: number) {
  
     return  
             
  }

  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: 'Spannpositionen der Werkzeuge',
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
        plugins : {
          legend: {
            display: false,
          }
        },
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
              crossAlign: 'far',
              mirror: true,
              stepSize: 10,
              display: false, 
            },  
          },
          y: {
            ticks: {
              crossAlign: 'far',
              mirror: true
            },
            //stacked: true,
            display: true,
          }
        }
      }
    }); 
  }
}

