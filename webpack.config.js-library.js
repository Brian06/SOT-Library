const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/JSLibrary',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist/JS-Library')
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: ['./dist/JS-Library']
      }
    })
  ],
};
