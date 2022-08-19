import {
  vCard,
  vCardEngine,
} from '../../vcardz';
import { TestData } from '../data/testdata';
import { VcardMergeData } from '../data/vcard-merge-data';


describe('vCardEngine merge suite', () => {

  it('vCard merge w/ self', () => {
    let engine = new vCardEngine(TestData.johnDoe1);
    const card1 = engine.run().next().value as vCard;

    engine = new vCardEngine(TestData.johnDoe1);
    const card2 = engine.run().next().value as vCard;

    const card3 = engine.vcardMerge(card1, card2);
    expect(card1.toString()).toEqual(card3.toString());
  });

  it('vCard merge - 4 phone numbers', () => {
    const engine = new vCardEngine(VcardMergeData.phones);
    let run = engine.run();
    const card1 = run.next().value as vCard;
    const card2 = run.next().value as vCard;

    const card3 = engine.vcardMerge(card1, card2);
    expect(card3['TEL'].length).toEqual(4);
  });

  it('vCard merge - tag attributes', () => {
    const engine = new vCardEngine(VcardMergeData.phoneAttributes);
    let run = engine.run();
    const card1 = run.next().value as vCard;
    const card2 = run.next().value as vCard;

    const card3 = engine.vcardMerge(card1, card2);
    expect(card3['TEL'].length).toEqual(1);
  });

});
