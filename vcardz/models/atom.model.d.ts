import { Tag } from './tag.model';
export declare class Atom {
    protected _tag: Tag;
    protected _value: string;
    constructor(data: string);
    readonly tag: Tag;
    value: string;
    toString(): string;
    toJSON(): object;
}
