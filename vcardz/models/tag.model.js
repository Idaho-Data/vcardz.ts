"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("../io/utility");
class Tag {
    constructor(_data) {
        this._group = '';
        this._prop = '';
        this._attr = new Map();
        try {
            // negative look-behind assertion
            // only match ':' and not '\:'
            const tag = _data.split(utility_1.Utility.vcardSplitRex)[0];
            const attrs = tag.split(';');
            this._prop = attrs.shift();
            const frags = this._prop.split('.');
            if (frags.length > 1) {
                this._group = frags[0];
                this._prop = frags[1].toUpperCase();
            }
            else {
                this._prop = this._prop.toUpperCase();
            }
            if (!attrs) {
                return;
            }
            attrs.forEach(token => {
                const [type, val] = token.split('=');
                this.setAttr(type, val.split(','));
            });
        }
        catch (ex) {
            this._prop = '';
            this._attr = new Map();
            return;
        }
    }
    setAttr(key, val) {
        key = key.toUpperCase();
        if (this._attr.has(key)) {
            let newSet = new Set(val);
            let oldSet = this._attr.get(key);
            let set = new Set([...oldSet, ...newSet]);
            this._attr.set(key, set);
        }
        else {
            this._attr.set(key, new Set(val));
        }
    }
    // properties
    //
    // group
    get group() {
        return this._group;
    }
    set group(val) {
        this._group = val;
    }
    // prop
    get prop() {
        return this._prop;
    }
    set prop(val) {
        this._prop = val;
    }
    // attr
    get attr() {
        if (this._attr.size === 0) {
            return {};
        }
        return Array.from(this._attr.keys())
            .map(key => {
            return { [key]: [...this._attr.get(key)] };
        })
            .reduce((accum, curr) => {
            Object.keys(curr)
                .forEach(key => {
                accum[key] = curr[key];
            });
            return accum;
        });
    }
    set attr(attributes) {
        Object.keys(attributes)
            .forEach(key => {
            let val = attributes[key];
            if (typeof val === 'string') {
                val = [val];
            }
            this.setAttr(key, val);
        });
    }
    toString() {
        if (!this._prop) {
            return '';
        }
        let getprop = () => {
            let t = this._prop;
            if (this.group) {
                t = `${this._group}.${t}`;
            }
            return t;
        };
        if (!this._attr) {
            return getprop();
        }
        const attributes = Array.from(this._attr.keys())
            .map(key => {
            const set = this._attr.get(key);
            const vals = [...set].join(',');
            return `;${key}=${vals}`;
        })
            .join(',');
        return `${getprop()}${attributes}`;
    }
    toJSON() {
        return {
            prop: this._prop,
            group: this._group,
            attr: this.attr
        };
    }
}
exports.Tag = Tag;
