import {Title} from '../../results/models/results.model';

export class StringUtil {
  public static formatTitle(title: string): Title | undefined {
    return title.includes(':') ?
      {
        title: title.split(':')[0],
        subtitle: title.split(':')[1]
      } :
      undefined;
  }
}
