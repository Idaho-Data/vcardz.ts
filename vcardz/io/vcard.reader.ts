import { Tag, vCard } from '../models';
import {
  Address,
  Email,
  FormattedName,
  Name,
  Note,
  Organization,
  Phone,
  Title,
} from '../models/properties';


export class vCardReader {
  public static fromString(payload: string[]): vCard {
    // fix multi-line values
    let fixed = [] as string[];
    payload.forEach(line => {
      if (line.split(':').length === 1) {
        let prev = fixed.pop() || '';
        prev += line.substr(1).trimRight();
        fixed.push(prev);
      } else {
        fixed.push(line.trim());
      }
    });

    const card = new vCard();
    fixed.forEach(line => {
      let tag = new Tag(line);
      switch (tag.property) {
        case 'FN':
          card.FN = new FormattedName(line);
          break;

        case 'N':
          card.N = new Name(line);
          break;

        case 'EMAIL':
          card.EMAIL.add(new Email(line));
          break;

        case 'TEL':
          card.TEL.add(new Phone(line));
          break;

        case 'ADR':
          card.ADR.add(new Address(line));
          break;

        case 'ORG':
          card.ORG = new Organization(line);
          break;

        case 'TITLE':
          card.TITLE = new Title(line);
          break;

        case 'NOTE':
          card.NOTE = new Note(line);
          break;
      }
    });

    return card;
  }

}