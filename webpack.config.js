var webpack = require("webpack");
    path = require('path');

var config = {
  context: path.join(__dirname, 'app'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js(x{0,1})$/,
        exclude: /node_modules/,
        loaders: ['babel', 'babel-loader?presets[]=react,presets[]=es2015'],
      },
     { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file" }
        
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