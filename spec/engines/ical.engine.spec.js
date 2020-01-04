"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engines_1 = require("../../vcardz/engines");
const testdata_1 = require("../data/testdata");
const ical_1 = require("../../vcardz/models/ical");
describe('iCalEngine', () => {
    it('constructor test', () => {
        const parse = new engines_1.iCalEngine('foobar');
        expect(parse.payload).toEqual('foobar');
    });
    it('generator test', () => {
        const engine = new engines_1.iCalEngine(testdata_1.TestData.event1);
        let result = engine.run().next().value;
        expect(result instanceof ical_1.iCal).toEqual(true);
        // let cal = result as iCal;
        //
        // let card = result as vCard;
        // expect(card.FN[0] instanceof Atom).toEqual(true);
        // expect(card.groups).toEqual(['item1', 'item2', 'item3', 'item4', 'item5']);
        // console.info(JSON.stringify(card, null, 4));
        // console.info(card.toString());
    });
});
