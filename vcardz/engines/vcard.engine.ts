import {
  Atom,
  Bag,
  ICard,
  vCard,
} from '../models';
import { Utility } from '../io/utility';
import { async } from 'rxjs/internal/scheduler/async';
import { vCardReader } from '../io';
import * as assert from 'assert';


export class vCardEngine {
  protected _inCard: boolean = false;

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
        scrubbed.splice(scrubbed.indexOf(buddy, 1));

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


  public vcardMatch(atom1: Atom, atom2: Atom): boolean {
    switch (atom1.tag.prop) {
      case 'FN':
        return atom1.value === atom2.value;

      default:
        return false;
    }
  }


  public vcardMerge(card1: vCard, card2: vCard): vCard {
    const result = vCard.create();

    const copy = (src: vCard) => {
      for (let prop in src) {
        if (src[prop] instanceof Array) {
          [...src[prop]].forEach(item => {
            if (!result[prop]) {
              result[prop] = item.toString();
              return;
            }

            let found = [...result[prop]].find(_item => {
              if (_item.hash === item.hash) {
                return true;
              }

              // values matched but tag is different
              if (_item.valueHash === item.valueHash) {
                // merge tag attribute maps
                const attrSet = [_item.tag.attr, item.tag.attr].filter(_attr => _attr && Object.keys(_attr).length > 0);
                const attrKeys = new Set([...attrSet.flatMap(_attr => Object.keys(_attr))]);

                const attributes = [...attrKeys].reduce((obj:any, key) => {
                  const vals = attrSet.flatMap(_attr => _attr[key]);
                  obj[key] = vals;
                  return obj;
                }, {});
                _item.tag.attr = attributes;
                return true;
              }

            });
            if (!found) {
              result[prop] = item.toString();
            }
          });

        } else {
          if (!result[prop]) {
            result[prop] = src[prop].toString();
          }

          if (result[prop].hash !== src[prop].hash) {
            result[prop] = src[prop].toString();
          }
        }
      }
    };

    copy(card1);
    copy(card2);

    return result;
  }

}
