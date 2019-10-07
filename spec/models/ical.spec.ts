import { iCal } from '../../vcardz/models/ical';
import { iCalReader } from '../../vcardz/io';
import { TestData } from '../data/testdata';


describe('iCal', () => {
  // it('sanity check', () => {
  //   let cal = iCal.create();
  //   expect(cal.toString()).toEqual(['BEGIN:VCALENDAR','VERSION:2.0','END:VCALENDAR'].join('\n'));
  // });

  it('parse test', () => {
    let cal = iCalReader.fromString(TestData.event1.split('\n'));
    // console.info(`\n${cal.toString()}`);
    console.info(`\n${JSON.stringify(cal, null, 4)}`);
  })


});