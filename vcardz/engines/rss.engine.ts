import { Rss } from '../models/rss';


export class RssEngine {
  public constructor(protected _payload: string) {}

  public get payload(): string {
    return this._payload;
  }

  public *run(): Generator<Rss, number, undefined> {
    // const dom = new DOMParser();

  }
}
