const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfigFactory = require('./webpack.common');

module.exports = function() {

  return webpackMerge(commonConfigFactory(), {

    plugins: [

      new webpack.optimize.UglifyJsPlugin({
        include: /\.js$/,
        minimize: true
      })

    ]

  });

};
