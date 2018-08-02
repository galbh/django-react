const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'babel-polyfill',
    '../assets/scss/main.scss',
    './main.jsx'
  ],

  context: resolve(__dirname, 'src'),

  devServer: {
    hot: true,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false
              }
            }
          ],
          publicPath: '/'
        })
      },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=images/[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?&name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc.js'),
          cache: false
        }
      }
    }),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      favicon: resolve(__dirname, 'assets/img/favicon.png'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify('http://localhost:3000')
    })
  ]
};

module.exports = config;
