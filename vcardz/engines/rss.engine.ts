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
  public constructor(protected _payload: string) {}

  public get payload(): string {
    return this._payload;
  }

  public *run(): Generator<Item, number, undefined> {
    const options = {
      // ignoreNameSpace: true,
      attributeNamePrefix: '',
      ignoreAttributes: false,
      stopNodes: ['description', 'media:description']
    };
    const json = parse(this._payload, options);
    const feed = plainToClass(Rss, json.rss);

    let count = 0;
    for (let item of feed.channel.item) {
      count++;
      yield item;
    }

    return count;
  }
}
