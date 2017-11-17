// Plugins
const Path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== 'production',
};

module.exports = {
  entry: {
    app: './src/js/bootstrap'
  },
  output: {
    path: Path.join(opts.rootDir, 'dist'),
    pathinfo: opts.devBuild,
    filename: 'js/bundle.js'
  },
  plugins: [
    // Extract css files to seperate bundle
    new ExtractTextPlugin('css/main.css'),
    // Copy fonts and images to dist
    new CopyWebpackPlugin([
      {from: 'src/fonts', to: 'fonts'},
      {from: 'src/img', to: 'img'}
    ]),
    // Show progress while building (in console)
    new ProgressBarPlugin()
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      },
      // Css-loader & sass-loader
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader?sourceMap', 'resolve-url-loader', 'sass-loader']
          }
        )
      },
      // Load fonts
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'url-loader',
        options: {
          limit: 100000
        }
      },
      // Load images
      {
        test   : /\.(png|jpg|jpeg|gif?)(\?[a-z0-9=&.]+)?$/,
        loader : 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules'],
    alias: {
      request$: 'xhr'
    }
  }
}
