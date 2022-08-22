import { Tag } from './tag.model';
import { Utility } from '../io/utility';
const MurmurHash3 = require('imurmurhash');


/**
 * vCard field with a tag and multiple string values
 * *e.g.* `N:Doe;John;;;`
 *
 * @category models
 */
export class Bag {
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
   * @internal
   * @protected
   */
  protected _tokens: string[];


  /**
   * Creates a new `Bag` from a vCard field string.
   * @example
   * ```ts
   * let foo = new Bag('N:Doe;John;;;');
   *
   * foo.tag.prop === 'N'
   * foo.value === 'Doe;John;;;';
   * foo.tokens === ['Doe', 'John', '', '', '']
   * ```
   * @param data - vCard / iCal field string
   */
  public constructor(data: string) {
    this._tag = new Tag(data);
    this._value = Utility.rawValue(data);
    this._tokens = this._value.split(';');
  }


  /**
   * Returns a [MurmurHash3](https://github.com/jensyt/imurmurhash-js) value of the vCard field
   */
  public get hash(): number {
    return MurmurHash3(this.toString()).result();
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
    return this._value;
  }

  public get tokens(): string[] {
    return this._tokens;
  }

  /**
   * Returns the vCard field string
   *
   * @example
   * ```ts
   * let foo = bag.toString();
   *
   * foo === 'N:Doe;John;;;'
   * ```
   */
  public toString(): string {
    return (this._tag) ?
           `${this._tag}:${this._tokens.join(';')}` :
           '';
  }


  /**
   * Called by `JSON.stringify`
   */
  public toJSON(): object {
    return {
      tag: this._tag,
      value: this._value,
      tokens: this._tokens
    };
  }

}
