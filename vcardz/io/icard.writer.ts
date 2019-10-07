import {
  Atom,
  Bag,
  ICard,
} from '../models';
import { Utility } from './utility';


export class ICardWriter {
  public static toString(obj: ICard,
                         propOrder: string[],
                         endcaps: string[]) {
    let data = [] as string[];
    let groups = new Map<string, string[]>();

    const writeProp = (key: string) => {
      if (!obj[key]) {
        return;
      }
      Array.from(obj[key] as Set<Atom|Bag|ICard>)
           .forEach(x => {
             if (Utility.isICard(x)) {
               data = [...data,
                       ...x.toString().split('\n')];
               return;
             }
             const val = x as Atom|Bag;
             if (val.tag.group) {
               groups.set(val.tag.group, groups.get(val.tag.group) || [] as string[]);
               groups.get(val.tag.group)!.push(val.toString());
             } else {
               data.push(val.toString());
             }
           });
    };

    propOrder.forEach(prop => writeProp(prop));
    Object.keys(obj)
          .map(key => key.toString())
          .filter(key => !(propOrder.includes(key)))
          .forEach(key => writeProp(key));

    // combine payload and groups
    let card = [endcaps[0]];
    card = [...card, ...data];
    Array.from(groups.values())
         .forEach(array => {
           card = [...card, ...array];
         });
    card.push(endcaps[1]);
    return card.join('\n');
  }
}