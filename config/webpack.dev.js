const webpackMerge = require('webpack-merge');
const commonConfigFactory = require('./webpack.common');

module.exports = function() {

  return webpackMerge(commonConfigFactory(), {});

};
