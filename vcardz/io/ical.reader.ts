import {
  Atom,
  Tag,
} from '../models';
import { Utility } from './utility';
import {
  Event,
  iCal,
} from '../models/ical';
import * as assert from 'assert';
import { DateTime } from 'luxon';


export class iCalReader {
  public static fromString(payload: string[]): iCal {
    let inEvent = false;
    let event: Event;

    const fixed = Utility.fixPayload(payload);

    const cal = iCal.create();
    fixed.forEach(line => {
      let tag = new Tag(line);
      if (!tag.prop || ['BEGIN:VCALENDAR','END:VCALENDAR'].includes(line)) {
        return;
      }

      if ('BEGIN:VEVENT' === line.trim()) {
        inEvent = true;
        event = Event.create();
        return;
      }

      if ('END:VEVENT' === line.trim()) {
        cal['VEVENT'] = event;
        inEvent = false;
        return;
      }

      if (inEvent) {
        event[tag.prop] = line.trim();
        return;
      }


      cal[tag.prop] = line.trim();
    });

    return cal;
  }

  public static parseDate(atom: Atom): DateTime | undefined {
    if (!atom.value) {
      return undefined;
    }

    // valid dates:
    // 19970714 - July 14, 1997
    // 19980118T230000 - Jan 18, 1998 @ 11pm local time
    // 19980119T070000Z - Jan 19, 1998 @ 0700 UTC
    // TZID=America/New_York:19980119T020000 - Jan 19, 1998 @ 2am in New York
    let matches = atom.value.match(Utility.icalDateMatch);
    if (!matches) {
      return undefined;
    }

    matches = matches.filter(match => match);

    let timeZone: string = (typeof (atom.tag.attr.TZID) !== 'undefined') ?
                           atom.tag.attr.TZID[0] :
                           'local';
    if (matches?.length === 8) {
      timeZone = 'UTC';
    }

    let isoDate = '';
    switch (matches?.length) {
      case 4:
        isoDate = atom.value.replace(Utility.icalDateReplace, '$1-$2-$3');
        break;

      case 7:
      case 8:
        isoDate = atom.value.replace(Utility.icalDateReplace, '$1-$2-$3T$4:$5:$6');
        break;

      default:
        return undefined;
    }

    let ret = DateTime.fromISO(isoDate, {zone: timeZone});
    // let ret = DateTime.fromISO(isoDate);
    return ret;
  }
}