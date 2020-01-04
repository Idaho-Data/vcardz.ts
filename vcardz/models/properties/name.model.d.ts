import { Bag } from '../bag.model';
export declare class Name extends Bag {
    last: string;
    first: string;
    middle: string;
    prefix: string;
    suffix: string;
    constructor(data: string);
    toJSON(): object;
}
