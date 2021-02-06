import {Pipe, PipeTransform} from '@angular/core';
import {Title} from '../../../results/models/results.model';

@Pipe({
  name: 'breakTitle'
})
export class BreakTitlePipe implements PipeTransform {

  transform(title: string): Title | undefined {
    return title.includes(':') ?
      {
        title: title.split(':')[0],
        subtitle: title.split(':')[1]
      } : undefined;
  }

}
