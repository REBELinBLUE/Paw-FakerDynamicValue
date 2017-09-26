import faker from 'faker';

export default class FakerGenerator {
  constructor(locale, category, method, options) {
    this.locale = locale;
    this.category = category;
    this.method = method;
    this.options = options || null;
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
    // if (this.options) {
    //   if (this.category === 'address') {
    //     if (this.method === 'streetAddress') {
    //       return this.streetAddress();
    //     } else if (this.method === 'state') {
    //       return this.state();
    //     } else if (this.method === 'city') {
    //       return this.city();
    //     } else if (this.method === 'zipcode') {
    //       return this.zipcode();
    //     }
    //   } else if (this.category === 'internet') {
    //     if (this.method === 'email') {
    //       return this.email();
    //     } else if (this.method === 'password') {
    //       return this.password();
    //     }
    //   }
    // }

    return faker[this.category][this.method]();
  }

  // getArgs() {
  //   return this.options.split(',');
  // }
  //
  // optionsIsArray() {
  //   return this.options.indexOf('[') !== -1;
  // }

  // password() {
  //   const args = this.getArgs();
  //
  //   return faker.internet.password(
  //     parseInt(args[0], 10),
  //     args[1] ? args[1].trim() === 'true' : null,
  //   );
  // }
  //
  // streetAddress() {
  //   return faker.address.streetAddress(this.options.trim() === 'true');
  // }
  //
  // state() {
  //   // FIXME: Seems you need to use stateAbbr for abbr
  //   return faker.address.state(this.options.trim() === 'true');
  // }
  //
  // city() {
  //   if (this.optionsIsArray()) {
  //     // FIXME: Convert to array and call
  //     return 'array';
  //   }
  //
  //   return faker.address.city(parseInt(this.options, 10));
  // }
  //
  // zipcode() {
  //   return faker.address.zipCode(this.options);
  // }
  //
  // email() {
  //   const args = this.getArgs();
  //
  //   return faker.internet.email(
  //     args[0].trim(),
  //     args[1] ? args[1].trim() : null,
  //     args[2] ? args[2].trim() : null,
  //   );
  // }
}
