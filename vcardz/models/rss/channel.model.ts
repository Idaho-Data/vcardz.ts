import 'reflect-metadata';
import { Image } from './image.model';
import { Item } from './item.model';
import {
  plainToClass,
  Type,
} from 'class-transformer';
import { ItemAtomLink } from './item-atom-link';


export class Channel {
  title = '';
  link = '';
  description = '';
  language = '';
  copyright = '';

  // lastBuildDate
  _lastBuildDate = new Date();
  public set lastBuildDate(value: Date) {
    this._lastBuildDate = (typeof value === 'string') ?
                          new Date(value) :
                          value;
  }

  public get lastBuildDate(): Date {
    return this._lastBuildDate;
  }

  // pubDate
  _pubDate = new Date();
  public set pubDate(value: Date) {
    this._pubDate = (typeof value === 'string') ?
                    new Date(value) :
                    value;
  }

  public get pubDate(): Date {
    return this._pubDate;
  }

  // atom:link
  _atomLink = new ItemAtomLink();
  public get atomLink(): ItemAtomLink {
    return this._atomLink;
  }

  public set 'atom:link'(value: object) {
    this._atomLink = plainToClass(ItemAtomLink, value);
  }

  @Type(() => Image)
  image = [] as Image[];

  @Type(() => Item)
  item = [] as Item[];
}
