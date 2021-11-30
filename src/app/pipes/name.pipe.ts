import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customName',
})
export class NamePipe implements PipeTransform {
  transform(name: string, ...args: unknown[]): string {
    let n = name.split(' ');
    let initials = '';
    n.forEach((sec, index) => {
      if (index !== n.length - 1) initials += sec.charAt(0) + ' ';
      else initials += sec;
    });

    return initials;
  }
}
