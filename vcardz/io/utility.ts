import { ICard } from '../models';
import { DateTime } from 'luxon';
import { AssertionError } from 'assert';


export class Utility
{
  public static icalBegin = /^BEGIN:VCALENDAR$/;
  public static icalEnd = /^END:VCALENDAR$/;
  public static numbersOnly = /[^0-9]/;
  public static phoneNumbers = /\+?1? *\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})(?:[,x ]*)([0-9]*)/;
  public static vcardBegin = /^BEGIN:VCARD$/;
  public static vcardEnd = /^END:VCARD$/;
  public static icalDateMatch = /(\d{4})(\d{2})(\d{2})T?(\d{2})?(\d{2})?(\d{2})?(Z)?/;
  public static icalDateReplace = /(\d{4})(\d{2})(\d{2})T?(\d{2})?(\d{2})?(\d{2})?(Z)?/g;

  // negative look-behind assertion
  // only match ':' and not '\:'
  public static vcardSplitRex = /(?<!\\):/;
  public static nonHttpColon = /(?<!http):/;
  public static foldedLine = /^\s/;


  public static unescapeVcard(data: string): string {
    return data.replace(/\\,/gi, ',')
               .replace(/\\;/gi, ';')
               .replace(/\\:/gi, ':');
  }

  public static escapeVcard(data: string): string {
    return data.replace(',', '\\,')
               .replace(';', '\\;')
               .replace(':', '\\:');
  }

  public static rawValue(data: string): string {
    return data.split(Utility.vcardSplitRex)
               .slice(1)
               .join(':');
  }

  public static vcardValue(data: string): string {
    return Utility.unescapeVcard(Utility.rawValue(data));
  }

  public static isBag(data: string): boolean {
    let value = Utility.rawValue(data);
    let rex = /(?<!\\);/;
    return (rex.test(value));
  }

  public static fixPayload(payload: string[]): string[] {
    // fix multi-line values
    let fixed = [] as string[];
    payload.forEach(line => {
      if (this.foldedLine.test(line)) {
      // if (line.split(this.nonHttpColon).length === 1) {
        // line is a continuation of the previous line
        let prev = fixed.pop() || '';
        prev += this.unescapeVcard(line.substr(1));
        fixed.push(prev);
      } else {
        fixed.push(line);
      }
    });

    return fixed;
  }


  public static isICard(obj: any): obj is ICard {
    return (obj as ICard).create !== undefined;
  }


  public static isDateTime(obj: any): obj is DateTime {
    return obj instanceof DateTime;
  }


}