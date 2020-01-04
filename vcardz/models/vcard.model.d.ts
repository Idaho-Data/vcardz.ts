import { ICard } from './icard.interface';
export declare class vCard implements ICard {
    [key: string]: any;
    create(): vCard;
    static create(): vCard;
    readonly groups: string[];
    toString(): string;
}
