import { iCal } from '../models/ical';
import { Utility } from '../io/utility';
import { iCalReader } from '../io';


/**
 * @beta
 * @category engines
 */
export class iCalEngine {
  protected _inCal: boolean = false;

  public constructor(protected _payload: string) {}

  public get payload(): string {
    return this._payload;
  }

  public *run(): Generator<iCal, number, undefined> {
    this._inCal = false;
    let data = [] as string[];
    let count = 0;

    for (let line of this._payload.split('\n')) {
      // line = line.trim();
      const lineCheck = line.trim();
      if (lineCheck.match(Utility.icalEnd)) {
        data.push(line);
        this._inCal = false;
        count++;
        yield iCalReader.fromString(data);

      } else if (lineCheck.match(Utility.icalBegin)) {
        this._inCal = true;
        data = [line];

      } else {
        data.push(line);
      }
    }

    return count;
  }

}
