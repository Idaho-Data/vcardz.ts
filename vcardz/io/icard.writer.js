"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
class ICardWriter {
    static toString(obj, propOrder, endcaps) {
        let data = [];
        let groups = new Map();
        const writeProp = (key) => {
            if (!obj[key]) {
                return;
            }
            Array.from(obj[key])
                .forEach(x => {
                if (utility_1.Utility.isICard(x)) {
                    data = [...data,
                        ...x.toString().split('\n')];
                    return;
                }
                const val = x;
                if (val.tag.group) {
                    groups.set(val.tag.group, groups.get(val.tag.group) || []);
                    groups.get(val.tag.group).push(val.toString());
                }
                else {
                    data.push(val.toString());
                }
            });
        };
        propOrder.forEach(prop => writeProp(prop));
        Object.keys(obj)
            .map(key => key.toString())
            .filter(key => !(propOrder.includes(key)))
            .forEach(key => writeProp(key));
        // combine payload and groups
        let card = [endcaps[0]];
        card = [...card, ...data];
        Array.from(groups.values())
            .forEach(array => {
            card = [...card, ...array];
        });
        card.push(endcaps[1]);
        return card.join('\n');
    }
}
exports.ICardWriter = ICardWriter;
