import faker from 'faker';
import FakerGenerator from './FakerGenerator';
import { registerDynamicValueClass, InputField } from './Shims';

if (typeof Error.captureStackTrace === 'undefined') {
  Error.captureStackTrace = () => {};
}

// FIXME: Move this inline
function getLocaleList() {
  const locales = {};

  Object.keys(faker.locales).forEach((key) => {
    locales[key] = faker.locales[key].title;
  });

  return locales;
}

class FakerDynamicValues {
  static title = 'Faker';

  static identifier = 'com.rebelinblue.PawExtensions.FakerDynamicValues';

  static help = 'https://github.com/REBELinBLUE/paw-faker#readme';

  static inputs = [
    new InputField('locale', 'Language', 'Select', {
      choices: getLocaleList(),
      persisted: true,
      defaultValue: 'en',
    }),

    new InputField('category', 'Category', 'Select', {
      choices: {
        address: 'Address',
        random: 'Basic Random Data',
        commerce: 'Commerce',
        company: 'Company',
        date: 'Dates',
        finance: 'Finance',
        hacker: 'Hacker',
        image: 'Images',
        internet: 'Internet',
        name: 'Names',
        phone: 'Phone',
        lorem: 'Text',
        system: 'System',
      },
    }),

    new InputField('method', 'Method', 'String'),

    new InputField('options', 'Arguments', 'String'),
  ];

  constructor() {
    this.context = null;
  }

  title(context) {
    this.context = context;

    return FakerGenerator.title;
  }

  text(context) {
    this.context = context;

    // FIXME: Show an error if invalid!
    return this.method ? `${this.category}.${this.method}(${this.options})` : '';
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

registerDynamicValueClass(FakerDynamicValues);
