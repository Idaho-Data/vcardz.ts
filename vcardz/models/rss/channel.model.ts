import 'reflect-metadata';
import { Image } from './image.model';
import { Item } from './item.model';
import { Type } from 'class-transformer';


export class Channel {
  title = '';

  link = '';

  description = '';

  language = '';

  copyright = '';

  lastBuildDate = '';

  pubDate = '';

  @Type(() => Image)
  image = [] as Image[];

  @Type(() => Item)
  item = [] as Item[];
}
