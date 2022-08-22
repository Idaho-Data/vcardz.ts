import { Tag, vCard } from '../models';


/**
 * Creates a {@link vCard} from an array of strings, each item corresponding to a vCard field string.
 *
 * @example
 * ```ts
 * let input = ['BEGIN:VCARD:',
 *              'VERSION:4.0',
 *              'FN:John Doe',
 *              'END:VCARD'
 *              ];
 * let vcard = vCardReader.fromString(input);
 * ```
 *
 * @category io
 */
export class vCardReader {

  /**
   * This is probably improperly named but we're sticking with it.
   * @param payload
   */
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
