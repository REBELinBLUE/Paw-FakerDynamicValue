import faker from 'faker';
import FakerGenerator from './FakerGenerator';
import { registerDynamicValueClass, InputField } from './__mocks__/shims';

function getLocaleList() {
  const locales = {};

  Object.keys(faker.locales).forEach((key) => {
    locales[key] = faker.locales[key].title;
  });

  return locales;
}

export default class FakerDynamicValue {
  static title = 'Faker';

  static identifier = 'com.rebelinblue.PawExtensions.FakerDynamicValue';

  static help = 'https://github.com/REBELinBLUE/Paw-FakerDynamicValue#readme';

  static inputs = [
    new InputField('locale', 'Language', 'Select', {
      choices: getLocaleList(),
      persisted: true,
    }),

    new InputField('category', 'Category', 'Select', {
      choices: {
        address: 'Address',
        random: 'Basic Random Data',
        commerce: 'Commerce',
        company: 'Company',
        database: 'Database',
        date: 'Dates',
        finance: 'Finance',
        git: 'Git',
        hacker: 'Hacker',
        helpers: 'Helpers',
        image: 'Images',
        internet: 'Internet',
        name: 'Names',
        phone: 'Phone',
        lorem: 'Text',
        system: 'System',
        time: 'Time',
        music: 'Music',
        vehicle: 'Vehicle',
      },
    }),

    new InputField('method', 'Method', 'String'),

    new InputField('options', 'Arguments', 'String'),
  ];

  constructor() {
    this.context = null;
    this.locale = null;
    this.category = null;
    this.method = null;
    this.options = null;
  }

  title(context) {
    this.context = context;

    return FakerDynamicValue.title;
  }

  text(context) {
    this.context = context;

    if (this.category && this.method) {
      return `${this.category}.${this.method}(${this.options ? this.options : ''})`;
    }

    return '';
  }

  evaluate(context) {
    this.context = context;

    const generator = new FakerGenerator(
      this.locale,
      this.category,
      this.method,
      this.options,
    );

    return generator.generate();
  }
}

registerDynamicValueClass(FakerDynamicValue);
