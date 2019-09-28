import { Tag } from '../../vcardz/models/tag.model';


describe('Tag', () => {
  it('parse a simple tag', () => {
    const tag = new Tag('FN:Arnold Valent');
    expect(tag.group).toEqual('');
    expect(tag.property).toEqual('FN');
  });

  it('parse a tag w/ type', () => {
    const tag = new Tag('TEL;TYPE=CELL:(404) 555-1234');
    expect(tag.property).toEqual('TEL');
  });

  it('parse an item.tag', () => {
    const tag = new Tag('item1.ADR;type=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA');
    expect(tag.property).toEqual('ADR');
  });

  it('tag.types', () => {
    const tag = new Tag('TEL;TYPE=CELL,PRIMARY:(404) 555-1234');
    expect(tag.attributes).toEqual({'TYPE': ['CELL','PRIMARY']});
  });

  it('tag.toString', () => {
    const tag = new Tag('TEL;TYPE=CELL,PRIMARY:(404) 555-1234');
    expect(tag.toString()).toEqual('TEL;TYPE=CELL,PRIMARY');
  });

  it('parse NOTE', () => {
    const tag = new Tag('NOTE:John Doe has a long and varied history\\, being documented on more police files that anyone else. Reports of his death are alas numerous.');
    expect(tag.property).toEqual('NOTE');
  });

  it('multiple tag attributes w/ same name', () => {
    const tag = new Tag('EMAIL;type=INTERNET;type=WORK;type=pref:johnDoe@example.org');
    expect(tag.attributes).toEqual({'TYPE': ['INTERNET', 'WORK', 'pref']});
  });

  it('properties w/ sequences', () => {
    const tag = new Tag('item1.ADR;type=WORK:;;2 Enterprise Avenue;Worktown;NY;01111;USA');
    expect(tag.group).toEqual('item1');
    expect(tag.property).toEqual('ADR');
    expect(tag.toString()).toEqual('item1.ADR;TYPE=WORK');
  });
});