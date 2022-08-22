# vCardz
vCard processing that doesn't make your head hurt.

```typescript
import { vCardEngine } from 'vcardz';

const payload = `
BEGIN:VCARD
VERSION:4.0
FN:Hello World
END:VCARD
`;
const engine = new vCardEngine(vcard_data);
const deck = [...engine.run()];
const card = deck[0];
console.log(`${card['FN'][0].value}`);
```
*vCardz hello world*

## Features
* [RFC-6350](https://www.rfc-editor.org/rfc/rfc6350.html) compliant.
* Parse vCards into typed `vCard` objects.
* Output vCards from `vCard` objects.
* Parse vCards into JSON.
* Build vCards from JSON.
* Modify or create vCards programmatically using a simple API.
* Fast vCard deduplication based on the [Swoosh entity resolution algorithm](http://infolab.stanford.edu/serf/swoosh_vldbj.pdf). 

## Installation
```sh
npm install vcardz --save
```

```shell
yarn add vcardz
```

## Quick Reference
Full reference available at [https://idaho-data.github.io/vcardz.ts/](https://idaho-data.github.io/vcardz.ts/)

Here's our `johnDoe` example vCard.
```typescript
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
```

### Reading

Read a single vCard:
```typescript
const engine = new vCardEngine(JOHN_DOE_VCARD);
const card = engine.run().next().value;
```

Quickly read multiple vCards into an array:
```typescript
const engine = new vCardEngine(`${JOHN_DOE_VCARD}\n${JOHN_DOE_VCARD}`);
const cards = [...engine.run()];
assert(cards.length === 2);
```

Read JSON data: *use output from `card.toJson()` as input*
```typescript
const card = vCard.fromJson(...);
```

### Writing
Write vCard data:
```typescript
// both are equivalent
console.log(card.toString());
console.log(`${card}`);
```

Write JSON data:
```typescript
console.log(card.toJson());
```


### Fields
Access vCard fields using the same structure:
```typescript
card['FN'][0].value === 'John Doe'
card['FN'][1].value === 'J Doe'
card['TITLE'][0].value === 'Imaginary test person';
```
note: `vCard` properties always return an `array`

#### `ADR` field
vCard's `ADR` field stores address components; the `Address` object provides additional helper properties:
```typescript
card['ADR'][0].street === `2 Enterprise Avenue`
card['ADR'][0].city === 'Worktown'
card['ADR'][0].region === 'NY'
card['ADR'][0].postalCode === '011111'
card['ADR'][0].country === 'USA'
```

#### `N` field
vCard's `N` field stores name components; the `Name` object provides additional helper properties: 
```typescript
card['N'][0].first === 'John'
card['N'][0].last === 'Doe'
```

#### `TEL` field
the `Phone` object formats North American telephone numbers:
```typescript
card['TEL'][0].value === '617-555-1212'
```


### Tags
vCard tags, *e.g.* `FN;TYPE=display`, may contain attributes:
```typescript
card['FN'][0].tag.attr === [{TYPE: ['display']}]
```

or a group, *e.g.* `item1.ADR;TYPE=WORK`
```typescript
card['ADR'][0].tag.group === 'item1'
```

### Deduplication
Deduplicates contacts using the following fields:
* `FN` - full name
* `N` - name components
* `TEL` - phone number
* `EMAIL` - email

`vCardEngine.fscrub` is customized using callbacks for:
* features - what `vCard` properties are used for matching
* matches - how `vCard` features are compared
* merging - how two matching `vCards` are combined

```typescript
const payload = readFileSync('/path/to/duplicate-contacts.vcf', 'utf-8');
const engine = new vCardEngine(payload);
const scrubbed = engine.fscrub(engine.vcardFeatures.bind(engine),
                               engine.vcardMatch.bind(engine),
                               engine.vcardMerge.bind(engine));
```

