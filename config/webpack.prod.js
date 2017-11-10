const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const parameters = require('./parameters');
const webpack = require('webpack');

const {
  ROOT
} = parameters();

const config = {

  entry: "./src/app.tsx",

  output: {
    path: path.resolve(ROOT, "release"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {

    loaders: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: "/node_modules/"
      }
    ]

  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),

    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true
    })

  ]

}

module.exports = config;
