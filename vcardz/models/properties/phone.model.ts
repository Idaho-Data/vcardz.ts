import { Atom } from '../atom.model';
import { Utility } from '../../io/utility';

export class Phone extends Atom {
  public constructor(data: string) {
    if (!data.match(Utility.numbersOnly)) {
      return;
    }

    super(data);
    let match = data.match(Utility.phoneNumbers);
    if (match) {
      let temp = `${match[1]}-${match[2]}-${match[3]}`;
      if (match[4]) {
        temp += ` x${match[4]}`;
      }
      this._value = temp;
    }

  }

}
