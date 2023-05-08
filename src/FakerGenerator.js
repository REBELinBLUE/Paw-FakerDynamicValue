import { faker}  from '@faker-js/faker';

export default class FakerGenerator {
  constructor(locale, category, method, args) {
    this.category = category;
    this.method = method;
    this.args = args;
    this.faker = faker;
    this.faker.locale = locale;
  }

  generate() {
    if (
      typeof this.faker[this.category] !== 'undefined'
      && typeof this.faker[this.category][this.method] !== 'undefined'
    ) {
      return eval(`this.faker.${this.category}.${this.method}(${this.args});`);
    }

    return '';
  }
}
