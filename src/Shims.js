if (
  typeof registerDynamicValueClass === 'undefined' ||
  typeof InputField === 'undefined'
) {
  class InputField {
    constructor(key, name, type, options, prefix = '') {
      this.obj = { key, name, type, options };
      this.prefix = prefix;
    }
  }

  module.exports = {
    registerDynamicValueClass: _class => _class,
    InputField,
  };
} else {
  /* eslint-disable no-undef */
  module.exports = { registerDynamicValueClass, InputField };
  /* eslint-enable no-undef */
}
