"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class vCardReader {
    static fromString(payload) {
        // fix multi-line values
        let fixed = [];
        payload.forEach(line => {
            if (line.split(':').length === 1) {
                let prev = fixed.pop() || '';
                prev += line.substr(1).trimRight();
                fixed.push(prev);
            }
            else {
                fixed.push(line.trim());
            }
        });
        const card = models_1.vCard.create();
        fixed.forEach(line => {
            let tag = new models_1.Tag(line);
            if (!['BEGIN', 'END', 'VERSION'].includes(tag.prop)) {
                card[tag.prop] = line;
            }
        });
        return card;
    }
}
exports.vCardReader = vCardReader;
