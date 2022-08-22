import { Bag } from '../bag.model';


/**
 * `Address` has helper properties for the individual address components.
 * ```ts
 * let foo = new Address('item1.ADR;TYPE=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA');
 *
 * foo.street === '2 Enterprise Avenue`
 * foo.city === 'Worktown'
 * foo.region === 'NY'
 * foo.postalCode === '01111'
 * foo.country === 'USA'
 * ```
 *
 * @category models/properties
 */
export class Address extends Bag {
  public poBox: string; // PO Box 888
  public extended: string; // Suite 44
  public street: string; // 123 Main
  public city: string; // Boise
  public region: string; // Idaho
  public postalCode: string; // 83704
  public country: string; // USA

  public constructor(data: string) {
    super(data);
    this.poBox = this._tokens[0];
    this.extended = this._tokens[1];
    this.street = this._tokens[2];
    this.city = this._tokens[3];
    this.region = this._tokens[4];
    this.postalCode = this._tokens[5];
    this.country = this._tokens[6];
  }


  public override toJSON(): object {
    return Object.assign(super.toJSON(),
                         {
                           poBox: this.poBox,
                           extended: this.extended,
                           street: this.street,
                           city: this.city,
                           region: this.region,
                           postalCode: this.postalCode,
                           country: this.country
                         });
  }

}
