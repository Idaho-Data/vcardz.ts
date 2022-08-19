export class VcardMergeData {
  public static phones = `
BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN;type=display:John Doe
TEL;type=WORK;type=pref:+1 617 555 1212
TEL;type=WORK:+1 (617) 555-1234
CATEGORIES:Work,Test group
END:VCARD

BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN;type=display:John Doe
TEL;type=CELL:+1 781 555 1212
TEL;type=HOME:+1 202 555 1212
CATEGORIES:Work,Test group
END:VCARD
`;

  public static phoneAttributes = `
BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN;type=display:John Doe
TEL;type=WORK:+1 617 555 1212
CATEGORIES:Work,Test group
END:VCARD

BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN;type=display:John Doe
TEL;type=pref:+1 617 555 1212
CATEGORIES:Work,Test group
END:VCARD
`;

}
