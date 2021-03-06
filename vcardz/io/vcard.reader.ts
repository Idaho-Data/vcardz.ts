import { Tag, vCard } from '../models';


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

    const card = vCard.create();
    fixed.forEach(line => {
      let tag = new Tag(line);
      if (!['BEGIN','END','VERSION'].includes(tag.prop)) {
        card[tag.prop] = line;
      }
    });

    return card;
  }

}