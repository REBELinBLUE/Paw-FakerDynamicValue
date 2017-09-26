import faker from 'faker';

export default class FakerGenerator {
  constructor(locale, category, method, args) {
    this.locale = locale;
    this.category = category;
    this.method = method;
    this.args = args || null;
  }

  generate() {
    faker.locale = this.locale;

    try {
      return this.callMethod();
    } catch (exception) {
      return '';
    }
  }

  callMethod() {
    // FIXME: Obvious this is a horrible hack, clean it up
    if (this.args !== null) {
      if (this.category === 'address') {
        if (this.method === 'streetAddress') {
          return this.streetAddress();
        } else if (this.method === 'state') {
          return this.state();
        } else if (this.method === 'city') {
          return this.city();
        } else if (this.method === 'zipCode') {
          return this.zipCode();
        }
      } else if (this.category === 'internet') {
        if (this.method === 'email') {
          return this.email();
        } else if (this.method === 'password') {
          return this.password();
        }
      }
    }

    return faker[this.category][this.method]();
  }

  getArgs() {
    return this.args.split(',');
  }

  argsIsArray() {
    return this.args.indexOf('[') !== -1;
  }

  argsIsBool() {
    return this.args.trim() === 'true';
  }

  password() {
    const args = this.getArgs();

    return faker.internet.password(
      parseInt(args[0], 10),
      args[1] ? args[1].trim() === 'true' : null,
    );
  }

  streetAddress() {
    return faker.address.streetAddress(this.argsIsBool());
  }

  state() {
    // FIXME: Seems you need to use stateAbbr for abbr
    return faker.address.state(this.argsIsBool());
  }

  city() {
    if (this.argsIsArray()) {
      // FIXME: Convert to array and call
      return 'array';
    }

    return faker.address.city(parseInt(this.args, 10));
  }

  zipCode() {
    return faker.address.zipCode(this.args);
  }

  email() {
    const args = this.getArgs();

    // FIXME: Change arguments so they are quoted correctly?
    return faker.internet.email(
      args[0].trim(),
      args[1] ? args[1].trim() : null,
      args[2] ? args[2].trim() : null,
    );
  }
}
