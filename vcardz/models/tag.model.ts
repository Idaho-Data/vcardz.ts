import { from } from 'rxjs';
import { Utility } from '../io/utility';


export class Tag {
  protected prop: string;
  protected attr: Map<string, Set<string>>;

  public constructor(data: string) {
    try {
      // negative look-behind assertion
      // only match ':' and not '\:'
      const tag = data.split(Utility.vcardSplitRex)[0];
      const attrs = tag.split(';');

      this.prop = attrs.shift()!;
      const frags = this.prop.split('.');
      if (frags.length > 1) {
        this.prop = frags[1];
      }

      this.attr = new Map();
      if (!attrs) {
        return;
      }
      attrs.forEach(token => {
        const [type, val] = token.split('=');
        const key = type.toUpperCase();
        this.attr.set(key, new Set(val.split(',')));

      });

    } catch (ex) {
      this.prop = '';
      this.attr = new Map();
      return;
    }
  }


  public get property(): string {
    return this.prop.toUpperCase();
  }


  public get types(): string[] {
    return Array.from(this.attr.values())
                .flatMap(set => {
                  return [...set];
                });
  }


  public toString(): string {
    if (!this.prop) {
      return '';
    }

    if (!this.attr) {
      return this.property;
    }

    const attributes = Array.from(this.attr.keys())
                            .map(key => {
                              const set = this.attr.get(key)!;
                              const vals = [...set].join(',');
                              return `;${key}=${vals}`;
                            })
                            .join(',');
    return `${this.property}${attributes}`;
  }


}



//import re
//
//from itertools import chain
//
//
//class Tag:
//    prop = None
//    attr = None
//
//    def __init__(self, data):
//        try:
//            _tag = re.split(r'(?<!\\):', data)[0]
//            attrs = _tag.split(';')
//            self.prop = attrs.pop(0)
//            frags = self.prop.split('.')
//            if 1 < len(frags):
//                self.prop = frags[1]
//                self.prop = self.prop.upper()
//
//            if None != attrs:
//                self.attr = {}
//                for token in attrs:
//                    (type, val) = token.split('=')
//                    key = type.upper()
//                    try:
//                        self.attr[key] = self.attr[type.upper()] | \
//                            set([x.lower() for x in val.split(',')])
//                    except:
//                        self.attr[key] = set([x.lower()
//                                               for x in val.split(',')])
//
//        except IndexError:
//            return
//
//
//    @property
//    def types(self):
//        return list(chain.from_iterable([self.attr[x] for x in self.attr]))
//
//
//    def __getitem__(self, key):
//        try:
//            return self.attr[key.upper()]
//        except:
//            return []
//
//
//    def __str__(self):
//        if None == self.prop:
//            return ""
//        else:
//            return self.prop
//
//
//    def __repr__(self):
//        if None == self.prop:
//            return ""
//        else:
//            if None == self.attr:
//                return self.prop
//            else:
//                temp = ""
//                for key in self.attr:
//                    if 0 == len(self.attr[key]):
//                        continue
//                    temp += ";%s=%s" % (key, ','.join(self.attr[key]))
//                return self.prop + temp
