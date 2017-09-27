import path from 'path';
import webpack from 'webpack';

const production = (process.env.NODE_ENV === 'production');

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
    filename: production ? 'FakerDynamicValue.min.js' : 'FakerDynamicValue.js',
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      test: /\.js?$/,
    }],
  },
  plugins: production ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
};
