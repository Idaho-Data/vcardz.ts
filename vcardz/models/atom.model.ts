import { Tag } from './tag.model';
import { Utility } from '../io/utility';
const MurmurHash3 = require('imurmurhash');


/**
 * vCard field with a tag and a single string value
 * *e.g.* `FN=John Doe`
 *
 * @category models
 */
export class Atom {
  /**
   * @internal
   * @protected
   */
  protected _tag: Tag;
  /**
   * @internal
   * @protected
   */
  protected _value: string;


  /**
   * Creates a new `Atom` from a vCard field string.
   * @example
   * ```ts
   * let foo = new Atom('FN:John Doe');
   *
   * foo.tag.prop === 'FN'
   * foo.value === 'John Doe'
   * ```
   *
   * @param data - vCard / iCal field string
   */
  public constructor(data: string) {
    this._value = Utility.vcardValue(data);
    this._tag = new Tag(data);
  }


  /**
   * Returns a [MurmurHash3](https://github.com/jensyt/imurmurhash-js) value of the vCard field
   */
  public get hash(): number {
    return MurmurHash3(this.toString()).result()
  }


  /**
   * Returns a [MurmurHash3](https://github.com/jensyt/imurmurhash-js) value of the vCard field value
   */
  public get valueHash(): number {
    return MurmurHash3(this._value).result();
  }

  public get tag(): Tag {
    return this._tag;
  }

  public get value(): string {
    return (this._value) ?
           this._value :
           '';
  }

  public set value(val: string) {
    this._value = val;
  }


  /**
   * Returns the vCard field string
   *
   * @example
   * ```ts
   * let foo = atom.toString();
   *
   * foo === 'FN:John Doe'
   * ```
   */
  public toString(): string {
    return (this._tag) ?
           `${this._tag}:${Utility.escapeVcard(this._value)}` :
           '';
  }


  /**
   * Called by `JSON.stringify`
   */
  public toJSON(): object {
    return {value: this._value, tag: this._tag};
  }
}
