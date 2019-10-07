import { ICard } from '../icard.interface';
import { vCardProxy } from '../vcard.proxy';
import { Atom } from '../atom.model';
import { Bag } from '../bag.model';
import { Utility } from '../../io/utility';
import { ICardWriter } from '../../io';


export class iCal implements ICard {
  [key: string]: any;

  public create(): iCal {
    return iCal.create();
  }

  public static create(): iCal {
    return new Proxy(new iCal(), vCardProxy.handler);
  }

  public toString(): string {
    return ICardWriter.toString(this,
                                [],
                                ['BEGIN:VCALENDAR',
                                 'END:VCALENDAR']);
  }
}