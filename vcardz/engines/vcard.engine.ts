import { vCard } from '../models';
import { Utility } from '../io/utility';
import { async } from 'rxjs/internal/scheduler/async';
import { vCardReader } from '../io';


export class vCardEngine {
  protected _inCard: boolean;
  protected _card: vCard;

  public constructor(protected _payload: string) {
    this._inCard = false;
    this._card = new vCard();
  }

  public get data(): string {
    return this._payload;
  }


  public *run() {
    this._inCard = false;
    let data = [] as string[];

    // yield 'blah blah blah blah';
    // yield 'how now brown cow';
    // return;

    for (let line of this._payload.split('\n')) {
      line = line.trim();
      if (line.match(Utility.vcardEnd)) {
        data.push(line);
        this._inCard = false;
        // yield data.join('\n');
        yield vCardReader.fromString(data);
      }
      else if (line.match(Utility.vcardBegin)) {
        this._inCard = true;
        data = [line];
      } else if (this._inCard) {
        data.push(line);
      }
    }

    return;
  }

}