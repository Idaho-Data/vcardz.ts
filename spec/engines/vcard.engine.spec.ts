import { Utility } from '../../vcardz/io/utility';
import { vCardEngine } from '../../vcardz/engines';
import { TestData } from '../data/testdata';
import { vCard } from '../../vcardz/models';


describe('vCardEngine', () => {
  it('constructor test', () => {
    const parse = new vCardEngine('foobar');
    expect(parse.data).toEqual('foobar');
  });

  it('generator test', () => {
    const engine = new vCardEngine(TestData.johnDoe1);
    let result = engine.run().next().value;
    expect(result instanceof vCard).toEqual(true);
    // console.info(`${result}`);
  });

  it('card NOTE test', () => {
    const engine = new vCardEngine(TestData.johnDoe1);
    let result = engine.run().next().value;
    let card = result as vCard;
    expect(!!card.NOTE).toBe(true);
    expect(card.toString().indexOf('NOTE') !== -1).toBe(true);
  });
});