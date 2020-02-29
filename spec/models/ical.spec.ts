import {
  Event,
  iCal,
} from '../../vcardz/models/ical';
import { iCalReader } from '../../vcardz/io';
import { TestData } from '../data/testdata';
import { Atom } from '../../vcardz/models';


describe('iCal', () => {
  it('parse test', () => {
    let cal = iCalReader.fromString(TestData.event1.split('\n'));
    expect(cal.VEVENT[0] instanceof Event).toEqual(true);
  })

});