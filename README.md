# Paw-FakerDynamicValue

[![Build Status](https://img.shields.io/travis/REBELinBLUE/Paw-FakerDynamicValue/master.svg?style=flat-square&label=Travis+CI)](https://travis-ci.com/REBELinBLUE/Paw-FakerDynamicValue)
[![Code Coverage](https://img.shields.io/codecov/c/github/REBELinBLUE/Paw-FakerDynamicValue/master.svg?style=flat-square&label=Coverage)](https://codecov.io/gh/REBELinBLUE/Paw-FakerDynamicValue)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square&label=License)](/LICENSE.md)

A dynamic value extension for [Paw](http://paw.cloud) using [Faker](https://github.com/marak/Faker.js) to generate data.

## Usage

To use the extension simply insert the dynamic value from the right click menu > Add Dynamic Value.. > Extension > Faker.

Select the `language` for the data and the `category` of the data you wish to generate. Then enter the name of the `method` to call. Finally enter the `arguments`, these should be in exactly the same format as if you were writing the javascript directly (i.e. strings quoted and each argument separated by a comma).

### Examples

**Method with no arguments**

* *Category*: `Basic Random Data`
* *Method*: `uuid`

*Equivalent to*: `faker.random.uuid();`

**Method with single argument**

* *Category*: `Internet`
* *Method*: `password`
* *Arguments*: `8`

*Equivalent to*: `faker.internet.password(8);`

**Method with multiple arguments**

* *Category*: `Commerce`
* *Method*: `price`
* *Arguments*: `1.10, 5.00, 2, '£'`

*Equivalent to*: `faker.commerce.price(1.10, 5.00, 2, '£');`

**Method with an array argument**

* *Category*: `Basic Random Data`
* *Method*: `arrayElement`
* *Arguments*: `['one', 'two', 'three', 'four']`

*Equivalent to*: `faker.random.arrayElement(['one', 'two', 'three', 'four']);`

**Method with an object argument**

* *Category*: `Basic Random Data`
* *Method*: `number`
* *Arguments*: `{ min: 10, max: 100 }`

*Equivalent to*: `faker.random.number({ min: 10, max: 100 });`

See the [Faker wiki](https://github.com/Marak/faker.js/wiki) for the list of available categories, methods and the arguments.

## Installing

To install directly from source you will need to clone the repository and the build the code using the following commands

```bash
$ git clone https://github.com/REBELinBLUE/Paw-FakerDynamicValue.git
$ cd Paw-FakerDynamicValue
$ npm install
$ NODE_ENV=production make install
```

You can also download the latest build from the [releases](https://github.com/REBELinBLUE/Paw-FakerDynamicValue/releases) tab, then simply extract to the extensions directory. (See Paw > Extensions > Open Extensions Directory).

## License

Paw-FakerDynamicValue is licensed under [The MIT License (MIT)](/LICENSE.md).
