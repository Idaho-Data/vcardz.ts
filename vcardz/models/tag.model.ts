import { Utility } from '../io/utility';
import { IAttributes } from './attributes.interface';
import assert = require('assert');
const MurmurHash3 = require('imurmurhash');


/**
 * A vCard tag *e.g.* `FN` in `FN:John Doe`.
 * Tags are created automatically by {@link Atom} and {@link Bag}
 * objects.
 *
 * @category models
 */
export class Tag {
  /**
   * @internal
   * @protected
   */
  protected _group: string = '';
  /**
   * @internal
   * @protected
   */
  protected _prop: string = '';
  /**
   * @internal
   * @protected
   */
  protected _attr: Map<string, Set<string>> = new Map<string, Set<string>>();


  /**
   * Creates a new `Tag` from a vCard field string.
   * @example
   * ```ts
   * let foo = new Tag('FN:John Doe');
   *
   * foo.prop === 'FN'
   * ```
   *
   * @example
   * ```ts
   * let foo = new Tag('item3.URL;type=pref:http\\://www.example.com/doe');
   *
   * foo.prop === 'URL';
   * foo.group === 'item3';
   * foo.attr === {TYPE: ['pref']}
   * ```
   *at
   * @param _data - vCard field string
   */
  public constructor(_data: string) {
    try {
      // negative look-behind assertion
      // only match ':' and not '\:'
      const tag = _data.split(Utility.vcardSplitRex)[0];
      const attrs = tag.split(';');

      // attrs.shift()! - means the variable is non=null/non-undefined
      this._prop = attrs.shift()!;
      const frags = this._prop.split('.');
      if (frags.length > 1) {
        this._group = frags[0];
        this._prop = frags[1].toUpperCase();
      } else {
        this._prop = this._prop.toUpperCase();
      }

      if (!attrs) {
        return;
      }
      attrs.forEach(token => {
        const [type, val] = token.split('=');
        this.setAttr(type, val.split(','));
      });

    } catch (ex) {
      this._prop = '';
      this._attr = new Map();
      return;
    }
  }

  protected setAttr(key: string, val: string[]) {
    key = key.toUpperCase();
    if (this._attr.has(key)) {
      let newSet = new Set(val);
      let oldSet = this._attr.get(key)!;
      let set = new Set([...oldSet, ...newSet]);
      this._attr.set(key, set);
    } else {
      this._attr.set(key, new Set(val));
    }
  }


  // properties
  //
  // hash
  /**
   * Returns a [MurmurHash3](https://github.com/jensyt/imurmurhash-js) value of the Tag
   */
  public get hash(): number {
    return MurmurHash3(this.toString()).result();
  }

  // group
  public get group(): string {
    return this._group;
  }

  public set group(val: string) {
    this._group = val;
  }

  // prop
  public get prop(): string {
    return this._prop;
  }

  public set prop(val: string) {
    this._prop = val;
  }


  /**
   * Get the tag's attributes
   * @example
   * ```ts
   * let foo = tag.attr;
   *
   * foo === {TYPE: ['pref']}
   * ```
   *
   * @returns
   * an object with `string` or `string[]` values
   */
  public get attr(): IAttributes {
    if (this._attr.size === 0) {
      return {};
    }

    return Array.from(this._attr.keys())
                .map(key => {
                  return {[key]: [...this._attr.get(key)!]};
                })
                .reduce((accum: any, curr: any) => {
                  Object.keys(curr)
                        .forEach(key => {
                          accum[key] = curr[key];
                        });
                  return accum;
                });
  }


  /**
   * Set the tag's attributes
   * @example
   * ```ts
   * tag.attr = {TYPE: ['pref']};
   * ```
   *
   * @param attributes - an object with `string` or `string[]` values
   */
  public set attr(attributes: IAttributes) {
    Object.keys(attributes)
          .forEach(key => {
            let val = attributes[key];
            if (typeof val === 'string') {
              val = [val];
            }
            this.setAttr(key, val);
          });
  }

  /**
   * Returns the tag's vCard string
   *
   * @example
   * ```ts
   * let foo = tag.toString();
   *
   * foo === 'item3.URL;TYPE=pref';
   * ```
   */
  public toString(): string {
    if (!this._prop) {
      return '';
    }

    let getprop = () => {
      let t = this._prop;
      if (this.group) {
        t = `${this._group}.${t}`;
      }
      return t;
    };

    if (!this._attr) {
      return getprop();
    }

    const attributes = Array.from(this._attr.keys())
                            .map(key => {
                              const set = this._attr.get(key)!;
                              const vals = [...set].join(',');
                              return `;${key}=${vals}`;
                            })
                            .join(',');
    return `${getprop()}${attributes}`;
  }


  /**
   * Called by `JSON.stringify`
   */
  public toJSON(): object {
    return {
      prop: this._prop,
      group: this._group,
      attr: this.attr
    };
  }


  /**
   * Create a `Tag` object from plain old object.
   * @param obj - object with tag properties
   *
   * @returns a `Tag` object if `obj` is valid; otherwise `undefined`
   *
   * @example
   * ```ts
   * const obj = {prop: 'URL', group: 'item3', attr: {TYPE: ['pref']}};
   * const tag = Tag.fromObject(obj);
   * ```
   */
  public static fromObject(obj: any): Tag {
    assert(obj !== undefined);

    if (!obj.hasOwnProperty('prop')) {
      throw new ReferenceError('missing "prop" field');
    }

    const tag = new Tag('');
    tag.prop = obj.prop;

    if (obj.hasOwnProperty('group')) {
      tag.group = obj.group;
    }

    if (obj.hasOwnProperty('attr')) {
      tag.attr = obj.attr;
    }

    return tag;
  }

}
