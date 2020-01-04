import { iCal } from '../models/ical';
export declare class iCalEngine {
    protected _payload: string;
    protected _inCal: boolean;
    constructor(_payload: string);
    readonly payload: string;
    run(): Generator<iCal, void, unknown>;
}
