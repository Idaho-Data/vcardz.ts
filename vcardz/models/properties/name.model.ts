import { Bag } from '../bag.model';


export class Name extends Bag {
  private _last: string;
  private _first: string;
  private _middle: string;
  private _prefix: string;
  private _suffix: string;

  public constructor(data: string) {
    super(data);
    this._last = this._tokens[0];
    this._first = this._tokens[1];
    this._middle = this._tokens[2];
    this._prefix = this._tokens[3];
    this._suffix = this._tokens[4];
  }


  protected resetName() {
    const data = [this._last,
                  this._first,
                  this._middle,
                  this._prefix,
                  this._suffix].join(';');
    this._value = data;
    this._tokens = data.split(';');
  }



  get last(): string {
    return this._last;
  }


  get first(): string {
    return this._first;
  }


  get middle(): string {
    return this._middle;
  }


  get prefix(): string {
    return this._prefix;
  }


  get suffix(): string {
    return this._suffix;
  }


  set last(value: string) {
    this._last = value;
    this.resetName();
  }


  set first(value: string) {
    this._first = value;
    this.resetName();
  }


  set middle(value: string) {
    this._middle = value;
    this.resetName();
  }


  set prefix(value: string) {
    this._prefix = value;
    this.resetName();
  }


  set suffix(value: string) {
    this._suffix = value;
    this.resetName();
  }


  public override toJSON(): object {
    return Object.assign(super.toJSON(),
                         {
                           last: this._last,
                           first: this._first,
                           middle: this._middle,
                           prefix: this._prefix,
                           suffix: this._suffix
                         });
  }

}
