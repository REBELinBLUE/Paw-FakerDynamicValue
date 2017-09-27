import { use, expect } from 'chai';
import dirtyChai from 'dirty-chai';

import FakerGenerator from '../src/FakerGenerator';

use(dirtyChai);

describe('FakerGenerator', () => {
  it('Calls faker', () => {
    const generator = new FakerGenerator('en', 'random', 'boolean');

    const result = generator.generate();

    expect(result).to.be.a('boolean');
  });
});
