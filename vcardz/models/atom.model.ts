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