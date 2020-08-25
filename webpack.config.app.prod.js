const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/ExampleApp',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve('dist/App')
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/main.css' }),
    new HtmlWebpackPlugin({ inject: true, template: 'src/ExampleApp/index.html' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new RemovePlugin({
      before: {
        include: ['./dist/App', './dist/App.zip']
      }
    })
  ],
};
