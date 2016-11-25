var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "dist");

var config = {
  entry: [
    DEV + "/index.jsx"
  ],
  output: {
    path: OUTPUT,
    filename: "[name].js"
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        include: [
          DEV
        ],
        // apply these rule even if rules are overridden (advanced option)
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
