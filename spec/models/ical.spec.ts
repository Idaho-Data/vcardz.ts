import { iCal } from '../../vcardz/models';


describe('iCal', () => {
  it('sanity check', () => {
    let card = iCal.create();
    console.info(card.toString());
    // card['FN'] = 'FN:John Doe';
    // expect(card['FN'][0].value).toEqual('John Doe');
  });
}