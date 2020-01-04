import { IAttributes } from './attributes.interface';
export declare class Tag {
    protected _group: string;
    protected _prop: string;
    protected _attr: Map<string, Set<string>>;
    constructor(_data: string);
    protected setAttr(key: string, val: string[]): void;
    group: string;
    prop: string;
    attr: IAttributes;
    toString(): string;
    toJSON(): {
        prop: string;
        group: string;
        attr: IAttributes;
    };
}
