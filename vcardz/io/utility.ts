export class Utility
{
  public static vcardBegin = /^BEGIN:VCARD/;
  public static vcardEnd = /END:VCARD$/;
  public static numbersOnly = /[^0-9]/;
  public static phoneNumbers = /\+?1? *\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})(?:[,x ]*)([0-9]*)/;

  // negative look-behind assertion
  // only match ':' and not '\:'
  public static vcardSplitRex = /(?<!\\):/;

  public static unescapeVcard(data: string): string {
    return data.replace('\\,', ',')
               .replace('\\;', ';')
               .replace('\\:', ':');
  }

  public static escapeVcard(data: string): string {
    return data.replace(',', '\\,')
               .replace(';', '\\;')
               .replace(':', '\\:');
  }

  public static rawValue(data: string): string {
    return data.split(Utility.vcardSplitRex)
               .slice(1)
               .join(':');
  }

  public static vcardValue(data: string): string {
    return Utility.unescapeVcard(Utility.rawValue(data));
  }

  public static isBag(data: string): boolean {
    let value = Utility.rawValue(data);
    let rex = /(?<!\\);/;
    return (rex.test(value));
  }

}