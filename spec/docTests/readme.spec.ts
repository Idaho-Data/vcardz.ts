import {
  vCard,
  vCardEngine,
} from '../../vcardz';


const JOHN_DOE_VCARD =
`BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN;type=display:John Doe
FN;type=abbreviation:J Doe
ORG:Example.com Inc.;
TITLE:Imaginary test person
EMAIL;type=INTERNET;type=WORK;type=pref:johnDoe@example.org
TEL;type=WORK;type=pref:+1 617 555 1212
TEL;type=WORK:+1 (617) 555-1234
TEL;type=CELL:+1 781 555 1212
TEL;type=HOME:+1 202 555 1212
CATEGORIES:Test group,Work
X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\\\:ABPerson
item1.ADR;type=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA
item1.X-ABADR:us
item2.ADR;type=HOME;type=pref:;;3 Acacia Avenue;Hoemtown;MA;02222;USA
item2.X-ABADR:us
NOTE:John Doe has a long and varied history\\, being documented on more police files that anyone else. Reports of his death are alas numerous.
item3.URL;type=pref:http\\://www.example.com/doe
item3.X-ABLabel:_$!<HomePage>!$_
item4.URL:http\\://www.example.com/Joe/foaf.df
item4.X-ABLabel:FOAF
item5.X-ABRELATEDNAMES;type=pref:Jane Doe
item5.X-ABLabel:_$!<Friend>!$_
END:VCARD`;

describe('readme examples', () => {
  it('parse example', () => {
    const engine = new vCardEngine(`${JOHN_DOE_VCARD}\n${JOHN_DOE_VCARD}`);
    const cards = [...engine.run()];
  });



});
