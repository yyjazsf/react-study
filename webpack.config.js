const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "dist");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: 'index.html',
  inject: 'body',
});

var config = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: OUTPUT,
    filename: "[name].js"
  },
  module:{
    rules:[
      {
        enforce:'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [DEV],
        // apply these rule even if rules are overridden (advanced option)
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [DEV],
        // apply these rule even if rules are overridden (advanced option)
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    inline: true,
    port: 8080,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.LoaderOptionsPlugin({
        options: {
            tslint: {
                emitErrors: true,
                failOnHint: true
            }
        }
    })
  ],
};

module.exports = config;
