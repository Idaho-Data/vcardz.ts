import { ICard } from '../icard.interface';
import { vCardProxy } from '../vcard.proxy';
import { ICardWriter } from '../../io';


export class Event implements ICard {
  [key: string]: any;

  public create(): Event {
    return Event.create();
  }

  public static create(): Event {
    return new Proxy(new Event(), vCardProxy.handler);
  }

  public toString(): string {
    return ICardWriter.toString(this,
                                [],
                                ['BEGIN:VEVENT',
                                 'END:VEVENT']);
  }

}