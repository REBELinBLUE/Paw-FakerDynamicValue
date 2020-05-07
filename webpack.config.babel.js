import path from 'path';
import UglifyPlugin from 'uglifyjs-webpack-plugin';

const production = (process.env.NODE_ENV === 'production');

module.exports = {
  mode: production ? 'production' : 'development',
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
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  plugins: production ? [
    new UglifyPlugin({
      uglifyOptions: { warnings: false },
    }),
  ] : [],
};
