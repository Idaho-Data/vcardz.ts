import { Tag } from './tag.model';
import { Utility } from '../io/utility';

// vCard field with a single string _value
export class Atom {
  protected _tag: Tag;
  protected _value: string;

  public constructor(data: string) {
    this._value = Utility.vcardValue(data);
    this._tag = new Tag(data);
  }

  public get tag(): Tag {
    return this._tag;
  }

  public get value(): string {
    return (this._value) ?
           this._value :
           '';
  }

  public toString(): string {
    return (this._tag) ?
           `${this._tag}:${Utility.escapeVcard(this._value)}` :
           '';
  }

  // public toJson(): object {
  //   // return {[this._tag.property]: {value: this._value,}
  //   //   this._value};
  // }
}