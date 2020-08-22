const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/ExampleApp/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist/App')
  },
  devtool: 'inline-source-map',
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ inject: true, template: 'src/ExampleApp/index.html' })
  ],
};
