"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vcard_proxy_1 = require("./vcard.proxy");
class vCard {
    create() {
        return vCard.create();
    }
    static create() {
        return new Proxy(new vCard(), vcard_proxy_1.vCardProxy.handler);
    }
    get groups() {
        const rawGroups = Reflect.ownKeys(this)
            .map(key => key.toString())
            .flatMap(key => {
            return Array.from(this[key])
                .map(item => item.tag.group);
        })
            .filter(val => !!val);
        const groupSet = new Set(rawGroups);
        return [...groupSet].sort();
    }
    toString() {
        let data = [];
        let groups = new Map();
        const writeProp = (key) => {
            if (!this[key]) {
                return;
            }
            Array.from(this[key])
                .forEach(x => {
                if (x.tag.group) {
                    groups.set(x.tag.group, groups.get(x.tag.group) || []);
                    groups.get(x.tag.group).push(x.toString());
                }
                else {
                    data.push(x.toString());
                }
            });
        };
        writeProp('FN');
        writeProp('N');
        Reflect.ownKeys(this)
            .map(key => key.toString())
            .filter(key => !(/^FN$|^N$/.test(key)))
            .forEach(key => writeProp(key));
        // combine payload and groups
        let card = ['BEGIN:VCARD',
            'VERSION:4.0'];
        card = [...card, ...data];
        Array.from(groups.values())
            .forEach(array => {
            card = [...card, ...array];
        });
        card.push('END:VCARD');
        return card.join('\n');
    }
}
exports.vCard = vCard;
