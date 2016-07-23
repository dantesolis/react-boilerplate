var webpack = reauire("webpack");
    path = require('path');
    OUTPUT = path.join(__dirname, 'www');
    CONTEXT = path.join(__dirname, 'src');

var config = {
  context: CONTEXT,
  entry: [
    './main.js',
  ],
  output: {
    path: OUTPUT,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
  },
};
module.exports = config;