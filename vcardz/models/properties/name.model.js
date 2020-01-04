"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bag_model_1 = require("../bag.model");
class Name extends bag_model_1.Bag {
    constructor(data) {
        super(data);
        this.last = this._tokens[0];
        this.first = this._tokens[1];
        this.middle = this._tokens[2];
        this.prefix = this._tokens[3];
        this.suffix = this._tokens[4];
    }
    toJSON() {
        return Object.assign(super.toJSON(), {
            last: this.last,
            first: this.first,
            middle: this.middle,
            prefix: this.prefix,
            suffix: this.suffix
        });
    }
}
exports.Name = Name;
