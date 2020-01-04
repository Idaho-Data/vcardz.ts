import { Tag } from './tag.model';
export declare class Bag {
    protected _tag: Tag;
    protected _value: string;
    protected _tokens: string[];
    constructor(data: string);
    readonly tag: Tag;
    readonly value: string;
    readonly tokens: string[];
    toString(): string;
    toJSON(): object;
}
