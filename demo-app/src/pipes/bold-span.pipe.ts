import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';

@Pipe({
  name: 'boldSpan'
})
export class BoldSpanPipe implements PipeTransform {

  constructor(
    public sanitizer: Sanitizer
  ) {}

  transform(value: string, regex): any {
    return this.replace(value, regex);
  }

  replace(str, regex) {
    return str.replace(new RegExp(`(${regex})`, 'gi'), '<b>$1</b>');
  }

}
