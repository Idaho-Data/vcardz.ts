"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../vcardz/models");
describe('vCard', () => {
    it('sanity check', () => {
        let card = models_1.vCard.create();
        card['FN'] = 'FN:John Doe';
        expect(card['FN'][0].value).toEqual('John Doe');
    });
    it('tag.attr test', () => {
        let card = models_1.vCard.create();
        card['TEL'] = 'TEL;TYPE=CELL,PRIMARY:(404) 555-1234';
        expect(card['TEL'][0].value).toEqual('404-555-1234');
        expect(card['TEL'][0].tag.attr['TYPE']).toEqual(['CELL', 'PRIMARY']);
    });
    it('Name test', () => {
        let card = models_1.vCard.create();
        card['N'] = 'N:Doe;John;;;';
        expect(card['N'].last).toEqual('Doe');
        expect(card['N'].first).toEqual('John');
    });
    it('group test', () => {
        let card = models_1.vCard.create();
        card['TEL'] = 'item1.TEL;TYPE=CELL,PRIMARY:(404) 555-1234';
        card['X-ABADR'] = 'item1.X-ABADR:us';
        card['X-ABADR'] = 'item2.X-ABADR:us';
        expect(card.groups).toEqual(['item1', 'item2']);
        let card2 = models_1.vCard.create();
        expect(card2.groups).toEqual([]);
    });
    it('Atom value test', () => {
        const atom1 = new models_1.Atom('TITLE');
        atom1.tag.attr = { language: 'en' };
        atom1.tag.attr = { language: 'fr' };
        atom1.value = 'Software Developer';
        expect(atom1.toString()).toEqual('TITLE;LANGUAGE=en,fr:Software Developer');
        let card = models_1.vCard.create();
        card.TITLE = atom1;
        expect(card.toString()).toEqual(`BEGIN:VCARD\nVERSION:4.0\n${atom1}\nEND:VCARD`);
    });
});
