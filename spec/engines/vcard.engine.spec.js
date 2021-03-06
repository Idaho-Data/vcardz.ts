"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engines_1 = require("../../vcardz/engines");
const testdata_1 = require("../data/testdata");
const models_1 = require("../../vcardz/models");
describe('vCardEngine', () => {
    it('constructor test', () => {
        const parse = new engines_1.vCardEngine('foobar');
        expect(parse.payload).toEqual('foobar');
    });
    it('generator test', () => {
        const engine = new engines_1.vCardEngine(testdata_1.TestData.johnDoe1);
        let result = engine.run().next().value;
        expect(result instanceof models_1.vCard).toEqual(true);
        let card = result;
        expect(card.FN[0] instanceof models_1.Atom).toEqual(true);
        expect(card.groups).toEqual(['item1', 'item2', 'item3', 'item4', 'item5']);
        // console.info(JSON.stringify(card, null, 4));
        // console.info(card.toString());
    });
});
