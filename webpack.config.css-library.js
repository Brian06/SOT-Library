const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/CSSLibrary',
  entry: {
    main: './src/CSSLibrary',
    BeenVerified: './src/CSSLibrary/BeenVerified',
    PeopleLooker: './src/CSSLibrary/PeopleLooker',
  },
  output: {
    path: path.resolve('dist/CSS-Library')
  },
  module: {
    rules: [
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new RemovePlugin({
      before: {
        include: ['./dist/CSS-Library']
      },
      after: {
        root: './dist',
        test: [
          {
            folder: './CSS-Library',
            method: (absoluteItemPath) => {
                return new RegExp(/\.js$/).test(absoluteItemPath);
            },
            recursive: true
          }
        ]
      }
    })
  ],
};
