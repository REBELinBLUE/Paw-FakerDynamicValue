import { use, expect } from 'chai';
import dirtyChai from 'dirty-chai';

import FakerGenerator from '../src/FakerGenerator';

use(dirtyChai);

describe('FakerGenerator', () => {
  it('Returns an empty string if the category is invalid', () => {
    const generator = new FakerGenerator('en', 'invalid');

    const result = generator.generate();

    expect(result).to.be.empty();
  });

  it('Returns an empty string if the category is valid but the method is invalid', () => {
    const generator = new FakerGenerator('en', 'internet', 'invalid');

    const result = generator.generate();

    expect(result).to.be.empty();
  });

  // FIXME: This should use a spy rather than use the real class
  it('Calls faker', () => {
    const generator = new FakerGenerator('en', 'datatype', 'boolean');

    const result = generator.generate();

    expect(result).to.be.a('boolean');
  });

  // FIXME: This should use a spy rather than use the real class
  it('Passes the arguments to faker', () => {
    const generator = new FakerGenerator('en', 'datatype', 'number', '{ min: 10, max: 10 }');

    const result = generator.generate();

    expect(result).to.be.equal(10);
  });
});
