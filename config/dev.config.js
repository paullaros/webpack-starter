const WebpackMerge = require('webpack-merge');
const WebpackCommon = require('./common.config');

module.exports = WebpackMerge(WebpackCommon, {
  // Use cheap-source-maps for faster builds
  devtool: 'inline-eval-cheap-source-map'
});
