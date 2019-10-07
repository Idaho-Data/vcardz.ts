import { iCalEngine } from '../../vcardz/engines';
import { TestData } from '../data/testdata';
import { iCal } from '../../vcardz/models/ical';


describe('iCalEngine', () => {
  it('constructor test', () => {
    const parse = new iCalEngine('foobar');
    expect(parse.payload).toEqual('foobar');
  });

  it('generator test', () => {
    const engine = new iCalEngine(TestData.event1);
    let result = engine.run().next().value;
    expect(result instanceof iCal).toEqual(true);
    // let cal = result as iCal;
    //
    // let card = result as vCard;
    // expect(card.FN[0] instanceof Atom).toEqual(true);
    // expect(card.groups).toEqual(['item1', 'item2', 'item3', 'item4', 'item5']);
    // console.info(JSON.stringify(card, null, 4));
    // console.info(card.toString());
  });

});