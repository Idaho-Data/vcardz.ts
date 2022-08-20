import {
  Atom,
  vCard,
} from '../../vcardz/models';
import { vCardEngine } from '../../vcardz';
import { TestData } from '../data/testdata';
import assert = require('assert');
import exp = require('constants');
import { Name } from '../../vcardz/models/properties';


describe('vCard', () => {
  it('sanity check', () => {
    let card = vCard.create();
    card['FN'] = 'FN:John Doe';
    expect(card['FN'][0].value).toEqual('John Doe');
  });

  it('tag.attr test', () => {
    let card = vCard.create();
    card['TEL'] = 'TEL;TYPE=CELL,PRIMARY:(404) 555-1234';
    expect(card['TEL'][0].value).toEqual('404-555-1234');
    expect(card['TEL'][0].tag.attr['TYPE']).toEqual(['CELL', 'PRIMARY']);
  });

  it('Name test', () => {
    let card = vCard.create();
    card['N'] = 'N:Doe;John;;;';
    expect(card['N'][0].last).toEqual('Doe');
    expect(card['N'][0].first).toEqual('John');
  });

  it('group test', () => {
    let card = vCard.create();
    card['TEL'] = 'item1.TEL;TYPE=CELL,PRIMARY:(404) 555-1234';
    card['X-ABADR'] = 'item1.X-ABADR:us';
    card['X-ABADR'] = 'item2.X-ABADR:us';
    expect(card.groups).toEqual(['item1', 'item2']);

    let card2 = vCard.create();
    expect(card2.groups).toEqual([]);
  });

  it('Atom value test', () => {
    const atom1 = new Atom('TITLE');
    atom1.tag.attr = {language: 'en'};
    atom1.tag.attr = {language: 'fr'};
    atom1.value = 'Software Developer';
    expect(atom1.toString()).toEqual('TITLE;LANGUAGE=en,fr:Software Developer');

    let card = vCard.create();
    card.TITLE = atom1;
    expect(card.toString()).toEqual(`BEGIN:VCARD\nVERSION:4.0\n${atom1}\nEND:VCARD`);
  });


  it('vCard toString test', () => {
    const engine = new vCardEngine(TestData.johnDoe1);
    const card = engine.run().next().value;
    const text = card.toString();
    expect(TestData.johnDoe1_string).toEqual(text);
  });


  it('vCard toString test 2', () => {
    const engine = new vCardEngine(TestData.johnDoe1);
    const card = engine.run().next().value;
    const text = card.toString();
    expect(text).toContain('www.example.com/Joe/foaf.df');
  });


  it('vCard JSON test', () => {
    const engine = new vCardEngine(TestData.johnDoe1);
    const card = engine.run().next().value as vCard;
    const json = card.toJson();
    const obj = JSON.parse(json);
    expect(obj['FN'].length).toEqual(2);
  });


  it('vCard fromJson test', () => {
    const card = vCard.fromJson(TestData.johnDoe1_json);
    expect(card).toBeDefined();
    assert(card !== undefined);
    expect(card['N']).toBeDefined();
  });


  it ('vCard building w/ atom', () => {
    const card = vCard.create();
    const atom = new Atom('');
    atom.tag.prop = 'FN';
    expect(atom.tag.hash).toBeGreaterThan(0);
    atom.value = 'John Doe';
    card['FN'] = atom;
    expect(atom.hash).toBeGreaterThan(0);

    const text = card.toString();
    expect(text).toContain('John Doe');
  });


  it ('vCard building w/ name', () => {
    const card = vCard.create();
    const name = new Name('');
    name.first = 'John';
    name.last = 'Doe';
    expect(name.toString()).toEqual('Doe;John;;;');

    card['N'] = name;
    const text = card.toString();
    expect(text).toContain('N:Doe;John;;;\n');
  });

});
