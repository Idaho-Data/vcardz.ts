import { Atom } from './atom.model';
import {
  Address,
  Email,
  FormattedName,
  Name,
  Note,
  Organization,
  Phone,
  Title,
} from './properties';


export class vCard {
  public ADR: Set<Address> = new Set<Address>();
  public EMAIL: Set<Email> = new Set<Email>();
  public FN?: FormattedName;
  public N?: Name;
  public NOTE?: Note;
  public ORG?: Organization;
  public TEL: Set<Phone> = new Set<Phone>();
  public TITLE?: Title;

  protected writeOrder = ['FN',
                          'N',
                          'TITLE',
                          'ORG',
                          'TEL',
                          'EMAIL',
                          'ADR',
                          'NOTE'];

  public constructor() {}

  public toString() {
    let data = [] as string[];
    data.push('BEGIN:VCARD');
    data.push('VERSION:3.0');

    this.writeOrder
        .forEach(key => {
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

  // public toJson() {
  //   let data = {};
  //   this.writeOrder
  //       .forEach(key => {
  //         let temp = Reflect.get(this, key);
  //         if (temp instanceof Set) {
  //           data = data.concat(Array.from(temp as Set<string>)
  //                                   .map(x => x.toString()));
  //         } else {
  //           data.push(temp.toString());
  //         }
  //       });
  //   data.push('END:VCARD\n');
  //   return data.join('\n');
  // }

}