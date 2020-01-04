"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bag_model_1 = require("../bag.model");
class Address extends bag_model_1.Bag {
    constructor(data) {
        super(data);
        this.poBox = this._tokens[0];
        this.extended = this._tokens[1];
        this.street = this._tokens[2];
        this.city = this._tokens[3];
        this.region = this._tokens[4];
        this.postalCode = this._tokens[5];
        this.country = this._tokens[6];
    }
    toJSON() {
        return Object.assign(super.toJSON(), {
            poBox: this.poBox,
            extended: this.extended,
            street: this.street,
            city: this.city,
            region: this.region,
            postalCode: this.postalCode,
            country: this.country
        });
    }
}
exports.Address = Address;
