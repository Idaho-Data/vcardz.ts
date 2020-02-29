import { Atom } from '../../vcardz/models';
import { iCalReader } from '../../vcardz/io';
import { Utility } from '../../vcardz/io/utility';


describe('iCalReader tests', () => {
  it('parse date 1', () => {
    const test = iCalReader.parseDate(new Atom('DTSTART:19970714'));
    if (!test) {
      fail('parseDate failed');
      return;
    }

    expect(test.year).toEqual(1997);
    expect(test.month).toEqual(7);
    expect(test.day).toEqual(14);

  });

  it('parse date 2', () => {
    const atom = new Atom('DTSTART;TZID=America/New_York:19970714T133000');
    const test = iCalReader.parseDate(atom);
    if (!test) {
      fail('parseDate failed');
      return;
    }
    expect(test.year).toEqual(1997);
    expect(test.month).toEqual(7);
    expect(test.day).toEqual(14);
    expect(test.zoneName).toEqual('America/New_York');
  });

  it('parse date 3', () => {
    const atom = new Atom('DTSTART:19970714T133000Z');
    const test = iCalReader.parseDate(atom);
    if (!test) {
      fail('parseDate failed');
      return;
    }
    expect(test.year).toEqual(1997);
    expect(test.month).toEqual(7);
    expect(test.day).toEqual(14);
    expect(test.zoneName).toEqual('UTC');
  });

});