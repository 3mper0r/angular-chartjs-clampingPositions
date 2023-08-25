import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToTime'
})
export class DecimalToTimePipe implements PipeTransform {

  transform(decimalNumber: number): string {

    const totalSeconds = Math.floor(decimalNumber)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return hours > 0 ? `${hours.toString().padStart(1, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s` : `${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
    // if(hours > 0)
    // return `${hours.toString().padStart(1, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    // return `${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
  }
}
