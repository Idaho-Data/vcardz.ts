import { Bag } from '../bag.model';


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
