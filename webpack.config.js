const path = require('path');
const fs = require('fs');
const externals = {};
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  PWD = __dirname
} = process.env;

fs.readdirSync('node_modules').filter((mod) => {
  return ['.bin'].indexOf(mod) === -1;
}).map((mod) => {
  externals[mod] = `commonjs ${mod}`;
});


module.exports = [{
  name: 'client',
  devtool: 'source-map',
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve(PWD, 'build'),
    filename: 'client.js'
  },
  target: 'web',
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      include: [path.resolve(PWD, 'client')],
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      loader: 'json-loader',
      test: /\.json$/,
      exclude: /node_modules/
    }, {
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]__[hash:base64:5]!sass?sourceMap'),
      test: /\.scss$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}, {
  name: 'server',
  devtool: 'source-map',
  entry: ['babel-polyfill', './server/index.js'],
  output: {
    path: path.resolve(PWD, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      include: [path.resolve(PWD, 'server'), path.resolve(PWD, 'client')],
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      loader: 'json-loader',
      test: /\.json$/,
      exclude: /node_modules/
    }, {
      loader: 'css-to-string!css!sass',
      test: /\.scss$/,
      exclude: /node_modules/
    }]
  },
  externals
}];
