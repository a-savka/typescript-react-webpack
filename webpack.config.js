var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {

  entry: "./src/app.tsx",

  output: {
    path: path.resolve(__dirname, "release"),
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
    })

  ]

}

module.exports = config;
