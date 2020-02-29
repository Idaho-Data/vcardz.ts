import { Utility } from '../io/utility';
import { ICard } from './icard.interface';
import { Atom } from './atom.model';
import { Bag } from './bag.model';
import {
  Address,
  Name,
  Phone,
} from './properties';


export class vCardProxy {

  protected static setter(card: ICard, prop: string, value: string|Atom|Bag|ICard): boolean {
    if (!(prop in card)) {
      card[prop] = new Set<Atom|Bag>();
    }
    const cardProp = card[prop] as Set<Atom|Bag|ICard>;

    if (typeof value !== 'string') {
      cardProp.add(value as Atom|Bag|ICard);
      return true;
    }

    const stringVal = value as string;
    switch (prop) {
      case 'ADR':
        cardProp.add(new Address(stringVal));
        break;

      case 'N':
        cardProp.add(new Name(stringVal));
        break;

      case 'TEL':
        cardProp.add(new Phone(stringVal));
        break;

      default:
        if (Utility.isBag(stringVal)) {
          cardProp.add(new Bag(stringVal));
        } else {
          cardProp.add(new Atom(stringVal));
        }
    }
    return true;
  }


  protected static getter(card: ICard, prop: string) {
    if (typeof prop === 'symbol' || prop.startsWith('_') || !(prop in card)) {
      return undefined;
    }

    if (card[prop] instanceof Function) {
      return card[prop];
    }

    const set = card[prop] as Set<Atom|Bag>;
    switch (prop) {
      // vcard props
      case 'KIND':
      case 'N':
      case 'BDAY':
      case 'ANNIVERSARY':
      case 'GENDER':
      case 'PRODID':
      case 'REV':
      case 'UID':
      // ical props
      case 'DTSTAMP':
      case 'UID':
      case 'DTSTART':
      case 'CLASS':
      case 'CREATED':
      case 'DESCRIPTION':
      case 'GEO':
      case 'LAST-MOD':
      case 'LOCATION':
      case 'ORGANIZER':
      case 'PRIORITY':
      case 'SEQ':
      case 'STATUS':
      case 'SUMMARY':
      case 'TRANSP':
      case 'URL':
      case 'RECURID':
      case 'RRULE':
      case 'DTEND':
      case 'DURATION':
        return set.values().next().value;

      default:
        return [...set.values()];
    }
  }


  protected static has(card: ICard, prop: string): boolean {
    return (!prop.startsWith('_') && prop in card);
  }


  protected static ownKeys(card: ICard) {
    return Reflect.ownKeys(card)
                  .filter(prop => (typeof prop !== 'string' || !prop.startsWith('_')));
  }


  // proxy handler
  public static get handler(): object {
    return {
      has: this.has,
      ownKeys: this.ownKeys,
      set: this.setter,
      get: this.getter,
    };
  }

}