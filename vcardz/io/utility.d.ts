import { ICard } from '../models';
export declare class Utility {
    static icalBegin: RegExp;
    static icalEnd: RegExp;
    static numbersOnly: RegExp;
    static phoneNumbers: RegExp;
    static vcardBegin: RegExp;
    static vcardEnd: RegExp;
    static vcardSplitRex: RegExp;
    static nonHttpColon: RegExp;
    static unescapeVcard(data: string): string;
    static escapeVcard(data: string): string;
    static rawValue(data: string): string;
    static vcardValue(data: string): string;
    static isBag(data: string): boolean;
    static fixPayload(payload: string[]): string[];
    static isICard(obj: any): obj is ICard;
}
