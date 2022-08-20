import {
  Atom,
  vCard,
} from '../../vcardz/models';
import {
  vCardEngine,
  vCardReader,
} from '../../vcardz';
import { ErrorData} from '../data/errordata';
import assert = require('assert');


describe('Error tests', () => {
  it('malformed vCard string', () => {
    const buffer = ErrorData.Malformed_1.split('\n');
    const card = vCardReader.fromString(buffer);
    expect(card).toBeDefined();

    const engine = new vCardEngine(ErrorData.Malformed_1);
    const card2 = engine.run().next().value;
    expect(card2).toEqual(0);
  });


  it ('malformed vCard property', () => {
    const card = vCardReader.fromString(ErrorData.Malformed_Field_1.split('\n'));
    expect(card).toBeDefined();
  });
});
