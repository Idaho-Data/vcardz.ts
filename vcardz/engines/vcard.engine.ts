import { vCard } from '../models';
import { Utility } from '../io/utility';
import { async } from 'rxjs/internal/scheduler/async';
import { vCardReader } from '../io';


export class vCardEngine {
  protected _inCard: boolean = false;

  public constructor(protected _payload: string) {}

  public get payload(): string {
    return this._payload;
  }


  public *run() {
    this._inCard = false;
    let data = [] as string[];

    for (let line of this._payload.split('\n')) {
      line = line.trim();
      if (line.match(Utility.vcardEnd)) {
        data.push(line);
        this._inCard = false;
        yield vCardReader.fromString(data);

      } else if (line.match(Utility.vcardBegin)) {
        this._inCard = true;
        data = [line];

      } else if (this._inCard) {
        data.push(line);
      }
    }

    return;
  }

}