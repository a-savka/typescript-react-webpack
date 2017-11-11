const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const parameters = require('./parameters');

const {
  ROOT
} = parameters();

module.exports = function() {

  return {

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
        },

        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }
      ]

    },

    plugins: [

      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      }),

      new ExtractTextPlugin('style.css', {
        allChunks: true
      })

    ]

  };
};
