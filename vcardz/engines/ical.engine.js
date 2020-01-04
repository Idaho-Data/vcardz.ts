"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("../io/utility");
const io_1 = require("../io");
class iCalEngine {
    constructor(_payload) {
        this._payload = _payload;
        this._inCal = false;
    }
    get payload() {
        return this._payload;
    }
    *run() {
        this._inCal = false;
        let data = [];
        for (let line of this._payload.split('\n')) {
            line = line.trim();
            if (line.match(utility_1.Utility.icalEnd)) {
                data.push(line);
                this._inCal = false;
                yield io_1.iCalReader.fromString(data);
            }
            else if (line.match(utility_1.Utility.icalBegin)) {
                this._inCal = true;
                data = [line];
            }
            else {
                data.push(line);
            }
        }
    }
}
exports.iCalEngine = iCalEngine;
