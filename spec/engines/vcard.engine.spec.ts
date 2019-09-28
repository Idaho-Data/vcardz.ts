import { Utility } from '../../vcardz/io/utility';
import { vCardEngine } from '../../vcardz/engines';
import { TestData } from '../data/testdata';


describe('vCardEngine', () => {
  it('constructor test', () => {
    const parse = new vCardEngine('foobar');
    expect(parse.data).toEqual('foobar');
  });

  it('generator test', () => {
    const engine = new vCardEngine(TestData.johnDoe1);

    console.info('\n');
    for (let result of engine.run()) {
      console.info(`${result}`);
    }

  });
});