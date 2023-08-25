import { Component } from '@angular/core';
import werkZeugData from '../data/data.json'
import { WerkzeugData } from './models/werkzeug-data';
import decimalToTime from '../app/lib/numberToTimeConverter'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  //newMemberName: string = ''
  //names: string[] = []
  errorMessage: string = ''

data: WerkzeugData[] = werkZeugData;

//constructor(){}
//let converter = werkZeugData.find(item => item === item.time)
//decimalToTime
  // onInput(member: string) {
  //   this.newMemberName = member 
  // }

  // addMember() {
  //   if (!this.newMemberName || this.newMemberName.length < 2) {
  //     this.errorMessage = 'You must write a name'
  //     return
  //   }
  //   this.errorMessage = ''
  //   this.names.push(this.newMemberName)
  //   this.newMemberName = ''
  // }
}
