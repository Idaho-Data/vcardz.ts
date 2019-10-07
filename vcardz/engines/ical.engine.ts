import { iCal } from '../models/ical';
import { Utility } from '../io/utility';
import { iCalReader } from '../io';


export class iCalEngine {
  protected _inCal: boolean = false;

  public constructor(protected _payload: string) {}

  public get payload(): string {
    return this._payload;
  }

  public *run() {
    this._inCal = false;
    let data = [] as string[];

    for (let line of this._payload.split('\n')) {
      line = line.trim();
      if (line.match(Utility.icalEnd)) {
        data.push(line);
        this._inCal = false;
        yield iCalReader.fromString(data);

      } else if (line.match(Utility.icalBegin)) {
        this._inCal = true;
        data = [line];

      } else {
        data.push(line);
      }
    }

  }

}