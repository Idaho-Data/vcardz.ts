import { ICard } from './icard.interface';
import { vCardProxy } from './vcard.proxy';
import { Bag } from './bag.model';
import { Atom } from './atom.model';
import assert = require('assert');
import { Tag } from './tag.model';
import {
  VCARD_FN,
  VCARD_N,
} from './properties';
import { vCardReader } from '../io';

export class vCard implements ICard {
  [key: string]: any;

  public create(): vCard {
    return vCard.create();
  }

  public static create(): vCard {
    return new Proxy( new vCard(), vCardProxy.handler);
  }


  public get groups(): string[] {
    const rawGroups = Reflect.ownKeys(this)
                             .map(key => key.toString())
                             .flatMap(key => {
                               return Array.from(this[key] as Set<Atom | Bag>)
                                           .map(item => item.tag.group);
                             })
                             .filter(val => !!val);
    const groupSet = new Set(rawGroups);
    return [...groupSet].sort();
  }


  public toString(): string {
    let data = [] as string[];
    let groups = new Map<string, string[]>();

    const setProp = (x: Atom|Bag) => {
      if (x.tag.group) {
        groups.set(x.tag.group, groups.get(x.tag.group) || [] as string[]);
        groups.get(x.tag.group)!.push(x.toString());
      } else {
        data.push(x.toString());
      }
    }

    const writeProp = (key: string) => {
      if (!this[key]) {
        return;
      }
      if (this[key] instanceof Array) {
        this[key].forEach(setProp);
      } else {
        setProp(this[key]);
      }
    };

    writeProp('FN');
    writeProp('N');
    Reflect.ownKeys(this)
           .map(key => key.toString())
           .filter(key => !(/^FN$|^N$/.test(key)))
           .forEach(key => writeProp(key));

    // combine payload and groups
    let card = ['BEGIN:VCARD',
                'VERSION:4.0'];
    card = [...card, ...data];
    Array.from(groups.values())
         .forEach(array => {
           card = [...card, ...array];
         });
    card.push('END:VCARD');
    return card.join('\n');
  }


  public toJson(): string {
    return JSON.stringify(this, null, 2);
  }


  public static fromJson(json: string): vCard|undefined {
    try {
      const obj = JSON.parse(json);
      assert(obj !== undefined);
      const buffer = [] as string[];

      const pushField = (field: any) => {
        const tag = Tag.fromObject(field.tag);
        buffer.push(`${tag}:${field.value}`);
      };

      obj[VCARD_FN].forEach(pushField);
      pushField(obj[VCARD_N]);

      Object.keys(obj)
            .filter(key => ![VCARD_FN, VCARD_N].includes(key))
            .filter(key => !(obj[key] instanceof Array))
            .forEach(key => pushField(obj[key]));

      Object.keys(obj)
            .filter(key => ![VCARD_FN, VCARD_N].includes(key))
            .filter(key => obj[key] instanceof Array)
            .forEach(key => obj[key].forEach(pushField));

      return vCardReader.fromString(buffer);

    } catch (ex) {
      console.error(ex);
      return undefined;
    }


  }

}
