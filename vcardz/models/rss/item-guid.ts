export class ItemGuid {
  isPermaLink = false;
  '#text' = '';

  public get guid() {
    return this['#text'];
  }

}
