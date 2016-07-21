var path = require('path');

module.exports = {
  // context: path.join(__dirname, '../src/client/scripts/client.js'),
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
      }
    ]
  },
  resolveLoader: {
    root: [
      path.resolve(__dirname, '../node_modules')
    ]
  },
  resolve: {
    root: [
    path.resolve(__dirname, '../node_modules')
    ]
  }
};