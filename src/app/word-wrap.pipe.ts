import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordWrap'
})
export class WordWrapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length < 100) {
      return value
    } else {
      return value.slice(0, 100) + '...';
    }

  }

}
