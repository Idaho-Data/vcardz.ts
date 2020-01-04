"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utility {
    static unescapeVcard(data) {
        return data.replace('\\,', ',')
            .replace('\\;', ';')
            .replace('\\:', ':');
    }
    static escapeVcard(data) {
        return data.replace(',', '\\,')
            .replace(';', '\\;')
            .replace(':', '\\:');
    }
    static rawValue(data) {
        return data.split(Utility.vcardSplitRex)
            .slice(1)
            .join(':');
    }
    static vcardValue(data) {
        return Utility.unescapeVcard(Utility.rawValue(data));
    }
    static isBag(data) {
        let value = Utility.rawValue(data);
        let rex = /(?<!\\);/;
        return (rex.test(value));
    }
    static fixPayload(payload) {
        // fix multi-line values
        let fixed = [];
        payload.forEach(line => {
            if (line.split(this.nonHttpColon).length === 1) {
                // line is a continuation of the previous line
                let prev = fixed.pop() || '';
                prev += line.substr(1).trimRight();
                fixed.push(prev);
            }
            else {
                fixed.push(line.trim());
            }
        });
        return fixed;
    }
    static isICard(obj) {
        return obj.create !== undefined;
    }
}
exports.Utility = Utility;
Utility.icalBegin = /^BEGIN:VCALENDAR$/;
Utility.icalEnd = /^END:VCALENDAR$/;
Utility.numbersOnly = /[^0-9]/;
Utility.phoneNumbers = /\+?1? *\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})(?:[,x ]*)([0-9]*)/;
Utility.vcardBegin = /^BEGIN:VCARD$/;
Utility.vcardEnd = /^END:VCARD$/;
// negative look-behind assertion
// only match ':' and not '\:'
Utility.vcardSplitRex = /(?<!\\):/;
Utility.nonHttpColon = /(?<!http):/;
