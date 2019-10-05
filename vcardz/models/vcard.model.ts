import { ICard } from './icard.interface';
import { vCardProxy } from './vcard.proxy';
import { Bag } from './bag.model';
import { Atom } from './atom.model';

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

    const writeProp = (key: string) => {
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

    writeProp('FN');
    writeProp('N');
    Reflect.ownKeys(this)
           .map(key => key.toString())
           .filter(key => !(/^FN$|^N$/.test(key)))
           .forEach(key => writeProp(key));

    // combine data and groups
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


}