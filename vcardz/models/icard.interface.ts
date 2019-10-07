import { Atom } from './atom.model';
import { Bag } from './bag.model';


export interface ICard {
  create(): ICard;
  [key: string]: Set<Atom|Bag|ICard> | (() => ICard);
}