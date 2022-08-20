import { Tag } from './tag.model';
import { Utility } from '../io/utility';
const MurmurHash3 = require('imurmurhash');

export class Bag {
  protected _tag: Tag;
  protected _value: string;
  protected _tokens: string[];
  protected _hash: number;
  protected _valueHash: number;

  public constructor(data: string) {
    this._tag = new Tag(data);
    this._value = Utility.rawValue(data);
    this._tokens = this._value.split(';');
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
    return this._value;
  }

  public get tokens(): string[] {
    return this._tokens;
  }


  public toString(): string {
    return (this._tag) ?
           `${this._tag}:${this._tokens.join(';')}` :
           '';
  }


  public toJSON(): object {
    return {
      tag: this._tag,
      value: this._value,
      tokens: this._tokens
    };
  }

}
