import { use, expect } from 'chai';
import dirtyChai from 'dirty-chai';

import { registerDynamicValueClass, InputField } from '../src/Shims';

use(dirtyChai);

describe('Shims', () => {
  it('registerDynamicValueClass returns what is passed to it', () => {
    const expected = 'foo';

    expect(registerDynamicValueClass(expected)).to.be.equal(expected);
  });

  it('InputField uses the parameters', () => {
    const key = 'locale';
    const name = 'Locale';
    const type = 'Select';
    const options = { choices: { en: 'English' } };
    const prefix = 'prefix';

    const field = new InputField(key, name, type, options, prefix);

    expect(field.key).to.be.equal(key);
    expect(field.name).to.be.equal(name);
    expect(field.type).to.be.equal(type);
    expect(field.options).to.be.equal(options);
    expect(field.prefix).to.be.equal(prefix);
  });
});
