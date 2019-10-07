import { ICard } from './icard.interface';
import { vCardProxy } from './vcard.proxy';
import { Atom } from './atom.model';
import { Bag } from './bag.model';


export class iCal implements ICard {
  [key: string]: any;

  public create(): iCal {
    return iCal.create();
  }

  public static create(): iCal {
    return new Proxy(new iCal(), vCardProxy.handler);
  }


  public toString(): string {
    let data = [] as string[];
    let groups = new Map<string, string[]>();

    const writeProp = (key: string) => {
      if (!this[key]) {
        return;
      }
      Array.from(this[key] as Set<Atom|Bag>)
           .forEach(x => {
             if (x.tag.group) {
               groups.set(x.tag.group, groups.get(x.tag.group) || [] as string[]);
               groups.get(x.tag.group)!.push(x.toString());
             } else {
               data.push(x.toString());
             }
           });
    };

    Reflect.ownKeys(this)
           .map(key => key.toString())
           .forEach(key => writeProp(key));

    // combine data and groups
    let card = ['BEGIN:VCALENDAR',
                'VERSION:2.0'];
    card = [...card, ...data];
    Array.from(groups.values())
         .forEach(array => {
           card = [...card, ...array];
         });
    card.push('END:VCALENDAR');
    return card.join('\n');
  }
}