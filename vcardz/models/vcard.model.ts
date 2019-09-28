import { Atom } from './atom.model';
import { Email, FormattedName, Name, Phone } from './properties';


export class vCard {
  // non-null assertion operator
  public FN!: FormattedName;
  public N!: Name;
  public TEL!: Set<Phone>;
  public EMAIL!: Set<Email>;

  public constructor() {
    this.TEL = new Set<Phone>();
    this.EMAIL = new Set<Email>();
  }

  public toString() {
    let data = [] as string[];
    data.push('BEGIN:VCARD');
    data.push('VERSION:3.0');
    if (this.FN) {
      data.push(this.FN.toString());
    }
    if (this.N) {
      data.push(this.N.toString());
    }
    Object.keys(this)
          .forEach(key => {
            if (key.match(/fn|n/i)) {
              return;
            }

            let temp = Reflect.get(this, key);
            if (temp instanceof Set) {
              data = data.concat(Array.from(temp as Set<string>)
                                      .map(x => x.toString()));
            } else {
              data.push(temp.toString());
            }
          });
    data.push('END:VCARD\n');
    return data.join('\n');
  }

}