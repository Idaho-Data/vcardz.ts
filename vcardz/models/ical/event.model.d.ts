import { ICard } from '../icard.interface';
export declare class Event implements ICard {
    [key: string]: any;
    create(): Event;
    static create(): Event;
    toString(): string;
}
