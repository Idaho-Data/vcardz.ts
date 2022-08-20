import {
  Atom,
  Bag,
  vCard,
} from '../models';
import { Utility } from '../io/utility';
import { vCardReader } from '../io';
import * as assert from 'assert';
import { JaroWinkler } from 'string-metric';
import { Categories } from '../models/properties/categories.model';
import {
  VCARD_CATEGORIES,
  VCARD_FN,
} from '../models/properties';


export class vCardEngine {
  protected _inCard: boolean = false;
  protected static JAROWINKLER_MATCH = 0.95;


  public constructor(protected _payload: string) {}

  public get payload(): string {
    return this._payload;
  }


  public *run(): Generator<vCard, number, undefined> {
    this._inCard = false;
    let data = [] as string[];
    let count = 0;

    for (let line of this._payload.split('\n')) {
      line = line.trim();
      if (line.match(Utility.vcardEnd)) {
        data.push(line);
        this._inCard = false;
        count++;
        yield vCardReader.fromString(data);

      } else if (line.match(Utility.vcardBegin)) {
        this._inCard = true;
        data = [line];

      } else if (this._inCard) {
        data.push(line);
      }
    }

    return count;
  }

  // http://infolab.stanford.edu/serf/swoosh_vldbj.pdf
  public fscrub(featuresCallback: (_card: vCard|undefined) => Atom[],
                matchCallback: (atom1: Atom, atom2: Atom) => boolean,
                mergeCallback: (card1: vCard, card2: vCard) => vCard) {
    const p_hash = new Map<String, vCard|undefined>();
    const n_hash = new Map();
    const scrubbed = [] as vCard[];
    const deck = [...this.run()];

    let zombie: vCard|undefined = undefined;

    while (0 < deck.length || zombie !== undefined) {
      let buddy: vCard|undefined = undefined;
      if (zombie === undefined) {
        zombie = deck.pop();
      }

      const zombieFeatures = featuresCallback(zombie);
      // keep track of any new features in zombie
      zombieFeatures.forEach(feature => {
        if (!p_hash.has(feature.toString())) {
          p_hash.set(feature.toString(), zombie);
        }
      });

      // look for feature matches
      buddy = zombieFeatures.map(atom => {
                              const match = p_hash.get(atom.toString());
                              if (match === undefined) {
                                return undefined;
                              }

                              return (match !== zombie) ? match : undefined;
                            })
                            .find(val => (val));


      if (!buddy) {
        // do stuff
        buddy = zombieFeatures.filter(atom => !n_hash.has(atom.toString()))
                              .map(atom => {
                                const found = scrubbed.find(card => {
                                  let cardFeatures = featuresCallback(card).filter(_atom => _atom.tag.prop === atom.tag.prop);
                                  let match = cardFeatures.find(_atom => matchCallback(atom, _atom));
                                  return (match) ? card : false;
                                });

                                if (!found) {
                                  n_hash.set(atom.toString(), atom.value);
                                }

                                return found;
                              })
                              .find(found => (found));

      }

      if (!buddy) {
        scrubbed.push(zombie as vCard);
        zombie = undefined;
      } else {
        const merged = mergeCallback(buddy, zombie as vCard);
        scrubbed.splice(scrubbed.indexOf(buddy), 1);

        const mergedFeatures = featuresCallback(merged);
        mergedFeatures.forEach(atom => p_hash.set(atom.toString(), merged));
        zombie = merged;
      }

    } // end while

    return scrubbed;
  }


  public vcardFeatures(card: vCard|undefined): Atom[] {
    if (card === undefined) {
      return [] as Atom[];
    }
    assert(card !== undefined);

    return ['FN', 'N', 'TEL', 'EMAIL'].map(prop => card[prop])
                                      .filter(set => set !== undefined)
                                      .filter(set => set.length > 0)
                                      .flatMap(set => {
                                        const tag = set[0].tag.prop;
                                        return set.map((item: Atom | Bag) => (item instanceof Atom) ?
                                                                             new Atom(`${tag}:${item.value}`) :
                                                                             new Atom(`${tag}:${item.tokens.join(',')}`));
                                      });
  }


