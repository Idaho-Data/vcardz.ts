export class ItemCategory {
  category = '';
  domain = '';

  public set '#text'(value: string) {
    this.category = value;
  }
}
