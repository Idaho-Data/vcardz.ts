"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bag_model_1 = require("../../vcardz/models/bag.model");
describe('Bag', () => {
    it('parse a simple bag', () => {
        const testAddr = 'ADR;TYPE=WORK:;;123 Main Suite 200;Marietta;GA;30062;United States of America';
        const bag = new bag_model_1.Bag(testAddr);
        expect(bag.value).toEqual(';;123 Main Suite 200;Marietta;GA;30062;United States of America');
        expect(bag.tokens).toEqual(['',
            '',
            '123 Main Suite 200',
            'Marietta',
            'GA',
            '30062',
            'United States of America']);
        expect(bag.toString()).toEqual(testAddr);
    });
});
