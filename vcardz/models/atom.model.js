"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_model_1 = require("./tag.model");
const utility_1 = require("../io/utility");
// vCard field with a single string _value
class Atom {
    constructor(data) {
        this._value = utility_1.Utility.vcardValue(data);
        this._tag = new tag_model_1.Tag(data);
    }
    get tag() {
        return this._tag;
    }
    get value() {
        return (this._value) ?
            this._value :
            '';
    }
    set value(val) {
        this._value = val;
    }
    toString() {
        return (this._tag) ?
            `${this._tag}:${utility_1.Utility.escapeVcard(this._value)}` :
            '';
    }
    toJSON() {
        return { value: this._value, tag: this._tag };
    }
}
exports.Atom = Atom;
