import { ICard } from './icard.interface';
import { Atom } from './atom.model';
import { Bag } from './bag.model';
export declare class vCardProxy {
    protected static setter(card: ICard, prop: string, value: string | Atom | Bag | ICard): boolean;
    protected static getter(card: ICard, prop: string): any;
    protected static has(card: ICard, prop: string): boolean;
    protected static ownKeys(card: ICard): (string | number | symbol)[];
    static readonly handler: object;
}
