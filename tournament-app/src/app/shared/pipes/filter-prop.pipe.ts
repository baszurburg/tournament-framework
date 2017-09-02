import { Pipe, PipeTransform } from '@angular/core';

// Example usage
// <li *ngFor="let article of articles | filterProp:['filter','prop']">

@Pipe({
  name: 'filterProp'
})
export class FilterPropPipe implements PipeTransform {

  transform(items: any, args?: string[]): any {
     let filter = args[0];
     let prop = args[1];

    if (!items || !filter) {
      return items;
    }

    return items.filter((v: any) => {
        return v[prop] && v[prop].indexOf(filter) >= 0;
    });
  }

}
