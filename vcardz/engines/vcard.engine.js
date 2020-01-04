"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("../io/utility");
const io_1 = require("../io");
class vCardEngine {
    constructor(_payload) {
        this._payload = _payload;
        this._inCard = false;
    }
    get payload() {
        return this._payload;
    }
    *run() {
        this._inCard = false;
        let data = [];
        for (let line of this._payload.split('\n')) {
            line = line.trim();
            if (line.match(utility_1.Utility.vcardEnd)) {
                data.push(line);
                this._inCard = false;
                yield io_1.vCardReader.fromString(data);
            }
            else if (line.match(utility_1.Utility.vcardBegin)) {
                this._inCard = true;
                data = [line];
            }
            else if (this._inCard) {
                data.push(line);
            }
        }
        return;
    }
}
exports.vCardEngine = vCardEngine;
