import path from 'path';

const name = 'FakerDynamicValue';
const production = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'web',
  entry: [
    'faker',
    './src/FakerDynamicValue.js',
  ],
  output: {
    path: path.join(
      __dirname,
      './build/com.rebelinblue.PawExtensions.FakerDynamicValue',
    ),
    pathInfo: true,
    publicPath: '/build/',
    filename: `${name}.js`,
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      test: /\.js?$/,
    }],
  },
};
