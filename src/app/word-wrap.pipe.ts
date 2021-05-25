import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordWrap'
})
export class WordWrapPipe implements PipeTransform {

  transform(value: string, screenWidth: number): string {
    if (value.length < 100) {
      return value
    } else {
      return ( screenWidth >= 768 && screenWidth < 500) ? value.slice(0, 100) + '...' : value.slice(0, 150) + '...'
    }

  }

}
