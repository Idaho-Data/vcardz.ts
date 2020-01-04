"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("../io/utility");
const atom_model_1 = require("./atom.model");
const bag_model_1 = require("./bag.model");
const properties_1 = require("./properties");
class vCardProxy {
    static setter(card, prop, value) {
        if (!(prop in card)) {
            card[prop] = new Set();
        }
        const cardProp = card[prop];
        if (typeof value !== 'string') {
            cardProp.add(value);
            return true;
        }
        const stringVal = value;
        switch (prop) {
            case 'ADR':
                cardProp.add(new properties_1.Address(stringVal));
                break;
            case 'N':
                cardProp.add(new properties_1.Name(stringVal));
                break;
            case 'TEL':
                cardProp.add(new properties_1.Phone(stringVal));
                break;
            default:
                if (utility_1.Utility.isBag(stringVal)) {
                    cardProp.add(new bag_model_1.Bag(stringVal));
                }
                else {
                    cardProp.add(new atom_model_1.Atom(stringVal));
                }
        }
        return true;
    }
    static getter(card, prop) {
        if (typeof prop === 'symbol' || prop.startsWith('_') || !(prop in card)) {
            return undefined;
        }
        if (card[prop] instanceof Function) {
            return card[prop];
        }
        const set = card[prop];
        switch (prop) {
            case 'KIND':
            case 'N':
            case 'BDAY':
            case 'ANNIVERSARY':
            case 'GENDER':
            case 'PRODID':
            case 'REV':
            case 'UID':
                return set.values().next().value;
            default:
                return [...set.values()];
        }
    }
    static has(card, prop) {
        return (!prop.startsWith('_') && prop in card);
    }
    static ownKeys(card) {
        return Reflect.ownKeys(card)
            .filter(prop => (typeof prop !== 'string' || !prop.startsWith('_')));
    }
    // proxy handler
    static get handler() {
        return {
            has: this.has,
            ownKeys: this.ownKeys,
            set: this.setter,
            get: this.getter,
        };
    }
}
exports.vCardProxy = vCardProxy;
