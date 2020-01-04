"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_model_1 = require("../atom.model");
const utility_1 = require("../../io/utility");
class Phone extends atom_model_1.Atom {
    constructor(data) {
        if (!data.match(utility_1.Utility.numbersOnly)) {
            return;
        }
        super(data);
        let match = data.match(utility_1.Utility.phoneNumbers);
        if (match) {
            let temp = `${match[1]}-${match[2]}-${match[3]}`;
            if (match[4]) {
                temp += ` x${match[4]}`;
            }
            this._value = temp;
        }
    }
}
exports.Phone = Phone;
