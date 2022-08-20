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
  });


  it('vCard fscrub test 1', () => {
    const payload = readFileSync('./spec/data/dupe-1.vcf', 'utf-8');
    const engine = new vCardEngine(payload);
    const scrubbed = engine.fscrub(engine.vcardFeatures.bind(engine),
                                   engine.vcardMatch.bind(engine),
                                   engine.vcardMerge.bind(engine));
    expect(2).toEqual(scrubbed.length);
  });


  // it('vCard fscrub test 2', () => {
  //   const payload = readFileSync('./spec/data/jwatts-contacts.vcf', 'utf-8');
  //   const count = [...(new vCardEngine(payload)).run()].length;
  //   console.log(`count => ${count}`);
  //
  //   const engine = new vCardEngine(payload);
  //   const scrubbed = engine.fscrub(engine.vcardFeatures.bind(engine),
  //                                  engine.vcardMatch.bind(engine),
  //                                  engine.vcardMerge.bind(engine));
  //   expect(2).toEqual(scrubbed.length);
  // });

});
