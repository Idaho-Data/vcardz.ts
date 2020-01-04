"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vcard_proxy_1 = require("../vcard.proxy");
const io_1 = require("../../io");
class Event {
    create() {
        return Event.create();
    }
    static create() {
        return new Proxy(new Event(), vcard_proxy_1.vCardProxy.handler);
    }
    toString() {
        return io_1.ICardWriter.toString(this, [], ['BEGIN:VEVENT',
            'END:VEVENT']);
    }
}
exports.Event = Event;
