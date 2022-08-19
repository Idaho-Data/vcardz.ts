import {
  Atom,
  vCard,
  vCardEngine,
} from '../../vcardz';
import { TestData } from '../data/testdata';
import { readFileSync } from 'fs';


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


  it('vCard fscrub test 1', () => {
    const payload = readFileSync('./spec/data/dupe-1.vcf', 'utf-8');
    const engine = new vCardEngine(payload);
    const scrubbed = engine.fscrub(engine.vcardFeatures.bind(engine),
                                   engine.vcardMatch.bind(engine),
                                   engine.vcardMerge.bind(engine));
    expect(2).toEqual(scrubbed.length);
  });

});
