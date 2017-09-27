import { use, expect } from 'chai';
import dirtyChai from 'dirty-chai';

import FakerDynamicValues from '../src/FakerDynamicValues';

use(dirtyChai);

describe('FakerDynamicValues', () => {
  let dynamicValues;

  beforeEach(() => {
    dynamicValues = new FakerDynamicValues();
  });

  it('Should return the title', () => {
    expect(dynamicValues.title()).to.be.equal(FakerDynamicValues.title);
  });

  it('Should return empty text when no method or category are set', () => {
    expect(dynamicValues.text()).to.be.empty();
  });

  it('Should return empty text when no method is set', () => {
    dynamicValues.category = 'internet';

    expect(dynamicValues.text()).to.be.empty();
  });

  it('Should return empty text when no category is set', () => {
    dynamicValues.method = 'password';

    expect(dynamicValues.text()).to.be.empty();
  });

  it('Should return return the category and method when both are set', () => {
    dynamicValues.category = 'internet';
    dynamicValues.method = 'password';

    expect(dynamicValues.text()).to.be.equal('internet.password()');
  });

  it('Should return return the category and method with options when all are set', () => {
    dynamicValues.category = 'internet';
    dynamicValues.method = 'password';
    dynamicValues.options = '15, true';

    expect(dynamicValues.text()).to.be.equal('internet.password(15, true)');
  });

  // FIXME: This should use a spy rather than use the real class as now we are
  // testing something outside the scope of this test
  it('Should call the FakerGenerator', () => {
    // dynamicValues.locale = 'en';
    // dynamicValues.category = 'internet';
    // dynamicValues.method = 'password';
    // dynamicValues.options = '15, true';
    //
    // const result = dynamicValues.evaluate();
    //
    // expect(result.length).to.be.equal(15);
  });
});
