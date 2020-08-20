const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: "babel-loader",
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
  plugins: [new MiniCssExtractPlugin()],
};
