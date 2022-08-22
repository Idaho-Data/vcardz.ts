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


/**
 * `vCard` represents an individual or entity defined by the [vCard Format Specification](https://www.rfc-editor.org/rfc/rfc6350.html).
 *
 * @category models
 */
export class vCard implements ICard {
  /**
   * Dynamic property definition satisfies {@link ICard}.
   */
  [key: string]: any;


  /**
   * Satisfies {@link ICard}.
   */
  public create(): vCard {
    return vCard.create();
  }


  /**
   * Create a `vCard` instance using {@link vCardProxy} which handles all the dynamic property goodness.
   *
   * @return new `vCard` instance
   */
  public static create(): vCard {
    return new Proxy( new vCard(), vCardProxy.handler);
  }


  /**
   * Gets the list of groups defined in field tags.
   *
   * @returns
   * @example
   * ```ts
   * let foo = card.groups;
   * ```
   *
   * output:
   * ```ts
   * ['item1', 'item2', 'item3', 'item4', 'item5']
   * ```
   */
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


  /**
   * Get a formatted vCard
   *
   * @returns
   * @example
   * ```ts
   * card.toString();
   * console.log(`${card}`);
   * ```
   *
   * output:
   * ```text
   * BEGIN:VCARD
   * VERSION:4.0
   * FN;TYPE=display:John Doe
   * FN;TYPE=abbreviation:J Doe
   * N:Doe;John;;;
   * ORG:Example.com Inc.;
   * TITLE:Imaginary test person
   * EMAIL;TYPE=INTERNET,WORK,pref:johnDoe@example.org
   * TEL;TYPE=WORK,pref:617-555-1212
   * TEL;TYPE=WORK:617-555-1234
   * TEL;TYPE=CELL:781-555-1212
   * TEL;TYPE=HOME:202-555-1212
   * CATEGORIES:Test group,Work
   * X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\:ABPerson
   * NOTE:John Doe has a long and varied history\, being documented on more police files that anyone else. Reports of his death are alas numerous.
   * item1.ADR;TYPE=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA
   * item1.X-ABADR:us
   * item2.ADR;TYPE=HOME,pref:;;3 Acacia Avenue;Hoemtown;MA;02222;USA
   * item2.X-ABADR:us
   * item3.URL;TYPE=pref:http\://www.example.com/doe
   * item3.X-ABLABEL:_$!<HomePage>!$_
   * item4.URL:http\://www.example.com/Joe/foaf.df
   * item4.X-ABLABEL:FOAF
   * item5.X-ABLABEL:_$!<Friend>!$_
   * item5.X-ABRELATEDNAMES;TYPE=pref:Jane Doe
   * END:VCARD
   * ```
   */
  public toString(): string {
    let data = [] as string[];
    let groups = new Map<string, string[]>();
    const writeProp = (key: string) => {
      if (!this[key]) {
        return;
      }
      this[key].forEach((x: Atom|Bag) => {
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

    // combine payload and groups
    let card = ['BEGIN:VCARD',
                'VERSION:4.0'];
    card = [...card, ...data];
    Array.from(groups.values())
         .forEach(array => card = [...card, ...array]);
    card.push('END:VCARD');
    return card.join('\n');
  }


  /**
   * Returns a card in JSON format
   *
   * @returns
   * @example
   * ```ts
   * card.toJson();
   * ```
   * output:
   * ```json
   * {
   *   "N": [
   *     {
   *       "tag": {
   *         "prop": "N",
   *         "group": "",
   *         "attr": {}
   *       },
   *       "value": "Doe;John;;;",
   *       "tokens": [
   *         "Doe",
   *         "John",
   *         "",
   *         "",
   *         ""
   *       ],
   *       "last": "Doe",
   *       "first": "John",
   *       "middle": "",
   *       "prefix": "",
   *       "suffix": ""
   *     }
   *   ],
   *   "FN": [
   *     {
   *       "value": "John Doe",
   *       "tag": {
   *         "prop": "FN",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "display"
   *           ]
   *         }
   *       }
   *     },
   *     {
   *       "value": "J Doe",
   *       "tag": {
   *         "prop": "FN",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "abbreviation"
   *           ]
   *         }
   *       }
   *     }
   *   ],
   *   "ORG": [
   *     {
   *       "tag": {
   *         "prop": "ORG",
   *         "group": "",
   *         "attr": {}
   *       },
   *       "value": "Example.com Inc.;",
   *       "tokens": [
   *         "Example.com Inc.",
   *         ""
   *       ]
   *     }
   *   ],
   *   "TITLE": [
   *     {
   *       "value": "Imaginary test person",
   *       "tag": {
   *         "prop": "TITLE",
   *         "group": "",
   *         "attr": {}
   *       }
   *     }
   *   ],
   *   "EMAIL": [
   *     {
   *       "value": "johnDoe@example.org",
   *       "tag": {
   *         "prop": "EMAIL",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "INTERNET",
   *             "WORK",
   *             "pref"
   *           ]
   *         }
   *       }
   *     }
   *   ],
   *   "TEL": [
   *     {
   *       "value": "617-555-1212",
   *       "tag": {
   *         "prop": "TEL",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "WORK",
   *             "pref"
   *           ]
   *         }
   *       }
   *     },
   *     {
   *       "value": "617-555-1234",
   *       "tag": {
   *         "prop": "TEL",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "WORK"
   *           ]
   *         }
   *       }
   *     },
   *     {
   *       "value": "781-555-1212",
   *       "tag": {
   *         "prop": "TEL",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "CELL"
   *           ]
   *         }
   *       }
   *     },
   *     {
   *       "value": "202-555-1212",
   *       "tag": {
   *         "prop": "TEL",
   *         "group": "",
   *         "attr": {
   *           "TYPE": [
   *             "HOME"
   *           ]
   *         }
   *       }
   *     }
   *   ],
   *   "CATEGORIES": [
   *     {
   *       "tag": {
   *         "prop": "CATEGORIES",
   *         "group": "",
   *         "attr": {}
   *       },
   *       "value": "Test group,Work",
   *       "tokens": [
   *         "Test group",
   *         "Work"
   *       ]
   *     }
   *   ],
   *   "X-ABUID": [
   *     {
   *       "value": "5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\\\:ABPerson",
   *       "tag": {
   *         "prop": "X-ABUID",
   *         "group": "",
   *         "attr": {}
   *       }
   *     }
   *   ],
   *   "ADR": [
   *     {
   *       "tag": {
   *         "prop": "ADR",
   *         "group": "item1",
   *         "attr": {
   *           "TYPE": [
   *             "WORK"
   *           ]
   *         }
   *       },
   *       "value": ";;2 Enterprise Avenue;Worktown;NY;01111;USA",
   *       "tokens": [
   *         "",
   *         "",
   *         "2 Enterprise Avenue",
   *         "Worktown",
   *         "NY",
   *         "01111",
   *         "USA"
   *       ],
   *       "poBox": "",
   *       "extended": "",
   *       "street": "2 Enterprise Avenue",
   *       "city": "Worktown",
   *       "region": "NY",
   *       "postalCode": "01111",
   *       "country": "USA"
   *     },
   *     {
   *       "tag": {
   *         "prop": "ADR",
   *         "group": "item2",
   *         "attr": {
   *           "TYPE": [
   *             "HOME",
   *             "pref"
   *           ]
   *         }
   *       },
   *       "value": ";;3 Acacia Avenue;Hoemtown;MA;02222;USA",
   *       "tokens": [
   *         "",
   *         "",
   *         "3 Acacia Avenue",
   *         "Hoemtown",
   *         "MA",
   *         "02222",
   *         "USA"
   *       ],
   *       "poBox": "",
   *       "extended": "",
   *       "street": "3 Acacia Avenue",
   *       "city": "Hoemtown",
   *       "region": "MA",
   *       "postalCode": "02222",
   *       "country": "USA"
   *     }
   *   ],
   *   "X-ABADR": [
   *     {
   *       "value": "us",
   *       "tag": {
   *         "prop": "X-ABADR",
   *         "group": "item1",
   *         "attr": {}
   *       }
   *     },
   *     {
   *       "value": "us",
   *       "tag": {
   *         "prop": "X-ABADR",
   *         "group": "item2",
   *         "attr": {}
   *       }
   *     }
   *   ],
   *   "NOTE": [
   *     {
   *       "value": "John Doe has a long and varied history, being documented on more police files that anyone else. Reports of his death are alas numerous.",
   *       "tag": {
   *         "prop": "NOTE",
   *         "group": "",
   *         "attr": {}
   *       }
   *     }
   *   ],
   *   "URL": [
   *     {
   *       "value": "http://www.example.com/doe",
   *       "tag": {
   *         "prop": "URL",
   *         "group": "item3",
   *         "attr": {
   *           "TYPE": [
   *             "pref"
   *           ]
   *         }
   *       }
   *     },
   *     {
   *       "value": "http://www.example.com/Joe/foaf.df",
   *       "tag": {
   *         "prop": "URL",
   *         "group": "item4",
   *         "attr": {}
   *       }
   *     }
   *   ],
   *   "X-ABLABEL": [
   *     {
   *       "value": "_$!<HomePage>!$_",
   *       "tag": {
   *         "prop": "X-ABLABEL",
   *         "group": "item3",
   *         "attr": {}
   *       }
   *     },
   *     {
   *       "value": "FOAF",
   *       "tag": {
   *         "prop": "X-ABLABEL",
   *         "group": "item4",
   *         "attr": {}
   *       }
   *     },
   *     {
   *       "value": "_$!<Friend>!$_",
   *       "tag": {
   *         "prop": "X-ABLABEL",
   *         "group": "item5",
   *         "attr": {}
   *       }
   *     }
   *   ],
   *   "X-ABRELATEDNAMES": [
   *     {
   *       "value": "Jane Doe",
   *       "tag": {
   *         "prop": "X-ABRELATEDNAMES",
   *         "group": "item5",
   *         "attr": {
   *           "TYPE": [
   *             "pref"
   *           ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   */
  public toJson(): string {
    return JSON.stringify(this, null, 2);
  }


  /***
   * Create a `vCard` object from JSON.
   *
   * @param json - represents an object defining vCard fields, tags, and values
   *
   * @returns
   * a `vCard` object if `json` is valid; otherwise `undefined`
   *
   * @example
   * ```ts
   * const card = vCard.fromJson(json);
   * ```
   */
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
      obj[VCARD_N].forEach(pushField);
      Object.keys(obj)
            .filter(key => !(/^FN$|^N$/.test(key)))
            .forEach(key => obj[key].forEach(pushField));
      return vCardReader.fromString(buffer);

    } catch (ex) {
      console.error(ex);
      return undefined;
    }


  }

}
