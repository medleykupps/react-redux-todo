'use strict';

var webpack = require('webpack'),
  // HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'app');
  // ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  target: 'web',
  cache: true,
  entry: {
    common: ['react', 'react-redux'],
    app: './app/app.js',
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: '[name].js',
    pathInfo: true
  },

  module: {
    loaders: [
      {
        test: /\.js?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      // },
      // {
      //   test: /\.less$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      // },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/, 
        loader: 'file-loader'
      }            
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    //new HtmlWebpackPlugin({
    //  inject: true,
    //  template: 'src/index.html'
    //}),
    new webpack.NoErrorsPlugin(),
    
    // Removing plugin for now - can be used for less compilation
    // new ExtractTextPlugin('[name].css')
  ],

  debug: true,
  devtool: 'eval-cheap-module-source-map'
  /*
  ,
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
  */
};
