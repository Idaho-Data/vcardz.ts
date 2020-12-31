import { Image } from './image.model';
import { Item } from './item.model';


export class Channel {
  title = '';
  link = '';
  description = '';
  language = '';
  copyright = '';
  lastBuildDate = '';
  pubDate = '';
  images = [] as Image[];
  items = [] as Item[];
}
