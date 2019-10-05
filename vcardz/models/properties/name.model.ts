import { Bag } from '../bag.model';


export class Name extends Bag {
  public last: string;
  public first: string;
  public middle: string;
  public prefix: string;
  public suffix: string;

  public constructor(data: string) {
    super(data);
    this.last = this._tokens[0];
    this.first = this._tokens[1];
    this.middle = this._tokens[2];
    this.prefix = this._tokens[3];
    this.suffix = this._tokens[4];
  }

  public toJSON(): object {
    return Object.assign(super.toJSON(),
                         {
                           last: this.last,
                           first: this.first,
                           middle: this.middle,
                           prefix: this.prefix,
                           suffix: this.suffix
                         });
  }

}