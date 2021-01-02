import {
  Item,
  Rss,
} from '../models/rss';
import {
  getTraversalObj,
  parse,
} from 'fast-xml-parser';
import {
  deserialize,
  plainToClass,
} from 'class-transformer';


export class RssEngine {
  _feed: Rss = new Rss();

  public constructor(protected _payload: string) {
    this.parse();
  }

  public get payload(): string {
    return this._payload;
  }


  protected parse() {
    const options = {
      attributeNamePrefix: '',
      ignoreAttributes: false,
      stopNodes: ['description', 'media:description']
    };
    const payloadObj = parse(this._payload, options);
    this._feed = plainToClass(Rss, payloadObj.rss);
  }


  public *run(): Generator<Item, number, undefined> {
    let count = 0;
    for (let item of this._feed.channel.item) {
      count++;
      yield item;
    }
    return count;
  }


  public get feed(): Rss {
    return this._feed;
  }

}
