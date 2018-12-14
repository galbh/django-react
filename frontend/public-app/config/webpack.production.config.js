const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseDir = resolve(__dirname, '../');

const config = {
  devtool: 'cheap-module-source-map',

  entry: [
    'babel-polyfill',
    resolve(baseDir, 'assets', 'scss', 'main.scss'),
    resolve(baseDir, 'src', 'main.jsx')
  ],

  context: resolve(baseDir, 'src'),

  output: {
    filename: 'bundle.js',
    path: resolve(baseDir, 'dist', 'public'),
    publicPath: '/static/public/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(baseDir, 'src', 'index.html'),
      filename: 'index.html',
      favicon: resolve(baseDir, 'assets', 'img', 'favicon.png'),
      inject: 'body'
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
      API_HOST: JSON.stringify('')
    }),

    new ExtractTextPlugin({
      filename: './styles/style.css',
      disable: false,
      allChunks: true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader'
        ],
        exclude: resolve(baseDir, 'node_modules')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: resolve(baseDir, 'node_modules'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules=true&localIdentName=[hash:base64:5]',
            { loader: 'sass-loader', query: { sourceMap: false } }
          ],
          publicPath: '../'
        })
      },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' }
    ]
  }
};

module.exports = config;
