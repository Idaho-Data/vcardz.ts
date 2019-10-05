import {
  Atom,
  vCard,
} from '../../vcardz/models';
import {
  Name,
  Phone,
} from '../../vcardz/models/properties';


describe('vCard', () => {
  it('sanity check', () => {
    let card = vCard.create();
    card['FN'] = 'FN:John Doe';
    expect(card['FN'][0].value).toEqual('John Doe');
  });

  it('tag.attr test', () => {
    let card = vCard.create();
    card['TEL'] = 'TEL;TYPE=CELL,PRIMARY:(404) 555-1234';
    expect(card['TEL'][0].value).toEqual('404-555-1234');
    expect(card['TEL'][0].tag.attr['TYPE']).toEqual(['CELL', 'PRIMARY']);
  });

  it('Name test', () => {
    let card = vCard.create();
    card['N'] = 'N:Doe;John;;;';
    expect(card['N'].last).toEqual('Doe');
    expect(card['N'].first).toEqual('John');
  });

  it('group test', () => {
    let card = vCard.create();
    card['TEL'] = 'item1.TEL;TYPE=CELL,PRIMARY:(404) 555-1234';
    card['X-ABADR'] = 'item1.X-ABADR:us';
    card['X-ABADR'] = 'item2.X-ABADR:us';
    expect(card.groups).toEqual(['item1', 'item2']);

    let card2 = vCard.create();
    expect(card2.groups).toEqual([]);
  });


});