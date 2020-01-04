import { Bag } from '../bag.model';
export declare class Address extends Bag {
    poBox: string;
    extended: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    constructor(data: string);
    toJSON(): object & {
        poBox: string;
        extended: string;
        street: string;
        city: string;
        region: string;
        postalCode: string;
        country: string;
    };
}
