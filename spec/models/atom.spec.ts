import { Atom } from '../../vcardz/models/atom.model';


describe('Atom', () => {
  it('parse a simple atom', () => {
    const atom = new Atom('FN:Arnold Valent');
    expect(atom.tag.property).toEqual('FN');
    expect(atom.value).toEqual('Arnold Valent');
  });

  it('parse escape values', () => {
    const atom = new Atom('FN:Arnold Test 1\\,2\\:3\\; Valent');
    expect(atom.tag.property).toEqual('FN');
    expect(atom.value).toEqual('Arnold Test 1,2:3; Valent');
  });

  it('parse NOTE', () => {
    const atom = new Atom('NOTE:John Doe has a long and varied history\\, being documented on more police files that anyone else. Reports of his death are alas numerous.');
    expect(atom.tag.property).toEqual('NOTE');
    expect(atom.value).toEqual('John Doe has a long and varied history, being documented on more police files that anyone else. Reports of his death are alas numerous.');
  });
});