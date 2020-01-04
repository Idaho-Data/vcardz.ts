"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ical_1 = require("../../vcardz/models/ical");
const io_1 = require("../../vcardz/io");
const testdata_1 = require("../data/testdata");
describe('iCal', () => {
    it('parse test', () => {
        let cal = io_1.iCalReader.fromString(testdata_1.TestData.event1.split('\n'));
        expect(cal.VEVENT[0] instanceof ical_1.Event).toEqual(true);
    });
});
