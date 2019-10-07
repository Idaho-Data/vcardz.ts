import {
  iCal,
  Tag,
} from '../models';
import { Utility } from './utility';


export class iCalReader {
  public static fromString(payload: string[]): iCal {
    const fixed = Utility.fixPayload(payload);

    const cal = iCal.create();
    fixed.forEach(line => {
      let tag = new Tag(line);
      if (!['BEGIN','END','VERSION'].includes(tag.prop)) {
        cal[tag.prop] = line;
      }
    });

  }
}