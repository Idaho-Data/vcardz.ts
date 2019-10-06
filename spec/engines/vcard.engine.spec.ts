import { Utility } from '../../vcardz/io/utility';
import { vCardEngine } from '../../vcardz/engines';
import { TestData } from '../data/testdata';
import {
  Atom,
  Bag,
  ICard,
  vCard,
} from '../../vcardz/models';


describe('vCardEngine', () => {
  it('constructor test', () => {
    const parse = new vCardEngine('foobar');
    expect(parse.data).toEqual('foobar');
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

});