import { Utility } from '../io/utility';
import { ICard } from './icard.interface';
import { Atom } from './atom.model';
import { Bag } from './bag.model';
import {
  Address,
  Categories,
  Name,
  Phone,
  VCARD_CATEGORIES,
} from './properties';


/**
 * `vCardProxy` is a proxy object that supports dynamic properties by intercepting
 * calls for property operations *e.g.* getter, setter, delete, etc.
 *
 * @example
 * {@link vCard.create} shows how the proxy object is used:
 * ```ts
 * return new Proxy( new vCard(), vCardProxy.handler);
 * ```
 * This creates a new `vCard` object that uses `vCardProxy`
 *
 * @remarks
 * `vCardProxy` defines all object properties as a Set because a vCard tag can appear multiple times.
 *
 * @category models
 */
export class vCardProxy {
  /**
   * Handler for setting a property.
   *
   * @remarks
   * Defines a property on `card` and allows properties to be set using a raw vCard field string
   * ```ts
   * card['FN'] = 'FN:John Doe';
   * ```
   * or an API object like {@link Atom} or {@link Bag}.
   * ```ts
   * let atom = new Atom('FN:John Doe');
   * card['FN'] = atom;
   * ```
   *
   * @param card - target object
   * @param prop - vCard / iCal tag name
   * @param value
   * @protected
   */
  protected static setter(card: ICard, prop: string, value: string|Atom|Bag|ICard): boolean {
    if (!(prop in card)) {
      card[prop] = new Set<Atom|Bag>();
    }
    const cardProp = card[prop] as Set<Atom|Bag|ICard>;

    if (typeof value !== 'string') {
      // handle for ICard values
      if ('create' in value) {
        cardProp.add(value as ICard);
        return true;
      }

      const item = value as Atom|Bag;
      // check for empty tag values
      if ([null, undefined, ''].indexOf(item.tag.prop) !== -1) {
        item.tag.prop = prop;
      }
      cardProp.add(item);
      return true;
    }

    const stringVal = value as string;
    switch (prop) {
      case 'ADR':
        cardProp.add(new Address(stringVal));
        break;

      case VCARD_CATEGORIES:
        cardProp.add(new Categories(stringVal));
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


  /**
   * Handler for getting a property.
   *
   * @param card - targt object
   * @param prop - vCard / iCal tag name
   * @protected
   */
  protected static getter(card: ICard, prop: string) {
    if (typeof prop === 'symbol' || prop.startsWith('_') || !(prop in card)) {
      return undefined;
    }

    if (card[prop] instanceof Function) {
      return card[prop];
    }

    const set = card[prop] as Set<Atom|Bag>;
    return [...set.values()];
  }


  /**
   * Handler for checking if a property exists
   *
   * @param card - target object
   * @param prop - vCard / iCal tag name
   * @protected
   */
  protected static has(card: ICard, prop: string): boolean {
    return (!prop.startsWith('_') && prop in card);
  }


  /**
   * Handler for getting an object's properties
   *
   * @param card - target object
   * @protected
   */
  protected static ownKeys(card: ICard) {
    return Reflect.ownKeys(card)
                  .filter(prop => (typeof prop !== 'string' || !prop.startsWith('_')));
  }


  /**
   * Handler for delete an object property
   *
   * @param card - target object
   * @param prop - vCard / iCal tag name
   * @protected
   */
  protected static deleteProperty(card: ICard, prop: string) {
    if (prop in card) {
      return delete card[prop];
    }
    return true;
  }


  // proxy handler
  /**
   * Defines proxy handlers with their helper methods
   */
  public static get handler(): object {
    return {
      deleteProperty: this.deleteProperty,
      has: this.has,
      ownKeys: this.ownKeys,
      set: this.setter,
      get: this.getter,
    };
  }

}
