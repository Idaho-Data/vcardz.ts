"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vcard_proxy_1 = require("../vcard.proxy");
const io_1 = require("../../io");
class iCal {
    create() {
        return iCal.create();
    }
    static create() {
        return new Proxy(new iCal(), vcard_proxy_1.vCardProxy.handler);
    }
    toString() {
        return io_1.ICardWriter.toString(this, [], ['BEGIN:VCALENDAR',
            'END:VCALENDAR']);
    }
}
exports.iCal = iCal;
