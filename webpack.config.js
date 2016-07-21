var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
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
      path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ]
  }
};