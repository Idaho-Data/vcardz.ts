import { Atom } from './atom.model';
import { Bag } from './bag.model';


/**
 * Interface for an object with dynamic properties *i.e.* vCard and iCal objects
 *
 * @remarks
 * `[key: string]: Set<Atom|Bag|ICard> | (() => ICard);`
 *
 * `(() => ICard)` is defined to handle the `create` method, otherwise TypeScript complains:
 *
 * ` error TS2411: Property 'create' of type '() => ICard' is not assignable to 'string' index type 'Set<Atom | ICard | Bag>'.`
 *
 * [Borislav Hadzhiev has a good article about dynamic properties](https://bobbyhadz.com/blog/typescript-add-dynamic-property-to-object)
 */
export interface ICard {
  /**
   * Factory method for creating an instance of an ICard
   *
   * @returns an instance of an iCard
   */
  create(): ICard;

  [key: string]: Set<Atom|Bag|ICard> | (() => ICard);
}
