import { Pipe, PipeTransform } from '@angular/core';
import {languages} from './i18nh.map';
import i18nh, { useT } from 'i18nh';



@Pipe({
  name: 't'
})
export class I18nhPipe implements PipeTransform {

  constructor() {
    i18nh({
      languages,
      defaultLanguage: 'en'
    });
  }

  transform(value: any, args?: any): any {
    const [t] = useT();
    return t(value, args);
  }
}
