const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge');
const WebpackCommon = require('./common.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = WebpackMerge(WebpackCommon, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8
      }
    })
  ]
});