  public vcardMatch(item1: Atom|Bag, item2: Atom|Bag): boolean {
    const jaroWinkler = new JaroWinkler();
    let score = 0;

    switch (item1.tag.prop) {
      case 'FN':
        score = jaroWinkler.similarity(item1.value, item2.value);
        // if (score >= vCardEngine.JAROWINKLER_MATCH) {
        //   console.log(`FN ${item1.value} / ${item2.value} => ${score}`);
        // }
        return score >= vCardEngine.JAROWINKLER_MATCH;

      case 'N':
        score = jaroWinkler.similarity(item1.toString(), item2.toString());
        // if (score >= vCardEngine.JAROWINKLER_MATCH) {
        //   console.log(`N ${item1.toString()} / ${item2.toString()} => ${score}`);
        // }
        return score >= vCardEngine.JAROWINKLER_MATCH;

      case 'EMAIL':
      case 'TEL':
        // if (item1.valueHash === item2.valueHash) {
        //   console.log(`${item1.tag.prop} ${item1.value} / ${item2.value}`);
        // }
        return item1.valueHash === item2.valueHash;

      default:
        return false;
    }
  }


  public vcardMerge(card1: vCard, card2: vCard): vCard {
    let result = vCard.create();
    result = this.mergeCopy(result, card1);
    result = this.mergeCopy(result, card2);
    result = this.mergeCleanup(result);
    return result;
  }


  // merge helper functions
  protected mergeCopy(target: vCard, src: vCard): vCard {
    for (let prop in src) {
      [...src[prop]].forEach(item => {
        if (!target[prop]) {
          target[prop] = item.toString();
          return;
        }

        let found = [...target[prop]].find(_item => {
          // yay! we found a match
          if (_item.hash === item.hash) {
            return true;
          }

          // values matched but tag is different; ensure tags are in the same group
          if (_item.tag.group === item.tag.group && _item.valueHash === item.valueHash) {
            // merge tag attribute maps
            const attrSet = [_item.tag.attr,
                             item.tag.attr].filter(_attr => _attr && Object.keys(_attr).length > 0);
            const attrKeys = new Set([...attrSet.flatMap(_attr => Object.keys(_attr))]);

            const attributes = [...attrKeys].reduce((obj: any, key) => {
              const vals = attrSet.flatMap(_attr => _attr[key]);
              obj[key] = vals;
              return obj;
            }, {});
            _item.tag.attr = attributes;
            return true;
          }

        });
        if (!found) {
          target[prop] = item.toString();
        }
      });

    } // end for

    return target;
  }


  protected mergeCleanup(target: vCard): vCard {
    if (target[VCARD_FN]) {
      // de-dupe formal names
      // need to partition by tag to account for attributes
      const fnBuckets = target[VCARD_FN].reduce((map: Map<string, string>, atom: Atom) => {
        const tag = atom.tag.toString();
        const oldName = map.has(tag) ? map.get(tag) as string
                                     : '';
        const name = atom.value;
        // prefer longer names
        const temp = (oldName.length > name.length) ? oldName : name;
        map.set(tag, temp);
        return map;
      }, new Map<string, string>());

      delete target[VCARD_FN];
      [...fnBuckets.keys()].forEach((tag: string) => {
        target[VCARD_FN] = `${tag}:${fnBuckets.get(tag)}`;
      });
    }

    if (target[VCARD_CATEGORIES]) {
      // de-dupe categories
      // need to partition by tag to account for attributes
      const categoryBuckets = target[VCARD_CATEGORIES].reduce((map: Map<string, Set<string>>, cat: Categories) => {
        const tag = cat.tag.toString();
        const tokens: Set<string> = (map.has(tag)) ? map.get(tag) as Set<string>
                                                   : new Set<string>();
        const uniqueTokens = new Set([...tokens,
                                      ...cat.tokens]);
        map.set(tag, uniqueTokens);
        return map;
      }, new Map<string, Set<string>>);

      delete target[VCARD_CATEGORIES];
      [...categoryBuckets.keys()].forEach((tag: string) => {
        // case-insensitive sort categories
        const cats = [...categoryBuckets.get(tag)].sort((a, b) => {
                                                    const _a = a.toLowerCase();
                                                    const _b = b.toLowerCase();
                                                    if (_a < _b) {
                                                      return -1;
                                                    }
                                                    if (_a > _b) {
                                                      return 1;
                                                    }
                                                    return 0;
                                                  })
                                                  .join(',');
        target[VCARD_CATEGORIES] = `${tag}:${cats}`;
      });
    }

    return target;
  }

}
