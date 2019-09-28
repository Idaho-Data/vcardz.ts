import { from } from 'rxjs';
import { Utility } from '../io/utility';


export class Tag {
  protected _group: string = '';
  protected _prop: string = '';
  protected _attr: Map<string, Set<string>> = new Map<string, Set<string>>();


  public constructor(_data: string) {
    try {
      // negative look-behind assertion
      // only match ':' and not '\:'
      const tag = _data.split(Utility.vcardSplitRex)[0];
      const attrs = tag.split(';');

      this._prop = attrs.shift()!;
      const frags = this._prop.split('.');
      if (frags.length > 1) {
        this._group = frags[0];
        this._prop = frags[1].toUpperCase();
      } else {
        this._prop = this._prop.toUpperCase();
      }

      if (!attrs) {
        return;
      }
      attrs.forEach(token => {
        const [type, val] = token.split('=');
        let key = type.toUpperCase();
        if (this._attr.has(key)) {
          let newSet = new Set(val.split(','));
          let oldSet = this._attr.get(key)!;
          let set = new Set([...oldSet, ...newSet]);
          this._attr.set(key, set);
        } else {
          this._attr.set(key, new Set(val.split(',')));
        }
      });

    } catch (ex) {
      this._prop = '';
      this._attr = new Map();
      return;
    }
  }

  public get group(): string {
    return this._group;
  }

  public get property(): string {
    return this._prop;
  }

  public get attributes(): object {
    return Array.from(this._attr.keys())
                .map(key => {
                  return {[key]: [...this._attr.get(key)!]};
                })
                .reduce((accum: any, curr: any) => {
                  Object.keys(curr)
                        .forEach(key => {
                          accum[key] = curr[key];
                        });
                  return accum;
                });
  }


  public toString(): string {
    if (!this._prop) {
      return '';
    }

    let getprop = () => {
      let t = this._prop;
      if (this.group) {
        t = `${this._group}.${t}`;
      }
      return t;
    };

    if (!this._attr) {
      return getprop();
    }

    const attributes = Array.from(this._attr.keys())
                            .map(key => {
                              const set = this._attr.get(key)!;
                              const vals = [...set].join(',');
                              return `;${key}=${vals}`;
                            })
                            .join(',');
    return `${getprop()}${attributes}`;
  }


}


//import re
//
//from itertools import chain
//
//
//class Tag:
//    _prop = None
//    _attr = None
//
//    def __init__(self, data):
//        try:
//            _tag = re.split(r'(?<!\\):', data)[0]
//            attrs = _tag.split(';')
//            self._prop = attrs.pop(0)
//            frags = self._prop.split('.')
//            if 1 < len(frags):
//                self._prop = frags[1]
//                self._prop = self._prop.upper()
//
//            if None != attrs:
//                self._attr = {}
//                for token in attrs:
//                    (type, val) = token.split('=')
//                    key = type.upper()
//                    try:
//                        self._attr[key] = self._attr[type.upper()] | \
//                            set([x.lower() for x in val.split(',')])
//                    except:
//                        self._attr[key] = set([x.lower()
//                                               for x in val.split(',')])
//
//        except IndexError:
//            return
//
//
//    @property
//    def types(self):
//        return list(chain.from_iterable([self._attr[x] for x in self._attr]))
//
//
//    def __getitem__(self, key):
//        try:
//            return self._attr[key.upper()]
//        except:
//            return []
//
//
//    def __str__(self):
//        if None == self._prop:
//            return ""
//        else:
//            return self._prop
//
//
//    def __repr__(self):
//        if None == self._prop:
//            return ""
//        else:
//            if None == self._attr:
//                return self._prop
//            else:
//                temp = ""
//                for key in self._attr:
//                    if 0 == len(self._attr[key]):
//                        continue
//                    temp += ";%s=%s" % (key, ','.join(self._attr[key]))
//                return self._prop + temp
