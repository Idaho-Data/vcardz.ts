import { Tag } from './tag.model';
import { Utility } from '../io/utility';
const MurmurHash3 = require('imurmurhash');

// vCard field with a single string _value
export class Atom {
  protected _tag: Tag;
  protected _value: string;
  protected _hash: number;
  protected _valueHash: number;

  public constructor(data: string) {
    this._value = Utility.vcardValue(data);
    this._tag = new Tag(data);
    this._hash = MurmurHash3(this.toString()).result();
    this._valueHash = MurmurHash3(this._value).result();
  }

  public get hash(): number {
    return this._hash;
  }

  public get valueHash(): number {
    return this._valueHash;
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

  public toString(): string {
    return (this._tag) ?
           `${this._tag}:${Utility.escapeVcard(this._value)}` :
           '';
  }

  public toJSON(): object {
    return {value: this._value, tag: this._tag};
  }
}
