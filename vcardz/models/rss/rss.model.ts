import 'reflect-metadata';
import { Channel } from './channel.model';
import { Type } from 'class-transformer';


export class Rss {
  version = '';

  @Type(() => Channel)
  channel: Channel = new Channel();
}
