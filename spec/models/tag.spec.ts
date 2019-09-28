import { Tag } from '../../vcardz/models/tag.model';


describe('Tag', () => {
  it('parse a simple _tag', () => {
    const tag = new Tag('FN:Arnold Valent');
    expect(tag.property).toEqual('FN');
  });

  it('parse a _tag w/ type', () => {
    const tag = new Tag('TEL;TYPE=CELL:(404) 555-1234');
    expect(tag.property).toEqual('TEL');
  });

  it('_tag.types', () => {
    const tag = new Tag('TEL;TYPE=CELL,PRIMARY:(404) 555-1234');
    expect(tag.types).toEqual(['CELL','PRIMARY']);
  });

  it('_tag.toString', () => {
    const tag = new Tag('TEL;TYPE=CELL,PRIMARY:(404) 555-1234');
    expect(tag.toString()).toEqual('TEL;TYPE=CELL,PRIMARY');
  });

});