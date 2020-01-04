"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_model_1 = require("../../vcardz/models/atom.model");
describe('Atom', () => {
    it('parse a simple atom', () => {
        const atom = new atom_model_1.Atom('FN:Arnold Valent');
        expect(atom.tag.prop).toEqual('FN');
        expect(atom.value).toEqual('Arnold Valent');
    });
    it('parse escape values', () => {
        const atom = new atom_model_1.Atom('FN:Arnold Test 1\\,2\\:3\\; Valent');
        expect(atom.tag.prop).toEqual('FN');
        expect(atom.value).toEqual('Arnold Test 1,2:3; Valent');
    });
    it('parse NOTE', () => {
        const atom = new atom_model_1.Atom('NOTE:John Doe has a long and varied history\\, being documented on more police files that anyone else. Reports of his death are alas numerous.');
        expect(atom.tag.prop).toEqual('NOTE');
        expect(atom.value).toEqual('John Doe has a long and varied history, being documented on more police files that anyone else. Reports of his death are alas numerous.');
    });
});
