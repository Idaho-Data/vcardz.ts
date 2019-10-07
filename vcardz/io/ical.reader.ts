import { Tag } from '../models';
import { Utility } from './utility';
import {
  Event,
  iCal,
} from '../models/ical';


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

      if ('BEGIN:VEVENT' === line) {
        inEvent = true;
        event = Event.create();
        return;
      }

      if ('END:VEVENT' === line) {
        cal['VEVENT'] = event;
        inEvent = false;
        return;
      }

      if (inEvent) {
        event[tag.prop] = line;
        return;
      }


      cal[tag.prop] = line;
    });

    return cal;
  }
}