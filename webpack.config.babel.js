import path from 'path';

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
    publicPath: '/build/',
    filename: 'FakerDynamicValue.js',
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      test: /\.js?$/,
    }],
  },
};
