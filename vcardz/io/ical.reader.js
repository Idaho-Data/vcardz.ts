"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const utility_1 = require("./utility");
const ical_1 = require("../models/ical");
class iCalReader {
    static fromString(payload) {
        let inEvent = false;
        let event;
        const fixed = utility_1.Utility.fixPayload(payload);
        const cal = ical_1.iCal.create();
        fixed.forEach(line => {
            let tag = new models_1.Tag(line);
            if (!tag.prop || ['BEGIN:VCALENDAR', 'END:VCALENDAR'].includes(line)) {
                return;
            }
            if ('BEGIN:VEVENT' === line) {
                inEvent = true;
                event = ical_1.Event.create();
                return;
            }
            if ('END:VEVENT' === line) {
                cal['VEVENT'] = event;
                inEvent = false;
                return;
            }
            if (inEvent) {
                event[tag.prop] = line;
                return;
            }
            cal[tag.prop] = line;
        });
        return cal;
    }
}
exports.iCalReader = iCalReader;
