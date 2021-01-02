import { ItemMedia } from './item-media.model';
import { plainToClass } from 'class-transformer';
import { ItemMediaContent } from './item-media-content.model';
import { ItemGuid } from './item-guid';
import { ItemAtomLink } from './item-atom-link';
import { ItemCategory } from './item-category.model';


export class Item {
  title = '';
  description = '';

  creator = '';
  public set 'dc:creator'(value: string) {
    this.creator = value;
  }

  _category = [] as ItemCategory[];
  public get category(): ItemCategory[] {
    return this._category as ItemCategory[];
  }

  public set category(value: ItemCategory[]) {
    this._category = plainToClass(ItemCategory, value);
  }


  // pubDate
  _pubDate: Date = new Date();
  public set pubDate(value: Date) {
    this._pubDate = (typeof value === 'string') ?
                    new Date(value) :
                    value;
  }

  public get pubDate(): Date {
    return this._pubDate;
  }

  _media = new ItemMedia();
  public get media() {
    return this._media;
  }

  // media:*
  public set 'media:content'(value: object) {
    this._media.content = plainToClass(ItemMediaContent, value);
  }

  public set 'media:credit'(value: string) {
    this._media.credit = value;
  }

  public set 'media:description'(value: string) {
    this._media.description = value;
  }

  // guid
  _guid = new ItemGuid();
  public get guid() {
    return this._guid;
  }

  public set guid(value: object) {
    this._guid = plainToClass(ItemGuid, value);
  }

  // atom:link
  _link = new ItemAtomLink();
  public get link() {
    return this._link;
  }

  public set 'atom:link'(value: object) {
    this._link = plainToClass(ItemAtomLink, value);
  }
}
