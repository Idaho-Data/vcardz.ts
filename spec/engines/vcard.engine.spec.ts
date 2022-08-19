import { vCardEngine } from '../../vcardz';
import { TestData } from '../data/testdata';
import {
  Atom,
  vCard,
} from '../../vcardz';
import { readFileSync } from 'fs';
import { convertToJson } from 'fast-xml-parser';


describe('vCardEngine', () => {
  it('constructor test', () => {
    const parse = new vCardEngine('foobar');
    expect(parse.payload).toEqual('foobar');
  });

  it('generator test', () => {
    const engine = new vCardEngine(TestData.johnDoe1);
    let result = engine.run().next().value;
    expect(result instanceof vCard).toEqual(true);
    let card = result as vCard;
    expect(card.FN[0] instanceof Atom).toEqual(true);
    expect(card.groups).toEqual(['item1', 'item2', 'item3', 'item4', 'item5']);
    // console.info(JSON.stringify(card, null, 4));
    // console.info(card.toString());
  });

  /*
  it('vCard merge test', () => {
    let engine = new vCardEngine(TestData.johnDoe1);
    const card1 = engine.run().next().value as vCard;

    engine = new vCardEngine(TestData.johnDoe1);
    const card2 = engine.run().next().value as vCard;

    const card3 = engine.vcardMerge(card1, card2);
    expect(card1.toString()).toEqual(card3.toString());
    // const features = engine.vcardFeatures(card);
    // expect(features.length).toEqual(4);
  });

  it('vCard fscrub test', () => {
    // const payload = readFileSync('./spec/data/dupe-1.vcf', 'utf-8');
    // const engine = new vCardEngine(payload);
    // const scrubbed = engine.fscrub(engine.vcardFeatures);
    // expect(0).toEqual(1);
    // const card = engine.run().next().value as vCard;
    // const features = engine.vcardFeatures(card);
    // expect(features.length).toEqual(4);
  });
*/


});
