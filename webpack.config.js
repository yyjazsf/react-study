const webpack = require('webpack');
const path = require('path');

const DEV = path.resolve(__dirname, 'src');
const OUTPUT = path.resolve(__dirname, 'dist');

const config = {
  // the home directory for webpack
  // the entry and module.rules.loader option
  // is resolved relative to this directory
  context: __dirname, // string (absolute path!)

  // https://webpack.js.org/guides/code-splitting/
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: OUTPUT,
    filename: 'app.js', // [name].js
    publicPath: '/static/',
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   include: [DEV],
      //   use: ['eslint-loader'],
      // },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [DEV],
        use: ['babel-loader'],
      },
    ],
  },
  // devtool: "source-map", // enum
  // devtool: "inline-source-map", // inlines SourceMap into orginal file
  // devtool: "eval-source-map", // inlines SourceMap per module
  // devtool: "hidden-source-map", // SourceMap without reference in original file
  // devtool: "cheap-source-map", // cheap-variant of SourceMap without module mappings
  // devtool: "cheap-module-source-map", // cheap-variant of SourceMap with module mappings
  // devtool: "eval",
  devtool: 'source-map',

  // Don't follow/bundle these modules, but request them at runtime from the environment
  // externals: "react",
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules
  target: 'web',
  // devServer: {
  //   host: '0.0.0.0', // binds to all hosts
  //   port: 8081,
  //   inline: true,
  //   contentBase: 'dist',
  // },
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     tslint: {
    //       emitErrors: true,
    //       failOnHint: true,
    //     },
    //   },
    // }),
  ],
};

module.exports = config;
