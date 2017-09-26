import path from 'path';

const name = 'FakerDynamicValues';
const production = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'web',
  entry: [
    'faker',
    './src/FakerDynamicValues.js',
  ],
  output: {
    path: path.join(
      __dirname,
      './build/com.rebelinblue.PawExtensions.FakerDynamicValues',
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
