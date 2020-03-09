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

  it('generator test 2', () => {
    const engine = new iCalEngine(TestData.event1);
    // const generator = engine.run();
    // for (const event of generator) {
    //   console.info(event.toString());
    // }
    // console.info(generator.next().value);

    let iter = engine.run();
    let curr = iter.next();
    let count = 0;
    let eventCount = 0;
    while (!curr.done) {
      ++count;
      let events = [...curr.value.VEVENT];
      eventCount = events.length;
      curr = iter.next();
    }
    expect(count).toEqual(1);
    expect(eventCount).toEqual(1);
  });


  it('generator test 3', () => {
    const eventText = TestData.testEvent2;
    const engine = new iCalEngine(eventText);
    let iter = engine.run();
    let curr = iter.next();
    while (!curr.done) {
      let events = [...curr.value.VEVENT];
      let description = events[0].DESCRIPTION.value;
      const testValue = 'President Trump confirmed he would nominate William P. Barr as' +
        ' the attorney general of the United States to take the spot vacated by Jeff' +
        ' Sessions. Barr, who had served as attorney general in the George H. W. Bush' +
        ' administration, won Senate confirmation on February 14, 2019, by a 54-45' +
        ' vote and took over supervision of the special counsel investigation as it' +
        ' approached its conclusion.*\\n\\n* Helderman, Rosalind S. and Zapotosky,' +
        ' Matt. The Mueller Report: The Washington Post. Scribner, 2019, p49';
      expect(testValue).toEqual(events[0].DESCRIPTION.value);
      curr = iter.next();
    }
  });
});