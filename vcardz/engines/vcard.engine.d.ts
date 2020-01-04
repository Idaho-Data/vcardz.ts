import { vCard } from '../models';
export declare class vCardEngine {
    protected _payload: string;
    protected _inCard: boolean;
    constructor(_payload: string);
    readonly payload: string;
    run(): Generator<vCard, void, unknown>;
}
