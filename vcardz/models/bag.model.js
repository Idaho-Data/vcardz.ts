"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_model_1 = require("./tag.model");
const utility_1 = require("../io/utility");
class Bag {
    constructor(data) {
        this._tag = new tag_model_1.Tag(data);
        this._value = utility_1.Utility.rawValue(data);
        this._tokens = this._value.split(';');
    }
    get tag() {
        return this._tag;
    }
    get value() {
        return this._value;
    }
    get tokens() {
        return this._tokens;
    }
    toString() {
        return (this._tag) ?
            `${this._tag}:${this._tokens.join(';')}` :
            '';
    }
    toJSON() {
        return {
            tag: this._tag,
            value: this._value,
            tokens: this._tokens
        };
    }
}
exports.Bag = Bag;
