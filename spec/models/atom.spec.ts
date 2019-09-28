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
});