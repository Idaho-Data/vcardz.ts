import { Bag } from '../bag.model';


/**
 * A {@link Bag} that tokenizes on commas.
 *
 * @category models/properties
 */
export class Categories extends Bag {

  public constructor(data: string) {
    super(data);
    this._tokens = this._value.split(',');
  }


  public override toString(): string {
    return (this._tag) ?
           `${this._tag}:${this._tokens.join(',')}` :
           '';
  }

}
