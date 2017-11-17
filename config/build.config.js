const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge');
const WebpackCommon = require('./common.config');

// Plugins
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = WebpackMerge(WebpackCommon, {
  devtool: 'source-map',
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true
    })
  ]
});
